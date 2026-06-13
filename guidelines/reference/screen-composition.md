# Screen composition guidance

## Status

```txt
REFERENCE / SCREEN COMPOSITION / GUIDANCE ONLY
```

## Purpose

This file helps GenAI choose an appropriate screen structure before choosing detailed components.

It explains when to use:

```txt
simple page
list/detail
table + detail panel
tabs
dashboard-like summaries
context / signal / evidence / action flow
```

This file is not a pattern catalogue.

It does not force a layout.

Use it to compose screens that support the prompt intent, user role and decision need.

---

## Core rule

Screen structure follows the user task.

Do not start from a layout pattern.

Start from:

```txt
user role
user task
primary decision
main object
evidence and trust needs
action or follow-through needs
```

Then choose the smallest screen structure that supports that intent.

---

## Composition before component forcing

Choose the screen structure first.

Choose components second.

Do not force a product component when its built-in layout breaks the chosen structure.

```txt
Good composition + primitive structure
  better than forced product component with broken layout

Existing product component that fits
  use it

Existing product component that does not fit
  compose with primitives
```

The screen may use existing primitives to create a clear table, panel, row, section or detail area.

Do not invent component names.

Do not import from forbidden paths.

---

## Common composition flow

For operational service screens, a useful structure is often:

```txt
Context
→ Signal
→ Evidence
→ Decision or recommendation
→ Action
```

The exact order may change based on the prompt.

The meaning should not be blurred:

```txt
Context
  what is the scope, object or situation?

Signal
  what deserves attention?

Evidence
  what supports the signal or claim?

Decision or recommendation
  what should the user decide or consider?

Action
  what happens next, who owns it and when?
```

Do not expose all content at once when progressive disclosure would make the decision clearer.

Do not hide evidence when trust depends on it.

---

## Use a simple page when the task is focused

Use a simple page when:

```txt
the prompt asks for one clear task
the user needs a short summary or focused review
there is one main object or decision
there is limited content depth
there is no need for persistent side-by-side comparison
```

Good for:

```txt
single asset summary
single recommendation review
single action confirmation
small document review
short status overview
```

Possible DS material:

```txt
InstalledBaseHeader when it fits
Alert
Badge / Pill / Tag
Button
Table for short structured lists
Accordion / Collapsible for optional detail
Dialog for short confirmation
primitive sections when product components do not fit
```

Avoid a simple page when the user must compare many records or switch between stable views.

---

## Use list/detail when the user selects one item from many

Use list/detail when:

```txt
the user must scan multiple items
one selected item needs detail
context should remain visible while details change
selection and comparison are both important
```

Good for:

```txt
asset inventory + selected asset detail
recommendation queue + recommendation detail
document list + document metadata
history list + event detail
```

Possible DS material:

```txt
Table
AssetInventoryRow when its row layout fits
ScrollArea
Sheet when side-panel behavior is needed
regular split panel when static side-by-side layout is better
Tabs inside the detail area when views are stable
Alert for selected item attention
Badge / Pill / Tag for compact state
primitive row or section composition when product components do not fit
```

Use list/detail when the user benefits from staying in flow while changing selection.

Avoid list/detail when there is only one object or when the detail content is too large for a side area.

---

## Use table + detail panel for dense operational comparison

Use table + detail panel when:

```txt
comparison is important
the user needs dense rows
selected detail should not replace the list
asset or record status must be scanned quickly
```

Good for:

```txt
Installed Base asset inventory
asset health review
coverage review
document library with selected metadata
service action queue
```

Possible DS material:

```txt
Table
AssetInventoryRow only if its row model fits the columns and density
SearchField
FilterDropdown
AllFiltersPanel when filtering is complex
ScrollArea
Sheet only if side-panel behavior is needed
regular split panel for static table/detail layouts
Badge / Pill / Tag
Alert
primitive row composition for custom comparison needs
```

Prefer this over card grids when the user is comparing many operational records.

Do not force `AssetInventoryRow` if a custom table/grid is needed.

If row alignment, column density or split-panel proportion breaks, compose a cleaner table or row structure from primitives.

Avoid when the content is mostly narrative or when there are only a few items.

---

## Use tabs for stable views of the same object

Use tabs when:

```txt
the same object has several stable views
each view has distinct content
the user may return to views repeatedly
views are peers, not sequential steps
```

Good for:

```txt
asset detail views
workspace sections
reference / health / history / documents separation
```

Examples of tab labels when relevant:

```txt
Overview
Health
Intelligence
Passport
History
Documents
```

Possible DS material:

```txt
Tabs
TabsList
TabsTrigger
TabsContent
Table inside tabs when content is dense
Accordion / Collapsible inside tabs for optional depth
```

Avoid tabs when:

```txt
content is short enough to fit on one page
sections are sequential steps
one tab would hide critical information needed for the first decision
```

Tabs separate stable views.

They should not hide proof needed to trust the visible recommendation.

---

## Use dashboard-like summaries carefully

Use a dashboard-like summary only when the prompt asks for a high-level situation view or executive overview.

Even then, prefer a decision-oriented summary over a decorative metric grid.

Use dashboard-like structure when:

```txt
the user needs a quick portfolio or site-level snapshot
multiple signals must be summarized
there is no immediate row-level action
```

Avoid dashboard-like structure when:

```txt
the user needs to compare assets
there are many records to scan
action follow-through matters
proof and validation matter
```

A weak dashboard shows many equal cards.

A strong summary shows:

```txt
scope
few key signals
priority issue
trust or visibility limits
recommended next step when relevant
```

Possible DS material:

```txt
InstalledBaseHeader when it fits
Alert
Badge / Pill / Tag
Progress when value is provided
Table for prioritized records
primitive summary blocks when a card grid would be noisy
```

Do not generate decorative dashboards by default.

---

## Use progressive disclosure for evidence depth

Use progressive disclosure when:

```txt
users need quick orientation first
evidence is important but detailed
the screen has primary and secondary content
trust can be supported without exposing everything at once
```

Possible DS material:

```txt
Accordion
Collapsible
Tabs
Popover
Tooltip
Sheet when side-panel behavior is needed
ScrollArea
```

Good candidates for secondary disclosure:

```txt
component details
source details
historical evidence
document metadata
validation explanation
secondary metrics
```

Do not hide:

```txt
critical alert
primary recommendation
action owner
validation requirement
missing evidence that changes trust
```

---

## Use side panels carefully

Use a side panel when:

```txt
the user needs detail without losing list context
comparison and detail are both important
selected item detail is secondary to the working list
```

Possible DS material:

```txt
Sheet when side-panel behavior is needed
regular split panel when the panel is always visible
ScrollArea
Tabs
Accordion
Collapsible
Button
Badge / Pill / Tag
```

Avoid side panels when:

```txt
the detail content is the main task
content is too complex for a side area
the prompt asks for a focused single page
```

Do not create a side panel only for visual drama.

A side panel can be composed from primitives if `Sheet` behavior is not appropriate.

---

## Use dialogs only for short focused tasks

Use dialogs for:

```txt
confirming an action
creating or editing a short item
reviewing a small decision before save
```

Possible DS material:

```txt
Dialog
Input
Select
Checkbox
Switch
Button
```

Avoid dialogs for:

```txt
long evidence review
large asset detail
multi-step analysis
complex document browsing
```

Use a page, tab, side panel or disclosure instead.

---

## Organizing context / signal / evidence / action

Use this mental model when composing decision-support screens:

```txt
Context
  user, site, asset, contract, scope, role, timeframe

Signal
  alert, risk, gap, change, status, priority

Evidence
  source, freshness, telemetry, service history, document, validation

Interpretation
  meaning, risk, impact, confidence limits

Recommendation
  suggested decision or next step

Action
  owner, timing, priority, status
```

Not every screen needs every layer.

Use the layers required by the prompt and the trust level of the content.

---

## Composition by main object

### Asset-centered screen

Usually needs:

```txt
asset identity
location or hierarchy
status or condition
connectivity / coverage when relevant
evidence or source scope when trust matters
recommendation or action when relevant
```

Possible composition:

```txt
header
→ asset list or asset summary
→ selected asset detail
→ evidence or health section
→ recommendation or action path
```

Use asset product components only when their layout fits.

For custom asset comparison, use `Table` or primitive row composition rather than forcing `AssetInventoryRow`.

---

### Recommendation-centered screen

Usually needs:

```txt
recommendation summary
rationale
evidence references
priority
status
owner or reviewer
action plan
```

Possible composition:

```txt
context
→ recommendation
→ evidence
→ action owner and timing
→ validation status
```

Compose recommendation content from existing primitives and sections.

Do not invent `RecommendationCard` unless it exists in the current vocabulary.

---

### Document-centered screen

Usually needs:

```txt
document list
category
source
date
file type
download or view action
related asset or event
```

Possible composition:

```txt
search / filters
→ table or list
→ selected document metadata
→ action
```

Compose with current primitives and available filters/search.

Do not invent document-specific components.

---

### History-centered screen

Usually needs:

```txt
event timeline or event list
event type
date
source
related report or document
related asset or recommendation
```

Possible composition:

```txt
event list
→ selected event detail
→ related document or recommendation link
```

Compose with current primitives.

Do not invent timeline components unless they exist in the current vocabulary.

---

## When to avoid a dashboard

Avoid a dashboard when:

```txt
the prompt asks for operational work
users need to compare records
users need to act on a selected item
proof or evidence matters
recommendations need ownership
there are many assets, documents or events
```

Use a workspace, list/detail, table, tabs or simple page instead.

A dashboard may be useful only when the task is truly summarization across a portfolio or site.

---

## Composition anti-patterns

Avoid:

```txt
many equal cards
metrics before context
actions before the user understands the issue
evidence hidden when trust matters
tabs used for sequential steps
dialogs used for long review
side panels used as decoration
dashboards used for record comparison
all data exposed without prioritization
the same content repeated across sections
forced product components that break layout
oversized rows when dense comparison is needed
inline styles used to patch a broken component fit
```

---

## Composition checklist

Before finalizing a screen structure, verify:

```txt
The structure follows the prompt intent.
The main object is clear.
The primary decision or task is visible.
The screen starts with enough context.
Signals are prioritized.
Evidence is visible or accessible when trust matters.
Actions have a clear path when action is expected.
The selected structure is not heavier than the task requires.
The structure uses only current DS material.
Product components are used only when they fit the structure.
Primitive composition is used when flexibility is needed.
```

---

## Final principle

Choose the smallest screen structure that preserves intent, meaning, evidence and action.

Do not generate a dashboard when the user needs a workspace.

Do not generate a complex workspace when a simple page is enough.

Do not force a product component when primitive composition would produce a clearer result.
