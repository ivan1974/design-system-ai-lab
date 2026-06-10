import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Card } from "../components/card";
import type { BadgeTone } from "../components/badge";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { SectionBlock, SectionStack } from "../composition/section-stack";
import { SemanticTag } from "../decision/semantic-tag";
import { StatusPill } from "../decision/status-pill";
import type { ProofReadiness } from "../types/evidence";
import { proofReadinessLabels } from "../types/evidence";
import type { CustomerReadiness, HumanValidationRequirement, ValidationStatus } from "../types/trust";
import { customerReadinessLabels, humanValidationRequirementLabels, validationStatusLabels } from "../types/trust";

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
  validationStatus?: ValidationStatus;
  validationStatusLabel?: string;
  customerReadiness?: CustomerReadiness;
  customerReadinessLabel?: string;
  proofReadiness?: ProofReadiness;
  proofReadinessLabel?: string;
  humanValidation?: HumanValidationRequirement;
  humanValidationLabel?: string;
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
      validationStatusLabel,
      customerReadiness,
      customerReadinessLabel,
      proofReadiness,
      proofReadinessLabel,
      humanValidation,
      humanValidationLabel,
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
            {validationStatus && <KeyValueRow label="Validation" value={validationStatusLabel ?? validationStatusLabels[validationStatus]} />}
            {customerReadiness && <KeyValueRow label="Customer readiness" value={customerReadinessLabel ?? customerReadinessLabels[customerReadiness]} />}
            {proofReadiness && <KeyValueRow label="Proof readiness" value={proofReadinessLabel ?? proofReadinessLabels[proofReadiness]} />}
            {humanValidation && <KeyValueRow label="Human validation" value={humanValidationLabel ?? humanValidationRequirementLabels[humanValidation]} />}
            {extraItems.map((item) => (
              <KeyValueRow key={item.label} label={item.label} value={item.value} />
            ))}
          </KeyValueList>
        </SectionBlock>

        {customerReadiness && (
          <div>
            <StatusPill tone={customerReadiness === "customer-ready" ? "success" : "warning"}>
              {customerReadinessLabel ?? customerReadinessLabels[customerReadiness]}
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
