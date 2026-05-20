---
name: investment-research-report
description: Use when producing an equity, company, sector, industry, ETF, basket, or theme investment research report for internal discussion, especially when the user needs a testable thesis, valuation view, risk framework, investment plan, or review framework.
---

# Investment Research Report

## Purpose

Produce investment research that can be discussed, challenged, validated, executed cautiously, and reviewed later.

The output must be a testable investment argument, not a background-data dump. It should make clear:

- What is being studied.
- Where the market might be wrong.
- What evidence would verify or weaken the thesis.
- How valuation connects to expected return.
- How the thesis could fail and what loss mechanism could follow.
- What implementation paths may be considered without giving trading instructions.

## Required Support Files

This skill is split across support files. Load only what the task needs:

- `references/research-modes.md`: use when selecting how to analyze a company, sector, ETF, theme, cyclicals, high-growth asset, resource company, or financial company.
- `references/report-templates.md`: use before drafting any short note or full report.
- `references/valuation-risk-review.md`: use when writing valuation, market mispricing, catalysts, investment plan, risk analysis, falsification checklist, tracking plan, or review framework.

For MCP clients: after loading this `SKILL.md`, call `list_skill_files` for this skill, then call `get_skill_file` for the exact support file needed.

## Safety and Compliance

Always include a short disclaimer near the top:

> This report is for research discussion only and does not constitute investment advice. Any investment decision, position sizing, and profit or loss are the responsibility of the individual investor.

Rules:

- Do not use promotional, certain, or command-like language such as "must buy", "all in", "guaranteed", "risk-free", "sure win", "follow me", or "losses are on me".
- Do not present conclusions as certain. Use probabilistic language and distinguish facts, assumptions, estimates, and judgments.
- Never rely on insider information, non-public material information, market manipulation narratives, or unverified rumors.
- If information is unverified, mark it clearly and do not use it as a core conclusion.
- If the user asks for a direct trading answer, convert it into a research framework and restate that the output is not investment advice.

## Data Freshness

Investment data is time-sensitive. Treat price, valuation, financial results, guidance, policy, holdings, analyst revisions, interest rates, commodity prices, and industry data as current-state facts that may be stale.

When current data matters:

- Use current sources if browsing or user-provided data is available.
- State the data date or reporting period.
- Do not treat model memory as current market data.
- If current data is unavailable, label the output as a preliminary framework and mark valuation or market-state claims as assumptions requiring verification.

If the report depends on user-provided figures, preserve the user's figures but identify any missing period, currency, unit, market, or source.

## First Step

Before writing:

1. Identify the research mode using `references/research-modes.md`.
2. Select short note or full report using `references/report-templates.md`.
3. Use `references/valuation-risk-review.md` for valuation, implementation, risk, falsification, tracking, and review sections.

If the user provides only a rough idea, make reasonable assumptions and state them, unless the missing information would materially change the report. Ask a concise clarification only when market, instrument, horizon, or report depth is impossible to infer safely.

## Core Report Standard

Every report must answer:

- What is the investment question?
- What is the core conclusion and horizon?
- What is the expected return source?
- What does the market appear to believe, and where might it be wrong?
- What are the 3-5 key assumptions?
- How can each assumption be verified or disproved?
- What valuation method is appropriate, and what is priced in?
- What are the catalysts and implementation paths?
- What are the main risks and loss mechanisms?
- What should be tracked next, and when should the thesis be reviewed?

If any answer is missing, explicitly mark the gap instead of pretending the conclusion is complete.

## Style Rules

- Lead with conclusions.
- Use ordinary language and clear causal chains: "Because A changes, B may improve. If B improves, C may be repriced. The thesis is wrong if D happens."
- Avoid slogans, hype, excessive abstraction, and emotional trading language.
- Avoid long industry background before the investment conclusion.
- Distinguish facts, assumptions, estimates, and judgments.
- Use data where possible. If data is unavailable, state the uncertainty.
- Make uncertainty visible and manageable.
