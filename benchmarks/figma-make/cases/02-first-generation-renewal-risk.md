# 02 — First generation renewal risk

## Type

first-generation

## Intent

Generate a renewal risk review workspace from scratch.

The user must identify renewal blockers, proof gaps and mitigation actions before a customer renewal discussion.

## Related reusable prompt

```txt
guidelines/prompts/renewal-risk-review.md
```

## Prompt for Figma Make

Create a React `App.tsx` screen for an account owner preparing a renewal risk review.

Use only `design-system-ai-lab` package components and `design-system-ai-lab/styles.css`.

Required structure:

- `WorkspaceShell`
- `PageHeading`
- `FilterBar`
- `MasterDetailLayout`
- `ListContainer`
- `RiskQueueRow`
- `WorkspaceDetailPanel`
- `ActionRow`

Use business patterns when relevant:

- `RenewalRiskSummary`
- `ValueProofCard`
- `CustomerReviewReadinessCard`
- `RecommendationReviewPanel`

## Fixed facts

- Customer: Northstar Manufacturing.
- Renewal window: 90 days.
- Main blocker: customer-ready proof is incomplete.
- Proof readiness: internal-proof.
- Validation status: internal-review-needed.
- Expected outcome: stronger renewal discussion after proof consolidation.

## Must preserve

- Expected outcomes are not proven value.
- Internal proof is not customer-ready proof.
- Every mitigation action must include owner, due date and priority.
- Do not invent proof points, evidence, sources or citations.
- Do not create local UI components.

## Rules tested

- renewal risk patterns
- proof readiness
- evidence and trust
- expected outcome vs proven value
- actionability
