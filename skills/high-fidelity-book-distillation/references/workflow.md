# Workflow

## 1. Identify the Reader's Goal and Motivation

First infer what the user wants to do with the book.

Common goals include:

- Quick orientation before reading.
- Understanding the book without reading every page.
- High-fidelity study.
- Chapter-by-chapter learning.
- Practical application.
- Critical evaluation.
- Cross-book comparison.
- Reading plan.
- Source-guided review.
- Knowledge-base construction.
- Writing a book note, essay, lecture, or teaching outline.

Then identify the reader's motivation.

Ask or infer:

- Why is the reader reading this book now?
- What problem, decision, project, or curiosity does the reader bring to the book?
- What should change after reading: understanding, behavior, writing, teaching, decision-making, or knowledge-system building?
- Which parts of the book are likely high-value for this reader?
- Which parts can be skimmed or skipped?

If the user has already provided enough context, do not ask unnecessary questions.

If the goal is unclear and the output depends on it, ask one concise clarification question.

Useful questions:

- "Do you want a quick brief, a detailed learning guide, or a practical action manual?"
- "Should I focus on understanding the author's argument or applying the ideas?"
- "Should this be a neutral summary or a critical evaluation?"
- "Do you want source pointers by chapter, section, page, or Kindle location if available?"

If the user asks a simple question like "这本书讲了什么", proceed with a balanced orientation brief and include the likely reading value.

## 2. Inspect the Available Source

Identify what source material the user has provided:

- Full book text.
- Long excerpt.
- Table of contents.
- Selected chapters.
- User highlights.
- User notes.
- Book title only.
- Multiple books for comparison.

If the user provides source text, rely on it first.

If the source is partial, say what can and cannot be inferred.

If the source is long, process it in batches:

1. Build a book map from the table of contents or visible structure.
2. Extract chapter or section atoms.
3. Build cross-chapter synthesis.
4. Produce the final guide.
5. Add reading pointers, application tools, caveats, and review prompts.

## 3. Use Interactive Distillation When It Improves the Output

Use interactive distillation when the user's goal is vague but the book may be used for learning, writing, teaching, decision-making, behavior change, or knowledge-system construction.

The purpose of the interview is not to ask generic preferences. Ask only questions that reveal information the model cannot infer from the book itself and that will materially improve the output.

Ask what only the reader can answer:

- Why the reader is reading the book.
- What problem, project, or decision the reader brings.
- What the reader already knows or misunderstands.
- What output the reader wants to create.
- What kind of change the reader wants after reading.
- Where the book should fit in the reader's knowledge system.

Avoid vague questions such as:

- "Do you want it detailed or brief?"
- "What should I focus on?"
- "Do you want theory or practice?"

Prefer concrete choices:

- "Are you reading this to quickly understand, apply, critique, write about, teach, or place in a knowledge system?"
- "Is your main problem not knowing what to do, knowing but not doing, lacking examples, or lacking a framework?"
- "Should the output become a learning guide, action manual, reading route, critical review, article outline, or knowledge-base note?"

## 4. Choose the Interaction Level

Do not over-question. Pick the lightest interaction that can improve the answer.

### Level 1: Light Calibration

Use when the user asks a broad question like "What is this book about?"

Ask at most one question, or proceed with a default.

Example:

```text
Do you want a quick overview, a practical application version, or a critical evaluation? If you do not choose, I will give a balanced overview with core argument, key concepts, and what is worth reading in the original.
```

### Level 2: Standard Interview

Use for most serious distillation requests.

Ask 3-5 questions:

```text
Before I distill the book, I want to calibrate the output so it is useful to you:

1. Why are you reading this book now?
   - Quick understanding
   - Deep study
   - Solving a concrete problem
   - Writing or teaching
   - Building a knowledge system
   - Decision-making
   - Other

2. What is your current sticking point or question in this topic?

3. How familiar are you with this topic?
   - New to it
   - Know some concepts
   - Have read similar books
   - Have practiced it
   - Need professional-level synthesis

4. What should the final output become?
   - Structured overview
   - High-fidelity learning guide
   - Action manual
   - Critical review
   - Reading route
   - Essay or teaching outline
   - Knowledge-base note

5. Should I mostly reconstruct the author's argument, or also critique it?
```

### Level 3: Deep Co-Creation Interview

Use when the user wants a high-stakes, high-depth output such as a course, essay, research note, strategy memo, or theme-reading synthesis.

Ask in batches, not all at once.

Batch 1: Motivation

- Why this book, and why now?
- What do you hope will change after reading it?
- What question must the summary answer for you?

Batch 2: Prior Knowledge

- What do you already know about this topic?
- What similar books, authors, theories, or methods have you encountered?
- What do you currently believe, doubt, or disagree with?

Batch 3: Use Case

- Will you use this for self-study, writing, teaching, decision-making, consulting, product work, or personal change?
- What final artifact do you want: article, lecture, checklist, SOP, knowledge note, decision memo, or practice plan?

Batch 4: Application

- Is there a concrete scenario where you want to apply the book?
- What would count as a useful action after reading?

Batch 5: Evaluation

- Do you want the book's claims checked for evidence quality, weak reasoning, outdated assumptions, or misuse risks?
- Do you want adjacent books or follow-up reading?

## 5. Ask Adaptive Questions by Book Type

Ask different questions for different kinds of books.

### Practical or Method Books

Ask:

- What concrete problem do you want to solve with this book?
- Are you stuck because you do not know what to do, or because you know but do not do it?
- Should I turn the method into steps, a checklist, or a 30-day plan?
- Do you want misuse cases and adaptation rules?

### Behavior-Driven Books

Ask:

- What behavior, habit, or decision pattern are you trying to understand or change?
- What have you tried before?
- Do you want explanation, behavior design, or practice plan?

### Evidence-Driven Books

Ask:

- Are you reading for understanding or decision-making?
- What decision, market, country, or context matters?
- Should I separate facts, evidence, interpretation, and author opinion?

### Philosophy, Humanities, or Social Thought

Ask:

- What question are you bringing to this book?
- Do you want concept explanation, argument reconstruction, intellectual history, or critical objections?
- What is your current view on the issue?

### Story-Driven Non-Fiction

Ask:

- Are you reading for factual narrative, lessons, character study, or decision patterns?
- Should I separate transferable lessons from luck, timing, and context?
- Do you want timeline, character map, or theme analysis?

### Learning, Reading, or Writing Books

Ask:

- What is your current workflow?
- Where does it break down?
- Do you want the book turned into a process, template, practice plan, or knowledge-base structure?

## 6. Use Post-Draft Follow-Up

After the first output, offer a second-pass refinement menu when useful.

Example:

```text
If you want to continue, I can do one of these next:

1. Compress this into a one-page memory version.
2. Expand it into a high-fidelity learning guide.
3. Convert it into an action manual.
4. Turn it into a reading article outline.
5. Build a teaching or presentation outline.
6. Create review cards or self-test questions.
7. Critique the author's argument.
8. Place the book into a broader knowledge system.
9. Create a reading route for the original book.
```

High-quality distillation often improves through this loop:

```text
first synthesis -> reader feedback -> targeted second distillation
```

## 7. Classify the Book Type

Classify the book before distilling it. The book type determines what to extract.

### Evidence-Driven Books

Examples: investing, economics, science, medicine, public policy, history.

Extract:

- Central thesis.
- Evidence chain.
- Data quality.
- Causal claims.
- Competing explanations.
- Counterarguments.
- Scope conditions.
- Practical implications.
- What would weaken or change the conclusion.

### Idea-Driven Books

Examples: wealth mindset, entrepreneurship, leadership, productivity, personal development.

Extract:

- Core mental model shifts.
- Repeated distinctions.
- Memorable frameworks.
- Anecdotes versus durable principles.
- Inspirational claims versus operational claims.
- Simplifications and overstatements.
- Safe applications.

### Method-Driven Books

Examples: books that teach a process, system, operating method, or practical framework.

Extract:

- The problem the method solves.
- Steps of the method.
- Required inputs.
- Expected outputs.
- Preconditions.
- Failure modes.
- Correct-use examples.
- Misuse cases.
- Adaptation rules.

For practical or method books, always apply the What-Why-How lens:

- What: What exact problem is the author trying to solve? What is the method or concept?
- Why: Why does the author believe this method works? What mechanism, evidence, experience, or theory supports it?
- How: How should the reader apply it? What are the steps, prerequisites, examples, failure modes, and adaptation rules?

A practical-book distillation is incomplete if it explains the idea but does not show how the idea changes action.

### Behavior-Driven Books

Examples: psychology, habits, decision-making, money behavior, risk, self-control.

Extract:

- Biases and emotional patterns.
- Common failure modes.
- Behavioral interventions.
- Decision rules.
- Environmental design.
- Why knowledge fails to change behavior.
- How to prevent self-sabotage.
- What kind of practice is needed to move from knowing to doing.

### Story-Driven Non-Fiction

Examples: memoirs, biographies, company histories, case-based books.

Extract:

- What the story is meant to show.
- Which lessons generalize.
- Which lessons depend on luck, timing, survivorship, personality, or context.
- What the reader should not overlearn from the story.
- What emotional or moral insight the story carries.

### Philosophy, Humanities, and Social Thought

Examples: philosophy, social theory, intellectual history, political theory, cultural criticism.

Extract:

- The central question.
- The author's target misconception or opponent.
- Key distinctions.
- Concept definitions.
- The chain of reasoning.
- Historical or intellectual context.
- Implications for how the reader understands self, society, morality, politics, culture, or meaning.
- Competing interpretations or objections.

### Reading, Learning, and Knowledge-System Books

Examples: reading methods, learning methods, note-taking, writing, thinking, knowledge management.

Extract:

- The learning problem being solved.
- The method's steps.
- The author's model of learning or cognition.
- What changes in the reader's workflow.
- How the method should be practiced.
- What can go wrong when the method is copied mechanically.
- How the method connects to output, memory, knowledge systems, and action.

## 8. Choose the Output Mode

Choose the output mode based on the user's request and likely need.

### One-Page Brief

Use when the user wants quick orientation.

Include:

- One-sentence thesis.
- The problem the book solves.
- The author's central answer.
- Three to seven core ideas.
- Strongest insight.
- Main caveat.
- Who should read it.
- Which parts are worth returning to.

### High-Fidelity Learning Guide

Use as the default for serious book distillation.

Include:

- Reader contract.
- The book in one sentence.
- The problem the book tries to solve.
- The author's central argument.
- Argument map.
- Core concepts.
- Key claims and evidence.
- Before / after shift.
- Practical principles.
- What the book gets right.
- What to treat carefully.
- Knowledge-system placement.
- Reading route.
- Retention and output prompts.
- Self-test questions.
- What still requires the original book.

### Absorption-Oriented Book Guide

Use when the user does not only want to understand the book, but wants to absorb it and change behavior.

Include:

- Reading motivation.
- The book's central problem.
- The misconception the book corrects.
- Core argument map.
- Core concepts.
- Cases and examples.
- Insight moments.
- Emotional triggers when relevant.
- Before / after shift.
- Practical actions.
- Knowledge-system placement.
- What to deep read, skim, or skip.
- Review prompts.
- Output prompts.

This mode is especially useful for books about learning, habits, productivity, psychology, education, writing, reading, leadership, personal development, and practical life strategy.

### Chapter Study Guide

Use when the user wants to study the book closely.

For each chapter or major section, extract:

- Core question.
- Main claim.
- Reasoning.
- Evidence and examples.
- Concepts.
- Practical takeaway.
- Caveat.
- Original reading pointer.
- Link to the whole-book argument.

### Comparative Synthesis

Use when the user provides several books.

Compare:

- Shared problem.
- Thesis of each book.
- Assumptions.
- Evidence quality.
- Shared principles.
- Conflicts.
- Best use case.
- Weaknesses.
- Integrated framework.
- Recommended reading order.
- What each book contributes to the knowledge system.

### Application Manual

Use when the user wants to act on the book.

Include:

- Decision rules.
- Checklists.
- Workflows.
- Warning signs.
- Review questions.
- First-use actions.
- Thirty-day practice plan.
- Misuse cases.
- Adaptation rules.
- Source pointers behind major rules.

### Critical Evaluation

Use when the user wants judgment rather than neutral summary.

Include:

- What the book gets right.
- What it overstates.
- Which claims are well-supported.
- Which claims are anecdotal.
- What is outdated.
- What is context-bound.
- What the book leaves out.
- What to apply.
- What to ignore or treat cautiously.
- What would change the evaluation.

### Reading Route

Use when the user wants to read efficiently.

Include:

- Deep read: sections central to the thesis, method, evidence, or conceptual originality.
- Skim: sections that repeat, illustrate, or provide secondary examples.
- Skip if short on time: sections that are redundant, highly contextual, or less relevant to the user's motivation.
- Return to original: sections where the author's reasoning, examples, voice, or nuance matters.
- Emergency version: what to read in 30 minutes.
- Standard version: what to read in 2 hours.
- Full study version: what to read and write notes on.

## 9. Use the Three-Layer Distillation Workflow

For serious distillation, process the book in three layers.

### Layer 1: Local Extraction

Extract from each chapter or section:

- Concepts.
- Claims.
- Evidence.
- Examples.
- Questions.
- Caveats.
- Action inspirations.
- Strong phrases or idea anchors, without reproducing long passages.

### Layer 2: Whole-Book Map

Reconstruct the book's structure.

Explain:

- What problem opens the book.
- What misconception the author corrects.
- What central answer the author gives.
- How the chapters build on each other.
- What concepts carry the argument.
- What evidence or examples support the claims.
- What practical recommendations follow.
- What final implication the reader should take away.

Do not stack chapter summaries. Show how the parts connect.

### Layer 3: Internalization Output

Convert the book into a reader-usable form:

- Learning guide.
- Argument map.
- Action manual.
- Reading route.
- Decision rules.
- Review cards.
- Essay outline.
- Teaching outline.
- Knowledge-system note.
- Practice plan.

## 10. Build the Argument Map

Before writing the final answer, reconstruct the book's internal logic.

Identify:

- The opening problem.
- The author's central answer.
- The target misconception.
- The sequence of arguments.
- The main concepts.
- The key evidence.
- The recurring examples.
- The practical recommendations.
- The final implication.

A strong argument map should show progression:

1. The book starts from a practical problem, intellectual puzzle, or misconception.
2. It introduces a model, distinction, or method.
3. It supports the model with evidence, stories, cases, or reasoning.
4. It rejects or revises competing approaches.
5. It derives practical rules or interpretive consequences.
6. It ends with implications for the reader.

## 11. Extract Chapter or Section Atoms

When processing a full book, long excerpt, selected chapters, or detailed table of contents, extract atoms first.

For each chapter or major section, identify:

- Core question: What problem does this section address?
- Claim: What does the author want the reader to believe?
- Reasoning: How does the author support the claim?
- Evidence: What data, history, cases, studies, or examples appear?
- Concept: What terms or models are introduced?
- Takeaway: What should the reader remember?
- Application: What should the reader do differently?
- Caveat: What may be overstated, incomplete, outdated, or context-specific?
- Source pointer: Where should the reader return in the original book?

Use these atoms to produce the final synthesis.

## 12. Extract Reader Absorption Atoms

In addition to argument atoms, extract absorption atoms when relevant.

Use these internally, and include them explicitly when they help the user.

- Reading motivation: Why this book matters for the reader's current goal or problem.
- Core concepts: Terms or models the reader must understand.
- Memorable cases: Stories, examples, experiments, historical episodes, or personal cases used to carry the idea.
- Reader questions: Questions the book raises or answers.
- Insight moments: Ideas likely to change how the reader sees the problem.
- Emotional triggers: Passages or stories likely to create resonance, discomfort, relief, courage, grief, or reflection.
- Action inspirations: Concrete changes the reader could try.
- Personal relevance: How the idea may connect to the reader's goals, work, habits, relationships, or worldview.

Do not reproduce long quotes. Paraphrase or use short anchors only when needed.

## 13. Separate Knowledge Types

Clearly distinguish different kinds of content.

Use these categories internally and, when useful, explicitly in the output:

- Fact: A claim backed by observable data, dates, studies, market history, or documented events.
- Argument: The author's interpretation of facts.
- Principle: A general rule derived from the book.
- Story: An example used to illustrate or persuade.
- Advice: A recommended action.
- Speculation: A claim about the future or a weakly evidenced claim.
- Context-bound claim: A claim that depends on country, tax system, time period, market structure, culture, or personal situation.

This distinction is essential. Many weak summaries present anecdotes as evidence or author opinion as fact.

## 14. Reconstruct Concepts Before Giving Advice

Do not jump directly from the book to "what you should do."

First explain the book's concepts in plain language. Then explain how those concepts produce the author's advice.

For example, in an investment book, do not merely say "buy index funds." Explain:

- What market efficiency means.
- Why active management struggles after fees and taxes.
- Why diversification lowers idiosyncratic risk.
- Why behavior matters.
- Why long-term asset allocation matters more than stock picking.
- Under what conditions the conclusion applies.

For a reading-method book, do not merely say "take better notes." Explain:

- What problem the note system solves.
- Why ordinary highlighting or copying fails.
- How local notes, whole-book structure, and output serve different functions.
- How the reader should practice the method.
- What parts can be adapted.

## 15. Add the Before / After Shift

When useful, explain the transformation the book is trying to create.

Use this structure:

- Before reading: What misconception, confusion, habit, or blind spot might the reader have?
- Book's intervention: What concept, evidence, story, or framework changes that view?
- After reading: What should the reader understand, notice, decide, or do differently?

This section turns summary into learning. It answers: "What is different because I read this book?"

## 16. Add Source Location Pointers

Use source pointers to guide the user back to the original book.

A source pointer is not a long quotation. It identifies where the reader can find the original discussion.

Use source pointers for:

- The book's central thesis.
- Major concept definitions.
- Important empirical claims.
- Historical episodes or cases.
- Practical rules derived from specific chapters.
- Controversial or easily misunderstood claims.
- Sections where the original examples or reasoning matter.

Preferred formats:

- `Source pointer: Chapter 7, "Fundamental Analysis and Efficient Market Theory."`
- `Source pointer: Chapter 1, sections "The Firm-Foundation Theory" and "The Castle-in-the-Air Theory."`
- `Source pointer: Chapter 10, near the discussion of overconfidence and loss aversion.`
- `Source pointer: Part IV, Chapters 12-15, especially the practical portfolio construction sections.`
- `Source pointer: Chapter 14; Kindle location 6200-6450 if available.`
- `Source pointer: User-provided excerpt, section titled "Reading Motivation."`

If editions may differ, avoid relying only on page numbers. Prefer chapter and section references.

If the idea is synthesized from several parts of the book, write:

`Synthesized from: Chapters 7-15.`

If the idea is a practical implication derived from the book's principles but not stated directly by the author, write:

`Derived from: Chapters 12-15.`

Use this distinction:

- `Source pointer:` for direct original locations.
- `Synthesized from:` for cross-chapter synthesis.
- `Derived from:` for practical advice inferred from the book's principles.

Do not attach a pointer to every sentence. Prefer placing pointers after a major claim or at the end of a section.

## 17. Add Critical Evaluation

A high-fidelity guide must not worship the book.

Evaluate:

- Where the book is strongest.
- Where the book is weak.
- Which claims are supported by evidence.
- Which claims rely mainly on anecdotes.
- Which claims are outdated.
- Which claims are country-specific, market-specific, culture-specific, or audience-specific.
- What the reader might misunderstand.
- What the book leaves out.
- What would change the conclusion.

For practical books, explicitly identify misuse cases.

For story-driven books, identify which lessons may be distorted by survivorship bias, luck, timing, or personality.

For behavior-change books, identify where the gap between knowing and doing remains.

## 18. Add Knowledge-System Placement

For books that belong to a broader theme, explain where the book sits in a knowledge system.

Include:

- Big question: What larger question does this book help answer?
- Knowledge node: Which part of the reader's knowledge system does it strengthen?
- Upstream ideas: What prior concepts, thinkers, theories, fields, or books does it depend on?
- Downstream use: What can this book help the reader do, explain, teach, decide, or create?
- Adjacent reading: What should be read before, after, or alongside it?
- Gaps: What does this book not cover that the reader should not ignore?

This turns the book from an isolated object into part of a learning path.

## 19. Convert Knowledge Into Use

After explaining the book, convert it into usable tools when appropriate.

Possible outputs:

- Decision rules.
- Checklists.
- Practice plans.
- Review questions.
- Warning signs.
- Mental models.
- Implementation steps.
- Mistake lists.
- Concept glossary.
- Reading route.
- Writing prompts.
- Teaching outline.
- "If you only remember ten things" section.

Practical rules should be conditional rather than absolute.

Use phrasing like:

- "Use this when..."
- "This is risky when..."
- "This works only if..."
- "Do not confuse this with..."
- "Before applying this, check..."

## 20. Add Retention and Output Tools

When the user wants to remember or use the book, provide retention and output tools.

Include any of the following:

- Recall prompts: questions that help the reader retrieve the book's core ideas.
- Review cards: compact concept-rule-example cards.
- Output prompts: prompts for a reading note, article, presentation, lecture, or teaching outline.
- First-use actions: one action within 24 hours, three uses within a week, and one longer-term practice.
- Before / after writing prompt: "Before reading, I used to think... The book changed this by... Now I will..."
- Discussion questions: questions for a reading group or seminar.

This is especially useful for method-driven, behavior-driven, and learning-oriented books.
