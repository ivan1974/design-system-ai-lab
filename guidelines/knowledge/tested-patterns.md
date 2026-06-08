# Tested Patterns

## Purpose

This file documents the patterns that are supported by available UX research,
internal feedback or design reasoning.

It is a lightweight, demo-oriented validation register for the
`design-system-ai-lab` guidelines.

The goal is not to claim that every pattern has been fully validated through
formal usability testing.

The goal is to make clear which patterns are:

- research-informed
- partially validated
- demo-ready
- still requiring further testing

---

## How to use this file

Use this file when:

- deciding whether a pattern should be used in a generated screen
- explaining why a pattern exists
- reviewing whether a screen follows research-backed guidance
- identifying what still needs testing
- updating `patterns/`, `decision/`, `composition/` or `review/` guidelines

A pattern should be updated when user research or testing shows that it improves
or weakens understanding, trust, prioritization or actionability.

For screens involving installed base, asset monitoring, connectivity,
lifecycle, asset intelligence recommendations or asset-based value proof,
combine these tested patterns with `knowledge/asset-intelligence.md`.

---

## Evidence status definitions

Use these statuses consistently.

| Status | Meaning |
| --- | --- |
| Research-informed | Supported by recurring findings in interviews, VoC or internal research |
| Partially validated | Supported by research and some design review, demo use or informal feedback |
| Tested | Validated through observed user testing on a specific prototype or screen |
| Needs testing | A plausible pattern that should be tested before being treated as stable |
| Deprecated | A pattern that should no longer be used because it created confusion or low value |

Most current patterns should be treated as research-informed or partially
validated.

Do not overstate validation.

---

## Pattern 1 — Decision-first screen flow

Pattern:

```txt
PageHeader
→ business context pattern
→ MetricGrid
→ PriorityList
→ ActionList
→ CreateActionDialog when needed
```

What it supports:

- quick orientation
- reduced scanning effort
- facts before interpretation
- risks before actions
- clearer next steps

Research basis:

Users need to understand what is happening, why it matters, what can be trusted
and what to do next.

Both customers and internal teams struggle when information is fragmented across
tools, reports, people or disconnected cards.

Supported user needs:

```txt
Need 1 — Understand the current situation quickly
Need 4 — See what matters most
Need 5 — Understand why a signal matters
Need 6 — Know what to do next
Need 8 — Reduce effort when using the interface
```

Affected guidelines:

```txt
composition/overview.md
composition/decision-layout.md
composition/screen-patterns.md
review/acceptance-checklist.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users can identify the current situation, primary risk and next
action within the first scan of the screen.

---

## Pattern 2 — CustomerStatusCard for shared customer context

Pattern:

Use `CustomerStatusCard` to show customer, plan, contract, owner, coverage,
renewal timing and concise status badges when customer context matters.

What it supports:

- shared customer understanding
- clearer service context
- reduced duplication across sections
- faster orientation for internal teams
- reduced ambiguity about ownership or plan status

Research basis:

Research shows that customers and internal users can struggle with fragmented
service context, unclear offer information, unclear points of contact and uneven
access to customer or contract information.

Supported user needs:

```txt
Need 1 — Understand the current situation quickly
Need 2 — Know what is included, active or guaranteed
Need 7 — Know who owns the next step
Need 10 — See customer-specific context without losing structure
Need 17 — Support role-specific workflows
```

Affected guidelines:

```txt
patterns/customer-status-card.md
composition/screen-patterns.md
review/acceptance-checklist.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users can quickly identify the customer, plan, owner, coverage state
and renewal timing without looking across multiple sections.

---

## Pattern 3 — ConnectivityCoverageCard for partial monitoring visibility

Pattern:

Use `ConnectivityCoverageCard` to show monitoring coverage, connected assets,
partially connected assets when relevant, non-connected assets, critical
non-connected assets, affected scope, source scope and freshness.

What it supports:

- visibility of monitoring coverage
- explicit partial visibility
- trust through freshness cues
- prioritization of disconnected critical assets
- clearer action planning for recovery

Research basis:

Customers need a system view, but Schneider visibility may be partial because
customers operate multiple sites, vendors, tools and asset types.

Data quality and monitoring freshness affect trust.

Asset intelligence knowledge adds that connectivity status affects evidence
strength: connected, partially connected and non-connected assets should not be
presented as equally observable.

Supported user needs:

```txt
Need 3 — Trust the information being shown
Need 4 — See what matters most
Need 6 — Know what to do next
Need 9 — Understand coverage and visibility limits
Need 19 — Understand unresolved questions and gaps
Need 21 — Understand asset intelligence without false confidence
```

Affected guidelines:

```txt
patterns/connectivity-coverage-card.md
knowledge/asset-intelligence.md
composition/screen-patterns.md
principles/evidence-and-trust.md
review/acceptance-checklist.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users understand that visibility is partial, can distinguish
connected, partially connected and non-connected assets, and can identify which
connectivity gaps require action first.

---

## Pattern 4 — RenewalRiskSummary for renewal readiness

Pattern:

Use `RenewalRiskSummary` to show renewal date, readiness, value proof status,
recommendations reviewed, overdue actions and renewal-related badges.

What it supports:

- renewal preparation
- risk visibility
- clear renewal timing
- value proof readiness
- mitigation planning

Research basis:

Renewal discussions can require manual reconstruction from several sources.
Service value may be invisible unless recommendations, actions and outcomes are
translated into customer-ready proof.

Supported user needs:

```txt
Need 1 — Understand the current situation quickly
Need 4 — See what matters most
Need 11 — See value proof over time
Need 12 — Prepare for renewal or customer discussions
Need 19 — Understand unresolved questions and gaps
Need 20 — Move from service activity to customer-ready value
```

Affected guidelines:

```txt
patterns/renewal-risk-summary.md
composition/screen-patterns.md
prompts/renewal-risk-review.md
review/acceptance-checklist.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether CSMs or renewal users can identify the renewal risk, value proof
gaps and mitigation action priority without reading every detail on the screen.

---

## Pattern 5 — ValueProofCard for customer-ready proof

Pattern:

Use `ValueProofCard` to show value period, customer objective, proof status,
customer-ready proof points and proof gaps.

What it supports:

- visible value over time
- renewal preparation
- QBR preparation
- customer-ready communication
- proof gap identification

Research basis:

Service value can be hard to perceive when risks are prevented or when nothing
visibly goes wrong. Internal teams may need to reconstruct value manually before
customer reviews or renewals.

Asset intelligence knowledge adds that expected outcomes, technical outcomes,
internal evidence and customer-ready proof should remain distinguishable.

Supported user needs:

```txt
Need 5 — Understand why a signal matters
Need 10 — See customer-specific context without losing structure
Need 11 — See value proof over time
Need 19 — Understand unresolved questions and gaps
Need 20 — Move from service activity to customer-ready value
Need 21 — Understand asset intelligence without false confidence
```

Affected guidelines:

```txt
patterns/value-proof-card.md
knowledge/asset-intelligence.md
composition/screen-patterns.md
prompts/renewal-risk-review.md
review/acceptance-checklist.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users distinguish grounded proof points from proof gaps, expected
outcomes from proven value, and internal evidence from customer-ready proof.

---

## Pattern 6 — AlertCard with mandatory recommendation

Pattern:

Use `AlertCard` to show a risk, blocker or important signal with severity,
scope, description and a concrete recommendation.

What it supports:

- prioritization
- decision support
- risk interpretation
- signal-to-action transition
- reduced ambiguity about next steps

Research basis:

Users often need help moving from signal visibility to action. They may know that
an issue exists but not know what to do next, who owns it or how urgent it is.

Supported user needs:

```txt
Need 4 — See what matters most
Need 5 — Understand why a signal matters
Need 6 — Know what to do next
Need 19 — Understand unresolved questions and gaps
```

Affected guidelines:

```txt
decision/alert-card.md
decision/priority-list.md
composition/decision-layout.md
review/acceptance-checklist.md
review/anti-patterns.md
```

Evidence status:

```txt
Research-informed
Partially validated by design review
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users understand the recommendation and whether the alert gives
enough evidence to trust the suggested next step.

---

## Pattern 7 — ActionCard with owner, due date and priority

Pattern:

Use `ActionCard` to show concrete work with a clear title, owner, due date and
priority.

What it supports:

- follow-through
- accountability
- internal coordination
- handoff clarity
- reduced ambiguity

Research basis:

Customer experience is affected by internal coordination. Unclear ownership,
weak handoffs and local workarounds can cause delays, repeated explanations and
lost context.

Supported user needs:

```txt
Need 6 — Know what to do next
Need 7 — Know who owns the next step
Need 16 — Support internal coordination across roles
Need 18 — Avoid repeated explanations and lost context
```

Affected guidelines:

```txt
decision/action-card.md
decision/action-list.md
patterns/create-action-dialog.md
review/acceptance-checklist.md
review/anti-patterns.md
```

Evidence status:

```txt
Research-informed
Partially validated by design review
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users can understand who owns the work, when it is due and why it
matters without asking for additional context.

---

## Pattern 8 — CreateActionDialog for focused action creation

Pattern:

Use `CreateActionDialog` for standard action creation or mitigation action
creation flows.

What it supports:

- focused interaction
- consistent action creation
- owner assignment
- due date and priority capture
- decision-to-action continuity

Research basis:

Users need to move from recommendations to owned actions. Internal coordination
requires clear responsibility and follow-through.

Supported user needs:

```txt
Need 6 — Know what to do next
Need 7 — Know who owns the next step
Need 12 — Prepare for renewal or customer discussions
Need 16 — Support internal coordination across roles
Need 19 — Understand unresolved questions and gaps
```

Affected guidelines:

```txt
patterns/create-action-dialog.md
forms/field.md
forms/input.md
forms/select.md
forms/textarea.md
composition/screen-patterns.md
review/acceptance-checklist.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users can create a useful action quickly and whether the dialog
captures enough information for follow-through without becoming too heavy.

---

## Pattern 9 — BI-first, AI-assisted screen structure

Pattern:

Use visible structured facts first, then guided AI assistance when synthesis,
explanation, prioritization, recommendation, drafting or reformulation adds
value.

What it supports:

- lower token cost
- better traceability
- stronger trust
- reduced prompt dependency
- more appropriate AI usage

Research basis:

Users need basic facts to be directly visible. AI is useful when it reduces
cognitive effort or helps translate signals into action, but it should not be
used as a default interface for basic structured retrieval.

For asset-heavy screens, BI, APIs or source systems should provide asset
hierarchy, connectivity status, telemetry values, lifecycle status and source
scope. GenAI should only support Intelligence interpretation, recommendation
wording, proof gap explanation or grounded action-plan drafting.

Supported user needs:

```txt
Need 3 — Trust the information being shown
Need 13 — Avoid AI when structured data is enough
Need 14 — Use AI for synthesis, explanation and drafting
Need 15 — Keep human accountability visible
Need 21 — Understand asset intelligence without false confidence
```

Affected guidelines:

```txt
principles/ai-usage.md
knowledge/asset-intelligence.md
principles/evidence-and-trust.md
prompts/template.md
composition/decision-layout.md
review/acceptance-checklist.md
review/anti-patterns.md
```

Evidence status:

```txt
Research-informed
Partially validated by design reasoning
Demo-ready
Needs further testing in AI-assisted prototypes
```

Testing notes:

Test whether users prefer visible structured facts before AI summary, whether AI
suggestions are trusted only when supporting evidence is visible, and whether
users can distinguish raw Health facts from AI-assisted Intelligence.

---

## Pattern 10 — Evidence-aware recommendation flow

Pattern:

Use this sequence for important decisions:

```txt
Observed facts
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ human validation when needed
```

What it supports:

- trust
- explainability
- evidence review
- human accountability
- safer use of AI and automation

Research basis:

Data quality, unclear ownership and fragmented information can weaken trust.
Recommendations are more useful when users can see the facts or context that
support them.

For asset-heavy screens, recommendations should also show asset scope,
connectivity status, source scope and whether the underlying evidence is live,
partial, historical or manual.

Supported user needs:

```txt
Need 3 — Trust the information being shown
Need 5 — Understand why a signal matters
Need 14 — Use AI for synthesis, explanation and drafting
Need 15 — Keep human accountability visible
Need 19 — Understand unresolved questions and gaps
Need 21 — Understand asset intelligence without false confidence
```

Affected guidelines:

```txt
principles/evidence-and-trust.md
knowledge/asset-intelligence.md
principles/ai-usage.md
composition/overview.md
composition/decision-layout.md
review/acceptance-checklist.md
review/anti-patterns.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users can identify the evidence behind a recommendation, understand
the asset scope when relevant, and see whether human validation is required for
critical decisions.

---

## Pattern 11 — Limited density for operational decision screens

Pattern:

Use limited, decision-relevant density:

```txt
1 PageHeader
1 to 2 business context patterns
2 to 4 MetricCard items inside MetricGrid
2 to 5 AlertCard items inside PriorityList
2 to 5 ActionCard items inside ActionList
0 to 1 CreateActionDialog or Dialog
```

What it supports:

- lower cognitive load
- faster scanning
- better prioritization
- more useful first drafts from Make
- eco-design and maintainability

Research basis:

Users need minimum effort and decision support. Overly broad dashboards or raw
data dumps make users inspect and interpret too much manually.

Asset-heavy screens should avoid full asset dumps when grouped representation is
enough, but should not remove trust-critical context such as asset scope,
connectivity status, source scope or proof status.

Supported user needs:

```txt
Need 4 — See what matters most
Need 8 — Reduce effort when using the interface
Need 17 — Support role-specific workflows
```

Affected guidelines:

```txt
principles/eco-design.md
knowledge/asset-intelligence.md
composition/overview.md
composition/screen-patterns.md
review/acceptance-checklist.md
review/anti-patterns.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether the recommended density is enough for internal operational users
without hiding necessary context, source scope or asset visibility limits.

---

## Pattern 12 — Gap-to-action pattern

Pattern:

When data, proof or ownership is incomplete, show the gap and convert it into a
follow-up action when appropriate.

What it supports:

- uncertainty visibility
- safer decision-making
- trust preservation
- follow-through
- data quality improvement

Research basis:

Incomplete data, uncertain ownership and missing proof can affect service,
renewal and customer review decisions. Hiding these gaps creates false
confidence.

Asset intelligence gaps may include missing telemetry, non-connected assets,
incomplete installed base scope, unvalidated expected outcomes or proof that is
not customer-ready yet.

Supported user needs:

```txt
Need 3 — Trust the information being shown
Need 7 — Know who owns the next step
Need 11 — See value proof over time
Need 19 — Understand unresolved questions and gaps
Need 21 — Understand asset intelligence without false confidence
```

Affected guidelines:

```txt
principles/evidence-and-trust.md
knowledge/asset-intelligence.md
decision/alert-card.md
decision/action-card.md
patterns/value-proof-card.md
patterns/renewal-risk-summary.md
patterns/connectivity-coverage-card.md
review/acceptance-checklist.md
```

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users understand the difference between a risk, a missing proof
point, a missing asset signal, an expected outcome and an action to resolve the
gap.

---

## Pattern 13 — Asset intelligence recommendation flow

Pattern:

Use this sequence when a screen presents asset intelligence recommendations:

```txt
Asset context
→ connectivity and source scope
→ raw Health or lifecycle facts
→ Intelligence interpretation
→ evidence-aware recommendation
→ owned or phased actions
→ expected outcome or value proof status
→ human validation when needed
```

What it supports:

- asset-scope clarity
- source and evidence visibility
- Health versus Intelligence separation
- safer recommendation review
- clearer follow-through
- stronger value proof discipline

Research basis:

Asset-heavy service screens may combine installed base data, monitoring
coverage, telemetry, lifecycle status, service reports, manual inventory and AI
interpretation. Users need to understand what is observed, what is interpreted,
what is recommended and what is proven.

Supported user needs:

```txt
Need 3 — Trust the information being shown
Need 5 — Understand why a signal matters
Need 6 — Know what to do next
Need 9 — Understand coverage and visibility limits
Need 14 — Use AI for synthesis, explanation and drafting
Need 15 — Keep human accountability visible
Need 19 — Understand unresolved questions and gaps
Need 21 — Understand asset intelligence without false confidence
```

Affected guidelines:

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

Evidence status:

```txt
Research-informed
Demo-ready
Needs further usability testing
```

Testing notes:

Test whether users can distinguish asset context, raw Health facts,
Intelligence interpretation, recommendations, expected outcomes and proven
value without relying on AI wording alone.

---

---

## Pattern status summary

| Pattern | Status |
| --- | --- |
| Decision-first screen flow | Research-informed, demo-ready |
| CustomerStatusCard for shared context | Research-informed, demo-ready |
| ConnectivityCoverageCard for partial visibility | Research-informed, demo-ready |
| RenewalRiskSummary for renewal readiness | Research-informed, demo-ready |
| ValueProofCard for customer-ready proof | Research-informed, demo-ready |
| AlertCard with mandatory recommendation | Research-informed, partially validated, demo-ready |
| ActionCard with owner, due date and priority | Research-informed, partially validated, demo-ready |
| CreateActionDialog for action creation | Research-informed, demo-ready |
| BI-first, AI-assisted structure | Research-informed, partially validated, demo-ready |
| Evidence-aware recommendation flow | Research-informed, demo-ready |
| Limited density | Research-informed, demo-ready |
| Gap-to-action pattern | Research-informed, demo-ready |
| Asset intelligence recommendation flow | Research-informed, demo-ready |

---

## Patterns that still need stronger validation

The following patterns should be prioritized for future testing:

- `RenewalRiskSummary` with CSMs, Sales or Renewal Managers
- `ValueProofCard` with CSMs and customer-facing stakeholders
- `ConnectivityCoverageCard` with internal users and customers
- `CreateActionDialog` with CSM, CSH and CCC users
- BI-first, AI-assisted flows with internal users
– evidence-aware recommendations in AI-assisted prototypes
– asset intelligence recommendation flow with CSM, CSH and Field Services users
– limited density rules for complex internal workflows

---

## Potential test questions

Use these questions during future usability testing or design reviews:

- Can the user identify the current situation quickly?
- Can the user identify the most important risk?
- Can the user explain why the risk matters?
- Can the user identify the evidence behind a recommendation?
- Can the user tell whether the data is fresh, confirmed or incomplete?
- Can the user identify who owns the next action?
- Can the user understand what is covered and what is not covered?
- Can the user distinguish connected, partially connected and non-connected assets?
- Can the user understand which asset, asset group, room, zone or site is represented?
- Can the user distinguish raw Health facts from Intelligence interpretation?
- Can the user distinguish value proof from value proof gaps?
- Can the user distinguish expected outcomes from proven value?
- Can the user create a follow-up action without missing owner, due date or priority?
- Does AI assistance reduce effort, or does it hide information?
- Does the screen feel focused enough for the task?

---

## Deprecated or discouraged patterns

These patterns should not be used as defaults:

| Pattern | Reason |
| --- | --- |
| Generic dashboard | Too broad and not decision-oriented |
| Prompt-first chatbot for basic facts | Poor fit for structured retrieval and costly in tokens |
| Large raw data table | Increases cognitive load and does not prioritize |
| Full asset dump | Increases cognitive load when grouping is enough |
| Embedded components as top-level assets | Misrepresents installed base hierarchy unless component-level investigation is required |
| Alerts without recommendations | Does not help users move to action |
| Actions without owner or due date | Weak accountability and follow-through |
| Disabled inputs for display-only facts | Confuses source facts with editable fields |
| Manual reconstruction of business patterns | Breaks consistency and increases maintenance effort |
| Fake proof or fake citations | Destroys trust and creates compliance risk |
| Non-connected assets presented as live-monitored | Creates false confidence and weakens trust |
| Expected outcomes presented as proven value | Overstates value and weakens proof discipline |
| AI-generated asset facts | Uses GenAI for facts that should come from source systems |

---

## Final principle

A pattern should be considered useful when it helps users understand, trust,
prioritize, act and distinguish observed facts from interpretation or proof.

A pattern should be revised when testing shows that it adds visual structure but
does not improve comprehension, confidence or follow-through.
