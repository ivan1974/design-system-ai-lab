# Customer Monitoring Prompt

## Purpose

This file provides a ready-to-use Figma Make prompt for generating a customer
monitoring screen with the `design-system-ai-lab` package.

Use this prompt when the goal is to help a Customer Success Manager understand a
customer situation, identify priority risks and decide what to do next.

This prompt is aligned with the v0.2.0 Make-ready design system and should use
business patterns before low-level components.

It follows the shared prompt structure defined in:

```txt
prompts/template.md
```

---

## Screen intent

Generate a decision-oriented customer monitoring screen.

The screen should help the user answer:

1. What is the current customer situation?
2. Which signals, risks or visibility limits require attention?
3. What should be reviewed, recommended or assigned next?

Do not generate a generic analytics dashboard.

Do not generate a component gallery.

Do not generate a local design system.

Do not generate a chatbot-first interface for basic customer facts.

Do not rebuild business sections with raw `Card` or `div` wrappers when a
business pattern exists.

---

## Required package instruction

The generated project must use the published npm package:

```txt
design-system-ai-lab
```

Components must be imported from:

```txt
design-system-ai-lab
```

Styles must be imported from:

```txt
design-system-ai-lab/styles.css
```

Do not create a local package named `design-system-ai-lab`.

Do not create `packages/design-system-ai-lab`.

Do not recreate the design system components locally.

Do not create local wrappers for package components.

Do not import from `dist/`.

Do not import from `src/`.

Do not use internal package imports.

---

## Expected imports

Use this import pattern:

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  ConnectivityCoverageCard,
  CreateActionDialog,
  CustomerStatusCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  ServiceRiskSummary,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";
```

Use only the imports that are actually needed in the generated screen, but import
all components from the package root.

---

## Primary prompt

Use this prompt for the first customer monitoring screen generation:

```txt
Create a complete visible desktop customer monitoring screen in App.tsx.

Use the npm package design-system-ai-lab.

Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Expected imports:

import {
  ActionCard,
  ActionList,
  AlertCard,
  ConnectivityCoverageCard,
  CreateActionDialog,
  CustomerStatusCard,
  MetricCard,
  MetricGrid,
  PageHeader,
  PriorityList,
  ServiceRiskSummary,
} from "design-system-ai-lab";

import "design-system-ai-lab/styles.css";

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate the design system components.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.
Do not use internal package imports.
Do not leave App.tsx empty.

Use business patterns before low-level components when a pattern fits the section intent.

Follow these principles:
- accessibility principles
- eco-design principles
- AI usage principles
- evidence and trust principles

User role:
Customer Success Manager.

User goal:
Help the Customer Success Manager understand the customer situation, identify priority risks and decide the next best actions.

Screen pattern:
Customer monitoring screen.

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action.
2. CustomerStatusCard with customer, plan, contract, owner, renewal date, customer objective, coverage, source context and validation status.
3. MetricGrid with three decision-relevant MetricCard items.
4. ConnectivityCoverageCard for monitoring coverage, visibility limits, affected scope and freshness.
5. ServiceRiskSummary for the main service risk when the monitoring gap affects customer communication or service follow-up.
6. PriorityList with AlertCard items sorted by severity.
7. ActionList with ActionCard items for assigned next steps.

Required components and patterns:
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

Content requirements:
- Use CustomerStatusCard for customer context.
- Use MetricGrid with MetricCard items for key decision signals.
- Use ConnectivityCoverageCard for coverage and monitoring visibility limits.
- Use ServiceRiskSummary before PriorityList when the risk needs synthesis.
- Use PriorityList with AlertCard items for priority risks and blockers.
- Use ActionList with ActionCard items for assigned internal actions.
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts.
- Every action must include owner, due date and priority.
- Metrics must include helper text explaining why they matter.
- Critical alerts should appear before warning and info alerts.
- High-priority actions should appear before medium and low-priority actions.
- Button labels must be explicit and action-oriented.
- Do not duplicate customer context across sections.
- Do not invent proof points, evidence, sources, citations or customer facts.
- The screen must help answer: what is happening, why it matters and what to do next.

AI usage constraints:
- Do not use GenAI to retrieve basic customer facts.
- Assume structured customer data comes from APIs, BI tools, databases or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation.
- Show visible facts before any AI-assisted interpretation.
- Do not use GenAI as a SQL engine replacement.
- Do not spend GenAI tokens on customer name, plan, contract, renewal date, owner, status, counts, lists or standard KPIs.
- Do not claim AI validation.
- Do not claim automatic approval.
- Do not present AI confidence as source strength, validation status or proof readiness.

Evidence and trust constraints:
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
- Use display components, not disabled form fields, for display-only facts.

Suggested customer context:
- Customer: Northstar Manufacturing
- Plan: Advanced service plan
- Contract: #NS-2024-118
- Owner: Sarah Moreau, CSM
- Coverage: 25 monitored assets across 3 sites
- Renewal: 90 days
- Customer objective: improve service visibility before renewal
- Source context: Schneider monitored assets only
- Validation status: review before customer communication
- Status badges: active plan, partial connectivity, renewal watch, review needed

Suggested metrics:
- Connected equipment: 68%, helper: 17 connected assets out of 25, trend: +8% this quarter, trend tone: success
- Open critical alerts: 3, helper: 2 require customer follow-up, trend: +2 this week, trend tone: danger
- Overdue actions: 4, helper: action plan should be reviewed this week, trend: +3 since last review, trend tone: warning

Suggested connectivity coverage:
- Coverage rate: 68%
- Connected assets: 17 assets
- Disconnected assets: 8 assets
- Critical disconnected assets: 2 critical assets
- Monitoring status: Partial monitoring coverage
- Affected scope: Main site and backup power system
- Last update: 18 hours ago
- Source context: Monitoring platform and known installed base
- Source strength: partial
- Validation status: review before customer communication
- Badges: Connectivity partial, Critical assets disconnected, Source partial

Suggested service risk summary:
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

Suggested alerts:
- Critical: Connectivity loss on critical equipment, scope: Main switchboard, description: Two critical assets are no longer monitored and visibility is partial, recommendation: plan a connectivity review with the customer and support team.
- Warning: Customer has not reviewed latest recommendations, scope: Customer portal, description: The latest recommendations have not been reviewed by the customer team, recommendation: prepare a short recommendation review for the next customer touchpoint.
- Warning: Three high-priority actions are overdue, scope: Service action plan, description: Overdue actions reduce confidence in the service follow-up, recommendation: assign owners and review action status this week.

Suggested actions:
- Plan connectivity review with the customer, owner: CSM, due date: this week, priority: high, status: todo, context: customer communication needed before next touchpoint, source context: monitoring platform and known installed base, validation status: review before customer communication
- Review overdue actions with service team, owner: Service Manager, due date: next 3 business days, priority: high, status: in_progress, context: overdue actions affect customer confidence
- Prepare summary for next customer touchpoint, owner: CSM, due date: before next meeting, priority: medium, status: todo, context: summarize facts, visibility limits and recommended next steps

Visual constraints:
- B2B
- sober
- readable
- structured
- evidence-aware
- no gradients
- no glassmorphism
- no decorative charts
- no decorative hero sections
- no generic SaaS dashboard
- no custom design system components
- no visual styling that hides uncertainty

Acceptance criteria:
- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local package is created.
- No local design system components are recreated.
- No local wrappers for package components are created.
- No internal package imports are used.
- The screen includes PageHeader, CreateActionDialog, CustomerStatusCard, MetricGrid, MetricCard, ConnectivityCoverageCard, ServiceRiskSummary, PriorityList, AlertCard, ActionList and ActionCard.
- Business patterns are used when they match the section intent.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- Visible customer facts appear before risks and actions.
- Source context, source strength, freshness or validation status is visible when trust matters.
- Every alert includes a recommendation.
- Every important recommendation is supported by visible facts.
- Every action includes owner, due date and priority.
- The primary action is clear.
- The screen does not claim AI validation or automatic approval.
- The screen does not present expected outcomes as proven value.
- The screen helps answer what is happening, why it matters and what to do next.
```

---

## Short prompt

Use this shorter version when the Make kit already contains the guidelines:

```txt
Create a complete visible customer monitoring screen in App.tsx using design-system-ai-lab.

Use imports from design-system-ai-lab and import design-system-ai-lab/styles.css.

Do not create a local package, local wrappers, internal imports or recreate the design system components.

Use business patterns before low-level components when a pattern fits the section intent.

Follow accessibility, eco-design, AI usage, and evidence and trust principles.

User role: Customer Success Manager.
User goal: understand the customer situation, identify priority risks and decide next actions.

Use this structure:
1. PageHeader with CreateActionDialog as primary action
2. CustomerStatusCard for customer, plan, contract, owner, renewal date, customer objective, coverage, source context and validation status
3. MetricGrid with three MetricCard items
4. ConnectivityCoverageCard for monitoring coverage, visibility limits and freshness
5. ServiceRiskSummary for the main service risk when the monitoring gap affects customer communication
6. PriorityList with AlertCard items sorted by severity
7. ActionList with ActionCard items for assigned next actions

Every alert must include a recommendation.
Every important recommendation must be supported by visible facts.
Every action must include owner, due date and priority.
Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not use GenAI to retrieve basic customer facts.
Do not invent proof points, evidence, sources or citations.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Keep the screen sober, B2B, evidence-aware and decision-oriented.
```

---

## Correction prompt — local components were created

Use this if Make creates local components or a local package:

```txt
Revise the project.

Use the published npm package design-system-ai-lab directly.

Do not create or use packages/design-system-ai-lab.
Do not recreate PageHeader, Card, MetricCard, MetricGrid, AlertCard, PriorityList, ActionCard, ActionList, Badge, Button, Dialog, Field, Input, Label, Select, Textarea, StatusSummary, RecommendationCard, CreateActionDialog or business patterns.
Do not use local components such as ./components/ui/button or ./components/ui/card.
Do not create local wrappers for package components.
Do not import from dist/.
Do not import from src/.

Update App.tsx to import all design system components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Remove any local design system components that duplicate the package API.

Use business patterns when they match the section intent.
Use form components instead of inline-styled raw inputs.
Follow accessibility, eco-design, AI usage, and evidence and trust principles.
Use BI-first, AI-assisted logic when AI is relevant.
Show visible facts before interpretation.
Do not invent proof points, evidence, sources or citations.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.

The result must render a complete visible customer monitoring screen in App.tsx.
```

---

## Correction prompt — App.tsx is empty

Use this if Make installs packages but does not render a screen:

```txt
Revise App.tsx.

App.tsx must render a complete visible desktop customer monitoring screen.

Use components imported from design-system-ai-lab.
Use the existing package CSS from design-system-ai-lab/styles.css.

Create a customer monitoring screen for a Customer Success Manager.

The screen must include:
- PageHeader
- CreateActionDialog
- CustomerStatusCard
- MetricGrid with MetricCard items
- ConnectivityCoverageCard
- ServiceRiskSummary
- PriorityList with AlertCard items
- ActionList with ActionCard items

Follow accessibility, eco-design, AI usage, and evidence and trust principles.
Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not invent proof points, evidence, sources or citations.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.

Do not stop after package setup.
Generate the visible interface now.
```

---

## Correction prompt — screen is too generic

Use this if the generated screen looks like a generic dashboard:

```txt
Revise the screen to make it more decision-oriented and evidence-aware.

Do not generate a generic dashboard.

The screen should help a Customer Success Manager answer:
1. What is happening with this customer?
2. Why does it matter?
3. What should I do next?

Replace generic cards, charts or raw div sections with:
- CustomerStatusCard for customer context
- MetricGrid with three decision-relevant MetricCard items
- ConnectivityCoverageCard for monitoring coverage, visibility limits and freshness
- ServiceRiskSummary for service risk overview when the monitoring gap affects customer communication
- PriorityList with AlertCard items sorted by severity
- ActionList with ActionCard items for recommended next steps
- CreateActionDialog for action creation

Every alert must include a recommendation.
Every important recommendation must be supported by visible facts.
Every action must include owner, due date and priority.
Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not invent proof points, evidence, sources or citations.
Do not use GenAI to retrieve basic customer facts.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.

Keep the visual style sober, B2B and operational.
```

---

## Expected screen sections

A strong customer monitoring screen should include these sections.

### Page header

Recommended title:

```txt
Customer monitoring
```

Recommended description:

```txt
Understand customer status, service risks and next actions.
```

Recommended primary action:

```txt
Create action
```

Use `CreateActionDialog` for the primary action.

---

### Customer status

Use `CustomerStatusCard` for customer status.

The customer status section should include:

- customer name
- plan or contract status
- owner or CSM
- customer objective
- monitoring coverage
- renewal timing
- source context when source scope affects trust
- validation status when customer communication may rely on the content
- concise operational status
- badges for status and risk

Recommended badges:

```txt
Active plan
Connectivity partial
Renewal in 90 days
Review needed
```

Do not rebuild customer context with a generic `Card` or `StatusSummary` when
`CustomerStatusCard` fits.

---

### Metrics

Use `MetricGrid` with `MetricCard` items.

Use three metrics by default.

Recommended metrics:

```txt
Connected equipment
Open critical alerts
Overdue actions
```

Each metric should include helper text.

Use trend tone only when the direction and interpretation are clear.

Do not generate metrics without interpretation.

Do not generate more metrics just to fill space.

---

### Connectivity coverage

Use `ConnectivityCoverageCard` when monitoring coverage matters.

The connectivity coverage section should include:

- coverage rate
- connected assets
- disconnected assets
- critical disconnected assets when relevant
- monitoring status
- affected scope
- last update
- source context when source scope affects trust
- source strength when evidence is partial or incomplete
- validation status when customer communication depends on this information
- concise connectivity badges

Show freshness when monitoring data may be outdated or operationally sensitive.

---

### Service risk summary

Use `ServiceRiskSummary` when the monitoring gap creates a service risk or
customer communication risk.

The service risk summary should include:

- risk level
- risk summary
- affected scope
- customer impact
- service impact
- source context
- source strength when relevant
- freshness when timing affects trust
- validation status before customer communication
- recommended review focus

Do not replace `PriorityList` with `ServiceRiskSummary`.

Use the summary to frame the risk, then use `PriorityList` for detailed risks or
blockers.

---

### Alerts

Use `PriorityList` with `AlertCard` items.

Alerts should be sorted by severity.

Use `critical` first, then `warning`, then `info`.

Each alert must include:

- severity
- title
- scope or equipment
- description
- recommendation
- evidence summary when useful
- source context when trust matters
- validation status when customer use is possible

Important recommendations should be supported by the alert description or visible
context shown earlier on the screen.

Do not generate alerts without recommendations.

Do not make unsupported claims about customer risk.

---

### Actions

Use `ActionList` with `ActionCard` items.

Recommended actions should be concrete.

Each action must include:

- title
- owner
- due date
- priority
- status when useful
- context when the reason for the action is not obvious
- source context when the action depends on evidence review
- validation status when customer communication is involved

High-priority actions should appear first.

Actions should follow from visible customer context, risks or recommendations.

Remember: `ActionCard` is for assigned internal work, not customer-facing
recommendation rationale.

---

### Action creation

Use `CreateActionDialog` for a short action creation flow.

The trigger should be:

```txt
Create action
```

Do not rebuild the action creation dialog manually when `CreateActionDialog`
fits.

Do not place raw form fields directly inside `ActionList`.

Use contextual fields only when the action is trust-sensitive.

Simple action creation should remain focused and not show all contextual fields
by default.

---

## AI usage guidance

Customer monitoring screens should be BI-first and AI-assisted only when AI adds
clear value.

Use GenAI for:

- summarizing the customer situation
- explaining why an alert matters
- prioritizing follow-up actions
- drafting a customer follow-up message
- preparing a customer-ready service summary after review

Do not use GenAI for:

- retrieving the customer name
- retrieving the plan
- retrieving the contract
- retrieving the renewal date
- retrieving the owner
- counting connected assets
- listing alerts
- showing standard KPIs
- validating recommendations automatically
- proving value automatically

Structured data should come from APIs, BI tools, databases or source systems and
be displayed directly through components and patterns.

---

## Evidence and trust guidance

Customer monitoring screens should make trust visible.

Use this flow:

```txt
Observed facts
→ interpreted signals
→ recommendations
→ human-validated actions
```

Useful trust cues:

- source context
- source strength
- last update
- monitoring status
- validation status
- owner visibility
- recommendation evidence
- clear action ownership

Do not invent evidence, proof points, sources or citations.

Do not make false certainty claims when data may be incomplete, outdated or
inferred.

Do not claim AI validation or automatic approval.

Do not present expected outcomes as proven value.

---

## Review checklist

After generation, verify:

- the screen imports components from `design-system-ai-lab`
- the screen imports `design-system-ai-lab/styles.css`
- no local design system components were created
- no local wrappers for package components were created
- no internal package import is used
- the screen follows accessibility principles
- the screen follows eco-design principles
- the screen follows AI usage principles when AI is present
- the screen follows evidence and trust principles
- the screen has one clear `PageHeader`
- `CreateActionDialog` is used for action creation
- `CustomerStatusCard` is used for customer context
- customer context is visible before metrics, risks and actions
- `MetricGrid` is used for metrics
- there are three or fewer metrics by default
- metrics include helper text
- `ConnectivityCoverageCard` is used when monitoring coverage matters
- `ServiceRiskSummary` is used when the monitoring gap creates service or customer communication risk
- freshness, source context, source strength or validation status is visible when data may be outdated, partial or uncertain
- `PriorityList` is used for alerts
- alerts are sorted by severity
- every alert includes a recommendation
- important recommendations are supported by visible facts
- `ActionList` is used for actions
- actions are concrete
- every action includes owner, due date and priority
- GenAI is not used for basic customer data retrieval
- no invented proof points, evidence, sources or citations are present
- no AI validation or automatic approval is claimed
- expected outcomes are not presented as proven value
- the primary action is obvious
- the screen remains sober and B2B
- the screen does not look like a generic analytics dashboard

---

## Final principle

A customer monitoring prompt should generate a screen that supports customer
follow-up decisions.

If the result only displays data without helping the user decide what to do next,
revise the prompt or the generated screen.
