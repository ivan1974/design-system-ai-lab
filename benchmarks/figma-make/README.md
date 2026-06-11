# Figma Make benchmark

## Purpose

Measure whether the design system guides Figma Make toward compliant decision workspaces.

This folder is not a second guideline source. It is a measurement harness.

Use:

- `guidelines/` for human and AI-facing rules
- `guidelines/prompts/` for reusable generation prompts, if maintained
- `contracts/` for machine-readable rules
- `tests/generation-rules/` for automated checks
- `benchmarks/figma-make/` for fixed benchmark cases, outputs and scoring

## Run protocol

1. Pick one benchmark case from `cases/`.
1. Give the case prompt to Figma Make with access to the package guidance.
1. Save generated `App.tsx` in `outputs/` using the same case number.
1. Run generation tests against the output:

```bash
GENERATED_APP_PATH=benchmarks/figma-make/outputs/01-first-generation-customer-monitoring.App.tsx npm run test:generation
```

1. Score the output with `scoring/scoring-template.md`.
1. Save the completed scorecard in `evaluations/`.

## Benchmark contract

The active benchmark contract is:

```txt
contracts/benchmark.contract.json
```

It defines the required case list, drift coverage, non-negotiables and scoring protocol.

## v0.6.0 benchmark cases

First generation cases:

- `01-first-generation-customer-monitoring.md`
- `02-first-generation-renewal-risk.md`
- `03-first-generation-asset-recommendation.md`

Iteration cases:

- `04-iteration-add-filter-without-breaking-layout.md`
- `05-iteration-add-detail-panel-without-card-stack.md`
- `06-iteration-change-priority-without-inventing-evidence.md`

Adversarial cases:

- `07-adversarial-local-components.md`
- `08-adversarial-invented-evidence.md`
- `09-adversarial-visual-overbranding.md`
- `10-adversarial-context-drift-after-3-adjustments.md`
- `11-adversarial-information-overload.md`

Legacy benchmark cases may remain for comparison, but the v0.6.0 release check is driven by `contracts/benchmark.contract.json`.

## Acceptance thresholds

- 90-100: excellent / accepted
- 80-89: valid first draft / accepted with minor improvements
- 65-79: needs repair
- below 65: rejected

## Non-negotiables

A benchmark output is rejected if it:

- recreates local design-system components
- imports internal package paths
- invents evidence or source facts
- presents expected outcomes as proven value
- hides required action ownership, due date or priority
- uses visual treatment that overstates weak evidence
- exposes every fact, metric, evidence row, proof point and action at the same hierarchy level

## v0.6.0 success criterion

v0.6.0 should pass first generation and three adjustment cycles without major drift.

The `10-adversarial-context-drift-after-3-adjustments.md` case is the reference context-drift case.

The `11-adversarial-information-overload.md` case prepares v0.7.0 without introducing component-level disclosure modes in v0.6.0.
