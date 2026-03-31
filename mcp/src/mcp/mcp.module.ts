import { Module } from "@nestjs/common";
import { McpModule as RekogMcpModule, McpTransportType } from "@rekog/mcp-nest";
import { McpToolService } from "./mcp-tool.service";
import { SkillsModule } from "../skills/skills.module";

@Module({
  imports: [
    SkillsModule,
    RekogMcpModule.forRoot({
      name: "skills-mcp-server",
      version: "1.0.0",
      transport: [McpTransportType.STREAMABLE_HTTP, McpTransportType.STDIO],
      mcpEndpoint: "/mcp",
      allowUnauthenticatedAccess: true,
    }),
    RekogMcpModule.forFeature([McpToolService], "skills-mcp-server"),
  ],
  providers: [McpToolService],
  exports: [McpToolService],
})
export class McpModule {}
