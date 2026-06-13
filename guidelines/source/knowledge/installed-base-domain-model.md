# Installed Base domain model

## Status

```txt
SOURCE KNOWLEDGE / INSTALLED BASE / GENAI DOMAIN GROUNDING
```

## Purpose

This file helps GenAI understand the Installed Base domain before generating screens.

It is not a screen contract.

It is domain knowledge used to preserve meaning, ownership and trust when composing an operational decision workspace.

Use this file when the prompt mentions:

```txt
Installed Base
asset inventory
asset monitoring
service intelligence
asset health
coverage
connectivity
maintenance history
asset documents
recommendations
Digital Product Passport
```

---

## Core domain idea

Installed Base is the structured view of customer assets, their identity, location, service context, condition evidence, recommendations, history and documents.

A good Installed Base screen should help the user understand:

```txt
which assets exist
where they are
which assets require attention
why they require attention
what evidence is available
what action is recommended
what is still unknown or unvalidated
```

Do not treat Installed Base as a generic dashboard.

Treat it as an operational decision workspace.

---

## Primary object: Asset

An asset is the main domain object.

The asset model is the single source of truth for shared identifiers and asset-level facts.

An asset should generally include:

```txt
asset identity
asset reference
asset description
asset family
vendor
ownership type
location
connectivity
coverage
health summary
product identity
component hierarchy
document references
history references
recommendation references
```

GenAI should not invent asset facts.

If an asset fact is missing, show an unknown, partial or unavailable state instead of fabricating data.

---

## Asset identity

Asset identity answers:

```txt
What asset is this?
How is it identified?
Where is it installed?
What type of equipment is it?
Who manufactured it?
```

Typical fields:

```txt
asset_id
asset_name
asset_reference
asset_description
asset_family
vendor
location
product_identity
```

Asset identity should remain visible in list rows and detail panels.

---

## Location model

Installed Base assets are usually organized by physical and electrical context.

Use this hierarchy when available:

```txt
Site
→ Building
→ Electrical Area
→ Room
→ Asset
→ Component
```

Location is not only metadata. It gives operational context and helps the user understand criticality, grouping and service routing.

---

## Asset family

Asset family explains the type of equipment.

Examples:

```txt
MV Switchgear
Transformer
LV Switchgear
UPS
Battery System
Generator
PDU
STS
Busway
Rack PDU
Cooling
Power Monitoring
Protection Relay
Utility Feed
```

Use asset family for filtering, grouping and comparison.

Do not turn every asset family into a dedicated component.

---

## Architecture state

Architecture state describes the operational profile of the asset.

Common states:

```txt
Connected Schneider Asset
Connected Schneider Asset with Alert
Connected Schneider Asset with Connectivity Issue
Non-Connected Schneider Asset
Non-Connected Schneider Asset with Service History
Third-Party Asset
```

Architecture state helps GenAI decide what evidence can exist.

For example:

```txt
connected asset
  may have live telemetry and current metrics

non-connected asset with service history
  may have field evidence and service reports, but no live telemetry

third-party asset
  may have limited product identity, no native coverage, unknown health or no Schneider record
```

Do not show live metrics for non-connected assets unless explicitly provided.

---

## Connectivity

Connectivity answers:

```txt
Can the system see this asset digitally?
Is there recent data?
What visibility does the user have?
```

Typical states:

```txt
Connected
Not Connected
Unknown
```

Connectivity is not the same as health.

A connected asset can be healthy or unhealthy.

A non-connected asset can still have service history.

Unknown connectivity should reduce certainty, not create invented evidence.

---

## Coverage

Coverage answers:

```txt
What service relationship exists for this asset?
What level of support or contract applies?
What service evidence may be available?
```

Typical fields:

```txt
contract type
contract status
coverage scope
connectivity status
```

Coverage is not the same as health.

No coverage does not automatically mean poor condition.

No coverage does mean the user may have lower visibility, fewer service records or a service risk to review.

---

## Health

Health answers:

```txt
Why do we believe this condition is true?
```

Health owns evidence.

Health may include:

```txt
evidence sources
condition level
condition trend
condition drivers
component health
live metrics
service visit findings
```

Health must not contain:

```txt
recommendations
action plans
benchmarking
diagnosis
root cause analysis
risk assessment
```

Health is evidence only.

If the UI needs a recommendation, put it in Intelligence or a recommendation component, not inside Health.

---

## Intelligence

Intelligence answers:

```txt
What does the available evidence suggest?
What decision or action may be needed?
```

Intelligence owns interpretation.

Intelligence may include:

```txt
findings
diagnosis
benchmark interpretation
recommendations
action plans
expected outcomes
recommendation lifecycle
overview alert generation
```

Intelligence must not own:

```txt
raw metrics
health evidence
component telemetry
service reports
```

Recommendations should reference evidence instead of duplicating it.

Expected outcomes are potential outcomes, not proven value.

---

## Overview

Overview answers:

```txt
What is the current situation and what deserves attention?
```

Overview is the situational awareness layer.

Overview may include:

```txt
alert banner
asset identity
product identity
asset status
asset assessment
service coverage
component hierarchy summary
```

Overview may consume condition and recommendation-driven alerts, but it should not own deep evidence, raw metrics, diagnosis, benchmarking or recommendations.

Use Overview for attention and context, not for proof detail.

---

## Passport

Passport answers:

```txt
What is the reference information for this product or asset?
```

Passport owns reference information.

Passport may include:

```txt
product identity
technical specifications
lifecycle status
compliance and certifications
```

Passport must not own:

```txt
health information
recommendations
benchmarking
operational metrics
service findings
```

Use Passport for stable reference and identity, not for current condition or actions.

---

## History

History answers:

```txt
What happened to this asset over time?
```

History is operational memory.

History may include:

```txt
installation events
commissioning events
maintenance visits
coverage updates
recommendation generated events
service reports linked from events
```

History is event-centric.

Do not use History as a document library.

Do not use History as the source of live health metrics.

---

## Documents

Documents answers:

```txt
Which documents are available for this asset?
```

Documents is an asset document library.

Documents may include:

```txt
technical documentation
engineering documentation
compliance documentation
service records
site documentation
```

Documents should support search, filters, category grouping and download actions when available.

Documents must not contain:

```txt
recommendations
diagnostics
benchmark information
operational timeline information
```

A service report may be linked from History and listed in Documents.

History owns the event.

Documents owns the document.

---

## Evidence

Evidence is any source used to justify condition, interpretation or recommendation.

Examples:

```txt
live telemetry
last preventive maintenance visit
inspection report
component monitoring
service report
engineering document
compliance certificate
site upload
```

Evidence should include scope, freshness or validation when trust matters.

Do not use AI confidence as evidence strength.

---

## Recommendation

A recommendation is an intelligence-owned proposed next step based on evidence.

A recommendation should include:

```txt
recommendation type
status
priority
summary
finding
rationale
risk or opportunity
evidence references
action plan
expected outcomes
```

Every action inside a recommendation should expose:

```txt
owner
target timing or due date
priority or urgency
effort when available
```

Do not present expected outcomes as proven value.

---

## Action

An action is the operational follow-through.

Actions should be visible when the screen supports execution.

A useful action should include:

```txt
action label
owner
due date or target timing
priority
status when available
```

Avoid vague actions such as:

```txt
Review later
Follow up
Check status
```

unless ownership and timing are present.

---

## Cross-tab ownership model

Use stable IDs to link related information across tabs:

```txt
asset_id
component_id
recommendation_id
document_id
event_id
```

Common ownership-preserving links:

```txt
Overview alert → Intelligence recommendation
Intelligence recommendation → Health evidence
History report link → Documents service record
Passport certification → Documents compliance document
Asset ID → all tab models
```

Do not duplicate information across tabs when a link preserves ownership.

Examples of prohibited duplication:

```txt
recommendations displayed in Health
raw metrics displayed in Intelligence
operational timeline displayed in Documents
visual asset generation metadata displayed anywhere
```

---

## GenAI generation guidance

When generating an Installed Base screen:

1. Start with the user decision.
2. Use Asset as the main object unless the prompt clearly focuses on Site, Recommendation, Evidence or Document.
3. Keep facts, evidence, interpretation and actions separate.
4. Use rows, tables or dense lists for asset comparison.
5. Use details, tabs, accordions or panels for evidence depth.
6. Keep action ownership visible.
7. Show uncertainty when coverage, connectivity or evidence is partial.
8. Do not invent missing telemetry, history, documents or proof.

---

## Component selection hints

Use:

```txt
Table or row structures
  for asset inventory and operational comparison

Tabs
  for stable views of the same asset, such as Overview, Health, Intelligence, Passport, History and Documents

Accordion / Collapsible
  for component health details, document categories or optional evidence detail

Alert
  for bounded attention signals such as active alert, risk identified or missing evidence

StatusBadge / Badge
  for compact status, coverage, validation or count display

ScoreBar / Progress
  for health, readiness or completion indicators when the value is provided

EvidenceList
  for sources, freshness, validation and proof readiness

RecommendationCard
  for intelligence-owned recommendations and action plans

DetailSection
  for grouped facts or reference information
```

Do not choose components only because they are available.

Choose them because they support the user decision and preserve domain ownership.

---

## Common mistakes

Do not:

```txt
turn Installed Base into a KPI dashboard
mix recommendations into Health
mix raw metrics into Intelligence
hide Documents behind History
use Passport for current health or actions
show live metrics for non-connected assets without data
show third-party assets as if they have full Schneider telemetry
make expected outcomes look like proven value
create one component per business label
```

---

## Repair prompt

If a generated Installed Base screen is weak, ask:

```txt
What is the main asset or object?
What user decision is being supported?
Which content is fact, evidence, interpretation, recommendation or action?
Which tab or section owns each content type?
Is the screen inventing missing data?
Is the recommended action owned and time-bound?
Would a dense row, table, tab, panel or evidence list improve the hierarchy?
```
