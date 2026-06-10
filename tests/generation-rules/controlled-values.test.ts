import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();

const readText = (relativePath: string) =>
  fs.readFileSync(path.join(rootDir, relativePath), "utf-8");

const readJson = <T>(relativePath: string): T =>
  JSON.parse(readText(relativePath)) as T;

const canonical = {
  sourceStrength: ["unknown", "partial", "single-source", "multi-source", "validated"],
  validationStatus: ["not-reviewed", "internal-review-needed", "internally-validated", "customer-ready", "blocked"],
  customerReadiness: ["internal", "needs-review", "customer-ready"],
  humanValidation: ["not-required", "recommended", "required"],
  proofReadiness: ["not-available", "expected-only", "internal-proof", "customer-ready-proof"],
  evidenceSourceType: ["source-system", "expert-review", "customer-input", "ai-generated", "unknown"],
  actionPriority: ["low", "medium", "high", "critical"],
  actionStatus: ["todo", "in-progress", "blocked", "done"],
  riskLevel: ["critical", "warning", "info"],
};

const deprecated = {
  customerReadiness: ["needs_review", "customer_ready"],
  actionStatus: ["in_progress"],
  sourceStrength: ["strong", "needs_review", "internal", "customer_ready"],
};

type EvidenceAndTrustContract = {
  allowedSourceStrengthValues: string[];
  allowedValidationStatusValues: string[];
  allowedCustomerReadinessValues: string[];
  allowedHumanValidationValues: string[];
  allowedProofReadinessValues: string[];
  allowedEvidenceSourceTypeValues: string[];
  allowedActionPriorityValues: string[];
  allowedActionStatusValues: string[];
  allowedRiskLevelValues: string[];
  deprecatedSourceStrengthAliases: string[];
  deprecatedCustomerReadinessAliases: string[];
  deprecatedActionStatusAliases: string[];
};

type PropsContract = {
  components: Record<string, Record<string, string[]>>;
  globalPropRule: {
    doNotInventValuesFor: string[];
  };
};

describe("generation rules: controlled values", () => {
  const evidenceContract = readJson<EvidenceAndTrustContract>(
    "contracts/evidence-and-trust.contract.json",
  );
  const propsContract = readJson<PropsContract>("contracts/props.contract.json");

  it("aligns evidence and trust contract with canonical values", () => {
    expect(evidenceContract.allowedSourceStrengthValues).toEqual(canonical.sourceStrength);
    expect(evidenceContract.allowedValidationStatusValues).toEqual(canonical.validationStatus);
    expect(evidenceContract.allowedCustomerReadinessValues).toEqual(canonical.customerReadiness);
    expect(evidenceContract.allowedHumanValidationValues).toEqual(canonical.humanValidation);
    expect(evidenceContract.allowedProofReadinessValues).toEqual(canonical.proofReadiness);
    expect(evidenceContract.allowedEvidenceSourceTypeValues).toEqual(canonical.evidenceSourceType);
    expect(evidenceContract.allowedActionPriorityValues).toEqual(canonical.actionPriority);
    expect(evidenceContract.allowedActionStatusValues).toEqual(canonical.actionStatus);
    expect(evidenceContract.allowedRiskLevelValues).toEqual(canonical.riskLevel);
  });

  it("keeps deprecated aliases explicit and separated", () => {
    expect(evidenceContract.deprecatedSourceStrengthAliases).toEqual(deprecated.sourceStrength);
    expect(evidenceContract.deprecatedCustomerReadinessAliases).toEqual(deprecated.customerReadiness);
    expect(evidenceContract.deprecatedActionStatusAliases).toEqual(deprecated.actionStatus);
  });

  it("documents GenAI-sensitive props in the props contract", () => {
    expect(propsContract.components.ActionRow.status).toEqual([
      ...canonical.actionStatus,
      ...deprecated.actionStatus,
    ]);
    expect(propsContract.components.RecommendationReviewPanel.humanValidation).toEqual(
      canonical.humanValidation,
    );
    expect(propsContract.components.RecommendationCard.sourceStrength).toEqual(
      canonical.sourceStrength,
    );
    expect(propsContract.components.RecommendationCard.proofReadiness).toEqual(
      canonical.proofReadiness,
    );
    expect(propsContract.components.ValueProofCard.proofReadiness).toEqual(
      canonical.proofReadiness,
    );
    expect(propsContract.components.ServiceRiskSummary.riskLevel).toEqual(canonical.riskLevel);
  });

  it("blocks invented values for trust, proof, action and density fields", () => {
    expect(propsContract.globalPropRule.doNotInventValuesFor).toEqual(
      expect.arrayContaining([
        "sourceStrength",
        "proofReadiness",
        "validationStatus",
        "customerReadiness",
        "humanValidation",
        "priority",
        "status",
        "severity",
        "tone",
        "mode",
        "density",
        "riskLevel",
      ]),
    );
  });

  it("domain models document canonical controlled values", () => {
    const domainModelFiles = [
      "guidelines/domain-models/action.md",
      "guidelines/domain-models/asset.md",
      "guidelines/domain-models/component.md",
      "guidelines/domain-models/customer.md",
      "guidelines/domain-models/evidence.md",
      "guidelines/domain-models/proof.md",
      "guidelines/domain-models/recommendation.md",
      "guidelines/domain-models/site.md",
      "guidelines/domain-models/source.md",
    ];

    const combined = domainModelFiles.map(readText).join("\n");

    for (const value of [
      ...canonical.sourceStrength,
      ...canonical.validationStatus,
      ...canonical.proofReadiness,
      ...canonical.actionPriority,
      ...canonical.actionStatus,
      ...canonical.riskLevel,
    ]) {
      expect(combined).toContain(value);
    }
  });
});
