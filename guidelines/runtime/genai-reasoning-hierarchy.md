# GenAI reasoning hierarchy

## Status

```txt
RUNTIME GUIDANCE / INTENT / PRINCIPLES / COMPONENT USE
```

## Purpose

This file explains how GenAI should balance the user's prompt, design-system principles, domain knowledge, component guidance and contracts.

It prevents the guidelines from turning GenAI into a rigid screen generator.

---

## Core rule

The designer prompt is the brief.

GenAI is the design co-pilot.

The design system provides judgment, vocabulary and guardrails.

```txt
Prompt defines intent.
Principles guide reasoning.
Knowledge grounds the domain.
Components provide UI vocabulary.
Contracts block critical failures.
Reference screens inspire, but do not dictate.
```

---

## Recommended reasoning order

Use this order before generating or reviewing a screen:

```txt
1. Understand the user prompt.
2. Identify the user role and goal when provided or implied.
3. Identify the primary decision or action the screen should support.
4. Identify the domain object and business context.
5. Identify what facts, evidence, interpretation and actions are involved.
6. Decide whether AI adds value or whether structured data is enough.
7. Select primitives, usage components or candidate patterns according to intent.
8. Compose the screen.
9. Review against principles and light guardrails.
```

Do not start from a component list.

Do not force the reference screen unless the prompt asks for it.

---

## How to reconcile principles

### Decision-first, proof-second

Use this for screen intent and hierarchy.

Ask:

```txt
What decision or action should the screen help the user make?
```

### Facts before interpretation

Use this for trust and evidence.

Ask:

```txt
What facts or sources support the interpretation or recommendation?
```

These principles do not conflict.

The screen should be decision-led, while the proof trail should keep facts visibly grounded before interpretation.

Preferred formulation:

```txt
Start the screen from the decision need.
Support interpretation with visible facts.
Never let AI interpretation replace source evidence.
```

---

## Guidance levels

Use the right strength of rule.

### Hard blocker

Use only for critical failures.

Examples:

```txt
invented evidence
AI presented as proof
expected outcome presented as proven value
internal app/ui imports
unsupported local design system
sensitive decision without visible validation
```

### Strong recommendation

Use for preferred behavior unless the prompt requires another approach.

Examples:

```txt
prefer decision-first structure
prefer rows or tables for asset comparison
show trust cues when evidence quality matters
make action ownership visible when follow-through matters
```

### Flexible guidance

Use for design suggestions.

Examples:

```txt
possible components
candidate patterns
reference screen examples
layout variants
section names
```

Do not treat flexible guidance as a contract.

---

## When the prompt overrides defaults

The prompt may ask for:

```txt
executive summary
single-page overview
document-first experience
recommendation review workspace
service planner queue
site-level risk overview
customer-ready QBR view
```

In these cases, follow the prompt.

But preserve:

```txt
facts vs interpretation
evidence vs recommendation
expected outcome vs proven value
AI assistance vs source proof
human validation when trust matters
component intent over mechanical assembly
```

---

## Component selection posture

Component guidance should help GenAI ask:

```txt
What job does this UI element do?
What abstraction level fits the job?
Is there an approved usage component?
Is a primitive enough?
Is a candidate pattern only guidance, not a requirement?
```

Do not mechanically translate old component names into new components.

Translate the intent behind the old component.

---

## Review posture

When reviewing a generated screen, do not ask only:

```txt
Did it use the right components?
```

Ask first:

```txt
Did it respect the prompt?
Did it support the right user decision?
Did it preserve trust?
Did it use domain knowledge responsibly?
Did it choose components for the right reason?
```

Only then check implementation and visual consistency.

---

## Final principle

A good GenAI output may differ from the reference prototype.

It is acceptable if it:

```txt
respects the user prompt
supports a clear decision
uses domain knowledge responsibly
preserves evidence and validation
uses DS vocabulary appropriately
avoids critical failures
```
