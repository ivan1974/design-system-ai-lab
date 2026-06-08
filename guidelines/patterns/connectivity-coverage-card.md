# ConnectivityCoverageCard Guidelines

## Purpose

Use `ConnectivityCoverageCard` to show monitoring coverage, disconnected assets
and connectivity recovery context.

A connectivity coverage card should help the user understand whether the service
team can reliably monitor the customer scope.

A connectivity coverage card is not a generic card.

A connectivity coverage card is not a metric grid.

A connectivity coverage card is not an alert list.

In generated screens, use `ConnectivityCoverageCard` when connectivity,
monitoring coverage or disconnected assets affect the customer situation,
service proof or renewal risk.

`ConnectivityCoverageCard` should make visibility limits explicit. It should
not imply complete installed base visibility unless the source actually supports
it.

This pattern can show short source, coverage basis, recovery and validation
context, but it should not carry full recommendation rationale or assigned
recovery actions.

---

## Import

Import `ConnectivityCoverageCard` from the package root:

```tsx
import { ConnectivityCoverageCard } from "design-system-ai-lab";
```

If other screen components are needed, import them from the same package root:

```tsx
import {
  ActionList,
  ConnectivityCoverageCard,
  CustomerStatusCard,
  MetricGrid,
  PriorityList,
} from "design-system-ai-lab";
```

Do not import `ConnectivityCoverageCard` from internal package paths.

Do not recreate `ConnectivityCoverageCard` locally.

Do not create custom connectivity coverage wrappers.

Do not manually rebuild connectivity context with raw `Card`, `StatusSummary`,
`MetricCard`, `dl`, `dt`, `dd` or `div` markup when `ConnectivityCoverageCard`
fits the need.

---

## Component role

Use `ConnectivityCoverageCard` when the user needs to understand connectivity
coverage context such as:

- customer name
- coverage rate
- connected assets
- disconnected assets
- critical disconnected assets
- monitoring status
- affected scope
- last update
- short connectivity status badges
- additional connectivity metadata
- source scope
- source strength
- coverage basis
- validation status
- recovery status
- customer-side dependency
- service-side dependency

It should establish whether monitoring coverage is complete, partial or at risk
before the screen moves into alerts and recovery actions.

It should also clarify what the coverage number is based on, especially when the
card mixes live telemetry, connected assets, known installed base, manual
inventory or service records.

---

## Props

Use the component with these props:

```tsx
<ConnectivityCoverageCard
  customerName="Greenfield Industries"
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  criticalDisconnectedAssets="2 critical assets"
  monitoringStatus="Partial monitoring coverage"
  affectedScope="Site A and Site C"
  lastUpdate="18 hours ago"
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  coverageBasis="Connected assets and known installed base"
  validationStatus="Review before customer use"
  recoveryStatus="Recovery needed"
  badges={[
    { label: "Connectivity partial", tone: "warning" },
    { label: "Critical assets disconnected", tone: "danger" },
  ]}
/>
```

Expected props:

```txt
customerName
connectedAssets
disconnectedAssets
criticalDisconnectedAssets
coverageRate
lastUpdate
monitoringStatus
affectedScope
sourceScope
sourceStrength
coverageBasis
validationStatus
recoveryStatus
customerDependency
serviceDependency
badges
extraItems
title
description
className
```

Use `customerName` when the card is part of a customer-centered screen.

Use `coverageRate` for the headline coverage percentage.

Use `connectedAssets` to show the monitored scope.

Use `disconnectedAssets` to show the coverage gap.

Use `criticalDisconnectedAssets` when disconnected assets affect critical
operations.

Use `monitoringStatus` to describe the overall monitoring state.

Use `affectedScope` to identify the sites, assets or systems impacted.

Use `sourceScope` to clarify what population the coverage applies to, such as
Schneider monitored assets, connected assets or known installed base.

Use `sourceStrength` to clarify whether the coverage view is complete, partial,
manual, inferred or needs review.

Use `coverageBasis` to describe what the coverage number is based on.

Use `validationStatus` when the coverage context needs review before customer
use.

Use `recoveryStatus` to summarize whether recovery is needed, in progress,
blocked or restored.

Use `customerDependency` for customer-side prerequisites such as firewall,
network or access validation.

Use `serviceDependency` for Schneider-side follow-up such as remote support,
field service or platform review.

Use `lastUpdate` to clarify freshness.

Use `badges` for short connectivity status labels.

Use `extraItems` for additional label/value context that is not covered by the
standard props.

Use `title` and `description` only when the default section framing needs to be
customized.

Use `className` only for layout adjustments, not to redefine the pattern styling.

---

## Recommended information

A strong `ConnectivityCoverageCard` should usually include:

- coverage rate
- connected assets
- disconnected assets
- critical disconnected assets when relevant
- monitoring status
- last update
- source scope when coverage does not represent the full installed base
- source strength when the coverage view is partial or mixed
- recovery status when disconnected assets require follow-up
- validation status when the view must be reviewed before customer use

Good minimum example:

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  monitoringStatus="Partial monitoring coverage"
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
/>
```

Avoid generating a connectivity coverage card with only a generic status and no
coverage detail.

---

## Source and visibility rules

Connectivity coverage should not create false confidence.

Make source scope and visibility limits explicit when coverage does not reflect
the full installed base or when the view combines multiple sources.

Good source context:

```txt
Source scope: Schneider monitored assets only
Source strength: Partial
Coverage basis: Connected assets and known installed base
Validation status: Review before customer use
```

Avoid source context such as:

```txt
Source: AI confirmed
Coverage: Full visibility
Validation: Automatically approved
```

Do not present non-connected assets as live-monitored.

Do not imply complete installed base visibility when the evidence only covers
connected assets, Schneider monitored assets, manual inventory or service
records.

Do not use confidence language as a substitute for source scope, source
strength, coverage basis or validation status.

---

## Recovery context rules

Use recovery context when connectivity gaps require coordination before the next
customer, service or renewal decision.

Recovery context may include:

```txt
recovery status
customer-side dependency
service-side dependency
recovery owner
next checkpoint
network dependency
last successful connection
```

Good recovery context:

```txt
Recovery status: Recovery needed
Customer-side dependency: Validate firewall access
Service-side dependency: Remote support review needed
Next checkpoint: Tomorrow 10:00
```

Use `AlertCard` or `PriorityList` when the recovery issue is a risk or blocker.

Use `ActionCard` or `ActionList` when recovery work needs an owner, due date and
priority.

---

## Badge rules

Use badges for short connectivity status labels.

Good badges:

```txt
Connected
Connectivity partial
Disconnected assets
Critical assets disconnected
Coverage at risk
Recovery needed
Monitoring restored
Source partial
Review needed
Customer dependency
Service dependency
Recovery in progress
```

Use tones consistently:

```txt
success
warning
danger
neutral
primary
```

Examples:

```tsx
badges={[
  { label: "Connectivity partial", tone: "warning" },
  { label: "Critical assets disconnected", tone: "danger" },
]}
```

Do not use badges as buttons.

Do not write long sentence badges.

Do not duplicate the same information in too many badges and items.

Do not use badges such as `AI confirmed`, `Full visibility` or `Validated` unless
the underlying source and validation actually support that claim.

---

## Extra item rules

Use `extraItems` for connectivity context that does not have a dedicated prop.

Good extra items:

```txt
Recovery owner
Network dependency
Last successful connection
Connectivity source
Customer-side action
Service-side action
Monitoring platform
Source scope
Source strength
Coverage basis
Validation status
Recovery status
Service dependency
```

Keep extra item values concise.

Prefer dedicated props for common source and recovery context. Use `extraItems`
for additional context that is specific to the generated screen.

If the value needs a long explanation, use `AlertCard`, `ActionCard`, `Card` or
supporting text instead.

---

## When to use ConnectivityCoverageCard

Use `ConnectivityCoverageCard` for:

- customer monitoring screens
- connectivity review screens
- monitoring coverage reviews
- service risk screens where disconnected assets matter
- renewal risk screens where coverage affects service proof
- QBR preparation screens when monitoring coverage is part of the discussion
- recovery planning screens
- value proof screens where monitoring credibility matters
- screens where coverage source or visibility limits affect trust
- screens where non-connected or partially connected assets affect the next decision
- screens where connectivity recovery status affects customer communication

---

## When not to use ConnectivityCoverageCard

Do not use `ConnectivityCoverageCard` for:

- generic customer context when `CustomerStatusCard` is more appropriate
- renewal risk context when `RenewalRiskSummary` is more appropriate
- value proof content when `ValueProofCard` is more appropriate
- metrics that need standalone emphasis
- alerts or blockers
- recovery actions
- forms
- generic notes
- long explanations
- connectivity content that is not relevant to the screen decision
- recommendation rationale for why recovery should be prioritized
- assigned recovery work with owner, due date and priority
- risk prioritization without coverage context
- generic source metadata where `StatusSummary` is enough
- claims of AI validation or automatic approval

Use other components instead:

| Need | Use |
| --- | --- |
| Customer context | `CustomerStatusCard` |
| Renewal risk context | `RenewalRiskSummary` |
| Value proof | `ValueProofCard` |
| Generic structured context | `StatusSummary` |
| Generic source or validation metadata | `StatusSummary` |
| Single metric | `MetricCard` |
| Group metrics | `MetricGrid` |
| Connectivity blocker or risk | `AlertCard` |
| Connectivity recovery recommendation rationale | `RecommendationCard` |
| Group blockers or risks | `PriorityList` |
| Recovery action | `ActionCard` |
| Group recovery actions | `ActionList` |
| Create an action | `CreateActionDialog` |
| Generic grouped explanation | `Card` |
| Editable form field | `Field` |

---

## Placement rules

Place `ConnectivityCoverageCard` after the customer or renewal context and
before connectivity-specific alerts or recovery actions.

Recommended customer monitoring structure:

```txt
PageHeader
→ CustomerStatusCard
→ MetricGrid with MetricCard items
→ ConnectivityCoverageCard
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended renewal risk structure when coverage affects renewal confidence:

```txt
PageHeader
→ RenewalRiskSummary
→ ValueProofCard
→ ConnectivityCoverageCard
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended asset intelligence structure:

```txt
PageHeader
→ customer, site or installed base context
→ ConnectivityCoverageCard for coverage and visibility limits
→ MetricGrid with key asset metrics
→ PriorityList with connectivity or asset blockers
→ RecommendationCard when recovery rationale needs explanation
→ ActionList with recovery actions
```

Do not place connectivity recovery actions before the user understands the
coverage gap.

Do not bury connectivity coverage when it is central to the screen decision.

---

## Relationship with CustomerStatusCard

Use `CustomerStatusCard` for overall customer context.

Use `ConnectivityCoverageCard` for monitoring coverage detail.

Good flow:

```txt
CustomerStatusCard
→ ConnectivityCoverageCard
→ PriorityList with connectivity blockers
→ ActionList with recovery actions
```

Avoid duplicating all customer details inside `ConnectivityCoverageCard` when
`CustomerStatusCard` already provides them.

Use `customerName` in `ConnectivityCoverageCard` only when it improves clarity or
when the card appears without a preceding `CustomerStatusCard`.

---

## Relationship with MetricGrid

Use `MetricGrid` for a few headline decision metrics.

Use `ConnectivityCoverageCard` for detailed connectivity coverage context.

Example:

```txt
MetricGrid: Connected equipment = 68%, Open critical alerts = 2
ConnectivityCoverageCard: connected assets, disconnected assets, critical disconnected assets, last update
```

Do not replace `ConnectivityCoverageCard` with a set of disconnected
`MetricCard` items when the user needs coverage context.

`MetricGrid` can show headline coverage metrics, but `ConnectivityCoverageCard`
should show the coverage basis, source scope, source strength, affected scope
and freshness when those details affect interpretation.

---

## Relationship with PriorityList and ActionList

Use `ConnectivityCoverageCard` before connectivity blockers and recovery actions.

Use `PriorityList` for connectivity risks or blockers.

Use `ActionList` for recovery or customer follow-up actions.

Recommended flow:

```txt
ConnectivityCoverageCard
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Do not place `AlertCard` or `ActionCard` items inside
`ConnectivityCoverageCard`.

If the coverage gap requires a rationale for recovery prioritization, use
`RecommendationCard` after `ConnectivityCoverageCard`.

---

## Relationship with RecommendationCard

Use `ConnectivityCoverageCard` to show coverage state and visibility limits.

Use `RecommendationCard` to explain why a connectivity recovery recommendation
should be made and what validation or priority applies.

Example:

```txt
ConnectivityCoverageCard: 68% coverage, 8 disconnected assets, source strength partial
RecommendationCard: Recover connectivity before the customer review
```

Do not put full recovery rationale, expected outcomes or recommendation
priority inside `ConnectivityCoverageCard`.

---

## Relationship with RenewalRiskSummary and ValueProofCard

Connectivity coverage can affect renewal confidence and value proof credibility.

Use `RenewalRiskSummary` for renewal context.

Use `ValueProofCard` for service outcome proof.

Use `ConnectivityCoverageCard` when monitoring gaps weaken the service story or
require recovery before a customer discussion.

Example:

```txt
RenewalRiskSummary
→ ValueProofCard
→ ConnectivityCoverageCard
→ PriorityList
→ ActionList
```

Avoid repeating the same coverage numbers in every pattern.

---

## Good example

```tsx
<ConnectivityCoverageCard
  customerName="Greenfield Industries"
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  criticalDisconnectedAssets="2 critical assets"
  monitoringStatus="Partial monitoring coverage"
  affectedScope="Site A and Site C"
  lastUpdate="18 hours ago"
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  coverageBasis="Connected assets and known installed base"
  validationStatus="Review before customer use"
  recoveryStatus="Recovery needed"
  badges={[
    { label: "Connectivity partial", tone: "warning" },
    { label: "Critical assets disconnected", tone: "danger" },
  ]}
/>
```

This is good because:

- coverage rate is visible
- connected and disconnected assets are clear
- critical disconnected assets are identified
- affected scope is understandable
- freshness is visible
- source scope and source strength are visible
- recovery and validation context are visible
- badges summarize the monitoring state

---

## Recovery planning example

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  criticalDisconnectedAssets="2 critical assets"
  monitoringStatus="Recovery needed"
  affectedScope="Main site and backup power system"
  lastUpdate="18 hours ago"
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  coverageBasis="Connected assets and known installed base"
  validationStatus="Review before customer use"
  recoveryStatus="Recovery in progress"
  customerDependency="Validate firewall access"
  serviceDependency="Remote support review needed"
  badges={[
    { label: "Coverage at risk", tone: "warning" },
    { label: "Recovery needed", tone: "danger" },
  ]}
  extraItems={[
    { label: "Recovery owner", value: "Support Team" },
    { label: "Customer-side action", value: "Validate firewall access" },
  ]}
/>
```

---

## Partial source coverage example

```tsx
<ConnectivityCoverageCard
  customerName="Greenfield Industries"
  coverageRate="68%"
  connectedAssets="17 of 25 known assets"
  disconnectedAssets="8 known assets"
  criticalDisconnectedAssets="2 critical assets"
  monitoringStatus="Partial monitoring coverage"
  affectedScope="Critical Power > UPS Room A"
  lastUpdate="18 hours ago"
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  coverageBasis="Connected assets and known installed base"
  validationStatus="Review before customer use"
  recoveryStatus="Recovery needed"
  badges={[
    { label: "Connectivity partial", tone: "warning" },
    { label: "Source partial", tone: "warning" },
    { label: "Recovery needed", tone: "danger" },
  ]}
/>
```

This is good because:

- the scope of the coverage is explicit
- coverage does not imply full installed base visibility
- source strength is visible
- validation status is visible before customer use

---

## Bad examples

Do not manually recreate the connectivity coverage section:

```tsx
<Card title="Connectivity coverage">
  <dl>
    <div>
      <dt>Coverage rate</dt>
      <dd>68%</dd>
    </div>
  </dl>
</Card>
```

Use `ConnectivityCoverageCard` instead:

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  monitoringStatus="Partial monitoring coverage"
/>
```

Do not use the pattern with no useful coverage detail:

```tsx
<ConnectivityCoverageCard monitoringStatus="Partial" />
```

Add the coverage information needed for decision-making.

Do not present partial source coverage as full visibility:

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  monitoringStatus="Full visibility"
  badges={[{ label: "Validated", tone: "success" }]}
/>
```

Add source scope, source strength and validation context when visibility is
partial or needs review.

Do not place alerts inside the connectivity coverage card:

```tsx
<ConnectivityCoverageCard coverageRate="68%">
  <AlertCard ... />
</ConnectivityCoverageCard>
```

Use `PriorityList` after the card instead.

---

## Content quality rules

A connectivity coverage card should answer:

1. What percentage or part of the scope is monitored?
2. How many assets are connected or disconnected?
3. Are critical assets affected?
4. Which scope is impacted?
5. What source or coverage basis supports the view?
6. How strong or complete is the source?
7. How fresh is the information?
8. Does this require recovery, validation or customer communication?

If the card does not answer these questions, add the missing context or use a
more appropriate component.

---

## Anti-patterns

Do not generate:

- manually rebuilt connectivity coverage cards
- generic `Card` or `StatusSummary` replacements when `ConnectivityCoverageCard` fits
- connectivity cards with only a generic status
- connectivity cards that imply full installed base visibility without source support
- connectivity cards that present non-connected assets as live-monitored
- connectivity cards that hide source scope, source strength or coverage basis when they affect trust
- connectivity cards that use AI confidence language instead of source and validation context
- connectivity cards that claim AI validation or automatic approval
- connectivity cards overloaded with unrelated metrics
- connectivity cards containing alerts
- connectivity cards containing actions
- connectivity cards containing form fields
- long values that should be explanatory text
- vague badges such as `Info` or `Status`
- custom connectivity coverage components
- local connectivity coverage implementations
- local connectivity coverage wrappers
- internal imports from package files

---

## Review checklist

After generation, verify:

- `ConnectivityCoverageCard` is imported from `design-system-ai-lab`
- no local connectivity coverage replacement was created
- no local connectivity coverage wrapper was created
- no internal package import is used
- coverage rate or coverage status is provided
- connected and disconnected asset context is provided when relevant
- critical disconnected assets are identified when relevant
- monitoring status is clear
- affected scope is clear when relevant
- last update is provided when freshness matters
- source scope is visible when coverage does not represent the full installed base
- source strength is visible when coverage is partial, manual, inferred or mixed
- coverage basis is visible when interpretation depends on source composition
- validation status is visible when the card needs review before customer use
- recovery status is visible when recovery is needed or in progress
- badges are short and meaningful when used
- extra items are concise when used
- non-connected assets are not presented as live-monitored
- partial coverage is not presented as complete visibility
- the card appears before connectivity blockers or recovery actions
- `PriorityList` is used for connectivity alerts or blockers after the card
- `ActionList` is used for recovery actions after the card
- the card does not contain alerts, actions or form fields
- `StatusSummary` is not used to recreate connectivity coverage
- the card helps the user understand whether monitoring coverage is complete, partial or at risk

---

## Final principle

A `ConnectivityCoverageCard` should make monitoring coverage understandable
before the user reviews risks or recovery actions.

It should also make the limits of visibility clear before the user trusts the
coverage, reviews recommendations or communicates with the customer.
