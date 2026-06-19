#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const args = process.argv.slice(2);
const runPath = args[0];
const slotIndex = args.indexOf("--slot");
const slot = slotIndex >= 0 ? args[slotIndex + 1] : "proposal-a";

if (!runPath || !["proposal-a", "proposal-b"].includes(slot)) {
  console.log("Usage: pnpm ai:playground:add outputs/<run-id> --slot proposal-a");
  process.exit(2);
}

const runDir = path.resolve(root, runPath);
const targetDir = path.resolve(root, "apps/playground/generated", slot);
const screenPath = path.join(runDir, "06-screen.tsx");

if (!fs.existsSync(runDir)) {
  console.error(`Missing run directory: ${runPath}`);
  process.exit(1);
}

if (!fs.existsSync(screenPath)) {
  console.error(`Missing screen file: ${path.relative(root, screenPath)}`);
  process.exit(1);
}

fs.mkdirSync(targetDir, { recursive: true });
fs.copyFileSync(screenPath, path.join(targetDir, "screen.tsx"));

const sourceMock = path.join(runDir, "mock-data.ts");
const targetMock = path.join(targetDir, "mock-data.ts");
fs.writeFileSync(targetMock, "export const mockData = {};\n", "utf8");
if (fs.existsSync(sourceMock)) {
  fs.copyFileSync(sourceMock, targetMock);
}

const brief = readJson(path.join(runDir, "01-screen-brief.json"));
const proposal = readJson(path.join(runDir, "05-screen-proposal.json"));
const componentPlan = readJson(path.join(runDir, "04-component-plan.json"));
const validation = readJson(path.join(runDir, "10-validation-result.json")) || readJson(path.join(runDir, "07-trust-validation-report.json"));

const metadata = {
  id: slot,
  sourceRun: runPath,
  title: `${slot === "proposal-a" ? "Proposal A" : "Proposal B"} — ${brief.domain_object || "Generated run"}`,
  description: proposal.proposal_summary || brief.interpreted_intent || "Generated run copied from outputs.",
  packageComponents: uniq([...(componentPlan.package_components || []), ...((proposal.component_plan || {}).package_components || [])]),
  packagePrimitives: uniq([...(componentPlan.package_primitives || []), ...((proposal.component_plan || {}).package_primitives || [])]),
  localComponents: uniq([...(componentPlan.local_composition || []), ...((proposal.component_plan || {}).local_composition || [])]),
  compliance: {
    status: validation.status || "unknown",
    blockers: validation.counts?.blockers ?? 0,
    warnings: (validation.counts?.major_warnings ?? 0) + (validation.counts?.minor_warnings ?? 0),
    notes: buildNotes(validation),
  },
};

fs.writeFileSync(path.join(targetDir, "metadata.ts"), `export const metadata = ${JSON.stringify(metadata, null, 2)};\n`, "utf8");

console.log(`Copied ${runPath} to apps/playground/generated/${slot}`);
console.log("Preview with: pnpm playground");

function readJson(filePath) {
  if (!fs.existsSync(filePath)) return {};
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function uniq(values) {
  return [...new Set(values.filter(Boolean))];
}

function buildNotes(validation) {
  const notes = [];
  if (validation.validated_at) notes.push(`Validated at ${validation.validated_at}.`);
  if (Array.isArray(validation.issues) && validation.issues.length) {
    notes.push(...validation.issues.slice(0, 3).map((issue) => `${issue.severity}: ${issue.check}`));
  }
  if (!notes.length) notes.push("No deterministic validation issue recorded.");
  return notes;
}
