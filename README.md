# Design System AI Lab

Design System AI Lab is a React / TypeScript design system package built to
show how a coded design system can become a controlled generation
infrastructure for AI-assisted interface production.

The project demonstrates how designers can move from manually producing every
screen to defining a reusable system that AI tools can compose with.

The goal is not to replace design judgment.

The goal is to reduce repetitive screen production so designers can focus on:

- user understanding
- journey structure
- UX quality
- interaction logic
- design system governance
- generated screen review

---

## What this project demonstrates

This project demonstrates the full chain:

```txt
Design foundations
→ React component package
→ Storybook documentation
→ AI usage rules
→ Make kit guidelines
→ Figma Make-ready generation
```

It includes:

- a coded React design system
- CSS design tokens
- compatibility aliases for Figma Make / shadcn-like generators
- Radix UI primitives for accessible interactions
- Tailwind CSS utilities
- Storybook documentation
- form components for generated dialogs
- decision-oriented composition components
- business patterns ready for AI-assisted screen generation
- AI prompt guidelines
- Figma Make / Make kit preparation documents
- a package build consumable by another React app or Make file

---

## Core idea

A design system is not only a visual library.

It can become a **generation framework** for AI-assisted product interface
creation.

In this model:

- the designer defines the system
- the design system defines the vocabulary
- component contracts define usage rules
- prompts define the screen objective and constraints
- AI tools compose first drafts
- designers review, improve and validate the result

The AI should not generate from imagination.

It should generate from a governed system:

- foundations
- components
- forms
- decision components
- business patterns
- tokens
- usage rules
- prompt constraints
- acceptance criteria

---

## Tech stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Storybook
- explicit TypeScript declaration generation for the package build

---

## Project structure

```txt
src/
  design-system/
    ai/
      component-contracts.md
      demo-narrative.md
      demo-script.md
      design-system-instructions.md
      figma-make-setup.md
      make-kit-guidelines.md
      package-usage.md
      prompt-library.md

    components/
      badge.tsx
      button.tsx
      card.tsx
      dialog.tsx
      metric-card.tsx
      page-header.tsx

    decision/
      action-card.tsx
      action-list.tsx
      alert-card.tsx
      metric-grid.tsx
      priority-list.tsx
      section-header.tsx
      status-summary.tsx

    forms/
      field.tsx
      input.tsx
      label.tsx
      select.tsx
      textarea.tsx

    patterns/
      connectivity-coverage-card.tsx
      create-action-dialog.tsx
      customer-status-card.tsx
      renewal-risk-summary.tsx
      value-proof-card.tsx

    stories/
      ai/
      applications/
      components/
      decision/
      forms/
      foundations/
      patterns/

    tokens/
      tokens.css

    index.ts
    style-entry.ts
    styles.css

  demo/
  App.tsx
  index.css
  main.tsx
```

---

## Design system layers

The design system is organized into five main layers.

### Foundations

Foundations define the visual and structural base:

- colors
- typography
- spacing
- radius
- shadows
- status colors
- compatibility aliases

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

The package also provides compatibility aliases for Figma Make and
shadcn-like generators:

```txt
--background → var(--ec-color-background)
--foreground → var(--ec-color-text-primary)
--border → var(--ec-color-border)
--radius-sm → var(--ec-radius-sm)
```

The aliases make generated code more tolerant without replacing the official
`--ec-*` token system.

### Components

Generic UI components:

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `MetricCard`
- `PageHeader`

### Forms

Form primitives for generated dialogs and input flows:

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

These components help Figma Make avoid raw inline-styled form controls.

### Decision components

Composition components for decision-oriented screens:

- `ActionCard`
- `ActionList`
- `AlertCard`
- `MetricGrid`
- `PriorityList`
- `SectionHeader`
- `StatusSummary`

These components guide generated screens toward clear customer context,
priorities, metrics and next actions.

### Business patterns

Higher-level patterns ready for AI-assisted screen composition:

- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerStatusCard`
- `RenewalRiskSummary`
- `ValueProofCard`

These patterns are intentionally more opinionated. They help Figma Make compose
complete screens without rebuilding every section from primitive components.

---

## Package public API

Components should be imported from the package root:

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  Badge,
  Button,
  Card,
  ConnectivityCoverageCard,
  CreateActionDialog,
  CustomerStatusCard,
  Dialog,
  Field,
  Input,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  RenewalRiskSummary,
  StatusSummary,
  ValueProofCard,
} from "design-system-ai-lab";
```

Styles should be imported once near the root of the consuming app:

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

---

## Example usage

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  Button,
  CreateActionDialog,
  CustomerStatusCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <PageHeader
          title="Customer monitoring"
          description="Understand customer status, risks and next actions."
          actions={<CreateActionDialog />}
        />

        <CustomerStatusCard
          customerName="Greenfield Industries"
          plan="Advanced service plan"
          contract="#CR-2024-441"
          csm="Sarah Moreau"
          renewalDate="Aug 5, 2026"
          assetsCovered="25 assets — 3 sites"
          coverage="68% connected"
          badges={[
            { label: "Active plan", tone: "primary" },
            { label: "Connectivity partial", tone: "warning" },
            { label: "Renewal in 62 days", tone: "neutral" },
          ]}
        />

        <MetricGrid>
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 of 25 assets monitored"
            trend="-12%"
          />
          <MetricCard
            label="Open critical alerts"
            value="2"
            helper="Customer communication required"
          />
          <MetricCard
            label="Overdue actions"
            value="3"
            helper="Ownership must be clarified"
          />
        </MetricGrid>

        <PriorityList
          title="Priority alerts"
          description="Risks requiring customer or service team action."
        >
          <AlertCard
            severity="critical"
            title="Critical equipment no longer monitored"
            equipment="Main HVAC control unit"
            description="The customer has no visibility on a critical asset."
            recommendation="Escalate to support and notify the customer proactively."
          />
        </PriorityList>

        <ActionList
          title="Recommended actions"
          description="Next steps to reduce customer risk."
          actions={<Button variant="secondary">Review plan</Button>}
        >
          <ActionCard
            title="Plan connectivity review with the customer"
            owner="CSM"
            dueDate="This week"
            priority="high"
          />
        </ActionList>
      </div>
    </main>
  );
}
```

---

## Figma Make usage model

This package is designed to support a Figma Make / Make kit workflow.

The intended model is:

```txt
React design system package
+ CSS styles
+ component contracts
+ prompt rules
+ acceptance criteria
= controlled AI-assisted screen generation
```

Figma Make should not generate from a blank canvas.

It should generate from:

- the component package
- the approved component vocabulary
- the design tokens
- the usage rules
- the business patterns
- the designer’s prompt

Recommended Make behavior:

- use business patterns first when available
- use decision components for screen structure
- use form components inside dialogs
- use `Button` directly as a `Dialog` trigger
- import styles from `design-system-ai-lab/styles.css`
- avoid local component wrappers
- avoid inline-styled raw form fields
- avoid creating a local `packages/design-system-ai-lab` folder

---

## Storybook

Run Storybook with:

```bash
npm run storybook
```

Storybook is the main demo and documentation surface.

It documents:

- foundations
- components
- forms
- decision components
- business patterns
- application screens
- AI usage guides
- Figma Make setup
- Make kit guidelines

Recommended navigation:

```txt
Design System / Foundations
Design System / Components
Design System / Forms
Design System / Decision
Design System / Patterns
Design System / Applications
Design System / AI
```

Build Storybook with:

```bash
npm run build-storybook
```

---

## Demo screens

The project includes application-level demo screens composed from the design
system.

### Customer monitoring

A customer monitoring screen for service or customer success teams.

It helps the user:

- understand the customer situation
- identify priority risks
- review service indicators
- decide the next best actions
- create a follow-up action

### Renewal risk review

A renewal preparation screen showing how the same design system can compose a
different business interface.

It helps the user:

- review renewal risk
- understand value proof gaps
- identify adoption and connectivity blockers
- prepare mitigation actions
- structure renewal discussion points

---

## AI documentation

The project includes AI-oriented documents under:

```txt
src/design-system/ai/
```

### `component-contracts.md`

Defines how each component and pattern should be used.

Examples:

- `AlertCard` must include a recommendation.
- `ActionCard` must include owner, due date and priority.
- `MetricCard` should only be used for decision-relevant metrics.
- `CreateActionDialog` should be used for action creation flows.
- `CustomerStatusCard` should be used before rebuilding customer context.

### `prompt-library.md`

Contains reusable prompts for generating screens with the design system.

Examples:

- customer monitoring screen
- renewal risk review
- connectivity coverage review
- service value proof summary
- alert triage workflow
- executive service summary

### `demo-narrative.md`

Provides a spoken narrative for explaining the demo.

### `figma-make-setup.md`

Explains the intended workflow for using the design system with Figma Make.

### `make-kit-guidelines.md`

Defines operational guidelines for Make kit usage.

### `package-usage.md`

Explains how to consume the built design system package.

---

## Install

```bash
npm install
```

---

## Run the app

```bash
npm run dev
```

This starts the Vite app.

---

## Build the app

```bash
npm run build
```

This builds the Vite application.

---

## Build the design system package

```bash
npm run build:ds
```

This builds the reusable design system package into `dist/`.

Expected output:

```txt
dist/
  index.js
  index.d.ts
  styles.css
  components/
    badge.d.ts
    button.d.ts
    card.d.ts
    dialog.d.ts
    metric-card.d.ts
    page-header.d.ts
  decision/
    action-card.d.ts
    action-list.d.ts
    alert-card.d.ts
    metric-grid.d.ts
    priority-list.d.ts
    section-header.d.ts
    status-summary.d.ts
  forms/
    field.d.ts
    input.d.ts
    label.d.ts
    select.d.ts
    textarea.d.ts
  patterns/
    connectivity-coverage-card.d.ts
    create-action-dialog.d.ts
    customer-status-card.d.ts
    renewal-risk-summary.d.ts
    value-proof-card.d.ts
```

The package exposes:

- `dist/index.js` for JavaScript
- `dist/index.d.ts` for TypeScript declarations
- `dist/styles.css` for styles and tokens

---

## Test the package locally

First build the design system:

```bash
npm run build:ds
```

Then check the package contents:

```bash
npm pack --dry-run
```

Expected package contents include:

```txt
README.md
package.json
dist/index.js
dist/index.d.ts
dist/styles.css
dist/components/*.d.ts
dist/decision/*.d.ts
dist/forms/*.d.ts
dist/patterns/*.d.ts
```

Create the local tarball:

```bash
npm pack
```

Install it in another local React app:

```bash
npm install ../design-system-ai-lab/design-system-ai-lab-0.2.0.tgz
```

Then import from the package root:

```tsx
import { Button, CustomerStatusCard } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

---

## Main commands

```bash
npm install
npm run dev
npm run storybook
npm run build-storybook
npm run build
npm run build:ds
npm pack --dry-run
npm pack
```

---

## Demo narrative

The demo should not be presented as:

> AI can generate screens automatically.

It should be presented as:

> A controlled design system can make AI-generated interfaces more consistent,
> reusable and aligned with UX intent.

The key point is:

> The designer does not disappear from the production process. The designer
> moves upstream: from producing every screen manually to designing the system
> that makes generated screens coherent.

---

## Current status

This project is still a demo project, but it now covers the core workflow:

```txt
coded design system
→ documented Storybook
→ reusable package
→ Make-ready guidelines
→ AI-assisted screen composition
```

Current limitations:

- there is no formal visual regression setup yet
- accessibility is supported by component choices but not fully audited
- Figma Make integration still requires Make kit configuration and validation
- business patterns are intentionally focused on service / customer monitoring
  examples

These limitations are acceptable for the purpose of the demo.

---

## Recommended next steps

1. Keep Storybook as the main demo surface.
2. Publish the package as version `0.2.0`.
3. Update the Make kit dependency to `design-system-ai-lab@0.2.0`.
4. Add the updated guidelines to the Make kit.
5. Test Figma Make generation with the reference prompts.
6. Review generated output against the acceptance checklist.
7. Iterate on missing patterns where Make still improvises.

---

## Final principle

This project treats the design system as an executable product asset.

It is not only a UI library.

It is a controlled language for interface generation.

The stronger the design system rules are, the more useful AI-assisted interface
production becomes.
