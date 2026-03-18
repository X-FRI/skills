# Skills 仓库

[English](./README.md) | 中文

这是一个本地 Skills 集合。每个 skill 以 `SKILL.md` 为核心，提供可复用的任务流程、约束和参考信息。

## 仓库内容

- `superpowers/`：核心流程与工程实践类 skills（如 brainstorming、debugging、planning、TDD、verification、code review）。
- `find-skills/`：用于发现和安装更多 skills。
- `find-docs/`：基于 Context7 的最新库与框架文档检索 skill。
- `context7-cli/`：ctx7 CLI 参考 skill，覆盖文档查询、skill 管理与 MCP 配置。
- `commit/`：用于生成并执行符合仓库约定的 Conventional Commit，并根据最近历史自动判定 commit message 语言。
- `technical-proposal-writing/`：技术方案写作规范 skill，用于撰写更易读的 proposal、RFC、ADR 与迁移方案。
- `excalidraw-diagram-generator/`：根据自然语言描述生成 Excalidraw 图表。
- `obsidian-daily-note-todo/`：查找 Obsidian vault，并在当天 daily note 中创建待办。
- `codex-daily-summary/`：从当天创建的 Codex thread 中提取证据，生成时间线式日报，并写入当天 Obsidian daily note 的待办区块下方。
- `analyzing-codex-token-usage/`：基于本地 SQLite 元数据和 rollout token 事件生成 Codex token 用量报告，并保证统计口径准确。
- `gh-cli/`：GitHub CLI 操作参考 skill。
- `ui-ux-pro-max/`：UI/UX 设计与实现相关 skill，包含数据与脚本。

## 目录结构

```text
.
├── context7-cli/
├── commit/
├── excalidraw-diagram-generator/
├── find-docs/
├── find-skills/
├── gh-cli/
├── obsidian-daily-note-todo/
├── technical-proposal-writing/
├── superpowers/
│   ├── <skill-name>/SKILL.md
│   └── skills/<skill-name>/SKILL.md
└── ui-ux-pro-max/
```

说明：
- 许多 skill 同时存在于 `superpowers/<name>/` 与 `superpowers/skills/<name>/`，属于镜像副本。
- 一个 skill 由 `SKILL.md` 定义，也可能包含 `scripts/`、`data/`、参考文档等辅助资源。

## Skills 使用方式

1. 识别用户是否明确点名 skill，或任务是否明显匹配某个 skill。
2. 打开目标 `SKILL.md` 并按其流程执行。
3. 仅加载完成当前任务所需的最小附加文件。
4. 若 skill 提供脚本或模板，优先复用，不重复造轮子。
5. 若多个 skill 同时适用，选择最小集合并明确执行顺序。

## 常见技能分类

- 流程类：`using-superpowers`、`brainstorming`、`writing-plans`、`executing-plans`
- 质量类：`test-driven-development`、`systematic-debugging`、`verification-before-completion`
- 协作类：`requesting-code-review`、`receiving-code-review`、`dispatching-parallel-agents`、`subagent-driven-development`
- 交付类：`finishing-a-development-branch`、`using-git-worktrees`
- 文档与配置类：`find-docs`、`context7-cli`、`technical-proposal-writing`
- 专项类：`gh-cli`、`ui-ux-pro-max`、`find-skills`、`excalidraw-diagram-generator`、`obsidian-daily-note-todo`、`commit`

## 新增 Skills

- `find-docs`：聚焦 Context7 文档查询流程，用于解析库 ID 并检索最新文档与代码示例。
- `context7-cli`：更完整的 ctx7 CLI skill，覆盖文档访问、AI skill 的安装/搜索/生成，以及 Context7 MCP 配置。
- `commit`：一个提交写作工作流，会检查当前 diff，选择单一主导的 Conventional Commit 类型，并在用户未显式指定时根据最近的仓库提交历史自动判定 commit message 语言。
- `technical-proposal-writing`：语言无关的技术方案写作指南，强调直接结论、术语一致、段落驱动结构，避免模板化空话。
- `excalidraw-diagram-generator`：将自然语言需求转换为 Excalidraw 图表，支持流程图、架构图、时序图、ER 图等。
- `obsidian-daily-note-todo`：定位 Obsidian vault，依据 vault 配置解析当天 daily note，在笔记不存在时自动创建，并追加兼容 Obsidian Tasks 的待办。
- `codex-daily-summary`：收集本地自然日内创建的 Codex thread，从本地 thread 记录中提取证据，判断主语言，并将时间线式日报写入当天 Obsidian daily note。
- `analyzing-codex-token-usage`：基于本地 state DB 元数据与 rollout `token_count` 增量，生成按天、周、月统计的 Codex token 用量报告，并支持趋势与 spike 分析。

## Commit

`commit` 适用于“把这些改动提交掉”“根据当前 diff 生成 commit message”或“让提交语言跟仓库历史保持一致”这类请求。

它的作用：

- 按固定的 git 命令顺序检查本地改动，再生成提交信息
- 选择一个主导的 Conventional Commit 类型，次要改动放到正文说明
- 在用户没有显式指定语言时，根据最近 20 条 commit 自动判定提交信息语言
- 强制多行提交使用 heredoc + `git commit -F -`

## 技术方案写作

`technical-proposal-writing` 适用于“写一份技术方案”“整理成 RFC”“输出 ADR”“准备迁移计划”这类请求。

它重点约束：

- 先给结论，再交代前提、约束和推导理由。
- 控制句子长度，减少多层从句，让主语和谓语靠近。
- 删除没有真实逻辑关系的连接词、套话和模板脚手架。
- 保持术语稳定，同一个概念尽量只用一个词。
- 当流程存在分支、回滚或多角色协作时，同时提供 Mermaid 流程图与编号步骤。

它存在的价值：

- 降低评审技术方案时的阅读负担。
- 让方案文档在几个月后仍然容易维护和复查。
- 让产出更像严肃工程文档，而不是模板化 AI 文案。

## Obsidian Daily Note Todo

`obsidian-daily-note-todo` 适用于“把这个事项加入今天的 Obsidian daily note”这类请求。

它的工作方式：

- 通过查找 `.obsidian/` 目录发现候选 Obsidian vault。
- 如果发现多个 vault，必须先询问用户要使用哪一个，不能自动猜测。
- 读取 `.obsidian/daily-notes.json`，解析 daily note 的目录、模板和命名规则。
- 若当天 daily note 不存在，则自动创建。
- 优先把待办写入 `## Tasks` 区块；如果没有该区块，则先创建再写入。
- 待办使用兼容 Obsidian Tasks 的 Markdown 语法，例如 `- [ ] Task 📅 2026-03-13`。

典型场景：

- 在今天的日记中快速记录待办
- 创建带 `📅`、`⏳`、`🛫`、`🔁` 的任务
- 保留本地约定，例如自动沿用 `#task`


## Codex Daily Summary

`codex-daily-summary` 适用于“总结今天的 Codex 工作”“把今天的 Codex thread 整理成日报”或“把 Codex 时间线写入今天的 Obsidian daily note”这类请求。

它的作用：

- 复用 `obsidian-daily-note-todo` 的 vault 发现与 daily note 解析规则。
- 以用户本地自然日为范围，而不是按滚动 24 小时汇总。
- 收集当天创建的 Codex thread，并从本地 Codex 记录中读取证据。
- 在今天 daily note 的 todo 区块下方写入一个新的大章节。
- 如果当天已经存在日报总结区块，则替换原区块，而不是重复追加。

它的工作方式：

- 先解析目标 Obsidian vault 和当天的 daily note。
- 再使用本地 Codex 状态数据，例如 `~/.codex/state_5.sqlite`、`history.jsonl` 和 rollout JSONL 文件，识别当天创建的 thread 并检查其内容。
- 报告内容基于 thread 元数据、用户消息、assistant 消息、工具调用、命令记录以及其他可用的 turn 证据生成。
- `SKILL.md` 保持英文，但实际写入 daily note 的日报语言会根据当天 thread 的主语言决定。
- 产出的报告采用时间线结构，包含开篇概述、按时间排序的分段、结果总结段，以及在流程复杂时必须提供的 Mermaid 流程图与编号步骤。

它存在的价值：

- 将分散在多个 Codex thread 中的工作记录压缩为一页可快速阅读的日报。
- 强制基于证据写作，避免凭记忆补叙或主观推断。
- 保持 Obsidian daily note 的结构稳定，把日报直接插入到 todo 区块下方。

典型场景：

- 根据今天的 Codex 活动生成工程工作日志
- 在多线程工作结束后，把当天进展回填到 Obsidian daily note
- 复盘当天做了什么、验证了什么、还有哪些事项未闭环

相关 skill：

- `obsidian-daily-note-todo`：负责解析这个 skill 复用的 vault 与 daily note 路径
- `find-docs` 与 `context7-cli`：当日报内容涉及当天的文档调研工作时可配合使用

## Codex Token 用量分析

`analyzing-codex-token-usage` 适用于“看看今天 Codex 用了多少 token”“帮我做一份本周 token 报告”或“这个月哪个 thread 最耗 token”这类请求。

它的作用：

- 只使用本地 Codex 数据完成统计，不依赖网络。
- 动态发现当前 `state_*.sqlite`，而不是把数据库文件名写死。
- 把 `threads.tokens_used` 视为线程当前累计快照，而不是日/周/月精确消耗值。
- 通过 rollout 中相邻 `token_count` 事件的累计值做差，计算精确时间窗口内的 token 消耗。
- 输出适合终端阅读的报告，包括总览、趋势分桶、Top threads 和 spike 时刻。

它存在的价值：

- 避免把快照字段或单步 token 值直接相加，导致统计失真。
- 强制报告明确时区和绝对日期边界，避免“今天”“本周”这类模糊口径。
- 帮助区分“某个 thread 到目前为止总共用了多少 token”和“某个自然时间窗口内实际消耗了多少 token”。

相关 skill：

- `codex-daily-summary`：如果用户要的是“做了什么工作的语义总结”，而不是 token 统计，应使用这个 skill

## 自定义 Skill 约定

本仓库允许在上游 skill 基础上叠加仓库维护者的自定义规范。
例如在 `gh-cli/SKILL.md` 中，增加了文档/评论提交格式相关规则：

- 多行提交或评论正文必须使用 heredoc + `--body-file -`（或 `gh api --raw-field body="$(cat <<'EOF' ... EOF)"`）。
- 避免在双引号字符串中传递 `\\n` 等转义序列，应保留真实换行。
- 当 PR Review 评论标注严重级别（`P0`、`P1`、`P2`、`P3`）时，必须使用 `https://img.shields.io` 的 badge 图标，不应只写纯文本级别。
- badge 格式：`https://img.shields.io/badge/<level>-<color>?style=flat`

## 维护建议

- 每个 skill 聚焦一个可重复执行的工作流。
- 指令保持简洁，并给出明确 checklist。
- 可复用逻辑尽量沉淀为脚本/模板。
- 控制上下文体积，避免加载无关参考资料。

## 快速开始

- 查看所有 skills：`rg --files -g '*/SKILL.md'`
- 打开某个 skill：`sed -n '1,220p' <path>/SKILL.md`
- 在实现前先按该 skill 的流程执行。
