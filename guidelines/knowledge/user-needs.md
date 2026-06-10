# User Needs

## Purpose

This file translates UX research insights into reusable user needs for the
`design-system-ai-lab` guidelines.

It is a lightweight, demo-oriented knowledge document.

It should help designers, product teams and Figma Make understand what users need
from generated service experience screens.

The goal is not to list every possible requirement.

The goal is to define recurring needs that should influence:

- prompts
- components
- decision components
- business patterns
- screen composition
- review criteria

---

## How to use this file

Use this file when:

- writing a new Figma Make prompt
- choosing a screen pattern
- deciding whether a business pattern is needed
- reviewing a generated screen
- updating component guidelines
- checking whether a screen supports a real user decision

Each user need should be translated into:

```txt
design implication
→ affected components or patterns
→ prompt constraint
→ review criterion
```

For screens involving installed base, asset monitoring, connectivity,
lifecycle, asset intelligence recommendations or asset-based value proof,
combine these user needs with `knowledge/asset-intelligence.md`.

---

## User groups covered

The research material includes both customer and internal perspectives.

This file therefore covers needs from:

- customers
- maintenance teams
- facility managers
- energy managers
- electrical engineers
- Customer Success Managers
- Connected Services Hub teams
- Contact Center teams
- Sales teams
- Field Services teams
- service managers
- product and support teams

The design system should support both external and internal journeys.

Customer experience and employee experience are connected.

A customer-facing issue is often caused or amplified by internal fragmentation,
unclear ownership, poor data quality or weak handoffs.

---

## Need 1 — Understand the current situation quickly

User need:

```txt
As a user, I need to quickly understand the current customer, service or renewal situation so that I can orient myself without reconstructing context from multiple tools.
```

Who it concerns:

- customers
- CSMs
- CSH teams
- CCC teams
- Sales teams
- service managers

Why it matters:

Users often need to reconstruct context from several systems, reports, portals or
people.

When context is fragmented, users spend effort before they can even assess the
situation.

Design implication:

Generated screens should start with clear orientation and visible business
context.

Affected components and patterns:

```txt
PageHeader
CustomerStatusCard
RenewalRiskSummary
ConnectivityCoverageCard
StatusSummary
Badge
```

Prompt constraint:

```txt
Start with a specific PageHeader and a business context pattern before metrics, risks or actions.
```

Review criterion:

```txt
Reject screens where the user cannot understand the current situation within the first visible sections.
```

---

## Need 2 — Know what is included, active or guaranteed

User need:

```txt
As a customer or internal user, I need to understand what is included in the service, what is active and what level of support or coverage applies.
```

Who it concerns:

- customers
- CSMs
- Sales teams
- CCC teams
- CSH teams
- service managers

Why it matters:

Offer, contract and service scope can be difficult to understand.

Customers may not know what they are entitled to.

Internal teams may not share the same understanding of the customer-specific
contract, plan or service commitment.

Design implication:

Service, contract and plan context should be visible and structured.

It should not be scattered across multiple unrelated cards.

Affected components and patterns:

```txt
CustomerStatusCard
RenewalRiskSummary
StatusSummary
Badge
PageHeader
```

Prompt constraint:

```txt
Show plan, contract, owner, coverage and renewal or service status when they are relevant to the decision.
```

Review criterion:

```txt
Reject screens that require the user to infer the service scope or entitlement from scattered information.
```

---

## Need 3 — Trust the information being shown

User need:

```txt
As a user, I need to know whether the information is reliable, fresh, confirmed or still requiring review.
```

Who it concerns:

- customers
- CSMs
- CSH teams
- CCC teams
- Field Services teams
- Sales teams
- service managers

Why it matters:

Data quality issues can weaken trust and adoption.

Users may face incomplete install base data, outdated monitoring information,
unclear source data, inconsistent customer records, partial asset visibility or
mixed source strength.

Design implication:

Generated screens should make trust cues visible when they affect the decision.

For asset-heavy screens, trust cues include asset scope, connectivity status,
source scope, freshness and whether the content is raw Health data or
interpreted Intelligence.

Affected components and patterns:

```txt
Badge
MetricCard
AlertCard
ConnectivityCoverageCard
CustomerStatusCard
RenewalRiskSummary
ValueProofCard
StatusSummary
```

Prompt constraint:

```txt
Show freshness, validation status, source-system context, asset scope, connectivity status or source scope when data may be incomplete, outdated, inferred or partial.
```

Review criterion:

```txt
Reject screens that style uncertain information as confirmed, hide trust-sensitive status, present non-connected assets as live-monitored or present AI interpretation as source-system truth.
```

---

## Need 4 — See what matters most

User need:

```txt
As a user, I need the interface to help me identify the most important signals, risks or blockers without scanning everything manually.
```

Who it concerns:

- customers
- CSMs
- CSH teams
- CCC teams
- Field Services teams
- service managers

Why it matters:

Users do not need every data point at once.

They need a prioritized view of what requires attention.

Design implication:

Screens should prioritize important signals and avoid large undifferentiated data
dumps.

Affected components and patterns:

```txt
MetricGrid
MetricCard
PriorityList
AlertCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
```

Prompt constraint:

```txt
Use a limited set of decision-relevant metrics and prioritize alerts by severity or business impact.
```

Review criterion:

```txt
Reject screens with too many metrics, equal-priority cards or risks that are not prioritized.
```

---

## Need 5 — Understand why a signal matters

User need:

```txt
As a user, I need to understand why a metric, alert or risk matters for the customer, service or renewal situation.
```

Who it concerns:

- customers
- CSMs
- Sales teams
- CSH teams
- service managers

Why it matters:

A signal without interpretation can create effort instead of clarity.

Users may see that something changed, but not understand the impact.

Design implication:

Metrics and alerts should include useful helper text, descriptions and
recommendations.

For asset-heavy screens, interpretation should make clear whether the signal is
based on Health data, lifecycle information, service history or AI-assisted
Intelligence.

Affected components and patterns:

```txt
MetricCard
MetricGrid
AlertCard
PriorityList
ValueProofCard
RenewalRiskSummary
```

Prompt constraint:

```txt
Metrics must include helper text when interpretation is needed. Alerts must explain the impact and include a recommendation.
```

Review criterion:

```txt
Reject metrics without useful interpretation and alerts that do not explain why the issue matters.
```

---

## Need 6 — Know what to do next

User need:

```txt
As a user, I need to know the recommended next step so that I can move from awareness to action.
```

Who it concerns:

- customers
- CSMs
- CSH teams
- CCC teams
- Sales teams
- Field Services teams
- service managers

Why it matters:

Users may understand that an issue exists but still be unsure about the next
step, owner, due date or escalation path.

Design implication:

Alerts and recommendations should connect to concrete actions.

Asset-related recommendations should connect to owned actions and include
enough site, zone, room, asset group or asset context for follow-up.

Affected components and patterns:

```txt
AlertCard
PriorityList
ActionCard
ActionList
CreateActionDialog
```

Prompt constraint:

```txt
Every alert must include a recommendation. Every action must include owner, due date and priority. Asset-related actions should include the relevant asset scope when needed.
```

Review criterion:

```txt
Reject screens with alerts but no recommendations, or actions without owner, due date or priority.
```

---

## Need 7 — Know who owns the next step

User need:

```txt
As a user, I need to know who owns the next step so that responsibility does not remain implicit or fragmented.
```

Who it concerns:

- customers
- CSMs
- CSH teams
- CCC teams
- Sales teams
- Field Services teams
- service managers

Why it matters:

Service journeys involve multiple roles.

When ownership is unclear, follow-up depends on informal coordination and the
customer may experience delays or repeated explanations.

Design implication:

Actions, status summaries and customer context should make ownership visible.

Affected components and patterns:

```txt
CustomerStatusCard
ActionCard
ActionList
CreateActionDialog
StatusSummary
```

Prompt constraint:

```txt
Actions must include a clear owner. If ownership is unknown, create an action to assign ownership instead of hiding the uncertainty.
```

Review criterion:

```txt
Reject vague actions such as Follow up, Check issue or Review later when no owner is visible.
```

---

## Need 8 — Reduce effort when using the interface

User need:

```txt
As a user, I need the interface to reduce effort instead of asking me to navigate, search, configure or interpret too much manually.
```

Who it concerns:

- customers
- maintenance teams
- CSMs
- CSH teams
- CCC teams
- service managers

Why it matters:

Customers may access service platforms infrequently.

Internal teams may already manage multiple tools and manual workarounds.

A generated screen should reduce effort, not add another place to inspect.

Design implication:

Screens should be focused, structured and task-oriented.

Affected components and patterns:

```txt
PageHeader
MetricGrid
PriorityList
ActionList
CreateActionDialog
CustomerStatusCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
```

Prompt constraint:

```txt
Keep the screen focused. Limit metrics, alerts and actions to what supports the current decision.
```

Review criterion:

```txt
Reject over-generated screens, raw data dumps, duplicated context or generic dashboards.
```

---

## Need 9 — Understand coverage and visibility limits

User need:

```txt
As a user, I need to know what is covered, what is not covered, whether visibility is partial and which assets are actually represented.
```

Who it concerns:

- customers
- maintenance teams
- CSMs
- CSH teams
- Field Services teams
- service managers

Why it matters:

Customers may operate mixed environments with multiple vendors, sites and tools.

CompanyName visibility may cover only part of the operational reality.

Assets may be connected, partially connected or non-connected.

Asset information may come from live telemetry, DCIM or BMS integrations,
service reports, manual inventory, uploaded documents or lifecycle databases.

Design implication:

The interface should show scope, asset hierarchy level, connectivity status and
coverage instead of implying complete system visibility.

Affected components and patterns:

```txt
ConnectivityCoverageCard
CustomerStatusCard
MetricGrid
MetricCard
Badge
AlertCard
StatusSummary
```

Prompt constraint:

```txt
When monitoring coverage matters, show coverage rate, connected assets, partially connected assets when relevant, non-connected assets, affected scope, source scope and last update.
```

Review criterion:

```txt
Reject screens that imply full visibility when the provided context only supports partial coverage, or that present non-connected assets as live-monitored.
```

---

## Need 10 — See customer-specific context without losing structure

User need:

```txt
As a user, I need customer-specific constraints and objectives to be visible without making every screen bespoke or inconsistent.
```

Who it concerns:

- customers
- CSMs
- Sales teams
- service managers
- product teams

Why it matters:

Customers differ by industry, site structure, security constraints, compliance
requirements, internal tooling and service expectations.

Design implication:

Customer specificity should appear as structured context, not uncontrolled
layout customization.

Affected components and patterns:

```txt
CustomerStatusCard
RenewalRiskSummary
ValueProofCard
Badge
AlertCard
ActionCard
```

Prompt constraint:

```txt
Show relevant customer-specific context such as industry, site type, security constraint, service scope or customer objective when it affects the decision.
```

Review criterion:

```txt
Reject screens that ignore important customer-specific context or turn specificity into unstructured custom UI.
```

---

## Need 11 — See value proof over time

User need:

```txt
As a customer-facing or renewal user, I need to see what value has been delivered over time and what proof is still missing.
```

Who it concerns:

- customers
- CSMs
- Sales teams
- Renewal Managers
- service managers

Why it matters:

Service value is often invisible when risks are avoided, issues are prevented or
recommendations are not translated into customer-ready proof.

Design implication:

The design system should help turn service activity into grounded value proof.

For asset-heavy screens, expected outcomes, technical outcomes, internal proof
and customer-ready proof should remain distinguishable.

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

Prompt constraint:

```txt
Value proof points must be grounded in completed actions, resolved risks, recommendations, validated asset intervention outcomes or measurable outcomes. Do not invent value proof. Do not present expected outcomes as proven value.
```

Review criterion:

```txt
Reject value proof sections with unsupported claims, fake sources, invented proof points or expected outcomes presented as proven value.
```

---

## Need 12 — Prepare for renewal or customer discussions

User need:

```txt
As a CSM, Sales or Renewal Manager, I need to prepare customer-ready summaries, proof points and mitigation actions before renewal or review discussions.
```

Who it concerns:

- CSMs
- Sales teams
- Renewal Managers
- service managers

Why it matters:

Renewal and customer review preparation can require manual reconstruction from
multiple sources.

The user needs a clear view of risk, value proof gaps and next mitigation steps.

Design implication:

Renewal and review screens should combine context, proof, risks and actions.

Affected components and patterns:

```txt
RenewalRiskSummary
ValueProofCard
MetricGrid
PriorityList
ActionList
CreateActionDialog
```

Prompt constraint:

```txt
Show renewal context before proof gaps, risks and mitigation actions.
```

Review criterion:

```txt
Reject renewal screens that only show account data without surfacing proof gaps, risk or mitigation actions.
```

---

## Need 13 — Avoid AI when structured data is enough

User need:

```txt
As a user, I need basic facts to be visible directly instead of having to ask an AI assistant for information that should come from a source system.
```

Who it concerns:

- customers
- CSMs
- CSH teams
- CCC teams
- Sales teams
- service managers
- product teams

Why it matters:

Using GenAI for basic retrieval increases cost, reduces traceability and makes
quality dependent on prompt phrasing.

Design implication:

Screens should be BI-first and AI-assisted only when AI adds clear value.

Affected components and patterns:

```txt
CustomerStatusCard
RenewalRiskSummary
ConnectivityCoverageCard
MetricGrid
MetricCard
ValueProofCard
```

Prompt constraint:

```txt
Do not use GenAI to retrieve customer name, contract, renewal date, owner, status, counts, lists, standard KPIs, asset hierarchy, connectivity status, telemetry values, source scope or lifecycle status.
```

Review criterion:

```txt
Reject prompt-first screens that use GenAI for basic structured retrieval, asset facts, telemetry, connectivity status, source scope or lifecycle status.
```

---

## Need 14 — Use AI for synthesis, explanation and drafting

User need:

```txt
As a user, I need AI assistance when it helps me synthesize complex context, explain risk, prioritize actions or draft communication.
```

Who it concerns:

- CSMs
- CSH teams
- CCC teams
- Sales teams
- service managers
- customers when customer-facing AI is explicitly designed

Why it matters:

AI can create value when it reduces cognitive effort and helps users move from
signals to action.

It should not be used as a default interface for every information need.

Design implication:

AI should appear as guided assistance on top of visible facts.

For asset-heavy screens, source systems should provide raw Health data and GenAI
may assist with Intelligence interpretation, recommendation wording, proof gap
explanation or action-plan drafting.

Affected components and patterns:

```txt
AlertCard
ActionCard
ValueProofCard
RenewalRiskSummary
CreateActionDialog
```

Prompt constraint:

```txt
Use AI only for synthesis, explanation, prioritization, recommendation, drafting, reformulation, proof gap explanation or grounded action-plan drafting.
```

Review criterion:

```txt
Reject AI recommendations that are unsupported by visible facts or that hide the evidence used.
```

---

## Need 15 — Keep human accountability visible

User need:

```txt
As a user, I need critical customer, contract, service, safety or compliance decisions to remain human-validated.
```

Who it concerns:

- customers
- CSMs
- CCC teams
- CSH teams
- Sales teams
- Field Services teams
- service managers
- compliance or operational stakeholders

Why it matters:

AI and automation can assist, but they should not silently take responsibility
for critical decisions.

Design implication:

Critical actions should show human review, validation or ownership.

Affected components and patterns:

```txt
AlertCard
ActionCard
ActionList
CreateActionDialog
Badge
StatusSummary
```

Prompt constraint:

```txt
Keep human validation visible for critical customer, contract, service, safety, compliance, renewal, value proof, asset intelligence or modernization decisions.
```

Review criterion:

```txt
Reject screens that imply AI has autonomously approved entitlement, escalation, renewal action, asset intelligence recommendation, modernization action, value proof or critical service decisions.
```

---

## Need 16 — Support internal coordination across roles

User need:

```txt
As an internal user, I need shared context and visible handoffs so that CSM, CSH, CCC, Sales and Field Services can coordinate without losing information.
```

Who it concerns:

- CSMs
- CSH teams
- CCC teams
- Sales teams
- Field Services teams
- service managers

Why it matters:

Customer experience is often shaped by internal coordination.

Weak handoffs, unclear roles or fragmented tools increase customer effort and
employee effort.

Design implication:

Screens should show ownership, next action, handoff context and coordination
needs.

Affected components and patterns:

```txt
CustomerStatusCard
StatusSummary
ActionCard
ActionList
CreateActionDialog
AlertCard
```

Prompt constraint:

```txt
When a risk or action requires coordination, show owner, scope and next coordination step.
```

Review criterion:

```txt
Reject screens that show internal risks but do not clarify responsibility or follow-through.
```

---

## Need 17 — Support role-specific workflows

User need:

```txt
As a user in a specific role, I need the screen to match my task, vocabulary and decision moment.
```

Who it concerns:

- customers
- CSMs
- CSH teams
- CCC teams
- Sales teams
- Field Services teams
- service managers
- product teams

Why it matters:

The same customer situation may need different views depending on whether the
user is monitoring, selling, renewing, supporting, escalating or preparing a
review.

Design implication:

Prompts and screens should specify the user role and decision context.

Affected components and patterns:

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

Prompt constraint:

```txt
Every generated screen should specify user role, user goal, screen pattern, required context and next action.
```

Review criterion:

```txt
Reject role-neutral screens when the prompt implies a specific role or workflow.
```

---

## Need 18 — Avoid repeated explanations and lost context

User need:

```txt
As a customer or internal user, I need context to follow the case, action or request so that I do not have to repeat myself or reconstruct history.
```

Who it concerns:

- customers
- CCC teams
- CSMs
- CSH teams
- Field Services teams
- Sales teams

Why it matters:

Repeated explanations and lost context increase customer effort and employee
rework.

They also reduce confidence in service continuity.

Design implication:

Generated screens should preserve relevant context, ownership and action history
when it supports the decision.

Affected components and patterns:

```txt
CustomerStatusCard
StatusSummary
AlertCard
ActionCard
ActionList
CreateActionDialog
```

Prompt constraint:

```txt
When a screen involves follow-up, support or handoff, include enough context to avoid repeated explanation without overloading the screen.
```

Review criterion:

```txt
Reject screens that create actions or alerts without enough context for another role to understand the next step.
```

---

## Need 19 — Understand unresolved questions and gaps

User need:

```txt
As a user, I need to see what is unknown, incomplete or still requiring validation so that I do not mistake gaps for confirmed facts.
```

Who it concerns:

- customers
- CSMs
- CSH teams
- CCC teams
- Sales teams
- Field Services teams
- service managers

Why it matters:

Incomplete data, uncertain ownership or missing proof can affect decisions.

Hiding these gaps creates false confidence.

Design implication:

Screens should expose gaps as reviewable states and convert them into actions
when needed.

Affected components and patterns:

```txt
Badge
AlertCard
ActionCard
ActionList
ValueProofCard
ConnectivityCoverageCard
RenewalRiskSummary
```

Prompt constraint:

```txt
When data, proof or ownership is incomplete, show the gap and create a follow-up action when appropriate.
```

Review criterion:

```txt
Reject screens that hide missing proof, outdated data or unassigned ownership.
```

---

## Need 20 — Move from service activity to customer-ready value

User need:

```txt
As a customer-facing user, I need service activity to be translated into clear customer-ready value, not just internal operational records.
```

Who it concerns:

- CSMs
- Sales teams
- Renewal Managers
- service managers
- customers

Why it matters:

Closed actions, recommendations and monitoring improvements do not automatically
communicate value to customers.

They need to be framed around customer objectives and service outcomes.

Design implication:

Value proof patterns should connect service activity to customer objectives,
outcomes and proof gaps.

Affected components and patterns:

```txt
ValueProofCard
RenewalRiskSummary
MetricGrid
AlertCard
ActionCard
ActionList
```

Prompt constraint:

```txt
Frame value proof around customer objectives, completed actions, resolved risks, recommendations and measurable outcomes when available.
```

Review criterion:

```txt
Reject value proof that only lists activity without explaining why it matters to the customer.
```

---

## Need 21 — Understand asset intelligence without false confidence

User need:

```txt
As a user, I need to understand what asset intelligence is based on so that I can trust recommendations without confusing observed facts, AI interpretation, expected outcomes and proven value.
```

Who it concerns:

- customers
- maintenance teams
- CSMs
- CSH teams
- Field Services teams
- Sales teams
- Renewal Managers
- service managers

Why it matters:

Asset-heavy service screens may combine installed base data, connectivity
coverage, telemetry, lifecycle status, service history, manual inventory and AI
interpretation.

If these layers are not separated, users may trust an interpretation too much,
mistake partial visibility for complete visibility or treat expected outcomes as
proven value.

Design implication:

Asset intelligence screens should separate asset context, source scope, raw
Health facts, Intelligence interpretation, recommendations, actions and proof
status.

Affected components and patterns:

```txt
CustomerStatusCard
ConnectivityCoverageCard
ValueProofCard
RenewalRiskSummary
MetricGrid
MetricCard
AlertCard
PriorityList
ActionList
ActionCard
StatusSummary
Badge
```

Prompt constraint:

```txt
For asset-heavy screens, show asset scope, connectivity status, source scope and raw Health facts before Intelligence interpretation. Do not present non-connected assets as live-monitored. Do not present expected outcomes as proven value.
```

Review criterion:

```txt
Reject asset intelligence screens that hide asset scope, mix Health data and Intelligence interpretation, use GenAI to invent asset facts or present expected outcomes as proven value.
```

---

## User need clusters

The needs above can be grouped into five recurring clusters.

| Cluster | User needs |
| --- | --- |
| Understand | Need 1, Need 2, Need 17 |
| Trust | Need 3, Need 9, Need 15, Need 19, Need 21 |
| Prioritize | Need 4, Need 5, Need 12, Need 21 |
| Act | Need 6, Need 7, Need 16, Need 18 |
| Prove value | Need 10, Need 11, Need 20 |

AI-related needs support all clusters, but should follow the BI-first,
AI-assisted rule.

---

## Mapping needs to screen patterns

| Screen pattern | Primary needs supported |
| --- | --- |
| Customer monitoring | Need 1, Need 3, Need 4, Need 5, Need 6, Need 7, Need 9 |
| Renewal risk review | Need 1, Need 4, Need 6, Need 11, Need 12, Need 19, Need 20 |
| Connectivity review | Need 3, Need 4, Need 6, Need 7, Need 9, Need 19 |
| Asset intelligence recommendation | Need 3, Need 5, Need 6, Need 9, Need 14, Need 15, Need 19, Need 21 |
| Service action plan | Need 6, Need 7, Need 8, Need 16, Need 18 |
| Value proof summary | Need 5, Need 10, Need 11, Need 19, Need 20 |
| QBR preparation | Need 10, Need 11, Need 12, Need 14, Need 20 |

---

## Mapping needs to design system areas

| User need area | Main DS response |
| --- | --- |
| Understand context | `PageHeader`, `CustomerStatusCard`, `RenewalRiskSummary`, `StatusSummary` |
| Trust information | `Badge`, `ConnectivityCoverageCard`, evidence and trust rules |
| Trust asset intelligence | `knowledge/asset-intelligence.md`, Health/Intelligence separation, asset scope, source scope, connectivity status and proof status |
| Prioritize signals | `MetricGrid`, `MetricCard`, `PriorityList`, `AlertCard` |
| Decide next steps | `ActionList`, `ActionCard`, `CreateActionDialog` |
| Prove value | `ValueProofCard`, renewal and QBR patterns |
| Coordinate internally | ownership, due date, priority and handoff context |
| Use AI appropriately | AI usage principle, BI-first and AI-assisted prompts |

---

## Final principle

A generated screen is useful when it supports a real user need.

If a screen looks visually complete but does not help the user understand,
trust, prioritize, act, prove value or distinguish observed facts from
interpreted asset intelligence, it should be revised.
