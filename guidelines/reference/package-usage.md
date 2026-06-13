# Package usage guidance

## Status

```txt
REFERENCE / PACKAGE USAGE / FIGMA MAKE
```

## Purpose

This file explains how Figma Make should consume the published design-system package.

The package is the mandatory visual foundation. Specific component usage is conditional.

The brief intent, user decision, evidence rules, principles and domain knowledge take priority over mechanical component usage.

---

## Non-negotiable setup

Generated application code must import the published package stylesheet:

```tsx
import "design-system-ai-lab/styles.css";
```

This import is mandatory, even if the generated screen uses only a few package components.

The generated screen should use the design-system visual language, tokens and base styles.

Generated code should import components from the published package when they are useful:

```tsx
import { Button, Alert, Badge } from "design-system-ai-lab";
```

If subpath imports are needed, use only public package paths:

```tsx
import { Button, Input, Select } from "design-system-ai-lab/design-system/primitives";
import { SearchField, HealthBadge, StatusLabel } from "design-system-ai-lab/design-system/components";
```

The canonical package import path is `design-system-ai-lab`.

---

## Component usage is conditional

Importing the package stylesheet is mandatory.

Using a specific component is conditional.

Use existing package primitives or components when they:

```txt
support the user intent
fit the required layout
preserve screen hierarchy
improve consistency with the design system
do not hide trust-critical information
```

Do not force a product component only because the business object sounds related.

If no component fits, create local screen-specific components or patterns, but compose them on top of the design-system visual language and principles.

---

## Local composition is allowed

Local components are allowed when they are screen-specific compositions, for example:

```txt
EvidenceRow
AssetDetailSection
RecommendationBlock
ReviewActionItem
SourceContextBlock
```

These are acceptable when they compose existing DS material and do not redefine the visual system.

They should use package primitives where useful, such as:

```txt
Badge
Alert
Button
Tabs
Table
Separator
ScrollArea
Tooltip
Input
Select
SearchField
```

---

## Essential components to consider

Before creating local UI, consider whether one of these existing components fits the need:

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

Use these components when they support the brief. Do not force them when they break the brief.

---

## Do not recreate design-system essentials

Do not create local substitutes for existing essential components when they fit:

```txt
CustomButton
CustomInput
CustomSelect
CustomTabs
CustomBadge
StatusChip
HealthChip
BrandPanel
PremiumCard
```

If the package has a matching essential component and it fits, import and use it.

If it does not fit, compose locally while keeping the design-system styling and rules.

---

## Raw HTML rule

Raw HTML controls are allowed only when no package component exists or when a package component cannot support the required behavior.

Do not use raw HTML for these when package components fit:

```txt
button -> use Button
input -> use Input or SearchField
select -> use Select
checkbox -> use Checkbox
status label -> use Badge, Pill, Tag, HealthBadge or StatusLabel
tabs -> use Tabs
alert message -> use Alert
data table -> use Table
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

Generated code should not import design-system UI from:

```txt
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

If the generated screen uses the correct package but the visual design looks raw, check first:

```txt
Is design-system-ai-lab/styles.css imported?
Is design-system-ai-lab@0.8.0 or later installed?
Is generated code importing available components from design-system-ai-lab when useful?
Are custom styles overriding the package styles?
Are local components replacing package essentials instead of composing with them?
```

Do not solve missing package styles by recreating component styles locally.

---

## Final principle

Always import `design-system-ai-lab/styles.css`.

Always read and follow the guidelines.

Use package primitives and components when they help.

Create local screen-specific components when needed.

Never recreate the design system itself.
