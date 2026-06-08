# MetricCard Guidelines

## Purpose

Use `MetricCard` to show a decision-relevant metric.

A metric should help the user understand the situation, assess priority or
decide what to do next.

A metric is not decoration.

A metric should not be displayed just because data exists.

In generated screens, `MetricCard` should support interpretation,
prioritization and actionability.

`MetricCard` is a decision component. It should help the user understand what
is measured, what can be trusted, what is partial and whether action is needed.

For trust-sensitive metrics, the metric should expose enough context to avoid
false precision or false confidence.

---

## Import

Import `MetricCard` from the package root:

```tsx
import { MetricCard } from "design-system-ai-lab";
```

If other design system components are needed, import them from the same package
root:

```tsx
import {
  AlertCard,
  ActionCard,
  Badge,
  MetricCard,
  MetricGrid,
  StatusSummary,
} from "design-system-ai-lab";
```

Do not import `MetricCard` from internal package paths.

Do not recreate `MetricCard` locally.

Do not create custom metric card wrappers.

---

## Component role

Use `MetricCard` when the user needs to quickly understand a key measurable
signal.

Good metrics help the user answer:

- is the situation healthy or risky?
- is performance improving or declining?
- is action needed?
- what should be prioritized?
- what changed since the last review?
- what source, scope or freshness limits affect this value?
- is the value observed, interpreted, expected or proven?

`MetricCard` should support interpretation, not just reporting.

Metrics that affect trust should not be separated from their source context.
Use the helper, future metadata props or surrounding components to show source,
freshness, source scope, source strength, partial visibility or proof status
when they affect interpretation.

---

## Props

Use the component with these props:

```tsx
<MetricCard
  label="Connected equipment"
  value="68%"
  helper="17 of 25 assets monitored · Source scope: Schneider monitored assets · Source strength: partial"
  trend="-12% this month"
/>
```

Expected props:

```txt
label
value
helper
trend
trendTone (planned)
meta (planned)
source (planned)
sourceScope (planned)
sourceStrength (planned)
freshness (planned)
validationStatus (planned)
className
```

Use `label` to explain what is measured.

Use `value` for the main number or status value.

Use `helper` to explain why the value matters or how to interpret it.

Use `trend` only when it adds useful context.

Until the planned metadata props are implemented, use `helper` for short trust
context such as source scope, source strength, freshness or proof status.

Planned code evolution:

```tsx
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
```

The future implementation should avoid using a visually positive trend style
for negative, warning, partial or uncertain trends.

---

## Required information

A `MetricCard` should include at least:

- label
- value
- source or scope context when it affects trust

Prefer adding helper text when the value may be unclear without context.

For asset-heavy, renewal or value proof metrics, helper text should clarify
whether the value is based on complete visibility, partial visibility, manual
inventory, monitored assets only, expected outcomes or validated proof.

Do not generate isolated metrics without interpretation.

---

## Good metric labels

Good metric labels are specific and decision-oriented.

Examples:

```txt
Connected equipment
Open critical alerts
Overdue actions
Recommendations reviewed
Renewal readiness
Monitoring adoption
Time since last update
Value proof status
Critical disconnected assets
Partially connected assets
Non-connected assets
Source strength
Proof gap status
Customer-ready proof items
```

Good labels explain what the value represents.

---

## Bad metric labels

Avoid vague labels such as:

```txt
Data
Number
Metric
Status
Score
Value
Performance
Confidence
AI score
Asset intelligence
Value proven
```

These labels do not help the user interpret the metric.

Avoid labels that imply confidence, AI validation or proven value without
visible source evidence and proof context.

---

## Good metric values

Metric values should be easy to scan.

Examples:

```txt
68%
3
12 days
On track
High
62 days
17 / 25
Medium
Incomplete
Partial
Expected, not proven
Internal only
Customer-ready
```

Avoid long values that are hard to scan.

If the value needs explanation, use `helper`.

---

## Helper text rules

Helper text should explain context or meaning.

Good helper text:

```txt
17 of 25 assets monitored
2 critical alerts require review this week
Action plan should be updated before the next customer meeting
Renewal discussion is planned in 62 days
Value proof needs consolidation before the review
Source scope: Schneider monitored assets only
Source strength: partial
Based on manual inventory updated 18 hours ago
Expected outcome, not proven value
Internal proof, not customer-ready
```

Bad helper text:

```txt
Metric information
Some data
This is important
Details below
```

Helper text should help interpretation.

Use helper text to expose short trust context until dedicated metadata props
are available.

Do not use helper text to hide long explanations, proof gaps or risk details.
Use `AlertCard`, `StatusSummary`, `ConnectivityCoverageCard` or
`ValueProofCard` when the context is central to the decision.

---

## Trend rules

Use `trend` only when a change over time is useful.

Good trend examples:

```txt
+8% this quarter
-12% this month
-2 overdue actions this week
Improved since last review
Stable over 30 days
```

Avoid trends that are decorative or unclear:

```txt
Up
Good
Nice
Trending
```

Do not add a trend to every metric by default.

If trend creates confusion, omit it.

Current implementation note: `trend` is visually styled with the success color.
Until `trendTone` is implemented, avoid using `trend` for negative, warning,
danger, partial or uncertain changes that could be misread as positive.

Future implementation should support:

```txt
trendTone: neutral | success | warning | danger
```

`trendTone` should match the meaning of the trend, not the desired visual
emphasis.

---

## Trust and evidence rules

A metric should not create false confidence.

When a metric affects trust, expose relevant context such as:

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

Use `helper` for short context in the current implementation.

Use future metadata props when available.

Good:

```tsx
<MetricCard
  label="Connected equipment"
  value="68%"
  helper="17 of 25 assets monitored · Source strength: partial"
/>
```

Weak:

```tsx
<MetricCard
  label="Confidence"
  value="High"
  helper="AI is confident"
/>
```

Do not use confidence language as a substitute for source evidence.

---

## Asset-heavy metric rules

For asset-heavy screens, metrics should make asset scope and visibility limits
clear when they affect trust.

Good asset-heavy metrics:

```txt
Connected equipment
Partially connected assets
Non-connected assets
Critical disconnected assets
Source strength
Monitoring coverage
Assets reviewed
```

Do not present non-connected assets as live-monitored.

Do not use a single metric to imply complete installed base visibility when the
value only covers Schneider monitored assets, connected assets or manual
inventory.

Use `ConnectivityCoverageCard` when the section needs to show full coverage
context: connected, partially connected, non-connected, affected scope,
freshness, source scope or source strength.

---

## Value proof metric rules

For value proof screens, metrics should distinguish proof maturity.

Good value proof metrics:

```txt
Expected outcomes
Technical outcomes
Internal proof items
Customer-ready proof items
Proof gaps
Value proof readiness
```

Do not present expected outcomes as proven value.

Do not present technical outcomes or internal proof as customer-ready proof
without validation.

Use `ValueProofCard` when the section is primarily about proof maturity,
proof points, proof gaps or customer-ready value evidence.

---

## When to use MetricCard

Use `MetricCard` for:

- connectivity rate
- alert count
- overdue action count
- usage or adoption level
- renewal readiness signal
- SLA status
- number of recommendations reviewed
- time since last customer update
- number of assets covered
- value proof readiness
- critical disconnected asset count
- partially connected asset count
- non-connected asset count
- source strength summary
- proof gap count
- customer-ready proof count

---

## When not to use MetricCard

Do not use `MetricCard` for:

- long explanations
- alerts with recommendations
- action plans
- status metadata
- decorative numbers
- vanity metrics
- detailed tables
- raw data dumps
- full customer status context
- renewal context
- value proof explanation
- source evidence explanation
- proof gaps that need narrative context
- asset intelligence interpretation without source scope
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation

Use other components instead:

| Need | Use |
| --- | --- |
| Arrange several metrics | `MetricGrid` |
| Show a risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Show a recommended action | `ActionCard` |
| Group recommended actions | `ActionList` |
| Show short status or metadata | `Badge` |
| Show structured status context | `StatusSummary` |
| Show customer context | `CustomerStatusCard` |
| Show connectivity coverage | `ConnectivityCoverageCard` |
| Show source scope, source strength and coverage limits | `ConnectivityCoverageCard` or `StatusSummary` |
| Show renewal context | `RenewalRiskSummary` |
| Show value proof | `ValueProofCard` |
| Trigger an action | `Button` |

---

## MetricGrid usage

When generating multiple metrics, use `MetricGrid`.

Preferred:

```tsx
<MetricGrid columns={3}>
  <MetricCard
    label="Connected equipment"
    value="68%"
    helper="17 of 25 assets monitored · Source strength: partial"
    trend="-12% this month"
  />
  <MetricCard
    label="Open critical alerts"
    value="2"
    helper="Both require customer communication this week"
  />
  <MetricCard
    label="Overdue actions"
    value="3"
    helper="High-priority actions with no owner update"
  />
</MetricGrid>
```

Avoid manually rebuilding the metric grid with a raw `section` when `MetricGrid`
fits the need.

---

## Metric selection rules

Only generate metrics that support the screen goal.

For a customer monitoring screen, useful metrics may include:

```txt
Connected equipment
Partially connected assets
Source strength
Open critical alerts
Overdue actions
Recommendations reviewed
```

For a renewal risk screen, useful metrics may include:

```txt
Renewal readiness
Recommendations reviewed
Overdue actions
Connected equipment
Value proof status
Proof gaps
Customer-ready proof items
```

For a QBR preparation screen, useful metrics may include:

```txt
Closed actions
Recommendations completed
Service value proof items
Resolved connectivity issues
```

Do not include too many metrics.

Prefer three or four strong metrics over a large metric grid.

---

## Placement rules

Place `MetricCard` after the user understands the screen context.

Common placement:

```txt
PageHeader
CustomerStatusCard or RenewalRiskSummary
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
```

Do not place metrics below all secondary content if they are critical to the
decision.

Do not place metrics before the screen has enough context.

For trust-sensitive metrics, place source scope, source strength, freshness or
proof context close enough to the metric that the user can interpret the value
without searching elsewhere.

---

## Layout rules

Use `MetricGrid` for metric layout.

Good pattern:

```tsx
<MetricGrid columns={4}>
  <MetricCard
    label="Connected equipment"
    value="68%"
    helper="17 of 25 assets monitored · Source scope: Schneider monitored assets · Source strength: partial"
    trend="-12% this month"
  />
  <MetricCard
    label="Open critical alerts"
    value="2"
    helper="Both require customer communication this week"
  />
  <MetricCard
    label="Overdue actions"
    value="3"
    helper="High-priority actions with no owner update"
  />
  <MetricCard
    label="Recommendations reviewed"
    value="42%"
    helper="5 of 12 recommendations reviewed by the customer"
  />
</MetricGrid>
```

Avoid very large metric grids.

Avoid mixing unrelated metrics in the same grid.

Avoid placing more than four metrics in a first-level decision summary unless
explicitly requested.

---

## Good example

```tsx
<MetricCard
  label="Connected equipment"
  value="68%"
  helper="17 of 25 assets monitored · Source strength: partial"
/>
```

This is good because:

- the label is clear
- the value is easy to scan
- the helper explains the value
- the helper exposes trust context
- the trend is omitted because the current implementation styles trends as positive

---

## Planned future example

After the planned code evolution, prefer explicit metadata and trend tone props
instead of overloading helper text.

```tsx
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
```

Storybook should include examples for:

```txt
positive trend
negative trend
neutral trend
partial source strength
asset-heavy metric
value proof readiness
expected outcome not proven
customer-ready proof item count
```

---

## Bad example

```tsx
<MetricCard
  label="Score"
  value="42"
  helper="Some data"
  trend="Good"
/>
```

This is weak because:

- the label is vague
- the value is not interpretable
- the helper does not explain meaning
- the trend is unclear
- the metric has no source or scope context
- the metric could create false confidence

---

## Relationship with other components

### MetricCard and MetricGrid

Use `MetricGrid` to arrange multiple `MetricCard` items.

Do not manually recreate the metric grid layout when `MetricGrid` fits.

### MetricCard and Card

Use `Card` to provide broader context.

Use `MetricCard` for individual key indicators.

### MetricCard and StatusSummary

Use `StatusSummary` for structured label/value context.

Use `MetricCard` when the value is a decision metric that needs emphasis.

### MetricCard and ConnectivityCoverageCard

Use `MetricCard` for one or two key coverage metrics.

Use `ConnectivityCoverageCard` when the user needs the full coverage picture:
connected assets, partially connected assets, non-connected assets, affected
scope, freshness, source scope and source strength.

### MetricCard and AlertCard

Use `MetricCard` to show measurable signals.

Use `AlertCard` to explain risks and recommendations.

Example:

```txt
MetricCard: Open critical alerts = 2
AlertCard: Connectivity loss on critical equipment
```

### MetricCard and ActionCard

Use `MetricCard` to show measurable urgency.

Use `ActionCard` to show what should be done next.

Example:

```txt
MetricCard: Overdue actions = 3
ActionCard: Assign owners to overdue actions
```

### MetricCard and ValueProofCard

Use `MetricCard` for a concise proof readiness signal or proof gap count.

Use `ValueProofCard` when the section needs to distinguish expected outcomes,
technical outcomes, internal proof, customer-ready proof and proof gaps.

### MetricCard and business patterns

Use business patterns such as `CustomerStatusCard`, `RenewalRiskSummary`,
`ConnectivityCoverageCard` and `ValueProofCard` for complete business context.

Use `MetricCard` for the few key metrics that need strong visual emphasis.

---

## Anti-patterns

Do not generate:

- metrics without context
- vague labels
- vanity metrics
- too many metrics
- large metric grids
- decorative trends
- unclear percentages
- raw data without interpretation
- metrics without source, scope or freshness context when those affect trust
- metrics that use confidence language instead of source evidence
- metrics that present non-connected assets as live-monitored
- metrics that imply complete visibility when coverage is partial
- metrics that present expected outcomes as proven value
- metrics that present technical outcomes or internal proof as customer-ready proof without validation
- negative or uncertain trends styled as positive signals
- metrics that duplicate business pattern content without adding value
- custom metric components
- local metric card implementations
- local metric card wrappers
- internal imports from package files
- raw card-like containers used as metric cards

---

## Review checklist

After generation, verify:

- every `MetricCard` is imported from `design-system-ai-lab`
- every `MetricCard` has a clear label
- every `MetricCard` has an interpretable value
- helper text explains the metric when needed
- source, scope, freshness or source strength are visible when they affect trust
- asset-heavy metrics do not imply complete visibility when coverage is partial
- proof metrics distinguish expected outcomes, technical outcomes, internal proof and customer-ready proof when relevant
- trend is used only when it adds useful context
- trend is not used for negative, partial or uncertain changes until trend tone is supported
- confidence language does not replace source evidence
- metrics support the screen goal
- metrics help the user decide what to do next
- there are not too many metrics
- metrics are not used as decoration
- multiple metrics are arranged with `MetricGrid`
- business patterns are used for complete business context
- no local metric card replacement was created
- no local metric card wrapper was created
- no internal package import is used

---

## Final principle

A `MetricCard` should turn a number into understanding without creating false
confidence.

If the metric does not help the user interpret the situation or decide what to
do, do not generate it.

If the metric affects trust but does not expose source, scope, freshness,
source strength or proof maturity, revise it before accepting the screen.
