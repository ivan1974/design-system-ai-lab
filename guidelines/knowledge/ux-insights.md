# UX Insights

## Purpose

This file captures the main UX research insights that inform the
`design-system-ai-lab` guidelines.

It is not a complete research repository.

It is a lightweight, demo-oriented knowledge layer that translates research
findings into reusable design system knowledge.

The goal is to help designers, product teams and Figma Make understand why the
design system includes certain components, patterns, prompt constraints and
review criteria.

---

## How to use this file

Use this file when:

- writing or reviewing Figma Make prompts
- deciding whether a business pattern is needed
- updating component or pattern guidelines
- reviewing generated screens
- explaining why the design system is decision-oriented
- linking UX research to design system governance

Insights in this file should be translated into:

```txt
user needs
→ design implications
→ component and pattern rules
→ prompt constraints
→ acceptance criteria
```

Raw research should not be copied directly into components.

Research should be transformed into actionable rules.

For screens involving installed base, asset monitoring, connectivity,
lifecycle, asset intelligence recommendations or asset-based value proof,
combine this file with `knowledge/asset-intelligence.md`.

---

## Research sources

This knowledge layer is based on a lightweight synthesis of available
service experience research material.

The source material includes:

- customer interviews
- internal employee interviews
- CSM, CSH, CCC, Sales and service stakeholder feedback
- VoC research
- journey mapping studies
- customer success stories
- identified digital experience issues
- prior internal studies and consolidated insights

The research includes both external and internal perspectives.

This is important because service experience is not only a customer-facing issue.

It is also shaped by internal visibility, coordination, offer understanding,
operational ownership and data quality.

---

## Research limitations

The current knowledge layer should be treated as directional, not exhaustive.

Known limitations include:

- limited sample size
- uneven representation across geographies
- recruitment bias
- incomplete recordings or transcripts in some studies
- partial visibility into real workflows
- more customer interviews than partner interviews
- internal perspectives that may reflect local process variations
- research material collected across different moments and scopes

These limitations do not prevent the insights from being useful for a demo.

They mean that the design system should keep some rules open for further
validation.

Use `knowledge/open-questions.md` to track what still needs to be tested.

---

## Core synthesis

Across the research material, one recurring theme appears:

```txt
Users do not only need access to information.
They need help understanding what matters, what can be trusted and what to do next.
```

This applies to both customers and internal teams.

Customers need clarity, low effort, trusted information and confidence to act.

Internal teams need reliable context, clear ownership, reusable guidance and
coordination support.

The design system should therefore support:

- visible context
- decision-relevant signals
- clear prioritization
- evidence and trust
- guided next actions
- human validation on critical decisions

For asset-heavy service screens, this also means making clear:

- which asset, asset group, room, zone or site is represented
- whether visibility is complete or partial
- whether assets are connected, partially connected or non-connected
- whether information is raw Health data or interpreted Intelligence
- whether an outcome is expected or already proven

---

## Insight 1 — Users need confidence, not just data

Research learning:

Customers and internal teams often have access to some information, but still
lack confidence in what it means and what should happen next.

Operational environments are complex. Users need to understand status, risk,
priority and next steps without reconstructing the situation from multiple tools
or sources.

Observed problems:

- customers are unsure who to contact when issues arise
- customers do not always know what level of service they are guaranteed
- internal teams cannot always access the full customer or contract context
- service signals can be scattered across tools, portals, reports and people
- value can remain invisible when nothing visibly goes wrong
- recommendations may exist but not be customer-ready or action-ready

Design system implication:

Generated screens should not stop at displaying data.

They should support confidence by connecting:

```txt
context
→ signals
→ risks
→ recommendations
→ actions
```

Affected guidelines:

```txt
composition/decision-layout.md
composition/screen-patterns.md
review/acceptance-checklist.md
review/anti-patterns.md
principles/evidence-and-trust.md
```

Affected components and patterns:

```txt
MetricGrid
MetricCard
PriorityList
AlertCard
ActionList
ActionCard
CustomerStatusCard
RenewalRiskSummary
ValueProofCard
```

Design rule:

Every decision-support screen should help the user answer:

1. What is happening?
2. Why does it matter?
3. What can I trust?
4. What should I do next?

---

## Insight 2 — Customers and employees struggle with unclear offer context

Research learning:

Service offers can be difficult to understand, explain and activate.

The complexity is not only external. Internal teams also struggle with offer
understanding, commercial policy, entitlement, contract specificity and service
scope.

Observed problems:

- not all customers understand what the service includes
- internal teams do not always share the same understanding of the offer
- employees may not easily access the specifics of each customer contract
- recurring offers and offer differences are not always centralized
- responsibility for renewal or promotion can be unclear
- customers may confuse service levels or not know what they are entitled to

Design system implication:

Screens should make service context explicit and avoid scattering contract or
entitlement information across several unrelated cards.

Affected guidelines:

```txt
patterns/customer-status-card.md
patterns/renewal-risk-summary.md
composition/screen-patterns.md
review/acceptance-checklist.md
```

Affected components and patterns:

```txt
CustomerStatusCard
RenewalRiskSummary
StatusSummary
Badge
PageHeader
```

Design rule:

Use a dedicated business context pattern when the user needs to understand:

- customer status
- plan or contract level
- service scope
- owner or point of contact
- renewal timing
- entitlement or readiness status

Do not rebuild this context manually with disconnected generic cards when a
business pattern fits.

---

## Insight 3 — Poor data quality weakens trust and adoption

Research learning:

Data quality is a recurring barrier for both customers and Schneider teams.

Users can lose trust in the interface when data is incomplete, outdated,
inconsistent or visibly wrong.

Internal teams may need to clean data manually before presenting information to
customers or preparing reports.

Observed problems:

- inaccurate install base or BFS data may appear in customer interfaces
- installed base hierarchy may be incomplete, inconsistent or difficult to interpret
- embedded components may be confused with maintainable top-level assets
- non-connected assets may be mistaken for live-monitored assets if scope is unclear
- customers may see wrong site or asset information
- employees may not trust source data enough to present it directly
- customers may not find cases, contracts or installed base information through filters
- employees may need manual data cleanup to make reporting usable
- customers may prefer alternative channels when the portal does not feel reliable

Design system implication:

The design system must make trust visible.

It should not hide data uncertainty behind polished UI or AI-generated wording.

Affected guidelines:

```txt
principles/evidence-and-trust.md
knowledge/asset-intelligence.md
principles/ai-usage.md
review/acceptance-checklist.md
review/anti-patterns.md
composition/overview.md
```

Affected components and patterns:

```txt
Badge
MetricCard
AlertCard
ConnectivityCoverageCard
CustomerStatusCard
RenewalRiskSummary
ValueProofCard
```

Design rule:

When data may be incomplete, outdated or inferred, generated screens should show
visible trust cues such as:

- last update
- validation status
- source-system context
- asset scope
- connectivity status
- source scope
- Health versus Intelligence distinction
- review needed
- owner confirmation
- human validation required

Do not style uncertain information as if it were confirmed.

Do not present non-connected assets as live-monitored.

Do not present AI interpretation as source-system truth.

---

## Insight 4 — Users need minimum effort, especially when issues arise

Research learning:

Customers do not want to spend time navigating, configuring, maintaining or
troubleshooting a platform unless it clearly helps them solve a problem.

Many users access the platform infrequently because major issues are rare. When
an issue does arise, the user may feel lost if the platform does not provide a
clear path to resolution.

Observed problems:

- customers do not have time to explore the platform
- asset registration can require too much manual effort
- customers may be reluctant to maintain platform data themselves
- users may get sent in circles when looking for information
- customers may struggle to find the right resolution steps
- customers may prefer direct contact with Schneider employees instead of raising tickets
- internal teams may need to monitor processes manually to ensure assets are added correctly

Design system implication:

Generated screens should reduce effort by making priority, next steps and action
ownership visible.

The interface should not ask the user to search, infer or configure too much
before understanding what matters.

Affected guidelines:

```txt
composition/decision-layout.md
composition/screen-patterns.md
patterns/create-action-dialog.md
review/acceptance-checklist.md
principles/accessibility.md
principles/eco-design.md
```

Affected components and patterns:

```txt
PriorityList
AlertCard
ActionList
ActionCard
CreateActionDialog
ConnectivityCoverageCard
```

Design rule:

Do not generate screens that only expose information.

Generated screens should reduce effort by providing:

- clear hierarchy
- prioritized risks
- explicit recommendations
- owned actions
- focused creation flows
- limited information density

---

## Insight 5 — Users need to know what to do next

Research learning:

Across customer and internal perspectives, a recurring need is the ability to
move from a signal to a clear next action.

Users may understand that something is wrong but still be unsure about the right
owner, urgency, due date or follow-up path.

Observed problems:

- customers are unsure who to contact for support
- tickets may not be assigned to the right person immediately
- CSMs may spend effort identifying the right point of contact
- customers may not know whether they or Schneider have the next action
- recommendations may not be reviewed or converted into action
- follow-up tasks may be tracked in tools that other assignees cannot access

Design system implication:

Risks, alerts and recommendations should be connected to concrete actions.

Affected guidelines:

```txt
decision/alert-card.md
decision/action-card.md
decision/priority-list.md
decision/action-list.md
patterns/create-action-dialog.md
review/acceptance-checklist.md
review/anti-patterns.md
```

Affected components and patterns:

```txt
AlertCard
PriorityList
ActionCard
ActionList
CreateActionDialog
```

Design rule:

Every alert should include a recommendation.

Every action should include:

- owner
- due date
- priority

Actions should follow from visible context, risks or recommendations.

---

## Insight 6 — Service experience depends on internal coordination

Research learning:

Customer experience is strongly affected by internal coordination between Sales,
CSM, CSH, CCC, Field Services, technicians and other operational roles.

Many customer-facing issues are symptoms of internal fragmentation.

Observed problems:

- roles and responsibilities can be unclear
- ticket escalation may involve multiple intermediaries
- teams may lack access to the same customer case history
- employees may create local workarounds in spreadsheets or tools
- assigned tasks may not be visible to the actual assignee
- customers may face multiple Schneider representatives and have to map who is who
- changes in points of contact may not be visible to the customer

Design system implication:

Generated screens should make ownership, responsibility and coordination visible.

A screen should not simply display issues. It should help clarify who owns the
next step and where coordination is needed.

Affected guidelines:

```txt
patterns/customer-status-card.md
patterns/create-action-dialog.md
decision/action-card.md
decision/action-list.md
composition/decision-layout.md
review/acceptance-checklist.md
```

Affected components and patterns:

```txt
CustomerStatusCard
ActionCard
ActionList
CreateActionDialog
StatusSummary
```

Design rule:

Whenever a generated screen includes actions or risks, it should make ownership
clear.

Do not generate vague actions such as:

```txt
Follow up
Check issue
Review later
```

Prefer action-oriented wording such as:

```txt
Assign owner for overdue mitigation action
Plan connectivity review with customer and support team
Prepare customer-ready value summary before renewal meeting
```

---

## Insight 7 — Customers need a system view, not fragmented visibility

Research learning:

Customers operate mixed environments with multiple vendors, multiple locations
and their own internal maintenance systems.

A Schneider-only view may be useful but can feel incomplete if it only covers a
fraction of the customer’s operational reality.

Observed problems:

- customers have assets from multiple vendors
- customers may already use internal maintenance management systems
- Schneider assets may represent only part of the install base
- some assets may be connected while others are partially connected or non-connected
- asset data may come from live telemetry, service reports, manual inventory or lifecycle databases
- customers may need to know whether the view covers physical maintainable assets or embedded components
- customers may want a unified view across assets, sites and systems
- disconnected tools increase effort and reduce platform adoption
- customers may not see the same data across different Schneider interfaces

Design system implication:

The design system should support contextual views that explain scope and coverage
instead of implying full visibility when the system only has partial visibility.

Affected guidelines:

```txt
patterns/connectivity-coverage-card.md
patterns/customer-status-card.md
composition/screen-patterns.md
principles/evidence-and-trust.md
knowledge/asset-intelligence.md
```

Affected components and patterns:

```txt
ConnectivityCoverageCard
CustomerStatusCard
MetricGrid
MetricCard
Badge
```

Design rule:

When visibility is partial, generated screens should show:

- scope covered
- asset hierarchy level represented
- connected, partially connected and non-connected assets
- source scope
- coverage rate
- connected assets
- disconnected assets
- affected sites or systems
- last update
- limits of visibility when relevant

Do not imply complete system visibility when the evidence only supports partial
coverage.

Do not show embedded meters, relays, sensors or controllers as standalone
top-level assets unless the screen purpose requires component-level
investigation.

---

## Insight 8 — Client specificities must be visible without breaking scalability

Research learning:

Customers have specific needs depending on industry, site structure, security
constraints, compliance expectations, existing tools and operational practices.

At the same time, Schneider needs scalable patterns and common ground.

Observed problems:

- one generic offer sentence does not communicate value to all customers
- some customers are reluctant to move data to the cloud
- some customers require internal hosting or strict firewall constraints
- retail or distributed customers may need site-level expertise across many locations
- some contract designs include customized maintenance or replacement cycles
- customers may expect customization effort to be part of the service contract

Design system implication:

Patterns should support customer-specific context without becoming bespoke,
unstructured interfaces.

Affected guidelines:

```txt
patterns/customer-status-card.md
patterns/value-proof-card.md
patterns/renewal-risk-summary.md
composition/screen-patterns.md
principles/evidence-and-trust.md
```

Affected components and patterns:

```txt
CustomerStatusCard
RenewalRiskSummary
ValueProofCard
Badge
AlertCard
ActionCard
```

Design rule:

Generated screens should allow customer specificity to appear as structured
context:

- industry
- site type
- compliance constraint
- hosting or security constraint
- service scope
- contract-specific commitment
- customer objective

Do not turn specificity into uncontrolled layout customization.

---

## Insight 9 — Adoption depends on basic usefulness before advanced features

Research learning:

The core service experience depends on basic features working well before more
advanced features can be adopted.

Customers and employees need reliable access to contracts, alerts, assets and
reporting before expecting advanced digital autonomy or AI assistance.

Observed problems:

- customers need access to contracts as a basic service feature
- customers need alert setup and resolution support
- customers need asset monitoring across locations
- customers need reporting that they can trust
- employees need reliable data before promoting adoption or value
- lack of clean data can block autonomy and reporting

Design system implication:

The design system should prioritize clear structured information before AI
interpretation.

This supports the principle:

```txt
BI-first, AI-assisted
```

Affected guidelines:

```txt
principles/ai-usage.md
principles/evidence-and-trust.md
prompts/template.md
composition/screen-patterns.md
review/acceptance-checklist.md
```

Affected components and patterns:

```txt
CustomerStatusCard
RenewalRiskSummary
ConnectivityCoverageCard
MetricGrid
MetricCard
ValueProofCard
```

Design rule:

Do not use GenAI to retrieve basic facts such as:

- customer name
- contract status
- renewal date
- owner
- connected asset count
- open alert count
- standard KPIs
- asset hierarchy
- connectivity status
- telemetry values
- source scope
- lifecycle status

Use GenAI only for:

- synthesis
- explanation
- prioritization
- recommendation
- drafting
- reformulation

For asset-heavy screens, source systems should provide raw Health data such as
telemetry, connectivity, lifecycle and asset hierarchy. GenAI may help explain
what those facts may mean, draft recommendations or prepare grounded action
plans.

---

## Insight 10 — Value must be made visible over time

Research learning:

Service value can be difficult to perceive when the service prevents issues,
reduces risk or supports readiness without producing a visible event.

This is especially important for renewal, QBR preparation and customer success
work.

Observed problems:

- customers may not review recommendations
- internal teams may lack KPIs to sell or re-sell the service
- renewal discussions may start months before contract end
- teams may need to reconstruct value from multiple sources
- recommendations and closed actions may not be translated into customer-ready proof
- expected outcomes may be confused with proven value if evidence status is unclear
- technical asset outcomes may need translation before becoming customer-ready value proof
- the benefit of monitoring may be invisible when systems run smoothly

Design system implication:

The design system should include patterns that transform service activity into
customer-ready value proof.

Affected guidelines:

```txt
patterns/value-proof-card.md
knowledge/asset-intelligence.md
patterns/renewal-risk-summary.md
composition/screen-patterns.md
prompts/renewal-risk-review.md
review/acceptance-checklist.md
```

Affected components and patterns:

```txt
ValueProofCard
RenewalRiskSummary
MetricGrid
MetricCard
PriorityList
AlertCard
ActionList
ActionCard
```

Design rule:

Value proof should be grounded in:

- completed actions
- resolved risks
- recommendations reviewed
- recommendations completed
- improved monitoring coverage
- validated asset intervention outcomes
- completed lifecycle or modernization actions
- measurable health improvement when available
- customer objectives
- measurable outcomes when available

Do not invent value proof.

Do not present expected outcomes as proven value.

Do not present internal operational evidence as customer-ready proof without
validation.

If value proof is incomplete, show it as incomplete and create an action to
prepare it.

## Insight 12 — The design system must support both customer and internal journeys

### Research learning

The research includes customers and internal teams.

This means the design system should not be limited to customer-facing screens.

It should also support employee-facing workflows such as monitoring, triage,
renewal preparation, value proof preparation, support follow-up and service
coordination.

### Observed problems

- internal roles need different levels of detail
- Sales, CSM, CSH, CCC and service teams may need different views of the same situation
- customers and employees may experience the same issue from different sides
- customer effort is often caused by internal coordination gaps
- internal effort is often caused by fragmented data, unclear ownership and manual reporting

### Design system implication

The design system should provide reusable patterns that support shared context
across roles while allowing role-specific goals.

### Affected guidelines

```txt
composition/screen-patterns.md
prompts/template.md
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
review/acceptance-checklist.md
```

### Affected components and patterns

```txt
PageHeader
CustomerStatusCard
RenewalRiskSummary
ConnectivityCoverageCard
ValueProofCard
PriorityList
ActionList
CreateActionDialog
```

### Design rule

Every generated screen should specify:

- user role
- user goal
- screen pattern
- required business context
- decision flow
- next action

Do not generate role-neutral screens unless the prompt explicitly asks for them.

---

## Insight 13 — Asset intelligence requires scope, source and interpretation discipline

### Asset intelligence research learning

Asset-heavy service experiences are affected by the quality and completeness of
installed base information, connectivity coverage, source-system reliability and
the ability to translate technical signals into action.

Users need asset intelligence to explain what is observed, what it may mean,
what should be done and what value can be proven over time.

### Asset intelligence observed problems

- installed base views may mix physical assets, systems, cabinets and embedded components
- some assets are connected, partially connected or non-connected
- brownfield and multi-vendor environments create partial visibility
- raw telemetry, service reports, lifecycle data and manual inventory do not have the same evidence strength
- recommendations may be difficult to trust if the asset match, source scope or proof gap is not visible
- expected outcomes may be presented too confidently before the action is completed and evidenced

### Asset intelligence design system implication

Asset-heavy screens should distinguish what is observed, what is interpreted,
what is recommended and what is proven.

### Asset intelligence affected guidelines

```txt
knowledge/asset-intelligence.md
principles/evidence-and-trust.md
principles/ai-usage.md
principles/eco-design.md
principles/accessibility.md
patterns/connectivity-coverage-card.md
patterns/value-proof-card.md
composition/decision-layout.md
review/acceptance-checklist.md
review/anti-patterns.md
```

### Asset intelligence affected components and patterns

```txt
ConnectivityCoverageCard
CustomerStatusCard
ValueProofCard
RenewalRiskSummary
MetricCard
AlertCard
ActionCard
Badge
```

### Asset intelligence design rule

Asset intelligence screens should follow this flow:

```txt
asset context
→ connectivity and source scope
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcome or proven value status
```

Do not hide asset scope, connectivity, source strength, Health versus
Intelligence distinction or proof status when they affect trust.

---

## Insight 11 — Internal users need shared context, not more isolated tools

Research learning:

Internal employees sometimes create workarounds because the shared systems do not
make coordination, ownership or history visible enough.

A new interface should not become another isolated tool.

Observed problems:

- employees may create local logs in spreadsheets or tools
- information naming and organization can vary across shared drives
- assigned work may not reach the person responsible if they are not in the tool
- case history may be unavailable unless the customer contacts a specific person
- employees may not see what the customer sees in the portal

Design system implication:

Generated screens should avoid creating local truths.

They should clarify source context, ownership and action flow.

Affected guidelines:

```txt
principles/evidence-and-trust.md
principles/ai-usage.md
composition/overview.md
review/anti-patterns.md
```

Affected components and patterns:

```txt
CustomerStatusCard
StatusSummary
ActionList
ActionCard
CreateActionDialog
Badge
```

Design rule:

Generated screens should make clear:

- who owns the next step
- where the data comes from when relevant
- whether the status is confirmed or needs review
- whether the user can act directly or must validate first

Do not create screens that look authoritative while relying on unclear or local
sources.

---

## Research-backed design system principles

The current research supports these design system principles:

1. Start from the user decision, not from the available data.
2. Show visible facts before interpretation.
3. Use business patterns to make recurring service contexts explicit.
4. Use metrics only when they support a decision.
5. Convert risks into recommendations.
6. Convert recommendations into owned actions.
7. Make data quality, freshness, source scope, asset scope and uncertainty visible when relevant.
8. Keep human validation visible for critical decisions.
9. Use BI for structured facts and GenAI for synthesis or explanation.
10. Separate raw Health data from Intelligence interpretation in asset-heavy screens.
11. Make value proof customer-ready instead of assuming value is obvious.
12. Reduce effort by prioritizing, grouping and guiding.
13. Support internal coordination because it shapes customer experience.

---

## Mapping insights to design system areas

| Insight | Main DS response |
| --- | --- |
| Users need confidence, not just data | Decision layouts, evidence flow, action-oriented screens |
| Offer context is unclear | `CustomerStatusCard`, `RenewalRiskSummary`, status badges |
| Data quality weakens trust | Evidence and trust rules, freshness and validation cues |
| Users need minimum effort | Prioritized layouts, limited density, guided actions |
| Users need to know what to do next | `AlertCard`, `ActionCard`, `PriorityList`, `ActionList` |
| Service depends on coordination | Ownership fields, action creation, role-specific prompts |
| Customers need a system view | `ConnectivityCoverageCard`, scope and coverage visibility |
| Specificities matter | Structured context and proof patterns |
| Basic usefulness comes before AI | BI-first, AI-assisted rules |
| Value must be visible over time | `ValueProofCard`, renewal and QBR patterns |
| Internal users need shared context | Source, ownership and validation visibility |
| DS must support customer and internal journeys | Role-specific prompts and screen patterns |
| Asset intelligence requires scope, source and interpretation discipline | `knowledge/asset-intelligence.md`, Health/Intelligence separation, asset scope and proof status |

---

## Evidence status

This file is based on consolidated research material and should be treated as:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Some insights are strongly supported across multiple sources.

Some are directional and should be validated with additional user testing.

Use `knowledge/open-questions.md` to track what remains uncertain.

Use `knowledge/asset-intelligence.md` to translate asset-heavy domain knowledge
into screen rules, review criteria and AI usage constraints.

---

## Final principle

The design system should not only encode visual consistency.

It should encode what research has taught us about how users understand service
situations, trust information, reduce effort, decide what to do next and turn
technical service signals into evidence-aware action and value proof.
