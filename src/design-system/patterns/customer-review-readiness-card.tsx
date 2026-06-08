import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { StatusSummary } from "../decision/status-summary";
import type {
  StatusSummaryBadge,
  StatusSummaryItem,
} from "../decision/status-summary";

export type CustomerReviewReadinessCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  customerName: string;
  reviewType?: string;
  reviewDate?: string;
  customerObjective?: string;
  reviewReadiness?: string;
  proofReadiness?: string;
  recommendationReadiness?: string;
  riskStatus?: string;
  actionReadiness?: string;
  validationStatus?: string;
  sourceContext?: string;
  badges?: StatusSummaryBadge[];
  extraItems?: StatusSummaryItem[];
  title?: string;
  description?: string;
};

export const CustomerReviewReadinessCard = forwardRef<
  HTMLElement,
  CustomerReviewReadinessCardProps
>(
  (
    {
      customerName,
      reviewType,
      reviewDate,
      customerObjective,
      reviewReadiness,
      proofReadiness,
      recommendationReadiness,
      riskStatus,
      actionReadiness,
      validationStatus,
      sourceContext,
      badges = [],
      extraItems = [],
      title = "Customer review readiness",
      description = "Customer discussion readiness, proof readiness, recommendation readiness and validation context.",
      ...props
    },
    ref,
  ) => {
    const items: StatusSummaryItem[] = [
      { label: "Customer", value: customerName },
      ...(reviewType ? [{ label: "Review type", value: reviewType }] : []),
      ...(reviewDate ? [{ label: "Review date", value: reviewDate }] : []),
      ...(customerObjective
        ? [{ label: "Customer objective", value: customerObjective }]
        : []),
      ...(reviewReadiness
        ? [{ label: "Review readiness", value: reviewReadiness }]
        : []),
      ...(proofReadiness
        ? [{ label: "Proof readiness", value: proofReadiness }]
        : []),
      ...(recommendationReadiness
        ? [
          {
            label: "Recommendation readiness",
            value: recommendationReadiness,
          },
        ]
        : []),
      ...(riskStatus ? [{ label: "Risk status", value: riskStatus }] : []),
      ...(actionReadiness
        ? [{ label: "Action readiness", value: actionReadiness }]
        : []),
      ...(validationStatus
        ? [{ label: "Validation status", value: validationStatus }]
        : []),
      ...(sourceContext
        ? [{ label: "Source context", value: sourceContext }]
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

CustomerReviewReadinessCard.displayName = "CustomerReviewReadinessCard";