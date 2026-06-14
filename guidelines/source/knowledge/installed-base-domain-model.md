# Installed Base domain model

## Status

```txt
SOURCE KNOWLEDGE / INSTALLED BASE / GENAI DOMAIN GROUNDING
```

## Purpose

This file gives domain grounding for Installed Base screens.

It is not a screen contract and not a component catalogue.

Use it when the prompt mentions:

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

A good Installed Base screen helps the user understand:

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

## Must

You must preserve semantic separation:

```txt
facts are not interpretations
evidence is not recommendation
reference information is not current condition
history events are not documents
documents are not actions
AI confidence is not proof
```

You must not invent asset facts, telemetry, documents, history, evidence, validation state or proof.

You must not show live metrics for non-connected assets unless explicitly provided.

You must not present expected outcomes as proven value.

You must not invent package components or imports.

---

## Should

You should use Asset as the main object unless the prompt clearly focuses on Site, Recommendation, Evidence, Document or Service action.

You should keep facts, evidence, interpretation, recommendations and actions distinct.

You should use rows, tables or dense lists for asset comparison.

You should show uncertainty when coverage, connectivity or evidence is partial.

You should keep action ownership visible when execution matters.

---

## May

You may merge, rename or reorganize sections if the prompt requires it.

You may create local screen-specific components when exported components do not fit.

You may simplify the default model for compact screens, while preserving semantic clarity.

---

## Primary object: Asset

An asset is the main Installed Base domain object.

It usually includes:

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

If an asset fact is missing, show an unknown, partial or unavailable state instead of fabricating data.

---

## Location model

Use this hierarchy when available:

```txt
Site
-> Building
-> Electrical Area
-> Room
-> Asset
-> Component
```

Location gives operational context and helps the user understand criticality, grouping and service routing.

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

Evidence implications:

```txt
connected asset
  may have live telemetry and current metrics

non-connected asset with service history
  may have field evidence and service reports, but no live telemetry

third-party asset
  may have limited product identity, no native coverage, unknown health or no Schneider record
```

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

Connectivity is not health.

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

Coverage is not health.

No coverage does not automatically mean poor condition.

No coverage may mean lower visibility, fewer service records or a service risk to review.

---

## Default information ownership model

Use this model as semantic guidance, not as a mandatory tab contract.

### Overview

Answers:

```txt
What is the current situation and what deserves attention?
```

Use for attention and context, not exhaustive proof detail.

### Health

Answers:

```txt
Why do we believe this condition is true?
```

Health is evidence-first.

It may include:

```txt
evidence sources
condition level
condition trend
condition drivers
component health
live metrics
service visit findings
```

Avoid placing recommendations, action plans or expected outcomes inside Health unless a compact combined view is explicitly needed and the distinction remains visible.

### Intelligence

Answers:

```txt
What does the available evidence suggest?
What decision or action may be needed?
```

Intelligence is interpretation and recommendation oriented.

It may include:

```txt
findings
diagnosis
benchmark interpretation
recommendations
action plans
expected outcomes
recommendation lifecycle
```

Intelligence may reference evidence but should not duplicate it unnecessarily.

### Passport

Answers:

```txt
What is the reference information for this product or asset?
```

Passport is stable reference information: product identity, specifications, lifecycle status, compliance and certifications.

It should not own current health, active recommendations, operational metrics or service findings.

### History

Answers:

```txt
What happened to this asset over time?
```

History is event-centric operational memory.

It may include installation, commissioning, maintenance visits, coverage updates and recommendation-generated events.

A history event may link to a service report.

### Documents

Answers:

```txt
Which documents are available for this asset?
```

Documents is the asset document library.

It may include technical documentation, engineering documentation, compliance documentation, service records and site documentation.

A service report may be linked from History and listed in Documents.

History owns event meaning.

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

---

## Action

An action is the operational follow-through.

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

Ownership-preserving links:

```txt
attention alert -> recommendation
recommendation -> health evidence
event report link -> document record
certification reference -> compliance document
asset ID -> all related sections
```

Do not duplicate information when a link preserves ownership and readability.

---

## Useful UI material

Use exported DS material or local composition according to intent.

Useful exported material may include:

```txt
AssetInventoryRow
HealthBadge
StatusLabel
Table
Tabs
Alert
Badge
Pill
Tag
Progress
Accordion
Collapsible
ScrollArea
SearchField
FilterDropdown
ViewFilterBar
AllFiltersPanel
Tooltip
Popover
Dialog
Button
```

Useful local screen-specific composition may include:

```txt
local detail section
local evidence row
local recommendation block
local action summary
local proof gap section
```

Do not import local composition names from the package unless they are exported.

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
fictional package component imports
```

---

## When the prompt intentionally changes the structure

If the user asks for a different screen structure, follow the prompt while preserving semantic clarity.

Examples:

```txt
single-page asset summary
executive overview
service planner queue
document-first experience
recommendation review workspace
site-level risk overview
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
Would a dense row, table, tab, panel or local evidence section improve the hierarchy?
If the screen departs from the default model, is the reason clear and prompt-driven?
```
