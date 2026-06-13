# Industrial electrical system basics

## Status

```txt
SOURCE KNOWLEDGE / INDUSTRIAL ELECTRICAL SYSTEMS / GENAI DOMAIN GROUNDING
```

## Purpose

This file gives GenAI basic domain knowledge about industrial electrical systems.

Use it before generating screens about:

```txt
electrical assets
installed base
power distribution
critical infrastructure
maintenance
service recommendations
asset health
industrial operations
```

This is not a technical engineering manual.

It is minimum domain grounding so GenAI can produce more relevant screens, wording and component choices.

---

## Core idea

An industrial electrical system distributes, protects, converts, stores, monitors and supports electrical power for a site.

In critical environments such as datacenters, hospitals, factories, mines, oil and gas facilities or life-science plants, electrical continuity is essential.

A weak electrical asset can create:

```txt
safety risk
unplanned downtime
production loss
service interruption
maintenance urgency
compliance exposure
energy visibility issues
```

A good screen should help users understand system condition and decide what to do next.

---

## Typical user goals

Industrial electrical users often need to:

```txt
know which assets exist
understand where assets are located
monitor condition and risk
identify assets needing service
understand evidence behind condition
prioritize maintenance actions
verify coverage or service contract status
find product and compliance documentation
review maintenance history
coordinate expert or field service action
```

Do not assume the user only wants a dashboard.

They often need an operational workspace for decision and action.

---

## Electrical system hierarchy

Use this hierarchy when available:

```txt
Site
→ Building
→ Electrical Area
→ Room
→ Asset
→ Component
```

Example:

```txt
Datacenter campus
→ Building A
→ MV Substation
→ MV Room A
→ SM6 switchgear
→ protection relay / busbar / breaker
```

This hierarchy helps users understand physical location, electrical topology and service routing.

---

## What an asset is

An asset is a piece of equipment installed at a customer site.

An electrical asset usually has:

```txt
identity
location
manufacturer
asset family
model
serial number
installation date
lifecycle state
connectivity state
coverage state
health or condition state
documentation
service history
components
```

An asset is not only a database row.

It is operational equipment that may affect continuity, safety or service performance.

---

## Common asset families

### MV Switchgear

Medium-voltage switchgear distributes and controls power at medium voltage level.

It may include breakers, busbars, protection relays and insulation systems.

It is often critical because it sits close to incoming utility feeds or major distribution paths.

Useful screen signals:

```txt
condition level
active alert
protection relay status
SF6 or insulation condition
load and current
service coverage
critical path dependency
```

---

### Transformer

A transformer changes voltage level, often from medium voltage to low voltage.

It is a key asset between upstream supply and downstream distribution.

Useful screen signals:

```txt
temperature
load
inspection history
age
winding or insulation condition
service visit findings
coverage
```

Connected telemetry may be limited. Do not invent live metrics when the asset is not connected.

---

### LV Switchgear

Low-voltage switchgear distributes power to downstream loads.

It may include main breakers, busbars, meters, feeders and protection devices.

Useful screen signals:

```txt
breaker status
busbar temperature
load
current
power quality
component health
maintenance findings
```

---

### UPS

A UPS provides backup power and power continuity when normal supply is disrupted.

It is often critical in datacenters and hospitals.

Useful screen signals:

```txt
load
battery runtime
bypass availability
battery condition
input quality
service readiness
N+1 reserve status
```

---

### Battery System

Battery systems support UPS runtime and continuity.

Useful screen signals:

```txt
battery age
runtime
temperature
inspection findings
replacement horizon
service history
```

---

### Generator

A generator provides backup power during utility outage.

Useful screen signals:

```txt
availability
fuel readiness
last test
maintenance history
runtime hours
inspection status
```

---

### PDU / STS / Busway / Rack PDU

These distribute power inside datacenters or critical electrical rooms.

Useful screen signals:

```txt
load
capacity
thermal condition
connectivity
critical downstream dependency
service history
```

---

### Power Monitoring / Protection Relay

Monitoring devices and relays provide visibility, measurement and protection logic.

They may not be the largest physical assets, but they can be critical for visibility and control.

Useful screen signals:

```txt
communication status
trip circuit health
event count
metering quality
power quality index
firmware or configuration status
```

---

### Cooling electrical assets

Cooling-related electrical equipment supports mechanical cooling systems.

In datacenters, cooling power continuity can be indirectly critical to IT load continuity.

Useful screen signals:

```txt
MCC health
load
temperature
service history
critical dependency
aging risk
```

---

## What a component is

A component is a meaningful part of an asset.

Examples:

```txt
main breaker
busbar system
protection relay
SF6 insulation system
power module
static bypass
communication module
battery string
metering core
trip output
```

Component health is often more precise than asset-level health.

GenAI should use component details to explain evidence, not to create unnecessary visual complexity.

---

## Connectivity

Connectivity means the asset can provide digital data or telemetry.

Connected assets may provide live or recent evidence.

Non-connected assets may still have evidence from inspections, service visits or documents.

Do not confuse:

```txt
connected = visible digitally
healthy = condition is good
covered = service relationship exists
```

A connected asset can be unhealthy.

A non-connected asset can still be operational.

---

## Coverage

Coverage describes the service relationship for the asset.

Examples:

```txt
EcoCare Advanced
Preventive Maintenance Contract
No Coverage
```

Coverage may indicate available services such as:

```txt
preventive maintenance
remote monitoring
expert support
field service reporting
```

Coverage is not condition.

No coverage does not prove poor health.

No coverage may indicate service risk, limited support or missing evidence.

---

## Health / condition

Health or condition is an evidence-based view of current asset state.

It should be based on:

```txt
telemetry
inspection
service visit
component health
condition drivers
live metrics
history
```

Allowed health-style values may include:

```txt
Critical
Poor
Fair
Good
Excellent
Unknown
```

GenAI must not calculate health values unless the prompt provides the rule.

If health data is not provided, show `Unknown`, `Unavailable`, `Not assessed` or an equivalent partial state.

---

## Product Passport / Digital Product Passport

A product passport is reference information about the product or asset.

It helps users understand:

```txt
what product this is
who manufactured it
which model it is
which serial number identifies it
when it was manufactured or installed
what technical specifications are known
what lifecycle status applies
what compliance documents exist
```

A product passport is not a health tab.

It should not own recommendations, current condition, service findings or live metrics.

Typical content:

```txt
manufacturer
commercial name
product family
product model
catalog ID
serial number
manufacturing date
installation date
model precision
verification status
technical specifications
lifecycle status
compliance certificates
```

Use product passport information to support identity, traceability and compliance.

---

## Maintenance history

Maintenance history is the operational memory of an asset.

It tells the user what happened over time.

Typical events:

```txt
installation
commissioning
preventive maintenance visit
corrective maintenance visit
coverage update
inspection
recommendation generated
modernization assessment
```

History is event-centric.

A history event may link to a service report, but the report itself belongs to the document library.

Do not replace history with documents, and do not replace documents with history.

---

## Service report

A service report is a document created from a field visit or service activity.

It may contain observations, work performed, findings and actions identified.

It can support evidence in Health or a recommendation in Intelligence.

It should not be rewritten as a recommendation unless the prompt provides that interpretation.

---

## Document library

A document library is a collection of asset-related documents.

Typical categories:

```txt
technical documentation
engineering documentation
compliance documentation
service records
site documentation
```

Documents answer:

```txt
Which documents are available?
Where can the user find them?
Can the user search, filter or download them?
```

Documents do not own recommendations or diagnosis.

---

## Recommendation

A recommendation is a proposed action or decision based on evidence and interpretation.

It may be produced by installed base intelligence, service teams or experts.

A useful recommendation includes:

```txt
finding
rationale
evidence references
risk or opportunity
priority
status
action plan
owner
timing
expected outcomes
```

Expected outcomes are possible benefits, not proof.

Use careful language when evidence is partial.

---

## Evidence strength

Evidence strength expresses how reliable the supporting evidence is.

It may depend on:

```txt
source type
source freshness
coverage of the asset or component
validation state
whether the asset is connected
whether recent service history exists
```

Do not equate AI confidence with evidence strength.

AI can summarize or prioritize evidence, but it is not itself the source.

---

## Criticality

Criticality expresses how important an asset is to system continuity or safety.

An asset may be critical because it supports:

```txt
incoming utility supply
main distribution
backup power
cooling power
protection and control
monitoring visibility
critical downstream loads
```

Criticality should influence prioritization and hierarchy.

It should not create invented condition evidence.

---

## Common domain confusions to avoid

Do not confuse:

```txt
connectivity with health
coverage with condition
product passport with health
history with documents
service report with action plan
AI recommendation with validated proof
asset family with component type
site criticality with asset failure evidence
```

---

## GenAI screen guidance

When a prompt is about industrial electrical assets:

1. Identify the asset or system level first.
2. Identify whether the user needs inventory, condition, evidence, recommendation, reference information, history or documents.
3. Keep facts, evidence, interpretation, recommendation and actions distinct.
4. Show uncertainty when evidence is missing or partial.
5. Use technical vocabulary only where it helps the user decide.
6. Prefer dense operational structures over decorative dashboards.
7. Make next actions owned and time-bound when action is part of the screen.

---

## UI implications

Use these UI choices according to intent:

```txt
Table or dense rows
  for asset inventory, comparison and prioritization

StatusBadge / Badge
  for compact state such as health, connectivity, coverage, validation or priority

ScoreBar / Progress
  for condition, readiness or completion when value is provided

EvidenceList
  for source, freshness, validation and proof details

RecommendationCard
  for proposed action, rationale, owner and timing

DetailSection
  for stable facts and reference information

Tabs
  for stable views of the same asset or system

Accordion / Collapsible
  for component details and optional evidence depth

Alert
  for urgent but bounded attention signals
```

Do not create a custom component for every electrical term.

Use generic components with domain content.
