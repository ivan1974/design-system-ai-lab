# Progressive decision disclosure

## Status

```txt
SOURCE PRINCIPLE / HIERARCHY / GENAI DESIGN JUDGMENT
```

## Purpose

This principle prevents generated screens from exposing every fact, metric, proof point and action at the same level.

---

## Core idea

Use this hierarchy when it supports the brief:

```txt
Signal -> Decision -> Evidence
```

The first view should make the decision understandable.

Supporting evidence should remain available without overwhelming the user.

---

## Must

You must not hide evidence, validation state or action ownership when trust or execution depends on it.

You must not overload the first view with equal-priority cards, metrics or proof details.

You must not use progressive disclosure to conceal uncertainty.

---

## Should

You should organize information into three levels:

```txt
Signal
  what requires attention

Decision
  what should be done or understood

Evidence
  why the user should trust it
```

You should make actions visible when action is available.

You should move secondary evidence, history and documents into tabs, sections, panels or local evidence rows when appropriate.

---

## May

You may use Tabs, Accordion, Collapsible, Sheet, ScrollArea or local screen-specific sections for secondary detail.

You may create local evidence or detail components when exported components do not fit.

---

## Useful first-level signals

```txt
critical health
active alert
connectivity issue
missing coverage
unknown asset visibility
overdue action
weak evidence
missing validation
```

---

## Useful decision prompts

```txt
schedule service
contact expert
review recommendation
assign follow-through
validate source
request missing information
download report
```

---

## Useful evidence cues

```txt
source
freshness
source scope
measurements
observations
validation status
history
documents
proof readiness
```

---

## Mistakes to avoid

Do not generate:

```txt
12 equal cards
all metrics visible before the decision
all evidence visible before the summary
action hidden below long evidence detail
source strength far from recommendation
validation hidden when trust matters
```

---

## UI material affected

Useful exported material may include:

```txt
Tabs
Accordion
Collapsible
Sheet
Table
ScrollArea
Alert
Badge
Pill
Tag
Progress
```

Useful local screen-specific composition may include:

```txt
local evidence row
local recommendation block
local detail section
local action area
```

Do not import local composition names from the package unless they are exported.

---

## Repair prompt

If the screen feels overloaded, ask:

```txt
What is the signal?
What decision does it support?
What evidence can move to a secondary layer?
What action must remain visible?
```
