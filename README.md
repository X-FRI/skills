# Skills Repository

English | [中文](./README_zh.md)

A local collection of reusable skills (`SKILL.md`) that provide task-specific workflows, guardrails, and references.

## What Is In This Repo

- `superpowers/`: core process and engineering workflow skills (brainstorming, debugging, planning, TDD, verification, code review, etc.).
- `find-skills/`: helps discover and install additional skills.
- `find-docs/`: Context7-based lookup for current library and framework documentation.
- `context7-cli/`: ctx7 CLI reference for docs queries, skill management, and MCP setup.
- `commit/`: creates repository-consistent Conventional Commits and auto-detects commit-message language from recent history.
- `technical-proposal-writing/`: style guide for writing technical proposals, RFCs, ADRs, and migration plans with lower cognitive load.
- `excalidraw-diagram-generator/`: generates Excalidraw diagrams from natural language prompts.
- `obsidian-daily-note-todo/`: finds an Obsidian vault and creates a todo in today's daily note.
- `codex-daily-summary/`: builds an evidence-based daily work summary from Codex threads and inserts it below the todo section in today's Obsidian daily note.
- `gh-cli/`: GitHub CLI operational reference skill.
- `ui-ux-pro-max/`: UI/UX-focused skill with data and scripts.

## Repository Layout

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

Notes:
- Many skills appear in both `superpowers/<name>/` and `superpowers/skills/<name>/` as mirrored copies.
- A skill is defined by its `SKILL.md` and may include helper assets such as `scripts/`, `data/`, or references.

## How Skills Are Used

1. Detect whether a skill is explicitly requested or clearly matches the task.
2. Open the target `SKILL.md` and follow its workflow.
3. Load only the minimum extra files the skill requires.
4. Reuse included scripts/assets when available instead of recreating them.
5. If multiple skills apply, use the minimal set in a clear order.

## Common Skill Categories

- Process: `using-superpowers`, `brainstorming`, `writing-plans`, `executing-plans`
- Quality: `test-driven-development`, `systematic-debugging`, `verification-before-completion`
- Collaboration: `requesting-code-review`, `receiving-code-review`, `dispatching-parallel-agents`, `subagent-driven-development`
- Delivery: `finishing-a-development-branch`, `using-git-worktrees`
- Documentation and setup: `find-docs`, `context7-cli`, `technical-proposal-writing`
- Domain-specific: `gh-cli`, `ui-ux-pro-max`, `find-skills`, `excalidraw-diagram-generator`, `obsidian-daily-note-todo`, `commit`

## Newly Added Skills

- `find-docs`: a focused Context7 workflow for resolving library IDs and querying up-to-date docs and code examples.
- `context7-cli`: a broader ctx7 CLI skill covering documentation access, AI skill install/search/generation, and Context7 MCP setup.
- `commit`: a commit-writing workflow that inspects the current diff, selects one dominant Conventional Commit type, and keeps commit-message language aligned with recent repository history unless the user overrides it.
- `technical-proposal-writing`: a language-agnostic writing guide for technical proposals that favors direct claims, consistent terminology, and paragraph-driven structure over template boilerplate.
- `excalidraw-diagram-generator`: turns natural language requests into Excalidraw-compatible diagrams such as flowcharts, architecture diagrams, sequence diagrams, and ER diagrams.
- `obsidian-daily-note-todo`: locates an Obsidian vault, resolves today's daily note from vault settings, creates the note if missing, and appends a Tasks-compatible todo.
- `codex-daily-summary`: gathers Codex threads created during the local day, extracts evidence from local thread records, detects the dominant language, and writes a timeline-style daily summary into today's Obsidian daily note.

## Commit

`commit` is designed for requests like "commit these changes", "write a commit message from the current diff", or "keep this commit consistent with the repository's commit language".

What it does:

- reviews local changes in a fixed git command order before writing the message
- selects one dominant Conventional Commit type and explains secondary work in the body when needed
- infers commit-message language from the recent 20 commits unless the user gives an explicit language override
- requires multiline commits to use heredoc plus `git commit -F -`

## Technical Proposal Writing

`technical-proposal-writing` is designed for requests such as "write an RFC", "draft an ADR", "prepare a migration plan", or "turn these decisions into a serious technical proposal".

What it enforces:

- Lead with the conclusion, then justify it with clear premises and constraints.
- Keep sentences short, split nested clauses, and keep subject and verb close.
- Remove filler transitions and template scaffolding that make engineering documents harder to scan.
- Keep terminology stable so one concept maps to one term across the document.
- Use Mermaid flowcharts plus numbered steps when process complexity makes prose alone hard to follow.

Why it exists:

- It reduces reader effort when reviewing design decisions.
- It makes proposal documents easier to maintain months later.
- It helps generated drafts read like engineering documents rather than generic AI output.

## Obsidian Daily Note Todo

`obsidian-daily-note-todo` is designed for requests like "add this to my Obsidian daily note" or "create a todo in today's note".

How it works:

- Searches for Obsidian vaults by locating `.obsidian/` directories in common note locations.
- Requires explicit user confirmation if more than one vault is found.
- Reads `.obsidian/daily-notes.json` to resolve the daily note folder, template, and naming behavior.
- Creates today's daily note if it does not exist yet.
- Inserts the todo under `## Tasks` when possible, otherwise creates that section.
- Writes tasks in Obsidian Tasks-compatible Markdown such as `- [ ] Task 📅 2026-03-13`.

Typical use cases:

- capture a task in today's journal
- create a dated todo with `📅`, `⏳`, `🛫`, or `🔁`
- preserve local task conventions like `#task`


## Codex Daily Summary

`codex-daily-summary` is designed for requests like "summarize today's Codex work", "write a daily report from today's threads", or "insert my Codex timeline into today's Obsidian note".

What it does:

- Reuses the same vault discovery and daily note resolution rules as `obsidian-daily-note-todo`.
- Targets the user's local calendar day instead of a rolling 24-hour window.
- Collects Codex threads created that day and reads evidence from local Codex records.
- Writes a new major section below the todo section in today's daily note.
- Replaces the same-day summary section instead of appending duplicates.

How it works:

- Resolves the target Obsidian vault and today's daily note.
- Uses local Codex state such as `~/.codex/state_5.sqlite`, `history.jsonl`, and rollout JSONL files to identify in-range threads and inspect their contents.
- Builds the report from thread metadata, user messages, assistant messages, tool calls, command records, and other available turn evidence.
- Detects the dominant language from the fetched threads. The `SKILL.md` stays in English, but the inserted summary uses the dominant language found in the day's threads.
- Produces a timeline-style report with an opening summary paragraph, chronological sections, an outcome paragraph, and a Mermaid flowchart plus numbered steps when the workflow is complex.

Why it exists:

- It reduces the effort required to reconstruct a workday from multiple Codex sessions.
- It keeps the report evidence-based. Claims must be supported by thread data rather than inferred from memory.
- It preserves Obsidian daily note structure by inserting the report directly below the todo section.

Typical use cases:

- generate today's engineering worklog from Codex activity
- update an Obsidian daily note after a long multi-thread work session
- review what was implemented, investigated, verified, or left open during the day

Related skills:

- `obsidian-daily-note-todo`: resolves the vault and daily note path that this skill reuses
- `find-docs` and `context7-cli`: useful when the daily summary itself depends on current documentation work

## Custom Skill Conventions

This repository may include owner-specific conventions layered on top of upstream skill content.
For example, `gh-cli/SKILL.md` includes custom documentation/comment formatting rules:

- Multiline submission/comment bodies must use heredoc plus `--body-file -` (or `gh api --raw-field body="$(cat <<'EOF' ... EOF)"`).
- Avoid escaped newline/text sequences in quoted strings (for example `\\n`); preserve real line breaks instead.
- When a PR review comment labels severity (`P0`, `P1`, `P2`, `P3`), use a Shields badge from `https://img.shields.io` rather than plain severity text.
- Badge format: `https://img.shields.io/badge/<level>-<color>?style=flat`

## Authoring Principles (for maintainers)

- Keep each skill focused on one repeatable workflow.
- Prefer concise instructions with explicit checklists.
- Store reusable logic in scripts/templates when possible.
- Keep references selective and avoid loading unnecessary context.

## Quick Start

- Explore skills: `rg --files -g '*/SKILL.md'`
- Open one skill: `sed -n '1,220p' <path>/SKILL.md`
- Follow the workflow in that skill before implementation.
