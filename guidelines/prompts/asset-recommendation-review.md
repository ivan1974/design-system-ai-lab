# Asset Recommendation Review Prompt

## Purpose

Use this reusable prompt to generate an asset recommendation review workspace with the v0.5.1 decision workspace standard.

This is reusable generation guidance, not a fixed benchmark case.

Fixed scoring cases live in:

```txt
benchmarks/figma-make/cases/*
```

## Primary decision

```txt
Decide whether asset recommendations are ready for customer communication.
```

## Primary prompt

```txt
Create a complete visible desktop asset recommendation review workspace in App.tsx.

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

User role: service manager, account owner or asset expert.
User decision: decide whether asset recommendations are ready for customer communication.

Use a v0.5.1 decision workspace structure:
1. WorkspaceShell with PageHeading and a primary validation action.
2. FilterBar for recommendation scope, priority, readiness and source status.
3. MasterDetailLayout when recommendations or assets need selected-item review.
4. ListContainer with AssetQueueRow or RecommendationQueueRow for repeated objects.
5. WorkspaceDetailPanel for selected recommendation detail.
6. Tabs when selected detail has several local views.
7. StickyActionBar, ActionRow or ActionCard for expert validation or follow-up.
8. SectionStack and SectionBlock for grouped content.

Use business patterns before low-level composition:
- AssetIntelligenceSummary before asset recommendations.
- ServiceRiskSummary when partial asset visibility creates service risk.
- RecommendationReviewPanel in mode="drawer" for recommendation review.
- RecommendationCard for recommendation rationale and readiness.
- EvidenceRow for source and evidence verification.
- RecommendationQueueRow or AssetQueueRow inside ListContainer for repeated objects.
- ActionRow for validation and follow-up actions.
- MetricStrip with CompactMetric for compact health or signal context.

Content constraints:
- Show source-system facts before health or service signals.
- Separate observed signals from intelligence interpretation.
- Do not present intelligence interpretation as source-system truth.
- Do not present partial visibility as complete asset knowledge.
- Do not present non-connected assets as live-monitored.
- Keep source scope, source strength, freshness and validation visible.
- Every recommendation must be grounded in visible facts or evidence.
- Every action must include owner, due date and priority.
- Do not invent asset facts, telemetry, sources, proof or validation.

Output requirement:
Generate one complete visible screen in App.tsx using package components directly.
```

## Short prompt

```txt
Create an asset recommendation review workspace in App.tsx using design-system-ai-lab.
Use WorkspaceShell, PageHeading, FilterBar, MasterDetailLayout, ListContainer, RecommendationQueueRow or AssetQueueRow, WorkspaceDetailPanel, Tabs and StickyActionBar.
Use AssetIntelligenceSummary, ServiceRiskSummary, RecommendationReviewPanel, RecommendationCard, EvidenceRow and ActionRow.
Do not create local components, a generic dashboard or card stack.
Keep source scope, source strength, freshness and validation visible before customer use.
```

## Repair prompts

Use these when Make drifts:

```txt
repair-prompts/card-saturation.md
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
repair-prompts/missing-evidence.md
repair-prompts/missing-human-validation.md
repair-prompts/actions-without-ownership.md
```

## Benchmark alignment

Related fixed benchmark case:

```txt
benchmarks/figma-make/cases/03-asset-recommendation-review.md
```

Benchmark cases are stable scoring scenarios. Do not rewrite benchmark facts unless the scoring objective changes.
