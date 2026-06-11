# Legacy 02 — Renewal risk review

## Status

Superseded by:

```txt
benchmarks/figma-make/cases/02-first-generation-renewal-risk.md
```

This legacy case is kept only for comparison with pre-v0.6.0 benchmark structure.

## Intent

Generate a renewal risk review workspace.

The user must identify renewal blockers, proof gaps and mitigation actions before a renewal discussion.

## Benchmark status

This is a fixed benchmark case, not reusable prompt guidance.

Reusable guidance lives in:

```txt
guidelines/prompts/renewal-risk-review.md
```

Do not rewrite benchmark facts unless the scoring objective changes.

## Prompt for Figma Make

Create a React `App.tsx` screen for an account owner preparing a renewal risk review.

Use `design-system-ai-lab` components only.

Required structure:

- `WorkspaceShell`
- `PageHeading`
- `FilterBar`
- `MasterDetailLayout`
- `ListContainer`
- `RiskQueueRow`
- `WorkspaceDetailPanel`
- `Tabs`
- `ActionRow`

Use business patterns when relevant:

- `RenewalRiskSummary`
- `ValueProofCard`
- `CustomerReviewReadinessCard`
- `RecommendationReviewPanel`

Show renewal facts, value proof readiness and mitigation ownership.

Expected outcomes must be labelled as expected, not proven.

Every mitigation action must include owner, due date and priority.

Do not create local UI components.

## Rules tested

- package import contract
- workspace architecture
- renewal risk patterns
- evidence and trust
- expected outcome vs proven value
- actionability
