import { z } from "zod";

/**
 * skills 列表条目 schema。
 */
export const mcpSkillListItemSchema = z.object({
  name: z.string().describe("skill 名称。"),
  description: z.string().describe("skill 的简要描述。"),
});

/**
 * MCP skills 列表结果 schema。
 */
export const mcpListSkillsSchema = z.object({
  items: z.array(mcpSkillListItemSchema).describe("当前可用的 skill 列表。"),
});

/**
 * MCP 单个 skill 详情结果 schema。
 */
export const mcpSkillFileListItemSchema = z.object({
  path: z
    .string()
    .describe(
      "Relative path to a readable support file inside the skill directory. Pass this exact value to get_skill_file.",
    ),
  size: z.number().int().nonnegative().describe("文件大小，单位为字节。"),
  type: z
    .string()
    .describe(
      "Inferred text content type, useful for deciding whether the file is a reference, script, template, or data file.",
    ),
});

/**
 * skill 辅助文件树 schema。
 */
export const mcpSkillSupportFileTreeNodeSchema = z.lazy(() =>
  z.discriminatedUnion("type", [
    z.object({
      name: z.string().describe("Directory name."),
      type: z.literal("directory"),
      children: z
        .array(mcpSkillSupportFileTreeNodeSchema)
        .describe("Child directories and files."),
    }),
    z.object({
      name: z.string().describe("File name."),
      type: z.literal("file"),
      path: z
        .string()
        .describe("Relative file path. Pass this exact value to get_skill_file."),
      size: z.number().int().nonnegative().describe("File size in bytes."),
      contentType: z.string().describe("Inferred text content type."),
    }),
  ]),
);

export const mcpSkillSupportFilesSchema = z.object({
  tree: mcpSkillSupportFileTreeNodeSchema.describe(
    "Structured directory tree of readable support files. Traverse file nodes and use file.path as get_skill_file input.",
  ),
  files: z
    .array(mcpSkillFileListItemSchema)
    .describe(
      "Readable support files for this skill. Pass one of these exact paths to get_skill_file.",
    ),
});

/**
 * MCP 单个 skill 详情结果 schema。
 */
export const mcpSkillDetailSchema = mcpSkillListItemSchema.extend({
  content: z
    .string()
    .describe("去掉 frontmatter 后的 Markdown skill 正文内容。"),
  supportFiles: mcpSkillSupportFilesSchema.describe(
    "Readable support files discovered in the same skill directory. Use tree to browse and files[].path as exact get_skill_file input.",
  ),
});

/**
 * MCP skill 辅助文件列表结果 schema。
 */
export const mcpSkillFileListSchema = z.object({
  name: z.string().describe("skill 名称。"),
  tree: mcpSkillSupportFilesSchema.shape.tree,
  files: mcpSkillSupportFilesSchema.shape.files.describe(
    "Readable support files for this skill. If empty, the skill is self-contained or has no readable support files.",
  ),
});

/**
 * MCP 单个 skill 辅助文件结果 schema。
 */
export const mcpSkillFileDetailSchema = mcpSkillFileListItemSchema.extend({
  name: z.string().describe("skill 名称。"),
  content: z
    .string()
    .describe("UTF-8 text content of the requested skill support file."),
});

/**
 * MCP 获取单个 skill 输入 schema。
 */
export const mcpGetSkillInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1)
    .describe("Exact skill name returned by list_skills."),
});

/**
 * MCP 获取 skill 辅助文件列表输入 schema。
 */
export const mcpListSkillFilesInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1)
    .describe("Exact skill name returned by list_skills or get_skill."),
});

/**
 * MCP 获取单个 skill 辅助文件输入 schema。
 */
export const mcpGetSkillFileInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1)
    .describe("Exact skill name returned by list_skills or get_skill."),
  path: z
    .string()
    .trim()
    .min(1)
    .describe(
      "Relative file path returned by get_skill supportFiles.files or list_skill_files files. Do not guess paths.",
    ),
});

/**
 * `list_skills` 对外返回的最小 skill 摘要。
 */
export type SkillListItem = z.infer<typeof mcpSkillListItemSchema>;

/**
 * `get_skill` 对外返回的完整 skill 详情。
 */
export type SkillDetail = z.infer<typeof mcpSkillDetailSchema>;

/**
 * `list_skill_files` 对外返回的 skill 辅助文件摘要。
 */
export type SkillFileListItem = z.infer<typeof mcpSkillFileListItemSchema>;

/**
 * `list_skill_files` 对外返回的完整结果。
 */
export type SkillFileList = z.infer<typeof mcpSkillFileListSchema>;

/**
 * `get_skill_file` 对外返回的完整结果。
 */
export type SkillFileDetail = z.infer<typeof mcpSkillFileDetailSchema>;

/**
 * skills 注册表内部使用的完整 skill 记录。
 */
export interface LoadedSkill extends SkillDetail {
  sourcePath: string;
}
