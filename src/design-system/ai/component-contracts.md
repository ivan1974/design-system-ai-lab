# Design System AI Lab — Component Contracts

<!-- markdownlint-disable MD024 -->

This file defines how AI tools should use the design system components,
decision components and business patterns.

AI tools must follow these contracts when generating interfaces.

The goal is not to generate arbitrary UI.

The goal is to compose screens from a governed design system.

---

## Global rules

### Use the public API

Always import components from the package root:

```tsx
import {
  Button,
  CustomerStatusCard,
  MetricGrid,
} from "design-system-ai-lab";
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

### Import styles once

Always import the package styles once near the application root:

```tsx
import "design-system-ai-lab/styles.css";
```

### Prefer existing components and patterns

Do not recreate components locally when an existing design-system component
already covers the need.

Prefer this:

```tsx
<CustomerStatusCard />
```

Instead of rebuilding the same structure with raw `Card`, `Badge`, `div`, `dt`
and `dd` elements.

### Token rules

The official token namespace is:

```txt
--ec-*
```

Use design-system components first. When custom wrappers are necessary, prefer
`--ec-*` tokens.

Compatibility aliases such as `--background`, `--foreground`, `--border` and
`--radius-sm` are supported for generated code, but they are aliases, not the
source of truth.

### Do not create local design-system folders

Do not create:

```txt
packages/design-system-ai-lab/
```

Do not create local clones of exported components.

---

## Components

Generic UI components live under the `components` family.

They are suitable for broad UI composition, but business patterns should be
used first when they match the screen intent.

---

## PageHeader

### Purpose

Use `PageHeader` at the top of a main screen or major page.

### Example

```tsx
<PageHeader
  title="Customer monitoring"
  description="Understand customer status, risks and next actions."
  actions={<CreateActionDialog />}
/>
```

### Rules

- Use one `PageHeader` per main screen.
- The title must describe the screen, not only the product.
- The description must clarify the user goal.
- The actions area should contain the main screen action.
- Use `CreateActionDialog` when the primary action creates a follow-up action.
- Do not overload the header with too many secondary actions.

---

## Button

### Purpose

Use `Button` for user actions.

### Example

```tsx
<Button variant="primary" size="md">
  Create action
</Button>
```

### Variants

- `primary`: main action
- `secondary`: contextual action
- `ghost`: low-emphasis action
- `danger`: destructive action

### Sizes

- `sm`: compact contextual action
- `md`: default size
- `lg`: prominent action

### Rules

- Use only one primary button per screen section.
- Do not use `danger` unless the action is destructive.
- Button labels must be action-oriented.
- Prefer explicit labels over generic labels.
- `Button` can be used directly as a `Dialog` trigger.
- Do not create a local `ForwardedButton` wrapper.

### Good labels

- Create action
- Review plan
- Open details
- Assign owner
- Check connectivity
- Prepare value summary

### Bad labels

- OK
- Submit
- Click here
- More

---

## Badge

### Purpose

Use `Badge` to communicate status, tone or metadata.

### Example

```tsx
<Badge tone="warning">Connectivity partial</Badge>
```

### Tones

- `neutral`: metadata or secondary information
- `success`: healthy, complete or active state
- `warning`: partial, delayed or uncertain state
- `danger`: critical risk
- `primary`: active plan, selected state or main category

### Rules

- A badge is not a button.
- Badge text should be short.
- Do not use badges for long sentences.
- Use `danger` only for genuinely critical states.
- Use `warning` for ambiguity, delay or partial completion.

---

## Card

### Purpose

Use `Card` to group related information.

### Example

```tsx
<Card
  title="Service context"
  description="Current service situation and customer context."
>
  ...
</Card>
```

### Rules

- Use `Card` for meaningful groups, not every small item.
- The title should describe the content group.
- The description should explain the meaning, logic or sorting rule when useful.
- Do not overload a card with unrelated information.
- Prefer one clear purpose per card.
- Prefer a business pattern when a matching pattern exists.

---

## MetricCard

### Purpose

Use `MetricCard` for decision-relevant metrics.

### Example

```tsx
<MetricCard
  label="Connected equipment"
  value="68%"
  helper="17 of 25 assets monitored"
  trend="-12% this month"
/>
```

### Rules

- Use `MetricCard` only for metrics that support a decision.
- Avoid vanity metrics.
- Helper text should explain the value.
- Trend is optional.
- Use a small number of metrics per screen.
- Prefer wrapping multiple `MetricCard` components with `MetricGrid`.

### Good metrics

- Connected equipment
- Open critical alerts
- Overdue actions
- Renewal readiness
- Recommendations reviewed
- Value proof status

### Bad metrics

- Total number of screens
- Total number of clicks without context
- Data points that do not help the user decide what to do next

---

## Dialog

### Purpose

Use `Dialog` for short focused creation or confirmation tasks.

### Example

```tsx
<Dialog
  trigger={<Button>Create action</Button>}
  title="Create action"
  description="Add a follow-up action with an owner, due date and priority."
>
  ...
</Dialog>
```

### Related components

- `DialogFooter`
- `DialogClose`

### Rules

- Use `Dialog` for focused tasks only.
- Avoid long forms.
- Dialog title should describe the task.
- Dialog description should clarify what will happen.
- Do not use `Dialog` as a full-page workflow.
- Keep creation dialogs to the minimum fields required.
- Use `DialogFooter` and `DialogClose` for custom dialog footers.
- Prefer `CreateActionDialog` for action creation flows.

### Custom footer example

```tsx
<DialogFooter>
  <DialogClose variant="secondary">Cancel</DialogClose>
  <Button type="submit" form="create-action-form">
    Save action
  </Button>
</DialogFooter>
```

---

## Forms

Form components live under the `forms` family.

Use them whenever generated screens need form content.

Do not generate raw inline-styled form controls.

---

## Field

### Purpose

Use `Field` to group a label, a form control and optional helper or error text.

### Example

```tsx
<Field
  label="Owner"
  htmlFor="owner"
  helper="Assign a clear owner for this action."
>
  <Input id="owner" placeholder="CSM" />
</Field>
```

### Rules

- Use `Field` for form layout consistency.
- Always connect `label` and control with `htmlFor` and `id` when possible.
- Use `helper` for guidance.
- Use `error` for validation feedback.
- Do not create raw label/input stacks manually.

---

## Label

### Purpose

Use `Label` when a standalone form label is needed.

### Example

```tsx
<Label htmlFor="owner">Owner</Label>
```

### Rules

- Prefer `Field` for most form rows.
- Use `Label` directly only when custom form composition is required.
- Keep labels short and specific.

---

## Input

### Purpose

Use `Input` for short single-line values.

### Example

```tsx
<Input id="owner" placeholder="CSM" />
```

### Rules

- Use `Input` for names, owners, dates, numbers, emails and short titles.
- Use `Textarea` for longer notes or descriptions.
- Do not style native `input` elements inline.
- Use inside `Field` when possible.

---

## Select

### Purpose

Use `Select` for simple native choice lists.

### Example

```tsx
<Select id="priority" defaultValue="high">
  <option value="high">High</option>
  <option value="medium">Medium</option>
  <option value="low">Low</option>
</Select>
```

### Rules

- Use `Select` when options are known and limited.
- Use clear option labels.
- Use inside `Field` when possible.
- Do not generate custom select components unless explicitly requested.

---

## Textarea

### Purpose

Use `Textarea` for longer notes, explanations or contextual information.

### Example

```tsx
<Textarea
  id="note"
  placeholder="Describe why this action matters and what should happen next."
/>
```

### Rules

- Use `Textarea` for notes, descriptions and recommendations.
- Do not use `Input` for long-form content.
- Use inside `Field` when possible.
- Do not style native `textarea` elements inline.

---

## Decision components

Decision components help compose screens around customer context, priorities,
metrics and next actions.

Use them when a screen needs to help the user decide what to do next.

---

## SectionHeader

### Purpose

Use `SectionHeader` to introduce a major section within a screen.

### Example

```tsx
<SectionHeader
  title="Priority alerts"
  description="Risks and blockers requiring customer or service team action."
  actions={<Button variant="secondary">Review risks</Button>}
/>
```

### Rules

- Use `SectionHeader` instead of hand-written section titles.
- The title should describe the content of the section.
- The description should explain why the section matters.
- Use actions only when the section has a clear contextual action.

---

## MetricGrid

### Purpose

Use `MetricGrid` to arrange multiple `MetricCard` components.

### Example

```tsx
<MetricGrid columns={3}>
  <MetricCard label="Connected equipment" value="68%" />
  <MetricCard label="Open critical alerts" value="2" />
  <MetricCard label="Overdue actions" value="3" />
</MetricGrid>
```

### Rules

- Use `MetricGrid` instead of hand-written metric grid containers.
- Use 2, 3 or 4 columns.
- Keep metrics decision-relevant.
- Avoid mixing metrics with unrelated content.

---

## StatusSummary

### Purpose

Use `StatusSummary` to display structured context, status badges and key
metadata.

### Example

```tsx
<StatusSummary
  title="Customer status"
  description="Current account context and service coverage."
  badges={[{ label: "Active plan", tone: "primary" }]}
  items={[{ label: "Customer", value: "Greenfield Industries" }]}
/>
```

### Rules

- Use `StatusSummary` for structured context blocks.
- Use `badges` for status and risk signals.
- Use `items` for label/value metadata.
- Prefer business patterns when the summary matches a known pattern.

---

## AlertCard

### Purpose

Use `AlertCard` for risks, alerts, anomalies or signals requiring attention.

### Example

```tsx
<AlertCard
  severity="critical"
  title="Critical equipment no longer monitored"
  equipment="Main HVAC control unit"
  description="The customer has no visibility on a critical asset."
  recommendation="Escalate to support and notify the customer proactively."
/>
```

### Severity

- `critical`: urgent risk
- `warning`: situation to monitor
- `info`: useful signal

### Rules

- `AlertCard` must contain a recommendation.
- The title should describe the issue.
- The description should explain the situation.
- The recommendation should guide the next action.
- Critical alerts should appear before warning and info alerts.
- Do not use `critical` for information that is merely incomplete or pending.

---

## PriorityList

### Purpose

Use `PriorityList` to group priority alerts or risks.

### Example

```tsx
<PriorityList
  title="Priority alerts"
  description="Risks requiring customer or service team action."
>
  <AlertCard ... />
</PriorityList>
```

### Rules

- Use `PriorityList` instead of manually composing alert sections.
- Put critical items first.
- Use `AlertCard` children when the section describes risks or alerts.
- Do not mix unrelated content in the list.

---

## ActionCard

### Purpose

Use `ActionCard` for recommended, planned or overdue actions.

### Example

```tsx
<ActionCard
  title="Plan connectivity review with the customer"
  owner="CSM"
  dueDate="This week"
  priority="high"
/>
```

### Priority

- `high`: urgent or high business impact
- `medium`: important but not urgent
- `low`: useful but secondary

### Rules

- `ActionCard` should describe an actual action.
- Owner should be explicit.
- Due date should be understandable by the user.
- Priority should reflect urgency and impact.
- Avoid vague actions such as “Follow up” or “Check”.

### Good action titles

- Plan connectivity review with the customer
- Prepare value proof summary
- Assign owners to overdue actions
- Schedule technical intervention

---

## ActionList

### Purpose

Use `ActionList` to group recommended or planned actions.

### Example

```tsx
<ActionList
  title="Recommended actions"
  description="Next steps to reduce customer risk."
>
  <ActionCard ... />
</ActionList>
```

### Rules

- Use `ActionList` instead of manually composing action sections.
- Use `ActionCard` children.
- Keep actions concrete and assignable.
- Use the section action area only for list-level actions.

---

## Business patterns

Business patterns are higher-level compositions.

Use them first when they match the screen objective.

---

## CustomerStatusCard

### Purpose

Use `CustomerStatusCard` for customer identity, plan, contract, coverage and
account context.

### Example

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  contract="#CR-2024-441"
  csm="Sarah Moreau"
  renewalDate="Aug 5, 2026"
  assetsCovered="25 assets — 3 sites"
  coverage="68% connected"
  badges={[{ label: "Active plan", tone: "primary" }]}
/>
```

### Rules

- Use before rebuilding customer context with `Card` and `Badge`.
- Place near the top of customer monitoring screens.
- Use badges for plan, risk or connectivity signals.
- Use `extraItems` only for meaningful additional context.

---

## ConnectivityCoverageCard

### Purpose

Use `ConnectivityCoverageCard` to summarize monitoring coverage, disconnected
assets and recovery context.

### Example

```tsx
<ConnectivityCoverageCard
  customerName="Greenfield Industries"
  coverageRate="68%"
  connectedAssets="17 of 25 assets"
  disconnectedAssets="8 assets"
  criticalDisconnectedAssets="2 critical assets"
  monitoringStatus="Partial connectivity"
  lastUpdate="18 hours ago"
/>
```

### Rules

- Use when the screen discusses monitoring or connectivity coverage.
- Use `criticalDisconnectedAssets` only for genuinely critical assets.
- Use badges to clarify healthy, partial or critical coverage status.
- Do not rebuild this pattern manually with a generic card.

---

## RenewalRiskSummary

### Purpose

Use `RenewalRiskSummary` to summarize renewal context, value proof readiness and
mitigation signals.

### Example

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  renewalDate="Aug 5, 2026"
  renewalReadiness="Medium"
  valueProofStatus="Incomplete"
  recommendationsReviewed="42%"
  overdueActions="3 high-priority actions"
/>
```

### Rules

- Use on renewal preparation or renewal risk screens.
- Use to make renewal readiness visible.
- Use badges to communicate risk level and value proof status.
- Do not use generic metric cards alone for renewal context.

---

## ValueProofCard

### Purpose

Use `ValueProofCard` to show customer-ready proof points and service outcomes.

### Example

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

### Rules

- Use when the screen needs to prove service value.
- Proof points should be customer-readable.
- Avoid vague proof such as “service improved”.
- Prefer concrete outcomes, completed actions and recommendations followed.

---

## CreateActionDialog

### Purpose

Use `CreateActionDialog` for action creation flows.

### Example

```tsx
<CreateActionDialog
  title="Create mitigation action"
  description="Add an action to reduce renewal risk before the customer meeting."
  confirmLabel="Save mitigation action"
/>
```

### Rules

- Use instead of rebuilding an action form inside `Dialog`.
- Use `defaultValues` when the action is suggested by an alert or risk.
- Keep the action concrete and assignable.
- Do not create local form controls for this flow.

---

## Recommended screen structures

### Customer monitoring

Use this composition for a customer monitoring screen:

1. `PageHeader` with `CreateActionDialog`
2. `CustomerStatusCard`
3. `MetricGrid` with decision-relevant `MetricCard` components
4. `ConnectivityCoverageCard` when monitoring coverage matters
5. `PriorityList` with `AlertCard` components
6. `ActionList` with `ActionCard` components

### Renewal risk review

Use this composition for a renewal risk review screen:

1. `PageHeader` with renewal action
2. `RenewalRiskSummary`
3. `ValueProofCard`
4. `MetricGrid` for readiness or adoption metrics
5. `PriorityList` for renewal risks
6. `ActionList` for mitigation actions

---

## AI generation checklist

Before producing an interface, verify:

- The screen has one clear user goal.
- The generated UI imports from the package root.
- The generated UI imports `design-system-ai-lab/styles.css`.
- The generated UI uses existing components before custom markup.
- The generated UI uses business patterns when available.
- The generated UI uses form components for forms.
- The generated UI uses `MetricGrid`, `PriorityList` and `ActionList` for layout.
- The primary action is obvious.
- Critical states are visually distinguishable.
- Metrics are decision-relevant.
- Alerts include recommendations.
- Actions include owner, due date and priority.
- The layout can be explained in terms of user decision-making.
- No local design-system clone or wrapper has been created.
