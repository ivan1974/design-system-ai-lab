# Evidence domain model

## Definition

Evidence is information that supports a signal, risk, recommendation, proof point or decision.

Evidence must be visible or auditable when it affects trust.

Evidence is not interpretation, AI confidence or proof by itself.

## Key fields

```txt
evidenceId
summary
source
sourceType
sourceScope
sourceStrength
freshness
affectedScope
validationStatus
relatedObject
```

## Controlled values

### Evidence source type

Canonical values:

```txt
source-system
expert-review
customer-input
ai-generated
unknown
```

Use `ai-generated` only for AI-generated interpretation, synthesis or drafting. Do not use it as a source-system fact.

### Source strength

Canonical values:

```txt
unknown
partial
single-source
multi-source
validated
```

Do not use AI confidence as source strength.

### Validation status

Canonical values:

```txt
not-reviewed
internal-review-needed
internally-validated
customer-ready
blocked
```

## Evidence type examples

Examples of evidence content:

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

These are evidence descriptions, not controlled enum values.

## Relationships

```txt
Evidence supports Recommendations.
Evidence supports Proof.
Evidence may support Risk or Alert.
Evidence comes from Source.
Evidence may relate to Customer, Site, Asset or Component.
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

## GenAI generation rules

```txt
Show source scope when evidence is partial.
Show freshness when timing matters.
Show validation status when evidence is not customer-ready.
Use source-system facts before AI interpretation.
Do not use confidence language as a substitute for evidence.
Do not invent citations, telemetry or benchmark data.
```

## Make mistakes to avoid

```txt
inventing citations
inventing telemetry
inventing benchmark data
hiding partial source scope
presenting weak evidence as definitive
using ai-generated interpretation as source-system fact
```

## Related contracts

```txt
contracts/evidence-and-trust.contract.json
contracts/props.contract.json
contracts/generation-blockers.contract.json
```
