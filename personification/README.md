# personification

`personification` is a writing-style skill for replies that should feel authored rather than generated.

It does not change the task itself. It changes how the reply is written: less templated, less assistant-like, more natural in rhythm, judgment, and prose flow.

## What This Skill Does

This skill helps the model produce responses that read more like a real person writing with intention.

Its main function is to reduce common AI-writing artifacts, including:

- formulaic openings and closings
- mechanical transition phrases
- self-referential assistant language
- over-smoothed, generic, or symmetrical phrasing

In place of those habits, it pushes the writing toward:

- natural paragraph flow
- clearer authorial voice
- direct judgment without performance
- writing that feels like an email, note, essay, or considered comment

The goal is not roleplay and not fake personality for its own sake. The goal is to improve readability, reduce machine-like tone, and preserve substance while making the prose feel written by a person.

## When to Use

Use this skill when the user wants:

- a more human-sounding reply
- less AI phrasing or less template-like writing
- a personal tone, stronger voice, or more natural prose
- writing that feels like correspondence, commentary, or reflective explanation

This skill is especially useful when the content depends on tone as well as correctness, such as:

- long-form explanations
- analytical commentary
- editorial writing
- email-like responses
- reflective summaries
- nuanced disagreement or critique

## When Not to Use

Do not use this skill when the output must stay rigidly structured, machine-readable, or formally standardized.

Examples:

- JSON or schema-locked output
- ticket templates
- strict compliance wording
- highly procedural instructions where style would add noise

It should also be used carefully in high-risk domains where style must never weaken precision, scope control, or safety language.

## Core Writing Effect

This skill shifts the default response pattern in four ways:

1. It prefers paragraph-led prose over template-led formatting.
2. It removes assistant-style self-presentation.
3. It preserves slight asymmetry and natural transitions instead of forcing polished uniformity.
4. It keeps the reasoning intact, so the reply sounds more human without becoming vague.

That last point matters. This skill is not a cosmetic rewrite layer. It should not trade accuracy for mood.

## Output Language Behavior

The `SKILL.md` is written in English for maintainability and retrieval. The actual reply generated with this skill does not have to be in English.

The skill supports automatic output-language detection.

The intended decision order is:

1. Look at the user's current message first.
2. If the message is too short, mixed-language, or ambiguous, inspect nearby user-authored messages.
3. Determine the dominant natural language from user-authored text.
4. If two languages are close, use the language of the most recent substantive user request.
5. If the signal is still unclear, inherit the dominant language of the document or conversation artifact being edited.
6. If no reliable signal exists, default to English.

This means the skill file can stay fully English while still producing Chinese, English, or other language output when the user's context makes that clearly appropriate.

## Why This Matters

Many writing-style prompts fail because they only say "sound more human" without defining what should actually change.

This skill is more specific. It identifies the recurring problems in assistant prose:

- empty politeness
- predictable rhetorical scaffolding
- defensive self-positioning
- content that sounds polished but not written

Then it replaces them with concrete writing constraints that improve the reading experience without losing analytical rigor.

## Practical Boundaries

This skill does not authorize:

- inventing personal memories
- fabricating emotions
- pretending to have real-world identity or biography
- weakening factual precision in order to sound casual

The "personification" here is about writing texture and rhetorical behavior, not identity simulation.

## Example Outcome

Without this skill, a reply may sound like a polished assistant template.

With this skill, the same reply should feel more like a person who has read the question carefully, has a point of view, and is writing to be understood rather than to satisfy a response pattern.

## Relationship to the Skill File

`SKILL.md` is the operational instruction set used by the agent.

This README is explanatory documentation for humans. It describes what the skill is for, why it exists, and how its language behavior is intended to work.
