# 03 — First generation asset recommendation

## Type

first-generation

## Intent

Generate an asset recommendation review workspace from scratch.

The user must review an asset, evidence, recommendation rationale, validation status and next action before customer use.

## Related reusable prompt

```txt
guidelines/prompts/asset-recommendation-review.md
```

## Prompt for Figma Make

Create a React `App.tsx` screen for a service expert reviewing asset recommendations.

Use only `design-system-ai-lab` package components and `design-system-ai-lab/styles.css`.

Required structure:

- `WorkspaceShell`
- `PageHeading`
- `FilterBar`
- `MasterDetailLayout`
- `ListContainer`
- `AssetQueueRow` or `RecommendationQueueRow`
- `WorkspaceDetailPanel`
- `ActionRow` or `StickyActionBar`

Use business patterns when relevant:

- `AssetIntelligenceSummary`
- `RecommendationReviewPanel`
- `RecommendationCard`
- `ComponentHierarchy`

## Fixed facts

- Asset: MV switchgear line 2.
- Source scope: connected assets only.
- Source strength: single-source.
- Validation status: internal-review-needed.
- Recommendation: schedule expert review before customer communication.
- Expected outcome: reduce delayed maintenance decision risk.

## Must preserve

- Observable facts before interpretation.
- Asset health is not full asset intelligence.
- Source strength is not AI confidence.
- Do not invent telemetry, benchmark values or component hierarchy.
- Every action must include owner, due date and priority.

## Rules tested

- asset intelligence
- evidence and source scope
- human validation visibility
- domain model semantics
- actionability
