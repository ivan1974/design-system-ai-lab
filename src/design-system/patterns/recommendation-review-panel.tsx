import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Card } from "../components/card";
import { Badge } from "../components/badge";
import type { BadgeTone } from "../components/badge";

export type RecommendationReviewPanelBadge = {
  label: string;
  tone?: BadgeTone;
};

export type RecommendationReviewPanelItem = {
  label: string;
  value: ReactNode;
};

export type RecommendationReviewPanelProps = HTMLAttributes<HTMLElement> & {
  title?: string;
  description?: string;
  reviewScope?: string;
  reviewStatus?: string;
  sourceContext?: string;
  validationStatus?: string;
  customerReadiness?: string;
  proofContext?: string;
  badges?: RecommendationReviewPanelBadge[];
  extraItems?: RecommendationReviewPanelItem[];
  actions?: ReactNode;
  children: ReactNode;
};

export const RecommendationReviewPanel = forwardRef<
  HTMLElement,
  RecommendationReviewPanelProps
>(
  (
    {
      title = "Recommendation review",
      description = "Review priority, source evidence, validation status and customer-readiness before customer use.",
      reviewScope,
      reviewStatus,
      sourceContext,
      validationStatus,
      customerReadiness,
      proofContext,
      badges = [],
      extraItems = [],
      actions,
      children,
      className = "",
      ...props
    },
    ref,
  ) => {
    const contextItems: RecommendationReviewPanelItem[] = [
      ...(reviewScope ? [{ label: "Review scope", value: reviewScope }] : []),
      ...(reviewStatus ? [{ label: "Review status", value: reviewStatus }] : []),
      ...(sourceContext
        ? [{ label: "Source context", value: sourceContext }]
        : []),
      ...(validationStatus
        ? [{ label: "Validation status", value: validationStatus }]
        : []),
      ...(customerReadiness
        ? [{ label: "Customer readiness", value: customerReadiness }]
        : []),
      ...(proofContext ? [{ label: "Proof context", value: proofContext }] : []),
      ...extraItems,
    ];

    return (
      <section ref={ref} className={className} {...props}>
        <Card title={title} description={description}>
          <div className="space-y-4">
            {(badges.length > 0 || actions) && (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                {badges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {badges.map((badge) => (
                      <Badge key={badge.label} tone={badge.tone ?? "neutral"}>
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                )}

                {actions && <div className="shrink-0">{actions}</div>}
              </div>
            )}

            {contextItems.length > 0 && (
              <dl className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {contextItems.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <dt className="mb-1 text-xs text-(--ec-color-text-muted)">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-(--ec-color-text-primary)">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}

            <div className="space-y-3">{children}</div>
          </div>
        </Card>
      </section>
    );
  },
);

RecommendationReviewPanel.displayName = "RecommendationReviewPanel";