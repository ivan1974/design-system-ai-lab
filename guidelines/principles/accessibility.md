# Accessibility Principles

## Purpose

Accessibility is a baseline requirement for generated interfaces.

A generated screen should not only look consistent with the design system.

It should also be understandable, navigable and usable by people with different
abilities, devices and interaction modes.

It should also reflect the knowledge layer: users need to understand what is
happening, what can be trusted, what matters most, what to do next and what is
proven versus assumed.

Figma Make should not generate visually correct but inaccessible UI.

The design system components provide part of the accessibility baseline.

Generated screens should use those components instead of raw HTML, local
wrappers or inline-styled replacements.

For asset-heavy screens, accessibility also means making asset scope,
connectivity status, source scope, freshness, Health versus Intelligence
distinction and proof status understandable without relying on visual styling
alone.

---

## Core principle

Use the design system components because they encode shared interaction,
structure and accessibility expectations.

Do not bypass them unless the prompt explicitly requires a new component and the
accessibility implications are reviewed.

Preferred:

```tsx
<Field label="Owner" htmlFor="action-owner">
  <Input id="action-owner" placeholder="CSM" />
</Field>
```

Avoid:

```tsx
<label>Owner</label>
<input placeholder="CSM" />
```

Avoid:

```tsx
<input
  style={{ height: "40px", borderRadius: "6px" }}
  placeholder="Owner"
/>
```

---

## General rules

Generated screens must follow these rules:

- use semantic components from the package
- keep heading hierarchy clear
- provide visible labels for form controls
- connect labels and controls with `htmlFor` and `id` when possible
- do not rely only on placeholder text
- use explicit button labels
- keep focus states visible
- keep disabled states understandable
- do not communicate information only through color
- do not communicate asset visibility only through color
- do not communicate proof status only through color
- label partial visibility, partially connected assets, non-connected assets and review-needed states clearly
- do not use confidence language as a substitute for source evidence
- do not present embedded components as top-level assets unless component-level investigation is required
- keep content order logical
- avoid excessive nesting
- avoid decorative UI that adds noise without meaning

---

## Page structure

A generated screen should have a clear structure.

Recommended screen structure:

```txt
PageHeader
→ Business context pattern
→ MetricGrid when metrics are needed
→ PriorityList when risks are needed
→ ActionList when next steps are needed
```

For asset-heavy screens, preserve this additional reading logic when relevant:

```txt
Asset scope
→ connectivity, source scope and source strength
→ Health facts
→ Intelligence interpretation
→ recommendation
→ owned action
→ expected outcome, technical outcome, internal proof or customer-ready proof status
```

Use `PageHeader` once for the main screen title and purpose.

Use `SectionHeader` for sections inside the screen.

Do not use multiple `PageHeader` components as section titles.

Do not use `Label` as a section heading.

Do not create custom heading containers when `PageHeader`, `SectionHeader` or
component title props fit the need.

---

## Heading rules

Headings should help users understand the page hierarchy.

Use clear titles such as:

```txt
Customer monitoring
Renewal risk review
Priority alerts
Recommended actions
Value proof
Connectivity coverage
Asset scope
Source scope
Health signals
Intelligence recommendations
Proof gaps
```

Avoid vague titles such as:

```txt
Dashboard
Overview
Details
Information
Data
Section
```

A heading should explain what the section is for.

Do not create headings only for visual weight.

Do not use vague headings that hide whether a section contains source-system
Health data, interpreted Intelligence, recommendations or value proof.

---

## Form accessibility

Use `Field` as the default wrapper for form controls.

`Field` provides a consistent structure for:

- label
- control
- helper text
- error text

Preferred:

```tsx
<Field
  label="Recommended next step"
  htmlFor="recommended-next-step"
  helper="Write the next step as a concrete action."
>
  <Textarea
    id="recommended-next-step"
    placeholder="Plan a connectivity review with the customer and support team."
  />
</Field>
```

Every editable form control should have a visible label or an explicit accessible
alternative.

Use `htmlFor` and `id` when possible.

The `htmlFor` value should match the child control `id`.

Good:

```tsx
<Field label="Due date" htmlFor="action-due-date">
  <Input id="action-due-date" type="date" />
</Field>
```

Weak:

```tsx
<Field label="Due date">
  <Input type="date" />
</Field>
```

Do not rely only on placeholders.

Bad:

```tsx
<Input placeholder="Owner" />
```

Good:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

---

## Error and helper text

Helper text should explain how to complete a field or why it matters.

Error text should explain how to fix the issue.

Good helper text:

```txt
Assign a clear owner for this action.
Choose the priority based on customer impact.
Write the next step as a concrete action.
```

Good error text:

```txt
Owner is required before saving the action.
Select a priority before continuing.
Due date must be in the future.
```

Avoid vague helper or error text:

```txt
Enter text.
Required.
Error.
Invalid.
Wrong.
```

When showing an error, use the `error` prop on `Field`.

---

## Button accessibility

Buttons should have explicit labels.

Good button labels:

```txt
Create action
Create mitigation action
Review all risks
Prepare summary
Save action
Cancel
```

Avoid vague button labels:

```txt
OK
More
Click here
Submit
Go
Action
```

A button label should explain what will happen.

Do not use `Badge`, `Card`, `ActionCard` or `AlertCard` as a button.

Do not create local button wrappers.

Use the package `Button` directly.

---

## Dialog accessibility

Dialogs should support one focused task.

Every `Dialog` should have a meaningful title.

Use a description when it helps clarify context.

Good:

```tsx
<Dialog
  trigger={<Button>Create mitigation action</Button>}
  title="Create mitigation action"
  description="Add a focused mitigation action linked to the current renewal risk."
>
  ...
</Dialog>
```

Avoid vague dialog titles:

```txt
Dialog
Modal
Form
Details
Information
```

For standard action creation, use `CreateActionDialog` instead of rebuilding a
custom dialog form.

---

## Color and status communication

Do not communicate information only through color.

A status should be understandable through text as well as tone.

This applies especially to connectivity, monitoring scope, review-needed
states, proof gaps and customer-ready proof status.

When connectivity is partial, use explicit text for connected, partially
connected and non-connected assets instead of relying on color or position.

Good:

```tsx
<Badge tone="warning">Connectivity partial</Badge>
```

Good:

```tsx
<Badge tone="warning">Partial visibility</Badge>
<Badge tone="warning">Partially connected assets</Badge>
<Badge tone="neutral">Source: service report</Badge>
<Badge tone="neutral">Evidence: historical</Badge>
<Badge tone="warning">Expected outcome, not proven</Badge>
```

Weak:

```tsx
<Badge tone="warning">Status</Badge>
```

Weak:

```tsx
<Badge tone="warning">AI insight</Badge>
```

Better:

```tsx
<Badge tone="warning">AI interpretation — review needed</Badge>
```

Good alert:

```tsx
<AlertCard
  severity="critical"
  title="Critical equipment no longer monitored"
  equipment="Main HVAC control unit — Site A"
  description="The customer has no visibility on a critical asset."
  recommendation="Escalate to support and schedule a technical review within 48 hours."
/>
```

The user should not need to infer meaning from color alone.

---

## Focus and keyboard behavior

Generated screens should preserve the default focus behavior of package
components.

Do not remove focus styles.

Do not override focus rings with custom styles unless explicitly reviewed.

Do not create custom interactive elements from non-interactive elements.

Avoid patterns such as:

```tsx
<div onClick={...}>Create action</div>
```

Use `Button` instead:

```tsx
<Button>Create action</Button>
```

Interactive elements should be reachable and understandable through keyboard
navigation.

---

## Disabled states

Disabled controls should be used sparingly.

If information is display-only, use display components instead of disabled form
controls.

Avoid:

```tsx
<Input value="Greenfield Industries" disabled />
```

Prefer:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
/>
```

A disabled state should not be the only way to explain why something cannot be
changed.

When needed, add helper text or surrounding context.

---

## Text clarity

Accessibility also depends on content clarity.

Generated copy should be:

- specific
- concise
- action-oriented when relevant
- understandable without internal jargon
- consistent with the component purpose
- explicit about scope when visibility is partial
- explicit about source, source strength or freshness when trust depends on it
- explicit about whether content is observed, inferred, recommended, expected or proven
- explicit about whether proof is internal-only, draft, technical or customer-ready

Avoid vague content such as:

```txt
Issue detected
Some data
Follow up
More information
Action needed
AI insight
Asset issue
Value delivered
System status
High confidence
Component issue
Proof available
```

Prefer specific content such as:

```txt
Connectivity loss on critical equipment
Plan connectivity review with the customer
Prepare customer-ready value proof summary
Partial visibility on UPS Room A
Non-connected asset — based on service history, not live telemetry
Expected outcome not yet proven
AI interpretation — CSM review required
Partially connected asset — telemetry incomplete
Evidence: historical service report
Technical outcome validated internally, not customer-ready proof
Confidence must be reviewed against source evidence
```

---

## Reading order

The visual order and reading order should match the decision flow.

Recommended flow:

```txt
Context
→ Metrics
→ Risks
→ Actions
```

For asset-heavy screens, keep source-system facts before interpretation:

```txt
Asset context
→ source scope, source strength and connectivity scope
→ Health facts
→ Intelligence interpretation
→ recommendations
→ actions
→ expected outcome, technical outcome, internal proof or customer-ready proof status
```

Do not place actions before the user understands the context.

Do not place AI interpretation before the user can understand the source facts
or asset scope that support it.

Do not place critical alerts below long secondary content.

Do not place proof gaps below customer-ready proof points when the gap affects
trust in the summary.

Do not repeat the same information in multiple sections.

A user should be able to understand the screen by reading from top to bottom.

---

## Component-specific expectations

### PageHeader

Use once per main screen.

The title should be specific.

The description should explain the user goal.

### SectionHeader

Use for internal page sections.

Do not use `PageHeader` repeatedly.

### Field

Use for form controls.

Connect `htmlFor` and `id` when possible.

### Button

Use explicit action labels.

Do not use vague labels.

### Badge

Use short status text.

Do not rely on color alone.

Use explicit text for partial visibility, partially connected assets,
non-connected assets, review-needed states, expected outcomes, technical outcomes,
internal proof, customer-ready proof and proof gaps.

### Dialog

Use meaningful title and description.

Keep the task focused.

### AlertCard

Every alert should include a recommendation.

If the alert is asset-related, include enough scope or source context for the
recommendation to be understandable.

Do not make the alert title imply source-system certainty when the signal is
AI-assisted interpretation or based on limited source strength.

### ActionCard

Every action should include title, owner, due date and priority.

### StatusSummary

Use for display-only structured context.

Do not use disabled form controls for static context.

Use it when source, scope, freshness or validation context needs to be readable
as structured display information.

---

## Anti-patterns

Do not generate:

- raw form controls when package form components fit
- form controls without visible labels
- labels that rely only on placeholders
- vague button labels
- clickable `div` elements
- badges used as buttons
- cards used as buttons
- dialogs without meaningful titles
- alerts without recommendations
- actions without owner, due date or priority
- disabled form controls used as static display
- custom local wrappers that bypass package components
- inline styles that override accessibility-related states
- information communicated only through color
- connectivity status communicated only through color
- proof status communicated only through color
- partial visibility hidden behind vague labels
- partially connected assets hidden behind generic connectivity language
- non-connected assets presented as live-monitored
- AI interpretation presented without review or source context
- confidence language used as a substitute for source evidence
- expected outcomes presented as proven value
- technical outcomes or internal proof presented as customer-ready proof without validation
- embedded components presented as top-level assets unless component-level investigation is required
- deeply nested layouts that make reading order unclear
- duplicate sections that increase cognitive load
- headings that hide whether content is Health data, Intelligence interpretation, recommendation or proof
- asset-heavy screens that require users to infer scope from layout or color alone

---

## Review checklist

Before accepting a generated screen, verify:

- the screen uses package components instead of raw replacements
- the page has one clear `PageHeader`
- section titles are meaningful
- heading hierarchy is logical
- form controls have visible labels
- `htmlFor` and `id` are connected when possible
- placeholders are not used as labels
- helper text and error text are specific
- buttons have explicit labels
- dialogs have meaningful titles
- alerts include recommendations
- actions include title, owner, due date and priority
- status is not communicated only through color
- connectivity status is not communicated only through color
- proof status is not communicated only through color
- partial visibility, partially connected assets and non-connected states are labelled clearly
- asset scope, source scope and freshness are readable when they affect trust
- source strength is readable when it affects trust
- confidence language does not replace source evidence
- Health data and Intelligence interpretation are distinguishable when both are present
- expected outcomes are not labelled or positioned as proven value
- technical outcomes and internal proof are not labelled or positioned as customer-ready proof without validation
- embedded components are not presented as top-level assets unless component-level investigation is required
- focus styles have not been removed
- interactive elements are real interactive components
- reading order follows context, metrics, risks and actions
- asset-heavy reading order follows asset context, source scope, source strength, Health facts, Intelligence, recommendations, actions and proof status when relevant
- the generated screen can be understood without relying on visual styling alone

---

## Final principle

Accessibility is not a final polish step.

It is part of the generation contract.

If a generated screen is not understandable, navigable, trustworthy and
actionable, it should not be accepted even if it looks visually consistent.

Accessibility means users should not have to infer critical meaning from color,
layout, confidence language, asset hierarchy assumptions, proof status or AI
wording alone.
