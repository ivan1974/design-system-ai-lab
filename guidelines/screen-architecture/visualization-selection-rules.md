# Visualization selection rules

## Purpose

This file defines when to use a visual format in generated decision workspaces.

The goal is not to add charts.

The goal is to choose the simplest visual form that helps the user compare, understand, verify or act.

---

## Core rule

Do not use visualizations for decoration.

Use visualization only when it supports one of these tasks:

```txt
comparison
trend detection
hierarchy
distribution
relationship
causality
progress
follow-through
```

If a visualization does not support one of these tasks, use text, rows or a compact metric instead.

---

## Selection guide

| User need | Preferred format | Avoid |
| --- | --- | --- |
| Scan many items | Table, list, queue | Large cards for every item |
| Compare a few metrics | MetricGrid or MetricStrip | Decorative chart |
| Show secondary signals | CompactMetric | MetricCard for every signal |
| Show asset hierarchy | ComponentHierarchy | Custom nested div tree |
| Show history | Timeline | Random chronological cards |
| Show documents | DocumentRow | Cards for each document |
| Show source quality | SourceStrengthPill, EvidenceRow | Confidence-only badge |
| Show benchmark | PeerBenchmarkPanel with source context | Unsupported percentile claim |
| Show trend | Trend line or compact trend metric, only when grounded | Decorative sparkline |
| Show topology / SLD | Dedicated topology or diagram pattern, only when requested | Invented electrical diagram |

---

## Tables and lists

Use a table or dense list when the user needs to scan, filter or compare many items.

Good for:

```txt
installed base
recommendation queue
risk queue
action queue
document list
customer portfolio
```

Each row should include decision-relevant fields only.

Do not include every available field.

---

## Compact metrics

Use compact metrics when several operational signals need to be visible without turning into a dashboard.

Good for:

```txt
voltage
current
load
temperature
pressure
autonomy
last update
connected assets
```

Use `MetricCard` only for primary decision KPIs.

Use `CompactMetric` or `MetricStrip` for secondary signals.

---

## Timelines

Use a timeline when sequence matters.

Good for:

```txt
service visit history
alert history
case history
commissioning
proof history
recommendation review trail
```

A timeline item should include:

```txt
date or relative time
event type
event summary
source or owner when relevant
link to document when available
```

---

## Benchmarking

Use benchmark visualization only when the benchmark is grounded.

Required context:

```txt
cohort definition
sample size or scope when available
source strength
freshness or period
known limitations
validation status when customer-facing
```

Do not generate:

```txt
percentile
failure probability
ROI
cost avoidance
fleet position
```

unless the prompt provides the data or explicitly marks it as example/demo data.

---

## Topology and SLD

Use topology or single-line diagram representations only when requested or when asset relationships are the primary decision.

Do not invent:

```txt
electrical topology
single-line diagram
protection scheme
busbar structure
feeder relationships
```

If source data is not provided, show a scope or data limitation instead.

---

## Visualization anti-patterns

Avoid:

```txt
decorative charts
charts with no decision purpose
charts without source or scope
color-only status
benchmark claims without cohort context
too many metrics
generic dashboard cards
raw telemetry before summary context
```

---

## Acceptance criteria

A generated screen passes visualization review when:

```txt
Every visual format supports comparison, trend, hierarchy, distribution, relationship, causality, progress or follow-through.
Dense lists are used for many items.
Compact metrics are used for secondary signals.
Benchmarks include source or cohort context when trust matters.
No visualization invents facts, topology, telemetry, ROI or proof.
```
