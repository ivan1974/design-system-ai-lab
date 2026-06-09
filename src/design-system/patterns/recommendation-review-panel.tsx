import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Card } from "../components/card";
import type { BadgeTone } from "../components/badge";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { SectionBlock, SectionStack } from "../composition/section-stack";
import { SemanticTag } from "../decision/semantic-tag";
import { StatusPill } from "../decision/status-pill";

export type RecommendationReviewPanelBadge = {
  label: string;
  tone?: BadgeTone;
};

export type RecommendationReviewPanelItem = {
  label: string;
  value: ReactNode;
};

export type RecommendationReviewPanelMode = "card" | "section" | "drawer";

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
  mode?: RecommendationReviewPanelMode;
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
      mode = "card",
      className = "",
      ...props
    },
    ref,
  ) => {
    const content = (
      <SectionStack gap="sm">
        {(badges.length > 0 || actions) && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            {badges.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <SemanticTag key={badge.label} tone={badge.tone ?? "neutral"}>
                    {badge.label}
                  </SemanticTag>
                ))}
              </div>
            )}
            {actions && <div className="shrink-0">{actions}</div>}
          </div>
        )}

        <SectionBlock title="Review context">
          <KeyValueList columns={3}>
            {reviewScope && <KeyValueRow label="Review scope" value={reviewScope} />}
            {reviewStatus && <KeyValueRow label="Review status" value={reviewStatus} />}
            {sourceContext && <KeyValueRow label="Source context" value={sourceContext} />}
            {validationStatus && <KeyValueRow label="Validation" value={validationStatus} />}
            {customerReadiness && <KeyValueRow label="Customer readiness" value={customerReadiness} />}
            {proofContext && <KeyValueRow label="Proof context" value={proofContext} />}
            {extraItems.map((item) => (
              <KeyValueRow key={item.label} label={item.label} value={item.value} />
            ))}
          </KeyValueList>
        </SectionBlock>

        {customerReadiness && (
          <div>
            <StatusPill tone={customerReadiness.toLowerCase().includes("ready") ? "success" : "warning"}>
              {customerReadiness}
            </StatusPill>
          </div>
        )}

        <SectionBlock title="Recommendation details">{children}</SectionBlock>
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
        {mode !== "drawer" && (
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

RecommendationReviewPanel.displayName = "RecommendationReviewPanel";
