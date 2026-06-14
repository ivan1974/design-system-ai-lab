# Component usage cards

## Status

```txt
REFERENCE / COMPONENT USAGE CARDS / CURRENT EXPORTED API
```

## Purpose

This file gives concise usage guidance for exported primitives, product components and helper exports.

It helps Figma Make decide whether to use an existing package export or compose a local screen-specific component.

It is not a props reference.

For component selection logic, read:

```txt
guidelines/reference/component-selection.md
```

For `AssetInventoryRow` grid and data contract details, read:

```txt
guidelines/reference/asset-inventory-row-usage.md
```

---

## Core decision rule

```txt
Import package stylesheet: mandatory.
Use a specific component: conditional.
Brief intent, user decision, principles and knowledge: primary.
```

Use a component when it supports the task and layout.

Do not force a component when it distorts the screen.

Local screen-specific composition is allowed when it keeps the design-system visual language.

Do not invent package components or fictional imports.

---

# Primitives

## Accordion

Role: stacked expandable sections.

Use when the user can open optional grouped detail without leaving context.

Do not use for evidence or actions that must be immediately visible for trust.

Compose with: Alert, Badge, Separator, ScrollArea.

Common mistakes: hiding decision-critical information; using accordion for short content.

Import: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "design-system-ai-lab";`

---

## Alert

Role: bounded attention, warning or trust message.

Use for risk, missing evidence, partial visibility, validation required or critical state.

Do not use as a generic card or decorative container.

Compose with: AlertTitle, AlertDescription, Button, Badge, local evidence/action sections.

Common mistakes: using alerts for normal content; creating custom warning panels; hiding the action path.

Import: `import { Alert, AlertTitle, AlertDescription } from "design-system-ai-lab";`

---

## Badge

Role: compact semantic label.

Use for status, priority, source type, validation state, coverage or short classification.

Do not use as an action control.

Compose with: Alert, Table, AssetInventoryRow, local evidence/action rows.

Common mistakes: creating CustomBadge or StatusChip; relying on color alone; using vague labels like `Info` without context.

Import: `import { Badge } from "design-system-ai-lab";`

---

## Button

Role: action trigger.

Use when the user can do something: confirm, open, create, apply, clear, export, add a note or start a follow-up.

Do not use for static labels or statuses.

Compose with: Dialog, Sheet, Alert, Table, Tabs, local action sections.

Common mistakes: using a badge as a button; creating CustomButton; using raw `button` when Button fits.

Import: `import { Button } from "design-system-ai-lab";`

---

## Checkbox

Role: binary or multi-select choice.

Use when the user can select or deselect options.

Do not use for display-only state.

Compose with: CheckboxOption, AllFiltersPanel, FilterDropdown, forms.

Common mistakes: using checkmarks as decoration; hiding selected meaning only in color.

Import: `import { Checkbox } from "design-system-ai-lab";`

---

## Collapsible

Role: lightweight expandable detail.

Use when a single optional detail section can expand inline.

Do not use for complex multi-section disclosure; use Accordion instead.

Compose with: Button, Alert, Separator, local detail blocks.

Common mistakes: hiding essential evidence; nesting too many collapsibles.

Import: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "design-system-ai-lab";`

---

## Dialog

Role: focused short task.

Use for confirmation, short edit, quick follow-up creation or review before saving.

Do not use for long evidence exploration or complex workflows.

Compose with: Button, Input, Select, Alert.

Common mistakes: putting dense review workflows in a modal; unclear primary/secondary actions.

Import: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "design-system-ai-lab";`

---

## DropdownMenu

Role: compact action or option menu.

Use when secondary actions or compact options are useful and the primary action remains visible.

Do not use for primary decisions that should be directly visible.

Compose with: Button, Table rows, detail headers.

Common mistakes: hiding important actions; using menus for filters better handled by FilterDropdown.

Import: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "design-system-ai-lab";`

---

## Input

Role: text entry.

Use when the user enters or edits text.

Do not use for display-only facts.

Compose with: Button, Dialog, Sheet, labels, SearchField when the intent is search.

Common mistakes: using raw `input`; using disabled inputs to display static facts; using Input for search when SearchField fits better.

Import: `import { Input } from "design-system-ai-lab";`

---

## Pill

Role: compact rounded label with stronger visual presence than a small badge.

Use for filter chips, selected states, compact status markers or grouping labels.

Do not use as the only way to communicate critical information.

Compose with: FilterDropdown, ViewFilterBar, Alert, local summaries.

Common mistakes: using many pills as decoration; using pill color without text meaning.

Import: `import { Pill } from "design-system-ai-lab";`

---

## Popover

Role: lightweight contextual content.

Use for short contextual options, compact secondary controls or brief inline detail.

Do not use for essential proof, long evidence or primary actions.

Compose with: Button, Badge, filters, help content.

Common mistakes: hiding important trust information; creating large popovers.

Import: `import { Popover, PopoverTrigger, PopoverContent } from "design-system-ai-lab";`

---

## Progress

Role: provided progress or completion value.

Use only when a real progress value exists.

Do not invent percentages or imply precision from qualitative data.

Compose with: metric-like local sections, Badge, Alert.

Common mistakes: using progress for health without a numeric basis; inventing completion values.

Import: `import { Progress } from "design-system-ai-lab";`

---

## ScrollArea

Role: bounded scrolling for dense content.

Use for long lists, filter lists, evidence lists, history lists or split panes.

Do not hide first-level decision-critical content inside a scroll area if it should be immediately visible.

Compose with: Table, AssetInventoryRow, Tabs, local detail panels.

Common mistakes: freezing list/detail content; letting dense panes stretch the whole page; making the whole screen scroll when only one pane should scroll.

Import: `import { ScrollArea } from "design-system-ai-lab";`

---

## Select

Role: choosing one value from a known set.

Use when the user must choose a value from a short controlled list.

Do not use for read-only facts or broad multi-filter experiences.

Compose with: FilterDropdown, Checkbox, Button, forms, local filter sections.

Common mistakes: using raw `select`; using Select for too many unrelated options; using Select where FilterDropdown fits the filtering task.

Import: `import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "design-system-ai-lab";`

---

## Separator

Role: subtle grouping boundary.

Use when a simple boundary improves scanability.

Do not use heavy borders or decorative dividers when Separator is enough.

Compose with: local sections, Tabs, detail panels, evidence/action stacks.

Common mistakes: adding too many separators; using separator as layout structure instead of semantic grouping.

Import: `import { Separator } from "design-system-ai-lab";`

---

## Sheet

Role: side content while preserving page context.

Use for filter panels, side review panels or secondary details when persistent context helps.

Do not use when inline content or a simple Dialog is enough.

Compose with: Button, ScrollArea, Alert, Table, Checkbox.

Common mistakes: using Sheet for static split layout when normal page composition is clearer.

Import: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "design-system-ai-lab";`

---

## Switch

Role: on/off setting.

Use when the user changes a persistent setting or mode.

Do not use for status display.

Compose with: labels, settings rows, Dialog, Sheet.

Common mistakes: using Switch to show connected/not connected; using Switch for one-time actions.

Import: `import { Switch } from "design-system-ai-lab";`

---

## Table

Role: structured comparison of records.

Use when the user compares multiple items across fields.

Do not use for narrative detail or a single object summary.

Compose with: Badge, HealthBadge, StatusLabel, Button, ScrollArea, SearchField, FilterDropdown.

Common mistakes: using card grids for dense comparison; forcing AssetInventoryRow when custom table columns are clearer.

Import: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "design-system-ai-lab";`

---

## Tabs

Role: stable views of the same object or workspace.

Use when the user switches between distinct views such as Overview, Health, Evidence, Intelligence, Passport, History or Documents.

Do not use for short sequential content or to hide evidence required for trust.

Compose with: ScrollArea, Table, Alert, local detail sections.

Common mistakes: creating CustomTabs; putting the main evidence only behind a tab when it must be visible first.

Import: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "design-system-ai-lab";`

---

## Tag

Role: small categorical label.

Use for asset type, document type, source category, contract scope or other metadata.

Do not use for urgent warnings or full actions.

Compose with: Table, SearchField, detail sections, EvidenceRow.

Common mistakes: over-tagging every field; using tags for hierarchy instead of content.

Import: `import { Tag } from "design-system-ai-lab";`

---

## Tooltip

Role: short explanation.

Use to clarify labels, source scope, validation states or icon meaning.

Do not place essential evidence or actions in a tooltip.

Compose with: badges, icons, headers, table cells.

Common mistakes: tooltip-only explanations for critical information; long tooltip content.

Import: `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "design-system-ai-lab";`

---

# Product components

## AllFiltersPanel

Role: advanced filtering with multiple groups.

Use for dense inventories or complex lists where several filter groups matter.

Do not show it for a lightweight review screen when one or two filters are enough.

Compose with: SearchField, FilterDropdown, CheckboxOption, Sheet.

Common mistakes: heavy filter panel with too little content; mixing display-only status with selectable filters.

Import: `import { AllFiltersPanel } from "design-system-ai-lab";`

---

## AssetInventoryRow

Role: dense installed-base asset row.

Use when the user needs to scan and compare installed-base assets by identity, location, connectivity, health, coverage and last activity.

Do not use for documents, customers, tasks or custom comparison tables whose columns do not fit the row model.

Compose with: SearchField, FilterDropdown, HealthBadge, StatusLabel, ScrollArea, Separator.

Common mistakes: forcing it when Table is clearer; hiding important evidence inside the row; making columns unreadable.

Detailed usage: read `guidelines/reference/asset-inventory-row-usage.md`.

Import: `import { AssetInventoryRow } from "design-system-ai-lab";`

---

## CheckboxOption

Role: option row for filter or selection experiences.

Use when the user selects one or more options inside filters or choice groups.

Do not use for display-only status.

Compose with: FilterDropdown, AllFiltersPanel, Checkbox.

Common mistakes: using it as a status display; using it outside selection contexts.

Import: `import { CheckboxOption } from "design-system-ai-lab";`

---

## FilterDropdown

Role: one filter group.

Use for health, asset family, connectivity, coverage, document type or similar single-category filtering.

Do not overload one dropdown with unrelated filters.

Compose with: SearchField, ViewFilterBar, AllFiltersPanel, Table, AssetInventoryRow.

Common mistakes: using raw select for filters; using it when a full AllFiltersPanel is needed.

Import: `import { FilterDropdown } from "design-system-ai-lab";`

---

## InstalledBaseHeader

Role: page orientation for an installed-base workspace.

Use when the screen needs high-level site, building, room and portfolio context.

Do not force it if the prompt needs a different page header or a smaller embedded view.

Compose with: Alert, SearchField, FilterDropdown, ViewFilterBar.

Common mistakes: using it repeatedly as a section title; forcing it into non-installed-base screens.

Import: `import { InstalledBaseHeader } from "design-system-ai-lab";`

---

## InstalledBaseWorkspace

Role: reference composition for a full Installed Base workspace.

Use only when the prompt asks for a full Installed Base workspace and the existing composition fits.

Do not force it for focused review screens, custom split views or custom page structures.

Compose with: package primitives and local composition when the full workspace does not fit.

Common mistakes: treating it as mandatory for every asset prompt.

Import: `import { InstalledBaseWorkspace } from "design-system-ai-lab";`

---

## MainNavigation

Role: app-level navigation.

Use when the screen needs persistent application navigation context.

Do not use for local tabs, filters or section navigation.

Compose with: InstalledBaseHeader, page layout.

Common mistakes: adding app navigation to focused screens where it creates noise.

Import: `import { MainNavigation } from "design-system-ai-lab";`

---

## SearchField

Role: search interaction for known items or dense lists.

Use when the user needs to find or narrow records by asset, document, site, customer or label.

Do not use when only a few items are visible and no search task exists.

Compose with: FilterDropdown, AllFiltersPanel, Table, AssetInventoryRow, ScrollArea.

Common mistakes: using raw input for search; adding search where it does not support the task.

Import: `import { SearchField } from "design-system-ai-lab";`

---

## ViewFilterBar

Role: stable view switching or quick segmentation.

Use when the user switches between stable inventory views such as All, Connected, Needs attention or Uncovered.

Do not use for one small filter or local tab navigation.

Compose with: SearchField, FilterDropdown, AssetInventoryRow, Table.

Common mistakes: forcing ViewFilterBar when simple Tabs or Buttons fit better.

Import: `import { ViewFilterBar } from "design-system-ai-lab";`

---

# Supporting exports

## HealthBadge

Role: asset health status label exported with the asset inventory row component.

Use when showing asset health in the installed-base asset context.

Do not use for unrelated product status unless the meaning is equivalent.

Compose with: AssetInventoryRow, Table, Alert, detail sections.

Common mistakes: creating HealthChip; relying on color alone; using it for AI confidence.

Import: `import { HealthBadge } from "design-system-ai-lab";`

---

## StatusLabel

Role: asset activity/status label exported with the asset inventory row component.

Use for asset activity states such as live telemetry, active alert, connectivity issue, last service visit or no record.

Do not use for unrelated status semantics.

Compose with: AssetInventoryRow, Table, detail sections.

Common mistakes: replacing it with StatusChip; using it for business value or proof claims.

Import: `import { StatusLabel } from "design-system-ai-lab";`

---

# Final check

Before generating final code, verify:

```txt
design-system-ai-lab/styles.css is imported
guidelines were used
component usage supports the brief
local screen-specific composition does not recreate the visual system
no Radix or implementation package is imported directly
no fictional package component or import is used
```
