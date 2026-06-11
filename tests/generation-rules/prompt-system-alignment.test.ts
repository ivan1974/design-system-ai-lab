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

const reusablePrompts = [
  "guidelines/prompts/customer-monitoring.md",
  "guidelines/prompts/renewal-risk-review.md",
  "guidelines/prompts/asset-recommendation-review.md",
  "guidelines/prompts/qbr-readiness.md",
  "guidelines/prompts/installed-base-explorer.md",
];

const reusablePromptRequiredSnippets = [
  "This is reusable generation guidance, not a fixed benchmark case.",
  "Use the npm package design-system-ai-lab.",
  "Import components from design-system-ai-lab.",
  "Import styles from design-system-ai-lab/styles.css.",
  "Do not create a local package.",
  "Do not recreate design system components locally.",
  "Do not create local wrappers for package components.",
  "Do not import from dist/ or src/.",
  "Every action must include owner, due date and priority.",
];

const antiCardStackPhrases = [
  "card stack",
  "card stacks",
  "card saturation",
  "long stack of equal cards",
];

const forbiddenPromptSnippets = [
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

  it.each(promptBenchmarkPairs)("$benchmark exists", ({ benchmark }) => {
    expect(fs.existsSync(path.join(rootDir, benchmark))).toBe(true);
  });

  it.each(reusablePrompts)("'%s' declares reusable prompt role", (prompt) => {
    const content = read(prompt);

    for (const snippet of reusablePromptRequiredSnippets) {
      expect(content).toContain(snippet);
    }

    expect(content).toMatch(/Do not generate (a )?generic dashboard/);
    expect(antiCardStackPhrases.some((phrase) => content.includes(phrase))).toBe(true);
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
