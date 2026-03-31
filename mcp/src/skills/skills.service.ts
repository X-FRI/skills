import { Injectable, NotFoundException } from "@nestjs/common";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { Inject } from "@nestjs/common";
import { SKILLS_MODULE_OPTIONS, SkillsModuleOptions } from "../common/constants";
import type { LoadedSkill, SkillDetail, SkillListItem } from "../common/types";

/**
 * 用于匹配技能文件头部 YAML frontmatter 的正则表达式。
 */
const FRONTMATTER_PATTERN = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;

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
}
