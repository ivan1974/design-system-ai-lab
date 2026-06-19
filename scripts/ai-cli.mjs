#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";

const repoRoot = process.cwd();
const command = process.argv[2];
const args = process.argv.slice(3);

const OUTPUTS_DIR = path.join(repoRoot, "outputs");

function usage() {
  console.log(`Usage:
  pnpm ai:brief "Create a screen for a CSM to prioritize risky assets"
  pnpm ai:explore "Create a screen for a CSM to prioritize risky assets"
  pnpm ai:validate outputs/run-001
  pnpm ai:report outputs/run-001
`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48) || "run";
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function createRunId(prompt) {
  return `${timestamp()}-${slugify(prompt)}`;
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function writeText(filePath, value) {
  fs.writeFileSync(filePath, value, "utf8");
}

function inferUserRole(prompt) {
  if (/\bCSM\b|customer success/i.test(prompt)) return "Customer Success Manager";
  if (/field service|technician|intervention/i.test(prompt)) return "Field Service user";
  if (/support|technical support/i.test(prompt)) return "Support user";
  if (/sales/i.test(prompt)) return "Sales user";
  return "Operational service user";
}

function inferDomainObject(prompt) {
  if (/asset|equipment|installed base|risky assets/i.test(prompt)) return "asset";
  if (/site|facility|plant/i.test(prompt)) return "site";
  if (/recommendation/i.test(prompt)) return "recommendation";
  if (/document|report/i.test(prompt)) return "document";
  if (/customer|account/i.test(prompt)) return "customer";
  return "service workspace";
}

function inferTask(prompt) {
  if (/prioriti[sz]e|risky|risk/i.test(prompt)) return "Prioritize risky items and decide what to review first.";
  if (/monitor|status|health/i.test(prompt)) return "Understand current operational status and identify what needs attention.";
  if (/recommendation/i.test(prompt)) return "Review recommendations and decide which action to take.";
  return "Understand the situation and decide the next best action.";
}

function buildBrief(prompt, runId) {
  const userRole = inferUserRole(prompt);
  const domainObject = inferDomainObject(prompt);
  const primaryTask = inferTask(prompt);

  return {
    prompt,
    interpreted_intent: `Create an operational decision-support screen for: ${prompt}`,
    user_role: userRole,
    primary_task: primaryTask,
    primary_decision_or_job: primaryTask,
    domain_object: domainObject,
    business_context: "Generated locally by the CLI. This is a deterministic scaffold, not an LLM-generated final interpretation.",
    evidence_needs: [
      "Visible source context for any operational claim.",
      "Clear distinction between observed facts, interpretation and recommendation."
    ],
    trust_and_validation_needs: [
      "Do not present AI output as proof.",
      "Do not invent telemetry, evidence, source data or proven value."
    ],
    constraints: [
      "Apply relevant principles and knowledge.",
      "Inspect available design-system material before local composition.",
      "Use exported components and primitives when they fit the brief and layout.",
      "Keep local composition allowed when exported material does not fit."
    ],
    source_guidelines: [
      "guidelines/runtime/genai-reasoning-hierarchy.md",
      "guidelines/reference/instruction-language.md"
    ],
    run_id: runId
  };
}

function buildRules(runId) {
  return {
    brief_id: runId,
    must: [
      {
        id: "must-apply-principles-and-knowledge",
        summary: "Apply relevant principles and knowledge before composing UI.",
        source: "guidelines/runtime/genai-reasoning-hierarchy.md",
        reason_selected: "Every generated screen must be grounded in project reasoning rules."
      },
      {
        id: "must-inspect-ds-material",
        summary: "Inspect available primitives, components and exports before local UI.",
        source: "guidelines/runtime/genai-reasoning-hierarchy.md",
        reason_selected: "Component usage is conditional, but DS inspection is mandatory."
      },
      {
        id: "must-not-invent-evidence",
        summary: "Do not invent evidence, telemetry, source data or proof.",
        source: "guidelines/runtime/genai-reasoning-hierarchy.md",
        reason_selected: "Trust and evidence failures are critical blockers."
      }
    ],
    should: [
      {
        id: "should-use-package-when-fit",
        summary: "Use package primitives and components when they support the brief intent and layout.",
        source: "guidelines/runtime/genai-reasoning-hierarchy.md",
        reason_selected: "Existing DS material should be reused when it fits."
      }
    ],
    may: [
      {
        id: "may-compose-locally",
        summary: "Create local screen-specific components when no exported component fits.",
        source: "guidelines/runtime/genai-reasoning-hierarchy.md",
        reason_selected: "Local composition remains allowed when it better serves the brief."
      }
    ],
    hard_blockers: [
      {
        id: "block-fictional-imports",
        summary: "Do not import fictional package components.",
        source: "guidelines/runtime/genai-reasoning-hierarchy.md",
        reason_selected: "Generated code must use real package exports only."
      },
      {
        id: "block-invented-proof",
        summary: "Do not present expected outcomes as proven value.",
        source: "guidelines/reference/ai-usage-and-validation.md",
        reason_selected: "Business value proof requires source evidence."
      }
    ],
    source_guidelines: [
      "guidelines/runtime/genai-reasoning-hierarchy.md",
      "guidelines/reference/instruction-language.md",
      "guidelines/reference/component-selection.md"
    ]
  };
}

function buildArchitecture(runId, brief) {
  return {
    brief_id: runId,
    architecture_summary: "Decision-first operational workspace scaffold.",
    primary_decision_supported: brief.primary_decision_or_job,
    disclosure_model: "Context -> Signal -> Evidence -> Recommendation -> Action",
    information_hierarchy: [
      {
        rank: 1,
        section: "Operational context",
        purpose: "Help the user understand what scope and object the screen covers."
      },
      {
        rank: 2,
        section: "Priority signals",
        purpose: "Surface what may need attention first."
      },
      {
        rank: 3,
        section: "Evidence and limits",
        purpose: "Keep facts, sources, uncertainty and proof gaps visible."
      },
      {
        rank: 4,
        section: "Next actions",
        purpose: "Support human-controlled action selection."
      }
    ],
    evidence_placement: [
      "Evidence should remain visible near any interpretation or recommendation.",
      "Unknown or missing data should be shown as a limitation, not hidden."
    ],
    known_risks: [
      "The CLI scaffold does not replace human or LLM design reasoning.",
      "No telemetry or source-system facts are generated."
    ],
    source_guidelines: [
      "guidelines/runtime/genai-reasoning-hierarchy.md",
      "guidelines/principles/decision-first-proof-second.md",
      "guidelines/principles/facts-before-interpretation.md"
    ]
  };
}

function buildComponentPlan(runId) {
  return {
    brief_id: runId,
    architecture_id: `${runId}-architecture`,
    inspection_summary: "CLI scaffold assumes DS exports must be inspected before real screen generation. The placeholder uses semantic HTML only and preserves the package stylesheet import.",
    package_components: [],
    package_primitives: [],
    local_composition: [
      "GeneratedScreen placeholder shell"
    ],
    rejected_components: [],
    forbidden_imports_checked: true,
    package_visual_foundation_preserved: true,
    source_guidelines: [
      "guidelines/reference/component-selection.md",
      "guidelines/reference/design-system-vocabulary.md",
      "guidelines/reference/component-usage-cards.md"
    ]
  };
}

function buildProposal(runId, brief, architecture, componentPlan) {
  return {
    brief_id: runId,
    proposal_id: `${runId}-proposal`,
    proposal_summary: "Local deterministic scaffold for an agentic screen exploration run.",
    primary_decision_supported: brief.primary_decision_or_job,
    information_hierarchy: architecture.information_hierarchy,
    component_plan: {
      package_components: componentPlan.package_components,
      package_primitives: componentPlan.package_primitives,
      local_composition: componentPlan.local_composition,
      forbidden_imports_checked: true
    },
    local_components: [],
    reasoning_trace: {
      must_applied: [
        {
          summary: "Principles and relevant knowledge must be applied.",
          source: "guidelines/runtime/genai-reasoning-hierarchy.md"
        },
        {
          summary: "Design-system material must be inspected before local composition.",
          source: "guidelines/runtime/genai-reasoning-hierarchy.md"
        }
      ],
      should_followed: [],
      should_deviations: [],
      may_explorations: [
        {
          summary: "Local composition may be used when exported components do not fit or when producing a placeholder scaffold.",
          source: "guidelines/runtime/genai-reasoning-hierarchy.md"
        }
      ]
    },
    known_limits: [
      "This CLI output is a deterministic scaffold.",
      "No operational evidence, telemetry or proven value is generated.",
      "A real screen proposal still requires design review or LLM-assisted exploration."
    ],
    source_guidelines: [
      "guidelines/runtime/genai-reasoning-hierarchy.md"
    ]
  };
}

function buildValidation(runId) {
  return {
    proposal_id: `${runId}-proposal`,
    status: "pass_with_warnings",
    summary: "Initial CLI scaffold created. Run npm run validate:run for deterministic validation.",
    checks: [
      {
        name: "prompt_intent_preserved",
        status: "warning",
        notes: "Prompt was converted into a deterministic scaffold, not a final design proposal."
      },
      {
        name: "evidence_not_invented",
        status: "pass",
        notes: "No source-system facts or telemetry are generated by the CLI scaffold."
      },
      {
        name: "package_stylesheet_imported",
        status: "pass",
        notes: "The generated TSX imports the package stylesheet."
      }
    ],
    blocking_issues: [],
    warnings: [
      {
        severity: "minor",
        description: "This is a scaffold and should not be treated as a final generated screen.",
        source: "scripts/ai-cli.mjs"
      }
    ],
    repair_recommendations: [
      "Use an LLM-assisted Screen Explorer or human designer to replace the placeholder with a real proposal."
    ],
    source_guidelines: [
      "guidelines/runtime/genai-reasoning-hierarchy.md",
      "guidelines/reference/ai-usage-and-validation.md"
    ]
  };
}

function buildCandidates(runId) {
  return {
    candidates: []
  };
}

function buildScreenTsx(brief) {
  return `import "design-system-ai-lab/styles.css";

export default function GeneratedScreen() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-6xl p-6">
        <p className="text-sm text-muted-foreground">Generated local CLI scaffold</p>
        <h1 className="mt-2 text-2xl font-semibold">${escapeText(brief.interpreted_intent)}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This placeholder preserves the package stylesheet import and avoids invented evidence.
        </p>
      </section>
    </main>
  );
}
`;
}

function escapeText(value) {
  return String(value).replace(/[<>]/g, "");
}

function buildProposalMd(brief, proposal) {
  return `# Screen proposal

## Summary

${proposal.proposal_summary}

## Primary decision supported

${brief.primary_decision_or_job}

## Information hierarchy

${proposal.information_hierarchy.map((item) => `${item.rank}. ${item.section} — ${item.purpose}`).join("\n")}

## Component plan summary

- Package components used: None in CLI scaffold.
- Package primitives used: None in CLI scaffold.
- Local composition: GeneratedScreen placeholder shell.
- Deviations: Placeholder scaffold only; not a final UI proposal.

## Trust and evidence notes

No operational facts, telemetry, proof or proven value were generated.

## Known limits

${proposal.known_limits.map((item) => `- ${item}`).join("\n")}
`;
}

function buildCandidatesMd() {
  return `# Design-system candidates

## Summary

No design-system candidate was generated by the deterministic CLI scaffold.

## Candidates

None.

## Recommended next steps

Run a real screen exploration before evaluating DS evolution signals.
`;
}

function buildFinalSummary(runId, prompt, validationStatus = "pass_with_warnings") {
  return `# Final run summary

## Prompt summary

${prompt}

## Generated artifacts

See \`outputs/${runId}/\`.

## Validation status

${validationStatus}

## Blocking issues

None recorded by the scaffold.

## Repairs made or recommended

Run \`pnpm ai:validate outputs/${runId}\` and repair any blocker.

## Local components

None documented by the scaffold.

## Design-system candidate signals

None.

## Known limitations

This is a deterministic local CLI scaffold. It does not replace Figma Make, Symphony, human review or LLM-assisted screen exploration.
`;
}

function createBrief(prompt) {
  const runId = createRunId(prompt);
  const runDir = path.join(OUTPUTS_DIR, runId);
  ensureDir(runDir);
  const brief = buildBrief(prompt, runId);
  writeJson(path.join(runDir, "01-screen-brief.json"), brief);
  console.log(`Created brief: outputs/${runId}/01-screen-brief.json`);
  console.log(`Run directory: outputs/${runId}`);
}

function createExplore(prompt) {
  const runId = createRunId(prompt);
  const runDir = path.join(OUTPUTS_DIR, runId);
  ensureDir(runDir);

  const brief = buildBrief(prompt, runId);
  const rules = buildRules(runId);
  const architecture = buildArchitecture(runId, brief);
  const componentPlan = buildComponentPlan(runId);
  const proposal = buildProposal(runId, brief, architecture, componentPlan);
  const validation = buildValidation(runId);
  const candidates = buildCandidates(runId);

  writeJson(path.join(runDir, "01-screen-brief.json"), brief);
  writeJson(path.join(runDir, "02-applicable-rules.json"), rules);
  writeJson(path.join(runDir, "03-screen-architecture.json"), architecture);
  writeJson(path.join(runDir, "04-component-plan.json"), componentPlan);
  writeJson(path.join(runDir, "05-screen-proposal.json"), proposal);
  writeText(path.join(runDir, "05-screen-proposal.md"), buildProposalMd(brief, proposal));
  writeText(path.join(runDir, "06-screen.tsx"), buildScreenTsx(brief));
  writeJson(path.join(runDir, "07-trust-validation-report.json"), validation);
  writeJson(path.join(runDir, "08-design-system-candidates.json"), candidates);
  writeText(path.join(runDir, "08-design-system-candidates.md"), buildCandidatesMd());
  writeText(path.join(runDir, "09-final-summary.md"), buildFinalSummary(runId, prompt));

  console.log(`Created exploration run: outputs/${runId}`);
  console.log(`Validate with: pnpm ai:validate outputs/${runId}`);
  console.log(`Report with: pnpm ai:report outputs/${runId}`);
}

function validateRun(runPath) {
  const result = spawnSync(process.execPath, ["scripts/validate-run.mjs", runPath], {
    cwd: repoRoot,
    stdio: "inherit",
  });
  process.exit(result.status ?? 1);
}

function reportRun(runPath) {
  const summaryPath = path.join(repoRoot, runPath, "09-final-summary.md");
  if (!fs.existsSync(summaryPath)) {
    console.error(`Missing report: ${path.relative(repoRoot, summaryPath)}`);
    process.exit(1);
  }
  console.log(fs.readFileSync(summaryPath, "utf8"));
}

if (!command) {
  usage();
  process.exit(2);
}

if (command === "brief") {
  const prompt = args.join(" ").trim();
  if (!prompt) {
    usage();
    process.exit(2);
  }
  createBrief(prompt);
} else if (command === "explore") {
  const prompt = args.join(" ").trim();
  if (!prompt) {
    usage();
    process.exit(2);
  }
  createExplore(prompt);
} else if (command === "validate") {
  const runPath = args[0];
  if (!runPath) {
    usage();
    process.exit(2);
  }
  validateRun(runPath);
} else if (command === "report") {
  const runPath = args[0];
  if (!runPath) {
    usage();
    process.exit(2);
  }
  reportRun(runPath);
} else {
  usage();
  process.exit(2);
}
