# Repair Prompt — Too Many Sections

## When to use

Use this repair prompt when Figma Make over-generates the screen with too many
sections, cards, metrics, alerts or actions.

Common symptoms:

```txt
long page with many equal sections
too many metrics
too many cards
too many badges
too many actions
multiple competing primary actions
unclear hierarchy
```

---

## Repair prompt

Copy and paste this prompt into Figma Make.

```txt
Revise the generated screen.

The screen has too many sections and too much equal-weight content.

Keep one clear user decision.
Keep only the sections that support that decision.
Remove duplicated sections.
Remove unrelated sections.
Remove decorative sections.
Remove generic activity, analytics or overview sections unless they directly support the user decision.

Use this compact decision flow:
Context
→ decision signals
→ risks or readiness gaps
→ recommendations when relevant
→ owned actions

Limit metrics to 2 to 4 decision-relevant MetricCard items.
Limit priority risks or blockers to 2 to 4 AlertCard items.
Limit assigned actions to 2 to 4 ActionCard items.
Use one main PageHeader.
Use one primary action in the header or main section.
Do not include multiple competing primary actions.

Keep business patterns when they match the section intent.
Do not replace patterns with many generic Card sections.
Keep evidence, source context and validation status visible where trust matters.

The revised screen should be easier to scan, more focused and more decision-oriented.
```

---

## Acceptance check

After repair, verify:

- [ ] One main user decision is clear.
- [ ] The number of sections is reduced.
- [ ] Metrics are limited to 2 to 4.
- [ ] Risks or blockers are limited to 2 to 4.
- [ ] Actions are limited to 2 to 4.
- [ ] There are no duplicate sections.
- [ ] The hierarchy is easier to scan.
- [ ] The screen still preserves evidence and validation context.
