# 01 — First generation customer monitoring

## Type

first-generation

## Intent

Generate a customer monitoring decision workspace from scratch.

The user must understand which customer or asset needs attention, why it matters, what evidence exists and what action follows.

## Prompt for Figma Make

Create a React `App.tsx` screen for a B2B service team monitoring customer sites and connected assets.

Use only `design-system-ai-lab` package components and `design-system-ai-lab/styles.css`.

Read and follow:

```txt
guidelines/Guidelines.md
guidelines/runtime/generation-contract.md
guidelines/runtime/generation-flow.md
guidelines/runtime/component-selection.md
guidelines/runtime/trust-action-rules.md
guidelines/runtime/visual-rules.md
```

Required structure:

- `WorkspaceShell`
- `PageHeading`
- `FilterBar`
- `MasterDetailLayout`
- `ListContainer`
- queue rows for repeated customers, assets or risks
- `WorkspaceDetailPanel`
- `ActionRow` or `StickyActionBar`

Use business patterns when relevant:

- `CustomerStatusCard`
- `ConnectivityCoverageCard`
- `ServiceRiskSummary`
- `AssetIntelligenceSummary`

## Fixed facts

- Customer: Northstar Manufacturing.
- Scope: connected assets only, 42 of 68 installed assets visible.
- Main issue: two critical sites have overdue follow-up actions.
- Evidence: monitoring platform and service case history, last updated today.
- Source strength: partial.
- Validation status: internal-review-needed.

## Must preserve

- Show source scope when visibility is partial.
- Do not claim full monitoring coverage.
- Show facts before interpretation.
- Every action must include owner, due date and priority.
- Do not create local UI components.

## Rules tested

- package import contract
- workspace architecture
- business pattern selection
- evidence and trust
- actionability
- visual restraint
