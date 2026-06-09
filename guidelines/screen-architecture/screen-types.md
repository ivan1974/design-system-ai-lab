# Screen types

## Purpose

This file defines which type of screen Figma Make should generate before it chooses components.

Composition rules explain how to arrange components. Screen types explain which screen architecture fits the user task.

---

## Core rule

Choose the screen type from the user task, not from the available data.

Ask first:

```txt
What decision, review or workflow is the user trying to complete?
```

Then choose the navigation model, domain objects, information depth and components.

---

## Screen type taxonomy

| Screen type | User intent | Recommended architecture | Avoid |
| --- | --- | --- | --- |
| Overview screen | Understand a situation quickly. | PageHeader, summary pattern, 2-4 key metrics, priority risks, actions. | Decorative dashboards, too many metrics. |
| Monitoring screen | Detect what needs attention now. | Context, coverage, freshness, signals, priority risks, owned actions. | Hiding visibility limits, implying full monitoring. |
| Investigation screen | Drill down into one issue or object. | DetailPanel or TwoColumnLayout, facts, evidence, diagnostics, history. | Starting with AI recommendation. |
| Decision screen | Choose between actions or validate a recommendation. | Facts, criteria, options, recommendation, validation, actions. | Unsupported recommendations, hidden assumptions. |
| Workflow screen | Create, assign or track work. | Structured form or action list, owners, due dates, status. | Raw forms, vague actions. |
| Workspace screen | Review many items, select one, drill down and act. | WorkspaceShell, FilterBar, MasterDetailLayout, DetailPanel, StickyActionBar. | One-column card stack. |
| Review readiness screen | Prepare a customer or internal review. | Readiness summary, proof gaps, recommendations, blockers, actions. | Presenting internal proof as customer-ready. |
| Evidence review screen | Check whether a claim can be trusted. | Source, scope, freshness, strength, evidence rows, validation state. | Confidence language without evidence. |

---

## When to use a workspace screen

Use a workspace screen when the prompt includes:

```txt
multiple assets
multiple customers
multiple recommendations
multiple risks
a queue
a review list
a selectable item
drill-down
detail panel
tabs
filtering
```

Recommended architecture:

```txt
WorkspaceShell
PageHeader
FilterBar
MasterDetailLayout
  List or table
  DetailPanel
    DetailPanelHeader
    DetailPanelTabs
    DetailPanelBody
    DetailPanelFooter or StickyActionBar
```

Do not generate a vertical stack of business cards when the user asks for a workspace, queue or drill-down flow.

---

## Selection rules

### If the user needs to monitor

Use a monitoring screen.

The screen should answer:

```txt
What changed?
What is at risk?
What can I trust?
What action is needed?
```

### If the user needs to investigate

Use an investigation screen or workspace screen.

The screen should separate:

```txt
observed facts
source and freshness
diagnostic detail
interpretation
recommended action
```

### If the user needs to compare or review many items

Use a workspace screen.

The screen should support:

```txt
filter
scan
select
drill down
act
```

### If the user needs to prepare a customer discussion

Use a review readiness screen.

The screen should show:

```txt
readiness
proof gaps
risks
recommendation status
preparation actions
```

### If the user needs to validate a claim or recommendation

Use an evidence review screen.

The screen should show:

```txt
source
scope
strength
freshness
evidence rows
validation state
```

---

## Acceptance criteria

A generated screen passes this screen-type check when:

```txt
The screen architecture matches the user task.
The screen does not default to a one-column card stack when review or drill-down is required.
The screen uses workspace layouts when multiple items need selection or comparison.
The screen shows facts before interpretation.
The screen keeps source and validation visible when trust matters.
```
