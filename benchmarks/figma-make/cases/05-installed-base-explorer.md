# 05 — Installed base explorer

## Intent

Generate an installed base explorer workspace.

The user must compare known installed base, connected assets, source scope and next action without overstating coverage.

## Benchmark status

This is a fixed benchmark case, not reusable prompt guidance.

Reusable generation guidance lives in:

```txt
guidelines/prompts/*
```

Do not rewrite benchmark facts unless the scoring objective changes.

## Prompt for Figma Make

Create a React `App.tsx` screen for a service team exploring a customer's installed base.

Use `design-system-ai-lab` components only.

Required structure:

- `WorkspaceShell`
- `PageHeading`
- `FilterBar`
- `MasterDetailLayout`
- `ListContainer`
- `AssetQueueRow`
- `WorkspaceDetailPanel`
- `Tabs`
- `ActionRow` or `StickyActionBar`

Use business patterns when relevant:

- `AssetIntelligenceSummary`
- `ConnectivityCoverageCard`
- `ServiceRiskSummary`
- `ComponentHierarchy`

Show known assets, connected assets and unknowns separately.

Show source scope and source strength.

Do not claim complete asset knowledge when source strength is partial or unknown.

Every follow-up action must include owner, due date and priority.

Do not create local UI components.

## Rules tested

- package import contract
- workspace architecture
- installed base patterns
- source scope and known unknowns
- no overclaiming coverage
- actionability
