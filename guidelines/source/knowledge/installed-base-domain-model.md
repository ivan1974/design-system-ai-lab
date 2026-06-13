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

## How to use this knowledge

The structures below are semantic defaults, not fixed screen requirements.

They help GenAI understand what each information type usually means and where it usually belongs in the reference domain model.

GenAI may propose a different screen architecture when the user prompt requires it.

When it does, it should preserve the underlying semantic separation:

```txt
facts are not interpretations
evidence is not recommendation
reference information is not current condition
history events are not documents
documents are not actions
AI confidence is not proof
```

If the prompt asks for a simpler screen, combine sections carefully.

If the prompt asks for a different structure, explain the design reason.

If the prompt asks for the reference Installed Base experience, use the default ownership model more strictly.

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

The asset model is the default source of truth for shared identifiers and asset-level facts.

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

Asset identity should remain visible in list rows and detail panels unless the prompt is about a different object, such as a site, recommendation, document or service action.

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

## Default information ownership model

Use this model as a semantic guide, not as a mandatory tab contract.

It tells GenAI where information usually belongs in the reference Installed Base experience.

A generated screen may merge, rename or reorganize sections if the prompt requires it, but it should not blur the meaning of facts, evidence, interpretation, reference data, history and documents.

---

## Health

Health answers:

```txt
Why do we believe this condition is true?
```

By default, Health is the evidence area.

Health usually includes:

```txt
evidence sources
condition level
condition trend
condition drivers
component health
live metrics
service visit findings
```

Avoid placing the following inside Health unless the prompt explicitly asks for a compact combined view and the distinction remains visible:

```txt
recommendations
action plans
benchmarking
diagnosis
root cause analysis
risk assessment
```

Health is evidence-first.

If the UI needs a recommendation, keep it visually and semantically distinct from Health evidence.

---

## Intelligence

Intelligence answers:

```txt
What does the available evidence suggest?
What decision or action may be needed?
```

By default, Intelligence is the interpretation and recommendation area.

Intelligence usually includes:

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

Avoid placing raw evidence as if Intelligence owns it:

```txt
raw metrics
health evidence
component telemetry
service reports
```

Intelligence may reference evidence.

It should not duplicate evidence when a link or reference preserves clarity.

Expected outcomes are potential outcomes, not proven value.

---

## Overview

Overview answers:

```txt
What is the current situation and what deserves attention?
```

By default, Overview is the situational awareness layer.

Overview usually includes:

```txt
alert banner
asset identity
product identity
asset status
asset assessment
service coverage
component hierarchy summary
```

Overview may consume condition and recommendation-driven alerts.

Avoid using Overview as the deep proof, diagnosis or recommendation area unless the prompt explicitly asks for a very compact single-page experience.

Use Overview for attention and context, not for exhaustive proof detail.

---

## Passport

Passport answers:

```txt
What is the reference information for this product or asset?
```

By default, Passport is the reference information area.

Passport usually includes:

```txt
product identity
technical specifications
lifecycle status
compliance and certifications
```

Avoid using Passport for current health, active recommendations, operational metrics or service findings unless the prompt is intentionally designing a merged asset reference view.

Use Passport for stable reference and identity, not for current condition or actions.

---

## History

History answers:

```txt
What happened to this asset over time?
```

By default, History is operational memory.

History usually includes:

```txt
installation events
commissioning events
maintenance visits
coverage updates
recommendation generated events
service reports linked from events
```

History is event-centric.

Avoid using History as a document library.

Avoid using History as the source of live health metrics.

---

## Documents

Documents answers:

```txt
Which documents are available for this asset?
```

By default, Documents is an asset document library.

Documents usually includes:

```txt
technical documentation
engineering documentation
compliance documentation
service records
site documentation
```

Documents should support search, filters, category grouping and download actions when available.

Avoid placing the following in Documents unless the prompt is intentionally designing a combined work queue and the document nature remains clear:

```txt
recommendations
diagnostics
benchmark information
operational timeline information
```

A service report may be linked from History and listed in Documents.

History owns the event meaning.

Documents owns the document object.

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

## Cross-section linkage model

Use stable IDs to link related information across sections, tabs or panels:

```txt
asset_id
component_id
recommendation_id
document_id
event_id
```

Common ownership-preserving links:

```txt
attention alert → recommendation
recommendation → health evidence
event report link → document record
certification reference → compliance document
asset ID → all related sections
```

Do not duplicate information when a link preserves ownership and readability.

Avoid these semantic confusions:

```txt
recommendations mixed into evidence without distinction
raw metrics presented as interpretation
operational timeline presented as document library
visual asset generation metadata displayed to users
```

---

## GenAI generation guidance

When generating an Installed Base screen:

1. Start with the user decision.
2. Use Asset as the main object unless the prompt clearly focuses on Site, Recommendation, Evidence or Document.
3. Keep facts, evidence, interpretation and actions semantically distinct.
4. Use rows, tables or dense lists for asset comparison.
5. Use details, tabs, accordions or panels for evidence depth.
6. Keep action ownership visible.
7. Show uncertainty when coverage, connectivity or evidence is partial.
8. Do not invent missing telemetry, history, documents or proof.
9. If the prompt asks for a different organization, follow the prompt while preserving semantic clarity.

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

Choose them because they support the user decision and preserve domain meaning.

---

## Common mistakes

Avoid:

```txt
turning Installed Base into a KPI dashboard
mixing recommendations into evidence without distinction
mixing raw metrics into interpretation without distinction
hiding documents inside event history without a document affordance
using reference information as current health or action state
showing live metrics for non-connected assets without data
showing third-party assets as if they have full Schneider telemetry
making expected outcomes look like proven value
creating one component per business label
```

---

## When the prompt intentionally changes the structure

If the user asks for a different screen structure, GenAI may propose it.

Examples:

```txt
single-page asset summary
executive overview
service planner queue
document-first experience
recommendation review workspace
site-level risk overview
```

In those cases:

```txt
follow the prompt
state the organizing logic
preserve facts vs interpretation
preserve evidence vs recommendation
keep trust and validation visible
avoid inventing missing data
use DS components according to intent
```

The default ownership model becomes guidance, not a blocker.

---

## Repair prompt

If a generated Installed Base screen is weak, ask:

```txt
What is the main asset or object?
What user decision is being supported?
Which content is fact, evidence, interpretation, recommendation or action?
Does the organization preserve those distinctions?
Is the screen inventing missing data?
Is the recommended action owned and time-bound?
Would a dense row, table, tab, panel or evidence list improve the hierarchy?
If the screen departs from the default model, is the reason clear and prompt-driven?
```
