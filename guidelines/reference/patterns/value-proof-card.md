# ValueProofCard Guidelines

Status: allowed

## Purpose

`ValueProofCard` shows value evidence, proof readiness and validation state.

Use it to prevent expected outcomes from being presented as proven value.

## Use this component when

- A value claim needs proof context.
- Proof readiness affects customer communication.
- A proof gap must be closed before renewal, QBR or customer review.

## Do not use this component when

- The content is only a generic metric.
- There is no evidence or proof readiness.
- The value is only decorative marketing copy.

## Prefer this component over

- Generic cards for proof claims.
- Metric cards for proof readiness.
- Local proof summary components.

## Never generate

- Expected outcome as proven value.
- Internal proof as customer-ready proof.
- Proof without source or validation context.

## Required props

Show proof point, proof readiness, source context and validation status when relevant.

## Controlled values

Follow `contracts/props.contract.json#ValueProofCard`.

The `mode` values are `card`, `section` and `compact`.

The `proofReadiness` values are `not-available`, `expected-only`, `internal-proof` and `customer-ready-proof`.

The `validationStatus` values are `not-reviewed`, `internal-review-needed`, `internally-validated`, `customer-ready` and `blocked`.

Do not invent controlled values.

## GenAI generation rules

- Label expected value as expected-only.
- Keep internal proof distinct from customer-ready proof.
- Show source scope when proof is partial.
- Add action when a proof gap must be closed.

## Common generation failures

- Claiming value without evidence.
- Turning completed activity into business proof automatically.
- Hiding validation status.
- Styling weak proof as validated.

## Repair prompt

Use `guidelines/evaluation/repair/expected-outcomes-as-proven-value.md` when value is overstated.

## Related stories

Story coverage is tracked in the story coverage contract.

## Related contracts

```txt
contracts/component-registry.contract.json#ValueProofCard
contracts/props.contract.json#ValueProofCard
contracts/domain-model.contract.json#Proof
contracts/evidence-and-trust.contract.json
```
