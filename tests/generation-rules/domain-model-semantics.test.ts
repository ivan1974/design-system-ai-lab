import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type DomainModelContract = {
  sourceGuidelines: string[];
  concepts: Record<string, {
    definition: string;
    requiredFields?: string[];
    allowedValues?: string[];
    requiredValue?: Record<string, string>;
    notSameAs: string[];
    runtimeRule: string;
  }>;
  criticalDistinctions: Array<{
    id: string;
    left: string;
    right: string;
    rule: string;
    blockedConfusions: string[];
  }>;
  forbiddenPhrases: string[];
  requiredFilesToScan: string[];
};

const contract = readJson<DomainModelContract>("contracts/domain-model.contract.json");

const expectedDistinctions = [
  "action-vs-recommendation",
  "evidence-vs-proof",
  "source-strength-vs-ai-confidence",
  "expected-outcome-vs-proven-value",
  "asset-health-vs-asset-intelligence",
  "customer-readiness-vs-validation-status",
  "internal-proof-vs-customer-ready-proof",
];

const scannedExtensions = new Set([".md", ".mdx", ".tsx", ".ts"]);

function listScannedFiles(relativeDir: string): string[] {
  const absoluteDir = path.join(rootDir, relativeDir);
  if (!fs.existsSync(absoluteDir)) return [];

  return fs
    .readdirSync(absoluteDir, { withFileTypes: true })
    .flatMap((entry) => {
      const relativePath = path.join(relativeDir, entry.name);
      if (entry.isDirectory()) return listScannedFiles(relativePath);
      return entry.isFile() && scannedExtensions.has(path.extname(entry.name)) ? [relativePath] : [];
    });
}

describe("generation rules: domain model semantics", () => {
  it("defines every critical distinction required by v0.6.0", () => {
    const distinctionIds = contract.criticalDistinctions.map((distinction) => distinction.id).sort();
    expect(distinctionIds).toEqual([...expectedDistinctions].sort());
  });

  it("links source domain model guidelines that exist", () => {
    for (const sourceGuideline of contract.sourceGuidelines) {
      expect(fs.existsSync(path.join(rootDir, sourceGuideline)), `${sourceGuideline} is missing`).toBe(true);
    }
  });

  it("keeps concepts semantically separated", () => {
    for (const [conceptName, concept] of Object.entries(contract.concepts)) {
      expect(concept.definition, `${conceptName} needs a definition`).toBeTruthy();
      expect(concept.notSameAs.length, `${conceptName} needs notSameAs semantics`).toBeGreaterThan(0);
      expect(concept.runtimeRule, `${conceptName} needs a runtime rule`).toBeTruthy();
    }
  });

  it("documents critical distinctions in source domain models", () => {
    const sourceText = contract.sourceGuidelines.map(read).join("\n").toLowerCase();

    const requiredPhrases = [
      "an action is an owned next step",
      "a recommendation is not proven value",
      "is not proof by itself",
      "expected outcome is not proven value",
      "do not use ai confidence as source strength",
      "customer readiness is not validation status",
      "internal proof must be labeled as internal-proof",
    ];

    for (const phrase of requiredPhrases) {
      expect(sourceText).toContain(phrase);
    }
  });

  it("does not include forbidden semantic confusions in prompts, golden examples or benchmark cases", () => {
    const files = contract.requiredFilesToScan.flatMap(listScannedFiles);

    for (const file of files) {
      const content = read(file).toLowerCase();
      for (const forbiddenPhrase of contract.forbiddenPhrases) {
        expect(content, `${file} contains forbidden phrase: ${forbiddenPhrase}`).not.toContain(
          forbiddenPhrase.toLowerCase(),
        );
      }
    }
  });

  it("requires owned follow-through fields for Action", () => {
    expect(contract.concepts.Action.requiredFields).toEqual(expect.arrayContaining(["owner", "dueDate", "priority"]));
  });

  it("requires proof readiness for expected outcomes and proof concepts", () => {
    expect(contract.concepts.ExpectedOutcome.requiredValue).toEqual({ proofReadiness: "expected-only" });
    expect(contract.concepts.InternalProof.requiredValue).toEqual({ proofReadiness: "internal-proof" });
    expect(contract.concepts.CustomerReadyProof.requiredValue).toEqual({ proofReadiness: "customer-ready-proof" });
  });
});
