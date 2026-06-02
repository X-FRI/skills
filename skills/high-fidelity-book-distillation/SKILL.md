---
name: high-fidelity-book-distillation
description: "Use when the user asks for a non-fiction book summary, 高保真读书笔记, 拆书, 导读, argument map, chapter study guide, application manual, reading route, critical evaluation, multi-book synthesis, or interactive book-learning dialogue."
---

# High-Fidelity Book Distillation

## Purpose

This skill turns non-fiction books into structured knowledge systems.

The goal is not to produce a short promotional summary. The goal is to reconstruct the book's argument, preserve its conceptual structure, identify its evidence, separate facts from interpretation, expose limitations, and help the reader absorb and use the book.

A good output should help the user:

- Understand what the book is really arguing.
- See how the book's parts connect.
- Identify the book's core concepts and claims.
- Distinguish evidence, argument, story, advice, and speculation.
- Decide which parts of the original book are worth reading closely.
- Apply the book safely and conditionally.
- Place the book inside a larger knowledge system.
- Turn reading into recall, writing, decisions, teaching, or action.

## Core Principle

Do not summarize the book as a list of topics. Reconstruct the book as a system of problems, claims, reasons, evidence, concepts, examples, caveats, and applications.

A strong book distillation should answer two questions:

- What is the author's argument?
- How should this book change the reader's understanding, attention, judgment, or behavior?

For serious tasks, the best output is reader-calibrated:

```text
High-fidelity distillation =
author's argument structure
+ evidence and concepts
+ reader motivation
+ use case
+ absorption and output path
```

## Default Interaction Model

For ordinary book distillation, do not start by asking the user to choose among output modes such as overview, learning guide, action manual, reading route, or critical evaluation. These are compatible dimensions. Default to a comprehensive high-fidelity guide that includes the useful parts of all of them when the request calls for depth.

Use output-clarification questions only when the user's request is genuinely ambiguous and a reasonable default would likely be wrong.

Interactive learning is different from output calibration. Socratic questions should usually come after the first guide, as an optional deeper-learning follow-up. If the user explicitly asks for an interactive reading session, guided study, or "ask me questions" mode, enter the learning dialogue directly.

## Copyright and Source Boundaries

Do not reproduce long passages from copyrighted books.

Do not create a chapter-by-chapter rewrite that can substitute for the original.

Do not fabricate:

- Page numbers.
- Chapter titles.
- Section titles.
- Kindle locations.
- Quotes.
- Studies.
- Data.
- Source locations.
- Author claims.

If the user provides source text, rely primarily on that text.

If the user provides only a title, make clear that the output is based on general knowledge unless the user provides the text, table of contents, notes, or excerpts.

If the source has no page numbers, use chapter titles, section titles, subsection titles, or distinctive topic anchors as source pointers.

If the user asks for a guide that makes the original unnecessary, reframe the task. You may produce a high-fidelity learning guide, but do not recreate the book or imply that the guide fully replaces the original.

## Required Support Files

This skill is split across support files. Load only what the task needs:

- `references/workflow.md`: use when executing any book distillation — contains the default comprehensive guide flow, optional Socratic learning dialogue, book-type classification, and post-draft refinement.
- `references/output-templates.md`: use when drafting the final output — contains template structures for learning guides, chapter studies, comparative syntheses, application manuals, and reading routes.
- `references/domain-rules.md`: use when distilling financial, investment, medical, legal, or safety-sensitive books.
- `references/prompts.md`: use when offering reusable prompt templates to the user.

## First Step

Before writing:

1. Identify the reader's goal and whether the user asked for ordinary guide mode or interactive learning dialogue using `references/workflow.md` (sections 1-6).
2. Classify the book type and choose the output emphasis using `references/workflow.md` (sections 7-8) and `references/output-templates.md`.
3. For finance, medical, or safety-sensitive books, load `references/domain-rules.md`.
4. For user-facing prompt templates, load `references/prompts.md`.

## Style Rules

Write in the user's language unless the user asks otherwise.

Prefer clear, ordinary prose over promotional phrasing.

Avoid empty phrases such as:

- "This book is a must-read."
- "It provides valuable insights."
- "In today's fast-paced world."
- "The author masterfully explores."
- "This comprehensive guide."

Use concrete phrasing:

- "The book's strongest claim is..."
- "The argument depends on..."
- "This is useful when..."
- "This becomes risky when..."
- "The reader should not confuse..."
- "The author supports this with..."
- "The book does not fully address..."
- "A reader may misuse this by..."

Do not over-compress. The goal is not the shortest possible summary. The goal is the smallest useful version that preserves the book's knowledge structure.

Do not over-polish into promotional prose. Keep the tone analytical, calm, and practical.

For Chinese output, avoid artificial consulting-style phrasing unless the domain requires it. Prefer direct wording such as:

- 问题在于
- 主要是
- 麻烦的是
- 这本书想纠正的是
- 读完之后，读者应该能
- 这个方法适合
- 这个说法要小心

## Quality Checklist

Before finalizing the output, check:

- Does the output explain the book's argument rather than merely list topics?
- Does it state the problem the book tries to solve?
- Does it identify the misconception the book corrects?
- Does it show how the parts of the book connect?
- Are core concepts explained before advice is given?
- Are the author's claims separated from evidence and interpretation?
- Are anecdotes treated as anecdotes?
- Are practical rules conditional rather than absolute?
- Are context-bound claims identified?
- Are copyrighted passages avoided?
- Are page numbers, quotes, and source locations not fabricated?
- Are source pointers included where they help verification?
- Does the output say what still requires reading the original?
- Does the output help the user decide what to do differently?
- Does it include a before / after shift when useful?
- Does it help the reader place the book inside a broader knowledge system?
- Does it include retention or output prompts when the user wants to remember or use the book?
- For ordinary guide mode, did it avoid forcing the user to choose among compatible output dimensions?
- If a learning dialogue was used, did the questions deepen the reader's understanding instead of asking about output preferences?
- If a learning dialogue was offered after the guide, is it optional and focused on Socratic understanding, not another output menu?
- Is the prose clear, ordinary, and precise?
- Is the output useful without pretending to be the book itself?
