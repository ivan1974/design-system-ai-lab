# Style Guidelines

## Purpose

This file defines the visual style rules Figma Make should follow when
generating screens with the `design-system-ai-lab` package.

The goal is to keep generated interfaces consistent with the design system and
to avoid generic, decorative, inaccessible, noisy or ungoverned UI generation.

Generated screens should look like sober B2B product interfaces, not marketing
pages or generic dashboard templates.

---

## Core style principle

Use the design system styles.

Do not invent a new visual identity.

Figma Make should compose interfaces using:

- package components
- form components
- decision components
- business patterns
- package CSS
- existing design tokens
- approved utility classes
- sober B2B layouts

Prefer package components and business patterns before manual styling.

Style usage must support the transversal principles:

```txt
principles/accessibility.md
principles/eco-design.md
principles/ai-usage.md
principles/evidence-and-trust.md
```

This means style should support readability, hierarchy, evidence, trust and
actionability.

Style should not hide uncertainty, communicate status only through color,
create decorative complexity or replace approved components and patterns.

Style should also preserve trust-critical distinctions when they affect the
decision: asset scope, connectivity status, source scope, source strength,
freshness, Health versus Intelligence, expected outcomes, technical outcomes,
internal proof and customer-ready proof.

Generated screens should support understanding, decision-making and action.

---

## Required CSS import

Always import the design system CSS once:

```tsx
import "design-system-ai-lab/styles.css";
```

This CSS includes:

- design tokens
- compatibility aliases
- base styles
- component styling dependencies
- Tailwind-generated utility classes used by the package

The package may expose CSS variables using the `--ec-*` prefix.

This prefix is a stable technical namespace kept for package compatibility.

Do not rename this namespace in generated screens.

Do not interpret the prefix as product-facing copy.

Do not duplicate the design system CSS in generated files.

Do not recreate `:root` tokens locally.

Do not create a competing theme file unless explicitly requested.

---

## Visual tone

Generated screens should feel:

- sober
- B2B
- structured
- readable
- operational
- decision-oriented
- calm and trustworthy
- evidence-aware

Avoid styles that feel:

- playful
- consumer-app-like
- decorative
- overly colorful
- marketing-oriented
- generic SaaS template-like
- futuristic without a business reason

---

## Design system layers and style responsibility

Use the right layer for the styling need.

### Business patterns

Use business patterns for complete business sections:

- `CustomerStatusCard`
- `ConnectivityCoverageCard`
- `RenewalRiskSummary`
- `ValueProofCard`
- `CreateActionDialog`

These patterns already apply the right visual structure and spacing.

Do not rebuild equivalent sections manually with custom cards and layout styles.

### Decision components

Use decision components for metrics, risks, actions and summaries:

- `MetricGrid`
- `PriorityList`
- `ActionList`
- `StatusSummary`
- `AlertCard`
- `ActionCard`
- `SectionHeader`

These components guide visual hierarchy around decisions.

### Components and forms

Use package components and form components before raw HTML styling.

Do not create local buttons, badges, cards, form fields or dialogs.

---

## Color usage

Use the colors provided by the design system tokens.

Prefer token-based utility classes such as:

```tsx
<main className="min-h-screen bg-(--ec-color-background) p-8">
  ...
</main>
```

Do not create new color palettes.

Do not use arbitrary decorative colors.

Do not use color as the only way to communicate status.

Status should also be communicated through text labels, badges, titles or
recommendations.

When status affects trust, add visible context such as freshness, validation
state, source context or evidence.

For asset-heavy screens, color must not be the only distinction between
connected, partially connected and non-connected assets.

For value proof screens, color must not make expected outcomes, technical
outcomes, internal proof and customer-ready proof look equivalent.

Avoid using muted or decorative styling for information the user needs to trust
or validate.

---

## Backgrounds and surfaces

Use simple backgrounds and surfaces.

Preferred patterns:

```tsx
bg-(--ec-color-background)
bg-(--ec-color-surface)
bg-(--ec-color-surface-muted)
```

Use `--ec-color-background` for the main page background.

Use package `Card`, `StatusSummary` and business patterns for content surfaces.

Avoid:

```txt
gradients
image backgrounds
glassmorphism
blurred surfaces
neon effects
colorful hero backgrounds
```

The screen should be easy to scan and should not compete visually with the
content.

---

## Typography

Use the typography already provided by the design system CSS and utility
classes.

Preferred text styles:

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

Do not introduce:

- custom font stacks
- decorative fonts
- oversized display typography
- marketing-style headline systems
- unnecessary all-caps labels

Text should support clarity, hierarchy and decision-making.

Text should also support trust.

Evidence, freshness, validation status and uncertainty should remain readable
when they affect the user's decision.

Do not make important validation or uncertainty labels visually too subtle.

Source strength, partial visibility, Health versus Intelligence labels and
proof status should remain readable when they affect trust.

Do not use larger type, stronger weight or confident wording to make weak
evidence appear stronger than it is.

---

## Spacing and layout

Use simple, readable spacing.

Preferred layout utilities:

```txt
p-4
p-6
p-8
gap-2
gap-3
gap-4
gap-6
space-y-3
space-y-4
space-y-8
mx-auto
max-w-5xl
max-w-6xl
max-w-7xl
grid
flex
items-start
items-center
justify-between
```

Use whitespace to clarify grouping and hierarchy.

Do not create overly complex layouts.

Avoid dense information blocks without grouping.

Avoid excessive spacing that makes the screen feel like a marketing landing
page.

Generated screens should remain dense enough for operational B2B work.

Use spacing to reduce cognitive load, not to inflate the screen.

Avoid turning decision-support screens into long scrolling dashboards without
stronger prioritization.

Keep the main reading order clear:

```txt
Context
→ Metrics
→ Risks
→ Actions
```

---

## Radius and shadows

Use the design system radius and shadow tokens through approved components.

When additional layout wrappers need radius or shadow, use existing tokens only:

```txt
rounded-(--ec-radius-sm)
rounded-(--ec-radius-md)
rounded-(--ec-radius-lg)
shadow-(--ec-shadow-card)
shadow-(--ec-shadow-popover)
```

Do not use arbitrary values such as:

```txt
rounded-[22px]
rounded-3xl
shadow-2xl
shadow-blue-500/40
```

Avoid dramatic elevation.

The interface should feel structured, not flashy.

---

## Component styling

Do not restyle package components from scratch.

Use component props and composition first.

For example:

```tsx
<Button variant="secondary">View details</Button>
```

Do not replace the component with a custom local button.

Do not override package component styles unless the prompt explicitly asks for a
design system extension.

Do not create local component wrappers to alter styling.

Do not use manual styling to recreate existing components, decision components
or business patterns.

If a business pattern matches the section intent, use the pattern instead of
restyling `Card`, `Badge`, `MetricCard` or raw `div` structures.

---

## Form styling

Use package form components for all generated forms.

Preferred:

```tsx
<Field label="Owner" htmlFor="owner">
  <Input id="owner" placeholder="CSM" />
</Field>
```

Also valid:

```tsx
<Field label="Priority" htmlFor="priority">
  <Select id="priority" defaultValue="high">
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </Select>
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

## Buttons

Buttons should be clear and action-oriented.

Use:

- `primary` for the main action
- `secondary` for contextual actions
- `ghost` for low-emphasis actions
- `danger` only for destructive actions

Do not use multiple competing primary buttons in the same screen section.

Avoid vague labels such as:

```txt
OK
Submit
More
Click here
```

Prefer explicit labels such as:

```txt
Create action
Review risk
Plan follow-up
Check connectivity
View details
Prepare value summary
```

Use `Button` directly as a `Dialog` trigger.

Do not create a local `ForwardedButton` or custom button wrapper.

---

## Badges

Badges should communicate concise status, tone or metadata.

Use tones consistently:

- `neutral` for secondary metadata
- `success` for healthy or complete states
- `warning` for partial, delayed or uncertain states
- `danger` for critical risk
- `primary` for active plan, membership or selected state

Do not use badges as buttons.

Do not make badge labels long.

Do not use status colors without explanatory text.

For evidence-sensitive states, the badge label should explain the state clearly.

For asset-heavy screens, badge labels should explicitly distinguish partially
connected assets, non-connected assets, source strength and proof status.

For value proof screens, badge labels should distinguish expected outcomes,
technical outcomes, internal proof and customer-ready proof.

Good:

```tsx
<Badge tone="warning">Source data requires review</Badge>
```

Good:

```tsx
<Badge tone="warning">Partially connected</Badge>
```

Good:

```tsx
<Badge tone="warning">Expected outcome, not proven</Badge>
```

Good:

```tsx
<Badge tone="info">Internal proof, not customer-ready</Badge>
```

Weak:

```tsx
<Badge tone="warning">Warning</Badge>
```

---

## Metrics

Metrics should be visually readable and decision-relevant.

Use `MetricCard` for metrics.

Use `MetricGrid` to arrange multiple metrics.

Each metric should include:

- a clear label
- a meaningful value
- helper text when useful
- trend only when it helps interpretation

Avoid metrics without context.

Avoid large metric grids with too many numbers.

Avoid vanity metrics that do not help the user decide what to do next.

---

## Alerts and risks

Use `AlertCard` for alerts, risks, blockers and important signals.

Use `PriorityList` to group alerts and risks.

Alerts should be sorted by severity or business impact.

Every alert must include a recommendation.

Important recommendations should be supported by visible context or evidence.

Alerts should not create false certainty when data is incomplete, outdated or
inferred.

Asset-related alerts should include enough asset, source or connectivity
context to make the recommendation reviewable.

Do not style raw Health facts and Intelligence interpretation at the same
visual level when the distinction affects trust.

Do not use visual styling alone to indicate severity.

Severity should also be clear from the title, description or badge.

---

## Actions

Use `ActionCard` for recommended, planned or overdue actions.

Use `ActionList` to group actions.

Every action should include:

- owner
- due date
- priority

Actions should look actionable, not like generic notes.

Action titles should describe concrete work.

Actions should be grounded in the visible context, risk, recommendation or
evidence shown earlier on the screen.

Asset-related actions should include site, zone, room, asset group or asset
context when needed for follow-through.

Avoid vague action titles such as:

```txt
Follow up
Review
Check
Update
```

---

## Dialogs

Use `Dialog` for short focused creation or confirmation flows.

Use `DialogFooter` and `DialogClose` for custom footers.

Prefer `CreateActionDialog` for action creation.

Dialog content should remain compact.

Do not use a dialog for a complex multi-step workflow.

Do not create decorative modal styles.

Do not create local wrappers to make `Button` work as a trigger.

The package `Button` is already compatible with `Dialog` trigger usage.

---

## Business pattern styling

Use business patterns as complete sections.

Do not manually restyle them unless explicitly asked.

Examples:

```tsx
<CustomerStatusCard />
<ConnectivityCoverageCard />
<RenewalRiskSummary />
<ValueProofCard />
<CreateActionDialog />
```

These patterns exist to prevent Make from recreating known sections with
improvised layout and styling.

They also help preserve evidence and trust because they structure facts,
signals, proof points and next actions consistently.

---

## Charts and visualization

For this demo scope, avoid decorative charts.

Only include charts if explicitly requested and if they support a decision.

Prefer metrics, alerts, summaries, proof points and actions over generic charts.

Do not generate charts just to make the screen look like a dashboard.

---

## Tables

Avoid large unstructured tables.

If tabular information is needed, keep it small and decision-oriented.

For this Make kit, prefer `StatusSummary`, `MetricCard`, `AlertCard`,
`ActionCard`, `ValueProofCard` and business patterns over tables.

---

## Evidence and trust styling

Style should help users distinguish:

```txt
facts
source scope and source strength
signals
recommendations
actions
validation states
expected outcome or proof status
```

Use structured components and patterns instead of visual tricks.

Good:

```tsx
<ConnectivityCoverageCard
  coverageRate="68%"
  connectedAssets="17 assets"
  disconnectedAssets="8 assets"
  monitoringStatus="Partial monitoring coverage"
  lastUpdate="18 hours ago"
  badges={[{ label: "Connectivity partial", tone: "warning" }]}
/>
```

Avoid:

```tsx
<Card title="Connectivity">
  <p className="text-(--ec-color-warning)">Warning</p>
</Card>
```

The first example provides structured evidence and freshness.

The second example relies on vague color-coded wording.

Do not use style to make uncertain information look certain.

Do not hide validation context in overly muted text when it affects the user's
decision.

Do not use decorative emphasis to make unsupported recommendations feel more
credible.

Do not use visual hierarchy to make partial asset visibility look complete,
non-connected assets look live-monitored, AI interpretation look like
source-system truth or expected outcomes look like proven value.

Technical outcomes and internal proof should not be styled as customer-ready
proof without validation.

---

Avoid large unstructured tables.

If tabular information is needed, keep it small and decision-oriented.

For this Make kit, prefer `StatusSummary`, `MetricCard`, `AlertCard`,
`ActionCard`, `ValueProofCard` and business patterns over tables.

---

## Empty states and loading states

If the prompt asks for states, keep them simple.

Empty states should explain:

- what is missing
- why it matters
- what the user can do next

When data is unavailable, do not imply certainty.

Good empty-state copy:

```txt
Source data is unavailable. Validate the customer context in the source system before creating an action.
```

Weak empty-state copy:

```txt
No data.
```

Do not create decorative empty illustrations unless explicitly requested.

Loading states should be calm and minimal.

Do not create animated decorative loading experiences.

---

## Anti-patterns

Do not generate:

- generic SaaS dashboards
- decorative hero sections
- gradients
- glassmorphism
- neumorphism
- bright marketing visuals
- custom card systems
- custom button systems
- custom badge systems
- custom form systems
- custom modal systems
- too many charts
- dense data dumps
- unlabeled status colors
- visual styling that hides uncertainty
- visual styling that hides asset scope, source scope, source strength or proof status
- visual styling that makes weak evidence look stronger than it is
- non-connected assets styled as live-monitored
- expected outcomes styled as proven value
- technical outcomes or internal proof styled as customer-ready proof without validation
- unsupported recommendations styled as authoritative
- evidence-sensitive information shown too subtly
- multiple competing primary actions
- inline-styled raw form controls
- local component wrappers
- local design system folders
- manual styling used to recreate business patterns

---

## Good style direction

A good generated screen should feel like:

```txt
A sober operational B2B interface that helps a service user understand status,
risks and next actions.
```

A bad generated screen feels like:

```txt
A generic analytics dashboard with decorative cards, colorful charts and unclear
actionability.
```

---

## Style review checklist

- the screen imports `design-system-ai-lab/styles.css`
- the official `--ec-*` namespace is kept for compatibility
- the `--ec-*` prefix is not used as product-facing copy
- package styles are not duplicated locally
- generated styles do not create a competing visual system
- no competing theme file was created
- no local design system was created
- no package components were recreated locally
- no form controls were styled inline
- no new color palette was introduced
- no gradients or decorative backgrounds were introduced
- no arbitrary radius or shadow values were introduced
- business patterns are used before manual section styling
- decision components are used for metrics, risks and actions
- status is not communicated by color alone
- evidence, freshness and validation context remain readable when needed
- source strength remains readable when it affects trust
- asset scope, source scope, connectivity status and proof status are not hidden by styling
- partially connected and non-connected assets are labelled in text, not color alone
- Health versus Intelligence distinction is visible when both are present
- expected outcomes are not styled as proven value
- technical outcomes and internal proof are not styled as customer-ready proof without validation
- confidence language does not replace source evidence
- uncertainty is not hidden by visual styling
- recommendations are not styled as authoritative without supporting evidence
- the screen is readable and operational
- the visual hierarchy supports decision-making
- visual hierarchy follows context, metrics, risks and actions when relevant

---

## Final principle

Style should support understanding, trust and actionability.

If a visual choice does not improve clarity, hierarchy, trust or actionability,
do not add it.

If a visual choice hides uncertainty, creates false confidence, makes weak
evidence look stronger than it is or replaces an approved component or pattern,
remove it.
