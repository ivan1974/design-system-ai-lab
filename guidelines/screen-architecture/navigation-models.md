# Navigation models

## Purpose

This file defines reusable navigation models for generated decision workspaces.

Navigation should follow the decision flow. It should not be added simply to make an interface look like a product app.

---

## Core rule

Use navigation when the user needs to:

```txt
move between levels of detail
compare multiple items
review evidence
track actions
prepare a customer discussion
```

Do not add navigation when a simple decision flow is enough.

---

## Approved navigation models

| Model | Use when | Structure | Avoid |
| --- | --- | --- | --- |
| Single-page decision flow | One decision can be made from one scrollable page. | PageHeader → context → facts → risks → actions. | Tabs or drawers with little content. |
| Master-detail workspace | User reviews a list and selects an item. | List/table + DetailPanel. | Repeating full cards for every item. |
| Queue + detail review | User processes risks, recommendations or actions. | Queue list + detail + sticky actions. | Losing owner/due/priority context. |
| Tabbed detail panel | Selected object has multiple user questions. | Overview, Health, Intelligence, History, Documents. | Tabs based only on internal data sources. |
| Two-column review page | User needs summary + supporting detail visible together. | Primary column + secondary evidence/actions column. | Equal-weight columns with no hierarchy. |
| Progressive disclosure panel | Evidence depth is high. | Summary → expandable sections → documents/raw data. | Showing all evidence at same level. |
| Evidence drill-down | Trust is the main task. | Claim → source → scope → evidence → validation. | Confidence label without evidence. |

---

## Master-detail workspace

Use when the user must scan a set of items and inspect one item in detail.

Recommended structure:

```txt
WorkspaceShell
FilterBar
MasterDetailLayout
  List or table
  DetailPanel
```

Good for:

```txt
installed base explorer
asset recommendation review
customer portfolio risk review
renewal risk queue
recommendation validation queue
```

The list side should support:

```txt
scanability
stable identifiers
status
priority
last activity or freshness
coverage or source scope when relevant
```

The detail side should support:

```txt
identity
facts
source context
interpretation
recommendations
actions
history or documents when needed
```

---

## Queue + detail review

Use when the user must process a set of risks, recommendations, proof gaps or actions.

Required information per queue item:

```txt
label
priority or status
affected scope
freshness or due date
owner when assigned
```

Detail view should show:

```txt
why it matters
supporting evidence
validation state
next action
```

---

## Tabbed detail panel

Use tabs when the selected object has multiple distinct user questions.

Tabs should represent user questions, not internal data sources.

Good tabs for asset detail:

```txt
Overview
Health
Intelligence
History
Documents
```

Good tabs for recommendation detail:

```txt
Summary
Evidence
Impact
Validation
Actions
```

Good tabs for customer detail:

```txt
Overview
Coverage
Risks
Value proof
Actions
```

---

## Two-column review page

Use when the user needs summary and supporting detail visible together.

Recommended pattern:

```txt
Primary column
- decision context
- risks
- recommendations

Secondary column
- source context
- proof gaps
- actions
- documents
```

Use for:

```txt
QBR readiness
renewal review
customer value proof preparation
```

---

## Navigation anti-patterns

Do not generate:

```txt
navigation without a decision purpose
sidebars for simple pages
tabs with one section each
nested tabs inside tabs
breadcrumbs without hierarchy
multiple primary action areas
detail panels with no selected item state
```

---

## Acceptance criteria

A generated screen passes the navigation check when:

```txt
Navigation supports a clear user decision or workflow.
Master-detail is used when the user must select and drill down.
Tabs separate user questions.
Progressive disclosure is used when evidence depth is high.
Actions remain easy to find and are not duplicated across unrelated regions.
```
