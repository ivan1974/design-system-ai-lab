# Customer Monitoring Prompt

## Purpose

Reusable prompt for a customer monitoring decision workspace.

This is reusable generation guidance, not a fixed benchmark case.

Use the fixed benchmark case for scoring:

```txt
benchmarks/figma-make/cases/01-first-generation-customer-monitoring.md
```

## Primary decision

```txt
Decide which customer, asset or service risk needs action before the next customer touchpoint.
```

## Prompt

```txt
Create a complete visible desktop customer monitoring workspace in App.tsx.

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Read only the v0.6.0 Make Kit runtime path unless a specific component detail is needed:
- guidelines/Guidelines.md
- guidelines/setup.md
- guidelines/tokens.md
- guidelines/styles.md
- guidelines/runtime/generation-contract.md
- guidelines/runtime/generation-flow.md
- guidelines/runtime/component-selection.md
- guidelines/runtime/trust-action-rules.md
- guidelines/runtime/visual-rules.md
- guidelines/runtime/progressive-decision-disclosure.md

Use a decision workspace structure:
- WorkspaceShell
- PageHeading
- FilterBar
- MasterDetailLayout when the user reviews repeated customers, assets or risks
- ListContainer with approved queue rows
- WorkspaceDetailPanel for selected item detail
- ActionRow or StickyActionBar for follow-through

Prefer business patterns when relevant:
- CustomerStatusCard
- ConnectivityCoverageCard
- ServiceRiskSummary
- AssetIntelligenceSummary

Rules:
- Do not generate a generic dashboard.
- Do not create a card stack.
- Do not create local components or local wrappers.
- Do not import from dist/ or src/.
- Show facts before interpretation.
- Show source scope, source strength, freshness and validation status when trust matters.
- Do not present partial visibility as complete coverage.
- Do not invent evidence, sources, telemetry, proof or customer facts.
- Every action must include owner, due date and priority.
```

## Repair

If Make drifts, use:

```txt
guidelines/evaluation/repair/repair-router.md
```
