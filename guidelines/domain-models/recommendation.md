# Recommendation domain model

## Definition

A recommendation is an evidence-aware proposal for what should be considered or
done next.

It may be AI-assisted, but it must be grounded in visible facts or auditable
source context.

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
proofStatus
action
```

## Relationships

```txt
Recommendation is grounded in Evidence.
Recommendation may relate to Customer, Site, Asset or Component.
Recommendation may create Actions.
Recommendation may have expected outcomes.
Recommendation is not proven value by itself.
```

## Readiness states

```txt
internal review needed
expert validation needed
customer-ready
blocked by missing evidence
```

## UI representation

Use:

```txt
RecommendationCard
RecommendationReviewPanel
RecommendationSet
RecommendationRow
EvidenceRow
ActionCard / ActionRow
```

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

## Make mistakes to avoid

```txt
recommendation before evidence
unsupported urgency
AI confidence as proof
expected outcome presented as proven value
customer-ready language without validation status
```
