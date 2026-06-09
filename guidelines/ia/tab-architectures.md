# Tab architectures

## Purpose

This file defines approved tab structures for detail panels and workspaces.

Tabs are used to separate user questions, not internal systems or raw data
sources.

---

## Core rule

Use tabs only when the selected object has several distinct user questions.

Do not create tabs for decoration.

Do not create tabs when a short SectionStack is enough.

---

## Asset tabs

Use for asset detail, installed base and asset intelligence.

Recommended order:

```txt
Overview
Health
Intelligence
History
Documents
```

### Overview

Question:

```txt
What is this asset and what context matters?
```

Contains:

```txt
identity
location
service coverage
connectivity
DPP / passport status
asset family and lifecycle context
```

### Health

Question:

```txt
What is observed about the asset condition?
```

Contains:

```txt
raw Health facts
compact metrics
freshness
monitoring mode
source scope
known visibility limits
```

### Intelligence

Question:

```txt
What is interpreted from the facts and what action is recommended?
```

Contains:

```txt
interpretation
benchmark when grounded
recommendation readiness
expected outcome
source strength
validation status
```

### History

Question:

```txt
What happened before and what changed over time?
```

Contains:

```txt
service visits
alerts
case history
maintenance events
commissioning
```

### Documents

Question:

```txt
What source documents can I open or share?
```

Contains:

```txt
reports
manuals
certificates
diagrams
customer-ready files
```

---

## Recommendation tabs

Use when a recommendation must be reviewed before action or customer
communication.

Recommended order:

```txt
Summary
Evidence
Impact
Validation
Actions
```

### Summary

```txt
What is recommended?
Why now?
What is the scope?
```

### Evidence

```txt
What facts support it?
Where do they come from?
How fresh and strong are they?
```

### Impact

```txt
What operational or customer impact is expected?
Is it an expected outcome or proven value?
```

### Validation

```txt
Is it ready for customer communication?
Who still needs to validate it?
```

### Actions

```txt
Who owns the next step?
By when?
With what priority?
```

---

## Customer tabs

Use for customer portfolio, monitoring and review-readiness workspaces.

Recommended order:

```txt
Overview
Coverage
Risks
Value proof
Actions
```

### Overview

```txt
customer context
plan or membership
CSM or owner
renewal timing
main objective
```

### Coverage

```txt
sites
assets covered
connected assets
non-connected assets
monitoring freshness
visibility limits
```

### Risks

```txt
service risks
renewal blockers
open alerts
customer-impacting issues
```

### Value proof

```txt
completed activities
expected outcomes
internal proof
customer-ready proof
proof gaps
```

### Actions

```txt
owned actions
handoffs
priority
status
due date
```

---

## Renewal tabs

Use for renewal risk review and renewal preparation.

Recommended order:

```txt
Summary
Proof gaps
Risks
Recommendations
Actions
```

Do not present expected outcomes as proven value.

Do not hide proof gaps behind a readiness score.

---

## QBR tabs

Use when the user is preparing a customer review.

Recommended order:

```txt
Readiness
Proof
Risks
Recommendations
Actions
```

The QBR tab structure should support customer-ready storytelling without hiding
internal uncertainty.

---

## Bad tab labels

Avoid:

```txt
Data
AI
API
Raw
Misc
Other
```

unless the prompt explicitly asks for a technical diagnostic interface.

---

## Figma Make acceptance criteria

A generated tab architecture passes when:

```txt
Tabs correspond to user questions.
Tab order moves from context to evidence to action.
The same content is not repeated across tabs.
Raw data and documents are not shown at the same level as the decision summary.
Customer-ready content is separated from internal proof and expected outcomes.
```
