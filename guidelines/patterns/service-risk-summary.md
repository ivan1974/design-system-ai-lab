# ServiceRiskSummary Guidelines

## Purpose

`ServiceRiskSummary` summarizes service risk before the user reviews detailed alerts, recommendations or actions.

It is a business pattern for risk orientation, not an alert list or action plan.

## Business intent

Help the user understand the main service risk, affected scope and decision direction before moving into detail.

## User decision supported

```txt
What service risk needs attention, and what should the user review next?
```

## Input facts required

Use only supplied risk facts:

```txt
riskLevel
riskTitle
affectedScope
customerImpact
serviceImpact
sourceContext
sourceStrength
validationStatus
recommendedReview
mode
```

## Evidence and trust requirements

- Show `sourceContext` when risk interpretation depends on source scope.
- Show `sourceStrength` when risk confidence depends on source basis.
- Show `validationStatus` when review state matters.
- Do not confirm customer impact without evidence or validation context.

## Actionability requirements

This pattern points the user toward review.

Use `PriorityList` for detailed blockers, `RecommendationReviewPanel` for recommended next steps and `ActionRow` or `ActionCard` for owned work.

## Use this component when

- A concise service risk overview is needed before details.
- The user must understand affected scope and impact before acting.
- Risk, source and validation context must stay visible.
- A business pattern is better than rebuilding with `AlertCard` and `KeyValueList`.

## Do not use this component when

- The risk is a single alert; use `AlertCard`.
- Multiple risks need sorting; use `PriorityList`.
- The user needs an action plan; use action components.
- The content is proof maturity; use `ValueProofCard`.

## Prefer this component over

- generic risk cards
- custom risk summaries
- `MetricGrid` for service risk interpretation

## Never generate

- risk level without scope or context
- customer impact claims without evidence context
- actions hidden inside risk summary text
- local service-risk summaries when this pattern fits

## Required props

```txt
riskLevel
riskTitle
affectedScope when scope matters
customerImpact when supplied
serviceImpact when supplied
sourceContext when trust matters
sourceStrength when source basis matters
validationStatus when review state matters
mode when embedding context matters
```

## Controlled values

```txt
riskLevel: critical | warning | info
mode: card | section | compact
sourceStrength: unknown | partial | single-source | multi-source | validated
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

## Mode guidance

```txt
card → standalone service risk overview
section → embedded section inside a review page or detail panel
compact → dense context when surrounding scope is already clear
```

## GenAI generation rules

1. Use this pattern for service risk orientation.
2. Use detailed decision components after the summary.
3. Keep risk, recommendation and action semantics separate.
4. Show source and validation context when risk interpretation is trust-sensitive.
5. Do not rebuild this pattern manually when it fits.

## Common generation failures

Failure: Make uses `AlertCard` for the whole risk overview.
Why it fails: A service risk overview needs scope, impact and validation context.
Fix: Use `ServiceRiskSummary`.

Failure: Make turns the risk summary into an action plan.
Why it fails: Actions require owner, due date and priority.
Fix: Use `ActionRow`, `ActionCard` or `ActionList`.

Failure: Make uses metrics as service risk proof.
Why it fails: Metrics need source, validation and proof context.
Fix: Use `ValueProofCard` for proof and `ServiceRiskSummary` for risk orientation.

## Repair prompt

Use:

```txt
guidelines/repair-prompts/missing-evidence.md
guidelines/repair-prompts/actions-without-ownership.md
guidelines/repair-prompts/generic-dashboard.md
```

## Related lower-level components

```txt
Card
KeyValueList
SemanticTag
SectionBlock
PriorityList
AlertCard
ActionRow
```

## Related stories

```txt
src/design-system/stories/patterns/service-risk-summary.stories.tsx
Story title: component-level ServiceRiskSummary usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
contracts/business-patterns.contract.json
```
