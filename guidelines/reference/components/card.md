# Card Guidelines

## Purpose

`Card` groups a small amount of related supporting content.

It is a generic emphasis container, not the default layout primitive for repeated objects.

## Use this component when

- No more specific business pattern fits.
- The content is short, focused and supporting.
- The card explains context, assumptions or notes.
- The section needs visual emphasis but not a decision-specific component.

## Do not use this component when

- The content is a repeated queue item.
- The content is a metric, alert, recommendation, action, proof or business pattern.
- The screen becomes a stack of equal cards.
- The card hides source limits, proof gaps or ownership gaps.

## Prefer this component over

- local card wrappers
- custom boxes
- decorative containers

Prefer more specific components when they fit:

```txt
repeated objects → ListContainer with row components
metrics → MetricCard or MetricStrip
alerts → AlertCard
recommendations → RecommendationCard
proof → ValueProofCard
actions → ActionRow or ActionCard
customer context → CustomerStatusCard
renewal context → RenewalRiskSummary
```

## Never generate

- a card stack as the default screen structure
- nested card systems
- `Card` as a substitute for business patterns
- `Card` to make weak evidence appear stronger
- local `Card` replacements

## Required props

```txt
title when the group needs a label
description when the user needs interpretation
children
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use `Card` sparingly.
2. Prefer business patterns and decision components first.
3. Use `SectionBlock` or `SectionStack` for layout grouping.
4. Use `ListContainer` for repeated objects.
5. Do not use cards to simulate a dashboard.

## Common generation failures

Failure: The generated screen contains many equal cards.
Why it fails: It creates card saturation and hides priority.
Fix: Use `MasterDetailLayout`, `ListContainer`, `SectionBlock` and business patterns.

Failure: Make uses `Card` for proof or recommendation.
Why it fails: The card lacks required trust and readiness semantics.
Fix: Use `ValueProofCard` or `RecommendationCard`.

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
contracts/screen-architecture.contract.json
contracts/generation-blockers.contract.json
```
