# Asset domain model

## Definition

An asset is a maintainable equipment item in the installed base.

Examples:

```txt
MV switchgear
LV switchboard
UPS
Cooling unit
Breaker
Bus coupler
```

## Key fields

```txt
assetId
assetName
assetFamily
site
building / room / zone
serialNumber
installationYear
serviceCoverage
connectivityStatus
DPP status
healthStatus
lastActivity
sourceScope
sourceStrength
freshness
```

## Relationships

```txt
Site contains Assets.
Asset may contain Components.
Asset may have Health signals.
Asset may have Recommendations.
Asset may have Actions.
Asset may have Documents and Visit history.
Asset may be connected, partially connected or non-connected.
```

## Facts versus interpretation

Keep separate:

```txt
Asset identity
Connectivity status
Raw Health facts
Lifecycle facts
Intelligence interpretation
Recommendation
Expected outcome
Validation state
```

## Source of truth

Use structured systems for:

```txt
asset identity
serial number
location
hierarchy
connectivity
telemetry
service coverage
health status
```

Do not use GenAI to invent asset facts or telemetry.

## UI representation

Use:

```txt
AssetIntelligenceSummary
ConnectivityCoverageCard
ComponentHierarchy
CompactMetric / MetricStrip
KeyValueList
Timeline
DocumentRow
DetailPanel
```

## Make mistakes to avoid

```txt
presenting non-connected assets as live-monitored
collapsing Health facts and Intelligence interpretation
inventing asset hierarchy
inventing benchmark values
presenting expected outcome as proven value
```
