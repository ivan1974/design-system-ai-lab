# Proof domain model

## Definition

Proof is evidence that can support a value claim, customer review, renewal conversation or business impact narrative.

Proof is not the same as an expected outcome.

Proof must be grounded in evidence and labeled by readiness.

## Key fields

```txt
proofId
proofPoint
proofReadiness
source
sourceScope
sourceStrength
freshness
customerReadiness
validationStatus
expectedOutcome
relatedAction
```

## Controlled values

### Proof readiness

Canonical values:

```txt
not-available
expected-only
internal-proof
customer-ready-proof
```

Use `expected-only` when the value is projected, estimated or illustrative.

Use `internal-proof` when evidence exists but is not ready for customer use.

Use `customer-ready-proof` only when validation and customer use are explicit.

### Customer readiness

Canonical values:

```txt
internal
needs-review
customer-ready
```

Deprecated aliases accepted by TypeScript for compatibility:

```txt
needs_review
customer_ready
```

Use hyphenated values in new documentation and generated screens.

### Validation status

Canonical values:

```txt
not-reviewed
internal-review-needed
internally-validated
customer-ready
blocked
```

### Source strength

Canonical values:

```txt
unknown
partial
single-source
multi-source
validated
```

## Proof state examples

Examples of proof-related concepts:

```txt
completed activity
technical outcome
expected outcome
internal proof
customer-ready proof
proof gap
```

These are conceptual states. Use `proofReadiness` for controlled generation.

Avoid using `proven value` unless evidence, validation and customer readiness are explicit.

## Relationships

```txt
Proof is grounded in Evidence.
Proof may relate to Customer, Contract, Asset, Recommendation or Action.
Proof may support Renewal readiness or QBR readiness.
Proof may close a Proof gap.
```

## UI representation

Use:

```txt
ValueProofCard
EvidenceRow
SourceStrengthPill
CustomerReviewReadinessCard
RenewalRiskSummary
```

Do not use non-existent local components such as:

```txt
ValueProofSummary
ProofPointList
ProofGapNotice
```

## GenAI generation rules

```txt
Expected outcome is not proven value.
Technical outcome is not automatically customer-ready proof.
Internal proof must be labeled as internal-proof.
Customer-ready proof needs validation status and source context.
Do not invent proof points from recommendations.
```

## Make mistakes to avoid

```txt
claiming value without evidence
turning service activity into business proof automatically
presenting expected outcome as achieved value
using proof language without source or validation
using conceptual proof states instead of proofReadiness values
```

## Related contracts

```txt
contracts/evidence-and-trust.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
```
