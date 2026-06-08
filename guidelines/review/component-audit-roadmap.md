# Component audit roadmap

This roadmap defines how to audit, update and evolve the design system
components and business patterns so they correctly carry the documented
knowledge, principles, composition rules and review criteria.

It is a working document for the next phase of the demo: first align component
and pattern documentation, then use the findings to decide which implementation
changes are needed in the code.

---

## Purpose

The knowledge, principles, composition guides and review documents are now
aligned around a common model:

```txt
Observed facts
→ source scope and evidence strength
→ interpreted signals
→ evidence-aware recommendations
→ owned actions
→ expected outcome or proof status when relevant
→ human validation when needed
```

The next step is to verify whether each component and pattern can support this
model without forcing Figma Make to invent local markup, bypass the package or
hide important trust information.

This audit should answer three questions:

1. Does the documentation tell Figma Make how to use the component correctly?
2. Does the component API support the trust, evidence and asset-intelligence
   signals required by the documentation?
3. Does the implementation need to evolve before the component can be considered
   production-ready for these use cases?

---

## Reference documents

Use these files as the source of truth during the audit:

```txt
Guidelines.md
setup.md
knowledge/ux-insights.md
knowledge/user-needs.md
knowledge/design-implications.md
knowledge/tested-patterns.md
knowledge/open-questions.md
knowledge/asset-intelligence.md
principles/accessibility.md
principles/ai-usage.md
principles/eco-design.md
principles/evidence-and-trust.md
composition/overview.md
composition/decision-layout.md
composition/screen-patterns.md
review/acceptance-checklist.md
review/anti-patterns.md
tokens.md
styles.md
```

---

## Audit goals

The audit should ensure that components and patterns:

- support documented user needs when relevant
- preserve evidence and trust-critical information
- do not hide uncertainty, scope limits or proof gaps
- distinguish observed facts from interpretation
- distinguish raw Health facts from Intelligence interpretation
- distinguish expected outcomes, technical outcomes, internal proof and
  customer-ready proof
- show asset scope, connectivity status, source scope and source strength when
  they affect trust
- avoid using confidence language as a substitute for source evidence
- avoid presenting non-connected assets as live-monitored
- avoid presenting expected outcomes as proven value
- avoid using GenAI for structured retrieval or source facts
- keep human validation visible for critical decisions
- remain accessible, sober and eco-conscious
- use package components instead of local wrappers or custom reconstructions

---

## Audit method

Audit each component or pattern with the same grid.

### 1. Current role

Document what the component currently does.

Questions:

- What decision or interaction does it support?
- Is it a primitive, decision component or business pattern?
- Is it used directly by Figma Make or mostly through higher-level patterns?

### 2. Knowledge alignment

Identify which knowledge files are relevant.

Questions:

- Does the component support a documented user need?
- Does it support asset intelligence, value proof, renewal risk, monitoring,
  action ownership or customer communication?
- Does it need to reflect open questions or demo-only assumptions?

### 3. Trust signals

Identify what trust-critical information the component should be able to carry.

Possible signals:

```txt
source
freshness
source scope
source strength
asset scope
connectivity status
partial visibility
validation status
proof status
owner
due date
priority
affected scope
human validation
```

### 4. Asset-heavy behavior

Define whether the component has specific asset-intelligence responsibilities.

Check whether it should support:

```txt
asset hierarchy
site, zone, room or asset group
connected assets
partially connected assets
non-connected assets
raw Health facts
lifecycle facts
Intelligence interpretation
expected outcomes
technical outcomes
internal proof
customer-ready proof
```

### 5. AI usage constraints

Check whether the component could encourage wrong AI usage.

Do not use GenAI for:

```txt
basic retrieval
counts
statuses
dates
owners
asset hierarchy
telemetry values
connectivity status
lifecycle status
source scope
source strength
proof source facts
```

Use GenAI only for:

```txt
synthesis
explanation
prioritization
recommendation
proof gap explanation
grounded action-plan drafting
customer-ready reformulation from grounded facts
```

### 6. Documentation gaps

Identify missing documentation sections.

Typical missing sections:

- Knowledge alignment
- Evidence and trust rules
- Asset-heavy behavior
- AI usage constraints
- Anti-patterns
- Review checklist
- Example with incomplete data
- Example with proof gap

### 7. Code gaps

Identify whether current props and implementation are enough.

Questions:

- Are required trust signals available as props?
- Are optional props typed clearly enough?
- Does the component make important states visible by default?
- Does it rely too much on free-text content?
- Would Figma Make need to build local markup to express the required state?
- Are examples and stories needed to guide generation?

### 8. Priority decision

Classify the component or pattern.

```txt
P0 — Must fix before relying on the component for asset intelligence or value proof
P1 — Important alignment improvement
P2 — Documentation or usage-rule cleanup
P3 — No immediate change needed
```

---

## Audit matrix template

Use this matrix while reviewing each component or pattern.

| Item | Type | Current role | Trust signals needed | Asset-heavy impact | Documentation update | Code update | Priority |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ComponentName | Simple / Decision / Pattern | TBD | TBD | TBD | Yes / No | Yes / No | P0 / P1 / P2 / P3 |

---

## Phase 1 — Audit simple components

Simple components should not carry complex business logic, but they must not
contradict the principles.

Primary focus:

- accessibility
- clear labels
- no status by color alone
- no decorative complexity
- no false confidence through style
- no local wrappers
- correct use inside decision components and patterns

Components to audit:

```txt
Badge
Button
Card
Dialog
Field
Input
Label
Select
Textarea
```

Expected documentation updates:

- clarify when the component is safe to use directly
- clarify when a decision component or pattern should be preferred
- add trust-sensitive examples for `Badge`, `Card` and `Dialog`
- add anti-patterns for color-only status or over-generic containers

Expected code updates:

- likely low
- possible examples or stories updates
- possible accessibility or label improvements if gaps are found

Priority estimate:

```txt
P1 — Badge, Dialog, Card
P2 — Button, Field, Input, Label, Select, Textarea
```

---

## Phase 2 — Audit decision components

Decision components carry the screen logic from facts to action.

Primary focus:

- visible facts before interpretation
- evidence-aware recommendations
- trust and source cues
- ownership and follow-through
- no unsupported alerts or actions
- no hidden uncertainty

Components to audit:

```txt
MetricCard
MetricGrid
AlertCard
PriorityList
ActionCard
ActionList
SectionHeader
StatusSummary
```

Expected documentation updates:

- add evidence and trust rules
- add asset-heavy behavior when relevant
- add AI usage constraints
- add anti-patterns and review criteria
- clarify how each component participates in the decision flow

Expected code updates:

- likely medium
- possible props for source, freshness, source scope, source strength,
  affected scope, recommendation, evidence and validation state
- possible examples or stories for proof gaps and partial visibility

Priority estimate:

```txt
P0 — MetricCard, AlertCard, ActionCard
P1 — StatusSummary, MetricGrid, PriorityList, ActionList
P2 — SectionHeader
```

---

## Phase 3 — Audit business patterns

Business patterns should encode the most important knowledge and prevent generic
screens.

Primary focus:

- asset intelligence
- monitoring coverage
- renewal risk
- customer-ready value proof
- action creation
- trust and proof discipline

Patterns to audit:

```txt
CustomerStatusCard
ConnectivityCoverageCard
RenewalRiskSummary
ValueProofCard
CreateActionDialog
```

Expected documentation updates:

- add knowledge alignment
- add asset intelligence behavior
- add proof discipline
- add AI usage constraints
- add review checklist
- add examples for partial, incomplete and customer-ready states

Expected code updates:

- likely medium to high
- possible new props for asset scope, source scope, source strength,
  partially connected assets, proof status, proof gaps, expected outcomes,
  technical outcomes, internal proof and customer-ready proof
- possible stricter TypeScript types
- possible example and story additions

Priority estimate:

```txt
P0 — ConnectivityCoverageCard, ValueProofCard
P1 — CustomerStatusCard, RenewalRiskSummary, CreateActionDialog
```

---

## Component-specific audit focus

### Badge

Check whether badge documentation supports clear trust labels such as:

```txt
Partially connected
Expected outcome, not proven
Technical outcome, not customer-ready proof
Internal proof, not customer-ready
Source strength: partial
```

Do not rely on tone alone.

### MetricCard

Check whether `MetricCard` can show:

```txt
source
freshness
source scope
source strength
helper text
trend context
validation status
partial visibility
```

Avoid metrics that sound precise but are not grounded in source evidence.

### AlertCard

Check whether `AlertCard` supports:

```txt
visible fact
interpreted signal
affected scope
recommendation
evidence or source context
severity
human validation when needed
```

Asset alerts should include enough asset, source or connectivity context to make
the recommendation reviewable.

### ActionCard

Check whether `ActionCard` supports:

```txt
owner
due date
priority
status
affected scope
asset context
handoff context
validation state
```

Asset-related actions should include site, zone, room, asset group or asset
context when needed for follow-through.

### StatusSummary

Check whether `StatusSummary` avoids hiding partial visibility behind a single
overconfident status.

It should be able to show uncertainty, scope limits and proof status when they
affect the decision.

### CustomerStatusCard

Check whether `CustomerStatusCard` can show:

```txt
customer or account context
plan or contract status
owner
coverage status
asset scope
connectivity status
source scope
source strength
trust status
renewal timing
```

It should not imply full operational visibility when only monitored assets are
represented.

### ConnectivityCoverageCard

Check whether `ConnectivityCoverageCard` can show:

```txt
connected assets
partially connected assets
non-connected assets
disconnected critical assets
coverage rate
affected scope
source scope
source strength
freshness
monitoring status
```

This is likely a P0 pattern for code evolution.

### RenewalRiskSummary

Check whether `RenewalRiskSummary` can show:

```txt
risk reason
risk signal
proof gap
mitigation action
owner
source evidence
expected outcome
customer-ready proof status
```

It must not use confidence language as a substitute for source evidence.

### ValueProofCard

Check whether `ValueProofCard` can distinguish:

```txt
expected outcome
technical outcome
internal proof
customer-ready proof
proof gap
source evidence
proof freshness
validation status
```

This is likely a P0 pattern for code evolution.

### CreateActionDialog

Check whether `CreateActionDialog` keeps human ownership visible and supports
critical decision safeguards.

For asset-related actions, check whether the action can include site, zone, room,
asset group or asset context.

---

## Documentation update standard

Each component or pattern documentation should include, when relevant:

```txt
Purpose
When to use
When not to use
Knowledge alignment
Evidence and trust rules
Asset-heavy behavior
AI usage constraints
Accessibility notes
Eco-design notes
Anti-patterns
Review checklist
Example usage
```

For simple components, keep the documentation lightweight and avoid forcing
business logic into primitives.

For decision components and patterns, make trust and decision responsibility
explicit.

---

## Code evolution decision rules

Do not change component code until documentation gaps are clear.

Change the code when:

- required trust signals cannot be expressed with existing props
- required states depend on free-text workarounds
- Figma Make would need local wrappers to represent the right structure
- source scope, source strength or proof status cannot be shown clearly
- asset-heavy states cannot be represented without ambiguity
- expected outcomes, technical outcomes, internal proof and customer-ready proof
  cannot be distinguished
- human validation or action ownership cannot be represented

Do not change the code when:

- documentation can solve the issue through usage rules
- the component is a primitive and the responsibility belongs to a higher-level
  decision component or pattern
- the state can be expressed safely through existing typed props and examples

---

## Implementation backlog template

After documentation audit, create a code backlog with this format:

| Item | Gap | Proposed change | Breaking? | Priority | Notes |
| --- | --- | --- | --- | --- | --- |
| ConnectivityCoverageCard | Missing partially connected state | Add optional `partiallyConnectedAssets` prop | No | P0 | Required for asset intelligence demo |
| ValueProofCard | Proof states collapsed | Add explicit proof state props | Maybe | P0 | Needs type review |

---

## Acceptance criteria for the audit phase

The audit phase is complete when:

- every simple component has been reviewed
- every decision component has been reviewed
- every business pattern has been reviewed
- each item has a documented priority
- each item has a documentation decision
- each item has a code decision
- P0 code gaps are identified clearly
- no component documentation contradicts the knowledge layer or principles
- no pattern encourages hidden uncertainty, fake proof or overconfident AI usage

---

## Final principle

Component documentation should make the right generated screen easier than the
wrong one.

If a component or pattern cannot help Figma Make preserve evidence, trust,
source context, asset visibility, action ownership and proof discipline, revise
its documentation first, then evolve its implementation only where the documented
contract cannot be supported by the existing code.
