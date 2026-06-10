# ValueProofCard Guidelines

## Purpose

`ValueProofCard` shows value evidence, proof readiness and validation state.

It prevents Make from presenting expected outcomes as proven customer value.

## Use this component when

- The screen must explain delivered value, proof status or proof gaps.
- A QBR, renewal or customer review needs value context.
- Proof readiness or validation status affects customer-facing use.
- Expected outcomes must be separated from proven value.

## Do not use this component when

- The content is only a metric grid.
- The content is a recommendation rationale.
- The content is an action list.
- No proof points are available.

## Prefer this component over

- generic `Card` for value proof
- metric-only summaries
- local proof widgets

## Never generate

- customer-ready proof without validation
- expected outcomes as proven value
- AI-generated proof claims
- proof points without source or proof readiness when trust matters

## Required props

```txt
proofPoints
proofReadiness when proof maturity matters
validationStatus when review state matters
sourceContext when proof basis matters
expectedOutcome only when clearly labeled as expected
period when time scope matters
customerObjective when value depends on business goal
mode when layout matters
```

## Controlled values

```txt
mode: card | section | compact
proofReadiness: not-available | expected-only | internal-proof | customer-ready-proof
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

## GenAI generation rules

1. Use `ValueProofCard` after facts, completed actions or service outcomes.
2. Label expected outcomes as expected, not proven.
3. Use `proofReadiness="internal-proof"` for internal evidence not ready for customers.
4. Use `customer-ready-proof` only when customer-ready proof is explicit.
5. Do not use this component as a recommendation or action plan.

## Common generation failures

Failure: Make claims value was delivered based on an expected outcome.
Why it fails: Expected outcome is not proof.
Fix: Show it as `expectedOutcome` and keep proof readiness visible.

Failure: Make lists proof points without validation status.
Why it fails: The user cannot judge customer readiness.
Fix: Add `proofReadiness` and `validationStatus`.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
guidelines/evaluation/repair/missing-human-validation.md
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
