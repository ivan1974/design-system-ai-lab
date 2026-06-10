import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Card } from "../components/card";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { SectionBlock, SectionStack } from "../composition/section-stack";
import { SemanticTag } from "../decision/semantic-tag";
import type { StatusSummaryBadge, StatusSummaryItem } from "../decision/status-summary";

export type CustomerStatusCardMode = "card" | "section" | "compact";

export type CustomerStatusCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  customerName: string;
  description?: string;
  plan?: string;
  contract?: string;
  accountOwner?: string;
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
  mode?: CustomerStatusCardMode;
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
      accountOwner,
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
      mode = "card",
      className = "",
      ...props
    },
    ref,
  ) => {
    const content = (
      <SectionStack gap="sm">
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <SemanticTag key={badge.label} tone={badge.tone ?? "neutral"}>{badge.label}</SemanticTag>
            ))}
          </div>
        )}
        <SectionBlock title="Customer context">
          <KeyValueList columns={mode === "compact" ? 2 : 3}>
            <KeyValueRow label="Customer" value={customerName} />
            {plan && <KeyValueRow label="Plan" value={plan} />}
            {contract && <KeyValueRow label="Contract" value={contract} />}
            {accountOwner && <KeyValueRow label="Account owner" value={accountOwner} />}
            {renewalDate && <KeyValueRow label="Renewal date" value={renewalDate} />}
            {assetsCovered && <KeyValueRow label="Assets covered" value={assetsCovered} />}
            {coverage && <KeyValueRow label="Coverage" value={coverage} />}
            {customerObjective && <KeyValueRow label="Customer objective" value={customerObjective} />}
            {sourceContext && <KeyValueRow label="Source context" value={sourceContext} />}
            {validationStatus && <KeyValueRow label="Validation" value={validationStatus} />}
            {proofReadiness && <KeyValueRow label="Proof readiness" value={proofReadiness} />}
            {extraItems.map((item) => (
              <KeyValueRow key={item.label} label={item.label} value={item.value} />
            ))}
          </KeyValueList>
        </SectionBlock>
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
        {mode !== "compact" && (
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

CustomerStatusCard.displayName = "CustomerStatusCard";
