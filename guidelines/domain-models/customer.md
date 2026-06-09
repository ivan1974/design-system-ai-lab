# Customer domain model

## Definition

A customer is the account or organization receiving EcoCare, service plans,
monitoring, recommendations and value proof.

## Key fields

```txt
customerName
industry or segment
sites
membership or plan
contract
CSM or owner
renewalDate
customerObjective
reviewReadiness
proofReadiness
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
KeyValueList, when compact context is enough
```

## Make mistakes to avoid

```txt
inventing customer objectives
inventing renewal risk
presenting internal proof as customer-ready
implying full operational visibility when only connected assets are covered
```
