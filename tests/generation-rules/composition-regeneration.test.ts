import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");
const readJson = <T>(relativePath: string) => JSON.parse(read(relativePath)) as T;

type TargetSurface = {
  targetPublicSurface: Record<string, string[]>;
};

type RegenerationPlan = {
  orderedLayers: Array<{ id: string; targetComponents?: string[] }>;
};

type ComponentsContract = {
  targetMakeSurface: Record<string, string[]>;
};

const targetSurface = readJson<TargetSurface>("contracts/v0.8-target-surface.contract.json");
const regenerationPlan = readJson<RegenerationPlan>("contracts/v0.8-regeneration-plan.contract.json");
const componentsContract = readJson<ComponentsContract>("contracts/components.contract.json");
const compositionLayer = regenerationPlan.orderedLayers.find((layer) => layer.id === "composition");

const workspaceShellSource = read("src/design-system/composition/workspace-shell.tsx");
const mainNavigationSource = read("src/design-system/components/main-navigation.tsx");
const typographySource = read("src/design-system/components/typography.tsx");
const filterBarSource = read("src/design-system/composition/filter-bar.tsx");
const sectionStackSource = read("src/design-system/composition/section-stack.tsx");
const listContainerSource = read("src/design-system/components/list-container.tsx");
const masterDetailLayoutSource = read("src/design-system/composition/master-detail-layout.tsx");
const workspaceDetailPanelSource = read("src/design-system/composition/workspace-detail-panel.tsx");
const sidePanelSource = read("src/design-system/composition/side-panel.tsx");
const stickyActionBarSource = read("src/design-system/composition/sticky-action-bar.tsx");
const interactivePanelsGuideline = read("guidelines/reference/components/interactive-panels.md");

const trancheOne = [
  "WorkspaceShell",
  "MainNavigation",
  "PageHeading",
  "FilterBar",
  "SectionStack",
  "SectionBlock",
  "ListContainer",
];

const trancheTwo = [
  "MasterDetailLayout",
  "WorkspaceDetailPanel",
  "SidePanel",
  "StickyActionBar",
];

describe("generation rules: v0.8 composition regeneration", () => {
  it("keeps composition target surface aligned across contracts and plan", () => {
    for (const componentName of targetSurface.targetPublicSurface.composition) {
      expect(componentsContract.targetMakeSurface.composition).toContain(componentName);
      expect(compositionLayer?.targetComponents).toContain(componentName);
    }
  });

  it("covers tranche one structure components", () => {
    for (const componentName of trancheOne) {
      expect(targetSurface.targetPublicSurface.composition).toContain(componentName);
      expect(compositionLayer?.targetComponents).toContain(componentName);
    }
  });

  it("covers tranche two detail and action composition components", () => {
    for (const componentName of trancheTwo) {
      expect(targetSurface.targetPublicSurface.composition).toContain(componentName);
      expect(compositionLayer?.targetComponents).toContain(componentName);
    }
  });

  it("keeps WorkspaceShell as the page-level workspace frame", () => {
    expect(workspaceShellSource).toContain("min-h-screen");
    expect(workspaceShellSource).toContain("--ec-color-workspace");
    expect(workspaceShellSource).toContain("maxWidth?: \"full\" | \"wide\" | \"standard\"");
  });

  it("keeps MainNavigation generic, not Installed Base specific", () => {
    expect(mainNavigationSource).toContain("productName = \"Workspace\"");
    expect(mainNavigationSource).toContain("searchPlaceholder = \"Search\"");
    expect(mainNavigationSource).not.toContain("Installed Base Intelligence");
    expect(mainNavigationSource).not.toContain("Search assets, sites, documents");
  });

  it("keeps PageHeading and SectionHeading tokenized", () => {
    expect(typographySource).toContain("text-[length:var(--ec-title-page-size)]");
    expect(typographySource).toContain("text-[length:var(--ec-text-caption-size)]");
    expect(typographySource).not.toContain("text-(length:");
  });

  it("keeps FilterBar as a contained control surface", () => {
    expect(filterBarSource).toContain("--ec-color-surface");
    expect(filterBarSource).toContain("--ec-color-border-soft");
    expect(filterBarSource).toContain("filters?: ReactNode");
  });

  it("keeps SectionStack and SectionBlock as structural wrappers, not business patterns", () => {
    expect(sectionStackSource).toContain("gap?: \"sm\" | \"md\" | \"lg\"");
    expect(sectionStackSource).toContain("SectionBlockProps");
    expect(sectionStackSource).not.toContain("Recommendation");
    expect(sectionStackSource).not.toContain("Risk");
  });

  it("keeps ListContainer as the default repeated-object surface", () => {
    expect(listContainerSource).toContain("spacing?: ListContainerSpacing");
    expect(listContainerSource).toContain("divided?: boolean");
    expect(listContainerSource).toContain("divide-(--ec-color-border-soft)");
  });

  it("keeps MasterDetailLayout as the preferred list-detail coordinator", () => {
    expect(masterDetailLayoutSource).toContain("detailMode?: MasterDetailLayoutDetailMode");
    expect(masterDetailLayoutSource).toContain("detailOpen?: boolean");
    expect(masterDetailLayoutSource).toContain("onDetailOpenChange?: (open: boolean) => void");
    expect(masterDetailLayoutSource).toContain("WorkspaceDetailPanel");
    expect(masterDetailLayoutSource).not.toContain("const Drawer");
  });

  it("keeps WorkspaceDetailPanel as the selected-item detail target", () => {
    expect(workspaceDetailPanelSource).toContain("mode?: WorkspaceDetailPanelMode");
    expect(workspaceDetailPanelSource).toContain("title: string");
    expect(workspaceDetailPanelSource).toContain("PanelHeader");
    expect(workspaceDetailPanelSource).toContain("PanelBody");
    expect(workspaceDetailPanelSource).toContain("PanelFooter");
  });

  it("keeps SidePanel and StickyActionBar as explicit composition targets", () => {
    expect(sidePanelSource).toContain("closeOnOverlay?: boolean");
    expect(sidePanelSource).toContain("closeOnEscape?: boolean");
    expect(sidePanelSource).toContain("lockBackgroundScroll?: boolean");
    expect(stickyActionBarSource).toContain("primaryAction?: ReactNode");
    expect(stickyActionBarSource).toContain("secondaryActions?: ReactNode");
    expect(stickyActionBarSource).toContain("context?: ReactNode");
  });

  it("keeps interactive panel guidance target-first", () => {
    expect(interactivePanelsGuideline).toContain("<MasterDetailLayout />");
    expect(interactivePanelsGuideline).toContain("<WorkspaceDetailPanel />");
    expect(interactivePanelsGuideline).toContain("<SidePanel />");
    expect(interactivePanelsGuideline).toContain("SlideOverPanel` is not the default Make-facing recommendation in v0.8");
    expect(interactivePanelsGuideline).toContain("SlideOverPanel only as a transition-level internal primitive");
  });
});
