# Make Kit Guidelines — Design System AI Lab

## Purpose

These guidelines explain how Figma Make should use `design-system-ai-lab` to
generate coherent, reviewable and reusable product interfaces.

The goal is not to create free-form UI.

The goal is to generate screens by composing the approved package components,
forms, decision components and business patterns.

Figma Make must behave as a composition assistant working inside a governed
design system.

---

## Source of truth

The design system package is the source of truth for UI components and styles.

Package name:

```txt
design-system-ai-lab
```

Required style import:

```tsx
import "design-system-ai-lab/styles.css";
```

Component imports must come from the package root:

```tsx
import {
  Button,
  CustomerStatusCard,
  MetricGrid,
  PageHeader,
} from "design-system-ai-lab";
```

Do not import components from internal package paths.

Allowed:

```tsx
import { Button } from "design-system-ai-lab";
```

Not allowed:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

Do not create local clones of the package.

Do not create:

```txt
packages/design-system-ai-lab/
```

---

## Composition order

Figma Make should use the design system in this order:

1. Business patterns when they match the screen intent.
2. Decision components for screen structure.
3. Generic components for reusable UI blocks.
4. Form components for dialogs and input flows.
5. Custom markup only when no existing component or pattern fits.

This order reduces improvisation and makes generated screens easier to review.

---

## Components

Generic UI components:

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `MetricCard`
- `PageHeader`

Use these components for general interface composition.

Prefer business patterns when the requested section matches an existing pattern.

---

## Form components

Form primitives:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

Use these components for generated forms and dialogs.

Do not generate raw inline-styled form controls.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Avoid:

```tsx
<input style={{ height: "40px", borderRadius: "6px" }} />
```

---

## Decision components

Decision-oriented composition components:

- `ActionCard`
- `ActionList`
- `AlertCard`
- `MetricGrid`
- `PriorityList`
- `SectionHeader`
- `StatusSummary`

Use these components to structure screens around:

- context
- metrics
- risks
- recommendations
- next actions

Rules:

- Use `MetricGrid` to arrange decision-relevant `MetricCard` items.
- Use `PriorityList` to group alerts and risks.
- Use `ActionList` to group recommended or planned actions.
- Use `SectionHeader` for section titles and section-level actions.
- Use `StatusSummary` for structured context and label/value metadata.
- Every `AlertCard` must include a recommendation.
- Every `ActionCard` must include owner, due date and priority.

---

## Business patterns

Business patterns are the preferred building blocks for generated screens:

- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerStatusCard`
- `RenewalRiskSummary`
- `ValueProofCard`

Figma Make should use these patterns before rebuilding equivalent sections with
raw `Card`, `Badge`, `div`, `dt` and `dd` markup.

### Pattern selection rules

Use `CustomerStatusCard` for:

- customer identity
- plan or contract context
- CSM or owner context
- assets covered
- coverage status

Use `ConnectivityCoverageCard` for:

- monitoring coverage
- disconnected assets
- critical disconnected assets
- recovery context
- last update information

Use `RenewalRiskSummary` for:

- renewal preparation
- renewal readiness
- value proof status
- recommendations reviewed
- overdue actions

Use `ValueProofCard` for:

- service outcomes
- customer-ready proof points
- completed actions
- recommendations followed
- renewal or QBR preparation

Use `CreateActionDialog` for:

- creating follow-up actions
- creating mitigation actions
- assigning ownership
- creating customer-facing next steps

---

## Component roles

### PageHeader

Use `PageHeader` at the top of each main screen.

It should communicate:

- what the screen is about
- what the user is trying to accomplish
- the main action when relevant

Example:

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>
```

---

### Button

Use `Button` for actions.

Available variants:

- `primary`: main action
- `secondary`: contextual action
- `ghost`: low-emphasis action
- `danger`: destructive action

Rules:

- Use only one primary button per screen section.
- Do not use `danger` unless the action is destructive.
- Labels must be explicit and action-oriented.
- Use `Button` directly as a `Dialog` trigger.
- Do not create local wrappers such as `ForwardedButton`.

Good labels:

- Create action
- Review plan
- Open details
- Check connectivity
- Prepare value summary

Bad labels:

- OK
- Submit
- Click here
- More

---

### Badge

Use `Badge` for status, tone or metadata.

Available tones:

- `neutral`: metadata or secondary information
- `success`: healthy, complete or active state
- `warning`: partial, delayed or uncertain state
- `danger`: critical risk
- `primary`: active plan, selected state or main category

Rules:

- A badge is not a button.
- Keep badge text short.
- Use `danger` only for genuinely critical states.
- Use `warning` for ambiguity, delay or partial completion.

---

### MetricCard

Use `MetricCard` for decision-relevant metrics.

Good metrics:

- connected equipment rate
- open critical alerts
- overdue actions
- renewal readiness
- adoption level
- value proof status
- recommendations reviewed

Bad metrics:

- vanity metrics
- raw data without context
- metrics that do not help the user decide what to do next

Rules:

- Use a small number of metrics per screen.
- Helper text should explain the value.
- Trend is optional.
- Wrap multiple `MetricCard` items in `MetricGrid`.

---

### AlertCard

Use `AlertCard` for risks, alerts, anomalies or signals requiring attention.

Available severities:

- `critical`: urgent risk
- `warning`: situation to monitor
- `info`: useful signal

Rules:

- Every alert must include a recommendation.
- Critical alerts should appear before warning and info alerts.
- Do not use `critical` for incomplete or pending information.
- The recommendation should guide the next action.

---

### ActionCard

Use `ActionCard` for recommended, planned or overdue actions.

Rules:

- Every action should have an explicit owner.
- Every action should have a due date.
- Every action should have a priority.
- Action titles should describe actual work to do.

Good action titles:

- Plan connectivity review with the customer
- Prepare value proof summary
- Assign owners to overdue actions
- Schedule technical intervention

Bad action titles:

- Follow up
- Check
- Update
- Review

---

### Dialog

Use `Dialog` for short focused creation or confirmation flows.

Use it for:

- confirming a short decision
- assigning ownership
- short focused forms

Do not use `Dialog` for:

- complex multi-step workflows
- large forms
- full-page processes
- exploratory analysis

Dialog titles should describe the task.

Dialog descriptions should clarify what will happen.

Prefer `CreateActionDialog` when creating an action.

---

## Token and styling rules

Figma Make must use the design system styles.

Always include:

```tsx
import "design-system-ai-lab/styles.css";
```

The official token namespace is:

```txt
--ec-*
```

Compatibility aliases are available for generated code:

```txt
--background
--foreground
--border
--input-background
--radius-sm
--radius-md
```

The aliases are compatibility helpers for Figma Make and shadcn-like output.
They do not replace the official `--ec-*` token system.

Do not create:

- new color palettes
- decorative gradients
- arbitrary shadows
- arbitrary border radius values
- custom visual effects
- new typography systems

The visual style should remain:

- sober
- B2B
- readable
- dense but understandable
- action-oriented

---

## Layout principles

Generated screens should be structured around user decisions, not around data
availability.

Every generated screen should answer:

1. What is happening?
2. Why does it matter?
3. What should the user do next?

Recommended structure for customer monitoring screens:

1. `PageHeader` with `CreateActionDialog` as primary action.
2. `CustomerStatusCard` for customer context.
3. `MetricGrid` with decision-relevant metrics.
4. `ConnectivityCoverageCard` when monitoring coverage matters.
5. `PriorityList` with priority `AlertCard` items.
6. `ActionList` with recommended `ActionCard` items.

Recommended structure for renewal risk screens:

1. `PageHeader` with a renewal-related action.
2. `RenewalRiskSummary` for renewal context.
3. `ValueProofCard` for service outcomes and proof gaps.
4. `MetricGrid` with readiness or adoption metrics.
5. `PriorityList` with renewal risks.
6. `ActionList` with mitigation actions.

---

## Prompt structure

When generating an interface, the prompt should include:

1. user role
2. user goal
3. package import rules
4. preferred business patterns
5. expected screen structure
6. constraints
7. expected interactions
8. acceptance criteria

Good prompt opening:

```txt
Create a desktop customer monitoring interface for a service team.

User goal:
Help the user understand customer status, identify priority risks and decide
the next best actions.
```

Bad prompt opening:

```txt
Create a nice modern dashboard for a customer.
```

The first prompt gives an experience goal.

The second prompt invites generic UI generation.

---

## Reference prompt — customer monitoring

```txt
Create a complete customer monitoring screen in App.tsx using
`design-system-ai-lab`.

User goal:
Help a service or customer success user understand customer status, identify
priority risks and decide the next best actions.

Package rules:
- Import components from `design-system-ai-lab`
- Import styles from `design-system-ai-lab/styles.css`
- Do not import from internal package paths
- Do not create local component wrappers
- Do not create a local design system package

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. CustomerStatusCard with customer, plan, contract, CSM, renewal date and coverage
3. MetricGrid with three decision-relevant metrics
4. ConnectivityCoverageCard for monitoring coverage
5. PriorityList with AlertCard items sorted by severity
6. ActionList with ActionCard items for recommended next steps

Use:
- CustomerStatusCard for customer context
- ConnectivityCoverageCard for monitoring coverage
- MetricGrid and MetricCard for metrics
- PriorityList and AlertCard for priority risks
- ActionList and ActionCard for recommended actions
- CreateActionDialog for the primary action

Constraints:
- Use existing package components and patterns only
- Use existing tokens only
- Keep the interface B2B, sober and readable
- Prioritize actionability over decoration
- Every alert must include a recommendation
- Every action must include an owner, due date and priority
- Do not create inline-styled form fields
```

---

## Reference prompt — renewal risk review

```txt
Create a complete renewal risk review screen in App.tsx using
`design-system-ai-lab`.

User goal:
Help a service or customer success user prepare a renewal discussion by
reviewing renewal risk, value proof gaps and mitigation actions.

Package rules:
- Import components from `design-system-ai-lab`
- Import styles from `design-system-ai-lab/styles.css`
- Do not import from internal package paths
- Do not create local component wrappers
- Do not create a local design system package

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. RenewalRiskSummary with renewal window, readiness and value proof status
3. ValueProofCard with customer-ready proof points and service outcomes
4. MetricGrid with renewal readiness, recommendations reviewed and overdue actions
5. PriorityList with renewal blockers sorted by severity
6. ActionList with mitigation actions

Use:
- RenewalRiskSummary for renewal context
- ValueProofCard for service outcomes
- MetricGrid and MetricCard for metrics
- PriorityList and AlertCard for renewal risks
- ActionList and ActionCard for mitigation actions
- CreateActionDialog for the primary action

Constraints:
- Use existing package components and patterns only
- Use existing tokens only
- Keep the interface B2B, sober and readable
- Prioritize actionability over decoration
- Every alert must include a recommendation
- Every action must include an owner, due date and priority
- Do not create inline-styled form fields
```

---

## Refinement prompts

### Reprioritize for decision-making

```txt
Reorganize the screen to help the user decide what to do first.

Move the most critical alerts and recommended actions above secondary metrics.

Keep the same design system components, patterns and tokens.

Do not create new styles or local components.
```

### Make the screen more executive-readable

```txt
Make the screen easier to read for a senior stakeholder.

Reduce technical detail.

Keep only the most decision-relevant metrics, risks and actions.

Preserve the same components, patterns, tokens and visual style.
```

### Make the screen more operational

```txt
Make the screen more useful for an operational service user.

Show clearer ownership, due dates and next actions.

Keep alerts sorted by severity.

Use only the existing design system package components and patterns.
```

### Replace improvised markup with patterns

```txt
Refactor the screen to use the existing business patterns instead of custom
markup.

Use CustomerStatusCard for customer context.
Use ConnectivityCoverageCard for monitoring coverage.
Use RenewalRiskSummary for renewal context if renewal is present.
Use ValueProofCard for service outcomes.
Use CreateActionDialog for action creation.

Do not recreate equivalent sections with generic Card and div markup.
```

---

## Anti-patterns

Do not generate:

- generic SaaS dashboards
- decorative hero sections
- gradients or glassmorphism
- new card styles outside the design system
- multiple competing primary buttons
- charts without decision purpose
- metrics without interpretation
- alerts without recommendations
- actions without owners
- actions without due dates
- large unstructured tables
- inline-styled raw form controls
- local design-system wrappers

Avoid prompts that say:

```txt
Create a beautiful dashboard with modern cards and charts.
```

Prefer prompts that say:

```txt
Create a decision-oriented interface using the approved `design-system-ai-lab`
package, styles, components and patterns.
```

---

## Acceptance checklist

Before accepting a generated screen, verify:

- the screen has one clear user goal
- the screen imports components from `design-system-ai-lab`
- the screen imports `design-system-ai-lab/styles.css`
- the screen uses approved components and patterns
- the screen does not create local component wrappers
- the screen does not create a local design-system package
- the screen uses form components for form fields
- the screen does not create new visual styles
- the primary action is obvious
- critical states are visually distinguishable
- metrics are decision-relevant
- alerts include recommendations
- actions include owner, due date and priority
- the layout can be explained in terms of user decision-making

---

## Output expectations

Generated code should be:

- React
- TypeScript-friendly
- component-based
- easy to review
- easy to refactor
- aligned with the package public API

Generated code should avoid:

- inline design tokens that duplicate the design system
- custom CSS when existing utilities are sufficient
- hardcoded visual styles outside the system
- internal package imports
- overly complex local state for simple screens
- local design-system folders or wrappers

---

## Designer review role

The designer remains responsible for:

- validating the user goal
- assessing the information hierarchy
- checking the interaction model
- reviewing component usage
- identifying missing states
- improving the generated experience
- deciding whether a new pattern should enter the design system

Figma Make accelerates production.

It does not replace design judgment.

---

## Final principle

Figma Make should not generate from imagination.

It should generate from a governed system:

- package components
- CSS tokens
- component contracts
- business patterns
- prompt rules
- acceptance criteria

The design system is the source of truth.
