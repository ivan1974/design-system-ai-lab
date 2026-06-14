# Design system vocabulary

## Status

```txt
REFERENCE / DESIGN SYSTEM VOCABULARY / CURRENT PUBLIC API
```

## Purpose

This file defines the current public design-system vocabulary available to generated screens.

It is an inventory and import-boundary reference.

It is not a component-selection guide and not a component usage guide.

For selection logic, read:

```txt
guidelines/reference/component-selection.md
```

For component usage cards, read:

```txt
guidelines/reference/component-usage-cards.md
```

For the detailed `AssetInventoryRow` contract, read:

```txt
guidelines/reference/asset-inventory-row-usage.md
```

---

## Core rule

Components are means, not constraints.

Do not think:

```txt
business concept -> fixed component
```

Think:

```txt
user intent -> needed UI behavior -> suitable DS material or local composition
```

You must inspect available primitives, components and exports before creating local UI.

You may create local screen-specific components when no exported component fits.

You must not invent package components or fictional imports.

---

## Published package imports

When generating React application code with the published package, import the stylesheet:

```tsx
import "design-system-ai-lab/styles.css";
```

Import public exports from:

```tsx
import { Button, Alert, Badge } from "design-system-ai-lab";
```

Allowed package paths:

```txt
design-system-ai-lab
design-system-ai-lab/styles.css
design-system-ai-lab/design-system/primitives
design-system-ai-lab/design-system/components
```

---

## Source import boundary

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
fictional component paths
```

Primitives may use implementation packages internally.

Screens should use the project design-system API or the public package API.

---

## Available primitives

These primitives are currently exported from `src/design-system/primitives` and from the package public API.

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

## Available product components

These components are currently exported from `src/design-system/components` and from the package public API.

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

---

## Supporting exports

These are exported helpers associated with the asset inventory component family.

```txt
HealthBadge
StatusLabel
```

Use supporting exports only when their meaning fits the local asset inventory context.

---

## Local screen-specific components

Local components are allowed when no exported component fits the brief.

Allowed examples:

```txt
EvidenceRow
AssetDetailSection
RecommendationBlock
ReviewActionItem
SourceContextBlock
```

These local components must:

```txt
serve the screen-specific intent
use package primitives when useful
respect tokens and visual guidelines
avoid replacing an exported component that fits
avoid recreating the design system
```

They must not be imported from `design-system-ai-lab` unless explicitly exported by the package.

---

## Forbidden fictional imports

Do not write imports such as:

```tsx
import { EvidenceRow } from "design-system-ai-lab";
import { RecommendationCard } from "design-system-ai-lab";
import { AssetDetailSection } from "design-system-ai-lab";
```

unless these names are listed in the available exports above.

Write local screen-specific components instead.

---

## Final check

Before using a component name in generated code, verify:

```txt
The package stylesheet is imported.
The component exists in this vocabulary or in the package public API.
The component supports the brief intent.
The component fits the screen structure.
The component is not being forced mechanically.
Local composition is used only when appropriate.
No fictional package component or import is used.
```
