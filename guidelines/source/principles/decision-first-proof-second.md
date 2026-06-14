# Decision-first, proof-second

## Status

```txt
SOURCE PRINCIPLE / GENAI DESIGN JUDGMENT
```

## Purpose

This principle helps generated screens start from the user decision instead of from components, metrics or decoration.

---

## Core idea

```txt
Decision first.
Proof second.
Interface third.
```

Start from the decision the user needs to make.

Then reveal the proof needed to trust that decision.

Then choose UI structure and components.

---

## Must

You must identify the primary decision, task or understanding before selecting components.

You must make the supporting proof or validation available when the screen contains a recommendation, claim or AI interpretation.

You must not invent proof, evidence, source data, owner or expected impact.

You must not make a screen look decisive when the supporting proof is missing or partial.

---

## Should

You should organize operational screens around:

```txt
attention signal
object context
recommended decision or action
supporting proof
owner or next step when action is expected
```

You should use dense structures when users compare records or assets.

You should use secondary layers only when they do not hide trust-critical information.

---

## May

You may create local screen-specific sections such as:

```txt
EvidenceRow
RecommendationBlock
ActionSummary
AssetContextSection
```

when exported components do not fit the required decision flow.

These local components must not be imported from the package unless exported.

---

## Apply before UI selection

Before choosing components, answer:

```txt
What is the user's primary decision?
What object is the decision about?
What signal makes the decision necessary?
What proof is needed to trust the decision?
What action follows?
Who owns the action?
```

---

## Good generation behavior

For an Installed Base screen, prefer:

```txt
asset attention signal
-> asset identity and context
-> recommended action
-> evidence in detail or secondary layer
-> persistent action area when action is available
```

For a recommendation screen, prefer:

```txt
recommendation summary
-> rationale
-> evidence strength and validation
-> approve / adjust / reject action
```

For a monitoring screen, prefer:

```txt
current risk or status signal
-> key reason
-> action path
-> supporting evidence
```

---

## Mistakes to avoid

Do not generate:

```txt
a generic dashboard with disconnected KPIs
an equal grid of cards without hierarchy
a recommendation before facts or evidence
proof details before the user understands the decision
a visual score without source or validation context
action without owner, due date or priority when execution matters
```

---

## UI material affected

Use exported DS material or local composition to clarify the decision.

Useful exported material may include:

```txt
Tabs
Sheet
Dialog
Table
Alert
Progress
Badge
Pill
Tag
Accordion
Collapsible
ScrollArea
Button
```

Useful local screen-specific composition may include:

```txt
local evidence rows
local recommendation blocks
local detail sections
local action areas
```

Do not import local composition names from the package unless they are exported.

---

## Repair prompt

If the screen feels like a dashboard, repair it by asking:

```txt
What decision does this screen help the user make?
What proof does the user need before taking action?
What can move to a detail panel, tab, local evidence row or expandable section?
```
