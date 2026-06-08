import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { StatusSummary } from "../decision/status-summary";
import type {
  StatusSummaryBadge,
  StatusSummaryItem,
} from "../decision/status-summary";

export type ServiceRiskLevel = "critical" | "warning" | "info";

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
  sourceStrength?: string;
  freshness?: string;
  validationStatus?: string;
  recommendedReview?: string;
  badges?: StatusSummaryBadge[];
  extraItems?: StatusSummaryItem[];
  title?: string;
  description?: string;
};

const riskLevelLabel: Record<ServiceRiskLevel, string> = {
  critical: "Critical",
  warning: "Warning",
  info: "Information",
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
      freshness,
      validationStatus,
      recommendedReview,
      badges = [],
      extraItems = [],
      title = "Service risk summary",
      description = "Service risk context, affected scope, source limits and review focus.",
      ...props
    },
    ref,
  ) => {
    const items: StatusSummaryItem[] = [
      { label: "Risk level", value: riskLevelLabel[riskLevel] },
      { label: "Risk summary", value: riskSummary },
      ...(affectedScope
        ? [{ label: "Affected scope", value: affectedScope }]
        : []),
      ...(customerImpact
        ? [{ label: "Customer impact", value: customerImpact }]
        : []),
      ...(serviceImpact
        ? [{ label: "Service impact", value: serviceImpact }]
        : []),
      ...(sourceContext
        ? [{ label: "Source context", value: sourceContext }]
        : []),
      ...(sourceStrength
        ? [{ label: "Source strength", value: sourceStrength }]
        : []),
      ...(freshness ? [{ label: "Freshness", value: freshness }] : []),
      ...(validationStatus
        ? [{ label: "Validation status", value: validationStatus }]
        : []),
      ...(recommendedReview
        ? [{ label: "Recommended review", value: recommendedReview }]
        : []),
      ...extraItems,
    ];

    return (
      <StatusSummary
        ref={ref}
        title={title}
        description={description}
        badges={badges}
        items={items}
        {...props}
      />
    );
  },
);

ServiceRiskSummary.displayName = "ServiceRiskSummary";