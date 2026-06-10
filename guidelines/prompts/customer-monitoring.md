# Customer Monitoring Prompt

## Purpose

Use this reusable prompt to generate a customer monitoring workspace with the v0.5.1 decision workspace standard.

This is reusable generation guidance, not a fixed benchmark case.

Fixed scoring cases live in:

```txt
benchmarks/figma-make/cases/*
```

## Screen intent

Generate a decision-oriented customer monitoring workspace.

Primary decision:

```txt
Decide which customer, asset or service risk needs action before the next customer touchpoint.
```

Do not generate a generic dashboard or a long stack of equal cards.

## Primary prompt

```txt
Create a complete visible desktop customer monitoring workspace in App.tsx.

Read and follow:
- make-minimal-contract.md
- Guidelines.md
- setup.md
- prompts/workspace-v2.md
- contracts/components.contract.json
- contracts/props.contract.json
- contracts/evidence-and-trust.contract.json

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from dist/ or src/.
Do not leave App.tsx empty.

User role: account owner or service team member.
User decision: decide which customer, asset or service risk needs action before the next customer touchpoint.

Use a v0.5.1 decision workspace structure:
1. WorkspaceShell with PageHeading and a clear primary action.
2. FilterBar for scope, filters and result count.
3. MasterDetailLayout when the screen includes a repeated customer, asset or risk list.
4. ListContainer with CustomerQueueRow, AssetQueueRow, RiskQueueRow or ReviewQueueRow for repeated objects.
5. WorkspaceDetailPanel for selected item detail.
6. Tabs when selected detail has several local views.
7. StickyActionBar, ActionRow or ActionCard for follow-through.
8. SectionStack and SectionBlock for grouped content.

Use business patterns before low-level composition:
- CustomerStatusCard for customer context.
- ConnectivityCoverageCard for monitoring coverage and visibility limits.
- ServiceRiskSummary for service risk orientation.
- AssetIntelligenceSummary when asset intelligence affects the decision.
- AlertCard for highlighted risks.
- EvidenceRow for source and evidence verification.
- SignalRow only for observed signals.
- MetricStrip with CompactMetric for compact monitoring signals.
- ActionRow for assigned follow-up actions.
- CreateActionDialog when standard action creation is part of the flow.

Content constraints:
- Show facts before interpretation.
- Show source scope, source strength, freshness and validation status when trust matters.
- Use canonical values such as sourceStrength="partial" and validationStatus="internal-review-needed" when review is required.
- Do not present partial visibility as complete coverage.
- Do not present non-connected assets as live-monitored.
- Do not present expected outcomes as proven value.
- Do not invent proof points, evidence, sources, telemetry, asset facts or customer facts.
- Every AlertCard must include a recommendation.
- Every action must include owner, due date and priority.

Output requirement:
Generate one complete visible screen in App.tsx using package components directly.
```

## Short prompt

```txt
Create a complete visible customer monitoring workspace in App.tsx using design-system-ai-lab.
Use WorkspaceShell, PageHeading, FilterBar and, when review is needed, MasterDetailLayout with ListContainer and WorkspaceDetailPanel.
Use Tabs for selected detail views.
Use CustomerStatusCard, ConnectivityCoverageCard, ServiceRiskSummary, MetricStrip, AlertCard, EvidenceRow and ActionRow when relevant.
Use queue rows for repeated customers, assets or risks.
Do not create local components, card stacks or generic dashboards.
Keep source scope, source strength, freshness, validation and action ownership visible.
```

## Repair prompts

Use these when Make drifts:

```txt
repair-prompts/card-saturation.md
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
repair-prompts/missing-evidence.md
repair-prompts/actions-without-ownership.md
```

## Benchmark alignment

Related fixed benchmark case:

```txt
benchmarks/figma-make/cases/01-customer-monitoring.md
```

Benchmark cases are stable scoring scenarios. Do not rewrite benchmark facts unless the scoring objective changes.

## Final principle

This prompt should generate a focused customer monitoring workspace, not a generic dashboard.

The output should help the user understand the customer situation, trust the visible signals, identify priority service risks and assign next actions.
