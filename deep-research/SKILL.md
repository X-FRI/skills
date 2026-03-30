---
name: deep-research
description: Use this skill ONLY when the user explicitly requests "deep research" or clearly asks for "深度研究 / 深入调研 / deep research". This skill performs evidence-driven, multi-source research with validation, synthesis, structured citations, and decision-useful output.
---

# Deep Research Skill

## Overview

This skill is for **deep research**, not quick search.

Its purpose is to produce results that are:
- **accurate**: grounded in retrievable evidence
- **current when needed**: sensitive to dates, versions, and recency
- **multi-angle**: covers the topic from more than one important perspective
- **validated**: key claims are checked, not merely repeated
- **readable**: organized for actual decision-making or writing use
- **tool-agnostic**: uses the best available search and retrieval capabilities in the environment
- **citation-ready**: every key finding is traceable

Deep research is a **workflow**, not a single query.

---

## Activation Rule

Apply this skill **only** when the user explicitly requests deep research, for example:
- "do deep research on X"
- "please perform deep research"
- "做一个 deep research"
- "请深度研究这个问题"
- "做深入调研"

If the user does **not** explicitly request deep research, do **not** automatically activate this skill.

---

## Research Modes

This skill supports two modes:

### 1. Standard Deep Research
Use when the user wants a comprehensive, multi-stage, multi-angle, evidence-rich result.

### 2. Fast Deep Research
Use when the user explicitly wants a quick/lightweight deep research result, or when a narrower, lower-cost but still evidence-checked output is more appropriate.

Fast mode is **not** a casual answer.
It is a **compressed research workflow** with reduced breadth but preserved quality controls.

---

## Mode Selection

### Use Standard Deep Research when:
- the user asks for comprehensive or full deep research
- the topic is broad, complex, contested, or multi-dimensional
- the task requires substantial synthesis
- the stakes are high and deeper validation is warranted
- the user is likely to rely on the result for planning, reporting, or external communication

### Use Fast Deep Research when:
- the user explicitly asks for a quick / lightweight deep research result
- the question is narrow and focused
- the user mainly needs a briefing, memo, initial judgment, or writing support
- a full multi-dimension pass would add disproportionate cost

### Do not use Fast Deep Research for:
- high-stakes medical, legal, financial, compliance, or safety questions
- broad or highly disputed topics requiring exhaustive treatment
- tasks explicitly asking for a comprehensive deep research report

---

## Research Objectives

When this skill is active, your goal is to:

1. define the actual research question
2. determine the user's purpose
3. set scope boundaries
4. identify the most important dimensions or subquestions
5. gather evidence from appropriate source types
6. read important sources beyond snippets whenever possible
7. validate key claims
8. distinguish facts, analysis, and inference
9. identify consensus, disagreement, and uncertainty
10. produce a structured, citation-ready result

---

## Research Inputs

Before researching, establish the following whenever they can be inferred:

- **Primary question**: what exactly must be answered
- **Purpose**: explanation, comparison, decision support, strategy, writing support, due diligence, etc.
- **Scope**: what is included and excluded
- **Depth**: overview, moderate depth, or expert-level depth
- **Time horizon**: historical, current, latest, this year, today, etc.
- **Geographic / domain scope**: global, regional, sector-specific, institution-specific, etc.
- **Target audience**: general, executive, technical, academic, operational
- **Desired output**: summary, report, memo, matrix, recommendations, briefing, etc.

If some are unspecified, infer reasonable defaults from context and proceed.

---

## Core Principles

### 1. Evidence over recall
Do not rely on unsupported memory for important factual claims.

### 2. Breadth before depth
Start broad enough to map the terrain before going deep.

### 3. One query is never enough
Use multiple queries, phrasings, and angles.

### 4. Important sources must be read
Do not rely only on snippets when a source is central, authoritative, or data-rich.

### 5. Claims require support
Important claims must be backed by evidence.

### 6. Key claims require cross-checking
For meaningful facts, numbers, dates, roles, and conclusions, verify across independent sources whenever possible.

### 7. Recency matters when the topic is unstable
Current events, laws, leadership roles, policies, product versions, standards, prices, schedules, and similar information must be actively re-checked.

### 8. Deep research is not source dumping
Do not merely collect links. Build a coherent explanation.

### 9. Uncertainty must be explicit
If something is incomplete, disputed, weakly supported, or likely outdated, say so clearly.

### 10. Readability matters
A correct answer that is hard to use is still a poor research result.

---

## Source Strategy

Use the **best available source types** in the environment.

Potential source classes include:
- public web search
- official websites and primary publications
- academic papers and reviews
- government or regulatory documents
- company filings, technical docs, standards, and product documentation
- reputable news and analysis outlets
- expert commentary
- user-provided files
- connected private knowledge sources
- available MCPs, connectors, or other search-related skills

### Source Priority Order
Prefer sources in roughly this order when relevant and available:
1. **Primary / official sources**
2. **Peer-reviewed, standards-based, or formal technical sources**
3. **Authoritative institutional reports**
4. **High-quality reputable journalism**
5. **Qualified expert analysis**
6. **General secondary summaries**

Do not treat all sources as equally reliable.

---

## Tool Routing Rules

This skill must be **tool-agnostic** and **environment-aware**.

### General Rule
Use all relevant search and retrieval capabilities available in the environment when they materially improve the research result.

### Routing Guidance
- Use **public web search** for public facts, current developments, official pages, news, and broad discovery.
- Use **document or file search** when uploaded files or private documents are likely relevant.
- Use **connector or MCP search** when external repositories, drives, wikis, codebases, transcripts, or internal sources are available.
- Use **full-content fetch/read tools** for important webpages, PDFs, reports, papers, and official documents.
- Use **specialized domain tools** when available for structured data such as finance, weather, schedules, etc.

### Routing Principle
Choose tools based on **fitness for evidence**, not habit.

Examples:
- latest public development → public web + official source + recent reporting
- internal project context → file / connector search first
- technical correctness → official docs / standards / papers first
- policy or legal status → official regulatory or legal source first

---

## Query Strategy

Use **query families**, not isolated queries.

### Recommended query families
- overview queries
- definition / background queries
- current-state queries
- source-seeking queries
- evidence queries
- case-study queries
- comparison queries
- criticism / limitation queries
- recency queries
- contradiction-checking queries

### Query Practices
- vary phrasing
- use specific entities and terms
- add time qualifiers when needed
- search for both supporting and challenging evidence
- refine queries based on gaps or contradictions found
- do not stop after the first plausible result

---

## Standard Deep Research Workflow

## Phase 1: Frame the Research
1. restate the main question internally
2. determine the user's likely purpose
3. define scope boundaries
4. resolve obvious ambiguity from context
5. determine whether recency is critical
6. decide what output format will be most useful

Deliverable:
- research frame
- list of major subquestions
- preliminary search plan

---

## Phase 2: Broad Exploration
1. search the core topic broadly
2. identify major themes, stakeholders, approaches, timelines, or schools of thought
3. note recurring terms, entities, and source names
4. build a rough topic map
5. identify where deeper research is needed

Deliverable:
- topic map
- major dimensions
- initial source shortlist
- early knowledge gaps

---

## Phase 3: Dimension Breakdown
Break the topic into relevant dimensions such as:
- definitions and background
- history and evolution
- current state
- technical mechanism
- market or ecosystem landscape
- stakeholder perspectives
- evidence and data
- case studies
- risks and limitations
- alternatives and comparisons
- future outlook
- controversies and open questions

Not every topic needs every dimension, but every important topic needs multiple dimensions.

---

## Phase 4: Deep Dive by Dimension
For each important dimension:
1. run targeted searches
2. try multiple phrasings and variants
3. look for primary or authoritative sources
4. read beyond snippets for the best sources
5. extract key facts, evidence, and claims
6. note source quality, date, and possible bias
7. record open questions or contradictions

Do not stop after finding one apparently good source.

---

## Phase 5: Evidence Expansion
For important claims, gather multiple evidence types when relevant:
- facts and definitions
- statistics and data
- case studies and examples
- expert opinion
- comparisons
- criticisms and limitations
- trend indicators
- counterarguments

A strong deep research result usually uses more than one evidence type.

---

## Phase 6: Validation and Cross-Checking
Before accepting important findings:
1. cross-check key claims across independent sources
2. verify numbers, dates, names, roles, versions, and quoted positions
3. confirm that evidence is current enough
4. investigate contradictions instead of ignoring them
5. separate:
   - well-supported facts
   - plausible interpretations
   - tentative inferences
   - unresolved disputes

---

## Phase 7: Temporal Verification
When time-sensitive information matters:
1. verify freshness explicitly
2. distinguish publication date, event date, data period, and effective/version date
3. avoid relying on stale data for current conclusions
4. treat undated or weakly dated sources cautiously

---

## Phase 8: Synthesis
1. identify the strongest findings
2. group evidence by theme
3. identify consensus across credible sources
4. identify disagreement and why it exists
5. connect findings across dimensions
6. assess implications for the user's objective
7. note limitations and open questions

Do not merely list findings in the order collected.

---

## Phase 9: Output Construction
Produce a structured result that:
- directly answers the main question
- prioritizes what matters most
- clearly marks evidence strength and uncertainty
- includes traceable citations

---

## Fast Deep Research Workflow

Fast mode is a **three-phase compressed workflow**.

## Phase 1: Frame
1. define the main question
2. infer the user's purpose
3. narrow the scope aggressively
4. identify up to **2–4 key subquestions**
5. determine whether recency is critical
6. decide which source types are most likely to resolve the answer quickly

Rules:
- do not build a full topic map unless necessary
- do not expand into low-value background research
- keep focus on what most affects the final answer

---

## Phase 2: Key Verification
1. gather the strongest available sources for the key subquestions
2. verify the facts that most affect the answer
3. cross-check critical dates, figures, definitions, versions, and roles
4. investigate contradictions only when they materially affect the conclusion
5. limit effort to what is needed to support the final key findings

Rules:
- final output should usually contain **3–5 key findings**
- every key finding must be verified before being presented as a conclusion
- unverified material may appear only as background, caveat, or follow-up item

---

## Phase 3: Deliver
Produce a concise research result with:
- direct answer
- 3–5 key findings
- structured citations for each key finding
- brief uncertainty / limitation notes
- optional next-step research directions

Fast mode is allowed to:
- use fewer total sources
- cover fewer dimensions
- summarize disagreements more briefly
- defer lower-priority questions

Fast mode must still preserve:
- scope framing
- key fact verification
- recency checks when relevant
- explicit citation fields
- uncertainty labeling

---

## Validation Thresholds

Use these default standards unless the task requires stricter ones:

- **Low-stakes background fact**: at least one credible source
- **Important factual claim**: preferably two independent credible sources
- **High-stakes claim**: at least one primary source plus one independent confirmation where possible
- **Numeric/statistical claim**: include timeframe, measurement scope, and source context
- **Contested claim**: present disagreement explicitly

If these thresholds cannot be met, reduce certainty and say so.

---

## Mandatory Citation Format

Deep research results must use **structured citations**, not vague references.

### Rule for Key Findings
Every key finding must include, at minimum:
- **Source**
- **Date**
- **Evidence Strength**

If the environment supports it, also include:
- **URL or retrieval pointer**

Do not present a key finding as settled if it lacks these fields.

### Inline Minimum Citation Template
Use this minimum template for key findings:

`[Source Title | Date | Evidence Strength]`

If links or retrieval pointers are supported:

`[Source Title | Date | Evidence Strength | URL or Pointer]`

### Full Evidence Record Template
Internally, or in a source appendix when appropriate, track evidence in this format:

- **Claim**
- **Source Title**
- **Source Type**
- **Date** (publication / effective / event / data coverage)
- **URL or Retrieval Pointer**
- **Evidence Strength**: strong / medium / weak
- **Notes**: scope, limitations, assumptions, possible bias

### Evidence Strength Rules

**Strong**
- primary or official source, or
- multiple independent credible sources support the claim, and
- evidence is direct and sufficiently current

**Medium**
- one credible source supports the claim, but evidence is partial, indirect, or somewhat dated

**Weak**
- evidence is indirect, weakly matched, outdated, unverified, or based on a single low-confidence source

If major source disagreement exists, do not label a claim as **strong** unless the conflict has been examined and resolved.

### Date Rule
Use the date most relevant to the claim:
- publication date
- effective date
- event date
- data coverage period

If the date is unknown, say so explicitly rather than omitting it.

---

## Evidence Model

Track findings internally in this form:

- **Claim**
- **Supporting source(s)**
- **Source type**
- **Date / recency**
- **Evidence strength**
- **Confidence level**: high / medium / low
- **Status**: consensus / disputed / tentative
- **Notes**: assumptions, scope limits, possible bias, unresolved questions

This model should guide the research even if it is not shown verbatim.

---

## Balance and Bias Control

Actively reduce research bias.

### Required anti-bias behaviors
- do not stop after finding support for an initial hypothesis
- search for limitations, criticism, and alternatives
- include relevant opposing interpretations
- do not let polished secondary summaries outweigh stronger primary evidence
- do not confuse repetition with truth
- do not suppress contradictions merely to simplify the final answer

If sources disagree, explain the disagreement rather than flattening it.

---

## Temporal Rules

### General Temporal Rules
- never assume "latest" from memory
- use the actual current date available in context
- match temporal precision to user intent:
  - today / just released → day-level precision
  - this week → week-level precision
  - recently / latest → month-level precision
  - this year / trends → year-level precision
- distinguish:
  - publication date
  - event date
  - data coverage period
  - effective date / version date

### Temporal Red Flags
Treat information cautiously if:
- it lacks a date
- it cites old data for a current conclusion
- it refers to a superseded role, version, or policy
- it is only repeated by derivative sources
- its date is unclear relative to the claim being supported

---

## Output Structure

Unless the user requests a different format, default to the following structure:

### Executive Summary
- 2–5 sentence overview
- direct answer to the main question
- confidence level when relevant

### Key Findings
- 3–7 main findings in standard mode
- 3–5 main findings in fast mode
- each key finding must carry structured citation fields

### Detailed Analysis
- organized by topic or dimension
- focuses on what matters, not source-by-source narration

### Areas of Consensus
- what multiple credible sources broadly agree on

### Areas of Disagreement or Uncertainty
- what remains contested, unclear, weakly evidenced, or time-sensitive

### Implications / Recommendations
- include only if useful to the user's purpose
- keep recommendations tied to evidence

### Limitations
- what could not be fully verified
- what may have changed
- what should be checked further

### Sources / References
- provide citations or source lists in the best format supported by the environment

---

## Final Output Language and Tone

### Language Selection
Use the user's dominant language for the final output.

Determine language in this order:
1. the user's current message
2. recent substantive user messages in the thread
3. the established language of the target artifact or document, if one exists
4. default to English only if no clear signal exists

Do not default to English when the user's language is reasonably clear.

### Tone by Context
Adapt tone to the output context.

- For executive summaries, briefings, and discussion-oriented outputs:
  use natural, human, low-friction prose.
- For detailed analysis, evidence review, comparisons, and research findings:
  use direct, neutral, information-dense language.
- For rigid formats, schemas, formal templates, or structured artifacts:
  preserve the required format and avoid stylistic embellishment.
- For high-stakes precision domains:
  prioritize clarity, restraint, and verifiability over personality.

### Style Rules
- reduce reader cognitive load without reducing information density
- cut filler, throat-clearing, and performative language
- lead with what the reader needs to know
- avoid AI-tinged framing such as:
  - "after careful analysis"
  - "I have reviewed"
  - "in conclusion"
  - "it is worth noting"
- prefer clear headings over empty transition phrases
- short paragraphs are acceptable when they improve readability
- do not let tone obscure uncertainty, limitations, evidence strength, or temporal precision

### Non-Override Rule
Natural tone must never override:
- factual accuracy
- evidence strength
- uncertainty labeling
- citation quality
- temporal precision
- required output format

---

## Readability Rules

The final answer should be easy to use.

### Writing Rules
- lead with conclusions
- use clear headings
- distinguish fact from analysis from inference
- avoid jargon unless the audience expects it
- include concrete examples where useful
- keep citations attached to important claims
- prefer synthesis over source-by-source narration

### Distinguish these explicitly when useful
- **Fact**: directly supported by source evidence
- **Analysis**: synthesis of multiple sources
- **Inference**: reasoned conclusion with some uncertainty

### Readability Goal
The answer should help the user act, decide, write, compare, or understand — not merely prove that research happened.

---

## Completeness Check

Before finalizing, ask internally:

- have I answered the main question directly?
- have I covered enough important dimensions for the chosen mode?
- have I used enough source diversity?
- have I checked important claims for accuracy?
- have I checked whether freshness matters?
- have I attached structured citations to every key finding?
- have I included strengths, limitations, and uncertainty?
- have I distinguished consensus from disagreement?
- is the result readable and useful for the user's purpose?

If several answers are "no", continue researching before finalizing.

---

## Stop Conditions

Standard deep research is complete when most of the following are true:
- the main question is directly answerable
- major dimensions have been covered
- key claims are evidence-backed
- important contradictions have been investigated
- freshness-sensitive facts have been checked
- remaining uncertainty is clearly bounded
- the output supports the user's purpose

Fast deep research is complete when most of the following are true:
- the main question has a direct answer
- the highest-priority subquestions are covered
- 3–5 key findings are verified
- recency-sensitive facts have been checked
- each key finding includes structured citation fields
- remaining uncertainty is clearly stated
- the output is concise and usable

---

## Common Failure Modes to Avoid

- activating this skill without explicit user request
- stopping after one or two searches
- relying on snippets instead of reading key sources
- using only one source type
- failing to verify dates or versions
- presenting disputed claims as settled
- writing long but low-value background sections
- collecting facts without synthesis
- giving unsupported recommendations
- omitting citation fields for key findings
- labeling weak evidence as strong
- using fast mode as an excuse for weak validation
- overconfidently filling gaps from memory

---

## Deliverables

A successful deep research run should usually produce:

1. a clear answer to the main question
2. structured findings from multiple angles or from the highest-priority angles in fast mode
3. evidence-backed claims
4. explicit treatment of uncertainty and disagreement
5. current and date-aware context where relevant
6. readable, user-oriented synthesis
7. structured citations attached to key findings

---

## Final Instruction

Deep research succeeds only when the result is:
- broad enough to avoid superficiality
- deep enough to be useful
- validated enough to be trusted
- current enough for the task
- structured enough to be readable
- traceable enough to be audited

Do not confuse:
- effort with quality
- volume with depth
- confidence with evidence
- speed with carelessness
