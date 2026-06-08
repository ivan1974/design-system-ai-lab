import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { StatusSummary } from "../decision/status-summary";
import type {
  StatusSummaryBadge,
  StatusSummaryItem,
} from "../decision/status-summary";

export type AssetIntelligenceReadiness =
  | "internal"
  | "needs_review"
  | "customer_ready";

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
  sourceStrength?: string;
  freshness?: string;
  validationStatus?: string;
  readiness?: AssetIntelligenceReadiness;
  badges?: StatusSummaryBadge[];
  extraItems?: StatusSummaryItem[];
  title?: string;
  description?: string;
};

const readinessLabel: Record<AssetIntelligenceReadiness, string> = {
  internal: "Internal",
  needs_review: "Needs review",
  customer_ready: "Customer-ready",
};

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
      readiness,
      badges = [],
      extraItems = [],
      title = "Asset intelligence summary",
      description = "Asset context, source limits, Health signals and Intelligence interpretation.",
      ...props
    },
    ref,
  ) => {
    const items: StatusSummaryItem[] = [
      { label: "Asset scope", value: assetScope },
      ...(assetContext
        ? [{ label: "Asset context", value: assetContext }]
        : []),
      ...(lifecycleContext
        ? [{ label: "Lifecycle context", value: lifecycleContext }]
        : []),
      ...(healthSignals
        ? [{ label: "Health signals", value: healthSignals }]
        : []),
      ...(intelligenceInterpretation
        ? [
          {
            label: "Intelligence interpretation",
            value: intelligenceInterpretation,
          },
        ]
        : []),
      ...(sourceContext
        ? [{ label: "Source context", value: sourceContext }]
        : []),
      ...(sourceScope ? [{ label: "Source scope", value: sourceScope }] : []),
      ...(sourceStrength
        ? [{ label: "Source strength", value: sourceStrength }]
        : []),
      ...(freshness ? [{ label: "Freshness", value: freshness }] : []),
      ...(validationStatus
        ? [{ label: "Validation status", value: validationStatus }]
        : []),
      ...(readiness
        ? [{ label: "Readiness", value: readinessLabel[readiness] }]
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

AssetIntelligenceSummary.displayName = "AssetIntelligenceSummary";