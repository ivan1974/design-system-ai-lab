# Decision-first, proof-second

## Status

```txt
SOURCE PRINCIPLE / GENAI DESIGN JUDGMENT
```

## Core idea

Start from the decision the user needs to make.

Then reveal the proof needed to trust that decision.

```txt
Decision first.
Proof second.
Interface third.
```

The screen should not begin as a collection of components. It should begin as an answer to a user decision.

---

## Why this matters

A GenAI screen can be visually valid and still be strategically weak.

Weak screens often show:

```txt
many metrics
many cards
many labels
no clear decision
no visible proof trail
no owned next action
```

A strong decision workspace helps the user understand:

```txt
what requires attention
what decision or action is proposed
why it matters now
what evidence supports it
what still needs validation
who owns the next step
```

---

## How GenAI should apply this

Before choosing components, answer:

```txt
1. What is the user's primary decision?
2. What object is the decision about?
3. What signal makes the decision necessary?
4. What proof is needed to trust the decision?
5. What action follows?
6. Who owns the action?
```

Then choose UI structure.

---

## Good generation behavior

For an Installed Base screen, prefer:

```txt
asset attention signal
→ asset identity and context
→ recommended action
→ evidence in detail or secondary layer
→ persistent action area when action is available
```

For a recommendation screen, prefer:

```txt
recommendation summary
→ rationale
→ evidence strength and validation
→ approve / adjust / reject action
```

For a monitoring screen, prefer:

```txt
current risk or status signal
→ key reason
→ action path
→ supporting evidence
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
an action without owner, due date or priority
```

---

## Components affected

This principle affects the choice and hierarchy of:

```txt
Tabs
Sheet
Dialog
Table
Alert
Progress
StatusBadge
ScoreBar
EvidenceList
RecommendationCard
AssetSummaryCard
DetailSection
Action areas
```

Use these components to clarify the decision, not to fill space.

---

## Repair prompt

If the screen feels like a dashboard, repair it by asking:

```txt
What decision does this screen help the user make?
What proof does the user need before taking action?
What can move to a detail panel, tab, evidence list or expandable section?
```
