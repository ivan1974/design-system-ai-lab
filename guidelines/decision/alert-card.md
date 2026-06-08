# AlertCard Guidelines

## Purpose

Use `AlertCard` to show a risk, blocker, anomaly, alert or important signal that
requires attention.

An alert should not only describe a problem.

It should help the user understand why the signal matters and what to do next.

An alert is not a metric.

An alert is not an action.

An alert is not a decorative warning box.

In generated screens, `AlertCard` should turn a signal into a decision point.

For trust-sensitive screens, `AlertCard` should also make clear what can be
trusted, what is partial, what still needs validation and why the recommended
next step is justified.

`AlertCard` may support evidence-aware recommendations, but it should not
replace a richer recommendation pattern when the section needs asset match,
Health references, Intelligence insight, phased action plans or expected
outcomes.

---

## Import

Import `AlertCard` from the package root:

```tsx
import { AlertCard } from "design-system-ai-lab";
```

If other design system components are needed, import them from the same package
root:

```tsx
import {
  ActionCard,
  ActionList,
  AlertCard,
  MetricCard,
  PriorityList,
  RenewalRiskSummary,
} from "design-system-ai-lab";
```

Do not import `AlertCard` from internal package paths.

Do not recreate `AlertCard` locally.

Do not create custom alert card wrappers.

---

## Component role

Use `AlertCard` when the user needs to understand:

- what signal or risk requires attention
- which equipment, system, workflow or business area is concerned
- why the situation matters
- what the recommended next step is
- what evidence, source or visibility limits affect trust
- whether human validation is needed before acting

`AlertCard` should support decision-making, not just display status.

It is especially useful after customer context, renewal context, connectivity
coverage or value proof context has been established.

`AlertCard` sits between metrics and actions:

```txt
observed signal
→ impact or risk interpretation
→ evidence-aware recommendation
→ owned action when needed
```

For asset-heavy screens, the supporting context should make clear whether the
alert is based on raw Health facts, lifecycle data, service history, manual
inventory or Intelligence interpretation.

---

## Required information

Every `AlertCard` must include:

- severity
- title
- equipment or scope
- description
- recommendation
- source, scope or validation context when it affects trust

Do not generate an alert without a recommendation.

Do not generate generic alerts that do not explain impact or next step.

If the signal cannot be described with scope, impact and recommendation, it is
probably not ready to be shown as an `AlertCard`.

If the recommendation depends on incomplete visibility, weak source strength,
AI-assisted interpretation, expected outcomes or customer-ready proof gaps,
show that context in the alert or in the surrounding component before the user
acts.

---

## Props

Use the component with these props:

```tsx
<AlertCard
  severity="critical"
  title="Connectivity loss on critical equipment"
  equipment="Main switchboard"
  description="The customer may lose visibility on key assets."
  recommendation="Plan a connectivity review with the customer and support team."
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  freshness="18 hours ago"
  validationStatus="Review before customer use"
/>
```

Expected props:

```txt
severity
title
equipment
scope (planned)
evidenceSummary (planned)
source (planned)
sourceScope (planned)
sourceStrength (planned)
freshness (planned)
validationStatus (planned)
action (planned)
description
recommendation
className
```

Expected severity values:

```txt
critical
warning
info
```

Use `severity` to communicate urgency.

Use `title` to name the signal.

Use `equipment` to identify the affected equipment, scope or business area.

Planned code evolution: add `scope` as a clearer alias for non-equipment
contexts while keeping `equipment` for backward compatibility.

Use `description` to explain impact.

Use `recommendation` to guide the next step.

Planned code evolution:

```tsx
<AlertCard
  severity="warning"
  title="Partial connectivity weakens asset visibility"
  scope="UPS Room A"
  description="The monitoring view does not cover all critical UPS assets."
  recommendation="Review affected assets before the next customer discussion."
  evidenceSummary="17 of 25 known assets are monitored."
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  freshness="18 hours ago"
  validationStatus="Human review needed"
/>
```

Future props should make trust-sensitive context explicit without forcing the
alert description to become long or overloaded.

Use `className` only for layout adjustments, not to redefine alert card styling.

---

## Severity rules

### Critical

Use `critical` for urgent risks that may require immediate attention.

Examples:

```txt
critical equipment no longer monitored
major connectivity loss
severe renewal risk signal
overdue action affecting customer trust
service issue with business impact
critical assets disconnected
value proof missing before renewal
AI-assisted recommendation requires expert validation
expected value presented without completed action evidence
```

Do not use `critical` for incomplete information, minor delays or generic
warnings.

---

### Warning

Use `warning` for situations that should be monitored or addressed soon.

Examples:

```txt
partial connectivity
adoption below expected level
delayed follow-up
unclear ownership
upcoming renewal risk
recommendations not reviewed
value proof incomplete
partial source strength
expected outcome not proven
asset recommendation needs review
```

Use `warning` when the user should pay attention but the issue is not yet a
critical risk.

---

### Info

Use `info` for useful signals that inform the user but are not urgent.

Examples:

```txt
usage improvement
new report available
customer activity detected
planned review upcoming
new recommendations available
service proof ready for review
source evidence available for review
customer-ready proof candidate available
```

Do not overuse `info` if the screen is meant to prioritize risks.

Info alerts should still include a recommendation.

---

## Good alert titles

Good alert titles are specific and signal-oriented.

Examples:

```txt
Connectivity loss on critical equipment
Renewal value proof is not customer-ready
Three high-priority actions are overdue
Partial adoption of monitoring features
Customer has not reviewed latest recommendations
Connectivity gaps weaken the renewal proof
Critical assets disconnected from monitoring
Partial source strength limits recommendation confidence
Expected value is not proven yet
Asset recommendation needs expert validation
```

Good titles help the user understand the issue quickly.

---

## Bad alert titles

Avoid vague alert titles such as:

```txt
Issue detected
Problem
Warning
Attention needed
Customer risk
Something changed
Important signal
AI says act now
Value proven
Asset intelligence confirmed
```

These titles are too generic and do not help the user decide what to do.

Rewrite vague titles into specific signals.

Bad:

```txt
Issue detected
```

Better:

```txt
Critical equipment is no longer monitored
```

---

## Equipment or scope rules

The `equipment` prop can describe equipment, system, workflow or business scope.

Planned code evolution: use `scope` for non-equipment contexts and keep
`equipment` for backward compatibility.

Good scope examples:

```txt
Main switchboard
Main HVAC control unit — Site A
Monitoring coverage
Renewal preparation
Customer action plan
Service recommendations
Value proof preparation
UPS Room A
Critical Power > UPS Room A
Schneider monitored assets only
Customer-ready value summary
Asset recommendation review
Customer portal
```

---

## Trust and evidence rules

Alerts should not create false confidence.

When source quality, visibility or validation affects the decision, the alert
should expose relevant context through planned metadata props, helper text or
the surrounding component.

Trust-sensitive context may include:

```txt
source
freshness
source scope
source strength
asset scope
connectivity status
partial visibility
evidence summary
validation status
proof status
```

Good:

```tsx
<AlertCard
  severity="warning"
  title="Partial connectivity weakens asset visibility"
  equipment="UPS Room A"
  description="The monitoring view does not cover all critical UPS assets."
  recommendation="Review affected assets before the next customer discussion."
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  freshness="18 hours ago"
  validationStatus="Review before customer use"
/>
```

Weak:

```tsx
<AlertCard
  severity="critical"
  title="AI confirmed the risk"
  equipment="Asset intelligence"
  description="The AI is confident that the asset requires action."
  recommendation="Take action."
/>
```

The weak example uses AI confidence language instead of visible source
evidence.

Do not use confidence language as a substitute for source evidence.

---

## Asset-heavy alert rules

For asset-heavy screens, `AlertCard` should preserve the distinction between
asset context, raw Health facts, Intelligence interpretation and recommended
next step.

Use `AlertCard` for a concise asset risk or blocker when the screen already
shows the surrounding asset context.

Asset-heavy alerts should make clear when relevant:

```txt
affected site, zone, room or asset group
connectivity status
source scope
source strength
whether evidence is live, partial, historical or manual
whether the alert is based on Health facts or Intelligence interpretation
whether human validation is required
```

Do not present non-connected assets as live-monitored.

Do not present AI-assisted Intelligence interpretation as source-system truth.

If the recommendation needs asset match, Health references, Intelligence
insight, phased action plan or expected outcomes, use a richer recommendation
pattern when available.

---

## Value proof alert rules

Use `AlertCard` to highlight proof gaps, value proof blockers or renewal risks
that need attention.

Value proof alerts should distinguish:

```txt
expected outcome
technical outcome
internal proof
customer-ready proof
proof gap
```

Do not present expected outcomes as proven value.

Do not present technical outcomes or internal proof as customer-ready proof
without validation.

Use `ValueProofCard` when the section needs to explain proof maturity, proof
points, proof gaps, customer objectives or customer-ready evidence.

---

## Human validation rules

Critical customer, contract, service, safety, compliance, renewal, value proof,
asset intelligence or modernization decisions should keep human validation
visible.

Alert recommendations may suggest review, escalation, validation or action
creation, but they should not imply that AI or automation has approved the
decision.

Good recommendation language:

```txt
Review source evidence before customer use.
Validate the asset recommendation with a Schneider expert.
Create a follow-up action to assign ownership.
Confirm proof readiness before the renewal meeting.
```

Avoid recommendation language such as:

```txt
Confirm AI recommendation.
Approve asset intelligence.
Prove value automatically.
Take action because AI is confident.
```

Avoid generic scope labels such as:

```txt
System
Data
Platform
Area
Thing
```

The scope should help the user locate where the signal applies.

---

## Description rules

The description should explain impact or relevance.

Good descriptions:

```txt
The customer may lose visibility on key assets and may detect the gap before the service team communicates it.
The contract renews in 62 days, but service outcomes are not yet compiled into a customer-ready summary.
Three actions flagged as high priority have passed their due date with no owner update.
```

Bad descriptions:

```txt
There is a problem.
Something needs attention.
This should be reviewed.
A risk was detected.
```

The description should help the user understand why the alert matters.

---

## Recommendation rules

Every `AlertCard` must include a concrete recommendation.

A recommendation should explain the next useful step.

Good recommendations:

```txt
Plan a connectivity review with the customer and support team.
Prepare a value summary before the renewal meeting.
Assign an owner to close overdue actions this week.
Review disconnected assets before the next customer review.
Contact the customer to validate monitoring expectations.
Select the three most relevant recommendations for the customer discussion.
Review source evidence before using this recommendation with the customer.
Validate the asset recommendation with a Schneider expert.
Create a proof follow-up action before the renewal discussion.
```

Bad recommendations:

```txt
Check.
Follow up.
Review later.
Take action.
Investigate.
Confirm AI recommendation.
Approve asset intelligence.
Prove value.
```

Recommendations should be specific enough to guide action.

If the recommendation is strong enough to become a planned next step, also add a
related `ActionCard` in an `ActionList`.

If the recommendation depends on source evidence, partial visibility, proof
maturity or human validation, make that dependency visible before the user acts.

---

## When to use AlertCard

Use `AlertCard` for:

- service risks
- equipment alerts
- connectivity blockers
- renewal risk signals
- adoption gaps
- overdue follow-ups
- customer trust risks
- operational handoff risks
- value proof gaps
- recommendation review gaps
- important signals that require attention
- partial visibility risks
- source strength limitations
- asset intelligence review needs
- human validation needs
- expected outcomes that are not proven yet

---

## When not to use AlertCard

Do not use `AlertCard` for:

- generic notes
- normal status metadata
- metrics
- action plans
- long-form explanations
- decorative content
- positive status that does not require attention
- display-only customer context
- complete lists without `PriorityList`
- full recommendation detail with Health references and phased action plans
- expected outcomes presented as proven value
- AI validation claims
- source-system facts that should be shown as metrics or status context

Use other components instead:

| Need | Use |
| --- | --- |
| Show a metric | `MetricCard` |
| Arrange metrics | `MetricGrid` |
| Show a recommended action | `ActionCard` |
| Group recommended actions | `ActionList` |
| Group risks or blockers | `PriorityList` |
| Show short status or metadata | `Badge` |
| Show structured context | `StatusSummary` |
| Show customer context | `CustomerStatusCard` |
| Show connectivity context | `ConnectivityCoverageCard` |
| Show renewal context | `RenewalRiskSummary` |
| Show value proof | `ValueProofCard` |
| Show proof maturity and proof gaps | `ValueProofCard` |
| Show full connectivity coverage and source limits | `ConnectivityCoverageCard` |
| Show source or validation metadata | `StatusSummary` or `MetricCard` |
| Show full recommendation detail | Richer recommendation pattern when available |
| Trigger an action | `Button` |
| Create an action | `CreateActionDialog` |
| Group generic content | `Card` |

---

## PriorityList usage

When showing several alerts, wrap `AlertCard` items in `PriorityList`.

Preferred:

```tsx
<PriorityList
  title="Priority alerts"
  description="Risks requiring customer or service team action, sorted by severity."
>
  <AlertCard
    severity="critical"
    title="Critical equipment no longer monitored"
    equipment="Main HVAC control unit — Site A"
    description="The customer has no visibility on a critical asset."
    recommendation="Escalate to the support team today and schedule a technical review within 48 hours."
  />

  <AlertCard
    severity="warning"
    title="Renewal value proof is not customer-ready"
    equipment="Renewal preparation"
    description="Recent service actions are not yet summarized in a customer-ready view."
    recommendation="Prepare a value summary before the renewal meeting."
  />
</PriorityList>
```

Avoid manually creating alert groups with raw `div` wrappers when `PriorityList`
fits the need.

---

## Placement rules

Place `AlertCard` after the user has enough context to understand the situation.

Common placements:

```txt
CustomerStatusCard or RenewalRiskSummary
→ MetricGrid with MetricCard items
→ PriorityList with AlertCard items
→ ActionList with ActionCard items
```

```txt
ConnectivityCoverageCard
→ PriorityList with connectivity AlertCards
→ ActionList with recovery ActionCards
```

```txt
ValueProofCard
→ PriorityList with proof gap AlertCards
→ ActionList with mitigation ActionCards
```

Critical alerts should appear before warning and info alerts.

Do not bury critical alerts below secondary content or long explanations.

For asset-heavy alerts, show asset context, connectivity status, source scope or
raw Health facts before showing Intelligence interpretation or recommendation.

For value proof alerts, show `ValueProofCard` before proof gap alerts when proof
maturity is the main context.

---

## Sorting rules

When several alerts are shown, sort them by severity and impact.

Recommended order:

```txt
critical
warning
info
```

If two alerts have the same severity, show the one with the highest business
impact first.

Do not randomize alert order.

Do not create long unordered alert lists.

---

## Relationship with ActionCard

`AlertCard` explains the risk.

`ActionCard` explains what to do next.

When a critical or warning alert is shown, consider adding a related
`ActionCard` in an `ActionList`.

If the alert exposes a data, proof, ownership or validation gap, the related
action should close that gap with owner, due date and priority.

Example:

```tsx
<PriorityList title="Priority alerts">
  <AlertCard
    severity="critical"
    title="Connectivity loss on critical equipment"
    equipment="Main switchboard"
    description="The customer may lose visibility on key assets."
    recommendation="Plan a connectivity review with the customer and support team."
  />
</PriorityList>

<ActionList title="Recommended actions">
  <ActionCard
    title="Plan connectivity review with the customer"
    owner="CSM"
    dueDate="This week"
    priority="high"
  />
</ActionList>
```

---

## Relationship with MetricCard

`MetricCard` can show the measurable signal.

`AlertCard` explains why the signal matters.

Example:

```txt
MetricCard: Open critical alerts = 2
AlertCard: Connectivity loss on critical equipment
```

`MetricCard` should carry measurable values and short trust metadata.

`AlertCard` should explain why the signal matters and what should happen next.

---

## Relationship with business patterns

Use business patterns to establish the business context.

Use `AlertCard` to show risks, blockers or signals that require attention.

Examples:

```txt
CustomerStatusCard → PriorityList with customer risk alerts
ConnectivityCoverageCard → PriorityList with connectivity blockers
RenewalRiskSummary → PriorityList with renewal risk blockers
ValueProofCard → PriorityList with proof gap alerts
```

Do not use `AlertCard` to replace `ConnectivityCoverageCard` when the main
question is coverage and source visibility.

Do not use `AlertCard` to replace `ValueProofCard` when the main question is
proof maturity or customer-ready value.

---

## Relationship with richer recommendation patterns

`AlertCard` can include a concise recommendation.

Use a richer recommendation pattern when the user needs to review:

```txt
asset match
Health data references
Intelligence insight
risk or opportunity framing
phased action plan
expected outcomes
confidence or validation state
```

`AlertCard` should stay focused on signal, impact and next step

---

## Asset-heavy alert example

```tsx
<AlertCard
  severity="warning"
  title="Partial connectivity weakens asset visibility"
  equipment="Critical Power > UPS Room A"
  description="The monitoring view does not cover all critical UPS assets, which limits confidence in the current service status."
  recommendation="Review affected assets and plan a connectivity recovery action before the next customer discussion."
  sourceScope="Schneider monitored assets only"
  sourceStrength="partial"
  freshness="18 hours ago"
  validationStatus="Review before customer use"
/>
```

This is good because:

- the affected scope is specific
- the description explains the decision impact
- source scope and source strength remain visible
- the recommendation is review-oriented

---

## Value proof gap alert example

```tsx
<AlertCard
  severity="critical"
  title="Expected value is not proven yet"
  equipment="Value proof preparation"
  description="The expected impact of the recommendation is not backed by completed actions or validated customer-ready evidence."
  recommendation="Create a proof follow-up action before using this point in the renewal discussion."
  sourceScope="Closed service actions"
  sourceStrength="partial"
  validationStatus="Expected outcome, not proven"
/>
```

This is good because:

- expected value is not presented as proven value
- proof maturity is visible
- the recommendation turns the proof gap into follow-up

---

## Human validation alert example

```tsx
<AlertCard
  severity="warning"
  title="Asset recommendation needs expert validation"
  equipment="SM6 24kV Bus Coupler"
  description="The recommendation is based on Intelligence interpretation of multiple Health signals and should be reviewed before customer use."
  recommendation="Validate the recommendation with a Schneider expert before creating the customer action plan."
  source="Live telemetry and connected asset benchmark"
  sourceStrength="high"
  validationStatus="Human validation needed"
/>
```

This is good because:

- the alert does not claim that AI has approved the decision
- the validation requirement is explicit
- the recommendation preserves human accountability

---

## Good example

```tsx
<AlertCard
  severity="warning"
  title="Partial adoption of monitoring features"
  equipment="Customer portal"
  description="The customer has activated monitoring but has not reviewed recent recommendations."
  recommendation="Prepare a short usage review and share the most relevant recommendations during the next customer touchpoint."
/>
```

This is good because:

- the severity is appropriate
- the title names the signal
- the scope is clear
- the description explains why it matters
- the recommendation gives a useful next step

---

## Multiple alerts example

```tsx
<PriorityList
  title="Renewal blockers"
  description="Risks prioritized by potential impact on the renewal decision."
>
  <AlertCard
    severity="critical"
    title="Value proof is not customer-ready"
    equipment="Renewal preparation"
    description="Closed actions, resolved incidents and monitoring outcomes exist, but they are not yet compiled into a customer-facing value summary."
    recommendation="Prepare a concise value proof summary linking completed actions, avoided risks and recommended next steps before the next customer meeting."
  />

  <AlertCard
    severity="warning"
    title="Connectivity gaps weaken the service proof"
    equipment="Monitoring coverage"
    description="Eight assets are currently unreachable, including two critical assets. This limits the credibility of the monitoring story before renewal."
    recommendation="Launch a connectivity recovery review and clarify which gaps require customer-side network action."
  />

  <AlertCard
    severity="info"
    title="Latest recommendations are available"
    equipment="Service recommendations"
    description="New service recommendations can support the next customer discussion."
    recommendation="Review the recommendations and decide which ones should be shared with the customer."
  />
</PriorityList>
```

---

## Bad example

Do not generate alerts without useful recommendations:

```tsx
<AlertCard
  severity="warning"
  title="Issue detected"
  equipment="System"
  description="Something may require attention."
  recommendation="Check."
/>
```

This is weak because:

- the title is vague
- the scope is generic
- the description does not explain impact
- the recommendation is not actionable

Also avoid alerts that claim AI validation or proven value without evidence:

```tsx
<AlertCard
  severity="critical"
  title="AI confirmed the recommendation"
  equipment="Asset intelligence"
  description="The AI is confident that this action will prove customer value."
  recommendation="Approve the recommendation."
/>
```

This is weak because:

- AI confidence replaces visible source evidence
- expected value is presented as proven
- human validation is hidden

---

## Content quality rules

An alert should answer:

1. What is the signal?
2. Where does it apply?
3. Why does it matter?
4. What evidence, source or visibility limit affects trust?
5. What should the user do next?
6. Does the recommendation need human validation before action?

If the alert does not answer these questions, refine it before accepting the
screen.

---

## Anti-patterns

Do not generate:

- alerts without recommendations
- vague alert titles
- generic equipment labels such as `System`
- critical severity for minor issues
- long alerts that read like reports
- many alerts with the same severity by default
- alerts used as action cards
- alerts used as metrics
- alerts used for decorative emphasis
- positive states that do not require attention
- long unordered alert groups without `PriorityList`
- custom alert card components
- local alert card implementations
- local alert card wrappers
- internal imports from package files
- alerts that hide source scope, source strength, freshness or validation status when they affect trust
- alerts that use confidence language instead of source evidence
- alerts that present non-connected assets as live-monitored
- alerts that present AI-assisted Intelligence interpretation as source-system truth
- alerts that present expected outcomes as proven value
- alerts that present technical outcomes or internal proof as customer-ready proof without validation
- alerts that imply AI has approved a critical decision
- alerts that contain full recommendation detail, phased action plans or expected outcomes that belong in a richer recommendation pattern

---

## Review checklist

After generation, verify:

- every `AlertCard` is imported from `design-system-ai-lab`
- no local alert card replacement was created
- no local alert card wrapper was created
- no internal package import is used
- every `AlertCard` has a severity
- every `AlertCard` has a specific title
- every `AlertCard` has equipment or scope
- every `AlertCard` has a meaningful description
- every `AlertCard` has a concrete recommendation
- trust-sensitive alerts expose source, scope, freshness or validation context when relevant
- asset-heavy alerts preserve asset scope, connectivity and source context when relevant
- value proof alerts do not present expected outcomes as proven value
- AI-assisted interpretation is not presented as source-system truth
- human validation remains visible for critical decisions
- severity matches the situation
- critical alerts appear first
- alerts are sorted by severity and business impact
- alerts are connected to the screen goal
- alerts are connected to business context or decision context
- several alerts are grouped with `PriorityList`
- related actions are shown with `ActionCard` when appropriate
- data, proof, ownership or validation gaps are converted into owned actions when appropriate
- full recommendation detail is not forced into `AlertCard`
- alerts help the user understand what to do next

---

## Final principle

An `AlertCard` should turn a signal into an evidence-aware decision point.

If the alert does not help the user understand impact, trust the signal,
prioritize the issue or decide the next step, do not generate it.

If the alert depends on source scope, source strength, partial visibility,
proof maturity or human validation but hides that context, revise it before
accepting the screen.
