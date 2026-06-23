#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { runDeterministicPipeline } from "./agent-runners/deterministic.mjs";
import { runLlmPipeline } from "./agent-runners/llm.mjs";

const root = process.cwd();
const rawArgs = process.argv.slice(2);
const runnerIndex = rawArgs.indexOf("--runner");
const stepsIndex = rawArgs.indexOf("--llm-steps");
const runner = runnerIndex >= 0 ? rawArgs[runnerIndex + 1] : "deterministic";
const llmSteps = stepsIndex >= 0 ? rawArgs[stepsIndex + 1]?.split(",").map((step) => step.trim()) ?? [] : [];
const prompt = rawArgs
  .filter((_, index) => index !== runnerIndex && index !== runnerIndex + 1 && index !== stepsIndex && index !== stepsIndex + 1)
  .join(" ")
  .trim();

if (!prompt || !["deterministic", "llm", "symphony"].includes(runner)) {
  console.log('Usage: pnpm ai:run "Create a screen for a CSM to prioritize risky assets" --runner deterministic');
  console.log("Runners: deterministic, llm, symphony");
  process.exit(2);
}

if (runner === "symphony") {
  console.error("Runner 'symphony' is registered but not enabled yet.");
  console.error("Use --runner deterministic or --runner llm for now.");
  process.exit(2);
}

const runId = `${new Date().toISOString().replace(/[:.]/g, "-")}-${slug(prompt)}`;
const runDir = path.join(root, "outputs", runId);
fs.mkdirSync(runDir, { recursive: true });

const result = runner === "llm"
  ? runLlmPipeline({ prompt, llmSteps })
  : runDeterministicPipeline({ prompt, runner });

writeJson("00-agent-run.json", {
  run_id: runId,
  prompt,
  runner,
  mode: runner === "llm" ? "local_agentic_llm_prepared" : "local_agentic_deterministic",
  status: "generated",
  runner_config: result.runner_config || null,
  steps: result.trace,
});

for (const [file, value] of Object.entries(result.artifacts)) {
  if (file.endsWith(".json")) writeJson(file, value);
  else writeText(file, value);
}

writeText("09-final-summary.md", summaryMd(runId, prompt, result.trace, runner));

console.log(`Created agentic run: outputs/${runId}`);
const validation = spawnSync(process.execPath, ["scripts/validate-run.mjs", `outputs/${runId}`], { cwd: root, stdio: "inherit" });
console.log(`Report with: pnpm ai:report outputs/${runId}`);
console.log(`Preview with: pnpm ai:playground:add outputs/${runId} --slot proposal-a && pnpm playground`);
process.exit(validation.status ?? 0);

function writeJson(file, value) {
  fs.writeFileSync(path.join(runDir, file), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function writeText(file, value) {
  fs.writeFileSync(path.join(runDir, file), value, "utf8");
}

function summaryMd(runId, prompt, trace, runner) {
  return `# Final run summary\n\n## Prompt summary\n\n${prompt}\n\n## Runner\n\n${runner}\n\n## Generated artifacts\n\nSee \`outputs/${runId}/\`.\n\n## Agent steps\n\n${trace.map((step) => `- ${step.agent}: ${step.status} (${step.runner})`).join("\n")}\n\n## Known limitations\n\nLocal runner execution. LLM and Symphony modes must preserve the same contracts and validators.\n`;
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 48) || "run";
}
