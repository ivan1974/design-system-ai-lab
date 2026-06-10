# ReviewQueueRow Guidelines

## Purpose

`ReviewQueueRow` represents one item in a review queue.

It lets Make generate dense, comparable rows instead of repeated cards.

## Use this component when

- The screen has customers, assets, risks, recommendations or accounts to review.
- One item can be selected and inspected in a detail panel.
- The row needs status, priority, source strength or metrics.

## Do not use this component when

- The item is a final action; use `ActionRow`.
- The item is evidence only; use `EvidenceRow`.
- The screen has no repeated review object.

## Prefer this component over

- card stacks for review queues
- local queue item components
- generic rows without source or priority context

## Never generate

- a review queue outside `ListContainer`
- row status that hides validation or source limits

## Required props

```txt
title
description when the item needs context
status or statusTone when review state matters
priority when the item has urgency
sourceStrength when trust matters
selected when this item drives the detail panel
```

## Controlled values

```txt
density: comfortable | spacious
priority: low | medium | high | critical
sourceStrength: unknown | partial | single-source | multi-source | validated
```

## GenAI generation rules

1. Put `ReviewQueueRow` inside `ListContainer`.
2. Use it in `MasterDetailLayout.list`.
3. Use `selected` for the row represented by `WorkspaceDetailPanel`.
4. Keep row metrics short and comparable.
5. Use `SourceStrengthPill` or `sourceStrength` when trust affects review.

## Common generation failures

Failure: Make creates one card per review item.
Why it fails: It produces card saturation.
Fix: Use `ListContainer` with `ReviewQueueRow`.

Failure: The selected detail does not match the selected row.
Why it fails: The list/detail relationship becomes unclear.
Fix: Make one row selected and match the detail panel title/content.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/poor-row-density.md
guidelines/repair-prompts/card-saturation.md
guidelines/repair-prompts/missing-detail-panel.md
```

## Related stories

```txt
src/design-system/stories/v0.5.1-critical-generation.stories.tsx
Story title: Design System / v0.5.1 / Critical Generation Coverage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/screen-architecture.contract.json
```
