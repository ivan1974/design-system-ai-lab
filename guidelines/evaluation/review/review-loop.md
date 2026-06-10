# Review Loop

## Purpose

Use this loop after each Figma Make generation.

Goal:

```txt
Prompt → generation → blocking review → score → repair prompt → revised generation → final score
```

Do not use this file as a checklist replacement.

Use:

- `review/blocking-checklist.md` to reject or continue
- `review/repair-routing.md` to select the repair prompt
- `benchmarks/figma-make/scoring/scoring-model.md` to score benchmark outputs

---

## Loop

### 1. Run blocking checklist

Review the generated `App.tsx` with:

```txt
review/blocking-checklist.md
```

Stop if a blocking failure appears.

---

### 2. Identify failure category

Assign one or more failure categories.

Use short names:

```txt
package-contract
local-components
invalid-props
card-saturation
weak-layout
missing-detail-panel
missing-list-container
poor-row-density
invented-evidence
expected-as-proven
ai-confidence-as-source-strength
partial-visibility-overstated
missing-human-validation
actions-without-ownership
visual-overdecoration
weak-typography
```

---

### 3. Select repair prompt

Use:

```txt
review/repair-routing.md
```

Select the most specific repair prompt.

Do not combine more than three repair prompts in one revision request.

---

### 4. Regenerate or revise

Ask Make to revise the existing `App.tsx` when structure is mostly correct.

Ask Make to regenerate when the output breaks the package contract or creates a local design system.

The repair instruction must preserve:

- package root imports
- stylesheet import
- selected benchmark or screen intent
- visible user decision
- evidence boundaries
- action ownership

---

### 5. Re-score

For benchmark outputs, score the revised generation with:

```txt
benchmarks/figma-make/scoring/scoring-template.md
```

Run generation tests when an output file exists:

```bash
GENERATED_APP_PATH=<path-to-output> npm run test:generation
```

---

### 6. Accept or reject

Accept only if:

- blocking checklist passes
- score is 80 or higher
- no blocking failure remains
- repair did not introduce new local components or invented evidence

Reject if:

- package contract still fails
- evidence is invented or overstated
- action ownership is still missing
- the screen still hides human validation for sensitive decisions
