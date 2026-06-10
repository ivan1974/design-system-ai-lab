# Components Overview

## Purpose

This file gives Figma Make an overview of the approved components available in the `design-system-ai-lab` package.

Use this file to decide which component to use before generating a screen.

The goal is to compose interfaces from the existing design system components, not to create new base components.

---

## Required import

Import all approved components from the package root:

```tsx
import {
  PageHeader,
  Card,
  MetricCard,
  AlertCard,
  ActionCard,
  Badge,
  Button,
  Dialog,
} from "design-system-ai-lab";
```

Import the design system styles once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not import from internal paths.

Do not import from local recreated components.

---

## Approved component list

The Make kit currently supports these components:

- `PageHeader`
- `Card`
- `Button`
- `Badge`
- `MetricCard`
- `AlertCard`
- `ActionCard`
- `Dialog`

Use these components as the controlled vocabulary for generated screens.

---

## Component decision guide

Use this guide to choose the right component.

| User interface need | Use this component |
| --- | --- |
| Introduce the screen and main action | `PageHeader` |
| Group related information | `Card` |
| Trigger an action | `Button` |
| Show status, tone or metadata | `Badge` |
| Show decision-relevant metrics | `MetricCard` |
| Show risks, blockers, alerts or important signals | `AlertCard` |
| Show recommended, planned or overdue actions | `ActionCard` |
| Support a short focused creation or confirmation flow | `Dialog` |

If none of these components seems to fit, first try to compose the requested UI from existing components.

Only suggest a new component if the requested pattern cannot be expressed with the current vocabulary.

---

## Component roles

### PageHeader

Use `PageHeader` once at the top of a main screen.

It should explain:

- what the screen is about
- what the user is trying to accomplish
- what the primary action is, when relevant

Do not use `PageHeader` inside every section.

---

### Card

Use `Card` to group related information.

Good uses:

- customer summary
- contract context
- service status
- risk summary
- recommended action group
- renewal context

Each card should have one clear purpose.

Do not use cards as decoration.

---

### Button

Use `Button` for explicit user actions.

Good uses:

- create action
- review risk
- view details
- plan follow-up
- check connectivity

Use only one main primary action per screen section.

Do not use vague labels such as OK, Submit, More or Click here.

---

### Badge

Use `Badge` for concise status, tone or metadata.

Good uses:

- active plan
- critical risk
- partial connectivity
- overdue action
- healthy status

Do not use badges as buttons.

Do not make badge labels long.

---

### MetricCard

Use `MetricCard` for metrics that help the user decide what to do.

Good uses:

- connected equipment rate
- open alerts
- overdue actions
- adoption level
- SLA status
- renewal risk signal

Avoid vanity metrics or raw data without interpretation.

---

### AlertCard

Use `AlertCard` for risks, blockers, anomalies, alerts or important signals.

Every alert must include a recommendation.

Critical alerts should appear before lower-priority alerts.

Do not use `AlertCard` for neutral notes or generic information.

---

### ActionCard

Use `ActionCard` for recommended, planned or overdue work.

Every action must include:

- owner
- due date
- priority

Action titles should describe concrete work to do.

Do not use vague titles such as Follow up, Check, Review or Update.

---

### Dialog

Use `Dialog` for short focused flows.

Good uses:

- create an action
- assign ownership
- confirm a simple decision

Do not use `Dialog` for complex multi-step workflows, large forms or exploratory analysis.

---

## Composition principle

Generated screens should be composed from components according to user decisions.

Do not start from available data.

Start from the user question:

1. What is happening?
2. Why does it matter?
3. What should I do next?

Then choose components that support those questions.

---

## Preferred screen composition

For a customer monitoring screen, use this composition:

```txt
PageHeader
Customer summary Card
MetricCard row
Priority AlertCards
Recommended ActionCards
Dialog for creating an action
```

For a renewal risk review screen, use this composition:

```txt
PageHeader
Contract and renewal summary Card
Adoption and connectivity MetricCards
Renewal risk AlertCards
Mitigation ActionCards
Optional Dialog for creating a mitigation action
```

---

## Allowed layout wrappers

Simple semantic or layout wrappers are allowed:

```txt
main
section
header
div
article
```

Use them only for layout, grouping and semantic structure.

Do not turn wrappers into new design system components.

---

## Forbidden component patterns

Do not create local replacements for design system components.

Do not generate local files such as:

```txt
src/components/ui/button.tsx
src/components/ui/card.tsx
src/components/ui/badge.tsx
src/components/ui/dialog.tsx
```

Do not recreate components with Radix, MUI, shadcn-style components or custom implementations.

Do not create a local package named:

```txt
packages/design-system-ai-lab
```

Use the published package instead.

---

## Correct component usage example

```tsx
import {
  PageHeader,
  Card,
  MetricCard,
  AlertCard,
  ActionCard,
  Badge,
  Button,
  Dialog,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

export default function App() {
  return (
    <main className="min-h-screen bg-(--ec-color-background) p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <PageHeader
          title="Customer monitoring"
          description="Understand customer status, risks and next actions."
          actions={<Button>Create action</Button>}
        />

        <Card title="Customer status" description="Current account context.">
          <div className="flex items-center gap-2">
            <Badge tone="primary">Active plan</Badge>
            <Badge tone="warning">Connectivity partial</Badge>
          </div>
        </Card>

        <section className="grid gap-4 md:grid-cols-3">
          <MetricCard
            label="Connected equipment"
            value="68%"
            helper="17 connected assets out of 25"
            trend="+8% this quarter"
          />
        </section>
      </div>
    </main>
  );
}
```

---

## Component review checklist

After generation, verify:

- all design system components are imported from `design-system-ai-lab`
- styles are imported from `design-system-ai-lab/styles.css`
- no local component replacements were created
- `PageHeader` is used for screen context
- `Card` groups related information
- `MetricCard` is used only for decision-relevant metrics
- `AlertCard` includes recommendations
- `ActionCard` includes owner, due date and priority
- `Badge` communicates short status or metadata
- `Button` labels are explicit and action-oriented
- `Dialog` is used only for a short focused flow

---

## Final principle

Components are the controlled vocabulary of the design system.

Figma Make should compose with this vocabulary instead of inventing a new one.
