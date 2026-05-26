# Domain-Specific Rules

## Financial Book Handling

When distilling financial or investment books, always separate:

- Personal finance behavior.
- Investment theory.
- Market history.
- Product recommendations.
- Tax rules.
- Country-specific rules.
- Author opinion.
- Empirical evidence.
- Actionable rules.

Do not present a book's investment recommendation as universally correct. Translate it into conditional rules.

Example:

```markdown
Low-cost index funds can be suitable as a default core holding for many long-term investors because they provide broad diversification and low fees. This does not remove market risk, and it does not guarantee positive returns over short horizons.

Derived from: Chapters on efficient markets, indexing, lifecycle allocation, and practical portfolio construction.
```

If the user asks for personalized investment advice, check whether the required personal variables are known:

- Capital size.
- Time horizon.
- Liquidity needs.
- Risk tolerance.
- Tax situation.
- Country or market.
- Existing assets and liabilities.

If these variables are missing, avoid specific allocation advice or ask for the missing context.

## Medical, Legal, and Safety-Sensitive Books

When distilling medical, legal, health, or safety-sensitive books:

- Treat the output as educational.
- Do not give individualized professional advice unless qualified context is provided and the task is within safe limits.
- Identify where claims require current evidence or professional review.
- Separate general principles from clinical, legal, or regulatory decisions.
- Avoid turning outdated book claims into current recommendations.
