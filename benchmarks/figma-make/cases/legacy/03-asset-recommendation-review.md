# Legacy 03 — Asset recommendation review

## Status

Superseded by:

```txt
benchmarks/figma-make/cases/03-first-generation-asset-recommendation.md
```

This legacy case is kept only for comparison with pre-v0.6.0 benchmark structure.

## Intent

Generate an asset recommendation review workspace.

The user must review an asset, its evidence, recommendation rationale, validation status and next action before customer use.

## Benchmark status

This is a fixed benchmark case, not reusable prompt guidance.

Reusable guidance lives in:

```txt
guidelines/prompts/asset-recommendation-review.md
```

Do not rewrite benchmark facts unless the scoring objective changes.

## Prompt for Figma Make

Create a React `App.tsx` screen for a service expert reviewing asset recommendations.

Use `design-system-ai-lab` components only.

Required structure:

- `WorkspaceShell`
- `PageHeading`
- `FilterBar`
- `MasterDetailLayout`
- `ListContainer`
- `AssetQueueRow` or `RecommendationQueueRow`
- `WorkspaceDetailPanel`
- `Tabs`
- `ActionRow` or `StickyActionBar`

Use business patterns when relevant:

- `AssetIntelligenceSummary`
- `RecommendationReviewPanel`
- `RecommendationCard`

Show observable facts before interpretation.

Show source strength, source scope and validation status.

Do not present AI confidence as source strength.

Every action must include owner, due date and priority.

Do not create local UI components.

## Rules tested

- package import contract
- workspace architecture
- asset/recommendation patterns
- evidence and source scope
- human validation visibility
- actionability
