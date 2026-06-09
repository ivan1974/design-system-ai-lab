# Evidence domain model

## Definition

Evidence is information that supports a signal, risk, recommendation, proof
point or decision.

Evidence must be visible or auditable when it affects trust.

## Key fields

```txt
evidenceId
summary
source
sourceScope
sourceStrength
freshness
affectedScope
validationStatus
relatedObject
```

## Relationships

```txt
Evidence supports Recommendations.
Evidence supports Proof.
Evidence may support Risk or Alert.
Evidence comes from Source.
Evidence may relate to Customer, Site, Asset or Component.
```

## Evidence types

```txt
telemetry
service visit
case history
contract record
customer feedback
expert validation
document
benchmark cohort
manual input
```

## UI representation

Use:

```txt
EvidenceRow
SignalRow
SourceStrengthPill
KeyValueList
RecommendationReviewPanel
ValueProofCard
```

## Rules

```txt
Show source scope when evidence is partial.
Show freshness when timing matters.
Show validation status when evidence is not customer-ready.
Do not use confidence language as a substitute for evidence.
```

## Make mistakes to avoid

```txt
inventing citations
inventing telemetry
inventing benchmark data
hiding partial source scope
presenting weak evidence as definitive
```
