# Design Implications

## Purpose

This file translates UX insights and user needs into concrete design system
implications for `design-system-ai-lab`.

It explains what the design system should enforce through:

- principles
- prompts
- components
- decision components
- business patterns
- composition guidelines
- review criteria

This file is not a research report.

It is a bridge between research knowledge and design system rules.

---

## Source knowledge

This file is derived from:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/asset-intelligence.md
```

The main research-backed direction is:

```txt
Users need help understanding what is happening, what can be trusted, what matters most and what to do next.
```

This applies to both customers and internal roles such as Account owner, Monitoring agent, CCC, Sales,
Field Services and service managers.

For asset-heavy service screens, this also means helping users understand which
assets are represented, what visibility is partial, what source supports the
signal, what is raw Health data, what is interpreted Intelligence and what is
expected versus proven value.

---

## How to use this file

Use this file when:

- deciding whether a component rule is justified
- updating a pattern guideline
- writing a Figma Make prompt
- reviewing generated screens
- explaining why the design system is decision-oriented
- deciding whether a screen needs AI, BI, workflow or human validation
- deciding whether asset-heavy screens need asset scope, connectivity status, source scope, Health facts, Intelligence interpretation or proof status

Each implication should be translated into:

```txt
prompt constraint
→ component or pattern rule
→ composition rule
→ review criterion
```

---

## Implication 1 — Start with orientation and context

Design implication:

Generated screens should start with a clear page orientation and business context
before showing detailed signals, risks or actions.

Why it matters:

Users need to understand the current customer, service or renewal situation
quickly. Without context, metrics and alerts become harder to interpret.

Apply this in:

```txt
PageHeader
CustomerStatusCard
RenewalRiskSummary
ConnectivityCoverageCard
StatusSummary
composition/overview.md
composition/screen-patterns.md
```

Prompt rule:

```txt
Start with a specific PageHeader and the most relevant business context pattern before metrics, alerts or actions.
```

Review rule:

```txt
Reject screens where metrics, alerts or actions appear before the user can understand the current situation.
```

---

## Implication 2 — Use business patterns for recurring service context

Design implication:

Recurring service contexts should be represented by dedicated business patterns,
not rebuilt manually with generic cards.

Why it matters:

Customers and internal teams need consistent ways to understand customer status,
connectivity coverage, renewal risk and value proof.

Apply this in:

```txt
CustomerStatusCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
CreateActionDialog
patterns/
composition/screen-patterns.md
review/acceptance-checklist.md
```

Prompt rule:

```txt
Use business patterns first when they match the section intent.
Do not manually rebuild a business pattern with Card, Badge, div, dl, dt or dd markup.
```

Review rule:

```txt
Reject screens that manually reconstruct CustomerStatusCard, RenewalRiskSummary, ConnectivityCoverageCard or ValueProofCard with generic cards.
```

---

## Implication 3 — Show facts before interpretation

Design implication:

Screens should show visible facts before interpreted signals, recommendations or
AI-generated summaries.

Why it matters:

Users need to understand what the system knows before trusting what the system or
AI suggests.

For asset-heavy screens, raw Health facts, source scope and connectivity status
should appear before Intelligence interpretation or recommendations.

Apply this in:

```txt
principles/evidence-and-trust.md
principles/ai-usage.md
composition/decision-layout.md
composition/screen-patterns.md
review/acceptance-checklist.md
```

Prompt rule:

```txt
Show visible structured facts before interpretation, recommendation or AI-assisted content. For asset-heavy screens, show asset context, source scope, connectivity status and raw Health facts before Intelligence interpretation.
```

Review rule:

```txt
Reject screens that start with AI recommendations or confident interpretations before showing supporting facts, asset scope or source scope when they affect trust.
```

---

## Implication 4 — Make trust cues visible

Design implication:

When information may be incomplete, outdated, inferred or source-dependent, the
screen should make that visible.

Why it matters:

Data quality is a recurring barrier to trust and adoption. Polished UI should not
hide uncertainty.

In asset-heavy contexts, trust also depends on asset scope, connectivity status,
source scope, source strength, freshness and the distinction between Health data
and Intelligence interpretation.

Apply this in:

```txt
Badge
MetricCard
AlertCard
ConnectivityCoverageCard
CustomerStatusCard
RenewalRiskSummary
ValueProofCard
principles/evidence-and-trust.md
knowledge/asset-intelligence.md
```

Prompt rule:

```txt
Show freshness, validation status, source-system context, asset scope, connectivity status, source scope or review-needed state when data quality or partial visibility may affect the decision.
```

Review rule:

```txt
Reject screens that style uncertain, outdated, incomplete or partial information as confirmed, present non-connected assets as live-monitored or present AI interpretation as source-system truth.
```

---

## Implication 5 — Prioritize signals, do not dump data

Design implication:

Generated screens should select and prioritize decision-relevant signals instead
of displaying all available data.

Why it matters:

Users need to see what matters most. Too many metrics, cards or tables increase
cognitive effort.

Apply this in:

```txt
MetricGrid
MetricCard
PriorityList
AlertCard
composition/decision-layout.md
composition/screen-patterns.md
principles/eco-design.md
review/acceptance-checklist.md
```

Prompt rule:

```txt
Use a limited set of decision-relevant metrics and prioritize risks by severity or business impact.
```

Review rule:

```txt
Reject over-generated screens with too many metrics, large raw tables or many equal-priority cards.
```

---

## Implication 6 — Explain why signals matter

Design implication:

Metrics and alerts should include enough context to explain why they matter for
the current user decision.

Why it matters:

A signal without interpretation can create effort instead of clarity.

For asset-heavy screens, the explanation should clarify whether the signal comes
from live telemetry, lifecycle data, service history, manual inventory or
AI-assisted interpretation.

Apply this in:

```txt
MetricCard
MetricGrid
AlertCard
PriorityList
ValueProofCard
RenewalRiskSummary
```

Prompt rule:

```txt
Metrics should include helper text when interpretation is needed. Asset-heavy metrics should show source or scope when trust depends on it. Alerts should explain impact and include a recommendation.
```

Review rule:

```txt
Reject metrics without useful interpretation and alerts that do not explain the impact of the issue.
```

---

## Implication 7 — Convert risks into recommendations

Design implication:

Risk signals and alerts should help the user understand the recommended next
step.

Why it matters:

Users often know that something is wrong but not what should happen next.

Apply this in:

```txt
AlertCard
PriorityList
review/acceptance-checklist.md
review/anti-patterns.md
```

Prompt rule:

```txt
Every AlertCard must include a concrete recommendation.
```

Review rule:

```txt
Reject alerts without recommendations or with vague recommendations such as Check or Review.
```

---

## Implication 8 — Convert recommendations into owned actions

Design implication:

Recommendations should connect to concrete actions with visible ownership,
timing and priority.

Why it matters:

Service experience depends on follow-through. Unowned actions create ambiguity
and weak coordination.

Asset-related recommendations should preserve the site, zone, room, asset group
or asset context needed for follow-up.

Apply this in:

```txt
ActionCard
ActionList
CreateActionDialog
patterns/create-action-dialog.md
review/acceptance-checklist.md
```

Prompt rule:

```txt
Every action must include owner, due date and priority. Asset-related actions should include relevant asset scope when needed.
```

Review rule:

```txt
Reject actions without owner, due date or priority.
Reject vague actions such as Follow up, Check issue or Review later.
```

---

## Implication 9 — Show ownership and coordination needs

Design implication:

Screens should make responsibility, handoff context and coordination needs
visible when several roles are involved.

Why it matters:

Internal fragmentation between Account owner, Monitoring agent, CCC, Sales and Field Services can
increase customer effort and employee effort.

Apply this in:

```txt
CustomerStatusCard
StatusSummary
ActionCard
ActionList
CreateActionDialog
AlertCard
```

Prompt rule:

```txt
When a risk or action requires coordination, show owner, scope and the next coordination step.
```

Review rule:

```txt
Reject screens that show internal risks without clarifying responsibility or follow-through.
```

---

## Implication 10 — Make partial visibility explicit

Design implication:

When system, asset or monitoring visibility is partial, the screen should show
scope and limits clearly.

Why it matters:

Customers often operate mixed environments with several vendors, systems and
sites. A tool should not imply full visibility when only part of the environment
is covered.

Asset visibility may also be affected by installed base completeness,
connectivity status, embedded component visibility, brownfield constraints and
source strength.

Apply this in:

```txt
ConnectivityCoverageCard
CustomerStatusCard
MetricGrid
MetricCard
Badge
AlertCard
StatusSummary
```

Prompt rule:

```txt
When monitoring coverage matters, show coverage rate, connected assets, partially connected assets when relevant, non-connected assets, affected scope, source scope and last update.
```

Review rule:

```txt
Reject screens that imply full system visibility when the data only supports partial coverage, or that present non-connected assets as live-monitored.
```

---

## Implication 11 — Keep customer specificity structured

Design implication:

Customer-specific constraints and objectives should be shown as structured
context, not uncontrolled custom UI.

Why it matters:

Customers differ by industry, site structure, security constraints, compliance,
existing tools and service expectations. The design system must support this
without becoming bespoke for every case.

Apply this in:

```txt
CustomerStatusCard
RenewalRiskSummary
ValueProofCard
Badge
AlertCard
ActionCard
```

Prompt rule:

```txt
Show relevant customer-specific context such as industry, site type, security constraint, service scope or customer objective when it affects the decision.
```

Review rule:

```txt
Reject screens that ignore important customer-specific context or turn specificity into unstructured custom UI.
```

---

## Implication 12 — Make value proof grounded and customer-ready

Design implication:

Value proof should connect service activity to customer objectives, outcomes and
remaining proof gaps.

Why it matters:

Service value can be invisible when risks are prevented or when recommendations
are not translated into customer-ready language.

Expected outcomes, technical outcomes, internal evidence and customer-ready
proof should remain distinguishable.

Apply this in:

```txt
ValueProofCard
RenewalRiskSummary
MetricGrid
AlertCard
ActionCard
ActionList
patterns/value-proof-card.md
knowledge/asset-intelligence.md
```

Prompt rule:

```txt
Value proof points must be grounded in completed actions, resolved risks, reviewed recommendations, validated asset intervention outcomes or measurable outcomes. Do not invent value proof. Do not present expected outcomes as proven value.
```

Review rule:

```txt
Reject value proof with unsupported claims, fake sources, fake citations, invented proof points or expected outcomes presented as proven value.
```

---

## Implication 13 — Use BI first and AI only where it adds value

Design implication:

Structured facts should be retrieved and displayed through APIs, BI tools,
databases or source systems. GenAI should be reserved for tasks where it adds
real value.

Why it matters:

Using GenAI for simple retrieval increases cost, reduces traceability and makes
quality dependent on prompt phrasing.

Asset hierarchy, connectivity status, telemetry values, lifecycle status and
source scope should come from BI, APIs or source systems, not GenAI.

Apply this in:

```txt
principles/ai-usage.md
CustomerStatusCard
RenewalRiskSummary
ConnectivityCoverageCard
MetricGrid
MetricCard
ValueProofCard
prompts/template.md
```

Prompt rule:

```txt
Do not use GenAI to retrieve customer name, contract, renewal date, owner, status, counts, lists, standard KPIs, asset hierarchy, connectivity status, telemetry values, source scope or lifecycle status.
Use GenAI only for synthesis, explanation, prioritization, recommendation, drafting, reformulation, proof gap explanation or grounded action-plan drafting.
```

Review rule:

```txt
Reject prompt-first screens that use GenAI for basic structured retrieval, asset facts, telemetry, connectivity status, source scope or lifecycle status.
```

---

## Implication 14 — Keep AI guided and evidence-aware

Design implication:

When AI is used, it should appear as guided assistance based on visible facts,
not as an open-ended prompt-first interface by default.

Why it matters:

Users should not need prompt skills to understand a structured service situation.
AI outputs should remain reviewable.

For asset-heavy screens, AI should support Intelligence interpretation on top of
visible Health facts, not replace the source facts themselves.

Apply this in:

```txt
principles/ai-usage.md
principles/evidence-and-trust.md
AlertCard
ActionCard
ValueProofCard
CreateActionDialog
```

Prompt rule:

```txt
Use guided AI assistance on top of visible facts. For asset-heavy screens, show Health facts, source scope and connectivity before AI-assisted Intelligence interpretation. Do not hide evidence behind AI output.
```

Review rule:

```txt
Reject AI recommendations that are unsupported by visible facts, hide the evidence used or present AI interpretation as source-system truth.
```

---

## Implication 15 — Keep human validation visible for critical decisions

Design implication:

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization decisions should keep human accountability
visible.

Why it matters:

AI and automation can assist, but they should not silently take responsibility
for critical decisions.

Apply this in:

```txt
AlertCard
ActionCard
ActionList
CreateActionDialog
Badge
StatusSummary
principles/evidence-and-trust.md
principles/ai-usage.md
```

Prompt rule:

```txt
Keep human validation visible for critical customer, contract, service, safety, compliance, renewal, value proof, asset intelligence or modernization decisions.
```

Review rule:

```txt
Reject screens that imply AI has autonomously approved entitlement, escalation, renewal action, asset intelligence recommendation, modernization action, value proof or critical service decisions.
```

---

## Implication 16 — Reduce effort through composition

Design implication:

Composition should reduce scanning, interpretation and coordination effort.

Why it matters:

Customers and internal users already work across multiple systems and handoffs.
A generated screen should not add another layer of cognitive load.

Apply this in:

```txt
composition/overview.md
composition/decision-layout.md
composition/screen-patterns.md
principles/accessibility.md
principles/eco-design.md
review/acceptance-checklist.md
```

Prompt rule:

```txt
Use a focused decision flow: context, metrics, risks, actions. Avoid duplicated context and raw data dumps.
```

Review rule:

```txt
Reject screens that are over-generated, duplicated, hard to scan or visually noisy.
```

---

## Implication 17 — Support role-specific workflows

Design implication:

Generated screens should reflect the user role, goal and decision moment.

Why it matters:

The same customer situation may require a different view for a Account owner, Sales,
Support, Field Services or customer user.

Apply this in:

```txt
prompts/template.md
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
composition/screen-patterns.md
PageHeader
business patterns
```

Prompt rule:

```txt
Every generated screen should specify user role, user goal, screen pattern, required context and next action.
```

Review rule:

```txt
Reject role-neutral screens when the prompt implies a specific role or workflow.
```

---

## Implication 18 — Preserve enough context for handoffs

Design implication:

When a screen involves support, follow-up or handoff, it should preserve enough
context for another role to understand the next step.

Why it matters:

Lost context creates repeated explanations, rework and weaker customer
experience.

Apply this in:

```txt
CustomerStatusCard
StatusSummary
AlertCard
ActionCard
ActionList
CreateActionDialog
```

Prompt rule:

```txt
When a screen involves follow-up, support or handoff, include enough context to avoid repeated explanation without overloading the screen.
```

Review rule:

```txt
Reject screens that create alerts or actions without enough context for another role to understand the next step.
```

---

## Implication 19 — Expose gaps and turn them into actions

Design implication:

Missing proof, unknown ownership, incomplete data or outdated information should
be exposed as gaps and converted into follow-up actions when appropriate.

Why it matters:

Hiding gaps creates false confidence. Exposing gaps allows users to resolve them.

Apply this in:

```txt
Badge
AlertCard
ActionCard
ActionList
ValueProofCard
ConnectivityCoverageCard
RenewalRiskSummary
```

Prompt rule:

```txt
When data, proof or ownership is incomplete, show the gap and create a follow-up action when appropriate.
```

Review rule:

```txt
Reject screens that hide missing proof, outdated data or unassigned ownership.
```

---

## Implication 20 — Do not confuse display facts with user input

Design implication:

Display-only facts should be shown through display components and patterns, not
disabled form controls.

Why it matters:

Disabled fields can reduce readability, create ambiguity and make source-system
facts look editable.

Apply this in:

```txt
CustomerStatusCard
RenewalRiskSummary
ConnectivityCoverageCard
ValueProofCard
StatusSummary
forms/field.md
forms/input.md
forms/select.md
forms/textarea.md
review/anti-patterns.md
```

Prompt rule:

```txt
Use display components for display-only facts. Use form components only for user input.
```

Review rule:

```txt
Reject screens that use disabled inputs to display customer, contract, renewal or service facts.
```

## Implication 21 — Separate Health data from Intelligence interpretation

Design implication:

Asset-heavy screens should separate raw Health facts from Intelligence
interpretation, recommendations, actions and proof status.

Why it matters:

Asset intelligence may combine telemetry, lifecycle data, service history,
inventory, connectivity and AI-assisted interpretation. Mixing these layers can
create false confidence.

Apply this in:

```txt
knowledge/asset-intelligence.md
principles/evidence-and-trust.md
principles/ai-usage.md
principles/accessibility.md
principles/eco-design.md
composition/decision-layout.md
composition/screen-patterns.md
review/acceptance-checklist.md
review/anti-patterns.md
```

Prompt rule:

```txt
For asset-heavy screens, show asset context, source scope, connectivity status and raw Health facts before Intelligence interpretation. Do not present non-connected assets as live-monitored. Do not present expected outcomes as proven value.
```

Review rule:

```txt
Reject asset intelligence screens that hide asset scope, mix Health data and Intelligence interpretation, use GenAI to invent asset facts or present expected outcomes as proven value.
```

---

---

## Design implication clusters

| Cluster | Design implications |
| --- | --- |
| Understand | Implications 1, 2, 10, 11, 17, 21 |
| Trust | Implications 3, 4, 12, 14, 15, 19, 21 |
| Prioritize | Implications 5, 6, 7 |
| Act | Implications 8, 9, 18 |
| AI discipline | Implications 13, 14, 15 |
| Asset intelligence | Implications 3, 4, 6, 8, 10, 12, 13, 14, 15, 21 |
| Reduce effort | Implications 16, 20 |

---

## Mapping to design system areas

| DS area | Main implications |
| --- | --- |
| Principles | 3, 4, 12, 13, 14, 15, 16, 21 |
| Prompts | 1, 3, 5, 7, 8, 12, 13, 17 |
| Composition | 1, 3, 5, 10, 16, 17, 21 |
| Business patterns | 2, 10, 11, 12, 19, 20, 21 |
| Decision components | 5, 6, 7, 8, 9, 19 |
| Forms | 8, 20 |
| Review | all implications |
| Knowledge | 3, 4, 10, 12, 13, 14, 15, 21 |

---

## Final principle

A design implication is valid when it turns research into an actionable system
rule.

If an insight does not change a prompt, component, pattern, composition, review
criterion or asset intelligence rule, it should remain in the research notes
rather than becoming a design system rule.
