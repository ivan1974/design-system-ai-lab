# Style Guidelines

## Purpose

This file defines the visual style rules Figma Make should follow when generating
screens with the `design-system-ai-lab` package.

Its role is to frame the visual output of generated screens without multiplying
low-level styling rules.

Use `styles.md` to define:

- visual personality
- decision workspace layout principles
- typography rules
- density rules
- card usage rules
- button hierarchy
- status communication
- forbidden visual patterns
- style review criteria

Do not use this file as the full design system documentation.

For generation rules, screen routing, AI usage, evidence, accessibility and
acceptance criteria, read:

```txt
Guidelines.md
```

For technical setup and package imports, read:

```txt
setup.md
```

For token names, aliases and tone mapping, read:

```txt
tokens.md
```

---

## Core style principle

The visual style must remain:

- sober
- B2B
- readable
- structured
- action-oriented
- evidence-aware

Generated screens should look like operational product interfaces.

They should not look like marketing pages, generic SaaS dashboards or decorative
analytics templates.

Style should support understanding, trust and action.

Style should not create decoration, hide uncertainty, make weak evidence look
stronger or replace approved package components and business patterns.

---

## Decision workspace style

Make should not create a long scrolling page made of equal cards by default.

When the user must compare, review, inspect or act, prefer a workspace structure:

```txt
WorkspaceShell
→ FilterBar
→ MasterDetailLayout
→ DetailPanel / DetailPanelTabs / StickyActionBar
→ SectionStack / SectionBlock
→ rows and compact primitives
```

Good visual structure:

```txt
context and scope
→ compact signals
→ list or queue
→ selected item detail
→ evidence and validation
→ owned next action
```

Avoid visual card saturation:

```txt
Card
Card
Card
Card
Card
Card
```

Card saturation happens when every metric, fact, action, proof point or signal is
rendered as a separate surface.

Use rows and compact primitives instead:

```txt
KeyValueRow
CompactMetric
SignalRow
EvidenceRow
ActionRow
DocumentRow
TimelineItem
```

Use `Card` only when the content is a highlighted object with one clear purpose.

---

## Required CSS import

Always import the design system CSS once:

```tsx
import "design-system-ai-lab/styles.css";
```

Do not duplicate the design system CSS in generated files.

Do not recreate `:root` tokens locally.

Do not create a competing theme file unless explicitly requested.

Do not create a new visual identity.

---

## Visual personality

Generated screens should feel:

- calm
- sober
- professional
- trustworthy
- operational
- product-oriented
- decision-oriented

Generated screens should not feel:

- playful
- flashy
- consumer-app-like
- marketing-oriented
- futuristic without a business reason
- generic SaaS template-like
- visually impressive but weak in actionability

A good generated screen should feel like:

```txt
A sober operational B2B interface that helps a service user understand status,
risks, evidence and next actions.
```

A bad generated screen feels like:

```txt
A generic analytics dashboard with decorative cards, colorful charts and unclear
actionability.
```

---

## Layout principles

Use layout to clarify the user decision.

For v2 Make output, the default decision-oriented order is:

```txt
Scope and context
→ decision signals
→ list or selected item detail when review is needed
→ risks, blockers or readiness gaps
→ recommendations when relevant
→ owned actions
```

Use simple layout utilities for structure:

```txt
min-h-screen
mx-auto
max-w-7xl
p-4
p-6
p-8
grid
flex
gap-3
gap-4
gap-6
space-y-4
space-y-8
items-start
items-center
justify-between
```

Use whitespace to clarify hierarchy and grouping.

Do not create overly complex layouts.

Do not create large dashboard grids by default.

Do not add columns, panels or sections only to make the screen feel rich.

Do not turn a decision-support screen into a long scrolling dashboard without
stronger prioritization.

---

## Typography rules

Use typography to clarify hierarchy, not to create decoration.

Preferred text utilities:

```txt
text-xs
text-sm
text-base
text-lg
text-2xl
text-3xl
font-medium
font-semibold
tracking-tight
```

Use larger type for primary headings and important summaries.

Use smaller type for metadata and helper text.

Keep evidence, freshness, source strength, validation context and proof status
readable when they affect trust.

Do not introduce:

- custom font stacks
- decorative fonts
- oversized display typography
- marketing-style headline systems
- unnecessary all-caps labels
- typography that makes weak evidence look stronger than it is

Do not rely on confident wording, larger type or stronger weight to replace
source evidence.

---

## Density rules

Generated screens should remain dense enough for B2B operational work.

Prefer focused density:

- 2 to 4 key signals or metrics
- 2 to 5 priority risks or blockers
- 2 to 5 owned actions
- one main action per main screen section
- one clear decision per generated screen

Use compact density:

```txt
MetricStrip for secondary signals
KeyValueList for facts
SignalRow for repeated observations
EvidenceRow for source context
ActionRow for follow-through
```

Avoid:

- too many cards
- too many metrics
- too many badges
- too many primary actions
- decorative whitespace
- long unprioritized scrolling layouts
- dense data dumps without grouping
- marketing-style spacious layouts

Use spacing to reduce cognitive load, not to inflate the interface.

---

## Card usage rules

Use cards to group related information around one purpose.

Prefer business patterns when they match the section intent:

```tsx
<CustomerStatusCard />
<ConnectivityCoverageCard />
<RenewalRiskSummary />
<ValueProofCard />
<AssetIntelligenceSummary />
<ServiceRiskSummary />
<RecommendationReviewPanel />
<CustomerReviewReadinessCard />
```

Use workspace and compact components before generic `Card` when the user must
review a list, inspect a detail panel or act on repeated items:

```tsx
<WorkspaceShell />
<MasterDetailLayout />
<DetailPanel />
<SectionBlock />
<KeyValueList />
<MetricStrip />
<ActionRow />
<EvidenceRow />
<SignalRow />
```

Use decision cards for highlighted items only:

```tsx
<AlertCard />
<ActionCard />
<RecommendationCard />
```

Use generic `Card` only when no more specific business pattern, decision
component, compact primitive or workspace component fits.

Do not rebuild known business sections with raw `Card`, `div`, `dt` or `dd`
markup when a dedicated pattern exists.

Do not create generic cards titled:

```txt
Overview
Details
Data
Info
Misc
```

Cards should help the user understand what matters and what to do next.

---

## Button hierarchy

Buttons should be explicit and action-oriented.

Use:

- primary style for the main action
- secondary style for contextual actions
- ghost style for low-emphasis actions
- danger style only for destructive actions

Do not use multiple competing primary buttons in the same section.

Avoid vague button labels:

```txt
OK
Submit
More
Click here
Go
```

Prefer explicit button labels:

```txt
Create action
Review risk
Plan follow-up
Check connectivity
View details
Prepare value summary
Validate recommendation
```

Use `Button` directly as a `Dialog` trigger.

Do not create a local `ForwardedButton` or custom button wrapper.

Do not recreate a custom button system.

---

## Form styling rules

Use package form components for generated forms.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Avoid:

```tsx
<input style={{ height: "40px", borderRadius: "6px" }} />
```

Do not create inline-styled `input`, `select` or `textarea` elements.

Do not create a custom form styling system.

Do not use raw labels and inputs when `Field`, `Input`, `Select` and `Textarea`
fit the need.

---

## Status communication

Status must be communicated through text, structure and components, not color
alone.

Use:

- `SemanticTag` for category, scope, plan, asset type or business qualifier
- `StatusPill` for state, readiness, validation or risk status
- `PriorityPill` for priority
- `SourceStrengthPill` for evidence/source strength
- `Badge` only for older/simple compact metadata inside supported components
- `AlertCard` for highlighted risks that need explanation and recommendation
- business patterns for known business status sections

Good:

```tsx
<SemanticTag tone="primary">EcoCare Advanced</SemanticTag>
```

Good:

```tsx
<StatusPill tone="warning">Review needed</StatusPill>
```

Good:

```tsx
<SourceStrengthPill strength="partial" />
```

Avoid:

```tsx
<span className="text-(--ec-color-warning)">Warning</span>
```

For evidence-sensitive states, the UI should clarify what is known, what is
uncertain and what still needs validation.

For asset-heavy screens, labels should explicitly distinguish connected,
partially connected and non-connected assets.

For value proof screens, labels should distinguish expected outcomes, technical
outcomes, internal proof and customer-ready proof.

Do not use visual confidence, stronger color or larger typography to replace
source evidence.

---

## Evidence-aware styling

Style should help users distinguish:

```txt
facts
→ source scope and source strength
→ signals
→ recommendations
→ actions
→ validation states
→ expected outcome or proof status
```

Use structured components and patterns instead of visual tricks.

Good:

```tsx
<EvidenceRow
  label="Monitoring signal"
  source="Monitoring platform"
  sourceScope="Connected asset only"
  sourceStrength="partial"
  freshness="18 hours"
  validationStatus="Expert review needed"
/>
```

Avoid:

```tsx
<Card title="Evidence">
  <p className="text-(--ec-color-warning)">Weak source</p>
</Card>
```

Do not use style to make uncertain information look certain.

Do not hide validation context in overly muted text when it affects the user's
decision.

Do not use decorative emphasis to make unsupported recommendations feel more
credible.

Do not use visual hierarchy to make partial asset visibility look complete,
non-connected assets look live-monitored, AI interpretation look like
source-system truth or expected outcomes look like proven value.

---

## Charts and tables

Avoid decorative charts.

Only include charts if explicitly requested and if they support a decision.

Prefer metrics, summaries, risks, proof points and actions over generic charts.

Do not generate charts just to make the screen look like a dashboard.

Avoid large unstructured tables.

If tabular information is needed, keep it small and decision-oriented.

For this Make kit, prefer:

- `MasterDetailLayout`
- `SignalRow`
- `EvidenceRow`
- `ActionRow`
- `KeyValueList`
- `MetricStrip`
- business patterns

---

## Empty and loading states

If the prompt asks for states, keep them simple.

Empty states should explain:

- what is missing
- why it matters
- what the user can do next

Good empty-state copy:

```txt
Source data is unavailable. Validate the customer context in the source system before creating an action.
```

Weak empty-state copy:

```txt
No data.
```

When data is unavailable, do not imply certainty.

Do not create decorative empty illustrations unless explicitly requested.

Loading states should be calm and minimal.

Do not create animated decorative loading experiences.

---

## Forbidden visual patterns

Do not generate:

- generic SaaS dashboards
- decorative hero sections
- decorative gradients
- glassmorphism
- neumorphism
- blurred surfaces
- glow effects
- neon effects
- bright marketing visuals
- arbitrary shadows
- arbitrary radius values
- decorative charts
- generic dashboard cards
- card-saturated layouts
- one card per fact, signal, action or proof point
- custom card systems
- custom button systems
- custom badge systems
- custom form systems
- custom modal systems
- too many charts
- dense data dumps
- unlabeled status colors
- multiple competing primary actions
- inline-styled raw form controls
- local component wrappers
- local design system folders
- manual styling used to recreate business patterns
- visual styling that hides uncertainty
- visual styling that hides asset scope, source scope, source strength or proof status
- visual styling that makes weak evidence look stronger than it is
- non-connected assets styled as live-monitored
- expected outcomes styled as proven value
- technical outcomes or internal proof styled as customer-ready proof without validation
- unsupported recommendations styled as authoritative
- evidence-sensitive information shown too subtly

---

## Style review checklist

After generation, verify:

- the screen imports `design-system-ai-lab/styles.css`
- package styles are not duplicated locally
- generated styles do not create a competing visual system
- no competing theme file was created
- no local design system was created
- no package components were recreated locally
- no form controls were styled inline
- no new color palette was introduced
- no decorative gradients or decorative backgrounds were introduced
- no glassmorphism, glow effect or blurred surface was introduced
- no arbitrary radius or shadow values were introduced
- no generic dashboard card system was created
- no card-saturated layout was created
- no custom button, badge, card, modal or form system was created
- business patterns are used before manual section styling
- workspace components are used when list/detail review is needed
- compact primitives and rows are used for repeated facts, signals and actions
- decision components are used for metrics, risks, recommendations and actions
- status is not communicated by color alone
- evidence, freshness and validation context remain readable when needed
- source strength remains readable when it affects trust
- asset scope, source scope, connectivity status and proof status are not hidden by styling
- partially connected and non-connected assets are labelled in text, not color alone
- expected outcomes are not styled as proven value
- technical outcomes and internal proof are not styled as customer-ready proof without validation
- uncertainty is not hidden by visual styling
- recommendations are not styled as authoritative without supporting evidence
- the screen is readable and operational
- the visual hierarchy supports decision-making

---

## Final principle

Style should support understanding, trust and actionability.

If a visual choice does not improve clarity, hierarchy, trust or actionability,
do not add it.

If a visual choice hides uncertainty, creates false confidence, makes weak
evidence look stronger or replaces an approved component or pattern, remove it.
