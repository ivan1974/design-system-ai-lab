# Component domain model

## Definition

A component is a maintainable or inspectable sub-part of an asset.

A component may contribute to asset condition, but it is not a replacement for the asset-level health view.

Examples:

```txt
bus coupler unit
disconnector switch
earthing switch
SF6 insulation system
battery string
controller box
breaker
busbar system
```

## Key fields

```txt
componentId
componentName
parentAsset
role
status
observedSignal
monitoringMode
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

### Risk level when component risk is summarized

Canonical values:

```txt
critical
warning
info
```

## Relationships

```txt
Asset contains Components.
Component may contribute to asset Health.
Component may have observed signals.
Component may support a Recommendation.
Component may have service history or documents.
```

## UI representation

Use:

```txt
ComponentHierarchy
ComponentHierarchyItem
SignalRow
EvidenceRow
CompactMetric
WorkspaceDetailPanel
```

Use `ComponentHierarchyItem` only inside `ComponentHierarchy`.

Do not create local tree markup.

## GenAI generation rules

```txt
Show component status as a contribution to asset condition, not as a replacement for asset Health.
Do not invent component hierarchy.
Do not imply live monitoring if the component is only inspected during service visits.
Show sourceScope and sourceStrength when component signals affect recommendations.
Show validationStatus when component interpretation needs review.
```

## Make mistakes to avoid

```txt
creating local tree markup
using emojis as system icons
collapsing all component status into one asset badge
inventing telemetry per component
using component status as customer-ready proof
```

## Related contracts

```txt
contracts/components.contract.json
contracts/evidence-and-trust.contract.json
contracts/props.contract.json
```
