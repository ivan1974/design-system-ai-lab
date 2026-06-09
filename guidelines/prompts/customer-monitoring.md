# Customer Monitoring Prompt

## Purpose

Use this prompt to generate a customer monitoring screen with the v2 decision
workspace standard.

The screen should help a Customer Success Manager understand customer status,
monitoring scope, priority risks and next actions before the next customer
touchpoint.

---

## Screen intent

Generate a decision-oriented customer monitoring workspace.

Primary decision:

```txt
Decide which service risks need action before the next customer touchpoint.
```

Do not generate a generic dashboard.

Do not generate a long stack of cards.

---

## Primary prompt

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
- screen-architecture/README.md
- prompts/workspace-v2.md

Use the npm package design-system-ai-lab.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.

Do not create a local package.
Do not create packages/design-system-ai-lab.
Do not recreate design system components locally.
Do not create local wrappers for package components.
Do not import from dist/ or src/.
Do not leave App.tsx empty.

## User role

Customer Success Manager.

## User decision

Decide which service risks need action before the next customer touchpoint.

## Required workspace structure

Use a decision workspace.

Required structure:
1. WorkspaceShell with a clear header and primary action.
2. FilterBar for scope, filters and result count.
3. MasterDetailLayout when the screen includes an asset, risk or customer item list.
4. DetailPanel with DetailPanelTabs when a selected item needs review.
5. StickyActionBar when a selected item has a clear next action.
6. SectionStack and SectionBlock for dense grouped content.

Do not create a long page of equal cards.

## Required components and patterns

Use these when relevant:
- WorkspaceShell
- FilterBar
- MasterDetailLayout
- DetailPanel
- DetailPanelTabs
- StickyActionBar
- SectionStack
- SectionBlock
- CustomerStatusCard or KeyValueList for customer context
- MetricStrip with CompactMetric for secondary monitoring signals
- ConnectivityCoverageCard for coverage and visibility limits
- ServiceRiskSummary for the main service risk
- AlertCard for highlighted risks
- SignalRow for repeated observed signals
- EvidenceRow for source context when needed
- ActionRow for assigned follow-up actions
- CreateActionDialog when action creation is part of the flow

Use MetricGrid and MetricCard only for primary decision KPIs.
Use ActionCard only for highlighted assigned work.

## Screen structure

The screen should follow this flow:

Scope and customer context
→ compact monitoring signals
→ asset or risk list
→ selected item detail
→ coverage and risk review
→ owned actions

## Content requirements

Sample content:
- Customer: Northstar Manufacturing
- Plan: Advanced service plan
- Coverage: 17 of 25 known assets connected
- Source scope: monitoring platform and known installed base
- Source strength: partial
- Freshness: 18 hours ago
- Validation: review before customer communication
- Key signal: partial monitoring coverage
- Key risk: some known assets are not visible in live monitoring
- Action: plan monitoring scope review with the customer

Every alert must include a recommendation.
Every action must include owner, due date and priority.
Repeated facts should use KeyValueList.
Repeated signals should use SignalRow or MetricStrip.
Repeated actions should use ActionRow.

## Evidence and trust constraints

Show visible facts before interpretation.
Show source context, source strength, freshness or validation status when trust matters.
Do not invent proof points, evidence, sources, citations, asset facts or customer facts.
Do not present non-connected assets as live-monitored.
Do not claim AI validation or automatic approval.

## Visual constraints

B2B.
Sober.
Readable.
Structured.
Action-oriented.
Evidence-aware.
No gradients.
No glassmorphism.
No decorative charts.
No generic SaaS dashboard.
No card saturation.
No custom design system components.

## Output requirement

Generate a complete visible desktop screen in App.tsx.
Use package components and patterns directly.
Use workspace structure when review or comparison is needed.

## Acceptance criteria

- App.tsx renders a complete visible screen.
- Components are imported from design-system-ai-lab.
- Styles are imported from design-system-ai-lab/styles.css.
- No local package or local component wrappers are created.
- WorkspaceShell and FilterBar are used.
- MasterDetailLayout is used if list/detail review is needed.
- DetailPanel is used for selected-item review.
- Repeated facts, signals and actions use compact primitives or rows.
- The screen does not become a generic dashboard or card stack.
- Source scope, freshness and validation are visible where trust matters.
```

---

## Short prompt

```txt
Create a complete visible customer monitoring workspace in App.tsx using design-system-ai-lab.

Read Guidelines.md, setup.md, tokens.md, styles.md and prompts/workspace-v2.md.

Use WorkspaceShell, FilterBar and, when review is needed, MasterDetailLayout with DetailPanel.
Use CustomerStatusCard or KeyValueList for context.
Use MetricStrip and CompactMetric for monitoring signals.
Use ConnectivityCoverageCard and ServiceRiskSummary for coverage and risk.
Use AlertCard for highlighted risks.
Use ActionRow for assigned next actions.

Do not create local components.
Do not import from dist/ or src/.
Do not generate a generic dashboard.
Do not create card saturation.
Keep source scope, freshness and validation visible.
```

---

## Repair prompts

If Make creates a long stack of cards, use:

```txt
repair-prompts/card-saturation.md
```

If Make creates a generic dashboard or weak hierarchy, use:

```txt
repair-prompts/weak-layout.md
```

If Make creates a list without selected-item review, use:

```txt
repair-prompts/missing-detail-panel.md
```

---

## Final principle

This prompt should generate a focused customer monitoring workspace, not a generic
dashboard.

The output should help a CSM understand the customer situation, trust the visible
signals, identify priority service risks and assign the next actions.
