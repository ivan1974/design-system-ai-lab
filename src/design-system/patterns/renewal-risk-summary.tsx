import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { StatusSummary } from "../decision/status-summary";
import type {
  StatusSummaryBadge,
  StatusSummaryItem,
} from "../decision/status-summary";
import type { ProofReadiness } from "../types/evidence";
import { proofReadinessLabels } from "../types/evidence";
import type { CustomerReadiness, ValidationStatus } from "../types/trust";
import { customerReadinessLabels, validationStatusLabels } from "../types/trust";

export type RenewalRiskSummaryProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  customerName: string;
  renewalDate?: string;
  renewalWindow?: string;
  plan?: string;
  contract?: string;
  renewalReadiness?: CustomerReadiness;
  renewalReadinessLabel?: string;
  valueProofStatus?: string;
  recommendationsReviewed?: string;
  overdueActions?: string;
  renewalRiskReason?: string;
  customerObjective?: string;
  proofReadiness?: ProofReadiness;
  proofReadinessLabel?: string;
  validationStatus?: ValidationStatus;
  validationStatusLabel?: string;
  sourceContext?: string;
  badges?: StatusSummaryBadge[];
  extraItems?: StatusSummaryItem[];
  title?: string;
  description?: string;
};

export const RenewalRiskSummary = forwardRef<
  HTMLElement,
  RenewalRiskSummaryProps
>(
  (
    {
      customerName,
      renewalDate,
      renewalWindow,
      plan,
      contract,
      renewalReadiness,
      renewalReadinessLabel,
      valueProofStatus,
      recommendationsReviewed,
      overdueActions,
      renewalRiskReason,
      customerObjective,
      proofReadiness,
      proofReadinessLabel,
      validationStatus,
      validationStatusLabel,
      sourceContext,
      badges = [],
      extraItems = [],
      title = "Renewal risk summary",
      description = "Renewal context, value proof readiness and mitigation signals.",
      ...props
    },
    ref,
  ) => {
    const items: StatusSummaryItem[] = [
      { label: "Customer", value: customerName },
      ...(renewalWindow
        ? [{ label: "Renewal window", value: renewalWindow }]
        : []),
      ...(renewalDate ? [{ label: "Renewal date", value: renewalDate }] : []),
      ...(plan ? [{ label: "Plan", value: plan }] : []),
      ...(contract ? [{ label: "Contract", value: contract }] : []),
      ...(renewalReadiness
        ? [{ label: "Renewal readiness", value: renewalReadinessLabel ?? customerReadinessLabels[renewalReadiness] }]
        : []),
      ...(valueProofStatus
        ? [{ label: "Value proof status", value: valueProofStatus }]
        : []),
      ...(recommendationsReviewed
        ? [
          {
            label: "Recommendations reviewed",
            value: recommendationsReviewed,
          },
        ]
        : []),
      ...(overdueActions
        ? [{ label: "Overdue actions", value: overdueActions }]
        : []),
      ...(renewalRiskReason
        ? [{ label: "Renewal risk reason", value: renewalRiskReason }]
        : []),
      ...(customerObjective
        ? [{ label: "Customer objective", value: customerObjective }]
        : []),
      ...(proofReadiness
        ? [{ label: "Proof readiness", value: proofReadinessLabel ?? proofReadinessLabels[proofReadiness] }]
        : []),
      ...(validationStatus
        ? [{ label: "Validation status", value: validationStatusLabel ?? validationStatusLabels[validationStatus] }]
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

RenewalRiskSummary.displayName = "RenewalRiskSummary";
