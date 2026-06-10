# Decision layout

## Purpose

A decision layout is not just a visual layout.

It is an information sequence that helps the user move from context to evidence, from evidence to priority and from priority to action.

The goal is to create generated screens that help users understand what is happening, why it matters, what can be trusted and what should happen next.

---

## Core principle

Design the layout around the decision the user needs to make.

Do not design around:

```txt
available data
visual decoration
AI output first
generic dashboard structure
```

The screen should help the user answer:

```txt
What is happening?
Why does it matter?
What can I trust?
What should I do next?
What is observed, what is interpreted and what still needs validation?
```

---

## Evidence-aware decision flow

Preferred flow:

```txt
Visible context
→ asset scope, source scope and source strength when relevant
→ trusted facts and measurable signals
→ risks or blockers
→ evidence-aware recommendations
→ owned actions
→ expected outcome or proof status when relevant
→ human validation when needed
```

Avoid:

```txt
AI recommendation
→ missing evidence
→ vague action
```

For asset-heavy screens, raw Health facts, lifecycle facts and Intelligence interpretation should not be collapsed into a single visual layer.

Expected outcomes, technical outcomes, internal proof and customer-ready proof should remain distinguishable when they affect trust.

Critical decisions should keep human validation visible.

---

## Standard decision layout

Use this as the default structure for focused decision screens:

```txt
PageHeader
Business, customer or asset context pattern
Trusted facts, source scope and source strength when relevant
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
Expected outcome or proof status when relevant
CreateActionDialog or Dialog, if needed
```

This structure supports:

```txt
orient
→ understand
→ trust
→ prioritize
→ act
```

---

## Workspace decision layout

Use this when the user must scan, compare, select, drill down and act:

```txt
WorkspaceShell
PageHeader
FilterBar
MasterDetailLayout
  List or table
  DetailPanel
    DetailPanelHeader
    DetailPanelTabs when needed
    DetailPanelBody
    DetailPanelFooter or StickyActionBar
```

This structure supports:

```txt
filter
→ scan
→ select
→ inspect
→ validate
→ act
```

---

## Monitoring decision layout

Use when the user needs to monitor a customer, service, system or account.

Decision:

```txt
What requires attention now, and what should I do next?
```

Use:

```txt
PageHeader
CustomerStatusCard
MetricGrid with MetricCard items
ConnectivityCoverageCard when monitoring coverage matters
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for action creation
```

If the user must review multiple monitored assets or risks, use the workspace decision layout instead.

---

## Renewal risk decision layout

Decision:

```txt
Which risk matters most, what proof is missing and what mitigation action should be launched?
```

Use:

```txt
PageHeader
RenewalRiskSummary
ValueProofCard
MetricGrid with MetricCard items
PriorityList with AlertCard items
ActionList with ActionCard items
CreateActionDialog for mitigation action creation
```

If multiple renewal blockers must be reviewed one by one, use a queue + detail workspace.

---

## Asset intelligence decision layout

Decision:

```txt
Is the asset recommendation ready for action or customer communication?
```

Use:

```txt
WorkspaceShell
FilterBar
MasterDetailLayout
  Asset list
  DetailPanel
    Overview
    Health
    Intelligence
    History
    Documents
```

Keep separate:

```txt
asset identity
connectivity status
raw Health facts
lifecycle facts
Intelligence interpretation
recommendation
expected outcome
validation state
```

---

## Acceptance criteria

A decision layout passes review when:

```txt
The layout supports one clear decision.
The screen starts with context and facts.
Evidence appears before interpretation.
Actions are owned, dated and prioritized.
The layout avoids card saturation when the task needs drill-down.
Human validation remains visible for critical or customer-facing decisions.
```
