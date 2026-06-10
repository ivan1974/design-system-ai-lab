import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Card } from "../components/card";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { SectionBlock, SectionStack } from "../composition/section-stack";
import { StatusPill } from "../decision/status-pill";
import type { StatusSummaryBadge, StatusSummaryItem } from "../decision/status-summary";
import type { RiskLevel } from "../types/decision";
import { riskLevelLabels } from "../types/decision";
import type { SourceStrength, ValidationStatus } from "../types/trust";
import { sourceStrengthLabels, validationStatusLabels } from "../types/trust";

export type ServiceRiskLevel = RiskLevel;
export type ServiceRiskSummaryMode = "card" | "section" | "compact";

export type ServiceRiskSummaryProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  riskLevel: ServiceRiskLevel;
  riskSummary: string;
  affectedScope?: string;
  customerImpact?: string;
  serviceImpact?: string;
  sourceContext?: string;
  sourceStrength?: SourceStrength;
  sourceStrengthLabel?: string;
  freshness?: string;
  validationStatus?: ValidationStatus;
  validationStatusLabel?: string;
  recommendedReview?: string;
  badges?: StatusSummaryBadge[];
  extraItems?: StatusSummaryItem[];
  title?: string;
  description?: string;
  mode?: ServiceRiskSummaryMode;
};

const riskTone: Record<ServiceRiskLevel, "danger" | "warning" | "primary"> = {
  critical: "danger",
  warning: "warning",
  info: "primary",
};

export const ServiceRiskSummary = forwardRef<
  HTMLElement,
  ServiceRiskSummaryProps
>(
  (
    {
      riskLevel,
      riskSummary,
      affectedScope,
      customerImpact,
      serviceImpact,
      sourceContext,
      sourceStrength,
      sourceStrengthLabel,
      freshness,
      validationStatus,
      validationStatusLabel,
      recommendedReview,
      badges = [],
      extraItems = [],
      title = "Service risk summary",
      description = "Service risk context, affected scope, source limits and review focus.",
      mode = "card",
      className = "",
      ...props
    },
    ref,
  ) => {
    const content = (
      <SectionStack gap="sm">
        <div className="flex flex-wrap gap-2">
          <StatusPill tone={riskTone[riskLevel]}>{riskLevelLabels[riskLevel]}</StatusPill>
          {badges.map((badge) => (
            <StatusPill key={badge.label} tone={badge.tone ?? "neutral"}>{badge.label}</StatusPill>
          ))}
        </div>

        <SectionBlock title="Risk summary">
          <p className="text-sm text-(--ec-color-text-secondary)">{riskSummary}</p>
        </SectionBlock>

        <SectionBlock title="Scope, source and impact">
          <KeyValueList columns={mode === "compact" ? 2 : 3}>
            {affectedScope && <KeyValueRow label="Affected scope" value={affectedScope} />}
            {customerImpact && <KeyValueRow label="Customer impact" value={customerImpact} />}
            {serviceImpact && <KeyValueRow label="Service impact" value={serviceImpact} />}
            {sourceContext && <KeyValueRow label="Source context" value={sourceContext} />}
            {sourceStrength && <KeyValueRow label="Source strength" value={sourceStrengthLabel ?? sourceStrengthLabels[sourceStrength]} />}
            {freshness && <KeyValueRow label="Freshness" value={freshness} />}
            {validationStatus && <KeyValueRow label="Validation" value={validationStatusLabel ?? validationStatusLabels[validationStatus]} />}
            {recommendedReview && <KeyValueRow label="Recommended review" value={recommendedReview} />}
            {extraItems.map((item) => (
              <KeyValueRow key={item.label} label={item.label} value={item.value} />
            ))}
          </KeyValueList>
        </SectionBlock>
      </SectionStack>
    );

    if (mode === "card") {
      return (
        <Card ref={ref} title={title} description={description} className={className} {...props}>
          {content}
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
        {content}
      </section>
    );
  },
);

ServiceRiskSummary.displayName = "ServiceRiskSummary";
