# Proof domain model

## Definition

Proof is evidence that can support a value claim, customer review, renewal
conversation or business impact narrative.

Proof is not the same as an expected outcome.

## Proof states

```txt
completed activity
technical outcome
expected outcome
internal proof
customer-ready proof
proven value
proof gap
```

## Key fields

```txt
proofId
proofPoint
proofStatus
source
sourceScope
sourceStrength
freshness
customerReadiness
validationStatus
expectedOutcome
relatedAction
```

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
ValueProofSummary
ProofPointList
ProofGapNotice
EvidenceRow
SourceStrengthPill
CustomerReviewReadinessCard
```

## Rules

```txt
Expected outcome is not proven value.
Technical outcome is not automatically customer-ready proof.
Internal proof must be labeled as internal.
Customer-ready proof needs validation state and source context.
```

## Make mistakes to avoid

```txt
claiming value without evidence
turning service activity into business proof automatically
presenting expected outcome as achieved value
using proof language without source or validation
```
