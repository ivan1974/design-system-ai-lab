# Repair Prompt — Raw Form Controls

## When to use

Use this repair prompt when Figma Make generates raw form controls or inline
styled fields instead of using package form components.

Common symptoms:

```tsx
<input className="..." />
<select className="..." />
<textarea style={{ ... }} />
<input disabled value="Display-only fact" />
```

---

## Repair prompt

Copy and paste this prompt into Figma Make.

```txt
Revise the generated screen.

The screen uses raw form controls or inline-styled form fields.

Use package form components from design-system-ai-lab.
Use Field for field structure and labels.
Use Input for short text values.
Use Select for limited choices.
Use Textarea for longer notes.
Use CreateActionDialog for standard action creation flows.

Do not use inline-styled input, select or textarea elements.
Do not use placeholders as labels.
Do not use disabled form fields to display facts.
Use display components and business patterns for display-only information.
Keep visible labels for all form controls.
Connect labels to controls with htmlFor and id when possible.

Keep the same screen intent and user decision.
Keep the same package import strategy.
Import components from design-system-ai-lab.
Import styles from design-system-ai-lab/styles.css.
```

---

## Acceptance check

After repair, verify:

- [ ] Standard action creation uses `CreateActionDialog`.
- [ ] Form fields use `Field`.
- [ ] Short values use `Input`.
- [ ] Limited choices use `Select`.
- [ ] Long notes use `Textarea`.
- [ ] Form controls have visible labels.
- [ ] No inline-styled raw form controls remain.
- [ ] Display-only facts are not shown through disabled inputs.
