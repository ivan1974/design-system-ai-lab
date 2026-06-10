# Asset domain model

## Definition

An asset is a maintainable equipment item in the installed base.

Asset facts must come from structured systems, explicit input or visible source context.

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
validationStatus
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

### Risk level when asset risk is summarized

Canonical values:

```txt
critical
warning
info
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

Do not use GenAI to invent asset facts, hierarchy or telemetry.

## UI representation

Use:

```txt
AssetIntelligenceSummary
ConnectivityCoverageCard
ComponentHierarchy
CompactMetric
MetricStrip
KeyValueList
Timeline
DocumentRow
WorkspaceDetailPanel
```

Use `WorkspaceDetailPanel` for new selected asset detail in generated workspaces.

Use `DetailPanel` only as a lower-level primitive or legacy composition.

## GenAI generation rules

```txt
Show sourceScope when only connected assets are represented.
Show sourceStrength when asset facts drive a recommendation.
Show validationStatus when asset intelligence needs review.
Do not present non-connected assets as live-monitored.
Do not collapse Health facts and Intelligence interpretation.
Do not present expected outcome as proven value.
```

## Make mistakes to avoid

```txt
presenting non-connected assets as live-monitored
collapsing Health facts and Intelligence interpretation
inventing asset hierarchy
inventing telemetry
inventing benchmark values
presenting expected outcome as proven value
```

## Related contracts

```txt
contracts/evidence-and-trust.contract.json
contracts/props.contract.json
contracts/business-patterns.contract.json
```
