---
name: obsidian-daily-note-todo
description: Use when the user wants to add a todo to today's Obsidian daily note, create today's daily note if it does not exist, or locate an Obsidian vault automatically before writing a task.
---

# Obsidian Daily Note Todo

Create a todo in today's Obsidian daily note by locating the vault, resolving the daily note path from vault settings, creating the note if needed, and appending a task in Obsidian Tasks-compatible Markdown.

## When to Use

- The user mentions Obsidian, a vault, daily notes, today's note, journal, or daily todo.
- The user wants a task written into a daily note instead of a random Markdown file.
- The vault path is not provided and needs to be discovered from the local filesystem.

Do not use this skill for generic Markdown todo edits outside an Obsidian vault.

## Workflow

### 1. Find the vault

Search for candidate vaults by looking for `.obsidian/` directories.

Start with common user locations:

- `~/Documents`
- `~/Workspace`
- `~/Desktop`
- `~/Notes`

Treat a directory as a vault root when it contains `.obsidian/`.

Prefer candidates that contain:

- `.obsidian/daily-notes.json`
- `.obsidian/core-plugins.json`
- a plausible notes tree rather than a code repository

If more than one vault is found, you MUST ask the user which vault to use.
Do not auto-select a vault, even if one candidate looks more likely.

### 2. Read daily note settings

Inspect these files when present:

- `.obsidian/daily-notes.json`
- `.obsidian/core-plugins.json`
- `.obsidian/community-plugins.json`

Use `daily-notes.json` to determine:

- daily note folder
- template file
- date format, if present

Important defaults from Obsidian docs:

- Daily Notes creates today's note if it does not exist.
- Default file name format is `YYYY-MM-DD`.
- The daily note location can be changed by plugin settings.
- The date format can generate nested paths such as `YYYY/MMMM/YYYY-MMM-DD`.

If `daily-notes.json` is missing or incomplete:

- default folder to vault root
- default file name to `YYYY-MM-DD.md`

If no explicit date format is stored, inspect recent files in the configured daily note folder and infer the naming pattern when it is obvious. Otherwise fall back to `YYYY-MM-DD.md`.

### 3. Create today's daily note if missing

Compute today's note path from:

- vault root
- configured daily note folder, if any
- resolved date-based file name

Create parent directories if the date format implies nested folders.

If the note does not exist:

- If a template file is configured, initialize the note from that template.
- Replace simple core-template tokens of the form `{{date:FORMAT}}` with today's date rendered in that format.
- If the template cannot be safely resolved, fall back to a minimal structure:

```markdown
# 2026-03-13

## Tasks

```

Do not overwrite an existing daily note.

### 4. Build the task line

The minimum valid task is:

```markdown
- [ ] Task description
```

Use Obsidian Tasks-compatible inline fields when the user provides them:

- due date: `📅 YYYY-MM-DD`
- scheduled date: `⏳ YYYY-MM-DD`
- start date: `🛫 YYYY-MM-DD`
- created date: `➕ YYYY-MM-DD`
- recurrence: `🔁 every day`
- tags: `#tag`

Priority markers commonly used by Obsidian Tasks:

- highest: `⏫`
- high: `🔼`
- low: `🔽`
- lowest: `⏬`

Examples:

```markdown
- [ ] Write weekly review
- [ ] Pay rent 📅 2026-03-15
- [ ] Plan sprint #work ⏳ 2026-03-13 📅 2026-03-14
- [ ] Water plants 🔁 every week on Sunday
```

Do not invent metadata the user did not ask for.

If the vault clearly uses a local convention, preserve it. For example, if nearby tasks routinely include `#task`, keep using that convention.

### 5. Insert the task in the right section

Prefer an existing `## Tasks` section in today's daily note.

Insertion rules:

1. If `## Tasks` exists, append the new task under that section.
2. If there is no tasks section, create one near the end of the file and append the task below it.
3. Preserve existing content and spacing.
4. Do not reorder unrelated sections.

## Quick Reference

```bash
# Find candidate vaults
find ~ -type d -name .obsidian 2>/dev/null

# Check daily note settings
sed -n '1,200p' <vault>/.obsidian/daily-notes.json

# Check whether Tasks plugin is installed
sed -n '1,200p' <vault>/.obsidian/community-plugins.json
```

## Safety Rules

- Never write outside the selected vault.
- Never overwrite an existing daily note when the goal is to append a todo.
- If more than one vault exists, stop and ask the user to choose one before reading or writing daily notes.
- If editing outside the current writable workspace requires permission, request it before writing.

## Common Mistakes

- Writing to a vault-like directory that does not actually contain `.obsidian/`.
- Ignoring `daily-notes.json` and hardcoding `Daily/YYYY-MM-DD.md`.
- Creating a plain paragraph instead of a Markdown task item.
- Appending escaped date text that does not match Obsidian Tasks syntax.
- Replacing the whole daily note when only one task should be added.
