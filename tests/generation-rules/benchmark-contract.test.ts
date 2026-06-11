import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type BenchmarkCaseType = "first-generation" | "iteration" | "adversarial";

type BenchmarkContract = {
  protocol: {
    caseDirectory: string;
    outputDirectory: string;
    evaluationDirectory: string;
    scoringTemplate: string;
    installedBaseScoringTemplate: string;
    installedBaseGenerationTemplate: string;
    testCommand: string;
    minimumAcceptedScore: number;
    excellentScore: number;
  };
  requiredCaseTypes: BenchmarkCaseType[];
  requiredDriftCoverage: string[];
  nonNegotiables: string[];
  cases: Array<{
    id: string;
    type: BenchmarkCaseType;
    path: string;
    promptKind: string;
    mustPass: string[];
    driftRisks: string[];
    iterationNumber: number;
  }>;
};

const benchmark = readJson<BenchmarkContract>("contracts/benchmark.contract.json");
const caseIds = benchmark.cases.map((benchmarkCase) => benchmarkCase.id);

const expectedCaseIds = [
  "01-first-generation-customer-monitoring",
  "02-first-generation-renewal-risk",
  "03-first-generation-asset-recommendation",
  "04-iteration-add-filter-without-breaking-layout",
  "05-iteration-add-detail-panel-without-card-stack",
  "06-iteration-change-priority-without-inventing-evidence",
  "07-adversarial-local-components",
  "08-adversarial-invented-evidence",
  "09-adversarial-visual-overbranding",
  "10-adversarial-context-drift-after-3-adjustments",
  "11-adversarial-information-overload",
  "12-installed-base-intelligence-closed-spec",
  "13-adversarial-installed-base-local-components",
  "14-adversarial-installed-base-generic-dashboard",
  "15-adversarial-installed-base-third-party-overclaim",
  "16-adversarial-installed-base-health-intelligence-mixing",
  "17-adversarial-installed-base-extra-actions-filters-tabs",
];

describe("generation rules: benchmark contract", () => {
  it("defines the exact v0.7.0 benchmark cases", () => {
    expect(caseIds).toEqual(expectedCaseIds);
  });

  it("links every benchmark case to an existing markdown file", () => {
    for (const benchmarkCase of benchmark.cases) {
      expect(fs.existsSync(path.join(rootDir, benchmarkCase.path)), `${benchmarkCase.path} is missing`).toBe(true);
      expect(benchmarkCase.path).toBe(`${benchmark.protocol.caseDirectory}/${benchmarkCase.id}.md`);
    }
  });

  it("covers first generation, iteration and adversarial benchmark types", () => {
    const actualTypes = new Set(benchmark.cases.map((benchmarkCase) => benchmarkCase.type));

    for (const requiredType of benchmark.requiredCaseTypes) {
      expect(actualTypes.has(requiredType), `${requiredType} is missing`).toBe(true);
    }
  });

  it("covers the required drift risks", () => {
    const coveredRisks = new Set(benchmark.cases.flatMap((benchmarkCase) => benchmarkCase.driftRisks));

    for (const requiredRisk of benchmark.requiredDriftCoverage) {
      expect(coveredRisks.has(requiredRisk), `${requiredRisk} is missing from drift coverage`).toBe(true);
    }
  });

  it("marks iteration cases with an iteration number", () => {
    for (const benchmarkCase of benchmark.cases) {
      if (benchmarkCase.type === "iteration") {
        expect(benchmarkCase.iterationNumber, `${benchmarkCase.id} must have an iteration number`).toBeGreaterThan(0);
      }
    }
  });

  it("includes fixed prompt content and tested rules in every case", () => {
    for (const benchmarkCase of benchmark.cases) {
      const content = read(benchmarkCase.path);
      const normalizedContent = content.toLowerCase();

      expect(content).toContain("## Intent");
      expect(content).toContain("## Rules tested");
      expect(normalizedContent).toContain(benchmarkCase.type);
      expect(normalizedContent).toMatch(/design-system-ai-lab|package components|package controls|package imports/);
    }
  });

  it("keeps non-negotiables represented across the case set", () => {
    const allCaseText = benchmark.cases.map((benchmarkCase) => read(benchmarkCase.path).toLowerCase()).join("\n");

    const expectedPhrases = [
      "use package components",
      "no internal imports",
      "no local components",
      "do not invent evidence",
      "expected outcome",
      "owner, due date and priority",
      "visual",
      "information overload",
      "third-party asset",
      "health and intelligence",
      "seven columns",
    ];

    for (const phrase of expectedPhrases) {
      expect(allCaseText).toContain(phrase);
    }
  });
});
