# Source domain model

## Definition

A source is the origin of a fact, signal, evidence item, proof point or status.

Source information determines what the user can trust.

Source strength is not AI confidence.

## Key fields

```txt
sourceName
sourceType
sourceScope
sourceStrength
freshness
lastUpdated
validationStatus
limitations
```

## Source types

Canonical evidence source type values:

```txt
source-system
expert-review
customer-input
ai-generated
unknown
```

Examples of real source names:

```txt
CRM
contract system
installed base system
monitoring platform
service report
case management system
manual input
expert review
benchmark cohort
document repository
```

Use real source names only when provided by the prompt, data or scenario.

## Source scope examples

```txt
connected assets only
one site only
customer account level
last service visit only
internal data only
customer-validated proof
benchmark cohort
```

## Source strength values

Canonical values:

```txt
unknown
partial
single-source
multi-source
validated
```

Deprecated aliases accepted only for compatibility in source types:

```txt
strong
needs_review
internal
customer_ready
```

Do not use deprecated aliases in new documentation or generated screens.

Do not use these as `sourceStrength` values:

```txt
needs review
internal only
customer-ready
outdated
high confidence
AI confident
```

Represent those ideas with the correct field:

```txt
needs review → validationStatus or customerReadiness
internal only → proofReadiness or customerReadiness
customer-ready → validationStatus, customerReadiness or proofReadiness
outdated → freshness or lastUpdated
AI confidence → not sourceStrength
```

## Validation status values

Canonical values:

```txt
not-reviewed
internal-review-needed
internally-validated
customer-ready
blocked
```

## UI representation

Use:

```txt
SourceStrengthPill
EvidenceRow
KeyValueList
MetricCard helper text
RecommendationReviewPanel
ValueProofCard
```

## GenAI generation rules

```txt
Show source scope when visibility is incomplete.
Show source strength when evidence affects a recommendation or proof claim.
Show freshness when data may be operationally stale.
Do not hide weak source quality behind confident wording.
Do not infer source strength from AI confidence.
```

## Make mistakes to avoid

```txt
inventing sources
using source names as decorative labels
using confidence as source strength
using deprecated aliases in new output
omitting scope when only connected assets are represented
claiming customer-ready proof from internal-only source
```

## Related contracts

```txt
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
```
