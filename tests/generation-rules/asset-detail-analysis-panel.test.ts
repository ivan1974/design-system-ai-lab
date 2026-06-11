import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const rootDir = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(rootDir, relativePath), "utf-8");

const panel = read("src/design-system/patterns/asset-detail-analysis-panel.tsx");
const guideline = read("guidelines/reference/patterns/asset-detail-analysis-panel.md");
const story = read("src/design-system/stories/screen-architecture/asset-detail-analysis-panel.stories.tsx");

const tabs = ["Overview", "Health", "Intelligence", "Passport", "History", "Documents"];
const actions = ["Schedule Service", "Download Report", "Contact Expert"];

describe("generation rules: asset detail analysis panel", () => {
  it("implements the exact six tabs", () => {
    for (const tab of tabs) {
      expect(panel).toContain(tab);
      expect(guideline).toContain(tab);
    }

    expect(panel).toContain("Tabs");
  });

  it("implements the exact sticky action area actions", () => {
    for (const action of actions) {
      expect(panel).toContain(action);
      expect(guideline).toContain(action);
    }

    expect(panel).toContain("footer=");
    expect(panel).toContain("Button");
  });

  it("delegates overlay close, close icon, Escape close and scroll lock to SidePanel", () => {
    expect(panel).toContain("SidePanel");
    expect(guideline).toContain("overlay close");
    expect(guideline).toContain("Escape close");
    expect(guideline).toContain("scroll lock");
    expect(guideline).toContain("Close icon");
  });

  it("keeps Health facts-only", () => {
    const healthSection = panel.slice(panel.indexOf("function renderHealth"), panel.indexOf("function renderIntelligence"));

    expect(healthSection).toContain("Facts only");
    expect(healthSection).toContain("observed condition signals");
    expect(healthSection).toContain("HealthPill");
    expect(healthSection).toContain("StatusWithIcon");
    expect(healthSection).not.toContain("recommendation");
    expect(healthSection).not.toContain("nextStep");
    expect(healthSection).not.toContain("diagnosis");
    expect(guideline).toContain("Health is facts-only");
  });

  it("keeps Intelligence decision-oriented", () => {
    const intelligenceSection = panel.slice(panel.indexOf("function renderIntelligence"), panel.indexOf("function renderPassport"));

    expect(intelligenceSection).toContain("Decision-oriented interpretation");
    expect(intelligenceSection).toContain("recommended next steps");
    expect(intelligenceSection).toContain("rationale");
    expect(intelligenceSection).toContain("nextStep");
    expect(guideline).toContain("Intelligence is decision-oriented");
  });

  it("uses existing DS primitives and avoids local UI drift", () => {
    for (const source of [panel, story]) {
      expect(source).not.toContain("components/ui");
      expect(source).not.toContain("@radix-ui");
      expect(source).not.toContain("internal/primitives");
    }

    for (const component of ["KeyValueList", "Timeline", "DocumentRow", "HealthPill", "StatusWithIcon", "CoverageTag", "Button"]) {
      expect(panel).toContain(component);
    }
  });
});
