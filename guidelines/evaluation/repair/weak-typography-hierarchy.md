# Repair prompt — weak typography hierarchy

Use this repair prompt when Figma Make generates a screen where hierarchy is flat, headings are unclear or text styles feel arbitrary.

---

## Repair instruction

Revise the screen so typography follows the v0.4 hierarchy.

Use `PageHeading` for page intent.

Use `SectionHeading` for major sections.

Use `Heading` and `Text` for local composition.

Do not create custom heading styles with raw `h1`, `h2`, `p` or utility-heavy text wrappers when package typography components fit.

---

## Required changes

1. Replace custom page title blocks with `PageHeading`.
2. Replace major section intros with `SectionHeading`.
3. Keep repeated row titles compact inside queue rows.
4. Keep metadata secondary but readable.
5. Make source scope, freshness, validation and proof status visible when trust matters.
6. Remove decorative display typography.
7. Remove unnecessary all-caps labels unless they are package-provided eyebrow text.

---

## Preferred structure

```tsx
<PageHeading
  eyebrow="Customer monitoring"
  title="Review what needs attention next"
  description="Keep monitoring scope, source limits and next actions visible."
/>

<SectionHeading
  title="Asset queue"
  description="Assets are shown as review rows before selected detail."
/>
```

---

## Acceptance criteria

The repaired screen passes if:

- there is one clear page title
- section hierarchy is visible
- repeated row text does not compete with the page heading
- metadata is readable but secondary
- trust-sensitive text is not hidden
- no local typography system is created
