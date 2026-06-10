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
GENERATED_APP_PATH=benchmarks/figma-make/outputs/01-customer-monitoring.App.tsx npm run test:generation
```

1. Score the output with `scoring/scoring-template.md`.
1. Save the completed scorecard in `evaluations/`.

## Benchmark cases

Normal cases:

- `01-customer-monitoring.md`
- `02-renewal-risk-review.md`
- `03-asset-recommendation-review.md`
- `04-qbr-readiness.md`
- `05-installed-base-explorer.md`

Adversarial cases:

- `06-adversarial-card-stack.md`
- `07-adversarial-invented-evidence.md`
- `08-adversarial-local-components.md`

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
