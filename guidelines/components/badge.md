# Badge Guidelines

## Purpose

Use `Badge` to show concise status, tone or metadata.

A badge should help the user quickly understand a state, category or signal.

A badge is not an action.

A badge is not a button.

A badge is not a decoration.

In generated screens, badges should support scanning, prioritization and status
understanding.

---

## Import

Import `Badge` from the package root:

```tsx
import { Badge } from "design-system-ai-lab";
```

If other design system components are needed, import them from the same package
root:

```tsx
import {
  AlertCard,
  Badge,
  Button,
  Card,
  CustomerStatusCard,
  RenewalRiskSummary,
  StatusSummary,
} from "design-system-ai-lab";
```

Do not import `Badge` from internal package paths.

Do not recreate `Badge` locally.

Do not create custom badge wrappers.

---

## Component role

Use `Badge` when the user needs to quickly identify:

- status
- tone
- metadata
- priority
- category
- plan state
- risk state
- renewal state
- coverage state
- completion state
- source strength
- partial visibility
- proof status
- Health or Intelligence label

Badges should be short and easy to scan.

Badges should not carry the full explanation.

Use cards, alerts, summaries or normal text for explanations.

A badge may label a trust-sensitive state, but it must not become the evidence
itself. Source, freshness, scope, proof gaps and validation context should stay
visible in the surrounding component when they affect trust.

---

## Props

Use the component with these props:

```tsx
<Badge tone="warning">Connectivity partial</Badge>
```

Allowed tone values:

```txt
neutral
primary
success
warning
danger
```

If no tone is provided, the badge should be treated as neutral metadata.

Do not use unsupported tone values.

Invalid tone values include:

```txt
info
critical
error
muted
default
secondary
```

If Make needs an informational badge, use `neutral`.

If Make needs to communicate partial, uncertain or not-customer-ready status,
use `warning`.

If Make needs to communicate critical risk, use `danger`.

---

## Tone rules

Use only these tone values:

```txt
neutral
primary
success
warning
danger
```

Do not generate `tone="info"`.

`info` is not part of the Badge API.

### Neutral

Use `neutral` for secondary metadata or low-emphasis information.

Examples:

```txt
Planned
Draft
Standard
Optional
Metadata
Informational metadata
Renewal in 62 days
Last updated today
Source: manual inventory
Health fact
Intelligence label
```

Use `neutral` when the information is useful but not a success, warning, risk or
primary category.

---

### Success

Use `success` for healthy, complete or active-positive states.

Examples:

```txt
Connected
Active
Completed
Healthy
On track
Customer-ready
Customer-ready proof
Source strength: high
```

Do not use `success` for vague positive decoration.

The label should explain what is successful.

Do not use `success` for expected outcomes, technical outcomes or internal
proof unless the surrounding content makes clear what has actually been proven
and validated.

---

### Warning

Use `warning` for partial, delayed, uncertain or at-risk states that are not yet
critical.

Examples:

```txt
Connectivity partial
Adoption low
Follow-up delayed
Review needed
Internal proof, not customer-ready
Source partial
Renewal watch
Proof incomplete
Partially connected
Source strength: partial
Expected outcome, not proven
Technical outcome, not customer-ready proof
```

Use `warning` when the user should pay attention but does not need to treat the
situation as urgent.

---

### Danger

Use `danger` for critical risk, destructive state or severe issue.

Examples:

```txt
Critical risk
Overdue
Disconnected
Escalation needed
Renewal at risk
Critical assets disconnected
Non-connected critical assets
Proof gap unresolved
```

Do not use `danger` for minor issues.

Do not overuse `danger`, or the screen will lose prioritization.

Use `AlertCard severity="critical"` for risks that need explanation and a
recommendation.

---

### Primary

Use `primary` for active plan, selected state or important category.

Examples:

```txt
Active plan
Selected
Current
Priority account
Managed service
```

Use `primary` to mark something structurally important, not to create
decoration.

Do not use `primary` simply because the badge should stand out.

---

## Good badge labels

Good badge labels are short and meaningful.

Examples:

```txt
Active plan
Connected
Connectivity partial
Critical risk
Overdue
Renewal watch
Source partial
On track
Proof incomplete
Customer-ready
Partially connected
Non-connected
Source strength: partial
Expected outcome, not proven
Internal proof, not customer-ready
Customer-ready proof
Health fact
Intelligence interpretation
```

Good labels are:

- short
- status-oriented
- easy to scan
- understandable without extra explanation

---

## Bad badge labels

Avoid long or vague labels such as:

```txt
This customer has some issues to review
Something might require attention
Important information
Click to see more
Status
Info
tone="info"
Issue
High confidence
AI confirmed
Value proven
Asset intelligence OK
```

## Recommended tone mapping

Use this mapping when generating badges:

| State or label | Recommended tone |
| --- | --- |
| Active plan | `primary` |
| Current or selected | `primary` |
| Healthy | `success` |
| Completed | `success` |
| Customer-ready | `success` |
| Renewal in 90 days | `neutral` |
| Informational metadata | `neutral` |
| Health fact | `neutral` |
| Intelligence interpretation | `neutral` |
| Renewal watch | `warning` |
| Connectivity partial | `warning` |
| Source partial | `warning` |
| Review needed | `warning` |
| Internal proof, not customer-ready | `warning` |
| Expected outcome, not proven | `warning` |
| Critical risk | `danger` |
| Critical assets disconnected | `danger` |
| Renewal at risk | `danger` |

Do not use `tone="info"` for informational badges.

Use `neutral` instead.

Badges should not become sentences.

Use `Card`, `StatusSummary`, `AlertCard` or normal text for longer explanations.

Avoid confidence language that sounds precise but does not expose source
evidence. A badge such as `High confidence` is weaker than a clear label such
as `Source strength: partial` or `Customer-ready proof`.

---

## When to use Badge

Use `Badge` for:

- customer status
- contract status
- plan status
- risk tone
- action priority label
- metadata
- short category labels
- completion state
- connectivity status
- renewal watch state
- value proof status
- monitoring coverage state
- source strength state
- partial visibility state
- asset connectivity state
- proof readiness state
- Health or Intelligence label

---

## When not to use Badge

Do not use `Badge` for:

- actions
- buttons
- links
- long explanations
- metrics
- alerts that need recommendations
- decorative tags without meaning
- proof claims without visible evidence
- confidence claims without source context
- AI validation claims
- interactive filters unless explicitly designed as non-button metadata

Use other components instead:

| Need | Use |
| --- | --- |
| Trigger an action | `Button` |
| Show a risk with explanation and recommendation | `AlertCard` |
| Group risks or blockers | `PriorityList` |
| Show a metric | `MetricCard` |
| Arrange metrics | `MetricGrid` |
| Show a recommended action | `ActionCard` |
| Group actions | `ActionList` |
| Show structured status context | `StatusSummary` |
| Show customer context | `CustomerStatusCard` |
| Show renewal context | `RenewalRiskSummary` |
| Show value proof | `ValueProofCard` |
| Group related content | `Card` |

---

## Placement rules

Place badges close to the information they qualify.

Common placements:

```txt
Card header or body
StatusSummary badge area
CustomerStatusCard badge area
ConnectivityCoverageCard badge area
RenewalRiskSummary badge area
ValueProofCard badge area
AlertCard content
ActionCard priority information
```

Use badges to support scanning.

Do not scatter badges randomly across the screen.

Do not place badges far away from the status they describe.

---

## Status communication rules

A badge can help communicate status, but it should not be the only source of
meaning.

Good:

```tsx
<Badge tone="warning">Connectivity partial</Badge>
<p>Some assets are not currently connected, which may reduce monitoring coverage.</p>
```

Weak:

```tsx
<Badge tone="warning">Issue</Badge>
```

The second example is too vague.

The badge should name the status clearly.

---

## Trust and evidence labels

Use `Badge` to label trust-sensitive states only when the surrounding component
also shows the source, scope, freshness, proof gap or validation context needed
to understand the label.

Good:

```tsx
<Badge tone="warning">Source strength: partial</Badge>
<p>Source scope: CompanyName monitored assets only.</p>
```

Good:

```tsx
<Badge tone="warning">Expected outcome, not proven</Badge>
<p>Value proof requires action completion and validation.</p>
```

Weak:

```tsx
<Badge tone="success">High confidence</Badge>
```

The weak example uses confidence language without visible source evidence.

Do not use a badge to make weak evidence look stronger than it is.

---

## Asset-heavy badge labels

For asset-heavy screens, badge labels should help distinguish asset visibility
and data interpretation states.

Good labels:

```txt
Connected
Partially connected
Non-connected
Critical assets disconnected
Source strength: partial
Source: manual inventory
Health fact
Intelligence interpretation
```

Do not use color tone alone to distinguish connected, partially connected and
non-connected assets. The distinction must be present in the badge text or the
surrounding text.

Do not use badges to present non-connected assets as live-monitored

---

## Proof status badge labels

For value proof screens, badge labels should distinguish proof maturity.

Good labels:

```txt
Expected outcome, not proven
Technical outcome
Internal proof
Internal proof, not customer-ready
Customer-ready proof
Proof incomplete
Proof gap unresolved
```

Do not use `success` or confident wording to present expected outcomes as
proven value.

Do not present technical outcomes or internal proof as customer-ready proof
unless the surrounding content shows validation and customer-ready evidence

---

## Badge usage in business patterns

Several business patterns accept badge data directly.

Prefer passing badges through pattern props when available.

Example:

```tsx
<CustomerStatusCard
  customerName="Greenfield Industries"
  plan="Advanced service plan"
  coverage="68% connected"
  badges={[
    { label: "Active plan", tone: "primary" },
    { label: "Connectivity partial", tone: "warning" },
    { label: "Source strength: partial", tone: "warning" },
    { label: "Renewal in 62 days", tone: "neutral" },
  ]}
/>
```

Example:

```tsx
<RenewalRiskSummary
  customerName="Greenfield Industries"
  renewalWindow="62 days"
  valueProofStatus="Incomplete"
  badges={[
    { label: "Renewal watch", tone: "warning" },
    { label: "Value proof incomplete", tone: "danger" },
    { label: "Expected outcome, not proven", tone: "warning" },
  ]}
/>
```

Do not manually rebuild the badge area if the pattern already supports badges.

---

## Good examples

```tsx
<Badge tone="primary">Active plan</Badge>
```

```tsx
<Badge tone="success">Connected</Badge>
```

```tsx
<Badge tone="warning">Connectivity partial</Badge>
```

```tsx
<Badge tone="danger">Critical risk</Badge>
```

```tsx
<Badge tone="neutral">Renewal in 62 days</Badge>
```

```tsx
<Badge tone="warning">Partially connected</Badge>
```

```tsx
<Badge tone="warning">Source strength: partial</Badge>
```

```tsx
<Badge tone="warning">Expected outcome, not proven</Badge>
```

```tsx
<Badge tone="neutral">Internal proof, not customer-ready</Badge>
```

---

## Multiple badges example

```tsx
<div className="flex flex-wrap gap-2">
  <Badge tone="primary">Active plan</Badge>
  <Badge tone="warning">Connectivity partial</Badge>
  <Badge tone="neutral">Renewal in 62 days</Badge>
</div>
```

Use multiple badges only when each badge adds useful meaning.

Do not create badge clutter.

Do not use more badges than the user can quickly scan.

---

## Bad examples

Do not use a badge as a button:

```tsx
<Badge tone="primary">Click here</Badge>
```

Use a `Button` instead:

```tsx
<Button>View details</Button>
```

Do not use vague badge labels:

```tsx
<Badge tone="warning">Issue</Badge>
```

Use a clearer label:

```tsx
<Badge tone="warning">Connectivity partial</Badge>
```

Do not use unsupported tone values:

```tsx
<Badge tone="info">Renewal in 90 days</Badge>
```

Use a supported tone:

```tsx
<Badge tone="neutral">Renewal in 90 days</Badge>
```

Or, if the status requires attention:

```tsx
<Badge tone="warning">Renewal watch</Badge>
```

Do not create a local badge implementation:

```tsx
function Badge() {
  return <span />;
}
```

Use the package `Badge` directly.

Do not use a badge to claim AI validation:

```tsx
<Badge tone="success">AI confirmed</Badge>
```

Use visible evidence and human validation in the surrounding component instead.

Do not present expected outcomes as proven value:

```tsx
<Badge tone="success">Value proven</Badge>
```

Use a precise label:

```tsx
<Badge tone="warning">Expected outcome, not proven</Badge>
```

---

## Relationship with other components

### Badge and Card

Use badges inside `Card` only when a generic grouped section needs compact
metadata.

Prefer business patterns when the badge belongs to a known business summary.

```tsx
<Card title="Customer status">
  <div className="flex gap-2">
    <Badge tone="primary">Active plan</Badge>
    <Badge tone="warning">Connectivity partial</Badge>
  </div>
</Card>
```

### Badge and StatusSummary

Use the `badges` prop on `StatusSummary` when showing structured status context.

### Badge and business patterns

Use the `badges` prop on patterns such as `CustomerStatusCard`,
`ConnectivityCoverageCard`, `RenewalRiskSummary` and `ValueProofCard` when
available.

### Badge and AlertCard

Use `AlertCard` for the alert itself.

Use `Badge` only for short status labels around the alert context if needed.

### Badge and Button

Badges are not interactive.

Buttons are interactive.

Do not substitute one for the other.

---

## Anti-patterns

Do not generate:

- badges used as buttons
- badges used as links
- long sentence badges
- decorative badges without meaning
- many badges competing for attention
- `danger` badges for minor issues
- vague labels such as `Status`, `Info` or `Issue`
- unsupported tone values such as `info`, `critical`, `error`, `muted`, `default` or `secondary`
- custom badge components
- local badge implementations
- badge wrappers that duplicate package behavior
- internal imports from package files
- inline-styled raw badge-like spans
- badges that use confidence language instead of source evidence
- badges that claim AI validation
- badges that present expected outcomes as proven value
- badges that present technical outcomes or internal proof as customer-ready proof without validation
- badges that use color alone to distinguish connected, partially connected and non-connected assets
- badges that hide source strength, source scope or proof status when they affect trust

---

## Review checklist

After generation, verify:

- every `Badge` is imported from `design-system-ai-lab`
- every `Badge` uses one of the allowed tones: `neutral`, `primary`, `success`, `warning` or `danger`
- no `Badge` uses unsupported tones such as `info`, `critical`, `error`, `muted`, `default` or `secondary`
- every badge label is short
- every badge label communicates useful status or metadata
- trust-sensitive badges are supported by visible surrounding evidence or context
- source strength badges are explicit when source strength affects trust
- asset connectivity badges distinguish connected, partially connected and non-connected states in text
- proof status badges distinguish expected outcomes, technical outcomes, internal proof and customer-ready proof when relevant
- badges are not used as buttons
- badges are not used as links
- badges are not used for long explanations
- `danger` is reserved for real critical states
- `warning` is used for partial, delayed or uncertain states
- `success` is not used to make expected outcomes look proven
- confidence language does not replace source evidence
- badges do not claim AI validation
- badges support scanning and hierarchy
- business pattern `badges` props are used when appropriate
- no local badge replacement was created
- no local badge wrapper was created
- no internal package import is used

---

## Final principle

A `Badge` should make status easier to scan without becoming the evidence
itself.

If the badge does not clarify status, tone, metadata, source strength or proof
maturity, do not generate it.
