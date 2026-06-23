export function runDeterministicPipeline({ prompt, runner = "deterministic" }) {
  const trace = [];
  const brief = step(trace, runner, "Brief Interpreter", () => runBriefInterpreter(prompt));
  const rules = step(trace, runner, "Rule Selector", () => runRuleSelector());
  const architecture = step(trace, runner, "Information Architect", () => runInformationArchitect(brief));
  const componentPlan = step(trace, runner, "Component Fit Reviewer", () => runComponentFitReviewer());
  const proposal = step(trace, runner, "Screen Explorer", () => runScreenExplorer(brief, architecture, componentPlan));
  const trust = step(trace, runner, "Trust Reviewer", () => runTrustReviewer());
  const candidates = step(trace, runner, "DS Evolution Reviewer", () => runDsEvolutionReviewer(proposal));

  return {
    trace,
    artifacts: {
      "01-screen-brief.json": brief,
      "02-applicable-rules.json": rules,
      "03-screen-architecture.json": architecture,
      "04-component-plan.json": componentPlan,
      "05-screen-proposal.json": proposal,
      "05-screen-proposal.md": proposalMd(brief, proposal),
      "06-screen.tsx": screenTsx(brief),
      "07-trust-validation-report.json": trust,
      "08-design-system-candidates.json": candidates,
      "08-design-system-candidates.md": candidatesMd(candidates),
    },
  };
}

function step(trace, runner, agent, fn) {
  const startedAt = new Date().toISOString();
  const output = fn();
  trace.push({ agent, runner, status: "completed", started_at: startedAt, completed_at: new Date().toISOString() });
  return output;
}

function runBriefInterpreter(prompt) {
  const role = /\bCSM\b|customer success/i.test(prompt) ? "Customer Success Manager" : "Operational service user";
  const domain = /asset|equipment|installed base/i.test(prompt) ? "asset" : "service object";
  const task = /prioriti|risk/i.test(prompt) ? "Prioritize items and decide what to review first." : "Understand the situation and decide the next action.";
  return {
    prompt,
    interpreted_intent: `Create an operational decision-support screen for: ${prompt}`,
    user_role: role,
    primary_task: task,
    primary_decision_or_job: task,
    domain_object: domain,
    business_context: "Local deterministic run used to test the pipeline before external orchestration.",
    evidence_needs: ["Show source context for any claim.", "Keep facts, interpretation and recommendation distinct."],
    trust_and_validation_needs: ["Do not invent data.", "Do not present AI output as proof."],
    source_guidelines: ["guidelines/runtime/genai-reasoning-hierarchy.md", "guidelines/reference/instruction-language.md"],
  };
}

function runRuleSelector() {
  return {
    must: [
      rule("Apply principles and knowledge before composing UI.", "guidelines/runtime/genai-reasoning-hierarchy.md"),
      rule("Inspect design-system material before local composition.", "guidelines/runtime/genai-reasoning-hierarchy.md"),
      rule("Do not invent evidence, telemetry, source data or proof.", "guidelines/runtime/genai-reasoning-hierarchy.md"),
    ],
    should: [rule("Use package primitives and components when they fit the brief and layout.", "guidelines/reference/component-selection.md")],
    may: [rule("Use local screen-specific components when exported material does not fit.", "guidelines/reference/instruction-language.md")],
    hard_blockers: [rule("Fictional package imports are not allowed.", "guidelines/reference/design-system-vocabulary.md")],
    source_guidelines: ["guidelines/runtime/genai-reasoning-hierarchy.md", "guidelines/reference/component-selection.md"],
  };
}

function runInformationArchitect(brief) {
  return {
    primary_decision_supported: brief.primary_decision_or_job,
    architecture_summary: "Decision-first screen with context, priority signals, evidence notes and controlled actions.",
    information_hierarchy: [
      item(1, "Context", "Clarify scope and user task."),
      item(2, "Priority signals", "Surface what needs review first."),
      item(3, "Evidence notes", "Expose limits and source context."),
      item(4, "Actions", "Let the user choose the next step."),
    ],
    evidence_placement: ["Near each interpreted signal."],
    known_risks: ["Generated with mock examples only."],
  };
}

function runComponentFitReviewer() {
  return {
    inspection_summary: "No exported product component is forced. A local card is used to keep the scaffold simple and explicit.",
    package_components: [],
    package_primitives: [],
    local_composition: ["PriorityItemCard"],
    rejected_components: [],
    forbidden_imports_checked: true,
    package_visual_foundation_preserved: true,
  };
}

function runScreenExplorer(brief, architecture, componentPlan) {
  return {
    proposal_summary: "Agentic local proposal using a decision-first list with visible evidence notes.",
    primary_decision_supported: brief.primary_decision_or_job,
    information_hierarchy: architecture.information_hierarchy,
    component_plan: {
      package_components: componentPlan.package_components,
      package_primitives: componentPlan.package_primitives,
      local_composition: componentPlan.local_composition,
      forbidden_imports_checked: true,
    },
    local_components: [{ name: "PriorityItemCard", package_import_status: "local_only_not_package_export", reason_existing_ds_material_was_insufficient: "The run needs a small screen-specific card for comparing generated mock items." }],
    reasoning_trace: { must_applied: ["principles", "ds-inspection", "no-invented-proof"], should_followed: [], should_deviations: [{ summary: "No package component was forced for the scaffold." }], may_explorations: ["local-card"] },
    known_limits: ["Deterministic local run.", "Mock examples only.", "Requires review before production use."],
    source_guidelines: ["guidelines/runtime/genai-reasoning-hierarchy.md"],
  };
}

function runTrustReviewer() {
  return {
    status: "pass_with_warnings",
    summary: "Local deterministic run created without source-system claims.",
    checks: [
      { name: "evidence_not_invented", status: "pass", notes: "Only mock examples are used." },
      { name: "human_control", status: "pass", notes: "Actions are review-oriented." },
      { name: "scaffold_limit", status: "warning", notes: "This is not a live system output." },
    ],
    blocking_issues: [],
    warnings: [{ severity: "minor", description: "Generated deterministically; use as a pipeline test." }],
    repair_recommendations: ["Replace mock examples with reviewed source-backed data before real use."],
  };
}

function runDsEvolutionReviewer(proposal) {
  return { candidates: [{ name: "PriorityItemCard", source: "local_component", status: "candidate_signal", reason: proposal.local_components[0].reason_existing_ds_material_was_insufficient }] };
}

function screenTsx(brief) {
  return `import "design-system-ai-lab/styles.css";\n\nconst items = [\n  { id: "item-1", name: "Main LV switchboard", status: "Review first", evidence: "Mock data only" },\n  { id: "item-2", name: "UPS line 2", status: "Review next", evidence: "Mock data only" },\n];\n\nfunction PriorityItemCard({ item }: { item: (typeof items)[number] }) {\n  return (\n    <article className="rounded-xl border bg-card p-4 text-card-foreground shadow-sm">\n      <div className="flex items-start justify-between gap-4">\n        <h3 className="text-base font-semibold">{item.name}</h3>\n        <span className="rounded-full border px-2 py-1 text-xs font-medium">{item.status}</span>\n      </div>\n      <p className="mt-3 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">Evidence: {item.evidence}</p>\n      <button className="mt-4 rounded-md border px-3 py-2 text-sm font-medium">Review</button>\n    </article>\n  );\n}\n\nexport default function GeneratedScreen() {\n  return (\n    <main className="min-h-screen bg-background text-foreground">\n      <section className="mx-auto max-w-5xl p-6">\n        <p className="text-sm text-muted-foreground">${safe(brief.user_role)}</p>\n        <h1 className="mt-2 text-2xl font-semibold">Agentic priority review</h1>\n        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">${safe(brief.primary_decision_or_job)}</p>\n        <div className="mt-6 grid gap-4 md:grid-cols-2">{items.map((item) => <PriorityItemCard key={item.id} item={item} />)}</div>\n      </section>\n    </main>\n  );\n}\n`;
}

function proposalMd(brief, proposal) { return `# Screen proposal\n\n${proposal.proposal_summary}\n\n## Primary decision\n\n${brief.primary_decision_or_job}\n\n## Known limits\n\n${proposal.known_limits.map((x) => `- ${x}`).join("\n")}\n`; }
function candidatesMd(c) { return `# Design-system candidates\n\n${c.candidates.map((x) => `- ${x.name}: ${x.status}`).join("\n") || "None"}\n`; }
function rule(summary, source) { return { summary, source, reason_selected: "Selected by deterministic runner." }; }
function item(rank, section, purpose) { return { rank, section, purpose }; }
function safe(value) { return String(value).replace(/[<>]/g, ""); }
