# QBR Readiness Prompt

## Purpose

This file provides a ready-to-use Figma Make prompt for generating a QBR readiness
screen with the `design-system-ai-lab` package.

Use this prompt when the goal is to help a Customer Success Manager prepare a
customer-ready QBR discussion by checking customer context, proof readiness,
recommendation readiness, open risks and assigned preparation actions.

This prompt follows the shared structure defined in:

```txt
prompts/template.md
```

It should generate a complete visible screen in `App.tsx`.

It should not generate a generic dashboard, slide deck, financial report,
chatbot-first screen or local design system.

---

## Screen intent

Generate a decision-oriented QBR readiness screen.

The screen should help the user answer:

1. Is the customer review ready?
2. What proof is customer-ready and what still needs validation?
3. Which recommendations can be discussed with the customer?
4. Which risks or blockers must be resolved before the QBR?
5. What preparation actions must be assigned next?

The primary decision is:

```txt
Decide whether the QBR is ready or which proof and recommendation gaps must be closed first.
```

---

## Primary prompt

Use this prompt for the first QBR readiness screen generation.

```txt
# QBR Readiness Prompt

## Purpose

Create a complete visible desktop QBR readiness screen in App.tsx.

The screen should help a Customer Success Manager decide whether the QBR is ready or which proof and recommendation gaps must be closed first.

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

Decide whether the QBR is ready or which proof and recommendation gaps must be closed first.

## Screen intent

QBR readiness.

Generate a decision-oriented QBR readiness screen.
Do not generate a generic analytics dashboard.
Do not generate a slide deck.
Do not generate a financial reporting page.
Do not generate a chatbot-first interface for customer facts.
Do not include every available business pattern by default.

## Required components and patterns

Use business patterns before low-level components when a pattern fits the section intent.

Required:
- PageHeader
- CreateActionDialog
- CustomerStatusCard
- CustomerReviewReadinessCard
- ValueProofCard
- ServiceRiskSummary
- RecommendationReviewPanel
- RecommendationCard
- PriorityList
- AlertCard
- ActionList
- ActionCard

Optional, only if useful for the decision:
- MetricGrid
- MetricCard
- ConnectivityCoverageCard

Do not manually rebuild customer context, review readiness, value proof, service risk, recommendation review, blockers or action lists with raw Card, div, dt or dd markup when a dedicated pattern exists.

## Screen structure

1. PageHeader with title, description and CreateActionDialog for preparation action creation.
2. CustomerStatusCard for customer, plan, contract, owner, renewal date, customer objective, coverage and validation status.
3. CustomerReviewReadinessCard for QBR readiness, proof readiness, recommendation readiness, risk status, action readiness and validation status.
4. ValueProofCard with period, customer objective, proof status, proof readiness, validation status, source context and proof points.
5. ServiceRiskSummary when open service risks affect the QBR discussion.
6. RecommendationReviewPanel with 2 to 3 RecommendationCard items when recommendations need review before customer use.
7. PriorityList with 2 to 4 AlertCard items for QBR blockers sorted by severity or business impact.
8. ActionList with 2 to 4 ActionCard items for assigned preparation actions.

The screen should follow this flow:

Customer context
→ QBR readiness
→ value proof readiness
→ service risk status
→ recommendation readiness
→ blockers
→ preparation actions

## Content requirements

- Use CustomerStatusCard for customer context.
- Use CustomerReviewReadinessCard for QBR readiness.
- Use ValueProofCard for proof readiness, proof points and proof gaps.
- Use ServiceRiskSummary when service risks affect the customer review.
- Use RecommendationReviewPanel with RecommendationCard items when recommendations need review.
- Use PriorityList with AlertCard items for blockers.
- Use ActionList with ActionCard items for assigned preparation actions.
- Every alert must include a recommendation.
- Every important recommendation must be supported by visible facts or context.
- Every RecommendationCard should include priority, readiness, rationale, scope and evidence.
- Every action must include owner, due date and priority.
- Metrics, if used, must include helper text explaining why they matter.
- Critical QBR blockers should appear before warning and neutral informational items.
- High-priority preparation actions should appear before medium and low-priority actions.
- Button labels must be explicit and action-oriented.
- Value proof points must be grounded in completed actions, resolved risks, reviewed recommendations or measurable outcomes.
- Distinguish completed service activity from customer-ready proof.
- Distinguish internal proof from customer-ready proof.
- Distinguish expected outcomes from proven value.
- Do not duplicate customer, proof or recommendation context across sections.
- Do not invent proof points, evidence, sources, citations, asset facts or customer facts.
- The screen must help answer: what is ready, what is missing and what to do next.

## Suggested content

Use this sample content to make the generated screen concrete.

Customer context:
- Customer: Northstar Manufacturing
- Plan: Advanced service plan
- Contract: #NS-2024-118
- Owner: Sarah Moreau, CSM
- Renewal date: Sep 15, 2026
- Coverage: 25 known assets across 3 sites
- Customer objective: improve service visibility before renewal
- Source context: closed service actions, monitored assets and recommendation history from the last 90 days
- Validation status: review before customer use
- Status badges: Active plan, QBR in 15 days, Review needed

Customer review readiness:
- Review type: Quarterly Business Review
- Review date: Jun 24, 2026
- Review readiness: Needs review
- Proof readiness: Internal proof, not customer-ready
- Recommendation readiness: Recommendations need source and proof review
- Risk status: Two service risks and one proof gap need review
- Action readiness: Preparation actions need ownership confirmation
- Validation status: Review before customer use
- Source context: closed service actions, monitoring signals and recommendation history from the last 90 days

Value proof:
- Period: Last 90 days
- Customer objective: Improve service visibility before renewal
- Proof status: Customer-ready summary incomplete
- Proof readiness: Internal proof, not customer-ready
- Validation status: Proof review needed
- Source context: Closed service actions, resolved risks and recommendation history from the last 90 days
- Expected outcome: stronger customer discussion after proof consolidation, not yet proven value
- Badges: Proof incomplete, Internal proof not customer-ready, Review needed
- Proof point: Closed service actions, value: 12 service actions closed during the period, pending customer-ready synthesis
- Proof point: Recommendations reviewed, value: 5 recommendations reviewed with the customer team and linked to service objectives
- Proof point: Remaining proof gap, value: monitoring progress still needs to be translated into customer-ready language

Service risk summary:
- Risk level: warning
- Risk summary: The QBR is not ready for customer use because proof and recommendation readiness need review.
- Affected scope: QBR preparation and renewal discussion
- Customer impact: The customer may not clearly see the service value delivered during the period
- Service impact: The CSM may need to explain open risks without validated proof points
- Source context: closed actions, monitoring signals and recommendation history
- Source strength: partial
- Freshness: last 90 days
- Validation status: review before customer use
- Recommended review: Close proof gaps and review recommendations before the QBR

Recommendation review:
- Review scope: QBR preparation
- Review status: Proof and source review needed
- Source context: closed service actions and recommendation history
- Validation status: Review before customer use
- Customer readiness: Not customer-ready yet
- Recommendation: Prepare customer-ready value proof summary, priority: high, readiness: needs review, rationale: QBR needs customer-relevant proof rather than internal activity reporting, scope: value proof, evidence: 12 service actions closed but not synthesized for customer use.
- Recommendation: Review open service recommendations before QBR, priority: medium, readiness: needs review, rationale: unresolved recommendations may affect customer confidence, scope: recommendation review, evidence: 5 of 12 recommendations reviewed.

Blockers:
- Critical: Customer-ready value proof is incomplete, scope: QBR preparation, description: Internal proof exists but has not been translated into customer-ready language, recommendation: prepare and validate a customer-ready value proof summary before the QBR.
- Warning: Recommendations need source and proof review, scope: Recommendation review, description: Some recommendations still need validation before customer use, recommendation: review readiness with the service team.
- Warning: Preparation actions need ownership confirmation, scope: Action plan, description: The QBR preparation plan has open actions without confirmed ownership, recommendation: assign owners and due dates this week.

Actions:
- Prepare customer-ready value proof summary, owner: CSM, due date: before QBR, priority: high, status: todo, context: internal proof needs customer-ready synthesis.
- Review recommendation readiness with service team, owner: Service Manager, due date: next 3 business days, priority: high, status: in progress, context: recommendations need source and proof review.
- Confirm QBR preparation action owners, owner: Customer Success Manager, due date: this week, priority: medium, status: todo, context: open preparation actions need ownership before the QBR.

## AI usage constraints

Use BI-first, AI-assisted logic.

- Do not use GenAI to retrieve basic customer or QBR facts.
- Do not use GenAI to retrieve the review date, renewal date, contract owner, customer name, status, counts or KPIs.
- Assume structured QBR and customer data comes from APIs, BI tools, databases or source systems.
- Use AI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation.
- Use AI only after visible facts, proof status and validation status are shown.
- Do not use GenAI as a SQL engine replacement.
- Do not spend GenAI tokens on customer name, plan, contract, renewal date, owner, status, counts, lists or standard KPIs.
- Do not claim AI validation.
- Do not claim automatic approval.
- Do not present AI confidence as source strength, validation status, customer readiness or proof readiness.

## Evidence and trust constraints

- Show visible facts before interpretation.
- Distinguish facts, proof points, signals, recommendations and actions.
- Every important recommendation must be supported by visible or auditable evidence.
- Show source context when source scope affects trust.
- Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
- Show freshness when proof, recommendation or action data may be outdated.
- Show validation status when content may be used for customer, contract, service, renewal or value proof decisions.
- Do not invent proof points, evidence, sources or citations.
- Do not create false certainty when data may be incomplete, outdated or inferred.
- Keep human validation visible before customer use.
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
- The screen includes PageHeader, CreateActionDialog, CustomerStatusCard, CustomerReviewReadinessCard, ValueProofCard, ServiceRiskSummary, RecommendationReviewPanel, RecommendationCard, PriorityList, AlertCard, ActionList and ActionCard.
- Business patterns are used when they match the section intent.
- Form components are used for form fields if forms are generated.
- The screen follows accessibility principles.
- The screen follows eco-design principles.
- The screen follows AI usage principles when AI is present.
- The screen follows evidence and trust principles.
- Visible customer and QBR facts appear before proof gaps, risks, recommendations and actions.
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
- The screen helps answer what is ready, what is missing and what to do next.
```

---

## Short prompt

Use this shorter version when Figma Make has already loaded the Make kit files.

```txt
Create a complete visible QBR readiness screen in App.tsx using design-system-ai-lab.

Read and follow Guidelines.md, setup.md, tokens.md and styles.md.

Use imports from design-system-ai-lab and import design-system-ai-lab/styles.css.

Do not create a local package, local wrappers, internal imports or recreate design system components.

User role: Customer Success Manager.
User decision: decide whether the QBR is ready or which proof and recommendation gaps must be closed first.

Use this structure:
1. PageHeader with CreateActionDialog for preparation action creation.
2. CustomerStatusCard for customer context.
3. CustomerReviewReadinessCard for QBR readiness.
4. ValueProofCard for proof readiness, proof points and proof gaps.
5. ServiceRiskSummary when service risks affect the QBR discussion.
6. RecommendationReviewPanel with RecommendationCard items when recommendations need review before customer use.
7. PriorityList with AlertCard items for QBR blockers.
8. ActionList with ActionCard items for assigned preparation actions.

Every alert must include a recommendation.
Every important recommendation must be supported by visible facts or context.
Every action must include owner, due date and priority.
Show visible customer and QBR facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not use GenAI to retrieve basic customer or QBR facts.
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

Keep the same QBR readiness screen intent.
Use PageHeader, CreateActionDialog, CustomerStatusCard, CustomerReviewReadinessCard, ValueProofCard, ServiceRiskSummary, RecommendationReviewPanel, RecommendationCard, PriorityList, AlertCard, ActionList and ActionCard from the package.

Update App.tsx so it renders a complete visible screen using package imports.
```

---

## Correction prompt — generic dashboard was generated

Use this if Make generates a generic dashboard instead of a QBR readiness screen.

```txt
Revise the generated screen.

It is too generic and dashboard-like.

Keep one primary user decision:
Decide whether the QBR is ready or which proof and recommendation gaps must be closed first.

Use this structure instead:
1. PageHeader with CreateActionDialog for preparation action creation.
2. CustomerStatusCard for customer context.
3. CustomerReviewReadinessCard for QBR readiness.
4. ValueProofCard for value proof readiness and proof gaps.
5. ServiceRiskSummary when service risks affect the QBR discussion.
6. RecommendationReviewPanel with RecommendationCard items when recommendations need review.
7. PriorityList with AlertCard items for QBR blockers.
8. ActionList with ActionCard items for assigned preparation actions.

Remove decorative charts, generic cards, decorative hero sections, financial reporting sections and slide-like layouts.
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

Keep the QBR readiness structure and package components.
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

Keep the QBR readiness structure and package components.
```

---

## Final principle

This prompt should generate a focused QBR readiness screen, not a generic dashboard
or slide deck.

The output should help the CSM decide whether the QBR is ready, identify missing
proof or recommendation gaps and assign preparation actions before the customer
meeting.
