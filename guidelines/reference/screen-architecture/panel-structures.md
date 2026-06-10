# Panel structures

## Purpose

This file defines common detail-panel structures for decision workspaces.

A panel is not just a drawer. It is where the user verifies context, understands evidence and decides what to do next for a selected item.

---

## Core rule

A panel should answer the selected item's user questions.

Do not create a panel as a container for unrelated cards.

Recommended structure:

```txt
DetailPanelHeader
DetailPanelTabs, when multiple questions exist
DetailPanelBody
SectionStack
DetailPanelFooter or StickyActionBar
```

---

## Generic detail panel anatomy

```txt
Header
- selected item identity
- status
- scope
- close action

Tabs, optional
- user-question groups

Body
- facts before interpretation
- source and evidence cues
- risks or findings
- recommendations
- history or documents when relevant

Footer
- persistent contextual actions
```

---

## Asset detail panel

Use for installed base, asset intelligence and recommendation review.

Recommended tabs:

```txt
Overview
Health
Intelligence
History
Documents
```

Overview should show:

```txt
asset identity
site / room / location
service coverage
connectivity status
DPP or passport status
component hierarchy summary when relevant
```

Health should show:

```txt
raw Health facts
freshness
monitoring mode
compact metrics
source scope
validation state
```

Intelligence should show:

```txt
interpretation
benchmark when grounded
recommendations
source strength
human validation status
```

---

## Customer detail panel

Use for customer portfolio or account review workspaces.

Recommended tabs:

```txt
Overview
Coverage
Risks
Value proof
Actions
```

Coverage should show site scope, connected assets, non-connected assets, monitoring freshness and visibility limits.

Value proof should distinguish completed activities, expected outcomes, internal proof, customer-ready proof and proof gaps.

---

## Recommendation detail panel

Use when recommendations require review before action or customer communication.

Recommended tabs:

```txt
Summary
Evidence
Impact
Validation
Actions
```

Evidence must show observed facts, source, source scope, source strength, freshness and known gaps.

Impact must distinguish expected value from proven value.

Validation must show whether the recommendation is ready for customer communication.

---

## Risk detail panel

Use for critical alerts, service risks and renewal blockers.

Recommended sections:

```txt
Risk summary
Affected scope
Observed facts
Evidence and source
Recommendation
Owner and actions
```

Every risk detail must show what fact or evidence makes the risk credible.

---

## Proof detail panel

Use when the user needs to understand whether value proof is customer-ready.

Recommended sections:

```txt
Proof status
Completed activity
Expected outcome
Internal proof
Customer-ready proof
Proof gap
Source and validation
```

Do not collapse these states into one proof label.

---

## Panel anti-patterns

Avoid:

```txt
panel body as a long stack of large cards
repeated context in every tab
recommendations before evidence
confidence labels without source strength
sticky footer with too many primary actions
tabs based on system names rather than user questions
raw documents mixed with summary facts at the same level
```

---

## Acceptance criteria

A generated panel passes when:

```txt
The header identifies the selected item.
The body starts with facts or context.
Tabs separate user questions when needed.
Source and validation are visible when trust matters.
The footer keeps only contextual next actions.
The panel avoids card saturation.
```
