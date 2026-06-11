# AssetDetailAnalysisPanel

## Status

v0.7.0 Installed Base Intelligence asset detail layer.

## Purpose

Use `AssetDetailAnalysisPanel` as the full business detail panel opened from an asset row.

It is not a generic panel. It is a screen-specific wrapper over existing DS primitives and decision components.

## Required structure

```txt
Panel Header
Tab Navigation
Tab Content
Sticky Action Area
```

## Panel Header

The header must display:

```txt
Location
Asset Name
Asset Description
Close icon
```

The close icon, overlay close, Escape close and scroll lock are provided by `SidePanel`.

## Required tabs

Exactly six tabs are allowed:

```txt
Overview
Health
Intelligence
Passport
History
Documents
```

Do not add Summary, Alerts, Recommendations, DPP, Maintenance or AI tabs.

## Health tab rule

Health is facts-only.

It may show:

```txt
observed condition
health state
connectivity state
status
coverage
last known date
```

It must not show:

```txt
diagnosis
recommendation
next step
action plan
benchmark
business interpretation
```

## Intelligence tab rule

Intelligence is decision-oriented.

It may show:

```txt
diagnosis
interpretation
recommendation
prioritization
next step
action plan
```

It must not pretend to be a raw measurement tab.

## Sticky Action Area

Exactly three actions are allowed:

```txt
Schedule Service
Download Report
Contact Expert
```

Do not add quote, renew, escalate, email, assign, export or approve actions.

## Composition

`AssetDetailAnalysisPanel` reuses:

```txt
SidePanel
Tabs
KeyValueList
KeyValueRow
Timeline
TimelineItem
DocumentRow
HealthPill
StatusWithIcon
CoverageTag
Button
Text
```

## Generation rule

Do not create local detail panel, tab, document row, timeline, health card or recommendation components.

Do not duplicate health facts in Intelligence.

Do not place recommendations in Health.
