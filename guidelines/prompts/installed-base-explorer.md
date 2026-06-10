# Installed Base Explorer Prompt

## Purpose

Use this reusable prompt to generate an installed base explorer workspace with the v0.5.1 decision workspace standard.

This is reusable generation guidance, not a fixed benchmark case.

Fixed scoring cases live in:

```txt
benchmarks/figma-make/cases/*
```

## Primary decision

```txt
Decide which asset, hierarchy area or source-scope gap needs review before customer or service follow-up.
```

## Primary prompt

```txt
Create a complete visible desktop installed base explorer workspace in App.tsx.

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
Do not generate a generic dashboard.
Do not create card saturation.

User role: service team member, account owner or asset expert.
User decision: decide which asset, hierarchy area or source-scope gap needs review before customer or service follow-up.

Use a v0.5.1 decision workspace structure:
1. WorkspaceShell with PageHeading and a primary follow-up action.
2. FilterBar for site, asset status and monitoring scope.
3. MasterDetailLayout when assets need selected-item review.
4. ListContainer with AssetQueueRow for repeated assets.
5. WorkspaceDetailPanel for selected asset detail.
6. Tabs when selected detail has several local views.
7. StickyActionBar, ActionRow or ActionCard for follow-through.
8. SectionStack and SectionBlock for grouped content.

Use business patterns before low-level composition:
- AssetIntelligenceSummary for asset context and interpretation.
- ConnectivityCoverageCard for monitoring coverage and visibility limits.
- ComponentHierarchy for asset or component structure.
- ServiceRiskSummary when source or coverage gaps create service risk.
- EvidenceRow for source and evidence verification.
- AssetQueueRow inside ListContainer for repeated assets.
- ActionRow for validation and follow-up actions.
- MetricStrip with CompactMetric for compact monitoring or coverage signals.

Content constraints:
- Show known installed base, connected assets and unknowns separately.
- Show facts before interpretation.
- Show source scope, source strength, freshness and validation status when trust matters.
- Use canonical values such as sourceStrength="partial" and validationStatus="internal-review-needed" when review is required.
- Do not present partial visibility as complete asset knowledge.
- Do not present non-connected assets as live-monitored.
- Do not present asset hierarchy as proof or recommendation.
- Every action must include owner, due date and priority.
- Do not invent asset facts, hierarchy, telemetry, sources, proof or validation.

Output requirement:
Generate one complete visible screen in App.tsx using package components directly.
```

## Short prompt

```txt
Create an installed base explorer workspace in App.tsx using design-system-ai-lab.
Use WorkspaceShell, PageHeading, FilterBar, MasterDetailLayout, ListContainer, AssetQueueRow, WorkspaceDetailPanel, Tabs and StickyActionBar.
Use AssetIntelligenceSummary, ConnectivityCoverageCard, ComponentHierarchy, ServiceRiskSummary, EvidenceRow and ActionRow when relevant.
Do not create local components, a generic dashboard or card stack.
Keep source scope, source strength, freshness, validation and action ownership visible.
```

## Repair prompts

Use these when Make drifts:

```txt
repair-prompts/card-saturation.md
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
repair-prompts/missing-evidence.md
repair-prompts/partial-visibility-overstated.md
repair-prompts/actions-without-ownership.md
```

## Benchmark alignment

Related fixed benchmark case:

```txt
benchmarks/figma-make/cases/05-installed-base-explorer.md
```

Benchmark cases are stable scoring scenarios. Do not rewrite benchmark facts unless the scoring objective changes.

## Final principle

This prompt should generate an installed base decision workspace, not an asset dashboard.

The output should help the user compare known assets, connected assets, hierarchy, source scope, evidence and next actions without overstating visibility.
