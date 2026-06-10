# Site domain model

## Definition

A site is a physical customer location that contains rooms, systems, assets and service scope.

Site hierarchy and coverage must come from structured data or explicit input.

## Key fields

```txt
siteName
location
buildings
rooms
criticality
assetCount
connectedAssetCount
serviceCoverage
sourceScope
sourceStrength
validationStatus
lastUpdate
```

## Controlled values

### Source strength

Canonical values:

```txt
unknown
partial
single-source
multi-source
validated
```

### Validation status

Canonical values:

```txt
not-reviewed
internal-review-needed
internally-validated
customer-ready
blocked
```

### Risk level when site risk is summarized

Canonical values:

```txt
critical
warning
info
```

## Relationships

```txt
Customer owns Sites.
Site contains Assets.
Site may contain Buildings, Rooms or Zones.
Site has coverage and connectivity scope.
Site may have site-level risks or actions.
```

## Source of truth

Use structured systems for:

```txt
site name
location
asset list
room or zone hierarchy
coverage
connectivity counts
```

Do not let GenAI invent a site hierarchy.

## UI representation

Use:

```txt
CustomerStatusCard
ConnectivityCoverageCard
KeyValueList
FilterBar
MasterDetailLayout
WorkspaceDetailPanel
```

## GenAI generation rules

```txt
Show sourceScope when site visibility is partial.
Show connectedAssetCount separately from assetCount.
Show validationStatus when site-level information needs review.
Do not mix customer-level and site-level scope.
Do not present site visibility as complete when only part is connected.
```

## Make mistakes to avoid

```txt
inventing rooms or buildings
hiding partial site coverage
mixing customer-level and site-level scope
presenting site visibility as complete when only part is connected
using connectedAssetCount as total installed base
```

## Related contracts

```txt
contracts/evidence-and-trust.contract.json
contracts/props.contract.json
contracts/business-patterns.contract.json
```
