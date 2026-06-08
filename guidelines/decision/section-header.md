# SectionHeader Guidelines

## Purpose

Use `SectionHeader` to introduce a section inside a generated screen.

A section header should make the section purpose, decision context and available
review actions clear before the user reads the section content.

A section header is not a page title.

A section header is not a generic text block.

A section header is not a place to hide recommendation rationale, proof details
or action ownership.

In generated screens, `SectionHeader` should be used by decision layouts and
section-level components such as `PriorityList`, `ActionList` or similar grouped
content when the section needs a title, description or section-level actions.

---

## Import

Import `SectionHeader` from the package root:

```tsx
import { SectionHeader } from "design-system-ai-lab";
```

Do not import `SectionHeader` from internal package paths.

Do not recreate `SectionHeader` locally.

Do not create custom section header wrappers.

Do not manually rebuild section headers with raw `header`, `div`, `h2` or `p`
elements when `SectionHeader` fits the need.

---

## Component role

Use `SectionHeader` when the user needs to understand:

- what this section is about
- why this section matters in the current decision context
- what kind of items the section contains
- what the user should review, validate or prepare in the section
- which section-level action is available, if any

`SectionHeader` should orient the user.

It should not replace the content components that carry the actual decision
information.

Use business and decision components for the section body:

```txt
MetricGrid
PriorityList
RecommendationCard
ActionList
StatusSummary
ConnectivityCoverageCard
ValueProofCard
```

---

## Props

Use the component with these props:

```tsx
<SectionHeader
  title="Priority alerts"
  description="Risks and blockers requiring source review, validation or customer follow-up."
  actions={<Button variant="secondary">Review risks</Button>}
/>
```

Expected props:

```txt
title
description
actions
className
```

Use `title` to name the section.

Use `description` to explain the decision context, not to repeat the title.

Use `actions` for section-level review or creation actions.

Use `className` only for layout composition, not to redefine the component
styling.

---

## Title rules

Use concise, specific titles.

Good titles:

```txt
Priority alerts
Asset visibility gaps
Customer-ready proof blockers
Recommended actions
Proof gap closure actions
Human validation actions
Renewal risk review
Service value proof
Customer situation
Source evidence review
```

Bad titles:

```txt
Section
Items
Data
Stuff
Important
AI-approved actions
Automatic decisions
Proven value
```

A title should identify the section content and its role.

Do not use vague titles that force the user to inspect every card to understand
the section.

---

## Description rules

Use the description to explain why the section matters.

Good descriptions:

```txt
Risks and blockers requiring source review, validation or customer follow-up.
Actions requiring ownership before the next customer touchpoint.
Proof gaps that may weaken the renewal discussion.
Recommendations that need expert validation before customer use.
Current account context, service coverage and monitoring status.
```

Bad descriptions:

```txt
Here is some data.
The AI found these items.
Everything is ready.
Value has been proven.
Review this.
```

Descriptions should be short and decision-oriented.

Do not use the description to carry evidence, full recommendation rationale,
proof maturity or action ownership. Use the appropriate card or pattern for that
content.

---

## Section action rules

Use `actions` for section-level actions only.

Good action labels:

```txt
Review risks
Review source evidence
Review proof gaps
Validate with expert
Review action plan
Create action
Prepare value summary
Open details
```

Avoid action labels such as:

```txt
Confirm AI recommendation
Approve asset intelligence
Prove value
Validate automatically
Do it
```

Section actions should be review-oriented when the section involves source
evidence, human validation, customer-ready proof, asset intelligence or renewal
risk.

Use `CreateActionDialog` when the section-level action creates a new action.

Use `ActionCard` or `ActionList` when the section body needs assigned internal
work with owner, due date and priority.

---

## Trust-sensitive section rules

For trust-sensitive screens, `SectionHeader` should frame the section without
creating false confidence.

Trust-sensitive sections may involve:

```txt
source evidence
source strength
partial visibility
asset visibility gaps
human validation
proof maturity
customer-ready evidence
AI-assisted interpretation
```

Good section framing:

```txt
Risks that require expert review before customer use.
Source and validation gaps to review before the customer-ready summary.
Recommendations that need proof review before the renewal discussion.
Actions to close visibility and validation gaps before customer follow-up.
```

Avoid section framing that implies automatic approval or proven value without
visible evidence.

---

## Asset-heavy section rules

For asset-heavy screens, use `SectionHeader` to clarify what asset scope or
visibility concern the section addresses.

Good asset-heavy titles:

```txt
Asset visibility gaps
Connectivity blockers
Critical asset risks
Asset recommendation review
Connectivity recovery actions
```

Good asset-heavy descriptions:

```txt
Risks that may limit confidence in the current service status.
Actions to close connectivity and validation gaps before the next customer discussion.
Recommendations that require expert review before customer use.
```

Do not use `SectionHeader` to imply that non-connected assets are live-monitored.

Do not use section wording that presents Intelligence interpretation as
source-system truth.

---

## Value proof section rules

For value proof screens, use `SectionHeader` to distinguish proof readiness,
proof gaps and customer-ready evidence.

Good value proof titles:

```txt
Customer-ready proof blockers
Proof gap closure actions
Value proof preparation
Service value proof
Renewal proof follow-up
```

Good value proof descriptions:

```txt
Proof gaps that may weaken the renewal discussion.
Actions needed before preparing customer-ready value evidence.
Service outcomes and proof points that need review before customer use.
```

Do not use section titles or descriptions that present expected outcomes as
proven value.

Do not use section titles or descriptions that present internal proof as
customer-ready proof without validation.

---

## Human validation rules

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization decisions should keep human validation
visible.

Use section descriptions and actions that preserve accountability.

Good language:

```txt
Review before customer use
Validate with expert
Proof review needed
Source evidence review
Human validation actions
```

Avoid language such as:

```txt
AI-approved
AI confirmed
Automatically validated
Proven by AI
```

`SectionHeader` may introduce validation work, but it should not claim that the
system has approved a critical decision.

---

## When to use SectionHeader

Use `SectionHeader` for:

- section titles inside generated screens
- grouped decision content
- priority risk sections
- action plan sections
- recommendation review sections
- customer context sections
- value proof sections
- asset visibility sections
- source evidence review sections
- human validation sections

`SectionHeader` is often used internally by components such as `PriorityList` and
`ActionList`.

---

## When not to use SectionHeader

Do not use `SectionHeader` for:

- page-level titles
- individual card titles
- metrics
- alerts
- recommendations
- assigned actions
- long explanations
- evidence references
- proof maturity details
- generic decorative headings

Use other components instead:

| Need | Use |
| --- | --- |
| Page title and page actions | `PageHeader` |
| Generic content grouping | `Card` |
| Individual metric | `MetricCard` |
| Group metrics | `MetricGrid` |
| Risk or blocker | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Recommendation rationale | `RecommendationCard` |
| Assigned internal task | `ActionCard` |
| Group assigned internal tasks | `ActionList` |
| Structured status or metadata | `StatusSummary` |
| Connectivity coverage and source limits | `ConnectivityCoverageCard` |
| Proof maturity and proof gaps | `ValueProofCard` |

---

## Placement rules

Place `SectionHeader` directly above the section content it introduces.

Good placement:

```txt
SectionHeader
→ MetricGrid
```

```txt
SectionHeader
→ PriorityList body with AlertCard items
```

```txt
SectionHeader
→ ActionList body with ActionCard items
```

Do not place a section header far away from the content it describes.

Do not use multiple nested section headers for the same section.

Do not place section-level actions where they could be confused with individual
card actions.

---

## Relationship with PageHeader

`PageHeader` introduces the whole screen.

`SectionHeader` introduces one section inside the screen.

Use `PageHeader` for:

```txt
screen title
screen-level description
screen-level primary actions
```

Use `SectionHeader` for:

```txt
section title
section-level description
section-level review actions
```

Do not use `SectionHeader` as the main page heading.

Do not use `PageHeader` for every subsection.

---

## Relationship with PriorityList and ActionList

`PriorityList` and `ActionList` may render `SectionHeader` internally when their
`title`, `description` or `actions` props are provided.

Do not add a separate `SectionHeader` immediately above `PriorityList` or
`ActionList` if the list already receives `title`, `description` and `actions`.

Good:

```tsx
<PriorityList
  title="Asset visibility gaps"
  description="Risks that may limit confidence in the current service status."
>
  <AlertCard ... />
</PriorityList>
```

Avoid:

```tsx
<SectionHeader
  title="Asset visibility gaps"
  description="Risks that may limit confidence in the current service status."
/>
<PriorityList>
  <AlertCard ... />
</PriorityList>
```

Use the list props when the header belongs to the list.

---

## Relationship with RecommendationCard

Use `SectionHeader` to introduce a group or area of recommendations.

Use `RecommendationCard` to explain the rationale for a specific recommendation.

Good pattern:

```txt
SectionHeader: Recommendations requiring review
RecommendationCard: Recover connectivity before the customer review
RecommendationCard: Prepare customer-ready proof before renewal discussion
```

Do not put the full recommendation rationale in the section description.

Do not use section actions to approve recommendations automatically.

---

## Good example

```tsx
<SectionHeader
  title="Customer-ready proof blockers"
  description="Proof gaps that may weaken the renewal discussion."
  actions={<Button variant="secondary">Review proof gaps</Button>}
/>
```

This is good because:

- the title is specific
- the description explains the decision context
- the action is review-oriented
- the section does not claim that value is already proven

---

## Asset-heavy example

```tsx
<SectionHeader
  title="Asset visibility gaps"
  description="Risks that may limit confidence in the current service status."
  actions={<Button variant="secondary">Review source evidence</Button>}
/>
```

This is good because:

- the section is scoped to asset visibility
- the description does not imply complete monitoring coverage
- the action supports source review before customer use

---

## Bad example

Do not use vague section headers:

```tsx
<SectionHeader
  title="Important"
  description="The AI found these things."
  actions={<Button variant="secondary">Approve</Button>}
/>
```

This is weak because:

- the title does not explain the section
- the description relies on AI authority instead of decision context
- the action implies approval without validation

---

## Content quality rules

A section header should answer:

1. What section is this?
2. Why does it matter here?
3. What kind of items does the section contain?
4. What should the user review, validate or prepare?
5. Is the section action safe and specific?

If the header does not clarify the section purpose, rewrite it before accepting
the screen.

---

## Anti-patterns

Do not generate:

- manually rebuilt section headers
- local section header implementations
- local section header wrappers
- internal imports from package files
- vague titles such as `Section`, `Items` or `Important`
- section descriptions that repeat the title
- section descriptions that contain full recommendation rationale
- section descriptions that contain evidence references or proof details
- section actions that claim AI validation or automatic approval
- section titles that present expected outcomes as proven value
- section titles that present internal proof as customer-ready proof without validation
- section headers used as page headers
- duplicate section headers above `PriorityList` or `ActionList`

---

## Review checklist

After generation, verify:

- `SectionHeader` is imported from `design-system-ai-lab`
- no local section header replacement was created
- no local section header wrapper was created
- no internal package import is used
- the title is specific
- the description explains the section purpose when needed
- the section action is safe, specific and review-oriented when needed
- the header is placed directly above the content it introduces
- the header does not duplicate a list header already provided through props
- the description does not carry full recommendation rationale
- the description does not hide evidence, proof or validation details that belong in cards
- the header does not claim AI validation or automatic approval
- the header does not present expected outcomes as proven value
- the header does not present internal proof as customer-ready proof without validation

---

## Final principle

A `SectionHeader` should make the next section easier to understand and review.

If the header does not clarify the section purpose, decision context or safe
section-level action, revise it before accepting the screen.
