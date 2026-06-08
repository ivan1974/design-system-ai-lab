# Card Guidelines

## Purpose

Use `Card` to group related information into a clear, readable section.

A card should help the user understand a specific topic, context or decision
area.

A card is not decoration.

A card should have one clear purpose.

In generated screens, `Card` is a generic grouping component.

Use business patterns first when they match the intended section.

`Card` can support trust-sensitive context, but it should not hide uncertainty,
source limits, proof gaps or the distinction between observed facts and
interpretation.

---

## Import

Import `Card` from the package root:

```tsx
import { Card } from "design-system-ai-lab";
```

If other design system components are needed, import them from the same package
root:

```tsx
import {
  ActionCard,
  AlertCard,
  Badge,
  Button,
  Card,
  CustomerStatusCard,
  MetricCard,
  StatusSummary,
} from "design-system-ai-lab";
```

Do not import `Card` from internal package paths.

Do not recreate `Card` locally.

Do not create custom card wrappers.

---

## Component role

Use `Card` when the user needs to understand a grouped set of related
information and no more specific component or pattern fits.

Good generic uses:

- explanatory section
- short structured content
- grouped notes
- supporting context
- compact summary that does not match an existing pattern
- small content block with a clear purpose

Use `Card` to create meaning through grouping.

Do not use `Card` only to create visual boxes.

A card may provide supporting context for evidence, asset intelligence or value
proof, but it should not replace decision components or business patterns that
already carry that responsibility.

---

## Prefer patterns before Card

Business patterns should be used before manually composing generic cards.

Prefer:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  coverage="68% connected"
/>
```

Instead of:

```tsx
<Card title="Customer status">
  <div>...</div>
</Card>
```

Prefer:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  valueProofStatus="Incomplete"
/>
```

Instead of rebuilding renewal context manually with `Card`.

Prefer:

```tsx
<ValueProofCard proofPoints={[...]} />
```

Instead of manually creating proof point cards.

Also prefer `ConnectivityCoverageCard` when the section needs to show asset
scope, connectivity status, source scope, source strength, coverage limits or
partially connected assets.

---

## Props

Use the component with these props:

```tsx
<Card
  title="Service context"
  description="Current service situation and customer context."
>
  ...
</Card>
```

Available props:

```txt
title
description
children
className
```

Use `title` when the section needs a clear label.

Use `description` when additional context helps the user interpret the content.

Use `children` for the grouped content.

Use `className` only for layout adjustments, not for redefining the card style.

---

## Title rules

Card titles should be short and meaningful.

Good titles:

```txt
Service context
Customer notes
Discussion points
Supporting information
Review assumptions
Source assumptions
Proof gap notes
Asset visibility context
Preparation notes
```

Bad titles:

```txt
Information
Data
Details
Section
Card
Misc
```

The title should tell the user what the grouped content is about.

If a title matches an existing pattern, use the pattern instead.

For example:

- use `CustomerStatusCard` instead of a generic `Customer status` card
- use `RenewalRiskSummary` instead of a generic `Renewal context` card
- use `ConnectivityCoverageCard` instead of a generic `Connectivity coverage` card
- use `ValueProofCard` instead of a generic `Service value proof` card

---

## Description rules

Use descriptions to clarify why the section matters.

Good descriptions:

```txt
Context needed before assigning the next follow-up action.
Assumptions to verify before the customer discussion.
Source and visibility limits to review before trusting the recommendation.
Proof gaps to resolve before preparing the customer-ready summary.
Supporting information for the service team.
```

Avoid generic descriptions:

```txt
Here is some information.
This section contains details.
Review the data below.
```

Descriptions should support interpretation, not repeat the title.

---

## When to use Card

Use `Card` for:

- grouped context that does not match an existing pattern
- explanatory sections
- short structured content
- discussion notes
- supporting assumptions
- source or visibility assumptions
- proof gap notes
- context explaining why a recommendation still needs review
- simple grouped badges
- small content groups
- generic content blocks

---

## When not to use Card

Do not use `Card` for:

- single isolated labels
- purely decorative boxes
- individual metrics when `MetricCard` is more appropriate
- metric groups when `MetricGrid` is more appropriate
- individual alerts when `AlertCard` is more appropriate
- alert groups when `PriorityList` is more appropriate
- individual actions when `ActionCard` is more appropriate
- action groups when `ActionList` is more appropriate
- structured status context when `StatusSummary` is more appropriate
- customer context when `CustomerStatusCard` is more appropriate
- renewal context when `RenewalRiskSummary` is more appropriate
- connectivity context when `ConnectivityCoverageCard` is more appropriate
- value proof when `ValueProofCard` is more appropriate
- asset intelligence when `ConnectivityCoverageCard` or a decision component is more appropriate
- proof maturity when `ValueProofCard` is more appropriate
- raw Health facts and Intelligence interpretation collapsed into the same visual layer
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation
- action creation flows when `CreateActionDialog` is more appropriate
- buttons or interactive controls by themselves
- large unstructured data dumps

Use other components instead:

| Need | Use |
| --- | --- |
| Show short status or metadata | `Badge` |
| Trigger an action | `Button` |
| Show a decision metric | `MetricCard` |
| Arrange metrics | `MetricGrid` |
| Show a risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Show a recommended action | `ActionCard` |
| Group recommended actions | `ActionList` |
| Show structured status context | `StatusSummary` |
| Show customer context | `CustomerStatusCard` |
| Show connectivity coverage | `ConnectivityCoverageCard` |
| Show renewal context | `RenewalRiskSummary` |
| Show value proof | `ValueProofCard` |
| Create a follow-up action | `CreateActionDialog` |

## Trust-sensitive grouping rules

Use `Card` for trust-sensitive context only when the card makes the context
clearer without replacing more specific components.

A trust-sensitive card should make clear:

```txt
what is known
what is assumed
what is incomplete
what source or scope limits apply
what still needs review
```

Good card purposes:

```txt
Source assumptions
Review assumptions
Proof gap notes
Customer discussion context
Asset visibility context
```

Do not use a card to make weak evidence look stronger than it is.

Do not use visual grouping to hide uncertainty, proof gaps, source limits or
missing ownership.

---

## Asset-heavy card limits

For asset-heavy screens, `Card` may explain supporting context, but it should
not replace asset intelligence patterns or decision components.

Use `Card` only for short supporting context such as:

```txt
why asset visibility is partial
which asset assumptions need review
what source limits affect interpretation
what customer context explains the asset situation
```

Do not use generic cards to recreate:

```txt
ConnectivityCoverageCard
AlertCard
MetricCard
StatusSummary
CustomerStatusCard
```

If the section needs to show connected, partially connected and non-connected
assets, use `ConnectivityCoverageCard` or an appropriate decision component.

If the section includes raw Health facts and Intelligence interpretation, keep
them visually and textually distinguishable.

---

## Proof discipline in cards

A card may provide context around proof, but it should not replace
`ValueProofCard` when the section is primarily about value proof.

When using `Card` for proof-related context, distinguish:

```txt
expected outcome
technical outcome
internal proof
customer-ready proof
proof gap
```

Do not use a generic card to present expected outcomes as proven value.

Do not use a generic card to make technical outcomes or internal proof look
customer-ready without validation.

If proof maturity is the main point of the section, use `ValueProofCard`.

## Content rules

A card should answer one focused question.

Examples:

```txt
What context should the team know?
What assumptions should be reviewed?
What supporting information explains this section?
What short notes should be kept with this screen?
```

Do not mix unrelated topics in one card.

If the card contains too many unrelated elements, split it into several sections
or use a more specific component.

---

## Layout rules

Use simple internal layouts inside a card.

Allowed patterns:

```txt
vertical stack
small badge row
two-column summary
short list
compact action group
short note block
```

Avoid complex nested layouts.

Avoid deeply nested cards.

Avoid turning a card into a full page inside the page.

Do not use `Card` to recreate layouts that already exist as business patterns.

Do not use nested or visually heavy cards to make uncertain evidence look more
complete, more validated or more customer-ready than it is.

---

## Good examples

### Supporting context card

```tsx
<Card
  title="Discussion context"
  description="Supporting notes for the next customer meeting."
>
  <div className="space-y-3">
    <div className="flex flex-wrap gap-2">
      <Badge tone="warning">Connectivity partial</Badge>
      <Badge tone="warning">Source strength: partial</Badge>
      <Badge tone="neutral">Renewal in 62 days</Badge>
    </div>
    <p className="text-sm text-(--ec-color-text-secondary)">
      The customer should be informed that monitoring coverage is partial before
      the next review. Source scope and source strength should be checked before
      the recommendation is used in a customer discussion. The service team should
      align on ownership before the customer discussion.
    </p>
  </div>
</Card>
```

### Review assumptions card

```tsx
<Card
  title="Review assumptions"
  description="Items to confirm before preparing the customer-facing summary."
>
  <ul className="space-y-2 text-sm text-(--ec-color-text-secondary)">
    <li>Confirm whether disconnected assets are customer-network related.</li>
    <li>Check source strength before using asset intelligence in the summary.</li>
    <li>Validate the latest closed actions with the service manager.</li>
    <li>Check whether overdue actions need escalation before the review.</li>
  </ul>
</Card>
```

---

## Better than Card examples

Do not use a generic card for customer status when the pattern exists.

Avoid:

```tsx
<Card title="Customer status">
  <div>...</div>
</Card>
```

Prefer:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  csm="Sarah Moreau"
  coverage="68% connected"
/>
```

Do not use a generic card for value proof when the pattern exists.

Avoid:

```tsx
<Card title="Service value proof">
  <div>...</div>
</Card>
```

Prefer:

```tsx
<ValueProofCard
  period="Last 90 days"
  customerObjective="Improve service visibility before renewal"
  proofStatus="Customer-ready summary incomplete"
  proofPoints={[
    {
      label: "Closed actions",
      value: "12 service actions closed, including 3 high-priority actions.",
    },
  ]}
/>
```

Do not use a generic card for connectivity coverage when the pattern exists.

Avoid:

```tsx
<Card title="Connectivity coverage">
  <div>...</div>
</Card>
```

Prefer:

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  monitoringStatus="Partial monitoring coverage"
  lastUpdate="18 hours ago"
  badges={[{ label: "Source strength: partial", tone: "warning" }]}
/>
```

---

## Bad example

Do not create a vague card:

```tsx
<Card title="Details" description="Some information">
  <p>Data goes here.</p>
</Card>
```

This is weak because:

- the title is generic
- the description is generic
- the content has no clear purpose
- the card does not support a user decision
- it does not expose source, scope, uncertainty or proof maturity

---

## Relationship with other components

### Card and Badge

Use `Badge` inside a card only when a generic grouped section needs compact
metadata.

Prefer business pattern `badges` props when available.

### Card and MetricCard

Use `MetricCard` for individual key metrics.

Use `MetricGrid` to arrange multiple metrics.

Use `Card` only to provide broader supporting context around metrics.

### Card and AlertCard

Use `AlertCard` for individual risks or blockers.

Use `PriorityList` to group risks or blockers.

Use `Card` only if explaining alert context that does not fit an alert.

### Card and ActionCard

Use `ActionCard` for individual actions.

Use `ActionList` to group actions.

Use `Card` only for supporting notes around actions.

### Card and StatusSummary

Use `StatusSummary` when the section is primarily structured label/value
context.

Use `Card` when the section is more explanatory or custom.

### Card and evidence components

Use `Card` for supporting context only.

Use decision components or business patterns when the section must show source
scope, source strength, proof status, ownership, recommendations or validation
state.

`Card` should not collapse observed facts, Intelligence interpretation,
recommendations and actions into one generic block.

### Card and business patterns

Use business patterns instead of generic `Card` when the section intent is
customer status, connectivity coverage, asset intelligence, renewal risk,
value proof or action creation.

---

## Nesting rules

Avoid nesting `Card` inside another `Card` unless absolutely necessary.

Nested cards can make the hierarchy unclear.

Prefer simple sections inside cards.

If nested grouping is needed, consider using headings, spacing and simple
wrappers instead.

Better still, check whether a decision component or business pattern already
solves the structure.

---

## Anti-patterns

Do not generate:

- decorative cards without purpose
- cards titled `Details`, `Data`, `Info` or `Misc`
- many cards with equal visual importance
- deeply nested cards
- cards used as buttons
- cards used as badges
- cards containing unrelated topics
- cards overloaded with raw data
- cards that hide source scope, source strength, partial visibility or proof status
- cards that present non-connected assets as live-monitored
- cards that collapse raw Health facts and Intelligence interpretation into one layer
- cards that present expected outcomes as proven value
- cards that present technical outcomes or internal proof as customer-ready proof without validation
- cards that use visual grouping to make weak evidence look stronger than it is
- cards recreating existing business patterns
- cards recreating metric, alert or action components
- custom card components
- local card implementations
- local card wrappers
- internal imports from package files
- inline-styled raw card-like containers

---

## Review checklist

After generation, verify:

- every `Card` is imported from `design-system-ai-lab`
- every `Card` has a clear purpose
- card titles are meaningful
- descriptions clarify context when used
- card content is related and grouped logically
- trust-sensitive cards expose source, scope, uncertainty or proof maturity when relevant
- asset-heavy cards do not replace `ConnectivityCoverageCard` or relevant decision components
- raw Health facts and Intelligence interpretation are not collapsed into one generic layer
- expected outcomes are not presented as proven value
- technical outcomes and internal proof are not presented as customer-ready proof without validation
- cards are not used as decoration
- cards are not overloaded with unrelated data
- business patterns are used instead of generic cards when appropriate
- `ConnectivityCoverageCard` is used instead of generic cards for connectivity coverage
- `ValueProofCard` is used instead of generic cards for proof maturity
- `MetricCard` and `MetricGrid` are used for metrics
- `AlertCard` and `PriorityList` are used for risks
- `ActionCard` and `ActionList` are used for actions
- `StatusSummary` is used for structured status context
- no local card replacement was created
- no local card wrapper was created
- no internal package import is used

---

## Final principle

A `Card` should create clarity through grouping without becoming a substitute
for evidence, decision logic or business patterns.

If the grouping does not help the user understand or decide, do not generate the
card.

If a more specific component or business pattern exists, use it before `Card`.

If the card hides uncertainty, source limits, proof gaps or the distinction
between observed facts and interpretation, revise the structure before
accepting the screen.
