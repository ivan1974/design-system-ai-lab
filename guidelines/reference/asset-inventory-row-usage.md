# AssetInventoryRow usage guidance

## Status

```txt
REFERENCE / COMPONENT USAGE / ASSET INVENTORY ROW
```

## Purpose

This file gives precise guidance for using `AssetInventoryRow` in generated screens.

Use this file when generating an Installed Base asset list, asset health review, asset scan, or asset prioritization screen.

---

## Core rule

`AssetInventoryRow` is useful when the user needs to scan and compare installed-base assets.

It is not mandatory for every asset-related screen.

Use it only when its built-in row model and column structure fit the brief.

If it does not fit, use `Table` or local screen-specific row composition while preserving the design-system visual language.

---

## Required package setup

Generated application code must import the package stylesheet:

```tsx
import "design-system-ai-lab/styles.css";
```

Then import the component from the public package API:

```tsx
import { AssetInventoryRow } from "design-system-ai-lab";
import type { AssetInventoryRowData } from "design-system-ai-lab";
```

Do not import from Radix, app-local UI folders, or Make-kit wrapper package paths.

---

## Data shape

`AssetInventoryRow` expects an asset object matching this model:

```tsx
const asset: AssetInventoryRowData = {
  asset_id: "A-001",
  name: "MV Switchgear — Bay 3",
  description: "Medium-voltage switchgear, main incomer bay",
  type: "MV Switchgear",
  building: "Building A",
  area: "Main Substation",
  room: "Switchgear Room",
  coverage: "Service Contract",
  dpp: true,
  connectivity: "connected",
  health: "Critical",
  activity: "Active alert",
  date: "Today"
};
```

Allowed values:

```txt
connectivity: connected | not-connected | unknown
health: Critical | Poor | Fair | Good | Excellent | Unknown
activity: Live telemetry | Active alert | Connectivity issue | Last service visit | No record
```

Do not invent unsupported health, connectivity or activity labels.

---

## Column layout rule

`AssetInventoryRow` renders a seven-column grid:

```txt
asset identity
type
location
coverage
health
activity
chevron/action affordance
```

When possible, pass a valid Tailwind grid class via `columnWidths` or `columnClassName`.

Preferred example:

```tsx
const ASSET_ROW_COLUMNS =
  "grid-cols-[minmax(0,2fr)_auto_minmax(0,1fr)_minmax(0,1fr)_auto_auto_2rem]";

<AssetInventoryRow
  asset={asset}
  selected={selectedAssetId === asset.asset_id}
  columnWidths={ASSET_ROW_COLUMNS}
  onSelect={() => setSelectedAssetId(asset.asset_id)}
/>
```

Do not pass a raw CSS grid-template value as a Tailwind class, for example:

```tsx
const BAD_COLUMNS = "2fr 1.5fr 1.2fr 1fr 1fr 1fr";
```

This can make the row collapse into a vertical layout if treated as a class name.

The component now accepts raw CSS grid-template values for compatibility, but generated code should still prefer valid Tailwind grid classes.

If using a raw CSS grid-template value, be explicit:

```tsx
<AssetInventoryRow
  asset={asset}
  selected={selectedAssetId === asset.asset_id}
  gridTemplateColumns="2fr auto 1fr 1fr auto auto 2rem"
  onSelect={() => setSelectedAssetId(asset.asset_id)}
/>
```

---

## Align table headers with row columns

If a visible header is displayed above the row list, its columns must use the same layout as the rows.

Recommended approach:

```tsx
const ASSET_ROW_COLUMNS =
  "grid-cols-[minmax(0,2fr)_auto_minmax(0,1fr)_minmax(0,1fr)_auto_auto_2rem]";

<div className={`grid ${ASSET_ROW_COLUMNS} px-5 gap-3`}>
  <span>Asset</span>
  <span>Type</span>
  <span>Location</span>
  <span>Coverage</span>
  <span>Health</span>
  <span>Activity</span>
  <span />
</div>
```

Avoid mixing a header defined with `style={{ gridTemplateColumns: ... }}` and rows defined with a Tailwind class unless both definitions match exactly.

---

## Use when

Use `AssetInventoryRow` when:

```txt
the object is an installed-base asset
the user needs to scan several assets quickly
the user compares health, connectivity, coverage or last activity
the row structure supports the screen hierarchy
the left pane or table remains readable
```

---

## Do not use when

Do not use `AssetInventoryRow` when:

```txt
the object is not an asset
the user compares custom fields that do not fit the row model
the row becomes too tall or vertically stacked
a generic Table would make comparison clearer
the prompt requires a custom row layout that better supports the decision
```

---

## Compose with

`AssetInventoryRow` works well with:

```txt
InstalledBaseHeader
SearchField
FilterDropdown
ViewFilterBar
ScrollArea
Separator
HealthBadge
StatusLabel
Alert
Tabs
Table
```

---

## Local composition alternative

If `AssetInventoryRow` does not fit, create a local asset row or use `Table`, but keep the package foundation:

```txt
import design-system-ai-lab/styles.css
use package primitives where useful
respect tokens and visual language
do not recreate Button, Badge, Alert, Tabs, Table or SearchField if they fit
```

Acceptable local alternatives:

```txt
AssetReviewRow
EvidenceAwareAssetRow
AssetComparisonRow
```

These are acceptable only when they solve a screen-specific layout need and do not redefine the design system.

---

## Common mistakes

Avoid:

```txt
passing invalid columnWidths classes
mixing header grid and row grid definitions
forcing AssetInventoryRow for non-asset records
hiding critical evidence inside a dense row
using color alone for health or connectivity
creating local HealthChip or StatusChip when HealthBadge or StatusLabel fits
```

---

## Final rule

Use `AssetInventoryRow` when it improves asset scanning and comparison.

Do not force it.

If you use it, keep its column contract valid and aligned with the header.
