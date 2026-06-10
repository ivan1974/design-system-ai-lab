# PriorityList Guidelines

## Purpose

`PriorityList` groups risks, blockers or attention items that must be reviewed first.

It is not an action plan.

## Use this component when

- Several risks or blockers need prioritization.
- The user must understand what needs attention before reviewing recommendations.
- The items are usually `AlertCard` or similar attention components.
- Source, validation or proof gaps need to be visible as priority context.

## Do not use this component when

- The content is a list of owned actions; use `ActionList` or `ActionRow`.
- The content is recommendations; use `RecommendationReviewPanel`.
- The content is evidence only; use `EvidenceRow`.
- The list is generic or decorative.

## Prefer this component over

- generic lists of blockers
- local priority sections
- card stacks for risks

Prefer alternatives:

```txt
owned actions → ActionList or ActionRow
recommendations → RecommendationReviewPanel
source facts → EvidenceRow
metric comparison → MetricGrid
```

## Never generate

- `PriorityList` as an action plan
- priority items without evidence or context when trust matters
- generic lists labeled as priorities
- priority lists that hide recommendation or action follow-up

## Required props

```txt
children
title when the priority set needs context
description when the priority basis matters
actions when the section has a contextual action
```

## Controlled values

No enum-like controlled values on `PriorityList` itself.

Priority, severity and risk values belong to child components.

## GenAI generation rules

1. Use `PriorityList` before recommendations or actions when attention order matters.
2. Prefer `AlertCard` children for risks or blockers.
3. Do not mix action rows and recommendation cards into the same priority list.
4. Keep the reason for priority visible.
5. Use trust and validation metadata when the priority depends on source quality.

## Common generation failures

Failure: Make uses `PriorityList` as a task list.
Why it fails: Priority review and action execution are different jobs.
Fix: Use `ActionList` or `ActionRow`.

Failure: Make lists generic concerns without evidence.
Why it fails: Priority requires context and trust basis.
Fix: Use `AlertCard` with evidence and recommendation.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/missing-evidence.md
guidelines/repair-prompts/actions-without-ownership.md
guidelines/repair-prompts/card-saturation.md
```

## Related stories

```txt
src/design-system/stories/decision/priority-list.stories.tsx
Story title: component-level PriorityList usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
```
