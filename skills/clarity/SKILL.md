---
name: clarity
description: Writing editor for explicit rewrite, draft, or polish requests where the goal is clearer, more reader-friendly prose. Use for emails, comments, docs, explanations, PR text, and user-facing writing. Focus on reader effort, precision, coherence, useful structure, and ordinary wording. Remove templated assistant phrasing, translated AI tone, vague claims, and pseudo-professional language. Do not use for machine-readable formats, compliance/audit/security reports, or ordinary technical work where the user did not ask for writing changes.
---

# Clarity

Use this skill to edit writing for clarity, not to perform personality.

The goal is ordinary, credible prose that is easy for the intended reader to follow. Do not make every answer shorter, harder, warmer, or more casual. Preserve the useful parts of the original: facts, intent, structure, politeness, uncertainty, and the writer's pace.

## Workflow

1. Identify the writing context and reader:
   - Transactional: PR descriptions, commit messages, review comments, issue replies
   - Explanatory: technical explanations, analysis, docs, internal notes
   - External-facing: emails, announcements, proposals, user-facing copy
   - Personal: notes or messages where the user's own voice matters
   - Ask silently: what does this reader already know, and where will they have to guess?

2. Preserve what is doing real work:
   - Concrete facts and technical terms
   - The user's stance and uncertainty level
   - Useful politeness, acknowledgement, and setup
   - Necessary structure and transitions
   - The language implied by user-authored text

3. Remove or rewrite what sounds manufactured:
   - Stock assistant openings and closings
   - Empty claims about having analyzed, reviewed, or considered things
   - Over-polished filler that creates importance without adding information
   - Direct translations of English assistant phrasing into Chinese
   - Consulting-style vocabulary used to fake precision

4. Tune the prose:
   - Make the sentence say exactly what happened, changed, or should happen.
   - Keep enough setup for the reader to follow the point.
   - Repeat key terms when repetition prevents ambiguity.
   - Use transitions to show how two sentences or paragraphs are related.
   - Prefer normal wording over performatively professional wording.
   - Do not add personal history, feelings, certainty, or intimacy not present in the source.

## Reader-Effort Checks

Before returning the rewrite, check these points:

- Can the reader tell who did what?
- Does each sentence connect to the previous one?
- Are vague words replaced with concrete claims?
- Are terms used consistently instead of varied for style?
- Does the paragraph state its point early enough?
- Did the edit remove useful context just to sound concise?

## Chinese Style Rules

For Chinese, avoid turning normal speech into artificial professional prose.

Do not default to words like these unless the user's text already uses them or the domain truly requires them:

- 根因
- 边界
- 闭环
- 抓手
- 赋能
- 链路
- 维度
- 沉淀
- 对齐
- 落地
- 综合来看
- 从 X 角度出发
- 本质上是
- 需要注意的是

Prefer ordinary phrasing:

- 问题在于
- 主要是
- 麻烦的是
- 这里卡住了
- 更像是
- 说白了
- 真正别扭的地方是

These are not banned words. Use them when they are the natural domain term. Do not use them to make a sentence look more technical than it is.

## Context Patterns

### Transactional

Keep it direct, but not curt.

Bad:
> Thank you for bringing this to our attention. I have carefully reviewed the issue and conducted an in-depth analysis.

Better:
> Reproduced. The migration missed cascade deletes; I will patch the script and add a regression test.

### Explanatory

Make the relation between sentences explicit.

Bad:
> 这个 skill 的效果不好。它里面有一些词很 AI，所以需要优化。

Better:
> 这个 skill 的问题不只是用了几个 AI 高频词。更麻烦的是，它没有先判断读者是谁、这段话要解决什么问题，就直接把文字改得更短、更硬。

### Precision

Replace vague evaluation with a claim the reader can check.

Bad:
> 这两个方案存在或多或少的差异。

Better:
> 这两个方案的差异主要在数据同步方式：方案 A 由前端触发，方案 B 由后端任务定时同步。

### Coherence

Do not vary terms just to avoid repetition.

Bad:
> 这个 skill 会调整文本风格。这个写作工具还会处理语气问题。这个表达助手适合改邮件。

Better:
> 这个 skill 用来改写文本风格。它也会处理语气问题，尤其适合润色邮件、评论和说明文字。

### External-Facing

Keep warmth and structure when they help the reader.

Bad:
> We have performed a comprehensive review of your valuable feedback and identified several optimization opportunities.

Better:
> Thanks for the feedback. The issue makes sense, and we are going to adjust the copy so it explains the change more directly.

### Personal Voice

Keep the user's rhythm. Edit lightly.

Bad:
> 这个版本在多个维度上都存在明显优化空间，需要进一步对齐表达目标。

Better:
> 这个版本不太行。它不是不够短，而是听起来太像在装专业。

## Output Rules

- If the user asks for a rewrite, return the rewritten text only unless they ask for explanation.
- If the user asks for critique, lead with the concrete writing problem and show a better version.
- If the user asks for options, provide 2-3 versions with clear tone labels.
- Match the output language to user-authored context, using the current request first.
- If precision matters more than tone, keep the precise structure and only remove obvious filler.
