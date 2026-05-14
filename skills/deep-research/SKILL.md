---
name: deep-research
description: Use when the user explicitly asks for deep research / 深度研究 / 深入调研, or when they clearly need evidence-driven, multi-source research for a decision, report, due diligence, current-state analysis, or contested/high-stakes question. Produces validated synthesis with traceable citations.
---

# Deep Research

Deep research is a disciplined research workflow, not a longer web search. Use it to answer questions where factual accuracy, source quality, recency, disagreement, and decision usefulness matter.

Keep the run proportional. A narrow question should get a tight evidence brief. A broad, contested, or high-stakes question should get a fuller research report.

## Activation

Use this skill when one of these is true:

- The user explicitly says "deep research", "深度研究", "深入调研", or "deep dive".
- The user asks for a research-backed report, memo, market scan, technical comparison, policy/current-state analysis, or due diligence.
- The answer depends on current facts, contested evidence, multiple stakeholders, or source credibility.
- The user will likely use the answer for planning, external writing, investment, compliance, medical, legal, product, or engineering decisions.

Do not use this skill for quick definitions, simple factual lookups, ordinary coding questions, casual opinions, or cases where one authoritative source fully resolves the question.

If the user's wording is ambiguous, infer the lightest mode that will still protect accuracy.

## Choose A Mode

### Fast Deep Research

Use for narrow questions, initial briefs, short memos, or "quick research" requests.

Minimum standard:

- 2-4 focused subquestions.
- Usually 3-6 high-quality sources.
- At least one primary or official source when available.
- Cross-check the facts that drive the conclusion.
- Final output usually has 3-5 findings.

Do not use fast mode for high-stakes medical, legal, financial, compliance, safety, or broad contested questions.

### Standard Deep Research

Use for broad, strategic, contested, high-stakes, or external-facing work.

Minimum standard:

- Explicit research frame and scope.
- Multiple source families, not just one search phrasing.
- Usually 8-15 strong sources, adjusted to topic size.
- Primary/official sources for central claims whenever available.
- Cross-check important facts, numbers, dates, roles, and versions.
- Treat material contradictions directly.
- Final output includes findings, analysis, uncertainty, implications, and references.

## Research Frame

Before searching, define these internally. Show them only when helpful.

- Primary question: what must be answered.
- User purpose: decision, explanation, comparison, writing support, due diligence, etc.
- Scope: included and excluded topics, geography, time horizon, domain.
- Audience: general, executive, technical, academic, operational.
- Recency need: historical, current, latest, today, this year, version-specific.
- Output shape: brief, report, matrix, recommendation, memo, annotated bibliography.

Ask a clarification only when a missing boundary would materially change the research. Otherwise state reasonable assumptions in the answer.

## Source Strategy

Use the strongest source types available for the task:

- Official, primary, or original sources: laws, filings, standards, docs, reports, datasets, papers, press releases, project repositories.
- Peer-reviewed or formal technical sources: trials, reviews, standards, RFCs, specifications, benchmarks.
- Institutional sources: regulators, governments, universities, think tanks, industry bodies.
- Reputable journalism and analysis: useful for events, stakeholder reactions, and context, but not a substitute for primary evidence.
- Expert commentary: useful for interpretation; label it as interpretation.
- User-provided files or private sources: inspect them first when they are central to the question.

Prefer source fitness over source quantity. Do not treat repeated secondary summaries as independent confirmation.

## Domain Evidence Rules

Apply these priority rules when relevant:

- Medical/biomedical: prefer systematic reviews, clinical guidelines, randomized trials, large cohort studies, regulator labels, and trial registries. Separate efficacy, safety, population, endpoint, and evidence certainty.
- Legal/policy/compliance: prefer statutes, regulations, agency guidance, court opinions, official notices, and effective dates. Treat commentary as secondary.
- Finance/investment/markets: prefer filings, audited statements, exchange/regulator data, central-bank or statistical-agency data, fund documents, and current prices/fees/premiums. State data periods and market accessibility.
- Software/API/standards: prefer official docs, source code, changelogs, release notes, specs, RFCs, and reproducible examples. Verify version and date.
- News/current events: distinguish event date, publication date, update time, and what is confirmed versus alleged.
- Company/product research: prefer official docs, pricing pages, filings, support docs, changelogs, status pages, and credible user/industry evidence.

## Search Workflow

### 1. Map

- Start with broad discovery to identify terms, actors, source names, dates, and disputed points.
- Build a small topic map: dimensions, likely primary sources, gaps, and likely biases.
- Do not settle on the first plausible narrative.

### 2. Deepen

- Search each important dimension with varied phrasing.
- Open and read important sources beyond snippets.
- Capture claim, source, date, evidence type, limitation, and relevance.
- Seek counterevidence or criticism for major claims.

### 3. Validate

For every central finding:

- Verify important numbers, names, dates, roles, versions, and definitions.
- Cross-check with independent sources where possible.
- Prefer primary evidence when secondary sources conflict.
- Separate facts, interpretations, tentative inferences, and unresolved disputes.
- Downgrade confidence when evidence is old, indirect, paywalled/unread, derivative, or inconsistent.

### 4. Synthesize

- Group findings by what matters to the user's purpose.
- Lead with conclusions, then evidence.
- Explain disagreement instead of flattening it.
- State practical implications and remaining uncertainty.

## Temporal Rules

Never assume "latest" from memory. Use the actual current date in context.

When time matters, distinguish:

- Publication date.
- Event date.
- Data coverage period.
- Effective date or version date.
- Last updated date.

Precision should match the request:

- "today" or "just released": day-level verification.
- "this week": week-level verification.
- "latest" or "recent": usually month-level verification.
- "trend" or "this year": period and data-window verification.

Treat undated pages, stale statistics, superseded versions, and derivative articles cautiously.

## Evidence Thresholds

Use these defaults unless the user asks for stricter standards:

- Low-stakes background fact: one credible source is enough.
- Important factual claim: two independent credible sources when possible.
- Numeric/statistical claim: source, timeframe, population/scope, and measurement method.
- High-stakes claim: primary source plus independent confirmation where possible.
- Contested claim: present competing interpretations and why sources disagree.
- Recommendation: link the recommendation to explicit evidence and assumptions.

If a threshold cannot be met, say so and lower certainty.

## Failure And Access Limits

If research is limited by tool access, paywalls, missing PDFs, blocked pages, unavailable search, weak source quality, or time constraints:

- Say what could and could not be checked.
- Do not imply unread sources were read.
- Prefer "the available evidence suggests" over stronger language.
- List the specific follow-up evidence that would change confidence.

## Internal Evidence Log

Track important evidence internally using this shape. Do not show it unless useful.

```text
Claim:
Source:
Source type:
Date / data period / version:
What it supports:
Limitations or bias:
Confidence: high | medium | low
Status: consensus | disputed | tentative
```

For complex research, keep a small contradiction list:

```text
Issue:
Source A says:
Source B says:
Likely reason for difference:
How final answer handles it:
```

## Output Formats

Choose the format that best fits the user.

### Evidence Brief

Use for fast mode.

```markdown
## Answer

## Key Findings

## Evidence And Caveats

## References
```

### Decision Memo

Use when the user needs to choose or act.

```markdown
## Recommendation

## Rationale

## Options Compared

## Risks And Unknowns

## References
```

### Research Report

Use for standard mode.

```markdown
## Research Question

## Executive Summary

## Key Findings

## Detailed Analysis

## Areas Of Consensus

## Areas Of Disagreement Or Uncertainty

## Implications

## References
```

### Comparison Matrix

Use when alternatives are central.

```markdown
## Short Answer

| Option | Strengths | Weaknesses | Evidence | Best Fit |
|---|---|---|---|---|

## Notes

## References
```

Adapt headings freely. Do not force an academic paper shape when a memo, table, or short brief is more useful.

## Citation Rules

Every key finding needs traceable support.

Use the citation style that is clearest for the context:

- Markdown links inline for short chat answers.
- Footnotes for long reports.
- A table column for comparison matrices.
- A compact source list for briefs.

For each important source, include enough metadata to audit it:

- Author or institution.
- Title or page name.
- Publication/update/effective date when available.
- URL or retrievable identifier.
- What the source establishes.
- Major limitation when relevant.

Do not overquote. Quote only short passages when wording matters; otherwise paraphrase and cite.

## Language And Math

Match the user's language and expertise.

- Explain technical terms when the target audience needs it.
- Skip basic definitions for expert audiences.
- Use analogies only when they reduce cognitive load.
- Prefer plain language, active voice, and direct conclusions.
- Use LaTeX for real formulas. Ordinary percentages, ratios, and simple comparisons can stay in normal text.

## Completion Checklist

Before finalizing, verify:

- The answer directly addresses the research question.
- Scope, assumptions, and time window are clear.
- Central claims have citations.
- Source quality is proportional to the stakes.
- Important dates, versions, numbers, and roles were checked.
- Disagreement and uncertainty are visible.
- Recommendations are tied to evidence and assumptions.
- Access limits or weak evidence are disclosed.
- The output format serves the user's purpose instead of showcasing process.

## Common Failure Modes

Avoid:

- Turning deep research into a link dump.
- Writing a long background section before answering.
- Treating snippet text as if the source was read.
- Counting repeated secondary reports as independent confirmation.
- Ignoring primary sources.
- Hiding uncertainty to sound decisive.
- Using fast mode to bypass validation.
- Forgetting dates on current or versioned claims.
- Forcing footnotes or academic headings where a brief or matrix would be clearer.
