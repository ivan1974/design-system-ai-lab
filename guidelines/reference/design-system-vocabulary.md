# Design system vocabulary

## Status

```txt
REFERENCE / DESIGN SYSTEM VOCABULARY / CURRENT PUBLIC API
```

## Purpose

This file defines the current design-system vocabulary available to GenAI.

Use it to avoid invented component names and to choose DS material by intent.

This file is not a component implementation guide.

It is a vocabulary and selection reference.

---

## Core rule

Components are means, not constraints.

Do not think:

```txt
business concept → fixed component
```

Think:

```txt
user intent → needed UI behavior → suitable DS material
```

If no suitable component exists, compose from primitives rather than inventing a component name.

---

## Public import boundary

Generated product code may use public design-system exports from:

```txt
src/design-system/primitives
src/design-system/components
src/design-system/foundations
```

Generated product code must not import from:

```txt
src/app/components/ui/*
@radix-ui/*
third-party implementation packages
src/design-system/internal/*
```

Primitives may use implementation packages internally.

Screens should use the project design-system API.

---

## Available primitives

These primitives are currently exported from `src/design-system/primitives`.

Use them for generic UI behavior, interaction and structure.

```txt
Accordion
Alert
Badge
Button
Checkbox
Collapsible
Dialog
DropdownMenu
Input
Pill
Popover
Progress
ScrollArea
Select
Separator
Sheet
Switch
Table
Tabs
Tag
Tooltip
```

---

## Primitive usage by intent

### Actions

Use:

```txt
Button
Dialog
Sheet
DropdownMenu
```

For:

```txt
primary action
secondary action
confirmation
short focused task
action menu
```

Avoid using static components as actions.

---

### Status and labels

Use:

```txt
Badge
Pill
Tag
Alert
Progress
```

For:

```txt
status
category
priority
attention state
completion or progress when a value is provided
```

Do not communicate status by color alone.

---

### Forms and user input

Use:

```txt
Input
Checkbox
Select
Switch
Button
Dialog
```

For:

```txt
search input
filter values
confirmation
settings
short action creation
```

Use form controls only when the user can input or change data.

Do not use disabled inputs to display static facts.

---

### Navigation and disclosure

Use:

```txt
Tabs
Accordion
Collapsible
Popover
Tooltip
ScrollArea
Sheet
```

For:

```txt
stable views of the same object
optional detail
evidence depth
contextual explanation
large side content
scrollable dense areas
```

Do not hide trust-critical information behind interaction when it must be visible for decision-making.

---

### Data and comparison

Use:

```txt
Table
Tabs
ScrollArea
Badge
Progress
```

For:

```txt
asset inventory
comparison
prioritization
structured lists
large dense content
```

Prefer tables or dense rows when the user needs comparison across assets or records.

---

### Structure and separation

Use:

```txt
Separator
ScrollArea
Tabs
Accordion
Collapsible
```

For:

```txt
section separation
secondary detail
structured scan flow
nested evidence or support content
```

Avoid excessive nesting.

---

## Available product components

These components are currently exported from `src/design-system/components`.

Use them when their intent matches the screen.

```txt
AllFiltersPanel
AssetInventoryRow
CheckboxOption
FilterDropdown
InstalledBaseHeader
InstalledBaseWorkspace
MainNavigation
SearchField
ViewFilterBar
```

Supporting exports:

```txt
HealthBadge
StatusLabel
```

Use supporting exports only when they fit the local asset inventory context.

---

## Product component usage by intent

### InstalledBaseHeader

Use for:

```txt
Installed Base page orientation
asset/service workspace title
high-level screen context
```

Do not use it repeatedly as a section title.

---

### MainNavigation

Use for:

```txt
main application navigation
section navigation when the screen requires app-level context
```

Do not use for local filtering or tabs.

---

### ViewFilterBar

Use for:

```txt
switching between stable inventory views
quick view-level segmentation
```

Do not use it for every small filter.

---

### SearchField

Use for:

```txt
search by asset, document, site, customer or record label
```

Search is useful when the user needs to find a known item or narrow a dense list.

---

### FilterDropdown

Use for:

```txt
single filter group
status filter
family filter
coverage filter
connectivity filter
```

Do not overload one dropdown with unrelated filter types.

---

### AllFiltersPanel

Use for:

```txt
advanced filtering
multiple filter groups
inventory refinement
```

Do not show a heavy filter panel when one simple filter or search is enough.

---

### CheckboxOption

Use inside filter or selection experiences when the user selects one or more options.

Do not use it for display-only status.

---

### AssetInventoryRow

Use for:

```txt
asset inventory row
asset comparison
asset prioritization
scan-heavy asset list
```

Use when the user needs to compare multiple assets quickly.

Do not use it for generic records unrelated to assets.

---

### HealthBadge / StatusLabel

Use for asset inventory status display when the existing asset inventory model fits the screen.

Do not use these for unrelated product status unless the meaning is equivalent.

---

### InstalledBaseWorkspace

Use as a reference composition for Installed Base experiences.

It can inspire workspace structure.

Do not treat it as mandatory for every asset-related prompt.

---

## When no component exists

If a needed idea is not represented by a current component:

```txt
compose from primitives
keep the intent clear
use existing typography, spacing and status primitives
avoid inventing a component name
avoid local design-system clones
```

Examples:

```txt
Evidence trail
  compose with Alert, Badge/Pill/Tag, Table, Accordion, Collapsible or simple semantic sections

Recommendation detail
  compose with Alert, Button, Badge/Pill/Tag, Dialog, Accordion, Table or semantic sections

Reference information
  compose with semantic sections, Table, Badge/Pill/Tag and Separator

Document list
  compose with Table, SearchField, FilterDropdown, Badge/Pill/Tag and Button
```

These examples describe composition intent, not component names.

---

## Do not invent these as components

Do not use component names that are not exported by the current design system.

If a concept is needed, compose it from available primitives and components.

Examples of concepts that should be composed unless a public component is later added:

```txt
evidence list
recommendation card
detail section
asset summary card
score bar
customer status summary
renewal risk summary
value proof summary
action card
action list
```

Write the UI, not a fictional import.

---

## Selection checklist

Before selecting a component, ask:

```txt
What is the user trying to do?
Is this display, input, navigation, disclosure, status, action or comparison?
Does a current DS component already cover this behavior?
Would a primitive composition be clearer than inventing a component?
Does the component choice preserve domain meaning?
Does the component choice avoid unnecessary complexity?
```

---

## Final principle

Use the smallest current DS vocabulary that supports the prompt intent.

Do not invent components.

Do not force components.

Compose with intent.
