# Prompt Library — Design System AI Lab

## Purpose

This file contains reference prompts for generating product interfaces with
`design-system-ai-lab`.

The prompts are designed for Figma Make or any AI-assisted interface generation
workflow that can use the design system package.

The goal is not to generate generic dashboards.

The goal is to generate decision-oriented screens using the approved package,
styles, components, forms, decision components and business patterns.

---

## Global prompt rules

Every prompt should include:

1. the user role
2. the user goal
3. the package import rules
4. the preferred business patterns
5. the expected screen structure
6. the constraints
7. the review criteria

Every generated screen must:

- import components from `design-system-ai-lab`
- import styles from `design-system-ai-lab/styles.css`
- use existing components and patterns
- use form components for form fields
- avoid internal package imports
- avoid local component wrappers
- avoid local design-system folders
- avoid inline-styled raw form controls
- keep the interface sober, readable and B2B
- prioritize actionability over decoration

---

## Available vocabulary

### Components

- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DialogClose`
- `DialogFooter`
- `MetricCard`
- `PageHeader`

### Forms

- `Field`
- `Input`
- `Label`
- `Select`
- `Textarea`

### Decision components

- `ActionCard`
- `ActionList`
- `AlertCard`
- `MetricGrid`
- `PriorityList`
- `SectionHeader`
- `StatusSummary`

### Business patterns

- `ConnectivityCoverageCard`
- `CreateActionDialog`
- `CustomerStatusCard`
- `RenewalRiskSummary`
- `ValueProofCard`

---

## Prompt 1 — Customer monitoring screen

```txt
Create a complete customer monitoring screen in App.tsx using
`design-system-ai-lab`.

User role:
Service team member or customer success user.

User goal:
Help the user understand customer status, identify priority risks and decide
the next best actions.

Package rules:
- Import components from `design-system-ai-lab`
- Import styles from `design-system-ai-lab/styles.css`
- Do not import from internal package paths
- Do not create local component wrappers
- Do not create a local design system package

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. CustomerStatusCard with customer, plan, contract, CSM, renewal date and coverage
3. MetricGrid with three decision-relevant metrics
4. ConnectivityCoverageCard for monitoring coverage
5. PriorityList with AlertCard items sorted by severity
6. ActionList with ActionCard items for recommended next steps

Use:
- CustomerStatusCard for customer context
- ConnectivityCoverageCard for monitoring coverage
- MetricGrid and MetricCard for metrics
- PriorityList and AlertCard for priority risks
- ActionList and ActionCard for recommended actions
- CreateActionDialog for the primary action

Suggested content:
- Customer: Greenfield Industries
- Plan: Advanced service plan
- Contract: #CR-2024-441
- CSM: Sarah Moreau
- Renewal date: Aug 5, 2026
- Coverage: 68% connected
- Critical issue: Main HVAC control unit no longer monitored
- Recommended action: Plan connectivity review with the customer

Constraints:
- Use existing package components and patterns only
- Use existing tokens only
- Keep the interface B2B, sober and readable
- Prioritize actionability over decoration
- Every alert must include a recommendation
- Every action must include an owner, due date and priority
- Do not create inline-styled form fields
```

---

## Prompt 2 — Renewal risk review

```txt
Create a complete renewal risk review screen in App.tsx using
`design-system-ai-lab`.

User role:
Customer success or service account user preparing a renewal discussion.

User goal:
Help the user review renewal risk, identify value proof gaps and prepare
mitigation actions before the customer meeting.

Package rules:
- Import components from `design-system-ai-lab`
- Import styles from `design-system-ai-lab/styles.css`
- Do not import from internal package paths
- Do not create local component wrappers
- Do not create a local design system package

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. RenewalRiskSummary with renewal window, readiness and value proof status
3. ValueProofCard with customer-ready proof points and service outcomes
4. MetricGrid with renewal readiness, recommendations reviewed and overdue actions
5. PriorityList with renewal blockers sorted by severity
6. ActionList with mitigation actions

Use:
- RenewalRiskSummary for renewal context
- ValueProofCard for service outcomes
- MetricGrid and MetricCard for metrics
- PriorityList and AlertCard for renewal risks
- ActionList and ActionCard for mitigation actions
- CreateActionDialog for the primary action

Suggested content:
- Customer: Greenfield Industries
- Renewal window: 62 days
- Renewal readiness: Medium
- Value proof status: Incomplete
- Recommendations reviewed: 42%
- Overdue actions: 3 high-priority actions
- Main risk: Value proof not ready for renewal discussion
- Mitigation action: Prepare customer-ready value proof summary

Constraints:
- Use existing package components and patterns only
- Use existing tokens only
- Keep the interface B2B, sober and readable
- The most important renewal risk must be visible immediately
- Prioritize interpretation and next actions over raw data
- Every alert must include a recommendation
- Every action must include an owner, due date and priority
- Do not create inline-styled form fields
```

---

## Prompt 3 — Connectivity coverage review

```txt
Create a complete connectivity coverage review screen in App.tsx using
`design-system-ai-lab`.

User role:
Service operations user reviewing monitoring coverage.

User goal:
Help the user understand which assets are monitored, which assets are
unreachable and what recovery actions should be launched.

Package rules:
- Import components from `design-system-ai-lab`
- Import styles from `design-system-ai-lab/styles.css`
- Do not import from internal package paths
- Do not create local component wrappers
- Do not create a local design system package

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. CustomerStatusCard with customer, plan and coverage context
3. ConnectivityCoverageCard with connected assets, disconnected assets, critical disconnected assets and last update
4. MetricGrid with coverage rate, disconnected assets and critical affected assets
5. PriorityList with connectivity risks sorted by severity
6. ActionList with recovery actions

Use:
- CustomerStatusCard for customer context
- ConnectivityCoverageCard for connectivity status
- MetricGrid and MetricCard for monitoring indicators
- PriorityList and AlertCard for connectivity risks
- ActionList and ActionCard for recovery actions
- CreateActionDialog for the primary action

Suggested content:
- Coverage rate: 68%
- Connected assets: 17 of 25 assets
- Disconnected assets: 8 assets
- Critical disconnected assets: 2 critical assets
- Last update: 18 hours ago
- Affected scope: Main site and HVAC control unit
- Primary action: Plan connectivity recovery review

Constraints:
- Use existing package components and patterns only
- Use existing tokens only
- Keep secondary information compact
- Make critical disconnected assets visible immediately
- Every alert must include a recommendation
- Every action must include owner, due date and priority
- Do not create inline-styled form fields
```

---

## Prompt 4 — Value proof preparation

```txt
Create a complete value proof preparation screen in App.tsx using
`design-system-ai-lab`.

User role:
Customer success or service user preparing a customer-facing value summary.

User goal:
Help the user consolidate service outcomes, completed actions and proof points
before a QBR or renewal discussion.

Package rules:
- Import components from `design-system-ai-lab`
- Import styles from `design-system-ai-lab/styles.css`
- Do not import from internal package paths
- Do not create local component wrappers
- Do not create a local design system package

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. CustomerStatusCard with customer and plan context
3. ValueProofCard with customer objective, period, proof status and proof points
4. MetricGrid with completed actions, resolved alerts and recommendations followed
5. PriorityList with proof gaps or missing evidence
6. ActionList with actions required to make the proof customer-ready

Use:
- CustomerStatusCard for customer context
- ValueProofCard for service outcomes and proof points
- MetricGrid and MetricCard for proof indicators
- PriorityList and AlertCard for proof gaps
- ActionList and ActionCard for preparation actions
- CreateActionDialog for the primary action

Suggested proof points:
- 12 service actions closed, including 3 high-priority actions
- 4 disconnected assets recovered across the main site
- 5 recommendations completed and ready to summarize for QBR
- No unplanned downtime recorded on monitored critical assets

Constraints:
- Use existing package components and patterns only
- Use existing tokens only
- Make the screen customer-ready and executive-readable
- Avoid raw operational detail unless it supports the proof
- Every proof gap must include a recommendation
- Every action must include owner, due date and priority
- Do not create inline-styled form fields
```

---

## Prompt 5 — Alert triage workflow

```txt
Create an alert triage workflow screen in App.tsx using
`design-system-ai-lab`.

User role:
Internal service user triaging customer alerts.

User goal:
Help the user distinguish urgent alerts from lower-priority signals and decide
what to do next.

Package rules:
- Import components from `design-system-ai-lab`
- Import styles from `design-system-ai-lab/styles.css`
- Do not import from internal package paths
- Do not create local component wrappers
- Do not create a local design system package

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. MetricGrid with critical alerts, warning alerts and overdue actions
3. PriorityList with AlertCard items sorted by severity
4. ActionList with recommended triage actions
5. CreateActionDialog for creating a follow-up action

Use:
- MetricGrid and MetricCard for alert counts
- PriorityList and AlertCard for alert triage
- ActionList and ActionCard for follow-up actions
- CreateActionDialog for action creation
- Badge for compact status metadata

Suggested alert content:
- Critical equipment no longer monitored
- Renewal value proof incomplete
- Three high-priority actions overdue
- New monitoring recommendations available

Constraints:
- Prioritize critical alerts visually
- Keep secondary information compact
- Every alert must include equipment or scope
- Every alert must include a recommendation
- Every action must include owner, due date and priority
- Do not create decorative components
- Do not create inline-styled form fields
```

---

## Prompt 6 — QBR preparation screen

```txt
Create a QBR preparation screen in App.tsx using `design-system-ai-lab`.

User role:
Customer success or service user preparing a quarterly business review.

User goal:
Help the user prepare the key messages, risks, value proof points and follow-up
actions to discuss with the customer.

Package rules:
- Import components from `design-system-ai-lab`
- Import styles from `design-system-ai-lab/styles.css`
- Do not import from internal package paths
- Do not create local component wrappers
- Do not create a local design system package

Screen structure:
1. PageHeader with title, description and CreateActionDialog as primary action
2. CustomerStatusCard with customer and service context
3. ValueProofCard with QBR-ready proof points
4. MetricGrid with service performance and action completion indicators
5. PriorityList with discussion risks or blockers
6. ActionList with QBR preparation actions

Use:
- CustomerStatusCard for customer context
- ValueProofCard for value proof and service outcomes
- MetricGrid and MetricCard for QBR indicators
- PriorityList and AlertCard for risks to discuss
- ActionList and ActionCard for follow-up actions
- CreateActionDialog for new preparation actions

Suggested sections:
- Customer context
- Service performance summary
- Value proof points
- Risks to discuss
- Recommended talking points
- Follow-up actions

Constraints:
- Dense but readable B2B layout
- No new visual styles
- Use Badge for compact statuses
- Use existing patterns before custom markup
- Every risk must include a recommendation
- Every action must include owner, due date and priority
- Do not create inline-styled form fields
```

---

## Refinement prompts

### Reprioritize for decision-making

```txt
Reorganize the screen to help the user decide what to do first.

Move the most critical alerts and recommended actions above secondary metrics.

Keep the same design system components, patterns and tokens.

Do not create new styles or local components.
```

### Replace custom markup with patterns

```txt
Refactor the screen to use the existing business patterns instead of custom
markup.

Use CustomerStatusCard for customer context.
Use ConnectivityCoverageCard for monitoring coverage.
Use RenewalRiskSummary for renewal context if renewal is present.
Use ValueProofCard for service outcomes.
Use CreateActionDialog for action creation.

Do not recreate equivalent sections with generic Card and div markup.
```

### Improve form consistency

```txt
Replace raw form controls with design system form components.

Use Field for label, helper and error text.
Use Input for short values.
Use Select for limited choices.
Use Textarea for notes and recommendations.

Do not use inline-styled input, select or textarea elements.
```

### Make the screen more executive-readable

```txt
Make the screen easier to read for a senior stakeholder.

Reduce technical detail.

Keep only the most decision-relevant metrics, risks and actions.

Preserve the same components, patterns, tokens and visual style.
```

### Make the screen more operational

```txt
Make the screen more useful for an operational service user.

Show clearer ownership, due dates and next actions.

Keep alerts sorted by severity.

Use only the existing design system package components and patterns.
```

---

## Anti-prompts

Avoid prompts such as:

```txt
Create a beautiful SaaS dashboard with modern cards, gradients and charts.
```

Avoid:

```txt
Create a fully custom interface with a premium futuristic look.
```

Avoid:

```txt
Create your own components if needed.
```

These prompts encourage Figma Make to invent:

- new visual styles
- decorative components
- generic dashboard patterns
- charts without decision purpose
- UI that looks plausible but is not governed by the design system

Prefer prompts that say:

```txt
Create a decision-oriented interface using the approved `design-system-ai-lab`
package, styles, components and patterns.
```

---

## Review checklist

Before accepting generated output, verify:

- the screen imports components from `design-system-ai-lab`
- the screen imports `design-system-ai-lab/styles.css`
- the screen uses existing components and patterns
- the screen uses form components for form fields
- the screen avoids internal package imports
- the screen avoids local component wrappers
- the screen avoids local design-system folders
- the screen avoids inline-styled raw form controls
- the primary action is obvious
- the most important risk is visible immediately
- metrics are decision-relevant
- alerts include recommendations
- actions include owner, due date and priority
- the layout can be explained in terms of user decision-making
