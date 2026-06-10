import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type RegistryEntry = {
  name: string;
  category: string;
  publicExport?: boolean;
  genAIStatus: "preferred" | "allowed" | "use-with-care" | "internal-only" | "deprecated" | "blocked-for-genai";
  allowedInRuntime?: boolean;
  guideline: string;
  story?: string | null;
  noStoryRationale?: string;
  propsContract?: string | null;
  requiresEvidenceRules?: boolean;
  requiresActionRules?: boolean;
  supportsProgressiveDisclosure?: boolean;
  replacementFor?: string[];
  repairPrompt?: string | null;
};

type ComponentRegistry = {
  statusValues: RegistryEntry["genAIStatus"][];
  defaults: Partial<RegistryEntry>;
  components: RegistryEntry[];
};

type ComponentsContract = {
  approvedImports: Record<string, string[]>;
};

type PropsContract = {
  components: Record<string, Record<string, string[]>>;
};

const registry = readJson<ComponentRegistry>("contracts/component-registry.contract.json");
const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const propsContract = readJson<PropsContract>("contracts/props.contract.json");
const publicIndex = read("src/design-system/index.ts");

const approvedImports = Object.values(componentsContract.approvedImports).flat();

const withDefaults = (entry: RegistryEntry): RegistryEntry => ({
  ...registry.defaults,
  ...entry,
});

const registryEntries = registry.components.map(withDefaults);

function unique(values: string[]) {
  return [...new Set(values)].sort();
}

function extractPublicValueExports(source: string) {
  const exports: string[] = [];

  for (const match of source.matchAll(/export\s+\{([^}]+)\}\s+from/gm)) {
    const names = match[1]
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => part.split(/\s+as\s+/)[0].trim());

    exports.push(...names);
  }

  return unique(exports);
}

function exists(relativePath: string) {
  return fs.existsSync(path.join(rootDir, relativePath));
}

describe("generation rules: component registry alignment", () => {
  const registryNames = unique(registryEntries.filter((entry) => entry.publicExport !== false).map((entry) => entry.name));
  const indexExports = extractPublicValueExports(publicIndex);
  const approvedImportNames = unique(approvedImports);
  const registryByName = new Map(registryEntries.map((entry) => [entry.name, entry]));

  it("covers every public value export from src/design-system/index.ts", () => {
    expect(registryNames).toEqual(indexExports);
  });

  it("matches approved imports listed in components.contract.json", () => {
    expect(registryNames).toEqual(approvedImportNames);
  });

  it("uses only allowed GenAI statuses", () => {
    const allowedStatuses = new Set(registry.statusValues);

    for (const entry of registryEntries) {
      expect(allowedStatuses.has(entry.genAIStatus), `${entry.name} has invalid status`).toBe(true);
    }
  });

  it("does not allow blocked, deprecated or internal-only entries directly in runtime", () => {
    for (const entry of registryEntries) {
      if (["blocked-for-genai", "deprecated", "internal-only"].includes(entry.genAIStatus)) {
        expect(entry.allowedInRuntime, `${entry.name} should not be runtime-allowed`).toBe(false);
      }
    }
  });

  it("has a valid guideline path for every entry", () => {
    for (const entry of registryEntries) {
      expect(entry.guideline, `${entry.name} must define a guideline`).toBeTruthy();
      expect(exists(entry.guideline), `${entry.name} guideline does not exist: ${entry.guideline}`).toBe(true);
    }
  });

  it("has either a valid story path or an explicit no-story rationale", () => {
    for (const entry of registryEntries) {
      if (entry.story) {
        expect(exists(entry.story), `${entry.name} story does not exist: ${entry.story}`).toBe(true);
      } else {
        expect(entry.noStoryRationale, `${entry.name} needs a no-story rationale`).toBeTruthy();
      }
    }
  });

  it("links every props contract component to the registry", () => {
    for (const componentName of Object.keys(propsContract.components)) {
      const entry = registryByName.get(componentName);
      expect(entry, `${componentName} is missing from registry`).toBeTruthy();
      expect(entry?.propsContract).toBe(`contracts/props.contract.json#${componentName}`);
    }
  });

  it("does not point propsContract to unknown props entries", () => {
    for (const entry of registryEntries) {
      if (!entry.propsContract) continue;

      const [, anchor] = entry.propsContract.split("#");
      expect(anchor, `${entry.name} propsContract must include an anchor`).toBeTruthy();
      expect(propsContract.components[anchor], `${entry.name} propsContract anchor is unknown`).toBeTruthy();
    }
  });

  it("enforces v0.6.0 status decisions for priority components", () => {
    const expectedStatuses: Record<string, RegistryEntry["genAIStatus"]> = {
      WorkspaceShell: "preferred",
      PageHeading: "preferred",
      PageHeader: "blocked-for-genai",
      WorkspaceDetailPanel: "preferred",
      DetailPanel: "use-with-care",
      ListContainer: "preferred",
      Card: "use-with-care",
      MetricStrip: "preferred",
      MetricCard: "use-with-care",
      ComponentHierarchy: "preferred",
      ComponentHierarchyItem: "internal-only",
      ActionRow: "preferred",
      ActionCard: "allowed",
      AlertCard: "allowed",
      RecommendationCard: "allowed",
      RecommendationReviewPanel: "preferred",
      ValueProofCard: "allowed",
      Timeline: "use-with-care",
    };

    for (const [componentName, expectedStatus] of Object.entries(expectedStatuses)) {
      expect(registryByName.get(componentName)?.genAIStatus).toBe(expectedStatus);
    }
  });

  it("keeps evidence and action rule flags visible for sensitive entries", () => {
    expect(registryByName.get("ActionRow")?.requiresActionRules).toBe(true);
    expect(registryByName.get("AlertCard")?.requiresActionRules).toBe(true);
    expect(registryByName.get("RecommendationCard")?.requiresEvidenceRules).toBe(true);
    expect(registryByName.get("RecommendationReviewPanel")?.requiresEvidenceRules).toBe(true);
    expect(registryByName.get("ValueProofCard")?.requiresEvidenceRules).toBe(true);
  });
});
