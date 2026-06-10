import { describe, it } from "vitest";
import {
  expectNoForbiddenPattern,
  readGenerationRuleTargets,
} from "./test-targets";

const targets = readGenerationRuleTargets();

const riskyProofLanguage = /\b(proven|proved|validated|customer-ready proof|live monitored|fully monitored|complete asset knowledge)\b/i;
const weakSourceValues = /sourceStrength=\{?["'](?:partial|unknown)["']\}?/;
const nonCustomerReadyProof = /proofReadiness=\{?["'](?:not-available|expected-only|internal-proof)["']\}?/;

describe("generation rules: evidence and trust", () => {
  it.each(targets)("$path does not claim proof when proof readiness is not customer-ready", (target) => {
    if (nonCustomerReadyProof.test(target.content)) {
      expectNoForbiddenPattern(
        target,
        /\b(proven|proved|customer-ready proof)\b/i,
        "Do not use proven/customer-ready proof language when proofReadiness is not customer-ready-proof.",
      );
    }
  });

  it.each(targets)("$path does not overclaim live monitoring on weak source strength", (target) => {
    if (weakSourceValues.test(target.content)) {
      expectNoForbiddenPattern(
        target,
        /\b(live monitored|fully monitored|complete asset knowledge)\b/i,
        "Do not overclaim live monitoring or complete asset knowledge when sourceStrength is partial or unknown.",
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
        riskyProofLanguage,
        "Risky proof or source confidence language requires explicit customer-ready proof or validation context.",
      );
    }
  });
});
