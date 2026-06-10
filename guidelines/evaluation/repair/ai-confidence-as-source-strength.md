# Repair Prompt — AI Confidence as Source Strength

## Use when

Use this repair prompt when AI confidence is treated as evidence quality.

Typical symptoms:

- AI confidence is shown as source strength
- AI confidence is shown as validation status
- AI confidence is shown as customer readiness
- AI output appears to approve a recommendation

---

## Repair instruction

```txt
Revise the screen so AI confidence is not used as source strength.

Source strength must describe source coverage and evidence quality.
Validation status must describe human or process validation.
AI may support synthesis, explanation or prioritization only after facts are visible.
Do not show AI confidence as proof readiness, customer readiness or validation.
Show source scope, source strength and validation status separately.
Use SourceStrengthPill only for source quality, not model confidence.
Keep human validation visible before customer use.
```

---

## Acceptance checks

- AI confidence is not used as source strength.
- AI output does not validate the recommendation.
- Source scope and validation status are separate.
- Human validation is visible for sensitive recommendations.
