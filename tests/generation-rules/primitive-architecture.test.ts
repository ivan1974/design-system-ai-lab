import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type PrimitiveArchitectureContract = {
  implementationModel: string;
  publicGenerationSurface: string;
  publicStylesheetSurface: string;
  internalPrimitiveLayer: string;
  allowedImplementationInfluences: string[];
  forbiddenGeneratedImports: string[];
  requiredGeneratedImports: string[];
  rules: string[];
  migrationCandidates: string[];
};

const contract = readJson<PrimitiveArchitectureContract>("contracts/primitive-architecture.contract.json");
const runtime = read("guidelines/runtime/primitive-implementation-strategy.md");
const decision = read("docs/audit/v0.7.0-shadcn-compatible-primitive-decision.md");
const source = read("guidelines/source/prototypes/figma-make-shadcn-baseline.md");
const internalBoundary = read("src/design-system/internal/primitives/README.md");

describe("generation rules: primitive architecture", () => {
  it("allows shadcn-compatible implementation without changing the public generation surface", () => {
    expect(contract.implementationModel).toBe("shadcn-compatible");
    expect(contract.publicGenerationSurface).toBe("design-system-ai-lab");
    expect(contract.publicStylesheetSurface).toBe("design-system-ai-lab/styles.css");
    expect(contract.allowedImplementationInfluences).toEqual(
      expect.arrayContaining(["shadcn-compatible patterns", "Radix UI primitives"]),
    );
  });

  it("declares an internal primitive layer that is not a generation target", () => {
    expect(contract.internalPrimitiveLayer).toBe("src/design-system/internal/primitives");
    expect(contract.rules).toEqual(expect.arrayContaining(["internal primitives are not generation targets"]));
    expect(internalBoundary).toContain("not public generation targets");
  });

  it("forbids generated imports from local UI, internal primitives and Radix", () => {
    expect(contract.forbiddenGeneratedImports).toEqual(
      expect.arrayContaining([
        "@radix-ui/*",
        "@/components/ui",
        "./components/ui",
        "components/ui",
        "src/design-system/internal",
        "src/design-system/internal/primitives",
        "src/design-system/primitives",
      ]),
    );
  });

  it("requires package-root component and stylesheet imports for generated examples", () => {
    expect(contract.requiredGeneratedImports).toEqual(
      expect.arrayContaining(["design-system-ai-lab", "design-system-ai-lab/styles.css"]),
    );
  });

  it("documents the same boundary in runtime and decision docs", () => {
    for (const content of [runtime, decision]) {
      expect(content).toContain("shadcn-compatible");
      expect(content).toContain("design-system-ai-lab");
      expect(content).toContain("components/ui");
      expect(content).toContain("@radix-ui");
    }
  });

  it("documents the Figma Make shadcn-like source observation", () => {
    expect(source).toContain("default_shadcn_theme.css");
    expect(source).toContain("src/app/components/ui/button.tsx");
    expect(source).toContain("@radix-ui/react-dialog");
  });

  it("lists primitive migration candidates for future implementation work", () => {
    expect(contract.migrationCandidates).toEqual(
      expect.arrayContaining(["Button", "Badge", "Dialog", "SidePanel", "Tabs", "Select", "Input", "Table"]),
    );
  });
});
