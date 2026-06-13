# Facts before interpretation

## Status

```txt
SOURCE PRINCIPLE / TRUST / GENAI DESIGN JUDGMENT
```

## Core idea

Observed facts should appear before AI interpretation.

```txt
Facts
→ signal
→ interpretation
→ recommendation
→ action
```

Do not make an AI conclusion look like a verified fact.

---

## Why this matters

Operational screens often mix facts, signals and recommendations.

If this hierarchy is unclear, the user may over-trust an interpretation or act on weak evidence.

The interface must help users distinguish:

```txt
what is known
what is inferred
what is recommended
what is validated
what is still uncertain
```

---

## How GenAI should apply this

When generating a screen, classify content before placing it:

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

Then place these in a clear sequence.

---

## Good generation behavior

Prefer:

```txt
Asset status: Connected
Health: Warning
Last event: Active alert
→ Signal: Asset requires attention
→ Interpretation: Relay settings may need inspection
→ Recommendation: Schedule service
→ Evidence: telemetry timestamp, source scope, validation state
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

unless the provided data explicitly supports it.

Do not invent:

```txt
telemetry
source system
validation state
proof readiness
business value
benchmark data
```

---

## Components affected

Use components to separate fact from interpretation:

```txt
DetailSection for facts and fields
StatusBadge or ScoreBar for signals
RecommendationCard for recommended actions
EvidenceList for proof and sources
Alert for important but bounded messages
Tabs to separate facts from intelligence when needed
```

For Installed Base, keep:

```txt
Health = facts, measurements, observations
Intelligence = interpretation, diagnosis, recommendation
```

---

## Repair prompt

If an interpretation appears too strong, repair it by asking:

```txt
Which part is observed fact?
Which part is interpretation?
What evidence supports it?
What validation is missing?
Should the wording become less certain?
```
