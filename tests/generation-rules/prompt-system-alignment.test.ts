import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();

const promptBenchmarkPairs = [
  {
    prompt: "guidelines/prompts/customer-monitoring.md",
    benchmark: "benchmarks/figma-make/cases/01-first-generation-customer-monitoring.md",
  },
  {
    prompt: "guidelines/prompts/renewal-risk-review.md",
    benchmark: "benchmarks/figma-make/cases/02-first-generation-renewal-risk.md",
  },
  {
    prompt: "guidelines/prompts/asset-recommendation-review.md",
    benchmark: "benchmarks/figma-make/cases/03-first-generation-asset-recommendation.md",
  },
];

const reusablePrompts = promptBenchmarkPairs.map(({ prompt }) => prompt);

const removedPrompts = [
  "guidelines/prompts/qbr-readiness.md",
  "guidelines/prompts/installed-base-explorer.md",
  "guidelines/prompts/overview.md",
  "guidelines/prompts/template.md",
  "guidelines/prompts/workspace-v2.md",
];

const reusablePromptRequiredSnippets = [
  "This is reusable generation guidance, not a fixed benchmark case.",
  "Use the npm package design-system-ai-lab.",
  "Import components from design-system-ai-lab.",
  "Import styles from design-system-ai-lab/styles.css.",
  "Read only the v0.6.0 Make Kit runtime path unless a specific component detail is needed:",
  "guidelines/runtime/generation-contract.md",
  "guidelines/runtime/generation-flow.md",
  "guidelines/runtime/component-selection.md",
  "guidelines/runtime/trust-action-rules.md",
  "guidelines/runtime/visual-rules.md",
  "guidelines/runtime/progressive-decision-disclosure.md",
  "Do not create local components or local wrappers.",
  "Do not import from dist/ or src/.",
  "Every action must include owner, due date and priority.",
  "guidelines/evaluation/repair/repair-router.md",
];

const forbiddenPromptSnippets = [
  "v0.5.1",
  "make-minimal-contract.md",
  "prompts/workspace-v2.md",
  "contracts/components.contract.json",
  "repair-prompts/",
  "PageHeader",
  "sourceStrength=\"strong\"",
  "readiness=\"needs_review\"",
  "readiness=\"customer_ready\"",
  "status=\"in_progress\"",
  "Create a dashboard",
];

function read(relativePath: string) {
  return fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
}

describe("generation rules: prompt system alignment", () => {
  it.each(reusablePrompts)("'%s' exists", (prompt) => {
    expect(fs.existsSync(path.join(rootDir, prompt))).toBe(true);
  });

  it.each(removedPrompts)("'%s' stays removed from the active prompt set", (prompt) => {
    expect(fs.existsSync(path.join(rootDir, prompt))).toBe(false);
  });

  it.each(promptBenchmarkPairs)("$benchmark exists", ({ benchmark }) => {
    expect(fs.existsSync(path.join(rootDir, benchmark))).toBe(true);
  });

  it.each(reusablePrompts)("'%s' declares reusable v0.6.0 prompt role", (prompt) => {
    const content = read(prompt);

    for (const snippet of reusablePromptRequiredSnippets) {
      expect(content).toContain(snippet);
    }
  });

  it.each(promptBenchmarkPairs)("$benchmark points back to its reusable prompt", ({ prompt, benchmark }) => {
    expect(read(benchmark)).toContain(prompt);
  });

  it.each(promptBenchmarkPairs)("$prompt points to its fixed benchmark case", ({ prompt, benchmark }) => {
    expect(read(prompt)).toContain(benchmark);
  });

  it.each(reusablePrompts)("'%s' avoids obsolete prompt vocabulary", (prompt) => {
    const content = read(prompt);

    for (const snippet of forbiddenPromptSnippets) {
      expect(content).not.toContain(snippet);
    }
  });
});
