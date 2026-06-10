# StatusSummary Guidelines

## Purpose

`StatusSummary` shows structured status context with badges and label-value items.

It is for compact context when no more specific business pattern fits.

## Use this component when

- The user needs a quick structured view of current status.
- The information is display-only.
- The content includes short status badges and metadata items.
- A business pattern would be too specific or too heavy.

## Do not use this component when

- The content is a metric comparison; use `MetricGrid` or `MetricStrip`.
- The content is a risk or blocker; use `AlertCard` or `PriorityList`.
- The content is an action plan; use `ActionList` or `ActionRow`.
- The content is proof maturity; use `ValueProofCard`.
- The content is a recommendation; use `RecommendationCard`.

## Prefer this component over

- local status summaries
- generic `Card` for structured metadata
- loose paragraphs for status context

Prefer alternatives:

```txt
customer context → CustomerStatusCard
renewal context → RenewalRiskSummary
proof context → ValueProofCard
recommendation review → RecommendationReviewPanel
source evidence → EvidenceRow
```

## Never generate

- `StatusSummary` as a substitute for value proof
- `StatusSummary` as an action plan
- status badges that imply validation without validation fields
- generic dashboard summaries when business patterns fit

## Required props

```txt
items
badges when short status labels matter
title when the summary needs a label
description when the summary needs context
```

## Controlled values

Badges may use tone values aligned with badge and tag tone vocabulary:

```txt
neutral | primary | success | warning | danger
```

## GenAI generation rules

1. Use for display-only structured context.
2. Prefer business patterns when the domain intent is clear.
3. Keep status, source, proof and action semantics separate.
4. Do not use as a shortcut for proof readiness.
5. Do not hide action ownership inside status items.

## Common generation failures

Failure: Make uses `StatusSummary` for proof maturity.
Why it fails: Proof needs readiness and validation context.
Fix: Use `ValueProofCard`.

Failure: Make uses `StatusSummary` as an action plan.
Why it fails: Actions need owner, due date and priority.
Fix: Use `ActionRow`, `ActionCard` or `ActionList`.

Failure: Make uses a generic summary where a business pattern fits.
Why it fails: Pattern semantics are lost.
Fix: Use the relevant business pattern.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
guidelines/repair-prompts/actions-without-ownership.md
guidelines/repair-prompts/generic-dashboard.md
```

## Related stories

```txt
src/design-system/stories/decision/status-summary.stories.tsx
Story title: component-level StatusSummary usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
```
