# Repair Prompt — Missing Evidence

## When to use

Use this repair prompt when Figma Make generates recommendations, risks, proof or
asset interpretation without enough visible evidence or trust context.

Common symptoms:

```txt
recommendations without facts
proof without source context
asset claims without source scope
confident statements without validation status
expected outcomes shown as proven value
```

---

## Repair prompt

Copy and paste this prompt into Figma Make.

```txt
Revise the generated screen.

The screen is missing evidence and trust cues.

Show visible facts before interpretation.
Distinguish facts, signals, recommendations and actions.
Every important recommendation must be supported by visible facts or context.
Show source context when source scope affects trust.
Show source strength when evidence is partial, mixed, inferred, manual or uncertain.
Show freshness when timing affects trust.
Show validation status when content may be used for customer, service, renewal, value proof, asset or modernization decisions.

Do not invent sources.
Do not invent citations.
Do not invent telemetry.
Do not invent asset facts.
Do not invent customer facts.
Do not invent value proof.
Do not make unsupported recommendations look validated.
Do not present expected outcomes as proven value.
Do not present internal proof as customer-ready proof without validation.

If the screen includes assets, distinguish source-system facts, Health signals and Intelligence interpretation.
If the screen includes proof, distinguish completed activity, internal proof, expected outcome and customer-ready proof.

Keep the same screen intent and package components.
```

---

## Acceptance check

After repair, verify:

- [ ] Facts appear before interpretation.
- [ ] Source context is visible where trust matters.
- [ ] Source strength is visible when evidence is partial.
- [ ] Freshness is visible when timing matters.
- [ ] Validation status is visible before customer use.
- [ ] Recommendations are grounded in visible facts or context.
- [ ] No source, evidence, asset fact or value proof is invented.
