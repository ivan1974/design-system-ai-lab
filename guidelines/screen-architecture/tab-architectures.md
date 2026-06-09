# Tab architectures

## Purpose

This file defines approved tab structures for detail panels and workspaces.

Tabs separate user questions, not internal systems or raw data sources.

---

## Core rule

Use tabs only when the selected object has several distinct user questions.

Do not create tabs for decoration.

Do not create tabs when a short SectionStack is enough.

---

## Asset tabs

Recommended order:

```txt
Overview
Health
Intelligence
History
Documents
```

Overview answers:

```txt
What is this asset and what context matters?
```

Health answers:

```txt
What is observed about the asset condition?
```

Intelligence answers:

```txt
What is interpreted from the facts and what action is recommended?
```

History answers:

```txt
What happened before and what changed over time?
```

Documents answers:

```txt
What source documents can I open or share?
```

---

## Recommendation tabs

Recommended order:

```txt
Summary
Evidence
Impact
Validation
Actions
```

Summary:

```txt
What is recommended?
Why now?
What is the scope?
```

Evidence:

```txt
What facts support it?
Where do they come from?
How fresh and strong are they?
```

Impact:

```txt
What operational or customer impact is expected?
Is it an expected outcome or proven value?
```

Validation:

```txt
Is it ready for customer communication?
Who still needs to validate it?
```

Actions:

```txt
Who owns the next step?
By when?
With what priority?
```

---

## Customer tabs

Recommended order:

```txt
Overview
Coverage
Risks
Value proof
Actions
```

Value proof must distinguish completed activities, expected outcomes, internal proof, customer-ready proof and proof gaps.

---

## Renewal tabs

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

Recommended order:

```txt
Readiness
Proof
Risks
Recommendations
Actions
```

The QBR tab structure should support customer-ready storytelling without hiding internal uncertainty.

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

## Acceptance criteria

A generated tab architecture passes when:

```txt
Tabs correspond to user questions.
Tab order moves from context to evidence to action.
The same content is not repeated across tabs.
Raw data and documents are not shown at the same level as the decision summary.
Customer-ready content is separated from internal proof and expected outcomes.
```
