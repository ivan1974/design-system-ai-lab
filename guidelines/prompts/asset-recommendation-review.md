# Asset Recommendation Review Prompt

## Purpose

Reusable prompt for an asset recommendation review workspace.

This is reusable generation guidance, not a fixed benchmark case.

Use the fixed benchmark case for scoring:

```txt
benchmarks/figma-make/cases/03-first-generation-asset-recommendation.md
```

## Primary decision

```txt
Decide whether asset recommendations are ready for customer communication.
```

## Prompt

```txt
Create a complete visible desktop asset recommendation review workspace in App.tsx.

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
- MasterDetailLayout for recommendation or asset review
- ListContainer with AssetQueueRow or RecommendationQueueRow
- WorkspaceDetailPanel for selected recommendation detail
- ActionRow or StickyActionBar for expert validation and follow-up

Prefer business patterns when relevant:
- AssetIntelligenceSummary
- ServiceRiskSummary
- RecommendationReviewPanel
- RecommendationCard
- ComponentHierarchy

Rules:
- Do not generate a generic dashboard.
- Do not create a card stack.
- Do not create local components or local wrappers.
- Do not import from dist/ or src/.
- Show source-system facts before interpretation.
- Separate observed signals from intelligence interpretation.
- Do not present partial visibility as complete asset knowledge.
- Do not present source strength as AI confidence.
- Do not invent asset facts, telemetry, sources, proof or validation.
- Every action must include owner, due date and priority.
```

## Repair

If Make drifts, use:

```txt
guidelines/evaluation/repair/repair-router.md
```
