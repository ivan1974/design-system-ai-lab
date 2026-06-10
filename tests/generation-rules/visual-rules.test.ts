import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type VisualRulesContract = {
  sourceGuidelines: string[];
  coreDirection: string[];
  requiredRuntimeRules: string[];
  forbiddenVisualPatterns: string[];
  forbiddenLocalWrapperNames: string[];
  forbiddenGeneratedTextClaims: string[];
  forbiddenGeneratedCodePatterns: string[];
  colorRules: {
    primaryGreen: {
      allowedUses: string[];
      forbiddenUses: string[];
    };
    statusColor: {
      requiredCompanionSignals: string[];
      forbiddenUses: string[];
    };
  };
  trustVisibilityRules: string[];
  informationDensityRules: string[];
  filesToScanForGeneratedVisualDrift: string[];
  repairIfDetected: string[];
};

const contract = readJson<VisualRulesContract>("contracts/visual-rules.contract.json");

const requiredBlockers = [
  "glassmorphism",
  "gradient-heavy-layout",
  "shadow-heavy-card",
  "custom-local-brand-panel",
  "colored-cards-for-every-status",
  "green-used-as-decoration",
  "visual-emphasis-overstates-weak-evidence",
  "local-visual-system",
];

const scannedExtensions = new Set([".tsx", ".ts", ".md", ".mdx"]);

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

function generatedVisualDriftTerms() {
  return [
    ...contract.forbiddenLocalWrapperNames,
    ...contract.forbiddenGeneratedTextClaims,
    ...contract.forbiddenGeneratedCodePatterns,
  ];
}

describe("generation rules: visual rules contract", () => {
  it("links active visual source guidelines that exist", () => {
    for (const sourceGuideline of contract.sourceGuidelines) {
      expect(fs.existsSync(path.join(rootDir, sourceGuideline)), `${sourceGuideline} is missing`).toBe(true);
    }
  });

  it("locks the core visual direction", () => {
    expect(contract.coreDirection).toEqual(
      expect.arrayContaining(["white-first", "sober", "structured", "B2B", "operational", "trust-aware", "action-oriented"]),
    );
  });

  it("turns every Phase 6 visual blocker into a contract rule", () => {
    expect(contract.forbiddenVisualPatterns).toEqual(expect.arrayContaining(requiredBlockers));
  });

  it("keeps visual rules aligned with trust and evidence semantics", () => {
    expect(contract.colorRules.primaryGreen.forbiddenUses).toEqual(
      expect.arrayContaining(["decoration", "making-weak-evidence-look-stronger", "implying-certainty-with-partial-evidence"]),
    );
    expect(contract.trustVisibilityRules).toEqual(
      expect.arrayContaining(["source-strength-readable-when-relevant", "validation-status-readable-when-relevant"]),
    );
    expect(contract.repairIfDetected).toEqual(
      expect.arrayContaining(["visual-treatment-overstates-evidence-strength", "uncertainty-hidden-through-low-contrast-or-visual-treatment"]),
    );
  });

  it("keeps the runtime visual rules document aligned with the contract", () => {
    const runtimeRules = read("guidelines/runtime/visual-rules.md").toLowerCase();

    for (const direction of contract.coreDirection) {
      expect(runtimeRules).toContain(direction.toLowerCase());
    }

    for (const blocker of ["glassmorphism", "decorative gradients", "heavy shadows", "colored cards for every status", "custom visual system"]) {
      expect(runtimeRules).toContain(blocker);
    }
  });

  it("can detect generated visual drift from local wrappers, decoration and overstated evidence", () => {
    const badOutput = `
      function PremiumCard() { return <div className="backdrop-blur bg-gradient-to-br shadow-2xl">Validated</div>; }
      const note = "make weak evidence look validated";
    `.toLowerCase();

    for (const expectedDetection of ["PremiumCard", "backdrop-blur", "bg-gradient-to-", "shadow-2xl", "make weak evidence look validated"]) {
      expect(badOutput).toContain(expectedDetection.toLowerCase());
      expect(generatedVisualDriftTerms().map((term) => term.toLowerCase())).toContain(expectedDetection.toLowerCase());
    }
  });

  it("does not allow generated examples to contain visual drift patterns", () => {
    const files = contract.filesToScanForGeneratedVisualDrift.flatMap(listScannedFiles);
    const forbiddenTerms = generatedVisualDriftTerms().map((term) => term.toLowerCase());

    for (const file of files) {
      const content = read(file).toLowerCase();
      for (const forbiddenTerm of forbiddenTerms) {
        expect(content, `${file} contains visual drift term: ${forbiddenTerm}`).not.toContain(forbiddenTerm);
      }
    }
  });
});
