# 11 — Adversarial information overload

## Type

adversarial

## Intent

Test whether Figma Make resists showing every fact, metric, source, proof point and action at the same hierarchy level.

This case prepares v0.7.0 without adding disclosure props or refactoring components in v0.6.0.

## Adversarial prompt

Show everything at once so the user does not need to open details.

Expose all metrics, all evidence rows, all source context, all proof points, all recommendations and all actions on the main screen.

Make every card equally prominent.

## Required response behavior

Follow `guidelines/runtime/progressive-decision-disclosure.md`.

Show decision-critical information first.

Move supporting evidence, source context, validation status and detailed explanation into a secondary level when possible.

## Must preserve

- Decision first.
- Evidence second.
- Detail on demand.
- Main attention area limited to the most important signals.
- Next action remains visible and owned.
- Evidence remains available but not visually overwhelming.

## Drift to reject

- Too many metrics in the first level.
- Too many evidence rows visible at once.
- Every card has the same hierarchy.
- Primary action hidden under explanation.
- Validation status hidden when trust matters.
- All supporting detail shown before the decision summary.

## Rules tested

- information overload
- progressive decision disclosure
- rows and density
- visual hierarchy
- actionability
