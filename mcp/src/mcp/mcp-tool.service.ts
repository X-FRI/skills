import { Injectable } from "@nestjs/common";
import { Context, Tool } from "@rekog/mcp-nest";
import { z } from "zod";
import { SkillsService } from "../skills/skills.service";
import {
  mcpGetSkillFileInputSchema,
  mcpGetSkillInputSchema,
  mcpListSkillFilesInputSchema,
  mcpSkillFileDetailSchema,
  mcpSkillFileListSchema,
  mcpListSkillsSchema,
  mcpSkillDetailSchema,
} from "../common/types";

/**
 * MCP 获取单个技能的输入。
 */
type McpGetSkillInput = z.infer<typeof mcpGetSkillInputSchema>;

/**
 * MCP 获取 skill 辅助文件列表的输入。
 */
type McpListSkillFilesInput = z.infer<typeof mcpListSkillFilesInputSchema>;

/**
 * MCP 获取单个 skill 辅助文件的输入。
 */
type McpGetSkillFileInput = z.infer<typeof mcpGetSkillFileInputSchema>;

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
    description:
      "Discover available skills. Use when the user names a skill, asks for a capability, or you need to choose which skill applies. Returns skill names and descriptions only.",
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
      "Load the main SKILL.md for one skill. Use before applying a skill. Returns only the main skill content; if it mentions references, scripts, templates, assets, or other support files, call list_skill_files next.",
    parameters: mcpGetSkillInputSchema,
    outputSchema: mcpSkillDetailSchema,
  })
  getSkill(input: McpGetSkillInput, _context?: Context) {
    return this.skillsService.getSkillByName(input.name);
  }

  @Tool({
    name: "list_skill_files",
    description:
      "List readable support files for one skill, excluding SKILL.md. Use after get_skill when the main skill refers to references, scripts, templates, examples, assets, or when more detail is needed before using the skill.",
    parameters: mcpListSkillFilesInputSchema,
    outputSchema: mcpSkillFileListSchema,
  })
  listSkillFiles(input: McpListSkillFilesInput, _context?: Context) {
    return this.skillsService.listSkillFiles(input.name);
  }

  @Tool({
    name: "get_skill_file",
    description:
      "Read one support file from a skill directory. Use after list_skill_files to load a specific reference, script, template, example, or asset needed to follow the skill. The path must be relative to that skill directory.",
    parameters: mcpGetSkillFileInputSchema,
    outputSchema: mcpSkillFileDetailSchema,
  })
  getSkillFile(input: McpGetSkillFileInput, _context?: Context) {
    return this.skillsService.getSkillFile(input.name, input.path);
  }
}
