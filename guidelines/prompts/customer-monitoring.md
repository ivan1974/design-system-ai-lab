# Customer Monitoring Prompt

## Purpose

This file provides a ready-to-use Figma Make prompt for generating a customer
monitoring screen with the `design-system-ai-lab` package.

Use this prompt when the goal is to help a Customer Success Manager understand a
customer situation, identify priority service risks and decide what to do next.

This prompt follows the shared structure defined in:

```txt
prompts/template.md
```

It should generate a complete visible screen in `App.tsx`.

It should not generate a generic dashboard, component gallery, chatbot-first
screen or local design system.

---

## Screen intent

Generate a decision-oriented customer monitoring screen.

The screen should help the user answer:

1. What is the current customer situation?
2. Which signals, risks or visibility limits require attention?
3. What should be reviewed, recommended or assigned next?

The primary decision is:

```txt
Decide which service risks need action before the next customer touchpoint.
```

---

## Primary prompt

Use this prompt for the first customer monitoring screen generation.

```txt
# Customer Monitoring Prompt

## Purpose

Create a complete visible desktop customer monitoring screen in App.tsx.

The screen should help a Customer Success Manager decide which service risks need action before the next customer touchpoint.

## Required Make kit context

Read and follow:
- Guidelines.md
- setup.md
- tokens.md
- styles.md

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.
Do not use internal package imports.
Do not leave App.tsx empty.

## User role

Customer Success Manager.

## User decision

Decide which service risks need action before the next customer touchpoint.

## Screen intent

Customer monitoring.

Generate a decision-oriented customer monitoring screen.
Do not generate a generic analytics dashboard.
Do not generate a component gallery.
Do not generate a chatbot-first interface for basic customer facts.
Do not include every available business pattern by default.

## Required components and patterns

Use business patterns before low-level components when a pattern fits the section intent.

Required:
- PageHeader
- CreateActionDialog
- CustomerStatusCard
- MetricGrid
- MetricCard
- ConnectivityCoverageCard
- ServiceRiskSummary
- PriorityList
- AlertCard
- ActionList
- ActionCard

Do not manually rebuild customer context, connectivity coverage, risk summaries, priority risks or action lists with raw Card, div, dt or dd markup when a dedicated pattern exists.

## Screen structure

1. PageHeader with title, description and CreateActionDialog as the primary action.
2. CustomerStatusCard for customer, plan, contract, owner, renewal date, customer objective, coverage, source context and validation status.
3. MetricGrid with 3 decision-relevant MetricCard items.
4. ConnectivityCoverageCard for monitoring coverage, visibility limits, affected scope and freshness.
5. ServiceRiskSummary for the main service risk when the monitoring gap affects customer communication or service follow-up.
6. PriorityList with 2 to 4 AlertCard items sorted by severity or business impact.
7. ActionList with 2 to 4 ActionCard items for assigned next steps.

The screen should follow this flow:

Context
→ decision signals
→ monitoring visibility limits
→ service risk synthesis
→ priority risks
→ owned actions

## Content requirements

- Use CustomerStatusCard for customer context.
- Use MetricGrid with MetricCard items for key decision signals.
- Use ConnectivityCoverageCard for coverage and monitoring visibility limits.
- Use ServiceRiskSummary before PriorityList when the risk needs synthesis.
- Use PriorityList with AlertCard items for priority risks and blockers.
- Use ActionList with ActionCard items for assigned internal actions.
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts or context.
- Every action must include owner, due date and priority.
- Metrics must include helper text explaining why they matter.
- Critical risks should appear before warning and neutral informational items.
- High-priority actions should appear before medium and low-priority actions.
- Button labels must be explicit and action-oriented.
- Do not duplicate customer context across sections.
- Do not invent proof points, evidence, sources, citations, asset facts or customer facts.
- The screen must help answer: what is happening, why it matters and what to do next.

## Suggested content

Use this sample content to make the generated screen concrete.

Customer context:
- Customer: Northstar Manufacturing
- Plan: Advanced service plan
- Contract: #NS-2024-118
- Owner: Sarah Moreau, CSM
- Coverage: 25 monitored assets across 3 sites
- Renewal: 90 days
- Customer objective: improve service visibility before renewal
- Source context: Schneider monitored assets only
- Source strength: partial
- Validation status: review before customer communication
- Status badges: Active plan, Connectivity partial, Renewal watch, Review needed

Metrics:
- Connected equipment: 68%, helper: 17 connected assets out of 25, trend: +8% this quarter, trend tone: success
- Open critical alerts: 3, helper: 2 require customer follow-up, trend: +2 this week, trend tone: danger
- Overdue actions: 4, helper: action plan should be reviewed this week, trend: +3 since last review, trend tone: warning

Connectivity coverage:
- Coverage rate: 68%
- Connected assets: 17 assets
- Disconnected assets: 8 assets
- Critical disconnected assets: 2 critical assets
- Monitoring status: Partial monitoring coverage
- Affected scope: Main site and backup power system
- Last update: 18 hours ago
- Source context: Monitoring platform and known installed base
- Source scope: Schneider monitored assets only
- Source strength: partial
- Validation status: review before customer communication
- Badges: Connectivity partial, Critical assets disconnected, Source strength: partial

Service risk summary:
- Risk level: critical
- Risk summary: Critical assets are no longer monitored before the next customer touchpoint.
- Affected scope: Main site and backup power system
- Customer impact: Customer visibility is reduced for critical power assets.
- Service impact: Remote monitoring and proactive support are limited.
- Source context: Monitoring platform and known installed base
- Source strength: partial
- Freshness: Last update 18 hours ago
- Validation status: Review before customer communication
- Recommended review: Review connectivity recovery and customer communication before the next customer meeting.

Alerts:
- Critical: Connectivity loss on critical equipment, scope: Main switchboard, description: Two critical assets are no longer monitored and visibility is partial, recommendation: plan a connectivity review with the customer and support team.
- Warning: Customer has not reviewed latest recommendations, scope: Customer portal, description: The latest recommendations have not been reviewed by the customer team, recommendation: prepare a short recommendation review for the next customer touchpoint.
- Warning: Three high-priority actions are overdue, scope: Service action plan, description: Overdue actions reduce confidence in the service follow-up, recommendation: assign owners and review action status this week.

Actions:
- Plan connectivity review with the customer, owner: CSM, due date: this week, priority: high, status: todo, context: customer communication needed before next touchpoint, validation status: review before customer communication.
- Review overdue actions with service team, owner: Service Manager, due date: next 3 business days, priority: high, status: in progress, context: overdue actions affect customer confidence.
- Prepare summary for next customer touchpoint, owner: CSM, due date: before next meeting, priority: medium, status: todo, context: summarize facts, visibility limits and recommended next steps.

## AI usage constraints

Use BI-first, AI-assisted logic.

- Do not use GenAI to retrieve basic customer facts.
- Assume structured customer data comes from APIs, BI tools, databases or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation.
- Show visible facts before any AI-assisted interpretation.
- Do not use GenAI as a SQL engine replacement.
- Do not spend GenAI tokens on customer name, plan, contract, renewal date, owner, status, counts, lists or standard KPIs.
- Do not claim AI validation.
- Do not claim automatic approval.
- Do not present AI confidence as source strength, validation status or proof readiness.

## Evidence and trust constraints

- Show visible facts before interpretation.
- Distinguish facts, signals, recommendations and actions.
- Every important recommendation must be supported by visible or auditable evidence.
- Show source context when source scope affects trust.
- Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
- Show freshness when monitoring data may be outdated or operationally sensitive.
- Show validation status when content may be used for customer, contract or service decisions.
- Do not invent proof points, evidence, sources or citations.
- Do not create false certainty when data may be incomplete, outdated or inferred.
- Keep human validation visible for critical customer, contract or service decisions.
- Do not claim AI validation or automatic approval.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Do not present non-connected assets as live-monitored.
- Use display components, not disabled form fields, for display-only facts.

## Asset visibility constraints

This screen includes monitoring coverage and asset visibility, but it is not a full asset intelligence review screen.

- Use ConnectivityCoverageCard for monitoring visibility limits.
- Do not use AssetIntelligenceSummary unless the prompt is explicitly expanded into asset recommendation review.
- Do not present partial monitoring coverage as complete asset knowledge.
- Do not present non-connected assets as live-monitored.
- Show source scope, source strength and freshness when visibility affects trust.

## Visual constraints

- B2B
- sober
- readable
- structured
- action-oriented
- evidence-aware
- no gradients
- no glassmorphism
- no decorative charts
- no decorative hero sections
- no generic SaaS dashboard
- no custom design system components
- no visual styling that hides uncertainty

Use tokens and styles from design-system-ai-lab/styles.css.
Use the official --ec-* token namespace when manual token usage is needed.
Use only approved Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".

## Output requirement

Generate a complete visible desktop screen in App.tsx.
Do not leave App.tsx empty.
Do not generate only setup code.
Do not generate a local component library.
Use package components and patterns directly.

## Acceptance criteria

- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local package is created.
- No local design system components are recreated.
- No local wrappers for package components are created.
- No internal package imports are used.
- The screen includes PageHeader, CreateActionDialog, CustomerStatusCard, MetricGrid, MetricCard, ConnectivityCoverageCard, ServiceRiskSummary, PriorityList, AlertCard, ActionList and ActionCard.
- Business patterns are used when they match the section intent.
- Form components are used for form fields if forms are generated.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- Visible customer facts appear before risks and actions.
- Source context, source strength, freshness or validation status is visible when trust matters.
- Every alert includes a recommendation.
- Every important recommendation is supported by visible facts or context.
- Every action includes owner, due date and priority.
- Badge tones use only neutral, primary, success, warning or danger.
- No Badge uses tone="info".
- The primary action is clear.
- The screen does not claim AI validation or automatic approval.
- The screen does not present expected outcomes as proven value.
- The screen does not present non-connected assets as live-monitored.
- The screen helps answer what is happening, why it matters and what to do next.
```

---

## Short prompt

Use this shorter version when Figma Make has already loaded the Make kit files.

```txt
Create a complete visible customer monitoring screen in App.tsx using design-system-ai-lab.

Read and follow Guidelines.md, setup.md, tokens.md and styles.md.

Use imports from design-system-ai-lab and import design-system-ai-lab/styles.css.

Do not create a local package, local wrappers, internal imports or recreate design system components.

User role: Customer Success Manager.
User decision: decide which service risks need action before the next customer touchpoint.

Use this structure:
1. PageHeader with CreateActionDialog as primary action.
2. CustomerStatusCard for customer, plan, contract, owner, renewal date, customer objective, coverage, source context and validation status.
3. MetricGrid with three MetricCard items.
4. ConnectivityCoverageCard for monitoring coverage, visibility limits, affected scope and freshness.
5. ServiceRiskSummary for the main service risk when monitoring gaps affect customer communication.
6. PriorityList with AlertCard items sorted by severity or business impact.
7. ActionList with ActionCard items for assigned next actions.

Every alert must include a recommendation.
Every important recommendation must be supported by visible facts or context.
Every action must include owner, due date and priority.
Metrics must include helper text explaining why they matter.
Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not use GenAI to retrieve basic customer facts.
Do not invent proof points, evidence, sources, citations, asset facts or customer facts.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present non-connected assets as live-monitored.
Keep the screen sober, B2B, readable, evidence-aware and decision-oriented.
Use only approved Badge tones: neutral, primary, success, warning and danger.
Do not use tone="info".
```

---

## Correction prompt — local components were created

Use this if Make creates local components or a local package.

```txt
Revise the generated screen.

Use the published npm package design-system-ai-lab directly.
Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from dist/ or src/.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Keep the same customer monitoring screen intent.
Use PageHeader, CreateActionDialog, CustomerStatusCard, MetricGrid, MetricCard, ConnectivityCoverageCard, ServiceRiskSummary, PriorityList, AlertCard, ActionList and ActionCard from the package.

Update App.tsx so it renders a complete visible screen using package imports.
```

---

## Correction prompt — generic dashboard was generated

Use this if Make generates a generic dashboard instead of a decision-oriented
customer monitoring screen.

```txt
Revise the generated screen.

It is too generic and dashboard-like.

Keep one primary user decision:
Decide which service risks need action before the next customer touchpoint.

Use this structure instead:
1. PageHeader with CreateActionDialog as primary action.
2. CustomerStatusCard for customer context.
3. MetricGrid with three decision-relevant MetricCard items.
4. ConnectivityCoverageCard for monitoring coverage and visibility limits.
5. ServiceRiskSummary for the main service risk.
6. PriorityList with AlertCard items sorted by severity or business impact.
7. ActionList with ActionCard items for assigned next actions.

Remove decorative charts, generic cards, decorative hero sections and unsupported metrics.
Every alert must include a recommendation.
Every action must include owner, due date and priority.
Do not invent evidence, sources, citations, asset facts or value proof.
```

---

## Correction prompt — trust or evidence is missing

Use this if Make generates recommendations without enough supporting context.

```txt
Revise the generated screen.

The screen needs stronger evidence and trust cues.

Show visible facts before interpretation.
Show source context when source scope affects trust.
Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
Show freshness when monitoring data may be outdated or operationally sensitive.
Show validation status when content may be used for customer, contract or service decisions.
Do not invent proof points, evidence, sources, citations, asset facts or customer facts.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present non-connected assets as live-monitored.

Keep the customer monitoring structure and package components.
```

---

## Final principle

This prompt should generate a focused customer monitoring screen, not a generic
dashboard.

The output should help a CSM understand the customer situation, trust the visible
signals, identify priority service risks and assign the next actions.
