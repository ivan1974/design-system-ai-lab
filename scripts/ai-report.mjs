#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const runPath = process.argv[2];

if (!runPath) {
  console.error("Usage: pnpm ai:report outputs/<run-id>");
  process.exit(2);
}

const runDir = path.resolve(repoRoot, runPath);
const summaryPath = path.join(runDir, "09-final-summary.md");
const validationPath = path.join(runDir, "10-validation-result.json");

if (!fs.existsSync(summaryPath)) {
  console.error(`Missing report: ${path.relative(repoRoot, summaryPath)}`);
  process.exit(1);
}

const summary = fs.readFileSync(summaryPath, "utf8").trimEnd();
console.log(summary);

if (!fs.existsSync(validationPath)) {
  console.log("\n---\n");
  console.log("## Latest deterministic validation\n");
  console.log("No deterministic validation result found yet. Run:");
  console.log(`\n\`pnpm ai:validate ${runPath}\`\n`);
  process.exit(0);
}

let validation;
try {
  validation = JSON.parse(fs.readFileSync(validationPath, "utf8"));
} catch (error) {
  console.log("\n---\n");
  console.log("## Latest deterministic validation\n");
  console.log(`Could not read validation result: ${error.message}`);
  process.exit(1);
}

console.log("\n---\n");
console.log("## Latest deterministic validation\n");
console.log(`Status: ${validation.status}`);
console.log(`Validated at: ${validation.validated_at || "unknown"}`);
console.log(`Blockers: ${validation.counts?.blockers ?? "unknown"}`);
console.log(`Major warnings: ${validation.counts?.major_warnings ?? "unknown"}`);
console.log(`Minor warnings: ${validation.counts?.minor_warnings ?? "unknown"}`);

if (Array.isArray(validation.issues) && validation.issues.length > 0) {
  console.log("\nIssues:");
  for (const issue of validation.issues) {
    const file = issue.file ? ` (${issue.file})` : "";
    console.log(`- [${issue.severity}] ${issue.check}: ${issue.message}${file}`);
  }
}
