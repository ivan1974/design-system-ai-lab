# Demo Script — Make-ready Design System

<!-- markdownlint-disable MD024 -->

## Purpose

This script supports a 5 to 7 minute demo of Design System AI Lab.

The objective is to explain how a coded design system can become controlled
infrastructure for AI-assisted interface generation.

The demo should not be presented as:

> AI replaces designers.

It should be presented as:

> A governed design system makes AI-generated interfaces more consistent,
> reusable and aligned with UX intent.

---

## Demo message in one sentence

The designer does not disappear from the production process.

The designer moves upstream:

> from producing every screen manually to designing the system that makes
> generated screens coherent.

---

## Demo flow overview

Recommended flow:

1. Explain the designer problem.
2. Introduce the make-ready design system principle.
3. Show the application screen.
4. Show Storybook foundations.
5. Show components, forms, decision components and patterns.
6. Show AI usage rules and component contracts.
7. Show the package build.
8. Connect the approach to Figma Make.
9. Close on the role of the designer.

---

## 1. Opening — the problem

### What to say

In many product teams, designers spend a lot of time producing screen
variations, aligning UI inconsistencies, redrawing known patterns and preparing
repetitive handoff material.

This work is necessary, but it is not always where design creates the most
value.

The highest-value work is often upstream:

- understanding the user situation
- clarifying the journey
- structuring the information hierarchy
- defining interaction logic
- aligning stakeholders
- validating experience quality
- improving the design system itself

The question behind this demo is:

> How can we reduce repetitive screen production without losing UX quality or
> design governance?

### What to show

No screen is needed yet.

Start with the intent of the demo.

### Key message

> The opportunity is not to replace designers. The opportunity is to make the
> design system strong enough to support controlled generation.

---

## 2. Core concept — make-ready design system

### What to say

The answer is not to ask AI to generate any interface from a blank canvas.

That usually produces generic dashboards, inconsistent styles and plausible but
weak UX.

The idea here is different:

> The AI should generate inside a controlled system.

That system includes:

- foundations
- coded components
- form primitives
- decision components
- business patterns
- design tokens
- component contracts
- prompt rules
- acceptance criteria

In other words, the design system becomes a language that AI tools can compose
with.

### What to show

Open the README or project structure briefly.

Show that the project contains:

```txt
foundations
components
forms
decision
patterns
stories
ai guidelines
package build
```

### Key message

> The prompt is only reliable when it is backed by a system of components,
> patterns and rules.

---

## 3. Show the application screen

### What to say

This first screen is a customer monitoring interface.

It is not a static mockup.

It is composed from reusable design system components and patterns:

- `PageHeader`
- `CustomerStatusCard`
- `MetricGrid`
- `MetricCard`
- `PriorityList`
- `AlertCard`
- `ActionList`
- `ActionCard`
- `CreateActionDialog`

The screen is designed to help a service or customer success user answer three
questions:

1. What is happening?
2. Why does it matter?
3. What should I do next?

### What to show

Open the Vite app:

```bash
npm run dev
```

Show:

- the page header
- the customer status card
- the metrics grid
- the priority alerts
- the recommended actions
- the action creation dialog

### Key message

> The interface is not manually assembled as a one-off screen. It is a
> composition of reusable product components and business patterns.

---

## 4. Show Storybook foundations

### What to say

Storybook is the main demo and documentation surface.

Start with the foundations because they explain how generated screens remain
visually consistent.

The system uses official `--ec-*` tokens, plus compatibility aliases for Figma
Make and shadcn-like generators.

### What to show

Open Storybook:

```bash
npm run storybook
```

Show:

```txt
Design System / Foundations / Tokens
Design System / Foundations / Colors
Design System / Foundations / Typography
```

Point out:

- the `--ec-*` token namespace
- color and status tokens
- typography hierarchy
- compatibility aliases such as `--background` and `--foreground`

### Key message

> Foundations make generated screens consistent before any component is even
> composed.

---

## 5. Show components, forms, decision components and patterns

### What to say

Storybook is the living catalog of the design system.

It allows us to inspect each component independently, understand its variants
and clarify its intended use.

For AI generation, this matters because the AI needs a controlled vocabulary.

If the vocabulary is unclear, generated screens will be inconsistent.

### What to show — components

Show:

```txt
Design System / Components / Button
Design System / Components / Badge
Design System / Components / Card
Design System / Components / Dialog
Design System / Components / MetricCard
Design System / Components / PageHeader
```

Highlight:

- `Button` works directly as a `Dialog` trigger
- no local `ForwardedButton` wrapper is needed
- component variants are documented

### What to show — forms

Show:

```txt
Design System / Forms / Field
Design System / Forms / Input
Design System / Forms / Select
Design System / Forms / Textarea
```

Explain:

> These components prevent AI tools from generating raw inline-styled form
> fields.

### What to show — decision components

Show:

```txt
Design System / Decision / MetricGrid
Design System / Decision / StatusSummary
Design System / Decision / PriorityList
Design System / Decision / ActionList
Design System / Decision / SectionHeader
```

Explain:

> These components help screens support decisions, not just data display.

### What to show — patterns

Show:

```txt
Design System / Patterns / CustomerStatusCard
Design System / Patterns / ConnectivityCoverageCard
Design System / Patterns / RenewalRiskSummary
Design System / Patterns / ValueProofCard
Design System / Patterns / CreateActionDialog
```

Explain:

> Patterns are the most useful layer for AI-assisted generation because they
> reduce improvisation.

### Key message

> The design system is becoming a reusable generation framework, not just a UI
> library.

---

## 6. Show a second application screen

### What to say

The important proof is not that we can build one screen.

The important proof is that the same design system can compose different
business screens.

Here, we use the same vocabulary to create a renewal risk review interface.

The goal is different:

- review renewal exposure
- understand value proof gaps
- detect adoption and connectivity blockers
- prepare mitigation actions
- structure renewal discussion points

But the system remains the same.

### What to show

Open:

```txt
Design System / Applications / Renewal Risk Review
```

Show that the screen reuses:

- `PageHeader`
- `RenewalRiskSummary`
- `ValueProofCard`
- `MetricGrid`
- `PriorityList`
- `ActionList`
- `CreateActionDialog`

### Key message

> Different business screens can be generated from the same governed system.

---

## 7. Show AI usage guide and component contracts

### What to say

Components alone are not enough.

For AI-assisted generation, the system also needs rules.

For example:

- `AlertCard` must include a recommendation.
- `ActionCard` must include owner, due date and priority.
- `MetricCard` should only be used for decision-relevant indicators.
- `CreateActionDialog` should be used for action creation flows.
- `CustomerStatusCard` should be used before rebuilding customer context.

These rules prevent AI from generating visually plausible but weak interfaces.

### What to show

Open Storybook pages:

```txt
Design System / AI Usage Guide
Design System / Make Kit Guidelines
Design System / Figma Make Setup
```

Optionally open files:

```txt
src/design-system/ai/component-contracts.md
src/design-system/ai/prompt-library.md
src/design-system/ai/make-kit-guidelines.md
```

### Key message

> The AI does not only receive components. It receives component usage
> contracts and UX constraints.

---

## 8. Show the package build

### What to say

To be useful beyond this demo app, the design system must be consumable as a
package.

That means another app, prototype or Make file should be able to import the
components and styles.

We now have a package build organized by layers:

- `components`
- `forms`
- `decision`
- `patterns`

### What to show

Run or show:

```bash
npm run build:ds
npm pack --dry-run
```

Expected package contents:

```txt
dist/index.js
dist/index.d.ts
dist/styles.css
dist/components/*.d.ts
dist/forms/*.d.ts
dist/decision/*.d.ts
dist/patterns/*.d.ts
```

Show that another app can import from the public API:

```tsx
import {
  Button,
  CustomerStatusCard,
  MetricGrid,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

### Key message

> The design system is not only documented. It is executable and consumable.

---

## 9. Connect to Figma Make

### What to say

The next step is to connect this package and these guidelines to Figma Make
through a Make kit workflow.

The intended model is:

```txt
React package
+ CSS styles
+ component contracts
+ prompt rules
+ acceptance criteria
= controlled AI-assisted screen generation
```

The prompt should not say:

> Create a beautiful modern dashboard.

It should say:

> Create a decision-oriented customer monitoring interface using the approved
> design-system-ai-lab package, its styles and its business patterns.

This makes the AI output easier to review, easier to reuse and more aligned
with UX intent.

### What to show

Open:

```txt
Design System / Make Kit Guidelines
```

Show a reference prompt:

```txt
Create a complete customer monitoring screen in App.tsx using
`design-system-ai-lab`.

Use CustomerStatusCard for customer context.
Use MetricGrid and MetricCard for metrics.
Use PriorityList and AlertCard for priority risks.
Use ActionList and ActionCard for recommended actions.
Use CreateActionDialog for the primary action.

Import components from `design-system-ai-lab`.
Import styles from `design-system-ai-lab/styles.css`.

Do not recreate local components.
Do not create inline-styled form fields.
Do not create a local design-system package.
```

### Key message

> Figma Make should not generate from a blank canvas. It should generate from
> the design system vocabulary, rules and constraints.

---

## 10. Closing — role of the designer

### What to say

The key point is not that AI replaces designers.

The key point is that designers can move upstream.

Instead of manually producing every screen variation, the designer defines:

- the design system
- the reusable patterns
- the UX rules
- the prompt constraints
- the acceptance criteria

AI can then generate first drafts inside that system.

The designer remains responsible for:

- the user problem
- the experience logic
- the information hierarchy
- the interaction model
- the final quality

### Final sentence

> The design system becomes the infrastructure that makes AI-assisted interface
> production reliable.

---

## Short version — 90 seconds

This project shows how a design system can become a controlled generation
framework for AI-assisted interface production.

Instead of asking AI to generate screens from scratch, we give it a governed
system:

- React components
- CSS tokens
- Storybook documentation
- component contracts
- prompt rules
- acceptance criteria

The customer monitoring and renewal risk review screens show that the same
component vocabulary can compose multiple business interfaces.

The package build proves that the system can be consumed outside the original
app.

The Figma Make guidelines explain how the same package and rules can be used to
generate screens in a controlled way.

The designer is not replaced.

The designer moves upstream: from producing every screen manually to designing
the system that makes generated screens coherent.

---

## Demo checklist

Before presenting, verify:

- `npm run dev` works
- `npm run storybook` works
- `npm run build:ds` works
- `npm run build-storybook` works
- `npm pack --dry-run` shows only expected files
- Storybook shows foundations, components, forms, decision components and
  patterns
- application stories render correctly
- AI documentation is visible in Storybook

---

## Common questions and suggested answers

### Does this replace designers?

No.

It reduces repetitive interface production.

Designers still define the system, the experience logic, the information
hierarchy and the quality criteria.

---

### Is the generated code production-ready?

Not automatically.

The point is to generate a structured first draft that is easier to review and
refine because it uses approved components.

---

### Why not just prompt Figma Make directly?

Because unconstrained prompts tend to produce generic UI.

The value comes from constraining generation with a real design system,
component contracts and acceptance criteria.

---

### Why use Storybook?

Storybook makes the component vocabulary visible, testable and understandable.

It is the living catalog of what AI is allowed to compose with.

---

### Why package the design system?

Because Figma Make, other apps or future prototypes need a reusable source of
truth.

The package makes the design system executable outside the original project.
