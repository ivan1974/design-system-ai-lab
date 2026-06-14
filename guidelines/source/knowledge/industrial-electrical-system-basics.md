# Industrial electrical system basics

## Status

```txt
SOURCE KNOWLEDGE / INDUSTRIAL ELECTRICAL SYSTEMS / GENAI DOMAIN GROUNDING
```

## Purpose

This file gives minimum domain grounding about industrial electrical systems.

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

This is not a technical engineering manual and not a component catalogue.

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

A good screen helps users understand system condition and decide what to do next.

---

## Must

You must not invent asset facts, telemetry values, condition values, service history, source scope or proof.

You must not show live metrics for non-connected assets unless explicitly provided.

You must not confuse connectivity, health, coverage, criticality or proof.

You must not create one component per electrical term.

You must not invent package components or imports.

---

## Should

You should identify the asset or system level before designing the screen.

You should keep facts, evidence, interpretation, recommendations and actions distinct.

You should show uncertainty when evidence is missing or partial.

You should make next actions owned and time-bound when action is part of the screen.

You should use technical vocabulary only where it helps the user decide.

---

## May

You may create local screen-specific components when exported components do not fit.

You may simplify technical detail when the user goal is operational rather than engineering analysis.

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
-> Building
-> Electrical Area
-> Room
-> Asset
-> Component
```

Example:

```txt
Datacenter campus
-> Building A
-> MV Substation
-> MV Room A
-> SM6 switchgear
-> protection relay / busbar / breaker
```

This hierarchy helps users understand physical location, electrical topology and service routing.

---

## Asset basics

An electrical asset is installed equipment at a customer site.

It usually has:

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

An asset is operational equipment, not only a database row.

It may affect continuity, safety or service performance.

---

## Common asset families and useful signals

### MV Switchgear

Medium-voltage switchgear distributes and controls power at medium voltage level.

Useful signals:

```txt
condition level
active alert
protection relay status
SF6 or insulation condition
load and current
service coverage
critical path dependency
```

### Transformer

A transformer changes voltage level, often from medium voltage to low voltage.

Useful signals:

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

### LV Switchgear

Low-voltage switchgear distributes power to downstream loads.

Useful signals:

```txt
breaker status
busbar temperature
load
current
power quality
component health
maintenance findings
```

### UPS

A UPS provides backup power and power continuity when normal supply is disrupted.

Useful signals:

```txt
load
battery runtime
bypass availability
battery condition
input quality
service readiness
N+1 reserve status
```

### Battery System

Battery systems support UPS runtime and continuity.

Useful signals:

```txt
battery age
runtime
temperature
inspection findings
replacement horizon
service history
```

### Generator

A generator provides backup power during utility outage.

Useful signals:

```txt
availability
fuel readiness
last test
maintenance history
runtime hours
inspection status
```

### PDU / STS / Busway / Rack PDU

These distribute power inside datacenters or critical electrical rooms.

Useful signals:

```txt
load
capacity
thermal condition
connectivity
critical downstream dependency
service history
```

### Power Monitoring / Protection Relay

Monitoring devices and relays provide visibility, measurement and protection logic.

Useful signals:

```txt
communication status
trip circuit health
event count
metering quality
power quality index
firmware or configuration status
```

### Cooling electrical assets

Cooling-related electrical equipment supports mechanical cooling systems.

Useful signals:

```txt
MCC health
load
temperature
service history
critical dependency
aging risk
```

---

## Components inside assets

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

Component health can be more precise than asset-level health.

Use component details to explain evidence, not to create unnecessary visual complexity.

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

---

## Coverage

Coverage describes the service relationship for the asset.

Examples:

```txt
EcoCare Advanced
Preventive Maintenance Contract
No Coverage
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

Do not calculate health values unless the prompt provides the rule.

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

AI can summarize or prioritize evidence, but it is not the source.

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

## GenAI screen guidance

When a prompt is about industrial electrical assets:

```txt
Identify the asset or system level first.
Identify whether the user needs inventory, condition, evidence, recommendation, reference information, history or documents.
Keep facts, evidence, interpretation, recommendation and actions distinct.
Show uncertainty when evidence is missing or partial.
Use technical vocabulary only where it helps the user decide.
Prefer dense operational structures over decorative dashboards.
Make next actions owned and time-bound when action is part of the screen.
```

---

## Final rule

Use generic DS material with domain content.

Do not create a custom component for every electrical term.
