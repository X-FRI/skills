---
name: ascii-art-diagrams
description: Use when creating text-only diagrams in markdown, code comments, chat, or terminal output and you need stable rendering across fonts, platforms, and narrow viewports.
---

# ASCII Art Diagrams

## Overview

Use text diagrams to explain flow, structure, or layout without relying on images.

Default to plain ASCII. Treat Unicode box-drawing as an optional enhancement mode, not the baseline. The core rule is rendering stability first, visual polish second.

## When to Use

Use this skill when creating:
- Flow charts in markdown or chat
- Decision trees in docs or code reviews
- Data comparison tables, metric summaries, or before/after tradeoff views
- File trees and hierarchies
- Small call-flow or state-flow diagrams
- Text boxes for notes or warnings

Do not use this skill when:
- A real diagram tool would be clearer
- The output must support complex 2D layout
- The diagram depends on precise visual alignment across mixed fonts

## Mode Selection

Choose the simplest mode that will survive the destination environment.

### Mode A: ASCII-safe mode (default)

Use ASCII-safe mode unless there is a clear reason not to.

Best for:
- Chat replies
- GitHub comments
- Markdown viewed on unknown clients
- Code comments
- Mobile or narrow-width viewing

Allowed characters:
- Boxes and nodes: `[ ] ( )`
- Tables: `+ - |`
- Vertical flow: `|`
- Arrowheads: `v ^ < >`
- Branches: `+-->`
- Bullets: `- *`

Example:

```text
[Request patientId]
    |
    v
[Resolve PatientScope]
    |
    v
[Check patientId in scope.patientIds]
    |
    +--> [No] -> [Return not visible]
    |
    +--> [Yes]
            |
            v
    [Load patient study profile facts]
            |
            +--> [Parse events]
            |
            +--> [Desensitize informed content]
            |
            +--> [Split current / historical participations]
            |
            v
    [Return study profile]
```

### Mode B: Unicode layout mode (optional)

Use Unicode mode only when box borders or visual grouping materially improve understanding and the output will be viewed in a monospace-friendly environment.

Best for:
- Rich markdown docs
- Readmes with known rendering context
- Carefully formatted note/info boxes

Allowed characters:
- Borders: `┌ ┐ └ ┘ ─ │ ├ ┤ ┬ ┴ ┼`
- Arrows: `▼ ▲ ◀ ▶ → ←`
- Blocks: `░ ▒ ▓ █`

Do not assume Unicode mode is safer or more professional. It is only a different tradeoff.

## Rule 1: Prefer Stability Over Decoration

If ASCII and Unicode are both understandable, choose ASCII.

Use Unicode only when it adds one of these:
- Clear section boundaries
- Compact side-by-side grouping
- Better visual scanning for boxed notes

Avoid Unicode when:
- The text will be edited often
- The diagram contains long labels
- The output may appear in proportional fonts

## Rule 2: Use ASCII Tables for Data Comparison

When the task compares metrics, options, before/after states, costs, savings, or
tradeoffs, prefer an ASCII table over a flow diagram.

Use tables for:
- Numeric comparisons
- Option matrices
- Before/after summaries
- Pros/cons with repeated dimensions
- Ranked lists with the same fields per row

Keep table cells short. Move long caveats or interpretation into bullets below
the table instead of widening the table.

Preferred pattern:

```text
+----------------+----------+----------+
| Case           | Before   | After    |
+----------------+----------+----------+
| Small edit     | baseline | -30-60%  |
| Bug triage     | baseline | -50-75%  |
| Large logs     | baseline | -80-95%  |
+----------------+----------+----------+
```

Avoid using a flow diagram for comparison-only answers:

```text
[Before]
   |
   v
[After]
```

That shape hides the dimensions being compared. Use a table unless there is also
a real sequence, branch, or state transition to explain.

## Rule 3: Flow Diagrams Should Be Linear First

Model the main path vertically. Add side branches only for real decisions.

Preferred pattern:

```text
[Start]
   |
   v
[Decision]
   |
   +--> [No] -> [Exit]
   |
   +--> [Yes]
           |
           v
        [Continue]
```

Guidelines:
- Keep the primary path vertical
- Put branch labels close to the branch target
- Keep node text short and action-oriented
- Avoid crossing return lines unless they add real value

## Rule 4: Tree Structures Should Use Plain Connectors

For trees, prefer ASCII-safe connectors:

```text
root
|
+-- api
|   +-- handlers
|   +-- services
+-- db
+-- tests
```

Use Unicode tree glyphs only in Unicode mode and only when the environment is controlled.

## Rule 5: Boxes Are Secondary, Not Default

Do not wrap everything in a box.

Boxes are good for:
- Notes
- Warnings
- Small grouped summaries

ASCII box example:

```text
+----------------------------------+
| NOTE                             |
| Cache is not invalidated here.   |
| Results may remain stale.        |
+----------------------------------+
```

Unicode box example:

```text
┌──────────────────────────────────┐
│ NOTE                             │
│ Cache is not invalidated here.   │
│ Results may remain stale.        │
└──────────────────────────────────┘
```

## Rule 6: When Using Boxes and Tables, Keep Width Rules Explicit

Boxes and ASCII tables need strict width verification.

### ASCII boxes

All lines must have the same character count.

```text
+----------------------+
| short                |
| longer content here  |
+----------------------+
```

### Unicode boxes

All lines must have the same character count.

```text
┌──────────────────────┐
│ short                │
│ longer content here  │
└──────────────────────┘
```

### ASCII tables

All border and row lines must have the same character count.

```text
+--------+-------+
| Metric | Value |
+--------+-------+
| Saved  | 96.7% |
+--------+-------+
```

If you are not using a box or table, do not force artificial horizontal padding just to make lines line up.

## Rule 7: Avoid Mixing Dense Connectors With Dense Text

Do not combine complicated connector art with long prose on the same line.

Bad:

```text
+--> [If user is in a partially desensitized cohort with historical events loaded]
```

Better:

```text
+--> [Eligible]
      |
      v
   [Load cohort-specific historical events]
```

Short labels keep diagrams scannable.

## Rule 8: Use Labels Sparingly

Use simple branch labels such as:
- `Yes`
- `No`
- `Hit`
- `Miss`
- `Error`
- `Empty`

Avoid sentence-length branch labels inside the connector path. Put longer explanation in nearby prose instead.

## Rule 9: Verification Rules

### For non-box ASCII diagrams

Verify by inspection:
- Main path is visually obvious
- Branches are unambiguous
- Indentation is consistent
- No line wraps in the target context

### For boxes and tables

Verify width with tooling when the box or table matters.

Example command:

```bash
cat <<'EOF' | while IFS= read -r line; do printf "%d: %s\n" "$(echo -n "$line" | wc -m)" "$line"; done
+----------------------+
| short                |
| longer content here  |
+----------------------+
EOF
```

All lines must report the same character count.

This check is recommended for ASCII boxes and required for Unicode boxes.

When validating an example already written in a file, check the exact line range:

```bash
awk 'NR>=128 && NR<=134 {print length($0) ":" $0}' path/to/file.md
```

Every reported length in the range should match. Use `nl -ba path/to/file.md`
first if you need stable line numbers. Prefer this over eyeballing tables after
editing a skill, README, or markdown report.

For ASCII tables, also verify:
- Numeric columns use consistent units
- Long values are moved to notes below the table
- The table does not wrap in the target context

## Rule 10: Long Text Handling

When labels get too long:
- Shorten node text to the action or decision
- Move explanation into bullets below the diagram
- Split one overloaded diagram into two smaller diagrams

Do not widen diagrams indefinitely. Wide diagrams fail on mobile and in narrow panes.

## Rule 11: Environment Assumptions

Assume the rendering environment is hostile unless you know otherwise.

Hostile means:
- Unknown font
- Unknown line height
- Unknown markdown renderer
- Possible mobile viewport
- Possible proportional fallback font

Under hostile conditions:
- Use ASCII-safe mode
- Keep diagrams narrow
- Avoid Unicode tree art
- Avoid pixel-art blocks
- Avoid side-by-side layouts

## Quick Reference

### Default flow

```text
[Start]
   |
   v
[Check]
   |
   +--> [No] -> [Stop]
   |
   +--> [Yes]
           |
           v
        [Continue]
```

### Default tree

```text
root
|
+-- child-a
|   +-- grandchild
+-- child-b
```

### Default comparison table

```text
+-----------+--------+--------+
| Scenario  | Before | After  |
+-----------+--------+--------+
| Small     | 100%   | 40-70% |
| Large     | 100%   | 5-30%  |
+-----------+--------+--------+
```

### ASCII note box

```text
+------------------------------+
| NOTE                         |
| Explain the exception here.  |
+------------------------------+
```

### Unicode note box

```text
┌──────────────────────────────┐
│ NOTE                         │
│ Explain the exception here.  │
└──────────────────────────────┘
```

## Common Mistakes

- Choosing Unicode by default when ASCII would be clearer
- Using a flow diagram when a comparison table would be clearer
- Turning a simple flow into a decorative box maze
- Letting labels become full sentences
- Making diagrams too wide for chat or mobile
- Manually padding non-box diagrams for fake symmetry
- Treating visual neatness as more important than portability
