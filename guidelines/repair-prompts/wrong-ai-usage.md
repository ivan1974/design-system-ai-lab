# Repair Prompt — Wrong AI Usage

## When to use

Use this repair prompt when Figma Make makes AI the source of structured facts or
uses AI to approve, validate or prove something automatically.

Common symptoms:

```txt
AI retrieves customer name
AI finds renewal date
AI counts disconnected assets
AI validates recommendation
AI proves value automatically
AI confidence replaces source strength
```

---

## Repair prompt

Copy and paste this prompt into Figma Make.

```txt
Revise the generated screen.

The screen uses AI in the wrong way.

Use BI-first, AI-assisted logic.

Structured facts should come from APIs, BI tools, databases, monitoring platforms or source systems.
Do not use GenAI to retrieve basic facts, dates, owners, counts, statuses, KPIs, telemetry, source scope, source strength, asset hierarchy, connectivity status, lifecycle status or renewal status.

Use AI only for synthesis, explanation, prioritization, recommendation, drafting or reformulation after visible facts are shown.
Show visible facts before any AI-assisted interpretation.
Do not make AI the primary interface for simple structured data.
Do not use a chatbot-first interface for customer facts, renewal facts, asset facts or monitoring facts.
Do not claim AI validation.
Do not claim automatic approval.
Do not present AI confidence as source strength, validation status, customer readiness or proof readiness.

Keep human validation visible for critical customer, service, renewal, proof, asset or modernization decisions.
Keep the same screen intent and package components.
```

---

## Acceptance check

After repair, verify:

- [ ] Structured facts are shown as data, not chatbot answers.
- [ ] AI is used only for synthesis or drafting after facts are visible.
- [ ] AI does not retrieve counts, dates, owners, statuses or telemetry.
- [ ] AI confidence is not used as evidence strength.
- [ ] AI does not validate or approve recommendations.
- [ ] Human validation remains visible for critical decisions.
