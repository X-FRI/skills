# Skills MCP Server

一个简单的 NestJS MCP 服务，将 `~/.agents/skills` 目录中的所有 skills 作为 MCP 工具暴露出去。

## 功能

- `list_skills`: 返回所有可用的 skills 摘要列表
- `get_skill`: 按名称获取单个 skill 的完整内容和可读辅助文件树
- `list_skill_files`: 按名称获取单个 skill 目录下可读取的辅助文件列表
- `get_skill_file`: 读取单个 skill 目录下的辅助文本文件

## 启动

```bash
cd ~/.agents/mcp
npm install
npm run build
npm run start
```

## MCP 端点

服务支持两种传输协议：

### HTTP Streamable
- 端点: `POST /mcp`
- 支持 SSE 和 JSON 响应

### STDIO
- 直接通过 stdin/stdout 通信
- 适用于本地 MCP 客户端

## 配置

服务会自动从 `~/.agents/skills` 目录加载所有 skills。

## 依赖

- NestJS
- @rekog/mcp-nest
- Zod
