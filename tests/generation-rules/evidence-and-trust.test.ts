import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  expectNoForbiddenPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");

const targets = readGenerationRuleTargets();

const weakSourceValues = /sourceStrength=\{?["'](?:partial|unknown)["']\}?/;
const nonCustomerReadyProof = /proofReadiness=\{?["'](?:not-available|expected-only|internal-proof)["']\}?/;

describe("generation rules: evidence and trust", () => {
  it.each(targets)("$path does not claim proof when proof readiness is not customer-ready", (target) => {
    if (nonCustomerReadyProof.test(target.content)) {
      expectNoForbiddenPattern(
        target,
        /\b(proven|proved)\b/i,
        "Do not use proven language when proofReadiness is not customer-ready-proof.",
      );
    }
  });

  it.each(targets)("$path does not overclaim monitoring on weak source strength", (target) => {
    if (weakSourceValues.test(target.content)) {
      expectNoForbiddenPattern(
        target,
        /\b(fully monitored|complete asset knowledge)\b/i,
        "Do not overclaim full monitoring or complete asset knowledge when sourceStrength is partial or unknown.",
      );
    }
  });

  it.each(targets)("$path does not use validated language without validation status", (target) => {
    if (!/validationStatus=/.test(target.content)) {
      expectNoForbiddenPattern(
        target,
        /\bvalidated\b/i,
        "Do not use validated language without a validationStatus prop.",
      );
    }
  });

  it.each(targets)("$path avoids risky proof language by default", (target) => {
    if (!/proofReadiness=\{?["']customer-ready-proof["']\}?/.test(target.content)) {
      expectNoForbiddenPattern(
        target,
        /\b(proven|proved|fully monitored|complete asset knowledge)\b/i,
        "Risky proof or source confidence language requires explicit customer-ready proof or validation context.",
      );
    }
  });

  it("hardens progressive disclosure around trust adjacency", () => {
    const runtime = read("guidelines/runtime/progressive-decision-disclosure.md").toLowerCase();

    expect(runtime).toContain("signal");
    expect(runtime).toContain("decision");
    expect(runtime).toContain("evidence");
    expect(runtime).toContain("source strength");
    expect(runtime).toContain("validation status");
    expect(runtime).toContain("proof readiness");
    expect(runtime).toContain("expected outcomes");
    expect(runtime).toContain("do not use ai confidence as source strength");
  });

  it("keeps screen contract generation aligned with progressive disclosure", () => {
    const screenContractRuntime = read("guidelines/runtime/screen-contract-generation.md").toLowerCase();

    expect(screenContractRuntime).toContain("signal");
    expect(screenContractRuntime).toContain("decision");
    expect(screenContractRuntime).toContain("evidence");
    expect(screenContractRuntime).toContain("do not break the screen contract");
    expect(screenContractRuntime).toContain("allowed panel");
  });
});
