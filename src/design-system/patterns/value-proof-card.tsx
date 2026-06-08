import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Badge } from "../components/badge";
import type { BadgeTone } from "../components/badge";
import { Card } from "../components/card";

export type ValueProofPoint = {
  label: string;
  value: ReactNode;
};

export type ValueProofBadge = {
  label: string;
  tone?: BadgeTone;
};

export type ValueProofCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  title?: string;
  description?: string;
  period?: string;
  customerObjective?: string;
  proofStatus?: string;
  proofReadiness?: string;
  validationStatus?: string;
  sourceContext?: string;
  expectedOutcome?: string;
  badges?: ValueProofBadge[];
  proofPoints: ValueProofPoint[];
};

export const ValueProofCard = forwardRef<HTMLElement, ValueProofCardProps>(
  (
    {
      title = "Value proof",
      description = "Customer-ready proof points and service outcomes.",
      period,
      customerObjective,
      proofStatus,
      proofReadiness,
      validationStatus,
      sourceContext,
      expectedOutcome,
      badges = [],
      proofPoints,
      className = "",
      ...props
    },
    ref,
  ) => {
    const contextItems = [
      period && { label: "Period", value: period },
      customerObjective && {
        label: "Customer objective",
        value: customerObjective,
      },
      proofStatus && { label: "Proof status", value: proofStatus },
      proofReadiness && { label: "Proof readiness", value: proofReadiness },
      validationStatus && {
        label: "Validation status",
        value: validationStatus,
      },
      sourceContext && { label: "Source context", value: sourceContext },
      expectedOutcome && { label: "Expected outcome", value: expectedOutcome },
    ].filter(Boolean) as { label: string; value: ReactNode }[];

    return (
      <Card
        ref={ref}
        title={title}
        description={description}
        className={className}
        {...props}
      >
        <div className="space-y-4">
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <Badge key={badge.label} tone={badge.tone ?? "neutral"}>
                  {badge.label}
                </Badge>
              ))}
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

          <div className="space-y-3">
            {proofPoints.map((point) => (
              <div
                key={point.label}
                className={[
                  "rounded-(--ec-radius-sm) border border-(--ec-color-border)",
                  "bg-(--ec-color-surface-muted) p-3",
                ].join(" ")}
              >
                <p className="text-sm font-semibold text-(--ec-color-text-primary)">
                  {point.label}
                </p>
                <p className="mt-1 text-sm text-(--ec-color-text-secondary)">
                  {point.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  },
);

ValueProofCard.displayName = "ValueProofCard";