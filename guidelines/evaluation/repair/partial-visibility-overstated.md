# Repair Prompt — Partial Visibility Overstated

## Use when

Use this repair prompt when the screen presents limited coverage as complete knowledge.

Typical symptoms:

- partial source scope shown as complete asset knowledge
- non-connected assets shown as live monitored
- health signal shown as source-system truth
- intelligence interpretation shown as raw system fact
- known unknowns are hidden

---

## Repair instruction

```txt
Revise the screen to make source limits visible.

Separate known assets, connected assets and unknowns.
Show source scope and source strength near asset interpretation.
Do not present partial visibility as complete asset knowledge.
Do not present non-connected assets as live monitored.
Separate source-system facts, health signals and intelligence interpretation.
Use AssetIntelligenceSummary for asset intelligence context.
Show known unknowns before recommendation or customer use.
Keep human validation visible when partial visibility affects the decision.
```

---

## Acceptance checks

- Source scope is visible.
- Partial visibility is not overstated.
- Known unknowns are visible.
- Asset interpretation is separate from source-system facts.
