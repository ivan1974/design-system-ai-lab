# AI Usage Principles

## Purpose

AI usage must be governed by the user task, the journey moment, the value
created and the level of risk.

This principle is informed by the knowledge layer, especially recurring user
needs around confidence, data quality, minimum effort, value proof, internal
coordination, asset intelligence and knowing what to do next.

A generated interface should not use GenAI by default.

A generated interface should not turn every data question into a chatbot
interaction.

A generated interface should not use GenAI as an expensive lookup layer for
basic facts that can be retrieved, filtered, counted or displayed through BI,
APIs, databases or business systems.

Figma Make should generate AI-assisted experiences only when AI adds clear value
through synthesis, explanation, prioritization, recommendation, drafting or
reformulation.

Refer to the knowledge layer when the screen relates to known service
experience needs:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

---

## Core principle

Use the right capability for the right job.

```txt
BI shows what is happening.
GenAI helps users understand what it means and what to do next.
Workflow helps users execute.
Human validation protects critical decisions.
```

For asset-heavy screens, use this additional distinction:

```txt
Source systems show Health data.
GenAI may support Intelligence interpretation.
Workflow turns recommendations into owned actions.
Human validation protects critical recommendations and value proof.
```

Do not start from the model.

Start from:

- the user role
- the user need
- the research-backed design implication
- the journey moment
- the decision to support
- the data needed
- the asset scope and source scope when relevant
- the connectivity status when relevant
- the difference between raw Health data and Intelligence interpretation
- the level of uncertainty
- the required proof
- the operational risk
- the cost of the interaction

---

## Knowledge-informed AI usage

AI usage should support a real user need, not a technology preference.

The knowledge layer identifies recurring needs such as:

- understanding the current situation quickly
- trusting the information being shown
- seeing what matters most
- understanding why a signal matters
- knowing what to do next
- knowing who owns the next step
- reducing effort when using the interface
- understanding coverage and visibility limits
- understanding asset scope and installed base limits
- distinguishing raw Health data from Intelligence interpretation
- distinguishing expected outcomes from proven value
- seeing value proof over time
- preparing for renewal or customer discussions
- supporting internal coordination across roles
- keeping human accountability visible

AI should be used only when it helps address one of these needs better than a
structured UI, BI view, workflow or deterministic source-system call.

Current evidence status of the knowledge layer:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

Do not treat open questions as fully validated product standards.

If an AI-assisted pattern depends on an unresolved assumption, make that
limitation visible in review notes, documentation or follow-up actions.

Use `knowledge/asset-intelligence.md` when the screen involves installed base,
asset health, connectivity coverage, lifecycle modernization, asset
recommendations or value proof linked to assets.

---

## First rule: BI for retrieval, GenAI for synthesis

Use BI, APIs, databases or business tools when the user mainly needs to:

- retrieve
- filter
- count
- sort
- compare
- trend
- list
- track
- check a date
- check a status
- check an owner
- check a contract
- check a case or work order
- check asset hierarchy
- check connectivity status
- check telemetry values
- check lifecycle status
- check source scope
- check monitoring freshness

Use GenAI when the user needs to:

- synthesize
- explain
- prioritize
- recommend
- prepare
- draft
- reformulate
- summarize unstructured notes
- connect several signals into a narrative
- reduce cognitive effort on a complex situation
- turn internal signals into customer-ready language
- prepare value proof from grounded service activity
- explain asset intelligence findings from visible facts
- summarize proof gaps from source-backed evidence
- draft action plans from grounded recommendations

Do not use GenAI as a SQL engine replacement.

Do not use GenAI as the default interface for structured retrieval.

---

## Decision model

Use this decision model before generating an AI-assisted screen.

| User need | Default capability | Rationale |
| --- | --- | --- |
| Contracts, dates, owners, statuses | BI / business system | More reliable, cheaper, traceable |
| Lists, filters, tables, KPIs | BI / business system | Structured data should be directly visible |
| Portfolio comparison or trend | BI / analytics | Better for filtering, ranking and comparison |
| Case or work order lookup | BI / service tool | Operational facts should come from source systems |
| Asset coverage or monitoring status | BI / source system | Coverage, freshness and scope should be traceable |
| Asset hierarchy, telemetry, lifecycle status or source scope | BI / source system | Asset facts should be traceable and not generated |
| Account or customer snapshot | BI-first | Users need shared visible facts |
| Customer review preparation | Hybrid | BI for facts, GenAI for synthesis and preparation |
| Renewal risk explanation | Hybrid | BI for signals, GenAI for rationale |
| Value proof preparation | Hybrid | BI for grounded proof, GenAI for customer-ready synthesis |
| Asset intelligence recommendation | Hybrid | Source systems for Health data, GenAI for Intelligence explanation and action framing |
| Case history summary | Hybrid | BI for cases, GenAI for note synthesis |
| Follow-up prioritization | Hybrid | BI for list, GenAI for explanation and ranking support |
| Customer email drafting | GenAI-assisted | Value comes from wording and adaptation |
| Critical customer, contract, safety, renewal or field decision | Assistive AI + human validation | Accountability must remain human |

---

## Journey first, not model first

Do not generate an AI interaction just because the screen involves AI.

Start with the journey moment.

Ask:

- What is the user trying to do?
- What decision are they preparing?
- Which documented user need does this support?
- What information must be visible first?
- What interpretation could reduce cognitive effort?
- What action should follow?
- What risk exists if the AI output is wrong?

Good:

```txt
Customer review preparation
→ show shared facts first
→ use GenAI to summarize risks and prepare talking points
```

Weak:

```txt
Add a chatbot because the screen is about customer review
```

The model is a means, not the starting point.

---

## Shared facts before AI interpretation

Visible, structured facts should come before AI-generated interpretation.

For asset-heavy screens, visible facts include asset scope, connectivity status,
data source, freshness and raw Health data.

Use BI-first patterns such as:

- `CustomerStatusCard`
- `ConnectivityCoverageCard`
- asset context patterns when available
- source-scope indicators when relevant
- `RenewalRiskSummary`
- `ValueProofCard`
- `StatusSummary`
- `MetricGrid`
- `MetricCard`

Then use AI actions to explain, synthesize, prioritize or draft.

Preferred flow:

```txt
Visible facts
→ source scope and evidence strength
→ AI-assisted interpretation
→ evidence-aware recommendation
→ owned action
→ expected outcome or value proof status when relevant
→ human review or validation when needed
```

Avoid:

```txt
AI answer first
→ evidence shown only afterwards
```

Users should not need to trust a black-box answer before seeing the underlying
facts.

---

## BI-first, AI-assisted

Use BI as the primary experience when the product must create a shared,
trusted and actionable reading of the situation.

Use GenAI as contextual assistance on top of that shared view.

For asset intelligence, the shared view should expose Health data first:
asset context, source scope, connectivity, telemetry, lifecycle status and
freshness. GenAI may then help explain what those facts may mean.

Good BI-first experience:

```txt
Customer context is visible.
Metrics are visible.
Risks are visible.
Owners, dates and statuses are visible.
AI helps explain why it matters and what to prepare.
```

Weak AI-first experience:

```txt
The user must ask the right question.
The AI generates an interpretation before facts are visible.
The evidence is hidden, partial or only shown after the answer.
Quality depends heavily on prompt wording.
Costs increase because every lookup becomes a generation.
```

AI should enhance the experience, not replace the shared operational view.

This is especially important for screens related to:

- customer monitoring
- renewal risk review
- connectivity review
- service action planning
- value proof preparation
- customer review or QBR preparation

---

## Guided GenAI, not prompt-first by default

Prefer guided AI actions over open-ended prompting.

Good guided actions:

```txt
Generate account summary
Prepare customer review
Explain renewal risk
Summarize case history
Prioritize follow-up actions
Draft customer communication
Prepare value proof summary
Identify proof gaps
Prepare mitigation talking points
Explain asset intelligence finding
Draft phased action plan
Explain why expected outcomes are not proven yet
```

These actions should be:

- contextual
- role-aware when relevant
- based on visible data
- pre-parameterized when possible
- limited to a clear task
- reviewable by the user

Avoid making users guess what to ask.

Avoid making prompt quality the main determinant of product quality.

Open prompting can exist, but it should not be the default pattern for core
structured workflows.

---

## Evidence before recommendation

Every AI-generated recommendation should be anchored in visible or auditable
evidence.

A recommendation should answer:

- what is recommended?
- why is it recommended?
- which facts support it?
- which asset or asset group is affected when relevant?
- which data source supports it when relevant?
- is the evidence live, partial, historical or manual?
- what uncertainty remains?
- what still needs validation?
- who should validate or act?
- is it customer-ready or internal-only?

Good:

```txt
Recommendation: Plan a connectivity review with the customer.
Asset scope: monitored Schneider assets in UPS Room A and UPS Room B.
Evidence: Coverage dropped to 68%, 8 known monitored assets are disconnected and 2 are critical.
Source: monitoring platform, last updated 18 hours ago.
Human next step: CSM confirms the action and assigns the support owner.
```

Weak:

```txt
Recommendation: Contact the customer.
Evidence: Not shown.
```

Do not generate unsupported AI recommendations.

Do not hide the evidence behind the recommendation.

---

## Health data and Intelligence interpretation

For asset-heavy screens, do not mix raw Health data and Intelligence
interpretation at the same visual level.

Health data belongs in BI, APIs, telemetry, service history, lifecycle systems
or documented inventory.

Health data includes:

- asset hierarchy
- asset location
- product and vendor
- connectivity status
- telemetry values
- alarm state
- lifecycle status
- source system
- freshness
- service report facts

Intelligence interpretation may use GenAI when grounded in visible or auditable
facts.

Intelligence includes:

- explanation of a finding
- risk or opportunity synthesis
- recommendation wording
- proof gap explanation
- mitigation talking points
- phased action plan drafting
- customer-ready reformulation from grounded facts

Recommended flow:

```txt
Asset context
→ connectivity and source scope
→ raw Health or lifecycle facts
→ source scope and evidence strength
→ AI-assisted Intelligence explanation
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcome or value proof status
→ human validation when needed
```

Do not present AI interpretation as source-system truth.

---

## Value proof and AI

AI can help turn grounded service activity into customer-ready value language.

AI should not invent proof.

AI should not turn expected outcomes into proven value.

AI should not make internal operational evidence look customer-ready without
human validation.

Use AI for value proof when the user needs to:

- synthesize completed actions
- explain resolved risks
- prepare customer-ready proof points
- summarize recommendations reviewed or completed
- identify proof gaps
- draft QBR or renewal talking points
- reformulate internal service signals into customer-ready language

Use BI or source systems for the underlying facts:

- completed actions
- closed recommendations
- resolved risks
- monitoring coverage changes
- customer objectives
- measurable outcomes when available
- validated asset intervention outcomes
- completed lifecycle or modernization actions
- proof status
- customer-ready validation status

Good:

```txt
Visible facts: 4 recommendations completed, 2 risks resolved, proof summary still draft.
AI action: Prepare customer-ready renewal talking points.
Human role: CSM reviews and validates before customer communication.
```

Weak:

```txt
AI generated value proof without visible source facts.
```

If proof is incomplete, show the gap and create a follow-up action when
appropriate. Expected outcomes should remain labelled as expected until the
action has been completed and evidence is available.

---

## Human accountability on critical moments

AI can assist critical decisions, but it should not silently take responsibility
for them.

Human validation is required when the decision affects:

- customer commitment
- contract interpretation
- safety
- field intervention
- compliance
- pricing or commercial negotiation
- escalation
- service entitlement
- renewal mitigation
- customer-ready value proof
- expected outcome used in customer communication
- source-system correction
- asset intelligence recommendation
- lifecycle modernization recommendation
- non-connected critical asset follow-up
- customer communication with sensitive impact

For critical moments, generated screens should use language such as:

```txt
Review recommendation
Validate action
Confirm before sending
Human review required
```

Avoid language that implies the AI decides autonomously.

Bad:

```txt
AI approved the renewal action.
AI decided to escalate.
AI confirmed contract eligibility.
```

Better:

```txt
AI-assisted recommendation ready for CSM review.
CSM validates escalation before action is created.
Contract eligibility should be confirmed against the source system.
```

---

## Token discipline by design

GenAI tokens should be spent only on high-value moments.

Use GenAI for:

- explanation
- synthesis
- prioritization
- recommendation
- drafting
- role-based summaries
- customer-ready reformulation
- value proof synthesis
- mitigation talking points
- reasoning over unstructured notes

Do not spend GenAI tokens on:

- retrieving a customer name
- retrieving a contract number
- retrieving a renewal date
- retrieving an owner
- counting records
- listing contracts
- listing cases
- listing work orders
- showing statuses
- showing standard KPIs
- retrieving asset coverage
- retrieving monitoring freshness
- retrieving renewal status
- retrieving action ownership
- retrieving asset hierarchy
- retrieving telemetry values
- retrieving connectivity status
- retrieving lifecycle status
- retrieving source scope
- retrieving expected outcomes
- retrieving proven value
- answering repetitive structured questions

Basic facts should be retrieved through deterministic systems and displayed
through components.

---

## AI cost-control rules

Generated screens should avoid AI cost escalation by design.

Avoid:

- automatic summaries on every page load
- automatic AI calls on every navigation event
- sending large context to the model by default
- regenerating the same summary for every role without need
- using AI for repeated structured lookup questions
- turning a chatbot into a SQL interface
- asking users to rephrase the same structured question repeatedly

Prefer:

- explicit AI actions
- guided prompts
- user-triggered generation
- visible structured facts first
- limited context windows
- cached or precomputed summaries when appropriate
- deterministic retrieval for structured data
- AI only for the parts that need interpretation

---

## Source and proof rules

AI outputs should be grounded in known sources.

Generated screens should make the source of important facts visible or
traceable.

For critical AI outputs, show or reference:

- source systems
- dates
- statuses
- owners
- evidence items
- source scope
- asset scope
- connectivity status
- data source type
- source strength when relevant
- Health or Intelligence layer
- coverage limits
- proof status
- unresolved gaps
- confidence or review state when relevant
- human validation status when relevant

Do not generate AI outputs that appear precise but have no visible evidence.

Do not use confidence language as a substitute for source evidence.

Do not generate fake citations, fake source labels, invented asset facts,
invented telemetry, invented expected outcomes or invented proof.

If evidence is missing, the interface should say so and ask for review instead
of inventing certainty.

---

## Open questions and AI assumptions

Some AI-assisted patterns are research-informed but not fully validated.

Refer to:

```txt
knowledge/open-questions.md
knowledge/asset-intelligence.md
```

Open questions are especially important for:

- where AI assistance should appear in a decision screen
- what evidence is enough for a recommendation
- whether users distinguish Health data from Intelligence interpretation
- whether users distinguish expected outcomes from proven value
- how uncertainty should be displayed
- which value proof is customer-ready
- which patterns customers should see directly
- whether action fields are sufficient for follow-through

Do not present unresolved assumptions as product facts.

Do not generate UI copy that implies a pattern is fully validated when it is
still demo-ready or needs testing.

If needed, use neutral language such as:

```txt
AI-assisted draft for review.
Recommendation requires validation.
Proof summary is not customer-ready yet.
Evidence level should be confirmed before customer use.
```

---

## Autonomy levels

Clarify the level of AI autonomy in the generated experience.

Use these levels:

| Level | AI role | UI implication |
| --- | --- | --- |
| Inform | AI explains or summarizes information | User reads and interprets |
| Recommend | AI suggests next steps | User reviews before acting |
| Draft | AI prepares text or action content | User edits and validates |
| Assist execution | AI pre-fills or prepares workflow steps | User confirms before execution |
| Automate | AI executes without manual confirmation | Only for low-risk, governed flows with clear evidence and controls |

Default to lower autonomy when:

- data quality is uncertain
- customer impact is high
- contract interpretation is involved
- safety or field operations are involved
- compliance risk exists
- the recommendation cannot be clearly evidenced

Do not generate autonomous AI flows for critical decisions unless explicitly
specified and governed.

---

## Data quality and uncertainty

AI-generated screens should not hide data uncertainty.

If data may be incomplete, outdated, inconsistent, partial or inferred, the
interface should make that visible.

Good language:

```txt
Source data requires review.
Some contract fields are missing.
Connectivity status was last updated 18 hours ago.
Monitoring coverage is partial.
Proof summary still needs CSM validation.
Source scope: monitored Schneider assets only.
Asset is non-connected; current health is based on service history, not live telemetry.
Expected outcome is not proven yet.
Recommendation should be validated against the source system.
```

Avoid false certainty:

```txt
The customer will churn.
The contract is definitely at risk.
This is the correct owner.
The AI has confirmed the answer.
```

AI should help surface uncertainty, not cover it with confident language.

---

## Role of the UI

The UI should not only display AI output.

It should structure the AI usage.

Generated screens should define:

- what facts are visible first
- what AI action is available
- what output is produced
- what evidence supports it
- what the user can edit
- what the user must validate
- what action can be created next

Good AI-assisted pattern:

```txt
RenewalRiskSummary
→ ValueProofCard
→ AI action: Prepare renewal talking points
→ Evidence shown from visible fields and proof points
→ ActionList with mitigation actions
→ CreateActionDialog for user-validated action creation
```

---

## What belongs in BI

Keep these needs in BI, APIs, databases or source systems by default:

- account snapshot
- customer contacts
- internal stakeholders
- communication preferences
- contract portfolio
- contract due dates
- contract owner
- opportunity stages
- quotation status
- renewal tracker
- open cases
- work orders
- intervention status
- installed base
- asset hierarchy
- asset location
- product and vendor
- lifecycle status
- connectivity status
- telemetry values
- source scope
- coverage and entitlements
- monitoring freshness
- connected, partially connected and non-connected assets
- value proof source facts
- action ownership
- standard KPIs
- trends
- counts
- tables
- filters
- drill-downs

These needs require visibility, consistency, traceability and cost efficiency.

---

## What belongs in GenAI

Use GenAI when the value comes from interpretation, synthesis or language.

Good GenAI use cases:

- generate account summary
- summarize customer or site context
- prepare customer review
- explain renewal risk
- explain churn reason
- summarize case history
- synthesize notes and escalations
- prioritize follow-up actions
- prepare QBR talking points
- draft customer communication
- prepare customer-ready value proof summary
- identify proof gaps from visible facts
- explain asset intelligence findings from grounded Health data
- draft phased action plans from grounded recommendations
- explain expected outcomes without presenting them as proven value
- prepare mitigation talking points
- reformulate internal evidence for customer-facing use
- reformulate internal signals into customer-ready language

These tasks benefit from language understanding, synthesis, prioritization and
contextual explanation.

---

## What belongs in hybrid design

Use a hybrid design when the experience needs visible structured facts and AI
interpretation.

Hybrid pattern:

```txt
BI view first
→ AI action on top of visible context
→ AI output linked to evidence
→ user review
→ action creation or communication draft
```

Good hybrid use cases:

- account summary from visible account data
- customer review preparation from visible facts and notes
- renewal risk explanation from renewal signals
- case history summary from case tables and notes
- opportunity follow-up prioritization from visible opportunity lists
- value proof summary from completed actions and outcomes
- asset intelligence recommendation from visible Health data and source scope
- renewal mitigation planning from visible risk, proof and action data

Hybrid does not mean AI everywhere.

It means AI is used only for the part of the workflow where interpretation adds
value.

---

## Prompt quality should not carry the product

A product experience should not depend on every user writing a good prompt.

For frequent and important workflows, generate guided actions instead of an
empty prompt box.

Good:

```txt
Prepare customer review
Explain renewal risk
Draft follow-up email
Prioritize follow-up actions
```

Weak:

```txt
Ask anything about this customer
```

Prompt-first experiences can be useful for exploration, but they should not
replace designed workflows for repetitive, critical or structured tasks.

---

## Avoid over-chatbotization

Do not turn every product into a chatbot.

A chatbot is weak when the task is mainly:

- browsing structured data
- comparing many items
- filtering a portfolio
- checking operational status
- reviewing tables
- tracking KPIs
- following work orders
- checking owners and dates

A chatbot can be useful when the task is mainly:

- asking for explanation
- preparing a narrative
- summarizing unstructured context
- drafting a message
- exploring a complex situation

Prefer visible structured UI for repeated operational work.

Use conversational AI only when conversation is genuinely useful.

---

## Generated screen patterns

### Customer monitoring

Preferred pattern:

```txt
CustomerStatusCard
→ MetricGrid
→ ConnectivityCoverageCard when relevant
→ PriorityList
→ ActionList
→ CreateActionDialog
```

AI should support:

- summarizing the customer situation
- explaining priority risks
- preparing follow-up actions
- drafting customer communication

AI should not retrieve basic customer facts.

### Renewal risk review

Preferred pattern:

```txt
RenewalRiskSummary
→ ValueProofCard
→ MetricGrid
→ PriorityList
→ ActionList
→ CreateActionDialog
```

AI should support:

- explaining renewal risk
- preparing mitigation talking points
- summarizing proof gaps
- identifying mitigation actions from visible renewal signals
- drafting customer-ready follow-up

AI should not simply retrieve the renewal date or contract owner.

### Connectivity review

Preferred pattern:

```txt
ConnectivityCoverageCard
→ MetricGrid
→ PriorityList
→ ActionList
```

AI should support:

- explaining the impact of connectivity gaps
- explaining the limits of partial visibility
- prioritizing recovery actions
- preparing customer communication

AI should not simply count connected, partially connected or non-connected assets.

AI should not present non-connected assets as live-monitored.

### Value proof preparation

Preferred pattern:

```txt
ValueProofCard
→ MetricGrid
→ PriorityList
→ ActionList
```

AI should support:

- turning service outcomes into customer-ready language
- summarizing proof points
- preparing QBR talking points

AI should not invent proof points, expected outcomes, proven value or unsupported outcomes.

### Asset intelligence recommendation

Preferred pattern:

```txt
Asset context
→ connectivity and source scope
→ raw Health or lifecycle facts
→ source scope and evidence strength
→ Intelligence finding
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcome or value proof status
→ human validation
```

AI should support:

- explaining what the asset finding may mean
- connecting visible Health data to a risk or opportunity
- drafting a phased action plan
- explaining proof gaps
- preparing customer-ready language after facts are visible

AI should not retrieve asset hierarchy, telemetry, connectivity status,
lifecycle status or source scope.

AI should not present expected outcomes as proven value.

---

## Good AI-assisted example

```txt
User goal:
Prepare a renewal discussion.

UI:
Show RenewalRiskSummary, ValueProofCard and key metrics first.

AI action:
Prepare renewal talking points.

AI output:
A concise summary explaining the risk, proof gaps and recommended mitigation
steps.

Evidence:
Renewal window, value proof status, recommendations reviewed, overdue actions
and disconnected assets.

Human role:
CSM reviews, edits and validates before customer communication.
```

This is good because:

- facts are visible first
- AI adds interpretation
- evidence is available
- human validation remains explicit
- the AI output supports action

---

## Bad AI-assisted example

```txt
User goal:
Find the renewal date.

UI:
Open chatbot and ask: "When is this contract due?"

AI output:
The contract is due on Aug 5, 2026.
```

This is weak because:

- the need is structured retrieval
- the answer should come from the contract source system
- GenAI adds cost without adding value
- traceability is weaker
- the user should not need to prompt for a basic field

Better:

```txt
Display the renewal date directly in RenewalRiskSummary or CustomerStatusCard.
```

---

## Governance checklist for AI usage

Before accepting an AI-assisted generated screen, verify:

- the AI use case is tied to a real user task and documented user need when applicable
- visible facts appear before AI interpretation
- BI handles structured retrieval
- GenAI is reserved for synthesis, explanation, prioritization, recommendation or drafting
- AI is not used as a SQL engine replacement
- AI is not used for basic facts, dates, owners, statuses, counts or lists
- AI actions are guided when the workflow is frequent or important
- AI outputs are linked to visible or auditable evidence
- recommendations include supporting facts
- value proof is grounded in visible or auditable facts
- expected outcomes are labelled as expected until evidence proves them
- confidence language does not replace source evidence
- partial visibility is not hidden behind AI wording
- asset scope, connectivity status and source scope are visible when they affect trust
- raw Health data is separated from Intelligence interpretation when both are present
- non-connected assets are not presented as live-monitored
- expected outcomes are not presented as proven value
- open research questions are not presented as fully validated facts
- uncertainty is visible when data may be incomplete, partial, outdated, inferred or source strength is limited
- human validation is present for critical decisions
- autonomy level is appropriate to the risk
- token usage is justified by the value created
- context sent to the model is limited to what is needed
- generated copy does not overstate certainty
- the screen does not become a chatbot-first interface without reason
- the AI output helps the user decide or act

---

## Anti-patterns

Do not generate:

- GenAI as the default answer to every question
- chatbot-first interfaces for structured operational workflows
- GenAI used to retrieve customer names, dates, owners or statuses
- GenAI used to count records or list tables
- GenAI used to retrieve asset hierarchy, telemetry, connectivity status, lifecycle status or source scope
- GenAI used to invent asset facts or telemetry
- AI interpretation presented as source-system truth
- non-connected assets presented as live-monitored
- Health data and Intelligence interpretation mixed at the same visual level
- confidence language used as a substitute for source evidence
- embedded components presented as top-level assets unless component-level investigation is required
- expected outcomes presented as proven value
- internal operational evidence presented as customer-ready proof without human validation
- AI recommendations without evidence
- AI outputs that hide uncertainty
- AI decisions with no human validation on critical topics
- open prompt boxes as the main interface for frequent workflows
- automatic AI summaries on every page load
- large context sent to the model by default
- repeated AI generations for the same structured information
- AI-generated text that restates what is already visible in the UI
- fake citations, fake evidence, invented sources or invented value outcomes
- autonomous AI execution for critical customer, contract, safety or compliance decisions
- AI wording that hides partial visibility or unresolved proof gaps
- treating open research questions as fully validated product standards
- AI usage that adds cost without reducing effort or improving decisions

---

## Final principle

AI should be used where it creates meaningful assistance.

Use deterministic systems for facts, asset hierarchy, telemetry, connectivity,
lifecycle status and source scope.

Use BI for shared visibility.

Use GenAI for synthesis, explanation, prioritization, recommendation, proof gap
explanation, grounded action-plan drafting and reformulation.

Use humans for accountability on critical decisions.

The goal is not to add more AI.

The goal is to make AI useful, trustworthy, research-informed,
cost-disciplined and connected to the real service journey.
