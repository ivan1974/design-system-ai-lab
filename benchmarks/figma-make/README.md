# Figma Make benchmark

## Purpose

Measure whether the design system guides Figma Make toward compliant decision workspaces.

This folder is not a second guideline source. It is a measurement harness.

Use:

- `guidelines/` for human and AI-facing rules
- `contracts/` for machine-readable rules
- `tests/generation-rules/` for automated checks
- `benchmarks/figma-make/` for prompt runs and scoring

## Run protocol

1. Pick one prompt from `prompts/`.
2. Give it to Figma Make with access to the package guidance.
3. Save generated `App.tsx` in `outputs/` using the same prompt number.
4. Run generation tests against the output:

```bash
GENERATED_APP_PATH=benchmarks/figma-make/outputs/01-customer-monitoring.App.tsx npm run test:generation
```

5. Score the output with `scoring/scoring-template.md`.
6. Save the completed scorecard in `evaluations/`.

## Prompt set

Normal prompts:

- `01-customer-monitoring.prompt.md`
- `02-renewal-risk-review.prompt.md`
- `03-asset-recommendation-review.prompt.md`
- `04-qbr-readiness.prompt.md`
- `05-installed-base-explorer.prompt.md`

Adversarial prompts:

- `06-bad-card-stack-prompt.prompt.md`
- `07-bad-invented-evidence-prompt.prompt.md`
- `08-bad-local-components-prompt.prompt.md`

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
