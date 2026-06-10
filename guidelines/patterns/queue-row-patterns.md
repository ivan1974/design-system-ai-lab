# Queue Row Patterns Guidelines

## Purpose

Queue row patterns show dense, selectable business objects in review queues.

They are alternatives to card stacks.

## Business intent

Help the user scan many customers, assets, recommendations or risks before selecting one for detail review.

## User decision supported

```txt
Which item should I review next, and why?
```

## Input facts required

Queue rows require a stable object identity and short decision context.

Common fields:

```txt
title or object name
description
scope or context
status label when supplied
priority when supplied
sourceStrength when supplied
small metrics when supplied
selected state when the row drives detail
interactive state when selectable
```

## Evidence and trust requirements

- Show `sourceStrength` when row priority depends on source basis.
- Do not hide incomplete context in the description.
- Use the detail panel for deeper evidence, proof or recommendation rationale.

## Actionability requirements

Queue rows support triage and selection.

They do not replace `ActionRow` or `CreateActionDialog` for follow-through.

## Use this component when

- The screen contains many repeated business objects.
- The user must scan and choose one item.
- A card stack would be too heavy.
- The selected item opens a detail panel.

## Do not use this component when

- Only one item is shown; use the relevant summary pattern.
- The content is an owned action list; use `ActionRow`.
- The content needs full evidence or proof details inline.

## Prefer this component over

- repeated `Card` objects
- local queue rows
- generic list items without decision metadata

## Never generate

- queue rows as decorative lists
- queue rows without a meaningful title
- queue rows that imply full proof or validation without detail context
- local row components when package queue rows fit

## Required props

Use the specific row pattern props:

```txt
AssetQueueRow.assetName
CustomerQueueRow.customerName
RecommendationQueueRow.recommendationTitle
RiskQueueRow.riskTitle
```

Use optional props for context:

```txt
description
priority
sourceStrength
selected
interactive
trailing
```

## Controlled values

Shared controlled values:

```txt
priority: low | medium | high | critical
sourceStrength: unknown | partial | single-source | multi-source | validated
statusTone / riskTone / readinessTone: neutral | primary | success | warning | danger
```

## Mode guidance

No display modes.

Queue rows are dense list patterns. Use inside `ListContainer` or a queue section.

## GenAI generation rules

1. Use queue rows when repeated business objects need scanning.
2. Use `ListContainer` around repeated queue rows.
3. Use the specific queue row for the object type.
4. Use detail panels for deeper review.
5. Do not use card stacks for dense queues.

## Common generation failures

Failure: Make creates one card per queue item.
Why it fails: Dense review becomes visually heavy.
Fix: Use queue rows inside `ListContainer`.

Failure: Make uses a generic row for all objects.
Why it fails: Object-specific semantics are lost.
Fix: Use `AssetQueueRow`, `CustomerQueueRow`, `RecommendationQueueRow` or `RiskQueueRow`.

Failure: Make puts full detail in every row.
Why it fails: Queue rows should support triage, not full review.
Fix: Move detail to `WorkspaceDetailPanel`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/poor-row-density.md
guidelines/repair-prompts/card-saturation.md
guidelines/repair-prompts/missing-detail-panel.md
```

## Related lower-level components

```txt
ReviewQueueRow
ListContainer
StatusPill
PriorityPill
SourceStrengthPill
WorkspaceDetailPanel
```

## Related stories

```txt
src/design-system/stories/components/queue-rows.stories.tsx
Story status: queue row proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/business-patterns.contract.json
contracts/evidence-and-trust.contract.json
```
