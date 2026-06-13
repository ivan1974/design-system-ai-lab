# Component selection guidance

## Status

```txt
REFERENCE / COMPONENT SELECTION / CURRENT DS ONLY
```

## Purpose

This file helps GenAI choose between existing design-system primitives and components.

It only covers currently exported DS material.

It does not introduce new component names.

It does not define fixed mappings between business concepts and components.

---

## Core rule

Choose components by intent.

```txt
User intent → needed UI behavior → existing DS material
```

Do not choose components by business label alone.

```txt
Business concept → fixed component
```

is not allowed as a selection strategy.

---

## Before selecting a component

Answer:

```txt
Is the user reading, comparing, filtering, editing, confirming or acting?
Is the information a fact, status, signal, interpretation, evidence, recommendation or action?
Does the screen need density, disclosure, confirmation or navigation?
Is the interaction necessary or can the information be displayed directly?
```

Then choose the smallest existing DS material that supports the intent.

---

## Use Table when the user compares structured records

Use:

```txt
Table
```

When the user needs to:

```txt
compare records
scan rows
sort mentally by status or priority
review structured data
see multiple fields at once
```

Common uses:

```txt
asset inventory
document list
service records
history events
recommendation list when table density is useful
```

Avoid when:

```txt
there is only one object
content is narrative
user needs a focused detail view
```

---

## Use AssetInventoryRow for asset scan and prioritization

Use:

```txt
AssetInventoryRow
```

When the screen is about:

```txt
Installed Base inventory
asset scan
asset prioritization
asset comparison
selecting an asset from a list
```

It is more specific than a generic table row.

Use only when the object is an asset and the row model fits the asset inventory context.

Avoid for:

```txt
documents
generic tasks
recommendations without asset row context
customers
contracts
```

---

## Use InstalledBaseWorkspace only as a reference composition

Use:

```txt
InstalledBaseWorkspace
```

When the prompt asks for a full Installed Base workspace and the existing composition matches the intent.

Do not use it automatically for every asset-related prompt.

If the prompt asks for a different organization, compose from available primitives and components.

---

## Use InstalledBaseHeader for page orientation

Use:

```txt
InstalledBaseHeader
```

When the screen needs:

```txt
main Installed Base orientation
workspace title
high-level context
page-level actions or framing
```

Avoid using it as a repeated section header.

---

## Use MainNavigation for app-level navigation

Use:

```txt
MainNavigation
```

When the generated screen needs app-level navigation context.

Avoid for:

```txt
local tab switching
filters
section navigation
small panels
```

---

## Use ViewFilterBar for stable view switching

Use:

```txt
ViewFilterBar
```

When the user switches between stable views of the same inventory or workspace.

Examples:

```txt
All assets
Connected assets
Needs attention
Uncovered assets
```

Avoid when the need is a simple data filter or a one-off control.

---

## Use SearchField for known-item search

Use:

```txt
SearchField
```

When the user needs to find or narrow records by text.

Examples:

```txt
asset name
asset reference
site
room
document name
```

Avoid using search when the screen only contains a few visible items.

---

## Use FilterDropdown for one filter group

Use:

```txt
FilterDropdown
```

When the user filters by one clear category.

Examples:

```txt
health status
asset family
connectivity
coverage
vendor
document type
```

Avoid mixing unrelated filter types in a single dropdown.

---

## Use AllFiltersPanel for advanced filtering

Use:

```txt
AllFiltersPanel
```

When the user needs multiple filter groups or advanced refinement.

Use for dense inventories or complex lists.

Avoid when one `SearchField` or one `FilterDropdown` is enough.

---

## Use CheckboxOption inside multi-select choices

Use:

```txt
CheckboxOption
```

When the user selects multiple options inside a filtering or selection experience.

Avoid using it for display-only status.

---

## Use Alert for bounded attention signals

Use:

```txt
Alert
```

When the screen needs to show:

```txt
warning
risk
missing evidence
partial visibility
critical status
validation required
```

An alert should be bounded and meaningful.

Avoid using alerts as decorative cards or generic containers.

If action is expected, pair the alert with a clear action path using existing material such as `Button`, `Dialog`, `Table` or structured content.

---

## Use Badge, Pill or Tag for compact labels

Use:

```txt
Badge
Pill
Tag
```

When the UI needs compact labels for:

```txt
status
category
priority
scope
validation
source type
connectivity
coverage
```

Do not rely on color alone.

Prefer specific text:

```txt
Non-connected
Partial visibility
Expected outcome
Review needed
```

Avoid vague text:

```txt
Status
Info
AI
High
```

---

## Use Progress for provided progress or completion values

Use:

```txt
Progress
```

When a progress or completion value is provided.

Examples:

```txt
completion rate
readiness progress
coverage completion
setup progress
```

Do not invent values.

Do not use progress to imply precision when the underlying data is qualitative.

---

## Use Tabs for stable views of the same object

Use:

```txt
Tabs
```

When the user moves between stable views of the same object or workspace.

Examples:

```txt
Overview
Health
Intelligence
Passport
History
Documents
```

Use tabs when each view has enough distinct content and the user may switch between them repeatedly.

Avoid tabs when content is short, sequential or better handled as progressive detail.

---

## Use Accordion or Collapsible for optional detail

Use:

```txt
Accordion
Collapsible
```

When the screen needs optional or secondary detail.

Examples:

```txt
component details
evidence details
document category details
advanced explanation
proof trail detail
```

Avoid hiding information that is essential for the decision.

---

## Use Dialog for focused short tasks

Use:

```txt
Dialog
```

When the user must complete a short focused task.

Examples:

```txt
confirm action
create simple follow-up
edit a short field
review before saving
```

Avoid dialogs for long exploration, complex review or dense evidence reading.

Use clear title and action labels.

---

## Use Sheet for side content when persistent context helps

Use:

```txt
Sheet
```

When side content should appear while preserving the current screen context.

Examples:

```txt
asset detail panel
filter panel
review side panel
```

Avoid Sheet when a small `Dialog`, `Popover` or inline section would be enough.

---

## Use Popover or Tooltip for lightweight explanation

Use:

```txt
Popover
Tooltip
```

When the user needs short contextual help.

Examples:

```txt
explain a status
clarify source scope
explain validation state
show short contextual detail
```

Avoid placing essential proof, actions or long content in a tooltip.

---

## Use DropdownMenu for action menus

Use:

```txt
DropdownMenu
```

When the user needs a compact list of actions or options.

Avoid when the primary action should be immediately visible.

---

## Use Input, Select, Checkbox and Switch for real input

Use:

```txt
Input
Select
Checkbox
Switch
```

Only when the user can enter, choose or change something.

Do not use form controls for static facts.

For display-only facts, compose with text, labels, `Table`, `Badge`, `Pill`, `Tag`, `Separator` and layout.

---

## Use Separator for visual grouping

Use:

```txt
Separator
```

When a subtle boundary improves scanability.

Avoid using heavy cards or decorative dividers when a simple separator is enough.

---

## Use ScrollArea for dense bounded content

Use:

```txt
ScrollArea
```

When a section has bounded dense content that should not stretch the full page.

Examples:

```txt
long asset list
filter list
document list
history list
```

Avoid hiding important first-level information inside scroll areas.

---

## Selection anti-patterns

Do not:

```txt
invent a component import
use unavailable component names
map a business concept to a fixed component
use disabled form controls as display
use badges or cards as buttons
hide essential evidence in tooltips
use alerts as decorative cards
use tabs for short sequential content
use dialogs for large review workflows
use progress without a provided value
```

---

## Selection checklist

Before finalizing component selection, verify:

```txt
The selected component exists in design-system-vocabulary.md.
The component supports the user intent.
The component preserves domain meaning.
The component does not add unnecessary interaction.
The component does not hide trust-critical information.
The component choice avoids fictional imports and local clones.
```

---

## Final principle

Select the smallest existing DS material that supports the prompt intent.

When in doubt, prefer clear composition from existing primitives over invented component names.
