# MetricGrid Guidelines

## Purpose

Use `MetricGrid` to arrange a small set of decision-relevant `MetricCard`
components.

A metric grid should help the user compare key signals quickly.

A metric grid is not a generic dashboard layout.

A metric grid is not a data dump.

A metric grid should support prioritization, interpretation and next action.

In generated screens, `MetricGrid` should be used whenever several metrics are
shown together.

For trust-sensitive screens, `MetricGrid` should help compare metrics without
hiding source scope, source strength, freshness, partial visibility, validation
status or proof maturity. These trust cues should be carried by the `MetricCard`
items or by the surrounding business patterns.

---

## Import

Import `MetricGrid` from the package root:

```tsx
import { MetricGrid } from "design-system-ai-lab";
```

If metric cards are needed, import them from the same package root:

```tsx
import {
  MetricCard,
  MetricGrid,
} from "design-system-ai-lab";
```

Do not import `MetricGrid` from internal package paths.

Do not recreate `MetricGrid` locally.

Do not create custom metric grid wrappers.

Do not manually rebuild metric grids with raw `div` or `section` wrappers when
`MetricGrid` fits the need.

---

## Component role

Use `MetricGrid` when the user needs to scan multiple key metrics together.

It should help the user understand:

- what is healthy
- what is risky
- what changed
- what needs attention
- what should be prioritized
- what source or scope limits affect interpretation
- what is expected, internal-only or customer-ready when proof metrics are shown

`MetricGrid` is the layout companion of `MetricCard`.

Use `MetricCard` for individual metrics.

Use `MetricGrid` to arrange them.

`MetricGrid` should not carry business logic itself. Trust context, source
context and proof status should remain visible through `MetricCard` metadata or
through business patterns such as `ConnectivityCoverageCard`,
`RenewalRiskSummary` or `ValueProofCard`.

---

## Props

Use the component with these props:

```tsx
<MetricGrid columns={4}>
  <MetricCard
    label="Connected equipment"
    value="68%"
    helper="17 of 25 assets monitored"
    trend="-12% this month"
    trendTone="warning"
    sourceScope="Schneider monitored assets only"
    sourceStrength="partial"
    freshness="18 hours ago"
  />
  <MetricCard
    label="Open critical alerts"
    value="2"
    helper="Both require customer communication this week"
    source="Service monitoring"
    freshness="Today"
  />
</MetricGrid>
```

Expected props:

```txt
children
columns
className
```

Expected `columns` values:

```txt
2
3
4
```

Use `children` for `MetricCard` components.

Use `columns` to define the intended desktop grid density.

The implementation renders one column by default and switches to the selected
column count from the medium breakpoint.

Use `className` only for layout adjustments, not to redefine the grid styling.

---

## Column rules

Use `columns={2}` for small metric groups or when metrics need more room.

Use `columns={3}` for the default decision summary.

Use `columns={4}` only when the four metrics are all equally useful and easy to
scan.

Do not use more than four first-level metrics unless explicitly requested.

Do not create arbitrary grid column classes manually when `columns` is available.

---

## Metric selection rules

Only include metrics that help the user understand the situation or decide what
to do next.

Good metrics:

```txt
Connected equipment
Partially connected assets
Non-connected assets
Open critical alerts
Overdue actions
Recommendations reviewed
Renewal readiness
Monitoring adoption
Value proof status
Customer-ready proof items
Proof gaps
Critical disconnected assets
Time since last customer update
Source strength
```

Bad metrics:

```txt
Data points
Total records
Random score
Dashboard count
Generic performance
Nice number
Confidence
AI score
Value proven
Asset intelligence
```

Do not generate metrics just to fill the grid.

A smaller grid with strong metrics is better than a large grid with weak metrics.

Avoid metrics that imply AI validation, complete visibility or proven value
without visible source evidence and proof context.

---

## Trust and evidence rules

`MetricGrid` should not make weak or partial evidence look complete.

When metrics affect trust, make sure each relevant `MetricCard` shows the needed
context, such as:

```txt
source
freshness
source scope
source strength
asset scope
connectivity status
partial visibility
validation status
proof status
```

Good:

```tsx
<MetricGrid columns={3}>
  <MetricCard
    label="Connected equipment"
    value="68%"
    helper="17 of 25 assets monitored"
    sourceScope="Schneider monitored assets only"
    sourceStrength="partial"
    freshness="18 hours ago"
  />
  <MetricCard
    label="Open critical alerts"
    value="2"
    helper="Customer communication required"
    source="Service monitoring"
    freshness="Today"
  />
  <MetricCard
    label="Overdue actions"
    value="3"
    helper="Ownership must be clarified"
    validationStatus="Owner update needed"
  />
</MetricGrid>
```

Weak:

```tsx
<MetricGrid columns={3}>
  <MetricCard label="Confidence" value="High" />
  <MetricCard label="Asset intelligence" value="OK" />
  <MetricCard label="Value proven" value="Yes" />
</MetricGrid>
```

The weak example uses vague confidence and proof claims without source evidence.

Do not use confidence language as a substitute for source context.

---

## Asset-heavy metric rules

For asset-heavy screens, `MetricGrid` may show a small set of asset metrics, but
it should not replace `ConnectivityCoverageCard` when the user needs the full
coverage picture.

Good asset-heavy metrics:

```txt
Connected assets
Partially connected assets
Non-connected assets
Critical disconnected assets
Monitoring coverage
Assets reviewed
Source strength
```

Asset-heavy metrics should make clear whether they cover:

```txt
full installed base
Schneider monitored assets only
known installed base
connected assets only
manual inventory
specific site, zone, room or asset group
```

Do not present non-connected assets as live-monitored.

Do not imply complete installed base visibility when the metric only covers a
partial scope.

Use `ConnectivityCoverageCard` when the section needs to show connected,
partially connected and non-connected assets, affected scope, freshness, source
scope or source strength as the main point of the section.

---

## Value proof metric rules

For value proof screens, `MetricGrid` can summarize proof readiness, but it
should not replace `ValueProofCard`.

Good value proof metrics:

```txt
Customer-ready proof items
Internal proof items
Proof gaps
Expected outcomes
Recommendations completed
Value proof readiness
```

Do not present expected outcomes as proven value.

Do not present technical outcomes or internal proof as customer-ready proof
without validation.

Use `ValueProofCard` when the section needs to explain proof maturity, proof
points, proof gaps, customer objectives or customer-ready evidence.

---

## Recommended number of metrics

Recommended metric counts:

```txt
2 metrics: focused comparison
3 metrics: standard decision summary
4 metrics: dense executive or operational summary
```

Avoid more than four first-level metrics.

If more metrics are needed, consider grouping them in a lower-priority section or
using a different information pattern.

---

## When to use MetricGrid

Use `MetricGrid` for:

- customer monitoring metrics
- renewal readiness metrics
- connectivity coverage metrics
- service performance metrics
- action plan metrics
- recommendation review metrics
- value proof readiness metrics
- operational risk metrics
- asset visibility metrics
- proof gap metrics
- customer-ready proof metrics

---

## When not to use MetricGrid

Do not use `MetricGrid` for:

- single metrics
- alerts
- actions
- status metadata
- display-only customer context
- long-form explanations
- business summaries already covered by patterns
- generic card layouts
- full dashboard page layout
- full connectivity coverage context
- value proof explanation
- recommendation detail
- evidence references
- phased action plans

Use other components instead:

| Need | Use |
| --- | --- |
| Single metric | `MetricCard` |
| Risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Recommended action | `ActionCard` |
| Group actions | `ActionList` |
| Short status or metadata | `Badge` |
| Structured status context | `StatusSummary` |
| Customer context | `CustomerStatusCard` |
| Connectivity coverage | `ConnectivityCoverageCard` |
| Source scope, source strength and coverage limits | `ConnectivityCoverageCard` or `StatusSummary` |
| Renewal context | `RenewalRiskSummary` |
| Value proof | `ValueProofCard` |
| Proof maturity and proof gaps | `ValueProofCard` |
| Recommendation detail | `AlertCard` for simple recommendations, richer recommendation pattern when available |
| Generic grouped content | `Card` |

---

## Placement rules

Place `MetricGrid` after the screen context and before detailed risks or actions.

Recommended customer monitoring structure:

```txt
PageHeader
→ CustomerStatusCard
→ MetricGrid with MetricCard items
→ ConnectivityCoverageCard when relevant
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended asset intelligence structure:

```txt
PageHeader
→ customer, site or installed base context
→ ConnectivityCoverageCard or source/scope context
→ MetricGrid with key asset metrics
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended renewal risk structure:

```txt
PageHeader
→ RenewalRiskSummary
→ ValueProofCard
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended value proof structure:

```txt
PageHeader
→ RenewalRiskSummary or customer context
→ ValueProofCard
→ MetricGrid with proof readiness metrics
→ ActionList with follow-up actions
```

Do not place metrics before the user understands the context.

Do not bury critical metrics below long secondary content.

For trust-sensitive metrics, place source scope, source strength, freshness or
proof context close enough to the metric that the user can interpret the value
without searching elsewhere.

---

## Good example

```tsx
<MetricGrid columns={3}>
  <MetricCard
    label="Connected equipment"
    value="68%"
    helper="17 of 25 assets monitored"
    trend="-12% this month"
    trendTone="warning"
    sourceScope="Schneider monitored assets only"
    sourceStrength="partial"
    freshness="18 hours ago"
  />
  <MetricCard
    label="Open critical alerts"
    value="2"
    helper="Both require customer communication this week"
    source="Service monitoring"
    freshness="Today"
  />
  <MetricCard
    label="Overdue actions"
    value="3"
    helper="High-priority actions with no owner update"
    validationStatus="Ownership review needed"
  />
</MetricGrid>
```

This is good because:

- all metrics support the same decision context
- the grid is limited to three strong metrics
- each metric has a clear label
- each metric includes helpful context
- the negative trend uses `trendTone="warning"`
- source scope and source strength are visible where they affect trust
- the grid helps the user prioritize what to review next

---

## Asset visibility example

```tsx
<MetricGrid columns={4}>
  <MetricCard
    label="Connected assets"
    value="385"
    helper="Live or recent telemetry available"
    source="DCIM / BMS integration"
    sourceScope="Known installed base"
    sourceStrength="high"
    freshness="18 hours ago"
  />
  <MetricCard
    label="Partially connected assets"
    value="59"
    helper="Some telemetry or component visibility is missing"
    sourceScope="Known installed base"
    sourceStrength="partial"
    validationStatus="Review before customer use"
  />
  <MetricCard
    label="Non-connected assets"
    value="10"
    helper="Manual inventory and service reports only"
    source="Manual inventory"
    sourceStrength="limited for live health"
    validationStatus="Not live-monitored"
  />
  <MetricCard
    label="Critical disconnected assets"
    value="3"
    helper="Priority review needed before the next service meeting"
    sourceScope="Critical power rooms"
    validationStatus="Action planning needed"
  />
</MetricGrid>
```

This is good because:

- connected, partially connected and non-connected assets are separated
- non-connected assets are not presented as live-monitored
- source scope and source strength remain visible
- the grid summarizes asset visibility without replacing `ConnectivityCoverageCard`

---

## Renewal risk example

```tsx
<MetricGrid columns={2}>
  <MetricCard
    label="Renewal readiness"
    value="Medium"
    helper="Value proof needs to be consolidated"
    validationStatus="Not customer-ready"
  />
  <MetricCard
    label="Recommendations reviewed"
    value="42%"
    helper="5 of 12 recommendations reviewed"
    trend="+12%"
    trendTone="success"
    source="CSM review log"
    freshness="This quarter"
  />
</MetricGrid>
```

---

## Value proof example

```tsx
<MetricGrid columns={3}>
  <MetricCard
    label="Customer-ready proof items"
    value="3"
    helper="Validated proof points ready for customer discussion"
    sourceScope="Last 90 days"
    sourceStrength="high"
    validationStatus="Customer-ready"
  />
  <MetricCard
    label="Internal proof items"
    value="6"
    helper="Needs synthesis before customer communication"
    sourceScope="Closed service actions"
    validationStatus="Internal only"
  />
  <MetricCard
    label="Proof gaps"
    value="4"
    helper="Expected outcomes not yet validated by completed actions"
    validationStatus="Follow-up needed"
  />
</MetricGrid>
```

This is good because:

- customer-ready proof, internal proof and proof gaps are distinguishable
- expected outcomes are not presented as proven value
- proof maturity is visible without replacing `ValueProofCard`

---

## Bad example

Do not manually recreate a metric grid:

```tsx
<section className="grid gap-4 md:grid-cols-4">
  <div className="rounded-lg border p-4">
    <p>Connected equipment</p>
    <p>68%</p>
  </div>
</section>
```

Use `MetricGrid` and `MetricCard` instead:

```tsx
<MetricGrid columns={4}>
  <MetricCard
    label="Connected equipment"
    value="68%"
    helper="17 of 25 assets monitored"
    sourceScope="Schneider monitored assets only"
    sourceStrength="partial"
  />
</MetricGrid>
```

Do not use `MetricGrid` for vague or unsupported confidence claims:

```tsx
<MetricGrid columns={3}>
  <MetricCard label="Confidence" value="High" />
  <MetricCard label="Asset intelligence" value="OK" />
  <MetricCard label="Value proven" value="Yes" />
</MetricGrid>
```

Use source-aware and proof-aware metrics instead.

---

## Content quality rules

A metric grid should answer:

1. What are the most important measurable signals?
2. Which values need attention?
3. What source, scope or freshness limits affect trust?
4. What should the user inspect next?
5. What risks or actions should these metrics lead to?

If the metrics do not support these questions, refine the metric selection.

---

## Relationship with MetricCard

`MetricGrid` should usually contain `MetricCard` children.

Do not place unrelated content in `MetricGrid`.

Good:

```tsx
<MetricGrid>
  <MetricCard label="Open critical alerts" value="2" />
  <MetricCard label="Overdue actions" value="3" />
</MetricGrid>
```

Bad:

```tsx
<MetricGrid>
  <AlertCard ... />
  <ActionCard ... />
</MetricGrid>
```

Use `PriorityList` for alerts and `ActionList` for actions.

`MetricCard` carries the metric-level evidence and trust context. `MetricGrid`
only arranges the cards.

---

## Relationship with business patterns

Use business patterns to establish context.

Use `MetricGrid` to highlight a few measurable signals after that context.

Examples:

```txt
CustomerStatusCard → MetricGrid with customer monitoring metrics
ConnectivityCoverageCard → MetricGrid with coverage and recovery metrics
RenewalRiskSummary → MetricGrid with readiness and mitigation metrics
ValueProofCard → MetricGrid with service outcome or proof readiness metrics
```

Do not replace business patterns with metric grids.

Metrics should complement the business context, not become the whole screen.

Use `ConnectivityCoverageCard` when coverage and source scope are the main
message.

Use `ValueProofCard` when proof maturity, proof gaps or customer-ready evidence
are the main message.

---

## Relationship with recommendations and actions

Use `MetricGrid` to summarize measurable signals that help prioritize.

Use `AlertCard` or a richer recommendation pattern for recommendation content.

Use `ActionCard` and `ActionList` for owned follow-through.

Do not use `MetricGrid` to present recommendations, phased action plans,
expected outcomes or validation decisions.

---

## Anti-patterns

Do not generate:

- manually rebuilt metric grids
- metric grids with raw card-like divs
- metric grids with alerts or actions inside
- metric grids with too many metrics
- metric grids filled with weak or decorative metrics
- metrics without context
- metrics without source, scope or freshness when those affect trust
- unrelated metrics in the same grid
- metric grids used as full page layouts
- custom metric grid components
- local metric grid implementations
- local metric grid wrappers
- internal imports from package files
- metrics that use confidence language instead of source evidence
- metrics that present non-connected assets as live-monitored
- metrics that imply complete visibility when coverage is partial
- metrics that present expected outcomes as proven value
- metrics that present technical outcomes or internal proof as customer-ready proof without validation
- negative or uncertain trends without an appropriate `trendTone`

---

## Review checklist

After generation, verify:

- `MetricGrid` is imported from `design-system-ai-lab`
- no local metric grid replacement was created
- no local metric grid wrapper was created
- no internal package import is used
- `MetricGrid` contains `MetricCard` items
- metrics are decision-relevant
- metrics are limited to a useful number
- `columns` is 2, 3 or 4
- there are not more than four first-level metrics unless explicitly requested
- metric labels are clear
- metric helper text explains interpretation when needed
- source, scope, freshness or source strength are visible when they affect trust
- asset-heavy metrics do not imply complete visibility when coverage is partial
- non-connected assets are not presented as live-monitored
- proof metrics distinguish expected outcomes, technical outcomes, internal proof and customer-ready proof when relevant
- confidence language does not replace source evidence
- negative, warning or uncertain trends use an appropriate `trendTone`
- alerts are not placed inside `MetricGrid`
- actions are not placed inside `MetricGrid`
- recommendations are not presented as metrics
- business patterns are used for business context
- the grid helps the user decide what to inspect or do next

---

## Final principle

A `MetricGrid` should make a few important signals easy to compare without
creating false confidence.

If the grid does not help the user interpret the situation or prioritize the
next step, reduce or change the metrics.

If the metrics affect trust but hide source scope, source strength, freshness,
partial visibility or proof maturity, revise the grid before accepting the
screen.
