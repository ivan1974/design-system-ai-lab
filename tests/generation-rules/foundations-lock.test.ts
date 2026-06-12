import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type TokensContract = {
  canonicalTokenFile: string;
  publicStyleEntry: string;
  namespace: string;
  doNotCreate: string[];
  requiredTokens: string[];
  shadcnCompatibilityAliases: string[];
  componentCoverageRequirement: string;
};

type TargetSurfaceContract = {
  canonicalTokenFile: string;
  doNotCreate: string[];
};

type RegenerationPlan = {
  orderedLayers: Array<{ id: string; sourceFiles?: string[]; exitCriteria: string[] }>;
};

const tokensContract = readJson<TokensContract>("contracts/tokens.contract.json");
const targetSurface = readJson<TargetSurfaceContract>("contracts/v0.8-target-surface.contract.json");
const regenerationPlan = readJson<RegenerationPlan>("contracts/v0.8-regeneration-plan.contract.json");
const tokenSource = read(tokensContract.canonicalTokenFile);
const styleEntry = read(tokensContract.publicStyleEntry);
const foundationsLayer = regenerationPlan.orderedLayers.find((layer) => layer.id === "foundations");

describe("generation rules: v0.8 foundations lock", () => {
  it("keeps one canonical token source", () => {
    expect(tokensContract.canonicalTokenFile).toBe("src/design-system/foundations/tokens.css");
    expect(targetSurface.canonicalTokenFile).toBe(tokensContract.canonicalTokenFile);
    expect(fs.existsSync(path.join(rootDir, tokensContract.canonicalTokenFile))).toBe(true);
    expect(fs.existsSync(path.join(rootDir, "src/design-system/tokens.css"))).toBe(false);
  });

  it("keeps the do-not-create guard aligned", () => {
    expect(tokensContract.doNotCreate).toContain("src/design-system/tokens.css");
    expect(targetSurface.doNotCreate).toContain("src/design-system/tokens.css");
  });

  it("keeps required ec tokens available", () => {
    expect(tokensContract.namespace).toBe("--ec-*");
    for (const tokenName of tokensContract.requiredTokens) {
      expect(tokenSource, `${tokenName} is missing from canonical token source`).toContain(tokenName);
    }
  });

  it("keeps shadcn-compatible aliases exposed through the public style entry", () => {
    for (const alias of tokensContract.shadcnCompatibilityAliases) {
      expect(styleEntry, `${alias} is missing from public style entry`).toContain(alias);
    }
  });

  it("keeps foundations as the first regeneration layer", () => {
    expect(regenerationPlan.orderedLayers[0]?.id).toBe("foundations");
    expect(foundationsLayer?.sourceFiles).toContain(tokensContract.canonicalTokenFile);
    expect(foundationsLayer?.sourceFiles).toContain(tokensContract.publicStyleEntry);
    expect(foundationsLayer?.exitCriteria).toContain("canonical token file remains src/design-system/foundations/tokens.css");
  });

  it("keeps token coverage global, not Installed Base only", () => {
    expect(tokensContract.componentCoverageRequirement).toContain("All active DS components");
    expect(tokensContract.componentCoverageRequirement).toContain("not limited to Installed Base");
  });
});
