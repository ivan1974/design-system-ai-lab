# 04 — QBR readiness

## Intent

Generate a QBR readiness workspace.

The user must check whether proof, risks, recommendations and preparation actions are ready for a customer review.

## Prompt for Figma Make

Create a React `App.tsx` screen for a Account owner preparing a Quarterly Business Review.

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

- `CustomerReviewReadinessCard`
- `ValueProofCard`
- `ServiceRiskSummary`
- `RecommendationReviewPanel`

Show what is ready, what needs review and what is blocked.

Internal proof must not be presented as customer-ready proof.

Every preparation action must include owner, due date and priority.

Do not create local UI components.

## Rules tested

- package import contract
- workspace architecture
- QBR readiness patterns
- evidence and trust
- customer-ready proof boundaries
- actionability
