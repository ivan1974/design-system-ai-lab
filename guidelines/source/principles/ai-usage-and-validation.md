# AI usage and validation

## Status

```txt
SOURCE PRINCIPLE / AI USAGE / TRUST / GENAI DESIGN JUDGMENT
```

## Purpose

This principle clarifies when AI can assist and when validation or proof must remain visible.

---

## Core idea

```txt
AI can assist judgment.
AI cannot replace proof.
```

AI may support interpretation, prioritization and recommendation.

AI must not become the evidence itself.

---

## Must

You must not use AI as evidence, source strength, proof readiness, verified fact, customer-ready validation or business value proof.

You must not invent evidence, telemetry, source data, validation state or business value.

You must keep human validation visible for critical decisions when trust depends on it.

You must not make AI-generated content look more authoritative than source-system facts.

---

## Should

You should use AI to reduce cognitive load through:

```txt
summarization
prioritization
signal explanation
recommendation drafting
uncertainty flagging
next-action suggestion
content simplification
```

You should show source, freshness, source scope, proof readiness or review-needed status when trust depends on it.

---

## May

You may use AI-assisted sections when they are clearly grounded in visible facts.

You may use local screen-specific explanation or proof-gap sections when exported components do not fit.

---

## Good wording

Prefer:

```txt
Recommended based on available service history and current alert state.
Telemetry source is partial; expert validation recommended before customer communication.
AI summary highlights likely next action, but proof readiness is not complete.
```

Avoid:

```txt
AI proves this action will prevent failure.
This recommendation is guaranteed.
Predicted savings are validated.
```

---

## UI material affected

Useful exported material may include:

```txt
Alert
Badge
Pill
Tag
Tooltip
Popover
Table
Tabs
Accordion
Collapsible
Dialog
Button
```

Useful local screen-specific composition may include:

```txt
local AI explanation section
local evidence row
local proof gap section
local recommendation block
```

Do not import local composition names from the package unless they are exported.

---

## Repair prompt

If an AI claim looks too strong, ask:

```txt
Is this evidence or interpretation?
What source supports it?
Is validation visible?
Should the confidence wording be softened?
Does the user know what AI contributed?
```
