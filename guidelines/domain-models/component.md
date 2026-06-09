# Component domain model

## Definition

A component is a maintainable or inspectable sub-part of an asset.

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
DetailPanel
```

## Rules

```txt
Show component status as a contribution to asset condition, not as a replacement for asset Health.
Do not invent component hierarchy.
Do not imply live monitoring if the component is only inspected during service visits.
```

## Make mistakes to avoid

```txt
creating local tree markup
using emojis as system icons
collapsing all component status into one asset badge
inventing telemetry per component
```
