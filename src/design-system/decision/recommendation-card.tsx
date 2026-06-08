import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Badge } from "../components/badge";

export type RecommendationPriority = "high" | "medium" | "low";

export type RecommendationReadiness =
  | "internal"
  | "needs_review"
  | "customer_ready";

export type RecommendationCardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  recommendation: string;
  rationale: string;
  scope: string;
  priority: RecommendationPriority;
  assetContext?: string;
  customerContext?: string;
  evidenceSummary: string;
  source?: string;
  sourceScope?: string;
  sourceStrength?: string;
  freshness?: string;
  interpretation?: string;
  validationStatus?: string;
  readiness: RecommendationReadiness;
  proofStatus?: string;
  expectedOutcome?: string;
  action?: ReactNode;
};

const priorityTone: Record<RecommendationPriority, "danger" | "warning" | "neutral"> = {
  high: "danger",
  medium: "warning",
  low: "neutral",
};

const priorityLabel: Record<RecommendationPriority, string> = {
  high: "High priority",
  medium: "Medium priority",
  low: "Low priority",
};

const readinessTone: Record<
  RecommendationReadiness,
  "neutral" | "warning" | "success"
> = {
  internal: "neutral",
  needs_review: "warning",
  customer_ready: "success",
};

const readinessLabel: Record<RecommendationReadiness, string> = {
  internal: "Internal",
  needs_review: "Needs review",
  customer_ready: "Customer-ready",
};

export const RecommendationCard = forwardRef<
  HTMLElement,
  RecommendationCardProps
>(
  (
    {
      title,
      recommendation,
      rationale,
      scope,
      priority,
      assetContext,
      customerContext,
      evidenceSummary,
      source,
      sourceScope,
      sourceStrength,
      freshness,
      interpretation,
      validationStatus,
      readiness,
      proofStatus,
      expectedOutcome,
      action,
      className = "",
      ...props
    },
    ref,
  ) => {
    const hasSourceContext =
      source || sourceScope || sourceStrength || freshness;

    const hasDecisionContext =
      assetContext ||
      customerContext ||
      proofStatus ||
      expectedOutcome ||
      validationStatus;

    return (
      <article
        ref={ref}
        className={[
          "rounded-(--ec-radius-md) border border-(--ec-color-border)",
          "bg-(--ec-color-surface) p-4",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <Badge tone={readinessTone[readiness]}>
                {readinessLabel[readiness]}
              </Badge>

              <Badge tone={priorityTone[priority]}>
                {priorityLabel[priority]}
              </Badge>

              <span className="text-xs text-(--ec-color-text-muted)">
                {scope}
              </span>
            </div>

            <h3 className="text-sm font-semibold text-(--ec-color-text-primary)">
              {title}
            </h3>

            <p className="mt-3 text-sm font-medium text-(--ec-color-text-primary)">
              Recommendation: {recommendation}
            </p>

            <p className="mt-2 text-sm text-(--ec-color-text-secondary)">
              Rationale: {rationale}
            </p>

            {interpretation && (
              <p className="mt-2 text-sm text-(--ec-color-text-secondary)">
                Interpretation: {interpretation}
              </p>
            )}

            <p className="mt-3 text-xs text-(--ec-color-text-muted)">
              Evidence: {evidenceSummary}
            </p>

            {hasSourceContext && (
              <dl className="mt-3 space-y-1 text-xs text-(--ec-color-text-muted)">
                {source && (
                  <div>
                    <dt className="sr-only">Source</dt>
                    <dd>Source: {source}</dd>
                  </div>
                )}

                {sourceScope && (
                  <div>
                    <dt className="sr-only">Source scope</dt>
                    <dd>Scope: {sourceScope}</dd>
                  </div>
                )}

                {sourceStrength && (
                  <div>
                    <dt className="sr-only">Source strength</dt>
                    <dd>Source strength: {sourceStrength}</dd>
                  </div>
                )}

                {freshness && (
                  <div>
                    <dt className="sr-only">Freshness</dt>
                    <dd>Freshness: {freshness}</dd>
                  </div>
                )}
              </dl>
            )}

            {hasDecisionContext && (
              <dl className="mt-3 space-y-1 text-xs text-(--ec-color-text-muted)">
                {assetContext && (
                  <div>
                    <dt className="sr-only">Asset context</dt>
                    <dd>Asset context: {assetContext}</dd>
                  </div>
                )}

                {customerContext && (
                  <div>
                    <dt className="sr-only">Customer context</dt>
                    <dd>Customer context: {customerContext}</dd>
                  </div>
                )}

                {proofStatus && (
                  <div>
                    <dt className="sr-only">Proof status</dt>
                    <dd>Proof: {proofStatus}</dd>
                  </div>
                )}

                {expectedOutcome && (
                  <div>
                    <dt className="sr-only">Expected outcome</dt>
                    <dd>Expected outcome: {expectedOutcome}</dd>
                  </div>
                )}

                {validationStatus && (
                  <div>
                    <dt className="sr-only">Validation status</dt>
                    <dd>Validation: {validationStatus}</dd>
                  </div>
                )}
              </dl>
            )}
          </div>

          {action && <div className="shrink-0">{action}</div>}
        </div>
      </article>
    );
  },
);

RecommendationCard.displayName = "RecommendationCard";