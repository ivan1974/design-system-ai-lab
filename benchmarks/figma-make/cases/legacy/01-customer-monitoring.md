# Legacy 01 — Customer monitoring

## Status

Superseded by:

```txt
benchmarks/figma-make/cases/01-first-generation-customer-monitoring.md
```

This legacy case is kept only for comparison with pre-v0.6.0 benchmark structure.

## Intent

Generate a customer monitoring decision workspace.

The user must understand which customer or asset needs attention next, why, what evidence exists and what action to take.

## Benchmark status

This is a fixed benchmark case, not reusable prompt guidance.

Reusable guidance lives in:

```txt
guidelines/prompts/customer-monitoring.md
```

Do not rewrite benchmark facts unless the scoring objective changes.

## Prompt for Figma Make

Create a React `App.tsx` screen for a B2B service team monitoring customer sites and connected assets.

Use `design-system-ai-lab` components only.

Required structure:

- `WorkspaceShell`
- `PageHeading`
- `FilterBar`
- `MasterDetailLayout`
- `ListContainer`
- queue rows for repeated customers, assets or risks
- `WorkspaceDetailPanel`
- `Tabs`
- `ActionRow` or `StickyActionBar` for follow-through

Use business patterns when relevant:

- `CustomerStatusCard`
- `ConnectivityCoverageCard`
- `ServiceRiskSummary`
- `AssetIntelligenceSummary`

Show facts before interpretation.

Show source strength and validation status when presenting monitoring or risk interpretation.

Do not claim full monitoring coverage unless the source scope supports it.

Do not create local UI components.

## Rules tested

- package import contract
- workspace architecture
- rows and density
- business pattern selection
- evidence and trust
- actionability
