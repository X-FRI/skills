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
export const mcpSkillDetailSchema = mcpSkillListItemSchema.extend({
  content: z
    .string()
    .describe("去掉 frontmatter 后的 Markdown skill 正文内容。"),
});

/**
 * MCP 获取单个 skill 输入 schema。
 */
export const mcpGetSkillInputSchema = z.object({
  name: z.string().trim().min(1).describe("要获取的 skill 名称。"),
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
 * skills 注册表内部使用的完整 skill 记录。
 */
export interface LoadedSkill extends SkillDetail {
  sourcePath: string;
}
