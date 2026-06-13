# Project setup for Figma Make

## Status

```txt
ROOT ROUTER / FIGMA MAKE SETUP / GENERATION ENTRY SUPPORT
```

## Purpose

This file tells Figma Make how to work with this Make kit.

`Guidelines.md` is the first entry point.

`setup.md` is the operational router.

Use this file to decide which guideline files to read before generating or reviewing a screen.

---

## Project character

This kit helps generate:

```txt
sober
operational
B2B
industrial service
asset-oriented
decision-support workspaces
```

It should not generate:

```txt
generic marketing pages
decorative dashboards
freehand component clones
AI-first interfaces for basic facts
screens that invent evidence or source data
```

---

## Generation posture

The designer prompt is the brief.

The design system is the guidance system.

GenAI should:

```txt
understand the prompt
identify the user role and task
identify the primary decision or job to be done
use domain knowledge when relevant
use design principles to shape the screen
select suitable DS material
avoid critical failures
```

GenAI should not:

```txt
override the designer's intent without reason
apply components mechanically
turn every business concept into a component
reproduce reference screens unless explicitly asked
```

---

## Required reasoning file

Always read:

```txt
guidelines/runtime/genai-reasoning-hierarchy.md
```

It explains how prompt intent, principles, knowledge, components, examples and guardrails work together.

---

## Principles to read

Read these when generating or reviewing any operational service screen:

```txt
guidelines/source/principles/decision-first-proof-second.md
guidelines/source/principles/facts-before-interpretation.md
guidelines/source/principles/progressive-decision-disclosure.md
guidelines/source/principles/ai-usage-and-validation.md
guidelines/source/principles/accessibility.md
guidelines/source/principles/eco-design.md
guidelines/source/principles/visual-language.md
```

Use principles as judgment, not as fixed layout templates.

### Principle roles

```txt
decision-first-proof-second
  what the screen is for and what decision it supports

facts-before-interpretation
  how trust is built when claims or recommendations are shown

progressive-decision-disclosure
  how much information to reveal at each layer

ai-usage-and-validation
  when AI helps and what must remain validated

accessibility
  whether the screen is understandable, navigable and explicit

eco-design
  whether the screen is the smallest useful interface

visual-language
  whether the screen feels calm, operational, readable and trustworthy
```

---

## Knowledge to read by prompt type

### Service experience, user needs or role-specific workflow

Read:

```txt
guidelines/source/knowledge/service-user-needs.md
guidelines/source/knowledge/service-design-implications.md
```

Use when the prompt mentions:

```txt
support
maintenance follow-up
customer discussion
renewal
QBR
value proof
service coordination
user need
workflow
internal team
customer-facing service experience
```

---

### Industrial electrical systems and assets

Read:

```txt
guidelines/source/knowledge/industrial-electrical-system-basics.md
```

Use when the prompt mentions:

```txt
electrical asset
industrial electrical system
power distribution
UPS
switchgear
transformer
battery system
generator
relay
PDU
busway
product passport
maintenance history
service report
document library
```

---

### Installed Base or asset intelligence workspace

Read:

```txt
guidelines/source/knowledge/installed-base-domain-model.md
```

Use when the prompt mentions:

```txt
Installed Base
asset inventory
asset hierarchy
asset monitoring
asset health
connectivity
coverage
Health tab
Intelligence tab
Passport
History
Documents
cross-section links
```

---

## Runtime guidance to read by task

### Generating a full screen

Read:

```txt
guidelines/runtime/genai-reasoning-hierarchy.md
```

Then read the relevant knowledge and principle files.

### Selecting components

Read:

```txt
guidelines/reference/design-system-vocabulary.md
guidelines/reference/component-selection.md
```

Use this rule:

```txt
User intent → needed UI behavior → suitable DS material
```

Do not use:

```txt
Business concept → fixed component
```

### Reviewing a generated screen

Read:

```txt
guidelines/source/knowledge/service-design-implications.md
guidelines/runtime/genai-reasoning-hierarchy.md
guidelines/reference/design-system-vocabulary.md
guidelines/reference/component-selection.md
```

Then check critical blockers.

---

## Public source boundary

Generated product code should import from:

```txt
src/design-system/primitives
src/design-system/components
src/design-system/foundations
```

Generated product code should not import from:

```txt
src/app/components/ui/*
@radix-ui/*
third-party implementation packages
src/design-system/internal/*
```

Primitives may use implementation packages internally.

Screens should use the project design-system API.

---

## Current DS material

Read the current vocabulary in:

```txt
guidelines/reference/design-system-vocabulary.md
```

Read selection guidance in:

```txt
guidelines/reference/component-selection.md
```

Do not invent unavailable component names.

If a needed component does not exist, compose from current primitives and components.

---

## Hard blockers

Always repair these failures:

```txt
invented evidence, telemetry, source or proof
AI presented as proof or source-system truth
expected outcome presented as proven value
non-connected asset presented as live-monitored without data
critical decision shown as autonomously approved by AI
local design-system clone
forbidden import path
information communicated only through color
fictional component import
```

---

## Generation checklist

Before generating, answer:

```txt
What does the prompt ask for?
Who is the user?
What decision or task is supported?
What is the main domain object?
What evidence or trust state matters?
What information should be visible first?
What can be progressively disclosed?
What DS material best supports the intent?
Is that DS material available in design-system-vocabulary.md?
Does component-selection.md support this choice?
What accessibility risks must be avoided?
What visual or content noise can be removed?
What critical blockers must be avoided?
```

---

## Repair checklist

When the result feels weak:

```txt
Do not add decoration first.
Find the failing layer.
Repair intent, evidence, hierarchy, component choice, accessibility, sobriety or trust.
Use the smallest change that restores meaning.
Keep the prompt as the primary goal.
```
