# Blocking Checklist

## Purpose

Use this checklist to decide whether a Figma Make generation must be rejected
before quality review.

This is the blocking checklist.

It answers one question:

```txt
Can this generated screen be accepted as a valid first draft?
```

If any blocking item fails, stop the review and ask Make to revise the output.

Do not use this checklist to polish the screen.

Use:

```txt
review/quality-checklist.md
```

for improvement points.

Use:

```txt
review/anti-patterns.md
```

for diagnosis and repair instructions.

---

## How to use this checklist

Review the generated output in this order:

```txt
1. App.tsx output
2. package usage
3. documented prop values
4. local visual component usage
5. workspace structure
6. form usage
7. business pattern usage
8. alert and action completeness
9. evidence and trust integrity
10. proof and value integrity
```

A screen can be visually imperfect and still pass this checklist.

A screen cannot pass this checklist if it breaks the design system contract,
creates false confidence or hides evidence-critical information.

---

## Blocking decision

Reject the generation if any item below is false.

### 1. Visible screen output

- [ ] `App.tsx` renders a complete visible screen.
- [ ] The screen is not empty.
- [ ] The output is not only package setup code.
- [ ] The output is not only a component gallery.
- [ ] The screen can be reviewed visually without additional implementation work.

Reject if:

```txt
App.tsx is empty, returns null, renders only a placeholder, or stops after setup.
```

---

### 2. Package contract

- [ ] Components are imported from `design-system-ai-lab`.
- [ ] `design-system-ai-lab/styles.css` is imported once.
- [ ] No local package named `design-system-ai-lab` was created.
- [ ] No `packages/design-system-ai-lab` folder was created.
- [ ] No local design system was generated to replace the package.
- [ ] No internal package imports are used.

Correct:

```tsx
import { WorkspaceShell, MasterDetailLayout } from "design-system-ai-lab";
import "design-system-ai-lab/styles.css";
```

Reject if:

```tsx
import { Button } from "design-system-ai-lab/dist/components/button";
import { Card } from "./components/ui/card";
```

---

### 3. Documented prop values only

- [ ] Every package component prop uses a documented value.
- [ ] No undocumented `variant` value is used.
- [ ] No undocumented `tone` value is used.
- [ ] No undocumented `severity` value is used.
- [ ] No undocumented `priority` value is used.
- [ ] No undocumented `strength` value is used.
- [ ] No undocumented `mode`, `size` or `status` value is used.

Reject if Make guesses enum-like prop values instead of using the component contract, Storybook story or TypeScript declaration.

Repair with:

```txt
repair-prompts/invalid-props-or-local-visual-components.md
```

---

### 4. No local visual components

- [ ] No local `Button`, `Card`, `Badge`, `Dialog`, `MetricCard`, `AlertCard`, `ActionCard`, `WorkspaceShell`, `MasterDetailLayout`, `DetailPanel` or `PageHeader` replacement was created.
- [ ] No local visual wrappers were created for package components.
- [ ] No local `Pill`, `Tag`, `Metric`, `Row`, `Panel`, `Header` or form primitive duplicates package components.
- [ ] No shadcn-like, Radix-based, MUI or unrelated component system was introduced.
- [ ] Package components are used directly.

Small local helpers are acceptable only if they compose approved package components and do not introduce their own visual style, tokens, states or primitives.

Reject if Make creates:

```txt
src/components/ui/
components/ui/
packages/design-system-ai-lab/
LocalButton
LocalCard
ForwardedButton
```

Repair with:

```txt
repair-prompts/invalid-props-or-local-visual-components.md
```

---

### 5. Workspace structure is used when needed

- [ ] A review/comparison task uses workspace structure instead of a long card stack.
- [ ] `WorkspaceShell` is used for a decision workspace when the screen has scope, filters or multiple review areas.
- [ ] `MasterDetailLayout` is used when the user must inspect an item from a list.
- [ ] `DetailPanel` is used when a selected item needs evidence, tabs or actions.
- [ ] Repeated facts, signals, evidence and actions are not each rendered as separate generic cards.

Reject if the prompt asks for review, comparison or item inspection and the output is only a long sequence of equal cards.

---

### 6. No raw form fields

- [ ] `CreateActionDialog` is used for standard action creation flows.
- [ ] Forms use package form components when form fields are needed.
- [ ] Form fields use `Field`, `Input`, `Select` or `Textarea`.
- [ ] Form controls have visible labels.
- [ ] No raw inline-styled `input`, `select` or `textarea` elements are generated.
- [ ] Disabled form controls are not used for display-only facts.

Reject if Make uses raw form controls instead of the package form system.

---

### 7. Business patterns are used when available

- [ ] Business patterns are used when they match the section intent.
- [ ] `CustomerStatusCard` is used for customer context when relevant.
- [ ] `ConnectivityCoverageCard` is used for monitoring coverage when relevant.
- [ ] `RenewalRiskSummary` is used for renewal context when relevant.
- [ ] `CustomerReviewReadinessCard` is used for review readiness when relevant.
- [ ] `ValueProofCard` is used for proof readiness, proof points or proof gaps when relevant.
- [ ] `AssetIntelligenceSummary` is used before asset-related recommendations when relevant.
- [ ] `ServiceRiskSummary` is used for service risk synthesis when relevant.
- [ ] `RecommendationReviewPanel` is used for recommendation readiness review when relevant.
- [ ] Generic `Card`, `div`, `dt` or `dd` markup does not manually rebuild an existing business pattern.

Reject if a known business section is rebuilt manually while an approved pattern exists.

---

### 8. Alerts are actionable

- [ ] `AlertCard` is used for important risks or blockers.
- [ ] Every `AlertCard` has a severity.
- [ ] Every `AlertCard` has a meaningful title.
- [ ] Every `AlertCard` has a meaningful description.
- [ ] Every `AlertCard` has a concrete recommendation.
- [ ] Important alert recommendations are supported by visible facts or context.

Reject if an alert explains a problem but gives no recommendation.

---

### 9. Actions are accountable

- [ ] `ActionRow` or `ActionCard` is used for assigned actions when relevant.
- [ ] Every `ActionRow` has an owner.
- [ ] Every `ActionRow` has a due date.
- [ ] Every `ActionRow` has a priority.
- [ ] Every `ActionCard` has an owner.
- [ ] Every `ActionCard` has a due date.
- [ ] Every `ActionCard` has a priority.
- [ ] Actions describe concrete work, not vague notes.

Reject if actions are missing owner, due date or priority.

---

### 10. Evidence is not invented

- [ ] No invented source is presented as real.
- [ ] No invented evidence is presented as real.
- [ ] No invented citation is presented as real.
- [ ] No invented asset fact is presented as real.
- [ ] No invented telemetry is presented as real.
- [ ] No invented source scope or source strength is presented as real.
- [ ] No invented value proof is presented as real.
- [ ] No unsupported recommendation is presented as evidence-backed.

Reject if the screen creates false evidence or makes unsupported claims look validated.

---

### 11. Proof and value are not overstated

- [ ] Expected outcomes are not presented as proven value.
- [ ] Internal proof is not presented as customer-ready proof without validation.
- [ ] Completed service activity is not presented as customer-ready value proof by itself.
- [ ] Technical outcomes are not presented as customer-ready proof without validation.
- [ ] Proof readiness and validation status are visible when customer use is sensitive.

Reject if the screen makes weak, internal or expected proof look customer-ready.

---

### 12. Asset and AI safety are respected when relevant

- [ ] Non-connected assets are not presented as live-monitored.
- [ ] Partial visibility is not presented as complete asset knowledge.
- [ ] Health signals are not presented as source-system truth.
- [ ] Intelligence interpretation is not presented as source-system truth.
- [ ] GenAI is not used to retrieve basic facts, dates, owners, counts, statuses, telemetry or source data.
- [ ] AI confidence is not presented as source strength, validation status, customer readiness or proof readiness.
- [ ] Critical customer, service, renewal, proof or asset decisions keep human validation visible.

Reject if the screen hides partial visibility, overstates AI, or removes human validation from critical decisions.

---

## Blocking repair instruction

When a blocking item fails, use the relevant repair prompt from the matching prompt
file or repair prompt folder.

Typical repair files or sections:

```txt
prompts/customer-monitoring.md
prompts/renewal-risk-review.md
prompts/asset-recommendation-review.md
prompts/qbr-readiness.md
prompts/workspace-v2.md
repair-prompts/card-saturation.md
repair-prompts/weak-layout.md
repair-prompts/missing-detail-panel.md
repair-prompts/invalid-props-or-local-visual-components.md
review/anti-patterns.md
```

Do not continue with quality review until blocking issues are fixed.

---

## Final principle

Blocking criteria protect the design system contract and trust integrity.

If the screen breaks the package contract, hides accountability or creates false
evidence, reject it.
