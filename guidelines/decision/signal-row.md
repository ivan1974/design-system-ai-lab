# SignalRow Guidelines

## Purpose

`SignalRow` shows one observed signal and its current value.

It is for observation, not recommendation, proof or action.

## Use this component when

- The screen lists observable signals.
- The user needs to compare signal labels and values.
- A signal supports later evidence, alert or recommendation review.
- The signal may be selected for detail.

## Do not use this component when

- The content is a recommendation; use `RecommendationCard`.
- The content is evidence with source metadata; use `EvidenceRow`.
- The content is an owned action; use `ActionRow`.
- The content is proof or customer-ready value; use `ValueProofCard`.

## Prefer this component over

- local signal rows
- generic key-value rows for observed signals
- card stacks for simple signal lists

## Never generate

- `SignalRow` as a recommendation
- `SignalRow` as proof of value
- signal values that replace source strength or evidence context
- observed signal rows without supplied signal context

## Required props

```txt
label
value
description when the signal needs context
selected when the row drives selected detail
interactive when the row is selectable
```

## Controlled values

No enum-like controlled values.

## GenAI generation rules

1. Use `SignalRow` for observed signals only.
2. Keep label and value factual.
3. Use `EvidenceRow` when source, freshness or validation status matters.
4. Use `RecommendationCard` only after interpretation.
5. Do not use signal values as proof or action status.

## Common generation failures

Failure: Make turns a signal into a recommendation.
Why it fails: Observation and recommendation are different decision layers.
Fix: Use `SignalRow` for observation and `RecommendationCard` for recommendation.

Failure: Make uses `SignalRow` for source evidence.
Why it fails: Evidence needs source context and validation metadata.
Fix: Use `EvidenceRow`.

Failure: Make uses a signal value as proof.
Why it fails: Proof requires readiness and validation context.
Fix: Use `ValueProofCard`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/missing-evidence.md
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
guidelines/repair-prompts/ai-confidence-as-source-strength.md
```

## Related stories

```txt
src/design-system/stories/decision/signal-row.stories.tsx
Story status: component-level proof expected. If absent locally, cover through signal and evidence examples.
```

## Related contracts

```txt
contracts/components.contract.json
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```
