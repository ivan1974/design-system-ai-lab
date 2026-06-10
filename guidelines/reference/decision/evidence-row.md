# EvidenceRow Guidelines

## Purpose

`EvidenceRow` shows an observable fact, source or proof input before interpretation.

It helps generated screens keep evidence visible and separate from recommendations.

## Use this component when

- The user needs to inspect source facts or evidence trail items.
- A recommendation, alert or value proof depends on visible sources.
- The screen must show source scope, freshness, source strength or validation status.

## Do not use this component when

- The content is a recommendation, action or alert.
- The source is unknown and should not be invented.
- The row would only repeat decorative metadata.

## Prefer this component over

- plain bullet lists for trust-sensitive evidence
- local evidence rows
- generic cards for each proof item

## Never generate

- invented telemetry, source systems or proof
- evidence rows that imply validation without validation status
- AI confidence as source strength

## Required props

```txt
label
description when the evidence meaning is not obvious
source when known
sourceScope when scope limits matter
sourceStrength when trust matters
freshness when time matters
validationStatus when review state matters
```

## Controlled values

`EvidenceRow` currently accepts string values for trust metadata.

When possible, use values aligned with:

```txt
sourceStrength: unknown | partial | single-source | multi-source | validated
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

## GenAI generation rules

1. Use `EvidenceRow` before `RecommendationCard` when evidence drives the recommendation.
2. Keep source facts separate from interpretation.
3. Show source scope when visibility is partial.
4. Show freshness when timing affects trust.
5. Do not upgrade internal evidence into customer-ready proof.

## Common generation failures

Failure: Make presents a recommendation without visible evidence.
Why it fails: The user cannot judge trust.
Fix: Add `EvidenceRow` items before or near the recommendation.

Failure: Make invents source names.
Why it fails: The screen creates false evidence.
Fix: Use only supplied sources or mark source as unavailable.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/invented-evidence.md
guidelines/evaluation/repair/missing-evidence.md
guidelines/evaluation/repair/ai-confidence-as-source-strength.md
```

## Related stories

```txt
src/design-system/stories/v0.5.1-critical-generation.stories.tsx
Story title: Design System / v0.5.1 / Critical Generation Coverage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```
