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

### Phase 1: Frame the Research
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

### Phase 2: Broad Exploration
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

### Phase 3: Dimension Breakdown
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

### Phase 4: Deep Dive by Dimension
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

### Phase 5: Evidence Expansion
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

### Phase 6: Validation and Cross-Checking
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

### Phase 7: Temporal Verification
When time-sensitive information matters:
1. verify freshness explicitly
2. distinguish publication date, event date, data period, and effective/version date
3. avoid relying on stale data for current conclusions
4. treat undated or weakly dated sources cautiously

---

### Phase 8: Synthesis
1. identify the strongest findings
2. group evidence by theme
3. identify consensus across credible sources
4. identify disagreement and why it exists
5. connect findings across dimensions
6. assess implications for the user's objective
7. note limitations and open questions

Do not merely list findings in the order collected.

---

### Phase 9: Output Construction
Produce a structured result that:
- directly answers the main question
- prioritizes what matters most
- clearly marks evidence strength and uncertainty
- includes traceable citations

---

## Fast Deep Research Workflow

Fast mode is a **three-phase compressed workflow**.

### Phase 1: Frame
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

### Phase 2: Key Verification
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

### Phase 3: Deliver
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

## Output Structure and Style

The output follows an **academic paper structure** with **popular science language**—hierarchical headings support navigation while accessible language supports comprehension.

### Hierarchical Structure

Use clear H2/H3 headings to organize content hierarchically:

```markdown
## Research Question

## Key Findings

### Finding 1: [Descriptive title]

### Finding 2: [Descriptive title]

## Detailed Analysis

### Background

### Mechanism

### Evidence Quality

## Areas of Consensus

## Areas of Uncertainty

## Implications

## References
```

This structure allows readers to scan, jump, and reference specific sections efficiently.

### Accessible Language Guidelines

**Explain from first principles.** Do not assume prior domain knowledge. Introduce concepts by building from what readers already understand.

**Define technical terms on first use.** When a term appears for the first time, provide a brief explanation: *"This approach uses *reinforcement learning*—a method where AI systems learn by trial and error, receiving rewards for good outcomes."*

**Use concrete analogies.** Explain abstract relationships through familiar comparisons: *"Think of DNA as a recipe book. Gene editing is like using a precise text editor to change a specific instruction."*

**Avoid gatekeeping language.** Do not use phrases like "obviously," "as everyone knows," or "it goes without saying."

**Lead with conclusions.** State the finding first, then explain how we know it.

**Use active voice.** *"Researchers discovered"* is clearer than *"It was discovered by researchers."*

---

## Citation Format

Use **Markdown footnote syntax** for all citations. This keeps the main text clean while preserving full traceability.

### In-text Citation

Insert superscript footnote markers at the point of claim:

```markdown
The intervention reduced adverse events by approximately 35%.[^1]

Multiple independent studies have reached similar conclusions.[^2][^3]
```

### Footnote Content

Place all footnotes at the end of the document under a `## References` section. Each footnote should include:

```markdown
## References

[^1]: Smith, J., & Doe, A. (2024). "Title of the Study." *Journal Name*, 15(3), 123-145. https://doi.org/10.xxxx/xxxxx
    - **Evidence quality**: This finding comes from a randomized controlled trial with 5,000 participants, double-blinded, conducted across three countries.
    - **Limitations**: Study population was limited to adults aged 18-65; results may not generalize to other age groups.

[^2]: Johnson et al. (2023). *Meta-analysis of similar interventions*. Nature Medicine. https://doi.org/...
    - **Evidence quality**: Aggregated data from 12 independent studies (total n=45,000), showing consistent effect direction.

[^3]: World Health Organization. (2024). *Technical Report on Treatment Guidelines*. https://www.who.int/...
    - **Evidence quality**: Official guideline based on systematic review of available evidence.
```

### Evidence Quality Description

Replace the `[Strong | Medium | Weak]` label system with **natural language descriptions** embedded in the footnote:

| Instead of | Use |
|------------|-----|
| `[Strong]` | "This conclusion is supported by multiple independent randomized trials with consistent results." |
| `[Medium]` | "Evidence comes from a single well-designed study, but replication is still pending." |
| `[Weak]` | "Only preliminary data exists, based on a small pilot study with methodological limitations." |

The description should answer: *How do we know this? How certain should we be?*

---

## Mathematical Notation

**All mathematical expressions must use LaTeX syntax.** Never use Unicode mathematical symbols (like `×`, `÷`, `α`, `β`, `∑`, `∫`, `→`) in the main text.

### Inline Math

Use single dollar signs for inline expressions:

```markdown
The relationship is expressed as $E = mc^2$, where $E$ represents energy, $m$ represents mass, and $c$ is the speed of light.

The probability follows $P(X) = \frac{1}{1 + e^{-x}}$, a sigmoid function that maps any real value to a range between 0 and 1.
```

### Display Math

Use double dollar signs for standalone equations:

```markdown
The formula for calculating the area under a curve is:

$$\int_{a}^{b} f(x)\,dx = F(b) - F(a)$$

Where $F(x)$ is the antiderivative of $f(x)$.
```

### Explaining Equations

When presenting an equation, explain what it means in plain language:

```markdown
The growth can be modeled by:

$$N(t) = N_0 \cdot e^{rt}$$

In words: the population size at time $t$ equals the starting population multiplied by Euler's number raised to the power of growth rate times time. This describes exponential growth—where the larger a population becomes, the faster it grows.
```

---

## Evidence Model (Internal Tracking)

Track findings internally using this structure (not shown to users unless requested):

- **Claim**: the statement being evaluated
- **Supporting source(s)**: list of citations
- **Source type**: RCT / cohort study / meta-analysis / expert opinion / etc.
- **Date / recency**: publication or data collection date
- **Evidence description**: natural language quality assessment
- **Confidence level**: high / medium / low
- **Status**: consensus / disputed / tentative
- **Notes**: assumptions, scope limits, possible bias, unresolved questions

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

## Completeness Check

Before finalizing, verify:

- [ ] Have I answered the main question directly?
- [ ] Is the hierarchical structure clear and navigable?
- [ ] Are technical terms explained on first use?
- [ ] Do key findings use accessible language while preserving accuracy?
- [ ] Have I used LaTeX for all mathematical expressions?
- [ ] Do all claims have footnote citations in the `[^n]` format?
- [ ] Is evidence quality described in natural language in the footnotes?
- [ ] Have I distinguished consensus from disagreement?
- [ ] Are dates and recency verified for time-sensitive claims?
- [ ] Is uncertainty clearly stated where appropriate?

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
- each key finding includes footnote citations
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
- omitting citations for key findings
- using Unicode instead of LaTeX for math
- using fast mode as an excuse for weak validation
- overconfidently filling gaps from memory

---

## Deliverables

A successful deep research run should produce:

1. a clear, hierarchical answer to the main question
2. structured findings organized by topic/dimension
3. evidence-backed claims with footnote citations
4. explicit treatment of uncertainty and disagreement
5. current and date-aware context where relevant
6. accessible, readable synthesis without jargon gating
7. LaTeX-formatted mathematical expressions
8. complete reference list with evidence quality descriptions

---

## Final Instruction

Deep research succeeds only when the result is:
- broad enough to avoid superficiality
- deep enough to be useful
- validated enough to be trusted
- current enough for the task
- structured enough to be navigable
- accessible enough to be understood
- traceable enough to be audited

Do not confuse:
- effort with quality
- volume with depth
- confidence with evidence
- speed with carelessness
