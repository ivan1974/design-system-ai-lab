# Open Questions

## Purpose

This file tracks open questions that should be validated through future UX
research, user testing, design review or product discovery.

It is part of the lightweight knowledge layer for `design-system-ai-lab`.

The goal is to make uncertainty explicit.

The current design system guidelines are research-informed and demo-ready, but
not every pattern has been fully validated with customers or internal users.

Use this file to avoid turning assumptions into permanent rules too early.

---

## How to use this file

Use this file when:

- planning future user tests
- reviewing whether a pattern is stable enough
- deciding whether a guideline should be strengthened or softened
- preparing research tasks for customer or internal interviews
- updating `knowledge/tested-patterns.md`
- deciding whether a prompt, component or pattern needs revision
- validating asset intelligence assumptions around installed base, connectivity, source scope, Health data, Intelligence interpretation and value proof

Open questions should be reviewed after each relevant research or testing cycle.

When an open question is answered, update the relevant files:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/asset-intelligence.md
principles/
patterns/
decision/
composition/
review/
prompts/
```

---

## Evidence status

The current knowledge layer should be treated as:

```txt
Research-informed
Partially validated
Demo-ready
Not exhaustive
```

This means the design system is strong enough for a demo and early design
exploration.

It should not yet be treated as a fully validated product standard for every
customer, geography, role or service workflow.

---

## Open question 1 — Does the decision-first flow work for all internal roles?

Question:

```txt
Does the standard decision-first flow work equally well for CSM, CSH, CCC, Sales and Field Services users?
```

Why it matters:

The current composition model assumes that most decision screens should follow:

```txt
PageHeader
→ business context
→ metrics
→ risks
→ actions
```

This may work well for CSMs and service managers, but other roles may need a
more task-first, case-first or action-first view.

What to test:

- whether each role understands the screen hierarchy
- whether actions should appear earlier for some workflows
- whether customer context is enough for operational handoffs
- whether metrics are useful or distracting in support workflows

Affected files:

```txt
composition/decision-layout.md
composition/screen-patterns.md
prompts/template.md
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Needs role-specific validation
```

---

## Open question 2 — How much customer context is enough?

Question:

```txt
What is the minimum customer context needed before metrics, risks or actions become understandable?
```

Why it matters:

Too little context creates ambiguity.

Too much context creates density and duplicates information across the screen.

What to test:

- which fields users need first
- whether plan, contract, owner and renewal date are always needed
- when industry, site type or service scope matters
- when customer-specific constraints should be visible
- whether context should differ by role

Affected files:

```txt
patterns/customer-status-card.md
patterns/renewal-risk-summary.md
composition/screen-patterns.md
knowledge/user-needs.md
```

Current status:

```txt
Research-informed
Needs usability testing
```

---

## Open question 3 — Do users understand partial visibility?

Question:

```txt
Do users correctly understand when monitoring coverage is partial, which assets are represented and what this means for service confidence?
```

Why it matters:

Customers often operate mixed environments with multiple vendors, systems and
locations.

If a screen shows monitoring coverage, users may assume it represents the full
operational system unless scope and limits are clear.

Asset intelligence adds further ambiguity: assets may be connected, partially
connected or non-connected, and source evidence may come from live telemetry,
service reports, manual inventory or lifecycle databases.

What to test:

- whether users understand coverage rate
- whether connected and disconnected assets are clear
- whether users distinguish connected, partially connected and non-connected assets
- whether users understand which asset, asset group, room, zone or site is represented
- whether users understand the difference between monitored assets and full installed base
- whether users understand affected scope
- whether freshness information changes trust
- whether users know what to do when coverage is partial

Affected files:

```txt
patterns/connectivity-coverage-card.md
knowledge/asset-intelligence.md
composition/screen-patterns.md
principles/evidence-and-trust.md
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Needs customer and internal testing
```

---

## Open question 4 — What makes value proof customer-ready?

Question:

```txt
What level of proof is needed before a service outcome can be considered customer-ready?
```

Why it matters:

Service value can be difficult to show when value comes from risk prevention,
monitoring, readiness or reduced effort.

Internal users may confuse operational activity with customer-ready proof.

Asset-heavy screens may also confuse expected outcomes, technical outcomes,
validated asset intervention outcomes and customer-ready proof.

What to test:

- whether users distinguish activity from value proof
- whether users distinguish expected outcomes from proven value
- whether users distinguish technical asset outcomes from customer-ready proof
- whether asset intervention outcomes need CSM or customer validation before use
- whether proof points are credible enough for customers
- whether proof gaps are easy to understand
- whether customer objectives should appear more prominently
- whether value proof needs source or freshness information

Affected files:

```txt
patterns/value-proof-card.md
knowledge/asset-intelligence.md
patterns/renewal-risk-summary.md
composition/screen-patterns.md
prompts/renewal-risk-review.md
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Needs CSM, Sales and customer validation
```

---

## Open question 5 — Which renewal risk signals are most useful?

Question:

```txt
Which renewal risk signals help CSMs, Sales or Renewal Managers prioritize mitigation actions?
```

Why it matters:

Renewal risk can be based on many signals: value proof, recommendations reviewed,
engagement, overdue actions, adoption, service incidents, commercial context or
customer sentiment.

The design system should not overfit to weak or unvalidated signals.

What to test:

- which signals users trust
- which signals are available in source systems
- which signals actually change behavior
- which signals are too ambiguous or too late
- whether users need confidence levels or validation states

Affected files:

```txt
patterns/renewal-risk-summary.md
patterns/value-proof-card.md
prompts/renewal-risk-review.md
composition/screen-patterns.md
```

Current status:

```txt
Research-informed
Needs product and data validation
```

---

## Open question 6 — Are recommendations clear enough to trigger action?

Question:

```txt
Do AlertCard recommendations help users decide what to do next, or are they still too generic?
```

Why it matters:

The design system currently requires every alert to include a recommendation.

This rule is useful only if recommendations are specific enough to support real
next steps.

Asset intelligence recommendations may need stronger traceability because the
recommendation depends on asset scope, source strength, connectivity and whether
the underlying signal is observed or interpreted.

What to test:

- whether users understand the recommendation
- whether recommendations feel actionable
- whether recommendation wording varies by role
- whether recommendations need evidence or confidence cues
- whether asset-related recommendations need asset scope, source scope or source strength
- whether users understand when an asset recommendation is AI-assisted interpretation
- whether phased actions are useful for immediate, urgent and mid-term asset follow-up
- whether recommendations should include suggested owner or deadline

Affected files:

```txt
decision/alert-card.md
knowledge/asset-intelligence.md
decision/priority-list.md
composition/decision-layout.md
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Partially validated by design review
Needs usability testing
```

---

## Open question 7 — Are action fields sufficient for follow-through?

Question:

```txt
Are owner, due date and priority enough to make actions executable across teams?
```

Why it matters:

Actions must support coordination and handoff, not just look complete.

Some workflows may require scope, source, related customer, related asset, site,
zone, room, service case, escalation path or validation status.

What to test:

- whether users can execute an action from the available fields
- whether assignees understand context after handoff
- whether due date and priority are interpreted consistently
- whether additional fields are required for CSM, CSH or CCC workflows
- whether asset-related actions need site, zone, room or asset group context
- whether actions based on non-connected assets need different validation metadata
- whether phased actions are easier to execute than a single generic action
- whether customers should see the same action metadata as internal users

Affected files:

```txt
decision/action-card.md
decision/action-list.md
patterns/create-action-dialog.md
knowledge/asset-intelligence.md
forms/
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Partially validated by design review
Needs workflow testing
```

---

## Open question 8 — When should AI assistance appear?

Question:

```txt
Where should AI assistance appear in a service decision screen without becoming prompt-first or hiding evidence?
```

Why it matters:

The design system promotes BI-first, AI-assisted interfaces.

However, the exact placement of AI assistance still needs validation.

For asset-heavy screens, AI placement must also preserve the separation between
source-system Health facts and AI-assisted Intelligence interpretation.

What to test:

- whether AI synthesis should appear after facts or after risks
- whether users trust AI recommendations more when evidence is visible
- whether AI should draft summaries only after user selection
- whether AI actions should be guided buttons rather than open prompts
- whether users understand what is AI-generated and what is source-system data
- whether users understand what is raw Health data and what is Intelligence interpretation
- whether AI explanation should appear only after asset scope and source scope are visible
- whether users trust AI-assisted asset recommendations when evidence strength is shown

Affected files:

```txt
principles/ai-usage.md
knowledge/asset-intelligence.md
principles/evidence-and-trust.md
composition/decision-layout.md
composition/screen-patterns.md
prompts/template.md
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Needs AI-assisted prototype testing
```

---

## Open question 9 — How should uncertainty be displayed?

Question:

```txt
Which uncertainty indicators are clear without creating unnecessary doubt or visual noise?
```

Why it matters:

The design system asks screens to show freshness, validation status and review
needs when relevant.

Too little uncertainty creates false confidence.

Too much uncertainty can reduce trust or make screens feel unreliable.

Asset-heavy uncertainty can come from partial asset scope, non-connected assets,
outdated telemetry, manual inventory, source strength or expected outcomes that
have not yet been proven.

What to test:

- whether users notice freshness cues
- whether validation badges are understood
- whether review-needed states are actionable
- whether uncertainty should appear in badges, helper text or alerts
- whether asset scope limits should appear in badges, helper text, alerts or status summaries
- whether non-connected assets need a distinct label from disconnected monitored assets
- whether expected outcomes need a distinct label from proven value
- whether customers and internal users need different uncertainty wording

Affected files:

```txt
principles/evidence-and-trust.md
knowledge/asset-intelligence.md
components/badge.md
decision/alert-card.md
patterns/connectivity-coverage-card.md
patterns/value-proof-card.md
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Needs usability and wording testing
```

---

## Open question 10 — How much density can internal users tolerate?

Question:

```txt
Is the recommended screen density sufficient for complex internal workflows?
```

Why it matters:

The design system currently recommends compact screens.

Internal users may need more detail in some workflows, especially support,
renewal preparation, escalation or customer review preparation.

Asset-heavy workflows may also require extra context, but full asset dumps can
increase cognitive load when grouped representation is enough.

What to test:

- whether 2 to 4 metrics are enough
- whether 2 to 5 alerts are enough
- whether 2 to 5 actions are enough
- whether additional detail should be progressive disclosure
- whether power users need expandable sections or tables
- whether grouped asset representation is sufficient for decision-making
- whether users need expandable asset details for investigation
- whether compact screens can still preserve asset scope, source scope and proof status

Affected files:

```txt
composition/decision-layout.md
composition/screen-patterns.md
principles/eco-design.md
knowledge/asset-intelligence.md
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Needs internal workflow testing
```

---

## Open question 11 — Which patterns should customers see directly?

Question:

```txt
Which business patterns are appropriate for customer-facing screens, and which should remain internal?
```

Why it matters:

Some patterns may be useful internally but too operational, too uncertain or too
sensitive for direct customer display.

What to test:

- whether customers understand internal service terminology
- whether value proof should be simplified for customer-facing views
- whether risk and renewal information should be internal only
- whether connectivity gaps should be framed differently for customers
- whether ownership information should show Schneider roles or named contacts

Affected files:

```txt
patterns/customer-status-card.md
patterns/connectivity-coverage-card.md
patterns/renewal-risk-summary.md
patterns/value-proof-card.md
composition/screen-patterns.md
prompts/template.md
```

Current status:

```txt
Research-informed
Needs customer-facing validation
```

---

## Open question 12 — How should partner workflows be represented?

Question:

```txt
How should partners, integrators or resellers be represented in service decision screens?
```

Why it matters:

The current knowledge layer focuses mainly on customers and Schneider internal
roles.

Partner workflows may introduce additional ownership, access, handoff and proof
requirements.

What to test:

- whether partners need distinct screen patterns
- whether partner ownership should appear in action cards
- whether customers understand partner versus Schneider responsibility
- whether partner visibility should be limited
- whether value proof includes partner-executed actions

Affected files:

```txt
knowledge/ux-insights.md
knowledge/user-needs.md
composition/screen-patterns.md
patterns/customer-status-card.md
patterns/create-action-dialog.md
```

Current status:

```txt
Not yet validated
Needs partner research
```

---

## Open question 13 — How should local process differences be handled?

Question:

```txt
How should the design system support local process differences without creating fragmented local patterns?
```

Why it matters:

Internal interviews may reflect local process variations.

The design system should support flexibility without turning every local
workaround into a reusable pattern.

What to test:

- which differences are real workflow needs
- which differences are symptoms of process fragmentation
- which fields or labels should be configurable
- which patterns must remain global
- how local terminology should be handled

Affected files:

```txt
Guidelines.md
setup.md
composition/screen-patterns.md
patterns/
decision/
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Needs governance and product validation
```

---

## Open question 14 — What evidence is enough for a recommendation?

Question:

```txt
What minimum evidence should be shown before a recommendation is considered trustworthy?
```

Why it matters:

The design system requires evidence before recommendation.

However, different decisions may require different evidence levels.

What to test:

- whether one visible fact is enough
- whether source and freshness are required
- whether confidence levels are useful
- whether recommendations should cite multiple signals
- whether AI-assisted recommendations need stronger evidence cues

Affected files:

```txt
principles/evidence-and-trust.md
decision/alert-card.md
patterns/value-proof-card.md
composition/decision-layout.md
review/acceptance-checklist.md
```

Current status:

```txt
Research-informed
Needs trust and evidence testing
```

---

## Open question 15 — Which guidelines should become package API changes?

Question:

```txt
Which recurring guideline rules should eventually become component API constraints or new components?
```

Why it matters:

Some rules are currently expressed in markdown only.

If a rule is stable and important, it may need to be encoded directly in the
component API or TypeScript types.

What to test:

- whether `AlertCard` should require recommendation by type
- whether `ActionCard` should require owner, due date and priority
- whether `ValueProofCard` should separate proof points and proof gaps
- whether `ConnectivityCoverageCard` should require freshness
- whether `CreateActionDialog` should enforce required fields

Affected files:

```txt
packages/design-system-ai-lab/src/
decision/
patterns/
forms/
review/acceptance-checklist.md
```

Current status:

```txt
Needs technical and product validation
```

---

## Open question 16 — Do users understand asset intelligence without false confidence?

Question:

```txt
Can users distinguish asset context, source-system Health facts, AI-assisted Intelligence interpretation, recommendations, expected outcomes and proven value?
```

Why it matters:

Asset-heavy service screens may combine installed base data, connectivity
coverage, telemetry, lifecycle status, service reports, manual inventory and AI
interpretation.

If these layers are visually collapsed, users may mistake partial visibility for
full visibility, AI interpretation for source-system truth or expected outcomes
for proven value.

What to test:

- whether users identify which asset, asset group, room, zone or site is represented
- whether users distinguish connected, partially connected and non-connected assets
- whether users understand source strength and freshness
- whether users distinguish raw Health facts from Intelligence interpretation
- whether users understand when a recommendation is AI-assisted
- whether users distinguish expected outcomes from proven value
- whether users know when human validation is required

Affected files:

```txt
knowledge/asset-intelligence.md
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
principles/evidence-and-trust.md
principles/ai-usage.md
principles/accessibility.md
principles/eco-design.md
composition/decision-layout.md
composition/screen-patterns.md
review/acceptance-checklist.md
review/anti-patterns.md
```

Current status:

```txt
Research-informed
Demo-ready
Needs CSM, CSH, Field Services and customer validation
```

---

---

## Priority validation backlog

Use this backlog to prioritize future research or testing.

| Priority | Question | Suggested method |
| --- | --- | --- |
| High | Does the decision-first flow work for CSMs? | Moderated usability test |
| High | Are AlertCard recommendations actionable? | Prototype review with CSM / CSH users |
| High | Are ActionCard fields enough for handoff? | Workflow walkthrough |
| High | What makes value proof customer-ready? | CSM + Sales review, then customer validation |
| High | Where should AI assistance appear? | AI-assisted prototype test |
| Medium | Do users understand partial visibility? | Connectivity review prototype test |
| Medium | Do users understand asset intelligence without false confidence? | Asset intelligence recommendation prototype test |
| Medium | How should uncertainty be displayed? | Wording and visual comprehension test |
| Medium | How much density can internal users tolerate? | Comparative prototype test |
| Medium | Which patterns should customers see directly? | Customer-facing concept test |
| Low | How should partner workflows be represented? | Partner research |
| Low | How should local process differences be handled? | Governance and product workshop |
| Low | Which rules should become API constraints? | Design + engineering review |

---

## Research methods to use

Recommended methods:

- moderated usability testing
- task-based prototype review
- concept testing with customers
- workflow walkthrough with internal roles
- evidence comprehension testing
- AI trust and evidence testing
- asset intelligence comprehension testing
- Health versus Intelligence distinction testing
- value proof status comprehension testing
- comparative layout testing
- design critique with service designers and product owners
- engineering feasibility review for API constraints

---

## What to update after testing

After each research or testing cycle, update:

```txt
knowledge/tested-patterns.md
knowledge/asset-intelligence.md
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
review/acceptance-checklist.md
review/anti-patterns.md
composition/screen-patterns.md
patterns/
decision/
prompts/
```

Update the evidence status of each affected pattern.

Do not keep demo assumptions as permanent rules if testing contradicts them.

---

## Final principle

Open questions are not weaknesses.

They make the design system more trustworthy by showing what is known, what is
assumed and what still needs to be validated, especially when screens combine
source-system facts, asset intelligence, AI interpretation and value proof.
