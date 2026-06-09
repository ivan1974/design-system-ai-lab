# Site domain model

## Definition

A site is a physical customer location that contains rooms, systems, assets and
service scope.

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
lastUpdate
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
```

## Make mistakes to avoid

```txt
inventing rooms or buildings
hiding partial site coverage
mixing customer-level and site-level scope
presenting site visibility as complete when only part is connected
```
