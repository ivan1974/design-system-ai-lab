# Generic component vocabulary audit

## Purpose

This document records the Phase 3 design-system direction.

Phase 2 extracted product-grounded runtime material from the Installed Base Intelligence prototype. Phase 3 must now de-specialize and expand that material into a generic component vocabulary that GenAI can select according to:

```txt
brief
intent
data type
interaction need
usage guidance
```

The goal is not to create more Schneider-specific or Installed Base-specific components.

The goal is to separate form, data, usage and domain so that GenAI can compose varied screens from reusable interface material.

## Core doctrine

```txt
Form = generic UI component
Data = injected content and state
Usage = guidance that says when and why to use a component
Domain = example or context, not a fixed component API
```

This means:

```txt
Do not confuse domain data with domain components.
Do not create a new component only because the text, icon or state is domain-specific.
Do not encode business vocabulary into a component API unless the visual or interaction grammar genuinely requires it.
```

## Correct interpretation

Bad direction:

```txt
HealthBadge
DPPStatus
ConnectivityLabel
EcoCareAssetRow
InstalledBaseViewFilterBar
```

Better direction:

```txt
Badge
Pill
Tag
StatusIndicator
StatusBadge
SignalDot
DataLabel
ScoreBar
ViewSwitcher
FilterToolbar
FilterDropdown
DataRow
DetailPanel
Tabs
Toolbar
Panel
EmptyState
Timeline
EvidenceList
RecommendationCard
```

The domain provides values.

The design system provides the forms and interaction grammars.

Guidelines explain selection and composition.

## Examples

### Health status

Bad interpretation:

```txt
HealthBadge = product-specific component
```

Better interpretation:

```txt
Badge or StatusIndicator = generic component
health = data
Critical / Good / Unknown = state values
guideline = use a compact badge or status indicator to qualify state in dense lists
```

Potential target API:

```tsx
<StatusBadge label="Critical" tone="danger" />
<StatusBadge label="Good" tone="success" />
<StatusBadge label="Unknown" tone="neutral" />
```

### Connectivity

Bad interpretation:

```txt
ConnectivityLabel = product-specific component
```

Better interpretation:

```txt
SignalDot + StatusLabel or StatusBadge = generic component grammar
Connected / Not connected / Unknown = injected values
guideline = use a signal indicator when presence, connection or liveliness matters
```

Potential target API:

```tsx
<StatusBadge label="Connected" tone="success" icon="signal" />
<StatusBadge label="Not connected" tone="neutral" />
```

### Digital Product Passport

Bad interpretation:

```txt
DPPStatus = product-specific component
```

Better interpretation:

```txt
DataLabel or StatusBadge = generic component
DPP Enabled / No DPP = injected labels
guideline = use a compact data label for binary metadata in dense layouts
```

Potential target API:

```tsx
<DataLabel label="DPP Enabled" tone="success" />
<DataLabel label="No DPP" tone="muted" />
```

### View switching

Bad interpretation:

```txt
InstalledBaseViewFilterBar = fixed product component
List / Geography / Electrical = hard-coded component variants
```

Better interpretation:

```txt
ViewSwitcher + FilterToolbar + FilterDropdown + ActiveFilterCount
List / Geography / Electrical = injected options
```

Guideline:

```txt
Use a ViewSwitcher when the user needs to change representation of the same dataset without changing task context.
```

Potential target API:

```tsx
<ViewSwitcher
  value="list"
  options={[
    { value: 'list', label: 'List', icon: ListIcon },
    { value: 'map', label: 'Map', icon: MapIcon },
  ]}
/>
```

## Generic sub-components already visible in the prototype

### MainNavigation

Current extracted component:

```txt
MainNavigation
```

Generic sub-components visible inside it:

```txt
TopNavigation
ProductIdentity
SearchField
IconButton
UserMenuTrigger
```

Phase 3 direction:

```txt
Keep MainNavigation as a composition pattern or shell.
Extract reusable controls such as SearchField and IconButton when needed.
```

### ViewFilterBar

Current extracted component:

```txt
ViewFilterBar
```

Generic sub-components visible inside it:

```txt
ViewSwitcher
ViewSwitcherItem
FilterToolbar
FilterDropdown
FilterOption
ActiveFilterCount
```

Phase 3 direction:

```txt
Decompose ViewFilterBar into reusable view and filter controls.
Options such as List, Geography and Electrical remain injected data.
```

### AllFiltersPanel

Current extracted component:

```txt
AllFiltersPanel
```

Generic sub-components visible inside it:

```txt
SidePanel
PanelHeader
FilterSection
FilterOptionList
CheckboxOption
PillOption
TagOption
PanelFooter
```

Phase 3 direction:

```txt
Decompose panel structure and filter option grammars.
Category names such as Location, Asset Type, Coverage and DPP remain injected data.
```

### AssetList

Current runtime split:

```txt
AssetList remains in src/app
AssetInventoryRow moved to src/design-system/components
```

Generic sub-components visible inside it:

```txt
DataGridHeader
DataGridRow
DataGridCell
GroupedListSection
BreadcrumbGroupHeader
RowSelectionIndicator
EmptyState
```

Phase 3 direction:

```txt
Treat the current asset row as a dense data-row use case, not as the final generic API.
```

### AssetDetailPanel

Current status:

```txt
AssetDetailPanel remains in src/app
It consumes Button, HealthBadge, StatusLabel and HEALTH_CONFIG from the design system
```

Generic sub-components visible inside it:

```txt
DetailPanel
PanelTabs
TabList
TabPanel
Section
Field
MetricRow
RecommendationCard
TimelineEvent
DocumentRow
```

Phase 3 direction:

```txt
Extract generic panel, tab, section, field, metric, timeline, evidence and recommendation components before final GenAI guidelines.
```

Health, Passport, History and Documents are example content areas, not fixed component names.

## Target component vocabulary

### Primitives

```txt
Button
Badge
Tag
Pill
Input
Checkbox
Divider
```

### Generic controls

```txt
SearchField
IconButton
ViewSwitcher
FilterDropdown
FilterOption
CheckboxOption
ActiveFilterCount
```

### Generic display components

```txt
StatusIndicator
StatusBadge
SignalDot
DataLabel
ScoreBar
Metric
MetricRow
Field
DataGrid
DataGridHeader
DataGridRow
DataGridCell
EmptyState
```

### Generic panel and navigation components

```txt
Toolbar
Panel
SidePanel
DetailPanel
PanelHeader
PanelFooter
Tabs
TabList
TabPanel
Section
```

### Generic evidence and action components

```txt
Timeline
TimelineEvent
EvidenceList
DocumentRow
RecommendationCard
```

## Target patterns

Patterns should combine generic components into reusable structures.

Candidate patterns:

```txt
FilterableWorkspace
ListDetailWorkspace
TabbedDetailPanel
FilterableDataGrid
EvidenceSection
RecommendationSection
StatusSummary
```

A pattern may be product-inspired, but it should not be product-locked.

Example:

```txt
InstalledBaseWorkspace inspired the ListDetailWorkspace pattern.
Installed Base data remains an example, not the pattern API.
```

## Components to avoid as target vocabulary

Avoid promoting these as final design-system component names:

```txt
HealthBadge
DPPStatus
ConnectivityLabel
EcoCareAssetRow
InstalledBaseViewFilterBar
InstalledBaseFilterPanel
```

They may exist temporarily during extraction, but they should be de-specialized during Phase 3.

## Transitional components

Some Phase 2 components are acceptable transitional runtime material:

```txt
AssetInventoryRow
HealthBadge
StatusLabel
HEALTH_CONFIG
```

They were extracted because they were shared by the current app runtime and reduced duplication.

However, they should not define the target GenAI component vocabulary.

Phase 3 should convert their visual grammar into generic equivalents:

```txt
HealthBadge -> StatusBadge / StatusIndicator
StatusLabel -> StatusIndicator / DataLabel
HEALTH_CONFIG -> generic tone mapping or score/status configuration
AssetInventoryRow -> DataGridRow / dense DataRow composition
```

## Extraction criteria for Phase 3

Extract a generic component when:

```txt
The visual or interaction grammar repeats across multiple contexts.
The component can accept injected data without domain-specific API names.
The component can be described by usage guidance.
The component helps GenAI choose an appropriate form for a data type or task.
```

Do not extract a generic component when:

```txt
Only one product-specific example exists.
The API would encode a business noun unnecessarily.
The component is just a styled version of an existing primitive.
The behavior cannot yet be generalized without guessing future needs.
```

## Implications for GenAI guidelines

Final GenAI guidelines should not say:

```txt
Use HealthBadge for health.
Use DPPStatus for DPP.
Use ConnectivityLabel for connectivity.
```

They should say:

```txt
Identify the user intent.
Identify the data type and state model.
Choose the appropriate layout pattern.
Choose generic components according to usage.
Inject domain data and labels.
Respect visual density, hierarchy and contracts.
Avoid decorative or invented UI.
```

## Phase 3 direction

Phase 3 should be:

```txt
Phase 3 — Generic component vocabulary
```

Objective:

```txt
Build a broad, generic, composable vocabulary that GenAI can select from according to brief, data type and recommended usage.
```

Not:

```txt
Create Schneider-specific or Installed Base-specific component APIs.
```

Recommended sub-phases:

```txt
Phase 3.1 — Generic form controls
SearchField, CheckboxOption, FilterDropdown

Phase 3.2 — Navigation and view controls
ViewSwitcher, Toolbar, IconButton

Phase 3.3 — Data display
DataGrid, DataRow, Field, MetricRow, StatusBadge, ScoreBar

Phase 3.4 — Panels and sections
SidePanel, DetailPanel, Section, Tabs

Phase 3.5 — Reusable patterns
FilterableWorkspace, ListDetailWorkspace, TabbedDetailPanel
```

## Decision

Before writing final GenAI-facing guidelines, the project must first define and extract enough generic component vocabulary.

Reason:

```txt
GenAI cannot compose varied high-quality interfaces if the available vocabulary is too screen-specific or too narrow.
```

The correct sequence is now:

```txt
Phase 2 — Extract stable runtime material from the prototype
Phase 3 — De-specialize and expand generic component vocabulary
Phase 4 — Build GenAI-facing guidelines, contracts and Make kit instructions
```
