import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { Inject } from "@nestjs/common";
import { SKILLS_MODULE_OPTIONS, SkillsModuleOptions } from "../common/constants";
import type {
  LoadedSkill,
  SkillDetail,
  SkillFileDetail,
  SkillFileList,
  SkillFileListItem,
  SkillListItem,
} from "../common/types";

type SkillSupportFileTreeNode =
  | {
      name: string;
      type: "directory";
      children: SkillSupportFileTreeNode[];
    }
  | {
      name: string;
      type: "file";
      path: string;
      size: number;
      contentType: string;
    };

type WorkingDirectoryNode = {
  name: string;
  type: "directory";
  children: Map<string, WorkingDirectoryNode | SkillSupportFileTreeNode>;
};

/**
 * 用于匹配技能文件头部 YAML frontmatter 的正则表达式。
 */
const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

/**
 * 单个辅助文件的最大读取大小，避免一次 MCP 调用撑爆上下文。
 */
const MAX_SKILL_FILE_SIZE_BYTES = 256 * 1024;

/**
 * 默认通过 MCP 暴露的文本文件扩展名。
 */
const READABLE_FILE_TYPES = new Map<string, string>([
  [".md", "text/markdown"],
  [".mdx", "text/markdown"],
  [".txt", "text/plain"],
  [".json", "application/json"],
  [".yaml", "application/yaml"],
  [".yml", "application/yaml"],
  [".sh", "text/x-shellscript"],
  [".ts", "text/typescript"],
  [".tsx", "text/typescript"],
  [".js", "text/javascript"],
  [".jsx", "text/javascript"],
  [".mjs", "text/javascript"],
  [".cjs", "text/javascript"],
  [".css", "text/css"],
  [".html", "text/html"],
]);

/**
 * 递归列文件时跳过的目录，避免暴露依赖、构建产物和 VCS 元数据。
 */
const IGNORED_DIRECTORIES = new Set([
  ".git",
  "dist",
  "build",
  "coverage",
  "node_modules",
]);

/**
 * skills 本地注册表服务。
 *
 * 该服务在启动时一次性扫描本地 skills 目录下每个一级子目录中的 `SKILL.md`，
 * 解析 frontmatter 与正文，并在内存中维护只读注册表。
 */
@Injectable()
export class SkillsService {
  /**
   * 按 skill 名称索引的只读注册表。
   */
  private readonly skillRegistry = new Map<string, LoadedSkill>();

  /**
   * 初始化 skills 注册表。
   *
   * @param options - skills 模块运行时配置。
   */
  constructor(
    @Inject(SKILLS_MODULE_OPTIONS)
    private readonly options: SkillsModuleOptions,
  ) {
    this.loadSkillRegistry();
  }

  /**
   * 返回当前可见的 skills 摘要列表。
   *
   * @returns 仅包含名称和描述的 skills 列表，并按名称稳定排序。
   */
  listSkills(): SkillListItem[] {
    return [...this.skillRegistry.values()]
      .map((skill) => ({
        name: skill.name,
        description: skill.description,
      }))
      .sort((left, right) => left.name.localeCompare(right.name, "en"));
  }

  /**
   * 按名称获取单个 skill 的详情。
   *
   * @param name - 要查询的 skill 名称。
   * @returns 去掉 frontmatter 后的 skill 正文内容。
   * @throws {NotFoundException} 当 skill 不存在时抛出异常。
   */
  getSkillByName(name: string): SkillDetail {
    const normalizedName = name.trim();
    const skill = this.skillRegistry.get(normalizedName);

    if (!skill) {
      throw new NotFoundException(`未找到名为 ${normalizedName} 的 skill。`);
    }

    return {
      name: skill.name,
      description: skill.description,
      content: skill.content,
      supportFiles: this.getSkillSupportFiles(skill),
    };
  }

  /**
   * 列出单个 skill 目录下可通过 MCP 读取的辅助文本文件。
   *
   * `SKILL.md` 本身仍由 `get_skill` 返回；这里仅返回 references、scripts、
   * templates 等辅助文件。
   *
   * @param name - skill 名称。
   * @returns 可读取辅助文件列表。
   */
  listSkillFiles(name: string): SkillFileList {
    const skill = this.resolveSkill(name);
    const supportFiles = this.getSkillSupportFiles(skill);

    return {
      name: skill.name,
      ...supportFiles,
    };
  }

  /**
   * 读取单个 skill 辅助文件。
   *
   * @param name - skill 名称。
   * @param filePath - 相对于 skill 目录的文件路径。
   * @returns 文件内容与元数据。
   */
  getSkillFile(name: string, filePath: string): SkillFileDetail {
    const skill = this.resolveSkill(name);
    const skillDir = dirname(skill.sourcePath);
    const normalizedPath = this.normalizeSkillFilePath(skillDir, filePath);

    if (normalizedPath === "SKILL.md") {
      throw new BadRequestException(
        "SKILL.md is returned by get_skill; request a support file instead.",
      );
    }

    const absolutePath = join(skillDir, normalizedPath);

    if (!existsSync(absolutePath) || !statSync(absolutePath).isFile()) {
      throw new NotFoundException(
        `未找到 skill ${skill.name} 的辅助文件 ${normalizedPath}。`,
      );
    }

    const fileInfo = this.getReadableFileInfo(skillDir, absolutePath);
    if (!fileInfo) {
      throw new BadRequestException(
        `Skill file ${normalizedPath} is not an allowed readable text file.`,
      );
    }

    return {
      name: skill.name,
      ...fileInfo,
      content: readFileSync(absolutePath, "utf8"),
    };
  }

  /**
   * 扫描本地 skills 目录并构建只读注册表。
   */
  private loadSkillRegistry() {
    // 1. 本地 skills 根目录不存在时，直接返回空注册表，兼容开发中的最小环境。
    if (!existsSync(this.options.rootDir)) {
      console.warn(`Skills directory not found: ${this.options.rootDir}`);
      return;
    }

    console.log(`Loading skills from: ${this.options.rootDir}`);

    // 2. 只扫描一级目录下的 `SKILL.md`，忽略文件和更深层级内容。
    const entries = readdirSync(this.options.rootDir, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      const skillPath = join(this.options.rootDir, entry.name, "SKILL.md");
      if (!existsSync(skillPath) || !statSync(skillPath).isFile()) {
        continue;
      }

      // 3. 解析 skill 文件并校验名称唯一性，避免运行时出现歧义。
      try {
        const loadedSkill = this.parseSkillFile(skillPath);

        if (this.skillRegistry.has(loadedSkill.name)) {
          console.warn(`Duplicate skill name detected: ${loadedSkill.name}`);
          continue;
        }

        this.skillRegistry.set(loadedSkill.name, loadedSkill);
        console.log(`Loaded skill: ${loadedSkill.name}`);
      } catch (error) {
        console.warn(`Failed to load skill from ${skillPath}:`, error);
      }
    }

    console.log(`Total skills loaded: ${this.skillRegistry.size}`);
  }

  /**
   * 解析单个 skill 文件的 frontmatter 与正文。
   *
   * @param skillPath - skill 文件绝对路径。
   * @returns 解析后的完整 skill 记录。
   * @throws {Error} 当文件缺少合法 frontmatter 时抛出异常。
   */
  private parseSkillFile(skillPath: string): LoadedSkill {
    // 1. 先读取原始 Markdown 内容，并匹配文件头的 YAML frontmatter。
    const rawContent = readFileSync(skillPath, "utf8");
    const frontmatterMatch = rawContent.match(FRONTMATTER_PATTERN);

    if (!frontmatterMatch) {
      throw new Error(`Skill file ${skillPath} is missing YAML frontmatter.`);
    }

    // 2. 再解析必要元数据，并剥离 frontmatter 后保留正文原文。
    const metadata = this.parseFrontmatter(frontmatterMatch[1], skillPath);
    const markdownContent = rawContent.slice(frontmatterMatch[0].length).trim();

    return {
      name: metadata.name,
      description: metadata.description,
      content: markdownContent,
      sourcePath: skillPath,
    };
  }

  /**
   * 解析 skill frontmatter 中的必要字段。
   *
   * @param frontmatter - 原始 YAML frontmatter 文本。
   * @param skillPath - 当前 skill 文件路径。
   * @returns 解析后的名称与描述字段。
   * @throws {Error} 当缺少必要字段时抛出异常。
   */
  private parseFrontmatter(frontmatter: string, skillPath: string) {
    // 1. 逐行提取简单的 `key: value` 结构，当前阶段只关心 name 和 description。
    const metadata = new Map<string, string>();

    for (const rawLine of frontmatter.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith("#")) {
        continue;
      }

      const separatorIndex = line.indexOf(":");
      if (separatorIndex <= 0) {
        continue;
      }

      const key = line.slice(0, separatorIndex).trim();
      const rawValue = line.slice(separatorIndex + 1).trim();
      const value = rawValue.replace(/^['"]|['"]$/g, "");

      metadata.set(key, value);
    }

    // 2. 校验最小必填元数据，避免对外暴露不完整的 skill 记录。
    const name = metadata.get("name")?.trim();
    const description = metadata.get("description")?.trim();

    if (!name || !description) {
      throw new Error(
        `Skill file ${skillPath} must define both name and description.`,
      );
    }

    return {
      name,
      description,
    };
  }

  /**
   * 按名称获取 skill，不存在时抛出统一错误。
   */
  private resolveSkill(name: string): LoadedSkill {
    const normalizedName = name.trim();
    const skill = this.skillRegistry.get(normalizedName);

    if (!skill) {
      throw new NotFoundException(`未找到名为 ${normalizedName} 的 skill。`);
    }

    return skill;
  }

  /**
   * 构建单个 skill 的辅助文件树与可读文件列表。
   */
  private getSkillSupportFiles(skill: LoadedSkill) {
    const files = this.collectReadableFiles(dirname(skill.sourcePath));

    return {
      tree: this.buildSupportFileTree(skill.name, files),
      files,
    };
  }

  /**
   * 递归收集 skill 目录中的可读辅助文件。
   */
  private collectReadableFiles(skillDir: string): SkillFileListItem[] {
    const files: SkillFileListItem[] = [];

    const visit = (currentDir: string) => {
      for (const entry of readdirSync(currentDir, { withFileTypes: true })) {
        if (entry.name.startsWith(".")) {
          continue;
        }

        const absolutePath = join(currentDir, entry.name);

        if (entry.isDirectory()) {
          if (IGNORED_DIRECTORIES.has(entry.name)) {
            continue;
          }

          visit(absolutePath);
          continue;
        }

        if (!entry.isFile()) {
          continue;
        }

        const fileInfo = this.getReadableFileInfo(skillDir, absolutePath);
        if (fileInfo) {
          files.push(fileInfo);
        }
      }
    };

    visit(skillDir);

    return files.sort((left, right) =>
      left.path.localeCompare(right.path, "en"),
    );
  }

  /**
   * 返回可读辅助文件元数据；不可读文件返回 undefined。
   */
  private getReadableFileInfo(
    skillDir: string,
    absolutePath: string,
  ): SkillFileListItem | undefined {
    const relativePath = relative(skillDir, absolutePath).replace(/\\/g, "/");

    if (
      relativePath === "SKILL.md" ||
      !this.isReadableRelativePath(relativePath)
    ) {
      return undefined;
    }

    const contentType = READABLE_FILE_TYPES.get(extname(relativePath));
    if (!contentType) {
      return undefined;
    }

    const stat = statSync(absolutePath);
    if (stat.size > MAX_SKILL_FILE_SIZE_BYTES) {
      return undefined;
    }

    return {
      path: relativePath,
      size: stat.size,
      type: contentType,
    };
  }

  /**
   * 规范化用户传入的相对路径，并阻止越过 skill 目录。
   */
  private normalizeSkillFilePath(skillDir: string, filePath: string): string {
    const requestedPath = filePath.trim();

    if (
      !requestedPath ||
      requestedPath.startsWith("/") ||
      requestedPath.includes("\0")
    ) {
      throw new BadRequestException("Invalid skill file path.");
    }

    const absoluteSkillDir = resolve(skillDir);
    const absolutePath = resolve(absoluteSkillDir, requestedPath);
    const relativePath = relative(absoluteSkillDir, absolutePath);

    if (
      !relativePath ||
      relativePath === ".." ||
      relativePath.startsWith("../") ||
      relativePath.startsWith("..\\") ||
      relativePath.startsWith("/") ||
      relativePath.includes("\0")
    ) {
      throw new BadRequestException("Invalid skill file path.");
    }

    return relativePath.replace(/\\/g, "/");
  }

  /**
   * 检查相对路径是否属于可通过 MCP 暴露的辅助文件范围。
   */
  private isReadableRelativePath(relativePath: string): boolean {
    return relativePath
      .split("/")
      .every(
        (segment) =>
          segment &&
          !segment.startsWith(".") &&
          !IGNORED_DIRECTORIES.has(segment),
      );
  }

  /**
   * 将可读辅助文件列表转换为结构化目录树。
   */
  private buildSupportFileTree(
    skillName: string,
    files: SkillFileListItem[],
  ): SkillSupportFileTreeNode {
    const root: WorkingDirectoryNode = {
      name: skillName,
      type: "directory",
      children: new Map(),
    };

    for (const file of files) {
      let current = root;
      const segments = file.path.split("/");

      segments.forEach((segment, index) => {
        const isFile = index === segments.length - 1;

        if (isFile) {
          current.children.set(segment, {
            name: segment,
            type: "file",
            path: file.path,
            size: file.size,
            contentType: file.type,
          });
          return;
        }

        const existingNode = current.children.get(segment);
        if (existingNode?.type === "directory") {
          current = existingNode as WorkingDirectoryNode;
          return;
        }

        const directoryNode: WorkingDirectoryNode = {
          name: segment,
          type: "directory",
          children: new Map(),
        };
        current.children.set(segment, directoryNode);
        current = directoryNode;
      });
    }

    return this.serializeSupportFileTree(root);
  }

  /**
   * 将构建阶段使用的 Map 目录树转换为 JSON 可序列化节点。
   */
  private serializeSupportFileTree(
    node: WorkingDirectoryNode,
  ): SkillSupportFileTreeNode {
    const children: SkillSupportFileTreeNode[] = [...node.children.values()]
      .map((childNode): SkillSupportFileTreeNode => {
        if (
          childNode.type === "directory" &&
          childNode.children instanceof Map
        ) {
          return this.serializeSupportFileTree(
            childNode as WorkingDirectoryNode,
          );
        }

        return childNode as SkillSupportFileTreeNode;
      })
      .sort((left, right) => {
        if (left.type !== right.type) {
          return left.type === "file" ? -1 : 1;
        }

        return left.name.localeCompare(right.name, "en");
      });

    return {
      name: node.name,
      type: "directory",
      children,
    };
  }
}
