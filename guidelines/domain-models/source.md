# Source domain model

## Definition

A source is the origin of a fact, signal, evidence item, proof point or status.

Source information determines what the user can trust.

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

## Source strength examples

```txt
strong
partial
needs review
internal only
customer-ready
outdated
unknown
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

## Rules

```txt
Show source scope when visibility is incomplete.
Show source strength when evidence affects a recommendation or proof claim.
Show freshness when data may be operationally stale.
Do not hide weak source quality behind confident wording.
```

## Make mistakes to avoid

```txt
inventing sources
using source names as decorative labels
using confidence as source strength
omitting scope when only connected assets are represented
claiming customer-ready proof from internal-only source
```
