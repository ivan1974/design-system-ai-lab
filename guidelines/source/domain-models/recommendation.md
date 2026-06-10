# Recommendation domain model

## Definition

A recommendation is an evidence-aware proposal for what should be considered or done next.

It may be AI-assisted, but it must be grounded in visible facts or auditable source context.

A recommendation is not proven value and is not an owned action by itself.

## Key fields

```txt
recommendationId
title
recommendation
rationale
priority
scope
readiness
evidenceSummary
source
sourceScope
sourceStrength
freshness
validationStatus
expectedOutcome
proofReadiness
action
```

## Controlled values

### Priority

Canonical values:

```txt
low
medium
high
critical
```

### Readiness

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

### Proof readiness

Canonical values:

```txt
not-available
expected-only
internal-proof
customer-ready-proof
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

## Relationships

```txt
Recommendation is grounded in Evidence.
Recommendation may relate to Customer, Site, Asset or Component.
Recommendation may create Actions.
Recommendation may have expected outcomes.
Recommendation is not proven value by itself.
```

## UI representation

Use:

```txt
RecommendationCard
RecommendationReviewPanel
EvidenceRow
ActionCard
ActionRow
```

Do not use non-existent or local components such as:

```txt
RecommendationSet
RecommendationRow
```

Use `RecommendationQueueRow` only when displaying recommendations as queue items.

## AI usage rules

GenAI may help with:

```txt
synthesis
prioritization
explanation
customer-ready wording from grounded facts
```

GenAI must not invent:

```txt
facts
sources
telemetry
priority
owner
due date
expected value
proof
```

## GenAI generation rules

```txt
Show evidence before or inside the recommendation.
Use readiness="needs-review" when human validation is required.
Use validationStatus="internal-review-needed" when the recommendation is not customer-ready.
Use proofReadiness="expected-only" when value is only expected.
Use proofReadiness="internal-proof" when proof is internal only.
Never present expectedOutcome as proven value.
```

## Make mistakes to avoid

```txt
recommendation before evidence
unsupported urgency
AI confidence as proof
expected outcome presented as proven value
customer-ready language without validation status
readiness in prose instead of controlled values
```

## Related contracts

```txt
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
contracts/generation-blockers.contract.json
```
