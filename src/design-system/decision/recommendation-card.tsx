import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { PriorityPill } from "./priority-pill";
import { StatusPill } from "./status-pill";

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
        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <StatusPill tone={readinessTone[readiness]}>{readinessLabel[readiness]}</StatusPill>
                <PriorityPill priority={priority} />
                <span className="text-xs text-(--ec-color-text-muted)">{scope}</span>
              </div>
              <h3 className="text-sm font-semibold text-(--ec-color-text-primary)">{title}</h3>
            </div>
            {action && <div className="shrink-0">{action}</div>}
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-(--ec-color-text-primary)">{recommendation}</p>
            <p className="text-sm text-(--ec-color-text-secondary)">{rationale}</p>
            {interpretation && <p className="text-sm text-(--ec-color-text-secondary)">{interpretation}</p>}
          </div>

          <div className="border-t border-(--ec-color-border) pt-3">
            <p className="text-xs font-medium text-(--ec-color-text-muted)">Evidence</p>
            <p className="mt-1 text-sm text-(--ec-color-text-secondary)">{evidenceSummary}</p>
          </div>

          <KeyValueList columns={3}>
            {source && <KeyValueRow label="Source" value={source} />}
            {sourceScope && <KeyValueRow label="Source scope" value={sourceScope} />}
            {sourceStrength && <KeyValueRow label="Source strength" value={sourceStrength} />}
            {freshness && <KeyValueRow label="Freshness" value={freshness} />}
            {assetContext && <KeyValueRow label="Asset context" value={assetContext} />}
            {customerContext && <KeyValueRow label="Customer context" value={customerContext} />}
            {proofStatus && <KeyValueRow label="Proof status" value={proofStatus} />}
            {expectedOutcome && <KeyValueRow label="Expected outcome" value={expectedOutcome} />}
            {validationStatus && <KeyValueRow label="Validation" value={validationStatus} />}
          </KeyValueList>
        </div>
      </article>
    );
  },
);

RecommendationCard.displayName = "RecommendationCard";
