---
name: agents-repository
description: 智能体 AI 工具和技能的主目录
---

# Agents 仓库

AI 智能体的能力、技能和 MCP 服务的集中管理仓库。

## 目录结构

```
~/.agents/
├── .git/                    # Git 仓库
├── skills/                  # 技能目录
│   ├── README.md           # 技能概览
│   ├── README_zh.md       # 中文说明
│   └── <skill-name>/      # 各个技能文件夹
│       └── SKILL.md       # 技能定义
├── mcp/                    # MCP 服务
│   ├── README.md           # MCP 服务概览
│   └── src/               # 源代码
└── .skill-lock.json        # 技能锁文件
```

## 快速开始

### 技能

技能是存储在 `skills/` 目录中的可复用任务工作流。每个技能是一个包含 YAML frontmatter 的自包含 `SKILL.md` 文件。

**可用技能：**

| 技能 | 描述 |
|------|------|
| [discovering-project-context](./skills/discovering-project-context/SKILL.md) | 快速项目发现和架构映射 |
| [writing-plans](./skills/writing-plans/SKILL.md) | 创建详细的实施计划 |
| [brainstorming](./skills/superpowers/brainstorming/SKILL.md) | 结构化头脑风暴 |
| [systematic-debugging](./skills/superpowers/systematic-debugging/SKILL.md) | 系统化调试工作流 |
| [deep-research](./skills/deep-research/SKILL.md) | 带引用的多源研究 |
| [commit](./skills/commit/SKILL.md) | Conventional Commit 创建 |
| [find-docs](./skills/find-docs/SKILL.md) | 当前库文档查询 |
| [improve-codebase-architecture](./skills/improve-codebase-architecture/SKILL.md) | 继承自 `github.com/mattpocock/skills` 的架构深化审查，并加入本地证据与输出模式改进 |
| [biomedical-clinical-strategy-consultant](./skills/biomedical-clinical-strategy-consultant/SKILL.md) | 生物医学与临床循证咨询 |
| [chart-visualization](./skills/chart-visualization/SKILL.md) | 图表和地图渲染 |
| [excalidraw-diagram-generator](./skills/excalidraw-diagram-generator/SKILL.md) | Excalidraw 图表生成 |
| [esl-coder](./skills/esl-coder/SKILL.md) | 面向非母语开发者的英语结对编程辅导 |
| [financial-investment-strategy-consultant](./skills/financial-investment-strategy-consultant/SKILL.md) | 金融与投资策略咨询 |
| [minimax-docx](./skills/minimax-docx/SKILL.md) | DOCX 文档创建、编辑与排版 |
| [minimax-pdf](./skills/minimax-pdf/SKILL.md) | 高质量 PDF 创建、填写与重排版 |
| [minimax-xlsx](./skills/minimax-xlsx/SKILL.md) | Excel 与表格文件创建、编辑与校验 |
| [obsidian-daily-note-todo](./skills/obsidian-daily-note-todo/SKILL.md) | Obsidian 日记集成 |
| [codex-daily-summary](./skills/codex-daily-summary/SKILL.md) | Codex 工作日志 |
| [analyzing-codex-token-usage](./skills/analyzing-codex-token-usage/SKILL.md) | Token 使用报告 |
| [philosophy-humanities-cognitive-architect](./skills/philosophy-humanities-cognitive-architect/SKILL.md) | 哲学与人文认知咨询 |
| [clarity](./skills/clarity/SKILL.md) | 面向读者的清晰写作编辑器 |
| [pptx-generator](./skills/pptx-generator/SKILL.md) | PowerPoint 演示文稿生成与编辑 |
| [caveman](./skills/caveman/SKILL.md) | 超压缩交流模式，6 种强度级别 |
| [technical-proposal-writing](./skills/technical-proposal-writing/SKILL.md) | 技术提案风格指南 |
| [ascii-art-diagrams](./skills/ascii-art-diagrams/SKILL.md) | 文本图表规范，默认使用 ASCII-safe 模式，Unicode 仅作增强排版 |

### MCP 服务

一个基于 NestJS 的 MCP 服务器，将技能作为 MCP 工具暴露出去。

**端点：**
- `POST /mcp` - HTTP Streamable（用于网络访问）
- STDIO - 本地 MCP 客户端通信

**工具：**
- `list_skills` - 列出所有可用技能
- `get_skill` - 按名称获取技能内容和可读辅助文件树
- `list_skill_files` - 列出单个 skill 的可读辅助文件
- `get_skill_file` - 读取单个 skill 目录下的辅助文本文件

**启动服务：**
```bash
cd ~/.agents/mcp
npm install
npm run build
npm run start
```

## 开发

### 添加新技能

1. 在 `skills/` 下创建新目录：
   ```bash
   mkdir skills/my-new-skill
   ```

2. 创建带 frontmatter 的 `SKILL.md`：
   ```markdown
   ---
   name: my-new-skill
   description: 简短的技能描述
   ---
   
   # 我的新技能
   
   ## 概览
   ...
   ```

3. 提交更改：
   ```bash
   git add skills/my-new-skill
   git commit -m "feat(skills): add my-new-skill"
   ```

### 同步 Superpowers

Superpowers 技能从上游 `obra/superpowers` 同步：

```bash
./scripts/sync-superpowers.sh
```

## 许可证

此仓库包含多个可能具有不同许可证的组件。请查看各个目录中的 `LICENSE` 文件。
