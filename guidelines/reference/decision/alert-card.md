# AlertCard Guidelines

## Purpose

`AlertCard` turns a risk, blocker, anomaly or important signal into a decision point.

It must help the user understand what matters, what evidence supports it and what to do next.

## Use this component when

- A signal requires user attention.
- The screen needs a visible recommendation next to the alert.
- Source, validation or freshness affects whether the alert can be trusted.
- The alert belongs after facts or business context and before actions.

## Do not use this component when

- The content is only a metric or status.
- The content is an owned task; use `ActionRow` or `ActionCard`.
- The content is a full recommendation with detailed rationale; use `RecommendationCard`.
- There is no recommended next step.

## Prefer this component over

- generic `Card` for risks or blockers
- local warning boxes
- decorative banners without recommendation

## Never generate

- `AlertCard` without `recommendation`
- invented evidence, telemetry or sources
- a critical alert that hides validation status when validation matters
- an alert that presents expected outcomes as proven value

## Required props

```txt
severity
title
description
recommendation
source or sourceScope when trust matters
sourceStrength when source basis matters
validationStatus when review state matters
action when immediate follow-through exists
```

## Controlled values

```txt
severity: critical | warning | info
sourceStrength: unknown | partial | single-source | multi-source | validated
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

## GenAI generation rules

1. Use `AlertCard` after facts, context or summary patterns.
2. Always include `recommendation`.
3. Use `severity="critical"` only when immediate attention is justified.
4. Keep source limits visible when the alert depends on partial data.
5. Put owned follow-through in `ActionRow` or `action`.

## Common generation failures

Failure: Make creates a warning card with no recommendation.
Why it fails: The user knows there is a problem but not what to do next.
Fix: Add a concrete `recommendation`.

Failure: Make invents a source to justify the alert.
Why it fails: It creates false evidence.
Fix: Remove the invented source or mark the source basis as unknown.

Failure: Make uses `success` as alert severity.
Why it fails: `AlertCard.severity` only accepts critical, warning or info.
Fix: Use the accepted severity values.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/invented-evidence.md
guidelines/evaluation/repair/missing-evidence.md
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
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
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```
