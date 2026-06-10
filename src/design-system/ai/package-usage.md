# Package Usage — Design System AI Lab

## Purpose

This document explains how to use `design-system-ai-lab` as a reusable React
package.

The package exposes:

- React components
- form components
- decision components
- business patterns
- TypeScript declarations
- compiled CSS styles
- design tokens
- compatibility aliases for generated code
- usage rules for AI-assisted generation

The goal is to make the design system consumable by:

- another React app
- a prototype app
- Storybook
- Figma Make / Make kits
- an AI-assisted interface generation workflow

---

## Package entry points

The package exposes two public entry points.

For React components and patterns:

```txt
design-system-ai-lab
```

For styles and design tokens:

```txt
design-system-ai-lab/styles.css
```

---

## Package output

After running the design system build, the expected output is:

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

The key files are:

- `dist/index.js` — compiled JavaScript entry point
- `dist/index.d.ts` — TypeScript declaration entry point
- `dist/styles.css` — compiled Tailwind CSS, tokens and aliases

---

## Build command

Use:

```bash
npm run build:ds
```

This command should:

1. build the JavaScript package with Vite
2. generate the CSS bundle
3. generate TypeScript declarations
4. remove unnecessary build artifacts

The resulting package should be ready to consume locally or publish to npm.

---

## Public API rule

The public API is the package root.

Allowed:

```tsx
import { Button } from "design-system-ai-lab";
```

Not allowed:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

This protects consumers when internal files are reorganized.

---

## Component imports

A consuming app should import components, forms, decision components and
patterns from the package root.

Example:

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

Do not import from internal component paths such as:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
```

Internal paths are not part of the public API.

---

## CSS import

The consuming app must import the design system CSS once.

Recommended import:

```tsx
import "design-system-ai-lab/styles.css";
```

This import should happen near the root of the consuming app, for example in:

```txt
src/main.tsx
src/App.tsx
src/index.tsx
```

The CSS includes:

- Tailwind-generated utilities used by the components
- design system CSS variables
- compatibility aliases for generated code
- typography defaults
- base styles required by the components

---

## Token model

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

Compatibility aliases are also provided for Figma Make and shadcn-like
generated code:

```txt
--background
--foreground
--border
--input-background
--radius-sm
--radius-md
```

The aliases improve tolerance for generated code.

They do not replace the official `--ec-*` token system.

---

## Minimal usage example

```tsx
import {
  Badge,
  Button,
  Card,
  MetricCard,
  PageHeader,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export function ExampleScreen() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Customer monitoring"
          description="Understand customer status, risks and next actions."
          actions={<Button>Create action</Button>}
        />

        <Card title="Package import OK">
          <div className="flex items-center gap-2">
            <Badge tone="primary">Active plan</Badge>
            <Badge tone="warning">Connectivity partial</Badge>
          </div>
        </Card>

        <section className="grid gap-4 md:grid-cols-3">
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 of 25 assets monitored"
            trend="-12% this month"
          />
        </section>
      </div>
    </main>
  );
}
```

---

## Pattern-based usage example

Prefer business patterns when they match the screen intent.

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  CreateActionDialog,
  CustomerStatusCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export function CustomerMonitoringScreen() {
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
          Account owner="Sarah Moreau"
          renewalDate="Aug 5, 2026"
          assetsCovered="25 assets — 3 sites"
          coverage="68% connected"
          badges={[
            { label: "Active plan", tone: "primary" },
            { label: "Connectivity partial", tone: "warning" },
          ]}
        />

        <MetricGrid>
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 of 25 assets monitored"
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

        <PriorityList title="Priority alerts">
          <AlertCard
            severity="critical"
            title="Critical equipment no longer monitored"
            equipment="Main HVAC control unit"
            description="The customer has no visibility on a critical asset."
            recommendation="Escalate to support and notify the customer proactively."
          />
        </PriorityList>

        <ActionList title="Recommended actions">
          <ActionCard
            title="Plan connectivity review with the customer"
            owner="Account owner"
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

## Local package test with npm pack

Before publishing or using the package in another local app, run:

```bash
npm pack --dry-run
```

This shows which files would be included in the package.

Expected files include:

```txt
package.json
README.md
dist/index.js
dist/index.d.ts
dist/styles.css
dist/components/*.d.ts
dist/decision/*.d.ts
dist/forms/*.d.ts
dist/patterns/*.d.ts
```

The package should not include:

- `src/`
- `.storybook/`
- `node_modules/`
- local build cache files
- generated screenshots
- experimental files not needed by consumers

---

## Local installation in another app

After building the package, create a local tarball:

```bash
npm pack
```

This creates a file such as:

```txt
design-system-ai-lab-0.2.0.tgz
```

In a consuming React app, install it with:

```bash
npm install ../path/to/design-system-ai-lab/design-system-ai-lab-0.2.0.tgz
```

Then import from the package root:

```tsx
import { Button, CustomerStatusCard } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

---

## Styling rule

Consumers should not recreate the design system tokens manually.

They should import:

```tsx
import "design-system-ai-lab/styles.css";
```

The design system owns:

- colors
- radius
- shadows
- typography defaults
- component utility classes
- compatibility aliases for generated code

Consuming apps may compose layouts using approved utility classes, but they
should not redefine the design system tokens unless intentionally creating a new
theme.

---

## AI generation rule

When this package is used by an AI tool, the tool should generate screens by
importing components from the package root.

Example:

```tsx
import {
  CustomerStatusCard,
  MetricGrid,
  PageHeader,
  PriorityList,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

The AI should not generate new base components if an approved component or
pattern already exists.

Preferred rules:

- use `CustomerStatusCard` for customer context
- use `ConnectivityCoverageCard` for monitoring coverage
- use `RenewalRiskSummary` for renewal context
- use `ValueProofCard` for service outcomes
- use `MetricGrid` and `MetricCard` for decision-relevant metrics
- use `PriorityList` and `AlertCard` for risks and alerts
- use `ActionList` and `ActionCard` for recommended actions
- use `CreateActionDialog` for action creation flows
- use form components for generated forms

---

## Figma Make usage principle

For Figma Make, this package should be treated as the controlled component and
pattern vocabulary.

Figma Make should receive:

1. the React component package
2. the CSS bundle
3. component contracts
4. business pattern rules
5. prompt rules
6. acceptance criteria

The goal is not to let Figma Make invent a visual system.

The goal is to make Figma Make compose screens inside an existing system.

---

## Expected Figma Make import model

A generated Figma Make screen should conceptually use:

```tsx
import {
  CreateActionDialog,
  CustomerStatusCard,
  MetricGrid,
  PageHeader,
  PriorityList,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

Then the generated screen should compose those components and patterns according
to the prompt and component contracts.

---

## Example Figma Make prompt

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

## Review checklist for generated screens

Before accepting a generated screen, verify:

- the screen has one clear user goal
- the screen imports components from `design-system-ai-lab`
- the screen imports `design-system-ai-lab/styles.css`
- the screen uses approved components and patterns
- the screen uses form components for form fields
- the screen does not create local component wrappers
- the screen does not create a local design-system package
- the primary action is obvious
- critical states are visually distinguishable
- metrics are decision-relevant
- alerts include recommendations
- actions include owner, due date and priority
- the layout can be explained in terms of user decision-making

---

## Current package limitations

This package is still a demo package.

Current limitations:

- no formal visual regression setup yet
- no full accessibility audit yet
- no full theming system beyond the current tokens and aliases
- Figma Make integration still requires Make kit validation
- business patterns are currently focused on service and customer monitoring
  examples

These limitations are acceptable for the demo.

The purpose of this package is to prove the workflow:

```txt
Design system foundations
→ component package
→ Storybook documentation
→ AI usage rules
→ Figma Make-ready generation
```

---

## Next steps

Recommended next steps:

1. run `npm pack --dry-run`
2. verify package contents
3. publish version `0.2.0`
4. update the Make kit dependency
5. connect the package to a Figma Make kit
6. test generation with the reference prompts
7. review the generated output against the acceptance checklist

---

## Final principle

The package is not just a technical artifact.

It is the executable form of the design system.

For AI-assisted design production, this matters because the AI should not
generate from imagination.

It should generate from a governed system:

- components
- forms
- decision components
- business patterns
- tokens
- rules
- prompts
- acceptance criteria
