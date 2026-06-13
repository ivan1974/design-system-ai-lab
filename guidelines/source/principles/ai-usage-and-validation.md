# AI usage and validation

## Status

```txt
SOURCE PRINCIPLE / AI USAGE / TRUST / GENAI DESIGN JUDGMENT
```

## Core idea

AI may support interpretation, prioritization and recommendation.

AI must not become the evidence itself.

```txt
AI can assist judgment.
AI cannot replace proof.
```

---

## Why this matters

A GenAI-generated screen may look more confident than the underlying information allows.

This is dangerous in operational, service, customer or asset contexts where the user may act on the output.

The interface must make clear:

```txt
what AI helped with
what evidence exists
what remains uncertain
what needs human validation
```

---

## What AI may do

AI may help with:

```txt
summarization
prioritization
signal detection
recommendation drafting
uncertainty flagging
next-action suggestion
content simplification
```

Use AI to reduce cognitive load, not to hide uncertainty.

---

## What AI must not do

Do not use AI as:

```txt
evidence
source strength
proof readiness
verified fact
customer-ready validation
business value proof
```

Do not write:

```txt
AI confidence: 92% therefore evidence is strong
AI confirms this recommendation is valid
AI predicts savings as proven value
AI verified the asset condition
```

unless external validated evidence is explicitly provided.

---

## Validation visibility

Show validation when it matters:

```txt
source scope
source freshness
source strength
proof readiness
human validation status
customer-readiness
```

Sensitive or customer-facing recommendations should keep human validation visible.

---

## Good generation behavior

Prefer wording such as:

```txt
Recommended based on available service history and current alert state.
Telemetry source is partial; expert validation recommended before customer communication.
AI summary highlights likely next action, but proof readiness is not complete.
```

Avoid wording such as:

```txt
AI proves this action will prevent failure.
This recommendation is guaranteed.
Predicted savings are validated.
```

---

## Components affected

Use:

```txt
Alert for bounded AI-assisted warnings
RecommendationCard for AI-supported next steps
EvidenceList for proof and validation context
StatusBadge for validation state
Tooltip or Popover for short explanation of AI usage
DetailSection for source and proof details
```

Keep AI explanation close to decisions when trust matters.

---

## Repair prompt

If an AI claim looks too strong, repair it by asking:

```txt
Is this evidence or interpretation?
What source supports it?
Is validation visible?
Should the confidence wording be softened?
Does the user know what AI contributed?
```
