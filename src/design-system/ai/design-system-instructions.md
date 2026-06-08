# Design System AI Lab — AI Instructions

## Purpose

This design system is used to generate B2B service and customer monitoring
interfaces from a governed React component package.

The goal is not to create decorative dashboards.

The goal is to help users understand a situation, identify risks, review value
signals and decide what to do next.

Generated interfaces must be composed from the design system rather than
invented from scratch.

---

## Core principle

The AI must not generate an interface from a blank canvas.

The AI must compose interfaces using:

- existing foundations
- existing components
- existing form components
- existing decision components
- existing business patterns
- existing design tokens
- existing interaction patterns
- existing UX principles

The design system is the source of truth.

---

## Import rules

Always import components from the package root:

```tsx
import {
  Button,
  CustomerStatusCard,
  MetricGrid,
} from "design-system-ai-lab";
```

Always import styles once near the application root:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import from internal package paths.

Allowed:

```tsx
import { Button } from "design-system-ai-lab";
```

Not allowed:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

Do not create local copies of design-system components.

Do not create a local folder such as:

```txt
packages/design-system-ai-lab/
```

---

## Design system layers

Use the design system in this order of preference:

1. Business patterns when they match the screen intent.
2. Decision components for screen structure.
3. Generic components for reusable UI blocks.
4. Form components for input and dialog flows.
5. Custom markup only when no existing component or pattern fits.

---

## Foundations and tokens

The official token namespace is:

```txt
--ec-*
```

Examples:

```txt
--ec-color-background
--ec-color-surface
--ec-color-text-primary
--ec-color-border
--ec-color-primary
--ec-radius-sm
--ec-shadow-card
```

Compatibility aliases such as `--background`, `--foreground`, `--border` and
`--radius-sm` are supported for Figma Make and shadcn-like generated code.

These aliases are compatibility helpers. They do not replace the official
`--ec-*` token system.

### Visual rules

- Use existing design tokens only.
- Do not create new colors.
- Do not create new shadows.
- Do not create new border radius values.
- Do not create decorative gradients.
- Do not use visual effects that are not part of the system.
- Prefer sober, dense and readable B2B layouts.
- Use whitespace to clarify hierarchy, not to decorate.

---

## General UX principles

Generated interfaces must prioritize:

1. Clarity.
2. Readability.
3. Decision-making.
4. Actionability.
5. Consistency.
6. Accessibility.

Every generated screen should help answer:

1. What is happening?
2. Why does it matter?
3. What should the user do next?

---

## Component usage rules

### PageHeader

Use `PageHeader` at the top of each main screen.

The title must describe the screen objective.

The description must clarify the user goal.

Use the actions area for the main screen action.

### Button

- Use `Button` variant `primary` for the main action only.
- Use `Button` variant `secondary` for contextual actions.
- Use `Button` variant `ghost` for low-emphasis actions.
- Use `Button` variant `danger` only for destructive actions.
- A screen should generally have only one primary button.
- Use `Button` directly as a `Dialog` trigger.
- Do not create local wrappers such as `ForwardedButton`.

### Badge

- Use `Badge` tone `success` for healthy, active or completed states.
- Use `Badge` tone `warning` for partial, delayed or uncertain states.
- Use `Badge` tone `danger` for critical risks.
- Use `Badge` tone `primary` for active plans, selected states or main categories.
- Use `Badge` tone `neutral` for metadata.
- Keep badge text short.

### Card

Use `Card` to group related information.

Prefer a business pattern when a matching pattern already exists.

Do not rebuild `CustomerStatusCard`, `RenewalRiskSummary`,
`ConnectivityCoverageCard` or `ValueProofCard` manually with generic cards.

### MetricCard

Use `MetricCard` only for decision-relevant indicators.

Good examples:

- connected equipment
- open critical alerts
- overdue actions
- renewal readiness
- recommendations reviewed
- value proof status

Avoid vanity metrics or metrics that do not help the user decide what to do
next.

### Dialog

Use `Dialog` for short focused tasks.

Use `DialogFooter` and `DialogClose` for custom dialog footers.

Prefer `CreateActionDialog` when the flow creates a follow-up action.

Do not use `Dialog` for complex multi-step workflows.

---

## Form rules

Use form components for all generated forms.

Available form components:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

Rules:

- Use `Field` to group labels, inputs, helper text and errors.
- Connect `label` and controls with `htmlFor` and `id` when possible.
- Use `Input` for short single-line values.
- Use `Select` for limited native choice lists.
- Use `Textarea` for longer notes, explanations or recommendations.
- Do not generate raw inline-styled `input`, `select` or `textarea` elements.

Preferred pattern:

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

## Decision component rules

Use decision components to structure screens around context, metrics, risks and
actions.

Available decision components:

- `ActionCard`
- `ActionList`
- `AlertCard`
- `MetricGrid`
- `PriorityList`
- `SectionHeader`
- `StatusSummary`

Rules:

- Use `MetricGrid` to arrange multiple `MetricCard` components.
- Use `StatusSummary` for structured label/value context.
- Use `PriorityList` to group risks or alerts.
- Use `ActionList` to group recommended or planned actions.
- Use `SectionHeader` instead of hand-written section headings.
- Use `AlertCard` for risks, alerts or anomalies.
- Use `ActionCard` for recommended, planned or overdue actions.

An `AlertCard` must include:

- severity
- title
- equipment or scope
- description
- recommendation

An `ActionCard` must include:

- title
- owner
- due date
- priority

---

## Business pattern rules

Use business patterns first when they match the screen objective.

Available business patterns:

- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerStatusCard`
- `RenewalRiskSummary`
- `ValueProofCard`

### CustomerStatusCard

Use `CustomerStatusCard` for customer identity, plan, contract, coverage and
account context.

Place it near the top of customer monitoring screens.

### ConnectivityCoverageCard

Use `ConnectivityCoverageCard` when the screen discusses monitoring coverage,
disconnected assets or recovery context.

### RenewalRiskSummary

Use `RenewalRiskSummary` when the screen focuses on renewal preparation,
renewal exposure or mitigation.

### ValueProofCard

Use `ValueProofCard` when the screen needs to prove service outcomes or prepare
a customer-ready value summary.

### CreateActionDialog

Use `CreateActionDialog` when the primary action creates a recommended,
mitigation or follow-up action.

---

## Recommended screen structures

### Customer monitoring screen

A customer monitoring screen should generally include:

1. `PageHeader` with `CreateActionDialog` as the primary action.
2. `CustomerStatusCard` for customer context.
3. `MetricGrid` with decision-relevant `MetricCard` components.
4. `ConnectivityCoverageCard` when monitoring coverage matters.
5. `PriorityList` with `AlertCard` components.
6. `ActionList` with `ActionCard` components.

### Renewal risk review screen

A renewal risk review screen should generally include:

1. `PageHeader` with a renewal-related action.
2. `RenewalRiskSummary` for renewal context.
3. `ValueProofCard` for service outcomes and proof gaps.
4. `MetricGrid` for readiness or adoption metrics.
5. `PriorityList` with renewal risks.
6. `ActionList` with mitigation actions.

---

## Interaction rules

- Use `Dialog` for short focused tasks.
- Use `CreateActionDialog` for action creation flows.
- Do not use `Dialog` for complex workflows requiring multiple steps.
- Creation dialogs should contain only the fields required to create the object.
- Confirmation dialogs should be short and explicit.
- Avoid hidden interactions that are not discoverable.
- Avoid placing too many competing primary actions on the same screen.

---

## Generated screen acceptance criteria

A generated screen is acceptable if:

- The main user objective is visible in less than 5 seconds.
- The primary action is unambiguous.
- Critical risks are visually distinguishable.
- Secondary information does not compete with urgent actions.
- The screen imports components from the package root.
- The screen imports `design-system-ai-lab/styles.css`.
- The screen uses existing components, patterns and tokens.
- The screen uses form components for forms.
- The screen uses decision components for metrics, risks and actions.
- The layout can be explained in terms of user decision-making.
- No local component clone or design-system package is created.
