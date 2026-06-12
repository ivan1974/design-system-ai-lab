# Phase 2 runtime extraction record

## Purpose

This decision record closes the first runtime extraction pass of Phase 2.

It documents what was extracted from the Figma Make Installed Base Intelligence prototype into reusable design-system runtime material, what deliberately stayed in the demo app, and what should happen next.

This record supports:

```txt
Phase 2 — Minimal design system extraction
```

## Decision summary

Phase 2 extracted stable runtime interface material from the product reference without redesigning the UI.

The extraction followed this principle:

```txt
Extract reliable interface material.
Keep product logic and demo data in src/app.
Do not turn prototype files into the generation API.
```

Clarification after the generic component vocabulary decision:

```txt
Phase 2 extracted product-grounded runtime material.
Phase 3 must de-specialize it into a generic component vocabulary.
Domain data must not become component API unless the visual or interaction grammar requires it.
```

## Extracted foundations

Foundation routing now goes through:

```txt
src/design-system/foundations/index.css
src/design-system/foundations/tailwind.css
src/design-system/foundations/theme.css
```

The app still imports styles through the app layer, but the reusable foundation source now lives under `src/design-system/foundations`.

Decision:

```txt
Keep foundation extraction minimal.
Do not split semantic tokens further until a real usage need appears.
```

## Extracted primitives

The following primitives were extracted and validated through product usage:

```txt
src/design-system/primitives/button.tsx
src/design-system/primitives/badge.tsx
src/design-system/primitives/pill.tsx
src/design-system/primitives/tag.tsx
```

### Button

Used for low-risk product actions first, then reused across panels.

Decision:

```txt
Button is the runtime design-system action primitive.
Generated shadcn button remains generated support material only.
```

### Badge

Used for compact counts, context labels and simple metadata labels.

Decision:

```txt
Badge remains domain-neutral.
Health, connectivity, DPP and activity semantics are not base Badge props.
```

### Pill

Used for Health filter options.

Decision:

```txt
Pill supports selectable controls.
Health-specific colors stay outside the base primitive API.
```

### Tag

Initially extracted as display metadata, then extended to support interactive rendering for Coverage and DPP filters.

Decision:

```txt
Tag may render as a static span or interactive button.
The active state is visual grammar, not domain semantics.
```

## Extracted components

The following runtime components were extracted under:

```txt
src/design-system/components/
```

Extracted components:

```txt
main-navigation.tsx
installed-base-header.tsx
view-filter-bar.tsx
all-filters-panel.tsx
asset-inventory-row.tsx
installed-base-workspace.tsx
```

### MainNavigation

Extracted from `src/app/components/MainNav.tsx`.

Decision:

```txt
MainNavigation owns the reusable top navigation layout.
The app wrapper supplies product name, user identity and search state.
```

Phase 3 clarification:

```txt
MainNavigation may later be decomposed into generic components such as TopNavigation, ProductIdentity, SearchField, IconButton and UserMenuTrigger.
```

### InstalledBaseHeader

Extracted from `src/app/components/PageHeader.tsx`.

Decision:

```txt
InstalledBaseHeader owns the reusable installed-base page header layout.
The app wrapper supplies the current reference campus values.
```

Phase 3 clarification:

```txt
InstalledBaseHeader is product-grounded runtime material, not the final generic header API.
```

### ViewFilterBar

Extracted from `src/app/components/ViewFilterBar.tsx`.

Decision:

```txt
ViewFilterBar owns the reusable view switch and quick-filter toolbar UI.
The app wrapper supplies views, quick filter options and filter state handlers.
```

Phase 3 clarification:

```txt
ViewFilterBar should be de-specialized into generic controls such as ViewSwitcher, FilterToolbar, FilterDropdown, FilterOption and ActiveFilterCount.
List, Geography and Electrical are injected options, not component variants.
```

### AllFiltersPanel

Extracted from `src/app/components/AllFiltersPanel.tsx`.

Decision:

```txt
AllFiltersPanel owns the reusable panel structure and filter-option rendering grammar.
The app wrapper supplies filter categories, category style mapping and health color mapping.
```

Phase 3 clarification:

```txt
AllFiltersPanel should be de-specialized into generic structures such as SidePanel, PanelHeader, FilterSection, FilterOptionList, CheckboxOption, PillOption, TagOption and PanelFooter.
Location, Asset Type, Coverage and DPP are injected data, not component names.
```

### AssetInventoryRow

Extracted from `src/app/components/AssetList.tsx`.

Decision:

```txt
AssetInventoryRow owns one dense installed-base asset row.
AssetList keeps grouping, empty state and sticky table header logic.
```

Some asset status helpers moved with this row:

```txt
HealthBadge
StatusLabel
HEALTH_CONFIG
```

Reason:

```txt
These helpers are not base primitives.
They are transitional runtime helpers used by both the asset row and the asset detail panel.
```

Phase 3 clarification:

```txt
These helpers should not define the target GenAI component vocabulary.
HealthBadge should become a generic StatusBadge or StatusIndicator use case.
StatusLabel should become a generic StatusIndicator or DataLabel use case.
HEALTH_CONFIG should become a generic tone/status or score configuration.
AssetInventoryRow should become a dense DataRow or DataGridRow composition pattern.
```

### InstalledBaseWorkspace

Extracted from `src/app/App.tsx`.

Decision:

```txt
InstalledBaseWorkspace is a layout composition component using slots.
It does not own product data, filtering, selection or tab state.
```

Slot API:

```txt
navigation
header
filtersPanel
toolbar
list
detailPanel
```

Phase 3 clarification:

```txt
InstalledBaseWorkspace is product-grounded runtime material.
Its target generic pattern is closer to ListDetailWorkspace or FilterableWorkspace.
```

## What intentionally stayed in src/app

The following remain in the app layer:

```txt
state management
search query
active view state
filter state
selected asset state
active tab state
filtering logic
demo data imports
product-specific wrappers
```

Reason:

```txt
Phase 2 extracts runtime interface material, not product application logic.
```

## AssetDetailPanel status

`AssetDetailPanel` has not yet been extracted as a full design-system component.

It now consumes design-system helpers:

```txt
HealthBadge
StatusLabel
HEALTH_CONFIG
Button
```

Decision:

```txt
Keep AssetDetailPanel in src/app for now.
It contains substantial tab content, evidence presentation and product-specific demo data.
Extracting it fully should be a separate decision after Phase 2 closure.
```

Phase 3 clarification:

```txt
AssetDetailPanel should be decomposed into generic components before becoming part of the target vocabulary.
Candidate generic components include DetailPanel, PanelTabs, TabList, TabPanel, Section, Field, MetricRow, RecommendationCard, TimelineEvent and DocumentRow.
Health, Passport, History and Documents are example content areas, not fixed component APIs.
```

## Generated UI support layer status

The generated `src/app/components/ui/*` directory is still not part of the runtime design-system source.

Decision:

```txt
Do not use generated ui/* files as the source of truth for design-system runtime material.
Do not migrate generated ui/* files unless a real product use requires it.
Re-audit generated ui/* after runtime extraction.
```

## Acceptance evidence

After each extraction step, the app was validated with:

```bash
git pull origin reboot/from-figma-make
npm run build
npm run dev
```

Visual checks confirmed parity for:

```txt
main navigation
installed-base header
view/filter bar
all filters panel
asset inventory list and row selection
asset detail panel integration
full installed-base workspace composition
```

## Phase 2 closure decision

Phase 2 runtime extraction is complete enough to move from runtime extraction to generic component vocabulary work.

Next recommended work:

```txt
1. Generated UI layer follow-up audit
2. Generic component vocabulary audit
3. Runtime extraction cleanup decisions
4. Generic component decomposition
5. GenAI-facing guidelines
6. Contracts and generation guardrails
7. Make kit instructions
```

## Non-goals

Do not treat Phase 2 completion as permission to:

```txt
remove all app wrappers
move demo data into the design system
make primitives domain-aware
turn GenAI into a component assembler
expose raw prototype files as mandatory generation building blocks
```

Additional clarification:

```txt
Do not treat product-specific labels, icons or states as sufficient reason to create product-specific components.
The target vocabulary should be generic and selected through usage guidance.
```

The design system should guide generation through:

```txt
runtime material
generic components
patterns
principles
domain examples
contracts
```
