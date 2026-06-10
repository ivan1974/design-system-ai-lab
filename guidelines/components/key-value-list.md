# KeyValueList Guidelines

## Purpose

`KeyValueList` presents structured metadata as label-value pairs.

It is for compact facts, not interpretation or recommendations.

## Use this component when

- The user needs structured metadata.
- Facts are short and comparable.
- The content supports context, source, asset, site or customer details.

## Do not use this component when

- The content is a recommendation or action.
- The content needs evidence trail semantics; use `EvidenceRow`.
- The content is a metric group; use `MetricStrip` or `MetricCard`.

## Prefer this component over

- custom definition lists
- local metadata rows
- loose paragraphs for structured facts

## Never generate

- key-value facts without source when source matters
- long narrative values that should be content sections
- local metadata components

## Required props

```txt
children or items
```

Use `KeyValueRow` when composing manually.

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use for compact factual metadata.
2. Keep labels short.
3. Do not use for proof, recommendation or action semantics.
4. Use source and validation components when trust matters.

## Common generation failures

Failure: Make puts recommendations into key-value rows.
Why it fails: Recommendations need rationale, evidence and readiness.
Fix: Use `RecommendationCard`.

Failure: Make uses paragraphs for simple facts.
Why it fails: The user cannot scan structured metadata.
Fix: Use `KeyValueList`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/weak-layout.md
guidelines/repair-prompts/missing-evidence.md
```

## Related stories

```txt
src/design-system/stories/components/compact-workspace-primitives.stories.tsx
Story status: metadata primitive proof or explicit no-story rationale.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/evidence-and-trust.contract.json
```
