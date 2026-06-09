# Progressive disclosure

## Purpose

This file defines how generated screens should reveal information gradually.

Decision workspaces often contain many facts, signals, documents and
recommendations. Showing everything at the same level creates cognitive load and
false hierarchy.

---

## Core rule

Do not display all information at the same visual level.

Reveal information according to the user's decision need.

---

## Four-level model

```txt
Level 1 — Decision-critical summary
Level 2 — Supporting evidence
Level 3 — Diagnostic detail
Level 4 — Raw data / documents
```

---

## Level 1 — Decision-critical summary

Use for what the user must understand first.

Examples:

```txt
Asset condition is critical.
Renewal readiness is blocked.
Three recommendations need expert validation.
Monitoring visibility is partial.
```

Preferred UI:

```txt
PageHeader
StatusSummary
AlertCard for major risk
Compact summary section
DetailPanelHeader
```

Do not overload Level 1 with raw telemetry or long history.

---

## Level 2 — Supporting evidence

Use for facts that make the summary credible.

Examples:

```txt
Source scope: connected assets only.
Last update: 18 hours ago.
SF6 pressure below threshold.
Two critical assets disconnected.
Proof is internal-only.
```

Preferred UI:

```txt
KeyValueList
EvidenceRow
SignalRow
CompactMetric
MetricStrip
SourceStrengthPill
```

---

## Level 3 — Diagnostic detail

Use for deeper investigation.

Examples:

```txt
component hierarchy
benchmark drivers
trend details
service visit observations
recommendation rationale
impact analysis
```

Preferred UI:

```txt
DetailPanelTabs
SectionStack
ComponentHierarchy
Timeline
PeerBenchmarkPanel
RecommendationReviewPanel
```

---

## Level 4 — Raw data / documents

Use for auditable source material.

Examples:

```txt
commissioning report
last visit report
technical manual
certificate
single-line diagram
raw monitoring extract
```

Preferred UI:

```txt
DocumentRow
DocumentList
TimelineItem with report link
```

Do not put raw documents before the user understands the summary and evidence.

---

## Recommended progression

For asset intelligence:

```txt
Asset identity
→ condition summary
→ observed Health facts
→ source scope and freshness
→ Intelligence interpretation
→ recommendation
→ validation state
→ history and documents
```

For renewal readiness:

```txt
Renewal context
→ readiness status
→ proof gaps
→ risks
→ recommendation review
→ mitigation actions
→ supporting proof documents
```

For QBR readiness:

```txt
Customer context
→ review readiness
→ customer-ready proof
→ unresolved risks
→ recommendations
→ preparation actions
→ supporting documents
```

---

## Figma Make anti-patterns

Avoid:

```txt
showing metrics, alerts, recommendations and documents all at the same level
starting with a long table of raw data
placing actions before context and evidence
placing documents before the proof gap is clear
using card size to imply confidence
using confidence language instead of source strength
```

---

## Acceptance criteria

A generated screen passes progressive disclosure review when:

```txt
Decision-critical information appears first.
Supporting evidence appears before interpretation.
Diagnostic detail is available but not visually dominant by default.
Raw data and documents are accessible without overwhelming the main decision flow.
```
