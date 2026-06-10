# Repair Prompt — Missing Human Validation

## Use when

Use this repair prompt when a sensitive decision hides human review.

Typical symptoms:

- customer-ready recommendation without validation status
- renewal or QBR proof shown without review status
- asset recommendation shown without expert validation
- critical action approved by AI or automation alone
- source weakness hidden from the user

---

## Repair instruction

```txt
Revise the screen to make human validation visible.

Show validationStatus when a recommendation, proof point or customer-facing decision is sensitive.
Show humanValidation when expert or internal review is required.
Use labels only for display; keep controlled status values for logic when possible.
Do not present AI output as approval.
Do not hide source weakness behind confident language.
Add an owned validation action when review is required.
Every validation action must include owner, dueDate and priority.
```

---

## Acceptance checks

- Validation status is visible for sensitive decisions.
- Human validation is visible when review is required.
- AI is not presented as final approver.
- Required validation has an owned action.
