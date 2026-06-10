# ConnectivityCoverageCard Guidelines

## Purpose

`ConnectivityCoverageCard` explains monitoring coverage, disconnected assets and visibility limits.

It is a business pattern for understanding whether a service team can reliably observe the current scope.

## Business intent

Help the user decide whether coverage is sufficient before trusting monitoring signals, recommendations or value proof.

## User decision supported

```txt
Can the current scope be monitored well enough to support review, recommendation or customer conversation?
```

## Input facts required

Use only facts supplied by the prompt, scenario or source context:

```txt
connectedAssets
disconnectedAssets
criticalDisconnectedAssets
coverageRate
monitoringStatus
affectedScope
sourceScope
coverageBasis
validationStatus
lastUpdate
recoveryStatus
```

## Evidence and trust requirements

- Show `sourceScope` when visibility is partial.
- Show `coverageBasis` when the coverage calculation needs interpretation.
- Show `validationStatus` when customer-facing use needs review.
- Do not imply complete installed-base visibility unless explicitly supported.

## Actionability requirements

Use this pattern to expose the coverage situation.

Use `ActionRow`, `ActionCard` or `CreateActionDialog` when the user must assign recovery work.

## Use this component when

- Connectivity coverage affects risk, recommendation or proof interpretation.
- Disconnected assets change the trust level of the screen.
- Monitoring coverage must be visible before a review or renewal discussion.
- A business pattern is better than rebuilding coverage with metrics and key-value rows.

## Do not use this component when

- The screen only needs one simple metric; use `MetricCard` or `MetricStrip`.
- The issue is a specific risk or blocker; use `AlertCard` or `ServiceRiskSummary`.
- The user needs owned recovery work; use action components.
- Connectivity is not relevant to the decision.

## Prefer this component over

- `Card` plus custom metrics
- `MetricGrid` for coverage interpretation
- `KeyValueList` rebuilt manually for coverage facts
- local coverage components

## Never generate

- coverage rates without source or scope context
- disconnected asset counts that were not provided
- customer-ready proof based only on coverage metrics
- local coverage dashboards when this pattern fits

## Required props

```txt
coverageRate when available
connectedAssets when available
disconnectedAssets when available
criticalDisconnectedAssets when available
affectedScope or sourceScope when visibility limits matter
validationStatus when customer-facing use matters
mode when embedding context matters
```

## Controlled values

```txt
mode: card | section | compact
```

Use these trust values when present:

```txt
sourceStrength: unknown | partial | single-source | multi-source | validated
validationStatus: not-reviewed | internal-review-needed | internally-validated | customer-ready | blocked
```

## Mode guidance

```txt
card → standalone coverage overview
section → embedded section inside detail or review panel
compact → dense context where the heading is supplied elsewhere
```

## GenAI generation rules

1. Prefer this pattern when connectivity coverage is a business decision factor.
2. Keep coverage facts separate from proof and recommendation.
3. Use source and validation context when coverage affects trust.
4. Use action components for recovery ownership.
5. Do not rebuild this pattern from low-level components when the pattern fits.

## Common generation failures

Failure: Make rebuilds coverage with generic cards and metrics.
Why it fails: The business meaning of coverage and visibility limits is lost.
Fix: Use `ConnectivityCoverageCard`.

Failure: Make presents partial coverage as complete monitoring.
Why it fails: The user may over-trust the screen.
Fix: Add source scope and coverage basis.

Failure: Make turns coverage into proof of value.
Why it fails: Coverage is visibility, not value proof.
Fix: Use `ValueProofCard` for proof.

## Repair prompt

Use:

```txt
guidelines/evaluation/repair/partial-visibility-overstated.md
guidelines/evaluation/repair/expected-outcomes-as-proven-value.md
guidelines/evaluation/repair/generic-dashboard.md
```

## Related lower-level components

```txt
MetricStrip
CompactMetric
KeyValueList
SemanticTag
SectionBlock
Card
```

## Related stories

```txt
src/design-system/stories/patterns/connectivity-coverage-card.stories.tsx
Story title: component-level ConnectivityCoverageCard usage
```

## Related contracts

```txt
contracts/components.contract.json
contracts/props.contract.json
contracts/evidence-and-trust.contract.json
contracts/business-patterns.contract.json
```
