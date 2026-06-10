# Eco-Design Principles

## Purpose

Eco-design is a baseline requirement for generated interfaces.

A generated screen should be useful, focused and proportionate to the user task.

It should not create unnecessary visual complexity, DOM complexity, content
volume or AI-generated noise.

Figma Make should not generate large, redundant or over-designed screens when a
small, clear composition would solve the user need.

Eco-design is not only about technical performance.

It is also informed by the knowledge layer: users need to understand the
current situation quickly, trust what is shown, identify what matters most,
know what to do next and distinguish proof from assumptions.

It is also about reducing cognitive load, avoiding waste and reusing the design
system instead of reinventing UI for every screen.

For asset-heavy screens, eco-design must not remove trust-critical context such
as asset scope, connectivity status, source scope, source strength, freshness,
Health versus Intelligence distinction, expected outcome status or proof status.

---

## Core principle

Generate the smallest useful interface that helps the user understand the
situation and decide what to do next.

Smallest useful does not mean smallest possible.

Keep the context required to trust the screen and act safely.

Prefer:

```txt
Clear context
→ a few useful metrics
→ prioritized risks
→ owned next actions
```

For asset-heavy screens, prefer:

```txt
Asset scope
→ connectivity, source scope and source strength
→ selected Health facts
→ interpreted Intelligence only when useful
→ prioritized recommendation
→ owned or phased action
→ expected outcome, technical outcome, internal proof or customer-ready proof status
```

Avoid:

```txt
Large dashboards
→ many duplicated cards
→ too many metrics
→ decorative sections
→ repeated explanations
→ unnecessary AI-generated content
```

A screen is better when it is easier to understand, not when it contains more
components.

A screen is also better when it removes noise without removing the evidence,
source or scope needed to trust the recommendation.

---

## Reuse before creating

Use existing package components and patterns before creating anything new.

Preferred:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  coverage="68% connected"
/>
```

Avoid rebuilding the same structure manually:

```tsx
<Card title="Customer status">
  <dl>
    <div>
      <dt>Customer</dt>
      <dd>Greenfield Industries</dd>
    </div>
  </dl>
</Card>
```

Do not create local wrappers when the package component already solves the need.

Do not duplicate component behavior with raw `div`, `section`, `dl`, `input`,
`select` or `textarea` structures.

---

## Screen size and density

Generated screens should be compact enough to support decision-making.

Prefer a small number of strong sections.

Recommended structure:

```txt
PageHeader
→ Business context pattern
→ MetricGrid with 2 to 4 MetricCard items
→ PriorityList with 2 to 5 AlertCard items
→ ActionList with 2 to 5 ActionCard items
```

Avoid generating screens with:

- too many cards
- too many sections
- too many equal-priority blocks
- too many metrics
- too many alerts
- too many actions
- repeated summaries
- duplicated context
- decorative panels

If everything is visible, nothing is prioritized.

For asset-heavy screens, prioritize grouped asset views over full asset dumps
when grouping is enough for the decision.

Do not remove asset scope, source strength or proof status simply to reduce the
number of visible elements.

---

## Metric sobriety

Do not generate metrics just to fill space.

Use only metrics that help the user interpret the situation or decide what to do
next.

Recommended first-level metric count:

```txt
2 metrics: focused comparison
3 metrics: standard decision summary
4 metrics: dense operational or executive summary
```

Avoid more than four first-level metrics unless explicitly requested.

Good metrics:

```txt
Connected equipment
Open critical alerts
Overdue actions
Recommendations reviewed
Renewal readiness
Value proof status
Partially connected assets
Source strength
Expected outcome status
```

Weak metrics:

```txt
Data points
Total records
Generic performance
Random score
Nice number
High confidence
Generic asset score
All assets count
```

Use `MetricGrid` and `MetricCard` instead of manually building metric cards.

---

## Alert and action sobriety

Do not generate long unordered lists of risks or actions.

Use `PriorityList` for risks and blockers.

Use `ActionList` for next steps.

Recommended item counts:

```txt
PriorityList: 2 to 5 AlertCard items
ActionList: 2 to 5 ActionCard items
```

Sort priority items by severity or business impact.

Sort actions by priority, urgency or business impact.

Avoid generating many low-value actions.

Avoid generating repeated alerts with similar wording.

A small list of clear items is more useful than a long list of weak items.

---

## Content sobriety

Generated copy should be concise and useful.

Use enough text to support interpretation, but avoid verbose explanations when
components already provide structure.

Good:

```txt
Plan connectivity review with the customer
Prepare customer-ready value proof summary
Connectivity loss on critical equipment
```

Weak:

```txt
This is an important thing that the user should probably look at because it may require some attention later.
```

Avoid:

- repeated explanations
- generic filler text
- long paragraph cards
- redundant helper text
- repeated customer context
- repeated status labels
- repeated proof points

Write less, but make each sentence more useful.

Useful concise content can still include trust-critical qualifiers such as
`partial visibility`, `historical evidence`, `expected outcome` or `not
customer-ready proof`.

Do not remove these qualifiers to make copy look shorter when they prevent false
confidence.

---

## Avoid duplication

Do not repeat the same information across multiple sections unless it helps
clarity.

Example:

If `CustomerStatusCard` already shows customer name, plan and coverage, do not
repeat the same content in every subsequent card.

If `ConnectivityCoverageCard` already shows disconnected assets, do not repeat
the exact same disconnected asset count in multiple alerts unless the alert adds
new meaning.

If `RenewalRiskSummary` already shows renewal window and readiness, do not
repeat those values in a generic `StatusSummary`.

Duplication increases cognitive load and makes generated screens feel noisy.

Exception: repeat a small trust cue locally when removing it would make a risk,
recommendation or value proof harder to verify. For example, source scope or
freshness may appear both in a coverage pattern and in a related alert when the
alert depends on that scope.

---

## Prefer patterns over custom composition

Use business patterns when they match the screen intent.

Preferred patterns:

```txt
CustomerStatusCard for customer context
ConnectivityCoverageCard for monitoring coverage
RenewalRiskSummary for renewal risk context
ValueProofCard for value proof
CreateActionDialog for action creation
```

Avoid recreating these patterns with:

```txt
Card
StatusSummary
MetricGrid
raw divs
manual dl/dt/dd markup
custom local wrappers
```

Patterns reduce generation waste because they encode reusable structure and
business meaning.

---

## Avoid unnecessary custom code

Generated screens should not create local components unless explicitly needed.

Avoid:

```tsx
function CustomMetricCard() {
  return <div className="rounded-lg border p-4" />;
}
```

Use package components instead:

```tsx
<MetricCard
  label="Connected equipment"
  value="68%"
  helper="17 of 25 known monitored assets — CompanyName scope only"
/>
```

Do not create local wrappers for:

- Button
- Card
- Badge
- Dialog
- Field
- Input
- Select
- Textarea
- MetricCard
- ActionCard
- AlertCard
- business patterns

Local wrappers increase maintenance cost and reduce design system control.

---

## Avoid unnecessary styling

Use design tokens and package styles.

Do not use inline styles to recreate design system styling.

Avoid:

```tsx
<div style={{ borderRadius: "12px", padding: "16px" }}>
  ...
</div>
```

Prefer package components:

```tsx
<Card title="Review context">
  ...
</Card>
```

Use `className` only for layout adjustments.

Do not use `className` to redefine component identity.

Do not add decorative visual effects unless the prompt explicitly asks for them
and they support the user task.

---

## Avoid heavy decorative assets

Generated screens should not include decorative images, illustrations, icons or
animations unless they support comprehension.

Avoid:

- decorative hero images
- large background images
- unnecessary illustrations
- animated decorative elements
- icon-only status communication
- visual flourishes that do not help the decision

If icons are introduced later, they should support scanning and must not replace
text labels.

Prefer clear text, structured components and meaningful hierarchy.

---

## AI output sobriety

Generated interfaces should not overuse AI-generated text.

Use AI-generated text only where interpretation, synthesis or recommendation is
valuable.

Do not generate long AI explanations for basic data.

Do not generate an AI paragraph for information that can be displayed directly as
structured data.

Good:

```txt
AI-assisted synthesis of renewal blockers
AI-generated recommended next action
AI-generated customer-ready value proof summary
```

Weak:

```txt
AI-generated paragraph explaining the customer name, contract number or renewal date
```

Basic facts should be displayed directly through components and data props.

Asset facts should also be displayed through BI, APIs or source systems, not
generated through GenAI.

Do not use GenAI to retrieve or invent:

- asset hierarchy
- connectivity status
- telemetry values
- source scope
- source strength
- asset facts
- lifecycle status
- expected outcomes
- proven value

---

## Data sobriety

Display only the data needed for the current decision.

For asset-heavy screens, this means grouping or summarizing assets when the
full list is not needed, while preserving the scope and source cues that affect
trust.

Prefer:

```txt
few selected metrics
structured status context
prioritized blockers
actionable recommendations
asset scope when relevant
connectivity status when relevant
source scope when relevant
source strength when relevant
```

Avoid:

```txt
all customer fields
all contract fields
all asset fields
all alerts
all historical actions
all recommendations
all telemetry values
all embedded components as top-level assets
unsupported asset-level precision
confidence language without source evidence
expected outcomes styled as proof
internal proof styled as customer-ready proof
```

A screen should help the user decide, not expose everything the system knows.

However, do not hide asset scope, connectivity status, source scope, source
strength or proof status simply to make the screen shorter when those cues affect
trust.

---

## Interaction sobriety

Do not add interactions that are not needed for the user task.

Avoid unnecessary:

- tabs
- accordions
- filters
- dropdowns
- modals
- hover-only interactions
- nested panels
- multi-step flows

Use `Dialog` only for short focused tasks.

Use `CreateActionDialog` for action creation.

Do not hide essential information behind interactions when it should be visible
for decision-making.

---

## Performance-oriented generation

Generated screens should reduce unnecessary markup and repeated structures.

Prefer package components that encapsulate structure.

Avoid deeply nested layouts.

Avoid repeating the same component group multiple times with only minor text
changes.

Avoid creating large UI trees for simple display needs.

Avoid rendering hidden sections that are not needed.

The generated code should be easy to read, maintain and review.

---

## Good composition example

```tsx
<PageHeader
  title="Renewal risk review"
  description="Review renewal exposure, value proof gaps and mitigation actions before the customer discussion."
  actions={<CreateActionDialog />}
/>

<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
/>

<ValueProofCard
  period="Last 90 days"
  customerObjective="Improve service visibility before renewal"
  proofStatus="Draft"
  proofPoints={[
    {
      label: "Closed actions",
      value: "12 service actions closed during the period.",
    },
  ]}
/>

<MetricGrid columns={3}>
  <MetricCard
    label="Recommendations reviewed"
    value="42%"
    helper="5 of 12 recommendations reviewed by the customer"
  />
  <MetricCard
    label="Overdue actions"
    value="3"
    helper="High-priority actions with no owner update"
  />
  <MetricCard
    label="Connected equipment"
    value="68%"
    helper="17 of 25 known monitored assets — CompanyName scope only"
  />
  <MetricCard
    label="Evidence status"
    value="Draft"
    helper="Technical outcome validated internally, not customer-ready proof"
  />
</MetricGrid>
```

This is good because:

- it uses existing patterns
- it avoids manual reconstruction
- it limits the number of metrics
- it supports a clear decision flow
- it keeps monitoring scope visible where trust depends on it
- it avoids presenting partial asset visibility as complete visibility
- it keeps proof status visible without adding a long proof narrative
- it avoids turning internal proof into customer-ready proof
- it avoids unnecessary sections

---

## Bad composition example

Avoid generating large, repetitive dashboards:

```tsx
<PageHeader title="Dashboard" description="View all customer information." />

<Card title="Customer details">...</Card>
<Card title="Contract details">...</Card>
<Card title="Plan details">...</Card>
<Card title="Coverage details">...</Card>
<Card title="Renewal details">...</Card>
<Card title="Alert details">...</Card>
<Card title="Action details">...</Card>
<Card title="More information">...</Card>
```

This is weak because:

- the title is generic
- the structure is not prioritized
- context is fragmented into too many sections
- patterns are not reused
- the screen likely repeats information
- the user does not know what to do next

---

## Relationship with accessibility

Eco-design and accessibility support each other.

Reducing unnecessary complexity improves:

- reading order
- comprehension
- keyboard navigation
- cognitive load
- review quality
- maintainability

A simpler screen is often a more accessible screen.

Do not reduce content so much that the user loses necessary context.

Do not make users infer scope, source strength, connectivity state or proof
status from color, layout or AI wording alone.

The goal is useful sobriety, not minimalism for its own sake.

---

## Relationship with AI usage

Eco-design also applies to AI usage.

Do not generate AI-heavy screens when deterministic data display is enough.

Do not use GenAI to retrieve or restate basic data.

Do not use GenAI to retrieve or restate asset hierarchy, asset facts,
connectivity status, telemetry, lifecycle status, source scope, source strength,
expected outcomes or proven value.

Use AI only when it adds value through:

- synthesis
- prioritization
- recommendation
- explanation
- proof gap explanation
- grounded action-plan drafting
- customer-ready reformulation

For asset intelligence, keep this separation:

```txt
Health data = source-system facts, telemetry, statuses, lifecycle facts
Intelligence = explanation, prioritization, recommendation, action plan, proof gap wording
```

AI usage should be proportionate to the value created.

---

## Anti-patterns

Do not generate:

- large dashboards by default
- too many first-level metrics
- long unordered alert lists
- long unordered action lists
- repeated customer context
- repeated coverage context
- repeated renewal context
- decorative sections
- decorative images or animations
- local wrappers for package components
- manually rebuilt business patterns
- inline styles for component identity
- raw data dumps
- full asset dumps when grouping is enough
- all embedded components modeled as top-level assets
- hidden asset scope in the name of simplicity
- hidden connectivity or source scope when it affects trust
- hidden source strength when it affects trust
- confidence language used as a substitute for source evidence
- AI-generated paragraphs for basic facts
- AI-generated asset facts, telemetry, source scope or connectivity status
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation
- embedded components presented as top-level assets unless component-level investigation is required
- non-connected assets presented as live-monitored
- unnecessary dialogs, filters, tabs or accordions
- deeply nested layouts
- duplicated sections with minor wording changes

---

## Review checklist

Before accepting a generated screen, verify:

- the screen uses existing package components and patterns
- no local wrappers were created unnecessarily
- no business pattern was manually rebuilt
- the screen has a clear decision flow
- the number of sections is justified
- the number of metrics is limited and useful
- alerts are prioritized and limited
- actions are prioritized and limited
- duplicated content has been removed
- raw data dumps are avoided
- full asset dumps are avoided when grouping is enough
-- asset scope, connectivity status, source scope and source strength remain visible when they affect trust
- compactness does not remove trust-critical context
- Health data is not mixed with Intelligence interpretation when both are present
- expected outcomes are not presented as proven value
- technical outcomes and internal proof are not presented as customer-ready proof without validation
- confidence language does not replace source evidence
- embedded components are not presented as top-level assets unless component-level investigation is required
- non-connected assets are not presented as live-monitored
- inline styles are avoided
- decorative assets are avoided unless useful
- interactions are necessary and task-driven
- AI-generated text is used only where it adds value
- the generated code is readable and maintainable
- the screen helps the user decide what to do next without unnecessary noise

---

## Final principle

Eco-design means generating less, but better.

It means removing noise, not removing evidence.

If a section, metric, alert, action, interaction or AI-generated text does not
help the user understand, trust or decide, do not generate it.

If asset scope, connectivity, source strength, freshness, expected outcome status
or proof status is needed to trust the decision, keep it visible even in a
compact screen.
