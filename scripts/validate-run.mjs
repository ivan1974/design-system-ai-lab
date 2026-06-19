#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const runDir = process.argv[2];

if (!runDir) {
  console.error("Usage: npm run validate:run -- outputs/<run-id>");
  process.exit(2);
}

const absoluteRunDir = path.resolve(repoRoot, runDir);
const issues = [];

function addIssue(severity, check, message, file = null) {
  issues.push({ severity, check, message, file });
}

function exists(relativePath) {
  return fs.existsSync(path.join(absoluteRunDir, relativePath));
}

function read(relativePath) {
  const filePath = path.join(absoluteRunDir, relativePath);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

function readJson(relativePath) {
  const content = read(relativePath);
  if (!content) return null;
  try {
    return JSON.parse(content);
  } catch (error) {
    addIssue("blocker", "Reasoning Contract Validator", `Invalid JSON: ${error.message}`, relativePath);
    return null;
  }
}

function readRepoFile(relativePath) {
  const filePath = path.join(repoRoot, relativePath);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

function extractNamedExports(source) {
  const exports = new Set();
  const exportBlockPattern = /export\s+(?:type\s+)?\{([\s\S]*?)\}\s+from/g;
  let match;
  while ((match = exportBlockPattern.exec(source))) {
    const names = match[1]
      .split(",")
      .map((name) => name.trim())
      .filter(Boolean)
      .map((name) => name.split(/\s+as\s+/i)[1] || name.split(/\s+as\s+/i)[0]);
    names.forEach((name) => exports.add(name.trim()));
  }
  return exports;
}

function getAllowedExports() {
  const primitives = extractNamedExports(readRepoFile("src/design-system/primitives/index.ts"));
  const components = extractNamedExports(readRepoFile("src/design-system/components/index.ts"));
  return {
    root: new Set([...primitives, ...components]),
    primitives,
    components,
  };
}

function parseImports(tsx) {
  const imports = [];
  const importPattern = /import\s+([\s\S]*?)\s+from\s+["']([^"']+)["'];?/g;
  let match;
  while ((match = importPattern.exec(tsx))) {
    imports.push({ clause: match[1].trim(), source: match[2].trim() });
  }
  return imports;
}

function namedImports(clause) {
  const match = clause.match(/\{([\s\S]*?)\}/);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => name.split(/\s+as\s+/i)[0].trim());
}

function validateReasoningContracts() {
  const required = [
    "01-screen-brief.json",
    "02-applicable-rules.json",
    "03-screen-architecture.json",
    "04-component-plan.json",
    "05-screen-proposal.json",
    "07-trust-validation-report.json",
  ];

  for (const file of required) {
    if (!exists(file)) {
      addIssue("blocker", "Reasoning Contract Validator", `Missing required artifact: ${file}`, file);
    } else {
      readJson(file);
    }
  }

  const screenBrief = readJson("01-screen-brief.json");
  const rules = readJson("02-applicable-rules.json");
  const architecture = readJson("03-screen-architecture.json");
  const componentPlan = readJson("04-component-plan.json");
  const proposal = readJson("05-screen-proposal.json");
  const validation = readJson("07-trust-validation-report.json");

  const requiredFields = [
    [screenBrief, "01-screen-brief.json", ["prompt", "interpreted_intent", "user_role", "primary_task", "primary_decision_or_job", "domain_object", "evidence_needs", "trust_and_validation_needs"]],
    [rules, "02-applicable-rules.json", ["must", "should", "may", "hard_blockers"]],
    [architecture, "03-screen-architecture.json", ["primary_decision_supported", "information_hierarchy"]],
    [componentPlan, "04-component-plan.json", ["package_components", "package_primitives", "local_composition", "forbidden_imports_checked"]],
    [proposal, "05-screen-proposal.json", ["proposal_summary", "primary_decision_supported", "component_plan", "reasoning_trace", "known_limits"]],
    [validation, "07-trust-validation-report.json", ["status", "summary", "checks", "blocking_issues", "repair_recommendations"]],
  ];

  for (const [json, file, fields] of requiredFields) {
    if (!json) continue;
    for (const field of fields) {
      if (!(field in json)) {
        addIssue("blocker", "Reasoning Contract Validator", `Missing required field: ${field}`, file);
      }
    }
  }
}

function validateImportsAndStylesheet() {
  if (!exists("06-screen.tsx")) return;

  const tsx = read("06-screen.tsx");
  const allowed = getAllowedExports();

  if (!tsx.includes('import "design-system-ai-lab/styles.css";') && !tsx.includes("import 'design-system-ai-lab/styles.css';")) {
    addIssue("blocker", "Stylesheet Validator", "Missing required package stylesheet import.", "06-screen.tsx");
  }

  for (const imported of parseImports(tsx)) {
    const names = namedImports(imported.clause);
    if (imported.source === "design-system-ai-lab") {
      for (const name of names) {
        if (!allowed.root.has(name)) {
          addIssue("blocker", "Import Validator", `Named import is not exported by package root: ${name}`, "06-screen.tsx");
        }
      }
    }
    if (imported.source === "design-system-ai-lab/design-system/primitives") {
      for (const name of names) {
        if (!allowed.primitives.has(name)) {
          addIssue("blocker", "Import Validator", `Named import is not exported by primitives: ${name}`, "06-screen.tsx");
        }
      }
    }
    if (imported.source === "design-system-ai-lab/design-system/components") {
      for (const name of names) {
        if (!allowed.components.has(name)) {
          addIssue("blocker", "Import Validator", `Named import is not exported by components: ${name}`, "06-screen.tsx");
        }
      }
    }
    if (imported.source.startsWith("@radix-ui/") || imported.source.includes("/internal/")) {
      addIssue("blocker", "Import Validator", `Forbidden implementation import: ${imported.source}`, "06-screen.tsx");
    }
  }
}

function validateFictionalEvidence() {
  const searchableFiles = [
    "05-screen-proposal.json",
    "05-screen-proposal.md",
    "06-screen.tsx",
    "09-final-summary.md",
  ].filter(exists);

  const riskyPatterns = [
    /live monitored/i,
    /real[- ]time telemetry/i,
    /proven ROI/i,
    /validated recommendation/i,
    /proven value/i,
    /verified by AI/i,
  ];

  const sourceMarkers = [
    /source system/i,
    /source:/i,
    /data source/i,
    /evidence/i,
    /mock data/i,
    /proof gap/i,
  ];

  for (const file of searchableFiles) {
    const content = read(file);
    for (const pattern of riskyPatterns) {
      if (pattern.test(content) && !sourceMarkers.some((marker) => marker.test(content))) {
        addIssue("blocker", "Fictional Evidence Validator", `Risky evidence claim without visible source marker: ${pattern}`, file);
      }
    }
  }
}

function validateLocalComponents() {
  const proposal = readJson("05-screen-proposal.json");
  const localComponents = Array.isArray(proposal?.local_components) ? proposal.local_components : [];
  const tsx = exists("06-screen.tsx") ? read("06-screen.tsx") : "";
  const imports = parseImports(tsx);

  for (const localComponent of localComponents) {
    const name = localComponent?.name;
    if (!name) {
      addIssue("blocker", "Local Component Validator", "Local component is missing a name.", "05-screen-proposal.json");
      continue;
    }

    if (localComponent.package_import_status !== "local_only_not_package_export") {
      addIssue("blocker", "Local Component Validator", `Local component must be marked local_only_not_package_export: ${name}`, "05-screen-proposal.json");
    }

    if (!localComponent.reason_existing_ds_material_was_insufficient) {
      addIssue("major", "Local Component Validator", `Missing justification for local component: ${name}`, "05-screen-proposal.json");
    }

    const importedFromPackage = imports.some((imported) => imported.source.startsWith("design-system-ai-lab") && namedImports(imported.clause).includes(name));
    if (importedFromPackage) {
      addIssue("blocker", "Local Component Validator", `Local component is imported from package: ${name}`, "06-screen.tsx");
    }

    if (tsx && !new RegExp(`(function|const)\\s+${name}\\b`).test(tsx)) {
      addIssue("major", "Local Component Validator", `Local component is documented but not defined locally: ${name}`, "06-screen.tsx");
    }
  }
}

function validateAccessibility() {
  if (!exists("06-screen.tsx")) return;
  const tsx = read("06-screen.tsx");

  const inputCount = (tsx.match(/<input\b|<Input\b/g) || []).length;
  const labelCount = (tsx.match(/<label\b|aria-label=|aria-labelledby=/g) || []).length;
  if (inputCount > labelCount) {
    addIssue("major", "Accessibility Validator", "Some inputs may be missing explicit labels or aria labels.", "06-screen.tsx");
  }

  const clickableDivs = tsx.match(/<div[^>]*(onClick|role=["']button["'])/g) || [];
  if (clickableDivs.length > 0) {
    addIssue("major", "Accessibility Validator", "Clickable divs detected. Prefer semantic buttons or links.", "06-screen.tsx");
  }

  if (/color[- ]only|green means|red means/i.test(tsx)) {
    addIssue("blocker", "Accessibility Validator", "Color-only meaning appears to be used.", "06-screen.tsx");
  }

  if (!/<main\b/.test(tsx)) {
    addIssue("minor", "Accessibility Validator", "Screen should include a semantic main landmark.", "06-screen.tsx");
  }

  if (/contrast/i.test(tsx) && !/not color-only|text label|aria-label/i.test(tsx)) {
    addIssue("minor", "Accessibility Validator", "Contrast is mentioned without an explicit non-color cue.", "06-screen.tsx");
  }
}

validateReasoningContracts();
validateImportsAndStylesheet();
validateFictionalEvidence();
validateLocalComponents();
validateAccessibility();

const blockers = issues.filter((issue) => issue.severity === "blocker");
const majors = issues.filter((issue) => issue.severity === "major");
const minors = issues.filter((issue) => issue.severity === "minor");

const report = {
  run_dir: runDir,
  status: blockers.length ? "fail" : majors.length ? "pass_with_warnings" : "pass",
  counts: {
    blockers: blockers.length,
    major_warnings: majors.length,
    minor_warnings: minors.length,
  },
  issues,
};

console.log(JSON.stringify(report, null, 2));

if (blockers.length > 0) {
  process.exit(1);
}
