# EvidenceBlock Guidelines

## Purpose

`EvidenceBlock` makes source, strength, freshness and validation visible when a claim, recommendation or decision depends on proof.

It is the v0.8 target replacement for generated evidence cards and ad hoc proof panels.

## Use this component when

- A claim needs source context.
- A recommendation depends on evidence.
- Freshness or validation affects trust.
- The user needs to distinguish observed data from expected value.
- A decision needs proof before action.

## Do not use this component when

- The content is only a metric; use `MetricBlock`.
- The content is only a recommendation; use `DecisionBlock`.
- The content is only an action; use `ActionBlock`.
- The evidence is a dense list row; use `EvidenceRow`.

## Prefer this component over

```txt
EvidenceCard
source footnotes hidden in copy
tooltip-only evidence
local proof cards
```

## Never generate

- hidden evidence in a tooltip only
- source strength based on AI confidence
- proof claims without source or freshness when trust depends on them
- local evidence cards
- evidence text that mixes observed proof and expected outcome

## Required props

```txt
title
```

## Optional props

```txt
description
source
sourceStrength
freshness
validationStatus
children
```

## GenAI generation rules

1. Use `EvidenceBlock` when trust or proof matters.
2. Keep source, strength, freshness and validation separate.
3. Use `children` for supporting evidence details or rows.
4. Do not hide proof in tooltips or metadata only.
5. Do not invent source strength.

## Common generation failures

Failure: Make writes “validated” without validation context.
Why it fails: Validation must be visible and explainable.
Fix: Use `validationStatus`.

Failure: Make uses AI confidence as source strength.
Why it fails: Confidence is not evidence quality.
Fix: Use the source-strength contract only.

Failure: Make hides evidence behind a tooltip.
Why it fails: Trust-critical information must be visible.
Fix: Use `EvidenceBlock` or `EvidenceRow`.

## Related contracts

```txt
contracts/components.contract.json
contracts/v0.8-target-surface.contract.json
contracts/v0.8-regeneration-plan.contract.json
contracts/source-strength.contract.json
```
