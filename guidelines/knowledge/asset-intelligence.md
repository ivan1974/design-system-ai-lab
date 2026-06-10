# Asset Intelligence

## Purpose

This file documents the domain knowledge that should inform generated screens
related to installed base, asset monitoring, connectivity coverage, asset health,
intelligence recommendations and value proof.

It complements the UX knowledge layer.

The UX knowledge layer explains what users need to understand, trust, prioritize,
act and prove value.

This asset intelligence layer explains how asset-heavy service screens should
model assets, evidence, data sources, recommendations and outcomes.

Use this file to avoid technically plausible but misleading generated screens.

---

## When to use this knowledge

Use this file when generating or reviewing screens related to:

- installed base
- asset hierarchy
- asset health
- asset lifecycle
- connectivity coverage
- monitored assets
- non-connected assets
- brownfield environments
- multi-vendor environments
- asset intelligence recommendations
- modernization opportunities
- service recommendations
- action plans linked to assets
- expected outcomes linked to recommendations
- value proof linked to service activity

Do not use this file as a universal rule for every screen.

It is domain guidance for asset-heavy service workflows.

---

## Relationship with the UX knowledge layer

Use this file together with:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
```

The UX layer helps answer:

```txt
What does the user need to understand?
What can the user trust?
What matters most?
What should the user do next?
What value can be shown over time?
```

The asset intelligence layer helps answer:

```txt
Which assets are represented?
What level of the installed base is shown?
What is the connectivity status?
What data source supports the signal?
Is the information raw health data or interpreted intelligence?
Is the outcome expected or already proven?
```

Do not copy domain notes directly into generated screens.

Translate domain knowledge into:

```txt
asset context
→ source scope
→ visible facts
→ evidence strength
→ interpreted intelligence
→ recommendation
→ owned action
→ expected outcome or proven value
```

---

## Core principle

Asset intelligence screens must distinguish what is observed, what is inferred,
what is recommended and what is proven.

Use this flow:

```txt
Installed base context
→ connectivity and source scope
→ raw health or lifecycle facts
→ interpreted intelligence
→ recommendation
→ phased actions
→ expected outcomes
→ value proof only when evidenced
```

Do not collapse these layers into a single confident summary.

---

## Installed base hierarchy

Installed base hierarchy should reflect maintainable physical assets first.

Use this rule:

```txt
Level 1 = maintainable physical asset, system or cabinet
Level 2 = embedded device, component or sub-system
```

Examples of Level 1 assets:

- UPS cabinet
- switchgear cabinet
- transformer
- cooling unit
- generator
- battery cabinet
- power distribution cabinet
- rack PDU group when individual rack-level detail is not needed

Examples of Level 2 embedded components:

- meter
- relay
- breaker unit
- sensor
- controller
- embedded communication module
- thermal probe
- battery string monitor

Embedded components should not become standalone top-level assets unless the
screen purpose explicitly requires component-level maintenance or investigation.

---

## Asset modeling rules

Use these rules when representing assets:

- model physical maintainable assets as top-level items
- keep embedded meters, relays, sensors and controllers as child components
- preserve site, zone and room context when it affects the decision
- show product, vendor and lifecycle context when they affect trust or action
- avoid generating fake asset identifiers
- avoid showing asset-level precision that the source data does not support
- group repeated assets when individual detail does not support the user decision

Good:

```txt
UPS Room A
→ Galaxy VXL UPS Cabinet
→ embedded meter, controller and battery monitoring components
```

Weak:

```txt
Top-level assets:
Meter 01
Relay 02
Sensor 03
Controller 04
```

The weak example turns embedded components into standalone maintainable assets.

---

## Brownfield and multi-vendor reality

Asset-heavy service screens often represent brownfield environments.

A brownfield installed base may include:

- current CompanyName assets
- older CompanyName assets
- legacy assets
- third-party assets
- partially documented assets
- manually inventoried assets
- connected and non-connected assets
- assets covered by different service levels
- assets with different lifecycle states

Do not assume that all assets are fully monitored, fully documented or CompanyName-owned.

Show the scope of what is represented when it affects trust.

Good:

```txt
Scope: known monitored CompanyName assets in UPS Room A.
Third-party cooling assets are not included in this view.
```

Weak:

```txt
Full site status confirmed.
```

---

## Site, zone and room context

Use site, zone and room context when location affects interpretation or action.

Typical context levels:

```txt
Customer
→ site
→ zone
→ room
→ asset
→ embedded component
```

Examples:

```txt
Site: Lyon DC1
Zone: Critical Power
Room: UPS Room A
Asset: Galaxy VXL UPS Cabinet
```

Location context is useful when users need to:

- understand affected scope
- plan an intervention
- assign ownership
- prioritize critical rooms
- compare coverage between zones
- explain risks to the customer
- prepare a renewal or modernization discussion

Do not show location hierarchy when it does not support the decision.

---

## Connectivity statuses

Connectivity status affects evidence strength and trust.

Use three core statuses:

| Status | Meaning | UI implication |
| --- | --- | --- |
| `connected` | Live or recent telemetry is available | Can support operational monitoring when freshness is shown |
| `partially_connected` | Only part of the asset, component set or telemetry is available | Show what is visible and what is missing |
| `non_connected` | No live telemetry is available | Do not present as live monitoring; rely on manual or historical evidence |

Do not treat all assets as equally observable.

---

## Connectivity and decision confidence

Connectivity should influence how strongly a screen words its signals and
recommendations.

```txt
connected
→ live telemetry may support operational signals
→ show freshness

partially_connected
→ partial visibility may support limited interpretation
→ show missing scope

non_connected
→ no live condition monitoring
→ use inventory, service reports, maintenance history or uploaded documents
→ avoid live-status language
```

Good:

```txt
Connectivity: partially connected
Visible: UPS cabinet telemetry
Missing: embedded battery string telemetry
Decision note: recommendation requires service review before customer use
```

Weak:

```txt
Asset health confirmed.
```

The weak example hides the limits of partial connectivity.

---

## Data source and evidence strength

Evidence strength depends on the source.

Common source types:

| Source type | Evidence strength | UI implication |
| --- | --- | --- |
| Live telemetry | Strong for current operational signals if fresh | Show last update and source scope |
| DCIM / BMS integration | Strong to medium depending on scope | Show integration source and scope |
| Service report | Strong for past interventions, weaker for current state | Show report date |
| Manual inventory | Useful for scope, weaker for current health | Show review state |
| Uploaded document | Useful for evidence, may be outdated | Show document date or review status |
| Lifecycle database | Useful for age and modernization signals | Show lifecycle status source |
| AI interpretation | Not a source of fact | Must be grounded in visible or auditable evidence |

Do not allow AI interpretation to replace source evidence.

---

## Health versus Intelligence separation

Separate raw or observed health data from intelligence interpretation.

Use this distinction:

```txt
Health = raw observed data, source-system facts, telemetry, statuses, lifecycle facts
Intelligence = interpretation, risk, opportunity, recommendation, action plan, expected outcome
```

Health answers:

```txt
What is observed?
What is the current status?
What source supports it?
How fresh is it?
What asset is affected?
```

Intelligence answers:

```txt
What might this mean?
Why does it matter?
What risk or opportunity does it create?
What should be done next?
What outcome is expected?
What needs validation?
```

Do not mix Health and Intelligence at the same visual level.

Recommended flow:

```txt
Asset context
→ raw health or lifecycle facts
→ evidence strength
→ intelligence finding
→ risk or opportunity
→ recommendation
→ action plan
→ expected outcomes
```

---

## Health data rules

Health data should come from source systems, telemetry, service history,
lifecycle registries or documented inventory.

Examples of health data:

- load
- temperature
- alarm state
- battery health
- breaker status
- runtime
- asset age
- lifecycle status
- last inspection date
- connectivity status
- last update
- source system

Do not use GenAI to invent health data.

Do not show health data without source or freshness when it affects trust.

---

## Intelligence rules

Intelligence should interpret health data or lifecycle context into decision
support.

Examples of intelligence:

- modernization opportunity
- maintenance risk
- connectivity recovery priority
- asset lifecycle risk
- performance degradation signal
- service action recommendation
- renewal mitigation signal
- expected operational outcome
- proof gap

Intelligence should be grounded in visible or auditable evidence.

Do not present intelligence as raw fact.

Do not present AI interpretation as source-system truth.

---

## Recommendation matching model

Recommendations should match real asset context.

A recommendation should be traceable to relevant asset attributes such as:

- site
- zone
- room
- asset type
- product
- vendor
- lifecycle status
- connectivity status
- data source
- affected component when relevant

Good:

```txt
Recommendation: Review UPS modernization plan
Matched asset: Galaxy VXL UPS Cabinet
Room: UPS Room A
Lifecycle status: aging
Connectivity: connected
Evidence: lifecycle database + service history
```

Weak:

```txt
Recommendation: Modernize equipment
Asset context: not shown
Evidence: not shown
```

A recommendation without asset context is difficult to trust or act on.

---

## Recommendation content model

An asset intelligence recommendation should make clear:

- what is recommended
- which asset or asset group is affected
- what finding triggered it
- which evidence supports it
- whether the evidence is live, partial, historical or manual
- what risk or opportunity it addresses
- what action plan is suggested
- who should validate or own the next step
- what outcomes are expected
- what proof is missing

Use `AlertCard` for simple risk and recommendation summaries.

Use a richer recommendation pattern when the recommendation includes asset
matching, evidence references, phased actions and expected outcomes.

---

## Action plan structure

Some recommendations should include phased actions.

Use these action phases when available:

| Phase | Meaning |
| --- | --- |
| Immediate | What should be checked, reviewed or stabilized now |
| Urgent | What should be planned soon to reduce risk |
| Mid-term | What should be planned for lifecycle, modernization or long-term value |

Example:

```txt
Immediate: Validate telemetry gap with Monitoring agent.
Urgent: Schedule site review for disconnected critical assets.
Mid-term: Prepare modernization roadmap for aging UPS assets.
```

Do not create too many action groups if they make the screen heavy.

For summary screens, show the most important action or action counts.

For detail screens, show the phased action plan.

---

## Expected outcomes versus proven value

Expected outcomes are not value proof.

Use this distinction:

| Type | Meaning | UI implication |
| --- | --- | --- |
| Expected outcome | What should happen if the action is completed | Show as expected, not proven |
| Technical outcome | Technical improvement expected or observed | Link to asset or health evidence |
| Business outcome | Operational or business value expected or observed | Show evidence or mark as estimate |
| Proven value | Outcome confirmed by completed action and evidence | Can support value proof |
| Customer-ready proof | Validated proof that can be used in customer communication | Requires review and appropriate wording |

Good:

```txt
Expected outcome: reduce risk of battery-related interruption.
Proof status: not proven yet.
Next action: validate after battery inspection is completed.
```

Weak:

```txt
Value proven: interruption avoided.
```

The weak example claims proven value without evidence.

---

## Value proof rules for asset intelligence

Value proof should be grounded in completed actions and evidence.

Possible evidence for value proof:

- completed service actions
- resolved risks
- closed recommendations
- improved connectivity coverage
- validated modernization plan
- completed inspection
- measurable health improvement
- customer objective linked to outcome
- reviewed customer communication

Do not use expected outcomes as proof.

Do not turn AI-generated wording into proof.

Do not make internal operational activity look customer-ready without validation.

Recommended proof flow:

```txt
completed action
→ evidence source
→ observed or validated outcome
→ proof status
→ customer-ready wording after review
```

---

## Confidence scores

Confidence scores can support interpretation, but they must not replace evidence.

A confidence score should not be shown alone.

It should be accompanied by:

- evidence source
- source scope
- freshness or review state
- missing data when relevant
- human validation requirement when critical

Good:

```txt
Confidence: Medium
Evidence: lifecycle database + manual inventory
Missing: live telemetry
Validation: Account owner review required before customer communication
```

Weak:

```txt
Confidence: 92%
```

The weak example creates false precision.

---

## AI usage rules for asset intelligence

Use BI, APIs or source systems for:

- asset hierarchy
- asset location
- asset type
- product
- vendor
- lifecycle status
- connectivity status
- telemetry values
- source system
- last update
- open actions
- action ownership
- recommendation status

Use GenAI only for:

- synthesis
- explanation
- prioritization support
- recommendation wording
- proof gap explanation
- action plan drafting
- mitigation talking points
- customer-ready reformulation from grounded facts

Do not use GenAI to invent assets, connectivity, telemetry, lifecycle status,
recommendation evidence, expected outcomes or proven value.

---

## UI implications

Asset-heavy screens should:

- show asset context before recommendations
- show source scope when visibility is partial
- show connectivity status when it affects trust
- show data source and freshness when they affect decisions
- separate raw health data from intelligence interpretation
- distinguish risk, opportunity, recommendation and action
- distinguish expected outcomes from proven value
- show proof gaps when value proof is incomplete
- keep human validation visible for critical recommendations
- avoid rendering hundreds of repeated assets when grouping is enough

---

## Pattern implications

Use these patterns when relevant:

```txt
CustomerStatusCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
AlertCard
ActionCard
ActionList
CreateActionDialog
```

Potential additional patterns:

```txt
IntelligenceRecommendationCard
RecommendationDetailPanel
```

Use a richer recommendation pattern when a recommendation includes:

- asset match
- finding
- intelligence insight
- risk or opportunity
- evidence references
- phased action plan
- expected outcomes
- confidence or validation state

---

## Composition implications

For asset intelligence screens, use this flow:

```txt
PageHeader
→ customer or site context
→ asset context
→ connectivity and source scope
→ raw health or lifecycle facts
→ interpreted intelligence
→ risk or opportunity
→ recommendation
→ owned action or phased action plan
→ expected outcomes
→ validation or value proof status
```

Do not generate a generic asset dashboard when the prompt is asking for a
recommendation, risk review or action plan.

---

## Review checklist

Use this checklist for asset-heavy screens:

- [ ] The screen shows which asset, asset group, room, zone or site is represented.
- [ ] Level 1 assets are maintainable physical assets, systems or cabinets.
- [ ] Embedded components are not shown as standalone top-level assets unless needed.
- [ ] Brownfield, multi-vendor or partial scope is visible when relevant.
- [ ] Connectivity status is visible when it affects trust.
- [ ] Data source is visible when it affects trust.
- [ ] Freshness or review status is visible when it affects the decision.
- [ ] Non-connected assets are not presented as live-monitored.
- [ ] Raw health data is separated from intelligence interpretation.
- [ ] Recommendations are traceable to asset context.
- [ ] Recommendations show supporting evidence or evidence gaps.
- [ ] Immediate, urgent and mid-term actions are represented when relevant.
- [ ] Expected outcomes are not presented as proven value.
- [ ] Customer-ready proof is distinguished from internal draft proof.
- [ ] Confidence scores do not replace evidence.
- [ ] Human validation is visible for critical recommendations.
- [ ] GenAI is not used to invent facts, assets, telemetry, outcomes or proof.

---

## Anti-patterns

Avoid these anti-patterns:

- modeling embedded components as top-level assets
- presenting non-connected assets as live-monitored
- implying full site visibility without source scope
- hiding partial connectivity
- hiding source or freshness when trust depends on it
- mixing Health data and Intelligence interpretation at the same visual level
- generating recommendations without asset match
- generating recommendations without evidence or evidence gaps
- using confidence score as a substitute for evidence
- presenting expected outcomes as proven value
- presenting internal operational activity as customer-ready proof
- inventing telemetry, asset data, sources, outcomes or proof
- rendering hundreds of repeated assets when grouped representation is enough
- using GenAI for basic asset retrieval or telemetry values
- omitting human validation for critical recommendations

---

## Final principle

Raw data tells what is observed.

Connectivity and source scope tell how much can be trusted.

Intelligence explains what the observed facts may mean.

Recommendations propose what to do.

Actions define who does what and when.

Expected outcomes are not proof until the action has been completed and evidence
is available.
