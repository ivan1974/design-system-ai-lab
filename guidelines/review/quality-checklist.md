# Quality Checklist

## Purpose

Use this checklist to improve a Figma Make generation after it passes the blocking
checklist.

This checklist answers:

```txt
How can this valid first draft become a better decision-support screen?
```

Use first:

```txt
review/blocking-checklist.md
```

Then use this file for refinement.

Quality issues do not always require rejection. They guide improvement.

---

## Review order

Review the screen in this order:

```txt
1. user decision
2. screen structure
3. metrics and density
4. evidence hierarchy
5. source and validation cues
6. visual style
7. actionability
```

A good generated screen helps the user answer:

```txt
What is happening?
Why does it matter?
What can be trusted?
What should happen next?
```

---

## 1. User decision

- [ ] The screen supports one clear user decision.
- [ ] The target user role is clear.
- [ ] The title and description match the decision.
- [ ] The primary action supports the decision.
- [ ] The screen does not try to solve unrelated goals.

Improve if the screen displays data but does not support a decision.

---

## 2. Screen structure

- [ ] The screen follows the expected screen intent flow.
- [ ] Context appears before metrics, risks, recommendations and actions.
- [ ] Facts appear before interpretation.
- [ ] Actions appear after the user can understand why they matter.
- [ ] There are no unrelated sections added only to make the screen feel complete.

Preferred flow:

```txt
Context
→ decision signals
→ risks or readiness gaps
→ recommendations when relevant
→ owned actions
```

---

## 3. Dashboard drift

- [ ] The screen does not look like a generic SaaS dashboard.
- [ ] The screen is not a collection of unrelated cards.
- [ ] The screen does not include decorative charts.
- [ ] Generic labels such as `Overview`, `Insights`, `Activity` or `Analytics` are avoided unless they support the decision.
- [ ] The screen does not overuse equal-weight panels.

Improve if the screen could fit any B2B SaaS product without changing much.

---

## 4. Metrics

- [ ] Metrics are limited, usually 2 to 4.
- [ ] Each metric supports the user decision.
- [ ] Each metric has a clear label.
- [ ] Each metric has helper text when interpretation is needed.
- [ ] Metrics are not decorative or vanity metrics.
- [ ] Metrics include freshness, source context or validation status when trust depends on it.

Improve if there are too many KPIs or if metrics do not change the next decision.

---

## 5. Evidence hierarchy

- [ ] Facts appear before interpretation.
- [ ] The screen distinguishes facts, signals, recommendations and actions.
- [ ] Important recommendations are grounded in visible facts or context.
- [ ] Evidence-sensitive claims include source context when needed.
- [ ] Source strength is visible when trust is affected.
- [ ] Freshness is visible when timing affects trust.
- [ ] Validation status is visible when customer use is sensitive.

Recommended hierarchy:

```txt
Observed facts
→ source scope and source strength
→ interpreted signals
→ recommendations
→ owned actions
→ human validation when needed
```

---

## 6. Human validation

- [ ] Human validation is visible for critical customer, service, renewal, proof or asset decisions.
- [ ] Expert validation is visible when asset recommendations are not customer-ready.
- [ ] Proof validation is visible when proof is internal or incomplete.
- [ ] The UI does not imply automatic approval.

Improve if confidence language or visual emphasis replaces validation.

---

## 7. Proof and value

- [ ] Expected outcomes are labelled as expected outcomes.
- [ ] Proven value is shown only when supported by proof context.
- [ ] Internal proof is labelled as internal when it is not customer-ready.
- [ ] Customer-ready proof is shown only when validation status supports it.
- [ ] Completed activity is not overstated as customer value.
- [ ] Proof gaps are visible when they affect renewal, QBR or customer communication.

Improve if activity, expected outcome, internal proof and customer-ready proof are confused.

---

## 8. Asset intelligence, when relevant

- [ ] Asset scope is visible.
- [ ] Connectivity status is visible when monitoring coverage matters.
- [ ] Partial visibility is visible when asset knowledge is incomplete.
- [ ] Non-connected assets are clearly labelled.
- [ ] Source-system facts, Health signals and Intelligence interpretation are separated.
- [ ] Expert validation is visible before customer communication.
- [ ] Recommendations do not exceed available asset evidence.

Improve if asset intelligence looks more complete, live or validated than it is.

---

## 9. AI usage, when relevant

- [ ] The screen follows BI-first, AI-assisted logic.
- [ ] Structured facts appear as data, not chatbot answers.
- [ ] AI is used only for synthesis, explanation, prioritization, recommendation, drafting or reformulation.
- [ ] AI is not used for basic retrieval, counts, dates, owners, statuses, telemetry or source data.
- [ ] AI-generated content is grounded in visible facts.
- [ ] AI confidence is not used as evidence strength.

Improve if AI becomes the primary interface for simple structured facts.

---

## 10. Visual style

- [ ] Visual style remains sober.
- [ ] Visual style remains B2B.
- [ ] Visual style remains readable.
- [ ] Visual style remains structured.
- [ ] Visual style remains action-oriented.
- [ ] Visual style remains evidence-aware.
- [ ] No decorative gradients are used.
- [ ] No glassmorphism is used.
- [ ] No arbitrary shadows or arbitrary radius values are used.
- [ ] No decorative charts are used.
- [ ] Visual styling does not hide uncertainty.

Improve if the screen looks polished but generic, decorative, noisy or misleading.

---

## 11. Density and scanability

- [ ] The screen is dense enough for B2B operational work.
- [ ] The screen is not overloaded.
- [ ] Similar information is grouped.
- [ ] The page can be scanned quickly.
- [ ] There are not too many badges.
- [ ] There are not too many primary actions.
- [ ] There are not too many equal-priority cards.

Improve if the screen is too sparse, too marketing-like or too dense.

---

## 12. Actionability

- [ ] The screen ends with clear next actions when action is expected.
- [ ] Actions are ordered by priority.
- [ ] Actions are connected to risks, proof gaps, recommendations or the user decision.
- [ ] Action labels are specific.
- [ ] Owners and due dates are useful.
- [ ] The primary action is not competing with many secondary actions.

Improve if the user can understand the situation but not what to do next.

---

## 13. Golden example comparison

Compare the generated screen with the closest golden example:

```txt
guidelines/examples/golden/customer-monitoring.App.tsx
guidelines/examples/golden/renewal-risk-review.App.tsx
guidelines/examples/golden/asset-recommendation-review.App.tsx
guidelines/examples/golden/qbr-readiness.App.tsx
```

Check whether the generated screen preserves:

```txt
screen intent
→ component hierarchy
→ evidence hierarchy
→ actionability
→ visual sobriety
→ package usage
```

Improve if the screen drifts from the closest golden example without a clear reason.

---

## Final principle

The blocking checklist protects correctness.

The quality checklist improves usefulness.

A high-quality generated screen is not just valid code.

It is a sober, evidence-aware, decision-oriented first draft.
