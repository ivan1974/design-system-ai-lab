# Package usage guidance

## Status

```txt
REFERENCE / PACKAGE USAGE / FIGMA MAKE
```

## Purpose

This file explains how Figma Make should consume the published design-system package.

Use this when the Make kit uses the package rather than copied source files.

The goal is not to provide business-specific patterns.

The goal is to ensure generated screens use the package visual system and essential components before composing local UI.

---

## Canonical package

The package to import in generated React files is:

```txt
design-system-ai-lab
```

Do not import the design system from:

```txt
@make-kits/design-system-ai-lab-make-kit
```

That package name can appear in Figma Make internal project dependencies, but it is not the canonical design-system import path for generated code.

Generated application code should import from `design-system-ai-lab`.

---

## Required stylesheet import

Generated code must import the design-system stylesheet once at application entry level.

```tsx
import "design-system-ai-lab/styles.css";
```

The stylesheet is required for:

```txt
brand visual language
Tailwind theme utilities
CSS variables
base typography
component styles
focus states
surface and border tokens
```

Do not create a replacement stylesheet for package components.

Do not use a Make-kit wrapper stylesheet instead of the canonical package stylesheet in generated application code.

---

## Required component import behavior

Generated screens should use package components before creating local equivalents.

Prefer root imports from the package API:

```tsx
import {
  Alert,
  Badge,
  Button,
  Input,
  Select,
  Tabs,
  Table,
  SearchField,
  HealthBadge,
  StatusLabel
} from "design-system-ai-lab";
```

If Figma Make exposes only subpath imports, use:

```tsx
import { Button, Input, Select, Alert, Badge, Tabs, Table } from "design-system-ai-lab/design-system/primitives";
import { SearchField, HealthBadge, StatusLabel } from "design-system-ai-lab/design-system/components";
```

Do not import components from implementation packages, Make-kit wrapper packages, or app-local UI folders.

---

## Essential components that exist

The following components exist and should not be recreated locally when they fit the need:

```txt
Button
Input
Select
Checkbox
Switch
Badge
Pill
Tag
Alert
Tabs
Table
Dialog
Sheet
Popover
Tooltip
Progress
ScrollArea
SearchField
FilterDropdown
ViewFilterBar
AllFiltersPanel
AssetInventoryRow
HealthBadge
StatusLabel
```

Use these components as the first option for their normal UI role.

Compose with layout containers and simple semantic HTML around them when needed.

---

## Do not recreate local equivalents

Do not create local substitutes such as:

```txt
CustomButton
CustomInput
CustomSelect
CustomTabs
CustomBadge
StatusChip
StatusPill
HealthChip
LocalCard
BrandPanel
PremiumCard
EvidencePill
PriorityBadge
ValidationBadge
```

If the package has a matching component, import and use it.

If the package component does not fit exactly, compose around it rather than replacing it entirely.

---

## Raw HTML rule

Raw HTML controls are allowed only when no package component exists or when a package component cannot support the required behavior.

Do not use raw HTML for these when package components exist:

```txt
button → use Button
input → use Input or SearchField
select → use Select
checkbox → use Checkbox
status label → use Badge, Pill, Tag, HealthBadge or StatusLabel
tabs → use Tabs
alert message → use Alert
data table → use Table
```

Do not write comments such as:

```txt
no kit Input component available
no compiled kit Select available
```

when the component is listed in this file or in design-system-vocabulary.md.

---

## Current public paths

The package exposes:

```txt
design-system-ai-lab
design-system-ai-lab/styles.css
design-system-ai-lab/design-system/primitives
design-system-ai-lab/design-system/components
```

---

## Forbidden imports and paths

Generated code should not import from:

```txt
@make-kits/design-system-ai-lab-make-kit
src/app/components/ui/*
@radix-ui/*
third-party implementation packages
local design-system clones
fictional component paths
```

Primitives can depend on implementation packages internally.

Generated screens should use the public package API.

---

## Visual failure diagnosis

If the generated screen uses the correct components but the visual design looks raw, check first:

```txt
Is design-system-ai-lab/styles.css imported?
Is design-system-ai-lab@0.8.0 or later installed?
Is generated code importing components from design-system-ai-lab?
Are custom styles overriding the package styles?
Are local substitutes replacing package components?
```

Do not solve missing package styles by recreating component styles locally.

---

## Final principle

Use package components through the public API.

Import `design-system-ai-lab/styles.css` once.

Compose with primitives and semantic layout when needed.

Do not recreate the design system inside the generated screen.
