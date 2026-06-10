# 02 — Renewal risk review

## Intent

Generate a renewal risk review workspace.

The user must identify renewal blockers, proof gaps and mitigation actions before a renewal discussion.

## Prompt for Figma Make

Create a React `App.tsx` screen for a CSM preparing a renewal risk review.

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
