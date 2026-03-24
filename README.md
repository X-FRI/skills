# Skills Repository

English | [中文](./README_zh.md)

A local collection of reusable skills (`SKILL.md`) that provide task-specific workflows, guardrails, and references.

## What Is In This Repo

- `superpowers/`: core process and engineering workflow skills (brainstorming, debugging, planning, TDD, verification, code review, etc.).
- `find-skills/`: helps discover and install additional skills.
- `find-docs/`: Context7-based lookup for current library and framework documentation.
- `context7-cli/`: ctx7 CLI reference for docs queries, skill management, and MCP setup.
- `commit/`: creates repository-consistent Conventional Commits and auto-detects commit-message language from recent history.
- `discovering-project-context/`: builds a fast, evidence-grounded project brief for unfamiliar repositories.
- `technical-proposal-writing/`: style guide for writing technical proposals, RFCs, ADRs, and migration plans with lower cognitive load.
- `excalidraw-diagram-generator/`: generates Excalidraw diagrams from natural language prompts.
- `obsidian-daily-note-todo/`: finds an Obsidian vault and creates a todo in today's daily note.
- `codex-daily-summary/`: builds an evidence-based daily work summary from Codex threads and inserts it below the todo section in today's Obsidian daily note.
- `analyzing-codex-token-usage/`: builds local Codex token usage reports with exact period accounting from SQLite metadata and rollout token events.
- `asr-transcript-summary/`: summarizes messy ASR meeting transcripts into structured executive notes with action items, decisions, and theme-based discussion review.
- `requirements-architect-analyzer/`: turns fragmented interviews and product notes into developer-facing requirement reports with entities, state machines, priorities, and architecture constraints.
- `gh-cli/`: GitHub CLI operational reference skill.
- `personification/`: writing-style skill for more natural, less AI-sounding replies with automatic output-language detection.
- `ui-ux-pro-max/`: UI/UX-focused skill with data and scripts.

## Repository Layout

```text
.
├── analyzing-codex-token-usage/
├── asr-transcript-summary/
├── context7-cli/
├── commit/
├── discovering-project-context/
├── excalidraw-diagram-generator/
├── find-docs/
├── find-skills/
├── gh-cli/
├── obsidian-daily-note-todo/
├── requirements-architect-analyzer/
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
- Domain-specific: `gh-cli`, `ui-ux-pro-max`, `find-skills`, `excalidraw-diagram-generator`, `obsidian-daily-note-todo`, `discovering-project-context`, `commit`, `asr-transcript-summary`, `requirements-architect-analyzer`
- Writing-style: `personification`

## Newly Added Skills

- `find-docs`: a focused Context7 workflow for resolving library IDs and querying up-to-date docs and code examples.
- `context7-cli`: a broader ctx7 CLI skill covering documentation access, AI skill install/search/generation, and Context7 MCP setup.
- `commit`: a commit-writing workflow that inspects the current diff, selects one dominant Conventional Commit type, and keeps commit-message language aligned with recent repository history unless the user overrides it.
- `discovering-project-context`: a repository discovery workflow that scans the highest-signal docs, manifests, runtime files, code directories, and recent git history to produce a fast but grounded project map.
- `technical-proposal-writing`: a language-agnostic writing guide for technical proposals that favors direct claims, consistent terminology, and paragraph-driven structure over template boilerplate.
- `excalidraw-diagram-generator`: turns natural language requests into Excalidraw-compatible diagrams such as flowcharts, architecture diagrams, sequence diagrams, and ER diagrams.
- `obsidian-daily-note-todo`: locates an Obsidian vault, resolves today's daily note from vault settings, creates the note if missing, and appends a Tasks-compatible todo.
- `codex-daily-summary`: gathers Codex threads created during the local day, extracts evidence from local thread records, detects the dominant language, and writes a timeline-style daily summary into today's Obsidian daily note.
- `analyzing-codex-token-usage`: builds daily, weekly, and monthly Codex token usage reports from local state DB metadata plus rollout `token_count` deltas, with timezone-explicit windows and spike analysis.
- `asr-transcript-summary`: turns noisy ASR meeting transcripts into executive-style summaries with language-aware output, action-item extraction, decision capture, and theme-based discussion regrouping.
- `requirements-architect-analyzer`: converts scattered requirement notes and interview transcripts into structured requirement-and-architecture reports centered on business entities, state machines, module priorities, and explicit architecture constraints.
- `personification`: a writing-style skill that reduces templated assistant phrasing, preserves authorial voice, and auto-selects reply language from user context while keeping the skill file itself in English.

## Commit

`commit` is designed for requests like "commit these changes", "write a commit message from the current diff", or "keep this commit consistent with the repository's commit language".

What it does:

- reviews local changes in a fixed git command order before writing the message
- selects one dominant Conventional Commit type and explains secondary work in the body when needed
- infers commit-message language from the recent 20 commits unless the user gives an explicit language override
- requires multiline commits to use heredoc plus `git commit -F -`

## Discovering Project Context

`discovering-project-context` is designed for requests like "help me understand this repo", "give me a quick project overview", "what is the architecture here", or "before we change anything, map the codebase".

What it does:

- Prioritizes high-signal evidence instead of blindly reading every document in the repository.
- Builds a compact working model of the project: repository type, purpose, runtime boundaries, top-level modules, entrypoints, and likely core workflow.
- Uses recent git history to identify current engineering themes instead of dumping raw commit lists.
- Forces explicit unknowns so the output separates confirmed facts from inference.
- Ends with a practical "where to read next" guide for the next engineering step.

How it works:

- Starts from the root README and docs index, then checks manifests such as `package.json`, `pyproject.toml`, `go.mod`, or workspace files.
- Reads runtime and delivery clues such as `Dockerfile`, compose files, CI configs, deploy configs, `Makefile`, `Taskfile`, and scripts.
- Maps major code directories such as `src`, `app`, `server`, `services`, `packages`, `apps`, and `tests`.
- Clusters the most recent 20 to 30 commits into a few workstreams such as feature delivery, bug fixing, refactoring, tooling, or test hardening.
- Produces a fixed summary shape covering identity, stack, architecture, core workflow, operational clues, recent themes, risks, and recommended next files.

Language behavior:

- The `SKILL.md` stays in English.
- The actual project summary follows the dominant language in the user's current request and nearby user-authored context.
- If the signal is mixed, the skill still prefers user-authored language over assistant text or repository defaults.

Why it exists:

- It reduces the time needed for an LLM to form a reliable project mental model from an initial conversation.
- It improves project discovery quality by enforcing source prioritization and evidence-backed summaries.
- It avoids two common failure modes: shallow file listing and overconfident architectural guessing.

Typical use cases:

- onboard into an unfamiliar repository before implementation
- prepare a concise architecture brief for another engineer
- summarize what a monorepo contains before touching one package
- identify which files matter most for the next change

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

## Analyzing Codex Token Usage

`analyzing-codex-token-usage` is designed for requests like "show today's Codex token usage", "build a weekly token report", or "which threads consumed the most tokens this month".

What it does:

- Uses local Codex data only.
- Discovers the current `state_*.sqlite` dynamically instead of hardcoding a DB filename.
- Treats `threads.tokens_used` as a current per-thread snapshot, not as the exact answer for day/week/month usage.
- Computes exact period totals by diffing adjacent rollout `token_count` cumulative totals.
- Produces readable terminal reports with overview, trend buckets, top threads, and spike moments.

Why it exists:

- It prevents the common mistake of summing snapshot fields or last-step token values as if they were exact period usage.
- It makes report windows explicit by timezone and absolute date bounds.
- It helps distinguish "total tokens a thread has used so far" from "tokens consumed during a specific reporting window".

Related skills:

- `codex-daily-summary`: use this instead when the user wants a semantic work summary rather than token accounting

## Personification

`personification` is designed for requests like "write this in a more human way", "reduce the AI tone", "make the reply feel more natural", or "keep the answer personal without becoming roleplay".

What it does:

- Pushes writing away from stock assistant phrasing and toward prose that feels authored.
- Suppresses common AI-writing artifacts such as formulaic openings, canned transitions, self-referential assistant language, and overly polished generic wording.
- Prefers paragraph-driven flow, direct judgment, and natural rhetorical movement over rigid template structure.
- Preserves analytical depth and factual clarity instead of trading substance for style.

How it works:

- The `SKILL.md` stays in English for maintenance and retrieval.
- The actual output language is selected from user-authored context, using the current request first and nearby user messages as fallback evidence.
- If language signals are mixed, the skill still prefers user-authored text over assistant-authored text.
- If no stable signal exists, the skill falls back to English.

Why it exists:

- Many "sound more human" prompts are too vague to produce repeatable behavior.
- This skill turns that vague request into concrete constraints on phrasing, structure, and rhetorical habits.
- It improves readability by removing machine-like tone without requiring identity simulation or fake personal experience.

Boundaries:

- It is a writing-style skill, not a roleplay or identity skill.
- It should not be used when output must remain rigidly structured, machine-readable, or compliance-constrained.
- It does not permit fabricated biography, emotions, or personal memories.

Typical use cases:

- rewrite an answer to feel less templated
- produce commentary or explanation with more voice
- draft email-like or note-like prose
- keep a response natural while still technically rigorous

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
