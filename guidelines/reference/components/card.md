# Card Guidelines

## Purpose

`Card` is a generic contained surface for a small amount of related supporting content.

It is a low-level core primitive, not a business card, proof card, recommendation card, metric card or action card.

## Use this component when

- No more specific target block or business pattern fits.
- The content is short, focused and supporting.
- The section needs a contained surface but no decision-specific semantics.
- The card is used sparingly inside a larger structured screen.

## Do not use this component when

- The content is a repeated queue item.
- The content is a metric, recommendation, evidence set, action, proof or business pattern.
- The screen becomes a stack of equal cards.
- The card hides source limits, proof gaps or ownership gaps.
- A target block should carry the cognitive structure.

## Prefer this component over

- local card wrappers
- custom boxes
- decorative containers
- one-off business cards with the same visual structure

Prefer target blocks when they fit:

```txt
repeated objects -> ListContainer with row components
metrics -> MetricBlock
alerts and recommendations -> DecisionBlock
proof and source detail -> EvidenceBlock
actions -> ActionBlock or ActionRow
status summary -> StatusSummary
```

## Never generate

- a card stack as the default screen structure
- nested card systems
- `Card` as a substitute for decision blocks
- `Card` to make weak evidence appear stronger
- local `Card` replacements
- a new public card only because the content label is different

## Required props

```txt
children
title when the group needs a label
description when the user needs interpretation
density when visual compactness matters
tone when semantic surface emphasis matters
footer when the contained surface has a local action area
```

## Controlled values

```txt
density: compact | comfortable | spacious
tone: neutral | muted | primary | success | warning | danger
```

## GenAI generation rules

1. Use `Card` sparingly.
2. Use `SectionBlock` or `SectionStack` for layout grouping.
3. Use `ListContainer` for repeated objects.
4. Use target blocks for metrics, decisions, evidence and actions.
5. Do not use cards to simulate a dashboard.
6. Do not create one public card component per business label.
7. Use `tone` only when the surface emphasis is meaningful and supported by content.

## Common generation failures

Failure: The generated screen contains many equal cards.
Why it fails: It creates card saturation and hides priority.
Fix: Use `MasterDetailLayout`, `ListContainer`, `SectionBlock` and target blocks.

Failure: Make uses `Card` for proof or recommendation.
Why it fails: The card lacks required trust, evidence and action semantics.
Fix: Use `EvidenceBlock`, `DecisionBlock`, `ActionBlock` or a transitional contracted pattern until target blocks are implemented.

Failure: Make invents `RiskCard`, `AssetCard` or `InsightCard`.
Why it fails: Business labels do not justify new public card components.
Fix: Use `Card` only for generic surfaces or route cognitive structure to target blocks.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/card-saturation.md
guidelines/evaluation/repair/weak-layout.md
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
```

## Related stories

```txt
src/design-system/stories/components/card.stories.tsx
Story title: component-level Card usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/screen-architecture.contract.json
contracts/generation-blockers.contract.json
```
