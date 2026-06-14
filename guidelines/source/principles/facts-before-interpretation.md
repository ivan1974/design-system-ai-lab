# Facts before interpretation

## Status

```txt
SOURCE PRINCIPLE / TRUST / GENAI DESIGN JUDGMENT
```

## Purpose

This principle keeps observed facts, AI interpretation, recommendations and proof clearly distinct.

---

## Core idea

```txt
Facts
-> signal
-> interpretation
-> recommendation
-> action
```

Do not make an AI conclusion look like a verified fact.

---

## Must

You must distinguish observed facts from signals, interpretations, recommendations and proof.

You must not present AI interpretation as source-system truth.

You must not invent telemetry, source systems, validation state, proof readiness or business value.

You must not present expected outcomes as proven value.

---

## Should

You should expose trust cues when they affect the decision:

```txt
source
freshness
source scope
connectivity status
validation state
review needed
human validation required
```

You should keep Health-like content evidence-first and Intelligence-like content interpretation/recommendation-first when using Installed Base semantics.

---

## May

You may use local screen-specific evidence rows or proof sections when no exported component fits.

Local evidence UI must remain visually consistent with the design system and must not claim invented proof.

---

## Content classification

Classify content before placing it:

```txt
Observed fact
  directly available from a source, record, telemetry or user-provided data

Signal
  meaningful state derived from facts, such as alert, risk, trend or missing coverage

Interpretation
  explanation or diagnosis based on signals

Recommendation
  proposed decision or next step

Proof / validation
  evidence quality, source, freshness, validation or readiness
```

---

## Good generation behavior

Prefer:

```txt
Asset status: Connected
Health: Warning
Last event: Active alert
-> Signal: Asset requires attention
-> Interpretation: Relay settings may need inspection
-> Recommendation: Schedule service
-> Evidence: telemetry timestamp, source scope, validation state
```

---

## Mistakes to avoid

Do not write:

```txt
AI detected a failure
AI proves this will reduce downtime
This asset will fail soon
This recommendation is validated
```

unless provided data explicitly supports it.

---

## UI material affected

Use exported DS material or local composition to separate fact from interpretation.

Useful exported material may include:

```txt
Alert
Badge
Pill
Tag
Table
Tabs
Tooltip
Popover
Accordion
Collapsible
```

Useful local screen-specific composition may include:

```txt
local fact section
local evidence row
local recommendation block
local proof gap section
```

Do not import local composition names from the package unless they are exported.

---

## Repair prompt

If an interpretation appears too strong, ask:

```txt
Which part is observed fact?
Which part is interpretation?
What evidence supports it?
What validation is missing?
Should the wording become less certain?
```
