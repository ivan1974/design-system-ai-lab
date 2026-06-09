# Renewal Risk Review Prompt

## Purpose

This file provides a ready-to-use Figma Make prompt for generating a renewal risk
review screen with the `design-system-ai-lab` package.

Use this prompt when the goal is to help a Customer Success Manager or Renewal
Manager understand renewal exposure, identify missing value proof, review
recommendation readiness and launch mitigation actions before a renewal
discussion.

This prompt follows the shared structure defined in:

```txt
prompts/template.md
```

It should generate a complete visible screen in `App.tsx`.

It should not generate a generic dashboard, financial reporting page, component
gallery, chatbot-first screen or local design system.

---

## Screen intent

Generate a decision-oriented renewal risk review screen.

The screen should help the user answer:

1. What is the renewal situation?
2. Why might the renewal be at risk?
3. Is the customer discussion ready?
4. What value proof is missing or not customer-ready?
5. Which recommendations need review before customer use?
6. What mitigation action is needed next?

The primary decision is:

```txt
Decide which renewal blockers require mitigation before the renewal discussion.
```

---

## Primary prompt

Use this prompt for the first renewal risk review screen generation.

```txt
# Renewal Risk Review Prompt

## Purpose

Create a complete visible desktop renewal risk review screen in App.tsx.

The screen should help a Customer Success Manager or Renewal Manager decide which renewal blockers require mitigation before the renewal discussion.

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

Customer Success Manager or Renewal Manager.

## User decision

Decide which renewal blockers require mitigation before the renewal discussion.

## Screen intent

Renewal risk review.

Generate a decision-oriented renewal risk review screen.
Do not generate a generic analytics dashboard.
Do not generate a financial reporting page.
Do not generate a component gallery.
Do not generate a chatbot-first interface for basic renewal facts.
Do not include every available business pattern by default.

## Required components and patterns

Use business patterns before low-level components when a pattern fits the section intent.

Required:
- PageHeader
- CreateActionDialog
- RenewalRiskSummary
- CustomerReviewReadinessCard
- ValueProofCard
- MetricGrid
- MetricCard
- PriorityList
- AlertCard
- RecommendationReviewPanel
- RecommendationCard
- ActionList
- ActionCard

Do not manually rebuild renewal context, customer review readiness, value proof, recommendation review, priority risks or action lists with raw Card, div, dt or dd markup when a dedicated pattern exists.

## Screen structure

1. PageHeader with title, description and CreateActionDialog for mitigation action creation.
2. RenewalRiskSummary with customer, renewal window, readiness, value proof status, recommendations reviewed, overdue actions, renewal risk reason, proof readiness, validation status and source context.
3. CustomerReviewReadinessCard for customer discussion readiness, proof readiness, recommendation readiness, risk status, action readiness and validation status.
4. ValueProofCard with period, customer objective, proof status, proof readiness, validation status, source context, expected outcome and grounded proof points.
5. MetricGrid with 3 decision-relevant MetricCard items.
6. PriorityList with 2 to 4 AlertCard items for renewal blockers sorted by severity or business impact.
7. RecommendationReviewPanel with 2 to 3 RecommendationCard items when recommendations need review before customer use.
8. ActionList with 2 to 4 ActionCard items for mitigation actions.

The screen should follow this flow:

Renewal context
→ review readiness
→ value proof status
→ decision signals
→ renewal blockers
→ recommendation review
→ mitigation actions

## Content requirements

- Use RenewalRiskSummary for renewal context.
- Use CustomerReviewReadinessCard when customer discussion readiness matters.
- Use ValueProofCard for proof readiness, proof points and proof gaps.
- Use RecommendationReviewPanel with RecommendationCard items when recommendations need review.
- Use PriorityList with AlertCard items for renewal blockers.
- Use ActionList with ActionCard items for assigned mitigation actions.
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts or context.
- Every RecommendationCard should include priority, readiness, rationale, scope and evidence.
- Every action must include owner, due date and priority.
- Metrics must include helper text explaining why they matter.
- Critical renewal risks should appear before warning and neutral informational risks.
- High-priority mitigation actions should appear before medium and low-priority actions.
- Button labels must be explicit and action-oriented.
- Value proof points must be grounded in completed actions, resolved risks, reviewed recommendations or measurable outcomes.
- Distinguish completed service activity from customer-ready proof.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Do not duplicate renewal, proof or recommendation context across sections.
- Do not invent proof points, evidence, sources, citations, asset facts or customer facts.
- The screen must help answer: what is happening, why it matters and what to do next.

## Suggested content

Use this sample content to make the generated screen concrete.

Renewal context:
- Customer: Northstar Manufacturing
- Plan: Advanced service plan
- Contract: #NS-2024-118
- Renewal date: Sep 15, 2026
- Renewal window: 90 days
- Renewal readiness: Medium
- Value proof status: Incomplete
- Recommendations reviewed: 5 of 12
- Overdue actions: 4 mitigation actions
- Renewal risk reason: value proof is incomplete and mitigation actions are overdue
- Customer objective: improve service visibility before renewal
- Proof readiness: internal proof, not customer-ready
- Validation status: proof review needed before customer use
- Source context: closed service actions and recommendation history from the last 90 days
- Status badges: Active plan, Renewal in 90 days, Value proof incomplete, Proof review needed

Customer review readiness:
- Review type: Renewal discussion
- Review date: Jun 24, 2026
- Review readiness: Needs review
- Proof readiness: Internal proof, not customer-ready
- Recommendation readiness: Recommendations need source and proof review
- Risk status: Three renewal blockers need review
- Action readiness: Proof follow-up and mitigation actions need ownership confirmation
- Validation status: Review before customer use
- Source context: Closed service actions and monitored assets from the last 90 days

Value proof:
- Period: Last 90 days
- Customer objective: Improve service visibility before renewal
- Proof status: Customer-ready summary incomplete
- Proof readiness: Internal proof, not customer-ready
- Validation status: Proof review needed
- Source context: Closed service actions, resolved risks and recommendation history from the last 90 days
- Expected outcome: stronger renewal discussion after proof consolidation, not yet proven value
- Badges: Proof incomplete, Review needed, Internal proof not customer-ready
- Proof point: Closed actions, value: 12 service actions closed during the period, including 3 high-priority actions linked to monitoring coverage, pending customer-ready synthesis
- Proof point: Recommendations delivered, value: 5 recommendations reviewed with the customer team and linked to service objectives
- Proof point: Remaining proof gap, value: resolved risks and monitoring progress still need to be translated into customer-ready language

Metrics:
- Renewal readiness: Medium, helper: value proof and mitigation actions need review before renewal, trend: stable, trend tone: neutral
- Recommendations reviewed: 42%, helper: 5 of 12 recent recommendations reviewed by the customer, trend: +12% this quarter, trend tone: success
- Overdue mitigation actions: 4, helper: action plan should be updated this week, trend: +3 since last review, trend tone: warning

Alerts:
- Critical: Renewal value proof is not customer-ready, scope: Renewal preparation, description: Value proof is incomplete and cannot yet support a confident renewal discussion, recommendation: prepare a customer-ready value summary before the renewal meeting, evidenceSummary: internal proof exists but validation is still needed, sourceScope: closed service actions and recommendation history, sourceStrength: partial, freshness: last 90 days, validationStatus: proof review needed before customer use.
- Warning: Customer has not reviewed latest recommendations, scope: Customer portal, description: The latest recommendations have not been reviewed by the customer team, recommendation: plan a recommendation review with the customer before the renewal discussion, evidenceSummary: 5 of 12 recommendations reviewed.
- Warning: Critical mitigation actions are overdue, scope: Mitigation action plan, description: Overdue actions reduce confidence in renewal readiness, recommendation: assign owners and confirm due dates this week, evidenceSummary: 4 mitigation actions overdue.

Recommendation review:
- Review scope: Renewal preparation
- Review status: Proof and source review needed
- Source context: Closed service actions and recommendation history
- Validation status: Review before customer use
- Customer readiness: Not customer-ready yet
- Recommendation: Prepare customer-ready value proof summary, priority: high, readiness: needs review, rationale: Renewal discussion needs customer-relevant proof, scope: Value proof, evidence: 12 service actions closed but not synthesized for customer use.
- Recommendation: Review open modernization recommendation before renewal meeting, priority: medium, readiness: needs review, rationale: Recommendation may support renewal but source and proof need validation, scope: Recommendation review, evidence: 5 of 12 recommendations reviewed.

Actions:
- Prepare customer-ready value proof summary, owner: CSM, due date: before renewal meeting, priority: high, status: todo, context: proof is internal and needs customer-ready synthesis.
- Review recommendation readiness with service team, owner: Service Manager, due date: next 3 business days, priority: high, status: in progress, context: recommendations need source and proof review.
- Assign overdue mitigation actions, owner: Renewal Manager, due date: this week, priority: high, status: todo, context: overdue actions are blocking renewal readiness.

## AI usage constraints

Use BI-first, AI-assisted logic.

- Do not use GenAI to retrieve basic renewal facts.
- Do not use GenAI to retrieve the renewal date, contract owner, customer name, status, counts or KPIs.
- Assume structured renewal data comes from APIs, BI tools, databases or source systems.
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
- Show freshness when renewal, proof, recommendation or action data may be outdated.
- Show validation status when content may be used for customer, contract, service, renewal or value proof decisions.
- Do not invent proof points, evidence, sources or citations.
- Do not create false certainty when data may be incomplete, outdated or inferred.
- Do not make unsupported renewal risk claims.
- Keep human validation visible for critical customer, contract, service, renewal or proof decisions.
- Do not claim AI validation or automatic approval.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Use display components, not disabled form fields, for display-only facts.

## Value proof constraints

- Use ValueProofCard for proof readiness, proof points and proof gaps.
- Distinguish completed service activity from customer-ready proof.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Do not present expected outcomes as proven value.
- Do not present internal proof as customer-ready proof without validation.
- Show validation status when proof needs review before customer use.
- Show source context when proof trust depends on source scope or freshness.
- Use ActionList and ActionCard for assigned proof preparation work.

## Recommendation review constraints

- Use RecommendationReviewPanel to frame the recommendation set.
- Use RecommendationCard for each individual recommendation.
- Each RecommendationCard should include priority, readiness, rationale, scope and evidence.
- The panel should carry shared review scope, source context, validation status, customer-readiness and proof context.
- Do not use RecommendationReviewPanel to approve recommendations automatically.
- Do not claim AI validation or automatic approval.
- Use CreateActionDialog only to create accountable follow-up work, not to approve the recommendation.
- Use ActionList for assigned internal actions.

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
- The screen includes PageHeader, CreateActionDialog, RenewalRiskSummary, CustomerReviewReadinessCard, ValueProofCard, MetricGrid, MetricCard, PriorityList, AlertCard, RecommendationReviewPanel, RecommendationCard, ActionList and ActionCard.
- Business patterns are used when they match the section intent.
- Form components are used for form fields if forms are generated.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- Visible renewal facts appear before proof gaps, risks, recommendations and actions.
- Source context, source strength, freshness or validation status is visible when trust matters.
- Every alert includes a recommendation.
- Every important recommendation is supported by visible facts or context.
- Every action includes owner, due date and priority.
- Customer-ready proof is not shown unless validation status and proof context support it.
- Expected outcomes are not presented as proven value.
- Internal proof is not presented as customer-ready proof without validation.
- Badge tones use only neutral, primary, success, warning or danger.
- No Badge uses tone="info".
- The primary action is clear.
- The screen does not claim AI validation or automatic approval.
- The screen helps answer what is happening, why it matters and what to do next.
```

---

## Short prompt

Use this shorter version when Figma Make has already loaded the Make kit files.

```txt
Create a complete visible renewal risk review screen in App.tsx using design-system-ai-lab.

Read and follow Guidelines.md, setup.md, tokens.md and styles.md.

Use imports from design-system-ai-lab and import design-system-ai-lab/styles.css.

Do not create a local package, local wrappers, internal imports or recreate design system components.

User role: Customer Success Manager or Renewal Manager.
User decision: decide which renewal blockers require mitigation before the renewal discussion.

Use this structure:
1. PageHeader with CreateActionDialog for mitigation action creation.
2. RenewalRiskSummary for renewal context, value proof status and renewal risk reason.
3. CustomerReviewReadinessCard for customer discussion readiness.
4. ValueProofCard for proof readiness, proof points and proof gaps.
5. MetricGrid with three MetricCard items.
6. PriorityList with AlertCard items for renewal blockers sorted by severity or business impact.
7. RecommendationReviewPanel with RecommendationCard items when recommendations need review before customer use.
8. ActionList with ActionCard items for assigned mitigation actions.

Every alert must include a recommendation.
Every important recommendation must be supported by visible facts or context.
Every action must include owner, due date and priority.
Metrics must include helper text explaining why they matter.
Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not use GenAI to retrieve basic renewal facts.
Do not invent proof points, evidence, sources, citations, asset facts or customer facts.
Do not claim AI validation or automatic approval.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.
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

Keep the same renewal risk review screen intent.
Use PageHeader, CreateActionDialog, RenewalRiskSummary, CustomerReviewReadinessCard, ValueProofCard, MetricGrid, MetricCard, PriorityList, AlertCard, RecommendationReviewPanel, RecommendationCard, ActionList and ActionCard from the package.

Update App.tsx so it renders a complete visible screen using package imports.
```

---

## Correction prompt — generic dashboard was generated

Use this if Make generates a generic dashboard instead of a renewal risk review
screen.

```txt
Revise the generated screen.

It is too generic and dashboard-like.

Keep one primary user decision:
Decide which renewal blockers require mitigation before the renewal discussion.

Use this structure instead:
1. PageHeader with CreateActionDialog for mitigation action creation.
2. RenewalRiskSummary for renewal context.
3. CustomerReviewReadinessCard for customer discussion readiness.
4. ValueProofCard for value proof readiness and proof gaps.
5. MetricGrid with three decision-relevant MetricCard items.
6. PriorityList with AlertCard items for renewal blockers.
7. RecommendationReviewPanel with RecommendationCard items when recommendations need review.
8. ActionList with ActionCard items for assigned mitigation actions.

Remove decorative charts, generic cards, decorative hero sections and unsupported financial reporting sections.
Every alert must include a recommendation.
Every action must include owner, due date and priority.
Do not invent evidence, sources, citations, customer facts, proof points or proven value.
```

---

## Correction prompt — value proof is misleading

Use this if Make presents expected outcomes, internal proof or activity as
customer-ready proof.

```txt
Revise the generated screen.

The value proof is misleading.

Distinguish completed service activity from customer-ready proof.
Distinguish internal proof from customer-ready proof.
Distinguish expected outcomes from proven value.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.
Show validation status when proof needs review before customer use.
Show source context when proof trust depends on source scope or freshness.
Use ValueProofCard for proof readiness, proof points and proof gaps.
Use ActionList and ActionCard for assigned proof preparation work.

Keep the renewal risk review structure and package components.
```

---

## Correction prompt — recommendation review is unsafe

Use this if Make presents recommendations as automatically approved or validated.

```txt
Revise the generated screen.

The recommendation review is unsafe or overconfident.

Use RecommendationReviewPanel to frame the recommendation set.
Use RecommendationCard for individual recommendations.
Each recommendation should include priority, readiness, rationale, scope and evidence.
Do not use RecommendationReviewPanel to approve recommendations automatically.
Do not claim AI validation or automatic approval.
Show validation status before customer use.
Use ActionList for assigned internal follow-up actions.

Keep the renewal risk review structure and package components.
```

---

## Final principle

This prompt should generate a focused renewal risk review screen, not a generic
dashboard or financial report.

The output should help the user understand renewal exposure, identify missing
value proof, review recommendation readiness and assign mitigation actions before
the renewal discussion.
