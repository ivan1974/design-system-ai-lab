# PageHeader Guidelines

## Purpose

Use `PageHeader` to introduce the main screen and clarify the user goal.

A page header should help the user immediately understand:

- where they are
- what the screen is for
- what decision or task the screen supports
- what they should do next

`PageHeader` is the entry point of the screen.

It should orient the user before they read metrics, risks, actions or business
summaries.

For trust-sensitive screens, the header should also frame what kind of review
the user is entering: monitoring review, asset intelligence review, source
evidence review, proof gap review or customer-ready value preparation.

---

## Import

Import `PageHeader` from the package root:

```tsx
import { PageHeader } from "design-system-ai-lab";
```

If other design system components are needed, import them from the same package
root:

```tsx
import {
  Button,
  CreateActionDialog,
  PageHeader,
  SectionHeader,
} from "design-system-ai-lab";
```

Do not import `PageHeader` from internal package paths.

Do not recreate `PageHeader` locally.

Do not create custom page header wrappers.

---

## Component role

Use `PageHeader` at the top of a main screen.

It should define:

- the screen title
- the screen purpose
- the user decision context
- the primary action when relevant
- the review or validation context when the screen supports a critical decision

Use it once per main screen.

Do not use `PageHeader` for every section.

Use `SectionHeader` for sections inside the page.

`PageHeader` should not claim that a recommendation, asset intelligence signal
or value proof is already validated. It should orient the user toward review,
evidence, action planning or customer-ready preparation.

---

## Props

Use the component with these props:

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>
```

Expected props:

```txt
title
description
actions
className
```

Use `title` for the screen name.

Use `description` to explain the user goal or decision context.

Use `actions` for the main screen-level action when relevant.

Use `className` only for layout adjustments, not to redefine the page header
style.

---

## Title rules

The title should be short and specific.

Good titles:

```txt
Customer monitoring
Renewal risk review
QBR preparation
Service action plan
Connectivity review
Customer value summary
Value proof preparation
Alert triage
```

Bad titles:

```txt
Dashboard
Overview
Home
Data
Customer page
Information
Report
```

The title should tell the user what kind of work the screen supports.

Avoid generic titles that could apply to any dashboard.

---

## Description rules

The description should explain the user goal or decision context.

Good descriptions:

```txt
Understand customer status, risks and next actions.
Review renewal signals and prepare mitigation actions.
Prepare customer-ready proof points for the next QBR.
Identify connectivity gaps and decide what to do next.
Review asset visibility, source strength and recommended follow-up actions.
Check source evidence and proof gaps before preparing the customer-ready summary.
Review alert severity and launch the right follow-up actions.
```

Bad descriptions:

```txt
This is a dashboard.
Here is some information.
View all customer data.
Use this page to see things.
```

Descriptions should support actionability, not repeat the title.

For asset-heavy screens, mention asset scope, connectivity, source evidence or
visibility limits when they define the screen goal.

For value proof screens, mention whether the screen is for expected outcomes,
proof gap review, internal proof consolidation or customer-ready proof
preparation.

---

## Action rules

Use the `actions` prop for the main screen-level action.

The action should usually be:

- `CreateActionDialog` when the main action creates a follow-up or mitigation action
- `Button` when the main action is a simple direct action
- review-oriented actions when the screen supports a critical decision

Preferred when creating an action:

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>
```

Acceptable for a simple screen action:

```tsx
<PageHeader
  title="Renewal risk review"
  description="Review renewal signals and prepare mitigation actions."
  actions={<Button>Review mitigation plan</Button>}
/>
```

Good actions:

```txt
Create action
Create mitigation action
Plan follow-up
Review risk
Prepare QBR summary
Review mitigation plan
Review asset recommendation
Review source evidence
Review proof gap
Validate with expert
```

Avoid vague actions:

```txt
OK
Submit
More
Click here
Action
Go
Confirm AI recommendation
Validate asset intelligence
Prove value
Approve expected outcome
```

Do not put several competing primary buttons in the header.

Header actions should describe what the user will do next, not what the system
has supposedly validated. Avoid actions that imply AI validation, automatic
confirmation or proven value without visible evidence and human review.

---

## Trust-sensitive screen rules

Use `PageHeader` to orient the user toward the correct review posture.

Good trust-sensitive screen framing:

```txt
Review source evidence before validating the recommendation.
Check asset visibility and source strength before planning follow-up actions.
Review proof gaps before preparing customer-ready value evidence.
```

Avoid framing that implies the screen has already validated a critical decision:

```txt
AI-validated recommendations.
Proven customer value.
Confirmed asset intelligence.
Fully monitored installed base.
```

The header should introduce the decision context. The detailed evidence should
remain in the business patterns and decision components below the header.

---

## Asset-heavy screen rules

For asset-heavy screens, the title and description should make the screen scope
understandable without implying complete visibility.

Good titles:

```txt
Connectivity review
Asset visibility review
Asset recommendation review
Monitoring coverage review
```

Good descriptions:

```txt
Review connected, partially connected and non-connected assets before planning follow-up actions.
Check source scope and source strength before using asset intelligence in the customer discussion.
```

Do not use the header to imply that non-connected assets are live-monitored or
that partial visibility represents the full installed base.

---

## Value proof screen rules

For value proof screens, the header should clarify whether the user is reviewing
expected outcomes, technical outcomes, internal proof, customer-ready proof or
proof gaps.

Good titles:

```txt
Value proof preparation
Proof gap review
Customer value summary
Customer-ready proof review
```

Good descriptions:

```txt
Review proof gaps before preparing the customer-ready value summary.
Consolidate internal proof points before the QBR discussion.
Prepare customer-ready proof points from validated service evidence.
```

Do not use the header to present expected outcomes as proven value.

Do not use the header to present technical outcomes or internal proof as
customer-ready proof without validation.

---

## When to use PageHeader

Use `PageHeader` for:

- main screens
- dashboard-like decision screens
- review screens
- preparation screens
- monitoring screens
- action planning screens
- renewal risk screens
- QBR preparation screens
- alert triage screens
- value proof screens
- asset intelligence review screens
- source evidence review screens
- proof gap review screens

Examples:

```txt
Customer monitoring screen
Renewal risk review screen
QBR preparation screen
Connectivity improvement screen
Executive service summary screen
Value proof preparation screen
Alert triage workflow screen
Asset visibility review screen
Source evidence review screen
Proof gap review screen
```

---

## When not to use PageHeader

Do not use `PageHeader` for:

- small sections inside a page
- individual cards
- dialogs
- alerts
- action groups
- repeated subsections
- nested content blocks

Use `SectionHeader` for page sections.

Use `Card` titles for generic card content.

Use business pattern titles when the section is represented by a pattern such as
`CustomerStatusCard`, `RenewalRiskSummary`, `ConnectivityCoverageCard` or
`ValueProofCard`.

---

## Placement rules

Place `PageHeader` near the top of the screen.

Recommended customer monitoring structure:

```txt
main
→ PageHeader
→ CustomerStatusCard
→ MetricGrid with MetricCard items
→ ConnectivityCoverageCard when relevant
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Recommended renewal risk review structure:

```txt
main
→ PageHeader
→ RenewalRiskSummary
→ ValueProofCard
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

Do not place `PageHeader` after metrics, alerts or actions.

The user should see the screen purpose before reading detailed content.

For trust-sensitive screens, place the evidence-bearing components immediately
after the header: `CustomerStatusCard`, `ConnectivityCoverageCard`,
`RenewalRiskSummary`, `ValueProofCard`, `MetricGrid`, `PriorityList` or
`ActionList` depending on the screen goal.

---

## Asset intelligence screen structure

Recommended asset intelligence structure:

```txt
main
→ PageHeader
→ customer, site or installed base context
→ ConnectivityCoverageCard or source/scope context
→ MetricGrid with key asset metrics
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

The header should introduce the review. It should not carry the detailed source
evidence alone.

---

## Value proof screen structure

Recommended value proof structure:

```txt
main
→ PageHeader
→ RenewalRiskSummary or customer context
→ ValueProofCard
→ MetricGrid with proof readiness metrics
→ ActionList with follow-up actions
```

The header should clarify the preparation goal. `ValueProofCard` should carry
the proof maturity, proof gaps and customer-ready evidence.

---

## Good example

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>
```

This is good because:

- the title names the screen
- the description explains the user goal
- the action is explicit and useful
- the action uses the dedicated business pattern for action creation

---

## Asset intelligence review example

```tsx
<PageHeader
  title="Asset visibility review"
  description="Review asset scope, connectivity gaps and source strength before planning follow-up actions."
  actions={<Button>Review asset recommendation</Button>}
/>
```

This is good because:

- the title frames the screen as a review, not a validation
- the description mentions scope, connectivity and source strength
- the action invites review before action

---

## Renewal review example

```tsx
<PageHeader
  title="Renewal risk review"
  description="Review renewal exposure, value proof gaps and mitigation actions before the customer discussion."
  actions={
    <CreateActionDialog
      trigger={<Button>Create mitigation action</Button>}
      title="Create mitigation action"
      description="Add an action to reduce renewal risk before the customer meeting."
      confirmLabel="Save mitigation action"
    />
  }
/>
```

---

## QBR preparation example

```tsx
<PageHeader
  title="QBR preparation"
  description="Prepare customer-ready proof points, risks and recommended next actions."
  actions={<Button>Prepare summary</Button>}
/>
```

---

## Proof gap review example

```tsx
<PageHeader
  title="Proof gap review"
  description="Check source evidence and proof gaps before preparing the customer-ready value summary."
  actions={<Button>Review proof gap</Button>}
/>
```

This is good because:

- the title clarifies that proof is not complete yet
- the description keeps source evidence and proof gaps visible
- the action does not claim that value is already proven

---

## Bad example

```tsx
<PageHeader
  title="Dashboard"
  description="View all customer information."
  actions={<Button>More</Button>}
/>
```

This is weak because:

- the title is generic
- the description is too broad
- the action is vague
- the user goal is unclear
- it does not expose whether the screen is for review, validation or preparation

---

## Relationship with other components

### PageHeader and Button

Use `Button` in `actions` for a simple main screen-level action.

The button label should explain what will happen.

For critical decisions, use review-oriented button labels such as `Review source
evidence`, `Review asset recommendation`, `Review proof gap` or `Validate with
expert`.

Do not use header actions that claim AI validation or proven value without
visible evidence.

### PageHeader and CreateActionDialog

Use `CreateActionDialog` in `actions` when the main next step is creating a
follow-up, mitigation or customer action.

This is preferred over manually building an action creation `Dialog` in the
header.

Prefer `CreateActionDialog` when the screen-level action needs owner, due date,
priority, asset context or proof follow-up context.

### PageHeader and Dialog

A `PageHeader` action may trigger a `Dialog` when the main task is a short
creation or confirmation flow.

Prefer `CreateActionDialog` when the task is action creation.

Use raw `Dialog` only for a custom focused flow.

### PageHeader and SectionHeader

Use `PageHeader` once for the screen.

Use `SectionHeader` for sections inside the screen.

Do not use several `PageHeader` components as section headings.

### PageHeader and Card

Use `PageHeader` for screen context.

Use `Card` for generic grouped information.

Do not use cards to replace the main page header.

### PageHeader and business patterns

Use the header to introduce the screen goal.

Use business patterns immediately after the header when they provide the main
context:

- `CustomerStatusCard` for customer monitoring screens
- `RenewalRiskSummary` for renewal risk review screens
- `ConnectivityCoverageCard` for coverage review screens
- `ValueProofCard` for value proof preparation screens
- `MetricGrid` with `MetricCard` items for key decision metrics
- `PriorityList` with `AlertCard` items for risks and blockers
- `ActionList` with `ActionCard` items for next actions

### PageHeader and evidence components

`PageHeader` orients the user.

Evidence-bearing components below the header should show source scope, source
strength, freshness, proof status, asset scope, connectivity status,
recommendations and actions when relevant.

Do not use the header description as the only place where trust-critical limits
or proof gaps are visible.

---

## Content quality rules

A `PageHeader` should answer:

1. What is this screen?
2. What is the user trying to do?
3. Is this a review, validation, preparation or action-planning screen?
4. What is the main next action?

If the title or description does not answer these questions, refine the header.

For trust-sensitive screens, the header should not overclaim certainty. It
should make the review posture clear before the user reads the detailed
evidence.

---

## Anti-patterns

Do not generate:

- generic titles such as `Dashboard` or `Overview`
- vague descriptions
- vague action labels
- header actions that claim AI validation
- header actions that present expected outcomes as proven value
- titles or descriptions that imply complete visibility when coverage is partial
- titles or descriptions that present technical outcomes or internal proof as customer-ready proof without validation
- descriptions that hide source scope, source strength, proof gaps or validation limits
- several competing primary actions in the header
- multiple `PageHeader` components on the same main screen
- `PageHeader` inside cards
- `PageHeader` inside dialogs
- `PageHeader` used as a section heading
- custom page header components
- local page header implementations
- local page header wrappers
- internal imports from package files
- inline-styled custom header containers replacing `PageHeader`

---

## Review checklist

After generation, verify:

- `PageHeader` is imported from `design-system-ai-lab`
- no local page header replacement was created
- no local page header wrapper was created
- no internal package import is used
- the screen has one main `PageHeader`
- the title is specific
- the description explains the user goal
- the description clarifies review, validation, preparation or action-planning context when relevant
- asset-heavy screen headers do not imply complete visibility when coverage is partial
- value proof headers do not present expected outcomes as proven value
- the main action is explicit when present
- header actions do not claim AI validation or automatic confirmation
- header actions use review-oriented labels for critical decisions
- there are not several competing primary actions in the header
- the header appears at the top of the screen
- the header helps the user understand what to do next
- `SectionHeader` is used for section headings instead of repeated `PageHeader`

---

## Final principle

A `PageHeader` should orient the user before they read the screen.

If the header could apply to any generic dashboard, rewrite it.

If the header makes a critical recommendation, asset intelligence signal or
value proof look automatically validated, rewrite it before accepting the
screen.
