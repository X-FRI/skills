---
name: discovering-project-context
description: Use when the user wants a fast but comprehensive understanding of an unfamiliar repository, including its purpose, architecture, stack, key workflows, and recent engineering direction.
---

# Discovering Project Context

## Overview

Use this skill to build a reliable working model of a repository at the start of a conversation. The goal is not to read everything. The goal is to extract the highest-signal evidence first, identify the system shape quickly, and state what is still unknown without guessing.

This skill is for project discovery, onboarding, and architecture orientation. It should produce a concise but evidence-grounded project brief that helps the next engineering step happen faster.

## When to Use

- The user asks to understand the current project, repository, codebase, architecture, or tech stack.
- The user asks for a quick onboarding summary before making changes.
- The user wants recent project direction derived from repository evidence and git history.
- The task starts with little context and the assistant needs a dependable mental model before deeper work.

Do not use this skill for deep implementation planning, code review, or one-file explanations. Use it to establish the project map first.

## Output Language Policy

This `SKILL.md` stays in English. The actual project summary must use the dominant natural language found in the user's current request and nearby user-authored context.

Use this decision order:

1. Inspect the user's current message first.
2. If the current message is too short or mixed-language, inspect recent user-authored messages in the same thread.
3. Choose the language that dominates by volume and count across the relevant user-authored text.
4. If two languages are close, choose the language used in the majority of user-authored text.
5. If the result is still inconclusive, use the main language already present in the artifact being edited or the project note the user wants updated.
6. If evidence is still inconclusive, default to English.

Do not mix languages in headings and prose unless the task itself requires quoting multilingual source material.

## Core Principle

Project discovery is an evidence-ranking problem.

Do not start with broad directory wandering or a command dump. Start with the files and records most likely to explain:

- what the project is
- how it starts
- how it is structured
- what changed recently
- what is still uncertain

## High-Signal Source Order

Read in this order unless the repository clearly signals a better local convention:

1. Root README and docs index pages
2. Project manifests such as `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `pom.xml`, workspace files, and lockfiles when needed
3. Runtime and delivery files such as `Dockerfile`, compose files, CI pipelines, deploy configs, `Makefile`, `Taskfile`, and scripts
4. Top-level code directories such as `src`, `app`, `server`, `services`, `packages`, `apps`, `cmd`, `internal`, `tests`
5. Architecture notes, ADRs, contributing guides, and agent instructions if present
6. Recent git history, prioritized by the last 20 to 30 commits and clustered into themes instead of listed mechanically

If the repository is large, sample for structure first. Do not try to read every document.

## Discovery Workflow

### 1. Establish repository identity

Answer these questions first:

- What kind of repository is this: app, service, monorepo, library, CLI, infrastructure, or mixed system?
- Who or what does it serve?
- What are the primary runtime boundaries?

If this cannot be confirmed from evidence, say so directly.

### 2. Build the structural map

Identify:

- top-level directories and their responsibilities
- main entrypoints
- package or service boundaries
- where tests live
- where deployment or operational logic lives

Prefer a readable module map over a raw directory tree.

### 3. Infer the primary execution paths

Trace the main request path, job path, event path, or user workflow when evidence exists. Focus on the system's central happy path before edge cases.

Good discovery summaries answer:

- how the system starts
- how work enters the system
- which modules carry the core logic
- which modules persist state, call external systems, or coordinate workflows

### 4. Summarize recent engineering direction

Use recent git history to identify themes, not a commit log transcript.

Cluster changes into a small number of workstreams such as:

- feature delivery
- bug fixing
- refactoring
- infrastructure or tooling
- test hardening

Explain what those themes imply about the team's current focus. Mark uncertainty when the signal is weak.

### 5. Surface uncertainty explicitly

Every project summary must include:

- missing documentation
- ambiguous module boundaries
- probable risk areas
- open questions that would matter before implementation

Unknowns are part of the deliverable. Do not replace them with confident guesses.

## Output Contract

Produce a structured summary with these sections:

1. `30-Second Summary`
2. `Project Identity`
3. `Tech Stack and Runtime`
4. `Architecture and Directory Map`
5. `Core Workflow or Data Flow`
6. `Development, Test, Build, and Deploy Clues`
7. `Recent Engineering Themes`
8. `Risks, Gaps, and Unknowns`
9. `Where to Read Next`

Within the summary:

- Ground important claims in specific files or git evidence.
- Prefer short paragraphs and tight bullets over long essays.
- Distinguish confirmed facts from reasonable inference.
- End with a short “read these first” list for the next engineer.

## Common Mistakes

- Treating “read all docs” as a strategy.
- Listing files without explaining their role.
- Dumping recent commits instead of clustering themes.
- Describing the stack without describing runtime boundaries.
- Presenting guesses as established architecture.
- Ignoring what is missing or unclear.

## Completion Standard

The skill is complete when a new engineer could read the summary and know:

- what this repository does
- where the core logic lives
- how it is likely run and changed
- what happened recently
- what still needs confirmation before deeper work
