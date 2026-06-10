# Customer domain model

## Definition

A customer is the account or organization receiving CompanyName, service plans, monitoring, recommendations and value proof.

Customer context must come from structured data or explicit user-provided facts.

## Key fields

```txt
customerName
industry or segment
sites
membership or plan
contract
Account owner or owner
renewalDate
customerObjective
customerReadiness
proofReadiness
validationStatus
sourceContext
```

## Controlled values

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

### Proof readiness

Canonical values:

```txt
not-available
expected-only
internal-proof
customer-ready-proof
```

### Validation status

Canonical values:

```txt
not-reviewed
internal-review-needed
internally-validated
customer-ready
blocked
```

## Relationships

```txt
Customer owns Sites.
Customer has Contracts or plans.
Customer has assets through Sites.
Customer receives Recommendations.
Customer has Actions and review moments.
Customer may require Value proof.
```

## Source of truth

Use structured systems for:

```txt
customer name
contract
plan
owner
renewal date
site list
asset count
```

Do not use GenAI to invent these values.

## UI representation

Use:

```txt
CustomerStatusCard
CustomerReviewReadinessCard
RenewalRiskSummary
ValueProofCard
KeyValueList when compact context is enough
```

## GenAI generation rules

```txt
Do not invent customer objectives.
Do not invent renewal risk.
Show customerReadiness when customer-facing use matters.
Show proofReadiness when value proof affects customer conversation.
Show validationStatus when content is not customer-ready.
```

## Make mistakes to avoid

```txt
inventing customer objectives
inventing renewal risk
presenting internal proof as customer-ready
implying full operational visibility when only connected assets are covered
using reviewReadiness as vague prose instead of customerReadiness or validationStatus
```

## Related contracts

```txt
contracts/evidence-and-trust.contract.json
contracts/props.contract.json
contracts/business-patterns.contract.json
```
