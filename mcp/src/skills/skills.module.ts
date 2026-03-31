import { Injectable, NotFoundException } from "@nestjs/common";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { Inject, Module } from "@nestjs/common";
import { SKILLS_MODULE_OPTIONS, SkillsModuleOptions } from "../common/constants";
import { SkillsService } from "./skills.service";

/**
 * Skills 本地加载模块。
 *
 * 该模块负责提供本地 skills 目录的根路径配置，
 * 并暴露统一的 `SkillsService` 供 MCP 层读取。
 */
@Module({
  providers: [
    {
      provide: SKILLS_MODULE_OPTIONS,
      useFactory: (): SkillsModuleOptions => ({
        rootDir: resolve(__dirname, "../../../skills"),
      }),
    },
    SkillsService,
  ],
  exports: [SkillsService],
})
export class SkillsModule {}
