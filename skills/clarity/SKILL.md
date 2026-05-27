---
name: clarity
description: Use when rewriting, editing, or drafting prose so it sounds specific, situated, and human rather than generic, over-polished, or AI-like. Works for Chinese and English prose, messages, essays, fiction, dialogue, memoir-like writing, public copy, and explanatory text. Focuses on voice, reader effort, scene logic, uneven human rhythm, and concrete context. Avoids template tone, consultant phrasing, fake warmth, excessive symmetry, moral summaries, and detector-gaming.
---

# Clarity

Use this skill to make prose feel written by a person in a real situation.

The goal is not "more casual", "more emotional", or "more human-sounding". The goal is text with a believable speaker, concrete context, uneven but controlled rhythm, and enough specificity that it could not be swapped into any other answer.

Do not optimize for AI detector scores. Do not add random errors, slang, or messiness. Natural writing is not bad writing.

## Core Rule

Before rewriting, identify why the text feels artificial.

Most AI-like prose has one or more of these problems:

1. **No situation**: the sentence could belong anywhere.
2. **No speaker**: nobody specific seems to be saying it.
3. **Too much explanation**: it names the emotion, theme, or lesson instead of letting the reader infer it.
4. **Too even**: sentence length, structure, transitions, and paragraph shape are all similarly polished.
5. **Too symmetrical**: every claim is balanced, hedged, and completed.
6. **Too abstract**: it uses categories, values, and summaries where a person would use a concrete detail.
7. **Too helpful**: it explains what the reader already knows.
8. **Too resolved**: it removes hesitation, contradiction, irritation, uncertainty, or partial understanding that should remain.

Fix the actual problem. Do not apply a generic "humanize" pass.

## Workflow

### 1. Identify Context

Silently answer:

- Who is speaking?
- Who is reading?
- What just happened before this text?
- What does the speaker want from the reader?
- Should this text feel polished, private, literary, rough, restrained, funny, angry, tired, formal, or practical?

If the context is missing, infer the most likely one from the user's request. Do not ask unless the missing context would change the rewrite completely.

### 2. Decide The Edit Mode

Use the lightest mode that works:

- **Clean**: remove obvious AI phrasing while preserving structure.
- **Naturalize**: rebuild sentence rhythm and wording so it sounds written in context.
- **Voice match**: preserve the user's own quirks, pacing, and preferred words.
- **Fiction scene**: replace summary with action, perception, dialogue, silence, and subtext.
- **Dialogue**: make characters avoid saying exactly what they mean unless the scene calls for it.
- **Public prose**: keep clarity and credibility; remove inflated claims and stock warmth.

### 3. Preserve Useful Human Texture

Do not automatically smooth away:

- short fragments
- mild repetition
- abrupt transitions
- a plain word repeated for clarity
- partial certainty
- a small contradiction
- understated emotion
- an odd but fitting image
- local rhythm from the user's draft

Only fix these when they confuse the reader or break the intended tone.

### 4. Remove AI-Like Moves

Cut or rewrite:

- stock openings: "在当今", "值得注意的是", "总的来说", "从某种意义上说"
- fake structure: "首先/其次/最后" when no real sequence is needed
- fake depth: "本质上", "深层次", "多维度", "赋能", "闭环", "抓手"
- fake empathy: "我完全理解你的感受" when the situation needs a concrete response
- theme labels: "这体现了人性的复杂"
- emotion labels: "他很悲伤", "她感到一种莫名的失落"
- over-neat contrast: "不是 X，而是 Y" when the thought is not actually that clean
- universal claims: "每个人都会", "我们都知道", "自古以来"
- decorative metaphors that do no work
- summaries of what the paragraph itself just showed

These are not banned words. Use them only when they are the natural wording for this speaker and context.

## Chinese Rules

Prefer ordinary Chinese over translated English structure.

Bad patterns:

- "这不仅是 X，更是 Y"
- "在这个过程中，A 与 B 形成了某种张力"
- "他内心深处涌起一阵复杂的情绪"
- "她试图寻找属于自己的答案"
- "空气中弥漫着尴尬的气息"

Better directions:

- Name the concrete thing.
- Let the emotion leak through action.
- Let the speaker be slightly unfair, impatient, evasive, or incomplete when appropriate.
- Use shorter connective words: "但", "只是", "后来", "问题是", "说白了", "麻烦在这儿".
- Keep one plain sentence if it lands harder than a polished one.

For Chinese fiction, avoid explaining the character's psychology too early. Start from what they notice, avoid, touch, mishear, or refuse to say.

## Fiction And Literary Prose

When editing fiction, do not merely beautify the language.

Check these instead:

1. **Point of view**: does the sentence contain only what this viewpoint could notice, know, or misread?
2. **Agency**: does the character make choices, avoid choices, or rationalize choices?
3. **Subtext**: can the reader infer more than the character says?
4. **Temporal texture**: does the scene have pauses, interruptions, memory jumps, or uneven attention where needed?
5. **Moral ambiguity**: does the prose over-explain who is right, what it means, or how the reader should feel?
6. **Scene pressure**: is there something unsaid, delayed, wanted, or at risk?

Prefer:

- action over emotion labels
- perception over abstract mood
- specific objects over symbolic nouns
- implication over explanation
- one strange concrete detail over three generic beautiful ones
- character-biased narration over neutral summary

### Fiction Rewrite Heuristics

Instead of:

> 他感到非常孤独，仿佛整个世界都抛弃了他。

Try moving through perception or behavior:

> 他把两副碗筷都拿出来，摆好以后才想起今晚没人来。

Instead of:

> 她的内心充满了矛盾和挣扎。

Try making the contradiction visible:

> 她把短信删了。过了两分钟，又从回收站里翻出来。

Do not always use this style. If the original needs direct telling, keep it direct.

## Dialogue

Dialogue should rarely be maximally clear.

Before rewriting dialogue, decide what each speaker wants and what they refuse to say.

Make dialogue more natural by using:

- partial answers
- topic dodges
- interruptions
- repeated words
- unequal sentence lengths
- practical details during emotional moments
- silence or action beats
- mismatched levels of directness

Avoid:

- characters explaining the plot to each other
- everyone speaking in the same rhythm
- perfectly articulated feelings
- using dialogue as a disguised essay
- adding dialect or slang as decoration

## Output Rules

- If the user asks for a rewrite, return the rewritten text only unless they ask for notes.
- If the user asks for critique, give the 2-4 concrete reasons it feels artificial, then a better version.
- If the user asks for options, give at most 3 versions with distinct use cases.
- Preserve the user's language unless asked otherwise.
- Preserve facts, stance, uncertainty, and intent.
- Do not make the text warmer, funnier, rougher, or shorter unless that fits the context.
- Do not over-edit a sentence that already sounds like the user.

## Final Self-Check

Before answering, check:

- Could this text be pasted into many unrelated contexts? If yes, make it more situated.
- Did I replace vague feeling with observable pressure where appropriate?
- Did I accidentally make every sentence equally polished?
- Did I remove the user's useful awkwardness?
- Does the text sound like one speaker, not a committee?
- For fiction: did I leave something for the reader to infer?
