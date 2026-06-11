# Queue rows

## Purpose

Queue rows are first-class decision-list objects for repeated customers, assets, risks and recommendations.

They prevent Figma Make from creating local styled row wrappers around generic content.

## Use this component when

Use queue rows when the user must review, select, compare or triage repeated business objects.

Use the most specific row available:

```txt
CustomerQueueRow for customers
AssetQueueRow for assets
RiskQueueRow for risks
RecommendationQueueRow for recommendations
ReviewQueueRow for generic review queues
```

Place queue rows inside `ListContainer`.

## Do not use this component when

Do not use queue rows for standalone summaries, metrics or long-form explanation.

Do not use generic custom rows when a specific package row exists.

Do not wrap `SignalRow` in a custom selected-state container to simulate a queue row.

## Prefer this component over

Prefer queue rows over:

```txt
local CustomerRow
local AssetRow
local RiskRow
local RecommendationRow
local QueueItem
local ListItem
local selected div wrappers
```

Prefer `ReviewQueueRow` only when no specific business row fits.

## Never generate

Never generate local visual row components.

Never generate queue rows outside a clear list or review context.

Never hide priority, status or source strength when they are needed for the decision.

Never create custom selected, hover, status or priority styling around package rows.

## Required props

Use the props required by the selected queue row type.

For all queue rows, provide enough content to identify the object and decision state:

```txt
title or business object name
description or reason for attention
status or risk label when relevant
priority when the item is actionable
sourceStrength when trust matters
selected when the row is the active detail item
```

## Controlled values

Use documented controlled values from `contracts/props.contract.json`.

Common values include:

```txt
priority: low, medium, high, critical
statusTone: neutral, info, success, warning, danger
riskTone: neutral, info, success, warning, danger
sourceStrength: unknown, partial, single-source, multi-source, validated
```

Do not invent values.

## GenAI generation rules

Use queue rows for repeated review objects in a decision workspace.

Use `ListContainer` as the parent.

Use `WorkspaceDetailPanel` for the selected item detail.

Keep repeated objects dense and scannable.

Show facts before interpretation.

Use package-provided selected and hover states.

## Common generation failures

Failure: The generated screen uses custom div rows.

Why it fails: It creates a local design system and loses package states.

Fix: Replace custom rows with the most specific queue row.

Failure: The generated screen uses many equal cards for repeated objects.

Why it fails: It creates card saturation and weak list density.

Fix: Use `ListContainer` with queue rows.

Failure: The selected row does not match the detail panel.

Why it fails: It breaks the master/detail relationship.

Fix: Mark the selected row and align the detail panel content.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/missing-list-container.md
guidelines/evaluation/repair/poor-row-density.md
guidelines/evaluation/repair/no-local-components.md
```

If the issue is unclear, use:

```txt
guidelines/evaluation/repair/repair-router.md
```

## Related stories

```txt
src/design-system/stories/decision/queue-rows.stories.tsx
src/design-system/stories/patterns/customer-queue-row.stories.tsx
src/design-system/stories/patterns/asset-queue-row.stories.tsx
src/design-system/stories/patterns/recommendation-queue-row.stories.tsx
src/design-system/stories/patterns/risk-queue-row.stories.tsx
```

## Related contracts

```txt
contracts/component-registry.contract.json
contracts/props.contract.json
contracts/story-coverage.contract.json
```
