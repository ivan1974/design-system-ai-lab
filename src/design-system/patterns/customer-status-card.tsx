import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { StatusSummary } from "../decision/status-summary";
import type {
  StatusSummaryBadge,
  StatusSummaryItem,
} from "../decision/status-summary";

export type CustomerStatusCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  customerName: string;
  description?: string;
  plan?: string;
  contract?: string;
  csm?: string;
  renewalDate?: string;
  assetsCovered?: string;
  coverage?: string;
  customerObjective?: string;
  sourceContext?: string;
  validationStatus?: string;
  proofReadiness?: string;
  badges?: StatusSummaryBadge[];
  extraItems?: StatusSummaryItem[];
  title?: string;
};

export const CustomerStatusCard = forwardRef<
  HTMLElement,
  CustomerStatusCardProps
>(
  (
    {
      customerName,
      description = "Current customer context and service coverage.",
      plan,
      contract,
      csm,
      renewalDate,
      assetsCovered,
      coverage,
      customerObjective,
      sourceContext,
      validationStatus,
      proofReadiness,
      badges = [],
      extraItems = [],
      title = "Customer status",
      ...props
    },
    ref,
  ) => {
    const items: StatusSummaryItem[] = [
      { label: "Customer", value: customerName },
      ...(plan ? [{ label: "Plan", value: plan }] : []),
      ...(contract ? [{ label: "Contract", value: contract }] : []),
      ...(csm ? [{ label: "CSM", value: csm }] : []),
      ...(renewalDate ? [{ label: "Renewal date", value: renewalDate }] : []),
      ...(assetsCovered
        ? [{ label: "Assets covered", value: assetsCovered }]
        : []),
      ...(coverage ? [{ label: "Coverage", value: coverage }] : []),
      ...(customerObjective
        ? [{ label: "Customer objective", value: customerObjective }]
        : []),
      ...(sourceContext
        ? [{ label: "Source context", value: sourceContext }]
        : []),
      ...(validationStatus
        ? [{ label: "Validation status", value: validationStatus }]
        : []),
      ...(proofReadiness
        ? [{ label: "Proof readiness", value: proofReadiness }]
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

CustomerStatusCard.displayName = "CustomerStatusCard";