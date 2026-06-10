# Figma Make Setup — Design System AI Lab

## Purpose

This document explains how Figma Make should use `design-system-ai-lab` to
generate coherent product interfaces from a governed React design system.

The goal is not to generate free-form UI from a blank canvas.

The goal is to make Figma Make compose screens using:

- the published design system package
- the package styles
- approved foundations and tokens
- component contracts
- form components
- decision components
- business patterns
- prompt constraints
- acceptance criteria

Figma Make should behave as a screen composition assistant, not as an
unrestricted visual designer.

---

## Demo objective

The demo should show that a designer can move from manual screen production to
system-guided generation.

The designer defines:

- the experience intent
- the user goal
- the screen structure
- the components allowed
- the patterns to prefer
- the rules of use
- the acceptance criteria

Figma Make generates:

- a first screen draft
- a coherent component composition
- simple interactions
- reusable prototype code
- variants that can be reviewed and refined

The designer remains responsible for UX judgment, hierarchy, interaction logic
and final validation.

---

## Required package setup

The Make file should include the design system package as a dependency.

Example:

```json
{
  "dependencies": {
    "design-system-ai-lab": "0.2.0"
  }
}
```

If the Make kit itself is published as a package, the Make file can also depend
on that Make kit package.

The generated `App.tsx` must import components from the package root:

```tsx
import {
  CustomerStatusCard,
  MetricGrid,
  PageHeader,
} from "design-system-ai-lab";
```

The generated app must import styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Figma Make must not import from internal package paths.

Allowed:

```tsx
import { Button } from "design-system-ai-lab";
```

Not allowed:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

---

## Required guidelines setup

The Make kit guidelines should point to the root guideline file and supporting
files.

Recommended configuration:

```txt
Package:
design-system-ai-lab

Guidelines root:
Guidelines.md

Guidelines supporting files:
setup.md
styles.md
tokens.md
components/*
composition/*
prompts/*
review/*
```

If the guidelines are copied into a Make kit repository, keep the same logical
structure so Figma Make can find the setup, token, component, composition,
prompt and review rules.

---

## Design system vocabulary

Figma Make should use the package vocabulary in this order of preference:

1. Business patterns when they match the screen intent.
2. Decision components for screen structure.
3. Generic components for reusable UI blocks.
4. Form components for dialogs and input flows.
5. Custom markup only when no existing component or pattern fits.

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

---

## Form components

Form primitives:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

Use these components for form fields.

Do not generate raw inline-styled form controls.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="Account owner" />
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

Use these components to help users understand context, risks, metrics and next
actions.

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

---

## Token rules

Figma Make should use existing tokens only.

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

Compatibility aliases are available for generated code:

```txt
--background
--foreground
--border
--input-background
--radius-sm
--radius-md
```

These aliases exist to make Figma Make and shadcn-like output more tolerant.
They do not replace the official `--ec-*` token system.

Figma Make must not create:

- new colors
- new gradients
- new shadow styles
- new radius values
- decorative effects
- arbitrary custom layouts that break the system

The visual identity should remain sober, B2B, readable and action-oriented.

---

## UX generation principle

Every generated screen should help the user answer three questions:

1. What is happening?
2. Why does it matter?
3. What should I do next?

Generated screens should usually include:

1. clear user goal and page title
2. customer or business context
3. decision-relevant metrics
4. priority risks or blockers
5. recommended actions
6. a way to create, review or assign a follow-up action

---

## Recommended Figma Make workflow

### Step 1 — Start from the package

Figma Make should receive the design system package before generating screens.

The expected setup is:

- React components available to Make
- package styles available to Make
- design tokens available to Make
- component usage rules available in the prompt
- business pattern rules available in the prompt

The prompt should explicitly say that no local components or styles should be
created.

---

### Step 2 — Give the user goal first

A prompt should start with the user role and objective.

Good example:

```txt
Create a desktop customer monitoring interface for a service team.

User goal:
Help the user understand customer status, identify priority risks and decide
which actions to take next.
```

Bad example:

```txt
Create a nice dashboard for a customer.
```

The first prompt gives an experience goal.

The second prompt invites generic UI generation.

---

### Step 3 — List the package imports

The prompt should explicitly tell Figma Make to import from the package root.

Example:

```txt
Import all components from `design-system-ai-lab`.
Import styles from `design-system-ai-lab/styles.css`.
Do not import from internal package paths.
```

This makes generation easier to review and keeps the package API stable.

---

### Step 4 — Prefer business patterns

The prompt should list the preferred patterns.

Example:

```txt
Use CustomerStatusCard for customer context.
Use ConnectivityCoverageCard for monitoring coverage.
Use RenewalRiskSummary for renewal context.
Use ValueProofCard for service outcomes.
Use CreateActionDialog for action creation.
```

This prevents Figma Make from rebuilding known sections manually.

---

### Step 5 — Define the expected screen structure

The prompt should describe the intended information hierarchy.

Example:

```txt
Screen structure:
1. PageHeader with title, description and CreateActionDialog action
2. CustomerStatusCard with customer, plan, contract, Account owner and coverage
3. MetricGrid with three decision-relevant metrics
4. ConnectivityCoverageCard if monitoring coverage is important
5. PriorityList with AlertCard items sorted by severity
6. ActionList with ActionCard items for recommended next steps
```

The value of the generated screen depends more on structure than on decoration.

---

### Step 6 — Define constraints

The prompt should include explicit constraints.

Example:

```txt
Constraints:
- Use existing package components and patterns
- Import styles from `design-system-ai-lab/styles.css`
- Do not create local component wrappers
- Do not create a local design system package
- Do not create inline-styled form fields
- Use existing tokens only
- Keep the interface B2B, sober and readable
- Prioritize actionability over decoration
- Use the primary button only for the main action
- Every alert must include a recommendation
- Every action must include an owner, due date and priority
```

Constraints are what make AI generation compatible with design system
governance.

---

### Step 7 — Review against acceptance criteria

After generation, the designer should check:

- Does the screen have one clear user goal?
- Does it import from `design-system-ai-lab`?
- Does it import `design-system-ai-lab/styles.css`?
- Does it use existing components and patterns?
- Does it avoid local wrappers and local clones?
- Does it use form components for form fields?
- Is the primary action obvious?
- Are critical states visually distinguishable?
- Are metrics decision-relevant?
- Do alerts include recommendations?
- Do actions include owner, due date and priority?
- Can the layout be explained in terms of user decision-making?

If not, the designer should iterate with a refinement prompt.

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
2. CustomerStatusCard with customer, plan, contract, Account owner, renewal date and coverage
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

## Anti-prompt

Avoid prompts such as:

```txt
Create a beautiful SaaS dashboard with modern cards, gradients and charts.
```

This is not compatible with the demo objective.

It encourages Figma Make to invent:

- new visual styles
- decorative components
- generic dashboard patterns
- charts without decision purpose
- UI that looks plausible but is not governed by the design system

---

## What to show in the demo

### 1. Show Storybook foundations

Show that the system has tokens, colors and typography.

Key message:

> These foundations are what keep generated screens visually consistent.

---

### 2. Show components and patterns

Show that the design system already exists as a controlled catalog.

Key message:

> These are the components and patterns the AI is allowed to use.

---

### 3. Show the AI Usage Guide

Show that component usage is governed by rules.

Key message:

> The AI does not only receive components. It receives usage rules.

---

### 4. Show the reference prompt

Show that the prompt is not asking for a generic dashboard.

Key message:

> The prompt defines the role, goal, structure, constraints and acceptance
> criteria.

---

### 5. Generate or simulate the screen in Figma Make

Show how Figma Make can generate a first version using the system.

Key message:

> The AI composes with the system rather than inventing from scratch.

---

### 6. Review the generated screen

Review the output against the checklist.

Key message:

> The designer remains responsible for evaluating and improving the experience.

---

## What this demo should not claim

Do not claim that:

- AI-generated screens are automatically production-ready
- designers no longer need to review interfaces
- Figma Make replaces UX work
- prompts alone are enough to create good products
- a design system removes the need for governance

The correct claim is:

> AI becomes more useful when the design system provides the vocabulary, rules
> and constraints for generation.

---

## Success criteria for the demo

The demo is successful if the audience understands that:

- the design system is not only a visual library
- it can become a controlled generation framework
- AI can reduce repetitive screen production
- designers remain responsible for UX quality
- prompts become more reliable when grounded in components and rules
- Figma Make can be positioned as a screen composition accelerator

---

## Final narrative

The designer is not replaced by Figma Make.

The designer moves upstream.

Instead of producing every screen manually, the designer defines:

- the system
- the rules
- the patterns
- the constraints
- the quality criteria

Figma Make can then generate coherent first drafts inside that system.

The design system becomes the infrastructure that makes AI-assisted interface
production reliable.
