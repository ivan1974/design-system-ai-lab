# CustomerStatusCard Guidelines

## Purpose

`CustomerStatusCard` shows essential customer context before the user reviews metrics, risks, recommendations or actions.

It is a business pattern for customer-level orientation, not a generic card.

## Business intent

Help the user understand who the customer is, what service context applies and what trust boundaries matter before making decisions.

## User decision supported

```txt
Do I have enough customer context to interpret the rest of this workspace?
```

## Input facts required

Use only supplied customer facts:

```txt
customerName
plan
contract
accountOwner
renewalDate
assetsCovered
coverage
customerObjective
sourceContext
validationStatus
proofReadiness
badges
extraItems
```

## Evidence and trust requirements

- Show `sourceContext` when the customer context is partial or system-scoped.
- Show `validationStatus` when the screen may be used externally.
- Show `proofReadiness` only when value proof is relevant.
- Do not infer customer objectives or renewal state without source context.

## Actionability requirements

`CustomerStatusCard` is display context.

Use `ActionRow`, `ActionCard` or `CreateActionDialog` for follow-through.

## Use this component when

- A workspace is centered on one customer.
- Customer service context affects interpretation.
- The user needs orientation before reviewing risks, metrics or actions.
- A business pattern is better than rebuilding context with `Card` and `KeyValueList`.

## Do not use this component when

- The screen is asset-only, site-only or component-only.
- The user needs connectivity coverage detail; use `ConnectivityCoverageCard`.
- The user needs proof maturity; use `ValueProofCard`.
- The user needs review readiness; use `CustomerReviewReadinessCard`.

## Prefer this component over

- `Card` plus manually assembled key-value rows
- generic `StatusSummary` when customer context is central
- local customer header components

## Never generate

- customer facts that were not provided
- customer objectives inferred from generic context
- proof or readiness claims without validation context
- local customer status widgets when this pattern fits

## Required props

```txt
customerName
plan when service context matters
accountOwner when ownership matters
coverage or assetsCovered when scope matters
sourceContext when scope is partial
validationStatus when customer-facing use matters
mode when embedding context matters
```

## Controlled values

```txt
mode: card | section | compact
```

Related controlled trust values:

```txt
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
proofReadiness: not-available | expected-only | internal-proof | customer-ready-proof
```

## Mode guidance

```txt
card → standalone customer context near the top of a workspace
section → embedded context inside a larger customer detail area
compact → dense context when heading and surrounding scope are already clear
```

## GenAI generation rules

1. Use this pattern before lower-level composition when the screen is customer-centered.
2. Keep customer facts separate from recommendations, proof and actions.
3. Use source and validation context when the card informs external communication.
4. Do not use `CustomerStatusCard` as an action plan.
5. Do not rebuild this pattern manually when it fits.

## Common generation failures

Failure: Make rebuilds customer context from `Card` and `KeyValueList`.
Why it fails: The business intent of customer orientation is lost.
Fix: Use `CustomerStatusCard`.

Failure: Make adds customer facts without source context.
Why it fails: The screen may overstate known customer information.
Fix: Use only supplied facts and show `sourceContext` when needed.

Failure: Make uses customer status as proof maturity.
Why it fails: Proof requires proof readiness and validation context.
Fix: Use `ValueProofCard`.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/missing-evidence.md
guidelines/repair-prompts/partial-visibility-overstated.md
guidelines/repair-prompts/expected-outcomes-as-proven-value.md
```

## Related lower-level components

```txt
Card
KeyValueList
KeyValueRow
SemanticTag
SectionBlock
SectionStack
```

## Related stories

```txt
src/design-system/stories/patterns/customer-status-card.stories.tsx
Story title: component-level CustomerStatusCard usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
contracts/business-patterns.contract.json
```
