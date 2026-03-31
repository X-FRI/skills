---
name: commit
description: Use when the user wants a git commit created or needs a commit message that should match the repository's existing language and Conventional Commit style.
---

# Commit

## Overview

Create one readable Conventional Commit for the intended change set. Determine the dominant change type, infer the commit-message language, write a plain-text title plus structured body, and commit with `git commit -F -`.

Write in an objective engineering tone. Keep sentences short. Keep subject and verb close. Describe the change as "this commit" in English, or the equivalent stable phrase in the selected output language.

## When to Use

- The user asks to commit local changes.
- The user asks for a commit message based on the current diff.
- The repository expects commit-message language to follow recent history.
- The change set mixes code, docs, tests, or refactors and needs one dominant Conventional Commit type.

Do not use this skill when the user only wants raw git status or diff output, or when unrelated changes must be split into multiple commits first.

## Output Language Policy

The commit message language must follow repository and user preference. The formatting rules below are language-agnostic; apply them in the selected language.

Priority order:
1. Explicit user instruction wins.
2. If no explicit instruction exists, inspect the recent 20 commits with `git log --oneline -n 20` and use the dominant commit-message language.
3. If the recent history is mixed or has no clear dominant language, use the dominant language in the latest user request.
4. If dominance is still unclear, use the language from the immediate prior user turn.

Hard requirements:
- Do not output bilingual commit messages unless the user explicitly asks.
- Keep the title and body in the same language.
- Keep code identifiers, file paths, package names, and scopes in original form when translation would reduce precision.
- Do not change output language because this skill is written in English.

## Required Review Sequence

Run these commands in order before writing the message:

1. `git status --short`
2. `git diff --stat`
3. `git diff -- <changed files>`
4. `git log --oneline -n 20`

If the change set is partially staged or contains unrelated edits, resolve the intended commit scope first. Do not sweep unrelated work into one commit.

## Staging Rules

- Stage only the files that belong to the intended commit.
- If all current changes belong together, broad staging is acceptable.
- If the scope is unclear, stop and ask before staging unrelated files.

## Type Selection

Choose one dominant Conventional Commit type:

| Type | Use when |
|------|----------|
| `fix` | Correct behavior, repair a defect, or remove a regression |
| `feat` | Add user-visible capability or a new entry point |
| `chore` | Maintenance only: build, dependencies, scripts, config |
| `docs` | Documentation-only change with no runtime logic change |
| `refactor` | Structural rewrite with equivalent behavior |
| `test` | Tests or test infrastructure without product behavior change |

If multiple types apply, choose the main purpose and explain the secondary work in the body.

## Message Format

Title requirements:

- Use `type(scope): subject`.
- Use plain text only.
- Prefer one line under 100 characters.
- Keep the subject concrete and maintainable.
- Use one meaningful scope. Do not leave the scope empty or make it vague.

Body requirements:

- The body is required.
- Use four sections chosen by type.
- Put the section label on its own line.
- Leave one blank line between sections.
- Use `- ` for bullet lists.
- Keep the message plain text. Do not use code fences, tables, or literal `\n`.
- Optional: insert `----------------------------------------` between sections for readability.

Translate the section labels into the selected output language. Keep the section order and semantics stable. If the repository history is Chinese, use the established Chinese labels consistently.

Label map:

- `fix`: English `[Problem] [Root Cause] [Solution] [Impact]`; Chinese `[问题原因] [问题根因] [修复方案] [影响范围]`
- `feat`: English `[Change Nature] [New Capability] [Implementation] [Impact]`; Chinese `[变更性质] [新增功能] [实现方案] [影响范围]`
- `chore`: English `[Change Nature] [Maintenance Work] [Implementation] [Impact]`; Chinese `[变更性质] [维护内容] [实现方案] [影响范围]`
- `docs`: English `[Change Nature] [Documentation Update] [Update Plan] [Impact]`; Chinese `[变更性质] [文档内容] [更新方案] [影响范围]`
- `refactor`: English `[Change Nature] [Motivation] [Refactor Plan] [Impact]`; Chinese `[变更性质] [重构动机] [重构方案] [影响范围]`
- `test`: English `[Change Nature] [Test Goal] [Test Approach] [Impact]`; Chinese `[变更性质] [测试目标] [测试方案] [影响范围]`

Helpful prompts inside sections:

- trigger conditions
- external symptoms
- mechanism
- key changes
- design tradeoffs
- module boundaries
- build pipeline
- runtime behavior
- compatibility
- reader benefit
- risk coverage

## Section Guide by Type

`fix`
- Section 1 explains trigger conditions and external symptoms.
- Section 2 explains the mechanism-level root cause.
- Section 3 lists key changes and design tradeoffs.
- Section 4 states affected modules, build impact, and runtime impact.

`feat`
- Section 1 states that this commit is feature work, not a bug fix.
- Section 2 describes the new capability, goal, and boundary.
- Section 3 explains the core implementation and key design choices.
- Section 4 states affected modules, compatibility, and runtime behavior.

`chore`
- Section 1 states that this commit is maintenance work, not feature or bug-fix work.
- Section 2 describes the maintenance target and affected assets.
- Section 3 explains key changes and tradeoffs.
- Section 4 states affected modules, build impact, and runtime impact.

`docs`
- Section 1 states that this commit updates documentation only.
- Section 2 describes the document scope and reader-facing coverage.
- Section 3 explains the update plan and key edits.
- Section 4 states affected modules, compatibility, and runtime impact, usually none.

`refactor`
- Section 1 states that this commit is a refactor, not feature or bug-fix work.
- Section 2 describes the maintainability problem and refactor goal.
- Section 3 explains the structural changes and how behavior equivalence is protected.
- Section 4 states affected modules, build impact, and runtime impact, expected unchanged.

`test`
- Section 1 states that this commit is test work, not product feature work.
- Section 2 describes the target behavior and the risks covered.
- Section 3 explains new or adjusted test cases and execution mode.
- Section 4 states affected modules, build impact, and runtime impact, usually none.

## Commit Execution

Do not use `git commit -m` for multiline messages.

Use heredoc with `git commit -F -`, for example:

```bash
git commit -F - <<'EOF'
type(scope): subject

[Section]
...
EOF
```

After committing, report:

- the commit hash
- the full commit message

## Common Mistakes

- Choosing `docs` when code or tests changed materially.
- Choosing `refactor` for a real bug fix or feature.
- Letting commit language follow the current chat instead of repository history.
- Mixing English and Chinese section labels in one message.
- Describing "local changes" or "uncommitted changes" instead of "this commit".
- Using `git commit -m` or escaped `\n` for multiline bodies.
