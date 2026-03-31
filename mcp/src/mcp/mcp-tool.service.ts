import { Injectable } from "@nestjs/common";
import { Context, Tool } from "@rekog/mcp-nest";
import { z } from "zod";
import { SkillsService } from "../skills/skills.service";
import {
  mcpGetSkillInputSchema,
  mcpListSkillsSchema,
  mcpSkillDetailSchema,
} from "../common/types";

/**
 * MCP 获取单个技能的输入。
 */
type McpGetSkillInput = z.infer<typeof mcpGetSkillInputSchema>;

/**
 * MCP 工具服务。
 *
 * 所有工具都严格围绕 skills 注册表执行。
 */
@Injectable()
export class McpToolService {
  /**
   * 初始化 MCP 工具服务。
   *
   * @param skillsService - 本地技能注册表服务。
   */
  constructor(private readonly skillsService: SkillsService) {}

  @Tool({
    name: "list_skills",
    description: "返回当前 MCP 服务内置的技能摘要列表，仅包含名称和描述。",
    outputSchema: mcpListSkillsSchema,
  })
  listSkills(_args: Record<string, never> = {}, _context?: Context) {
    return {
      items: this.skillsService.listSkills(),
    };
  }

  @Tool({
    name: "get_skill",
    description:
      "按名称返回单个技能的详情，内容为去掉 frontmatter 后的 Markdown 正文。",
    parameters: mcpGetSkillInputSchema,
    outputSchema: mcpSkillDetailSchema,
  })
  getSkill(input: McpGetSkillInput, _context?: Context) {
    return this.skillsService.getSkillByName(input.name);
  }
}
