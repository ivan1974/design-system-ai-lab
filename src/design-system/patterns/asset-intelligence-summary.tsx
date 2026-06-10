import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Card } from "../components/card";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { SectionBlock, SectionStack } from "../composition/section-stack";
import { SourceStrengthPill } from "../decision/source-strength-pill";
import { StatusPill } from "../decision/status-pill";
import type { StatusSummaryBadge, StatusSummaryItem } from "../decision/status-summary";
import type { CustomerReadiness, SourceStrength, ValidationStatus } from "../types/trust";
import { customerReadinessLabels, validationStatusLabels } from "../types/trust";

export type AssetIntelligenceReadiness = CustomerReadiness;

export type AssetIntelligenceSummaryMode = "card" | "section" | "compact";

export type AssetIntelligenceSummaryProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  assetScope: string;
  assetContext?: string;
  lifecycleContext?: string;
  healthSignals?: string;
  intelligenceInterpretation?: string;
  sourceContext?: string;
  sourceScope?: string;
  sourceStrength?: SourceStrength;
  freshness?: string;
  validationStatus?: ValidationStatus;
  validationStatusLabel?: string;
  readiness?: AssetIntelligenceReadiness;
  readinessLabel?: string;
  badges?: StatusSummaryBadge[];
  extraItems?: StatusSummaryItem[];
  title?: string;
  description?: string;
  mode?: AssetIntelligenceSummaryMode;
};

const readinessTone: Record<AssetIntelligenceReadiness, "neutral" | "warning" | "success"> = {
  internal: "neutral",
  "needs-review": "warning",
  needs_review: "warning",
  "customer-ready": "success",
  customer_ready: "success",
};

const Container = forwardRef<HTMLElement, { mode: AssetIntelligenceSummaryMode; title: string; description?: string; className?: string; children: ReactNode }>(
  ({ mode, title, description, className = "", children, ...props }, ref) => {
    if (mode === "card") {
      return (
        <Card ref={ref} title={title} description={description} className={className} {...props}>
          {children}
        </Card>
      );
    }

    return (
      <section ref={ref} className={className} {...props}>
        {mode !== "compact" && (
          <header className="mb-4">
            <h2 className="text-sm font-semibold text-(--ec-color-text-primary)">{title}</h2>
            {description && <p className="mt-1 text-sm text-(--ec-color-text-secondary)">{description}</p>}
          </header>
        )}
        {children}
      </section>
    );
  },
);

Container.displayName = "AssetIntelligenceSummaryContainer";

export const AssetIntelligenceSummary = forwardRef<
  HTMLElement,
  AssetIntelligenceSummaryProps
>(
  (
    {
      assetScope,
      assetContext,
      lifecycleContext,
      healthSignals,
      intelligenceInterpretation,
      sourceContext,
      sourceScope,
      sourceStrength,
      freshness,
      validationStatus,
      validationStatusLabel,
      readiness,
      readinessLabel,
      badges = [],
      extraItems = [],
      title = "Asset intelligence summary",
      description = "Asset context, source limits, Health signals and Intelligence interpretation.",
      mode = "card",
      className = "",
      ...props
    },
    ref,
  ) => {
    return (
      <Container ref={ref} mode={mode} title={title} description={description} className={className} {...props}>
        <SectionStack gap="sm">
          {(badges.length > 0 || readiness || sourceStrength) && (
            <div className="flex flex-wrap gap-2">
              {readiness && <StatusPill tone={readinessTone[readiness]}>{readinessLabel ?? customerReadinessLabels[readiness]}</StatusPill>}
              {sourceStrength && <SourceStrengthPill strength={sourceStrength} />}
              {badges.map((badge) => (
                <StatusPill key={badge.label} tone={badge.tone ?? "neutral"}>{badge.label}</StatusPill>
              ))}
            </div>
          )}

          <SectionBlock title="Facts and source scope">
            <KeyValueList columns={mode === "compact" ? 2 : 3}>
              <KeyValueRow label="Asset scope" value={assetScope} />
              {assetContext && <KeyValueRow label="Asset context" value={assetContext} />}
              {lifecycleContext && <KeyValueRow label="Lifecycle" value={lifecycleContext} />}
              {sourceContext && <KeyValueRow label="Source context" value={sourceContext} />}
              {sourceScope && <KeyValueRow label="Source scope" value={sourceScope} />}
              {freshness && <KeyValueRow label="Freshness" value={freshness} />}
              {validationStatus && <KeyValueRow label="Validation" value={validationStatusLabel ?? validationStatusLabels[validationStatus]} />}
              {extraItems.map((item) => (
                <KeyValueRow key={item.label} label={item.label} value={item.value} />
              ))}
            </KeyValueList>
          </SectionBlock>

          {(healthSignals || intelligenceInterpretation) && (
            <SectionBlock title="Health and intelligence">
              <KeyValueList columns={1}>
                {healthSignals && <KeyValueRow label="Observed Health signals" value={healthSignals} />}
                {intelligenceInterpretation && <KeyValueRow label="Intelligence interpretation" value={intelligenceInterpretation} />}
              </KeyValueList>
            </SectionBlock>
          )}
        </SectionStack>
      </Container>
    );
  },
);

AssetIntelligenceSummary.displayName = "AssetIntelligenceSummary";
