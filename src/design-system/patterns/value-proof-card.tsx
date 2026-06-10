import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { BadgeTone } from "../components/badge";
import { Card } from "../components/card";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { SectionBlock, SectionStack } from "../composition/section-stack";
import { SemanticTag } from "../decision/semantic-tag";
import { StatusPill } from "../decision/status-pill";
import type { ProofReadiness } from "../types/evidence";
import { proofReadinessLabels } from "../types/evidence";
import type { ValidationStatus } from "../types/trust";
import { validationStatusLabels } from "../types/trust";

export type ValueProofPoint = {
  label: string;
  value: ReactNode;
};

export type ValueProofBadge = {
  label: string;
  tone?: BadgeTone;
};

export type ValueProofCardMode = "card" | "section" | "compact";

export type ValueProofCardProps = Omit<
  HTMLAttributes<HTMLElement>,
  "title"
> & {
  title?: string;
  description?: string;
  period?: string;
  customerObjective?: string;
  proofStatus?: string;
  proofReadiness?: ProofReadiness;
  proofReadinessLabel?: string;
  validationStatus?: ValidationStatus;
  validationStatusLabel?: string;
  sourceContext?: string;
  expectedOutcome?: string;
  badges?: ValueProofBadge[];
  proofPoints: ValueProofPoint[];
  mode?: ValueProofCardMode;
};

const proofReadinessTone: Record<ProofReadiness, "neutral" | "warning" | "success"> = {
  "not-available": "neutral",
  "expected-only": "warning",
  "internal-proof": "warning",
  "customer-ready-proof": "success",
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
      proofReadinessLabel,
      validationStatus,
      validationStatusLabel,
      sourceContext,
      expectedOutcome,
      badges = [],
      proofPoints,
      mode = "card",
      className = "",
      ...props
    },
    ref,
  ) => {
    const content = (
      <SectionStack gap="sm">
        {(badges.length > 0 || proofReadiness) && (
          <div className="flex flex-wrap gap-2">
            {proofReadiness && <StatusPill tone={proofReadinessTone[proofReadiness]}>{proofReadinessLabel ?? proofReadinessLabels[proofReadiness]}</StatusPill>}
            {badges.map((badge) => (
              <SemanticTag key={badge.label} tone={badge.tone ?? "neutral"}>{badge.label}</SemanticTag>
            ))}
          </div>
        )}

        <SectionBlock title="Proof context">
          <KeyValueList columns={mode === "compact" ? 2 : 3}>
            {period && <KeyValueRow label="Period" value={period} />}
            {customerObjective && <KeyValueRow label="Customer objective" value={customerObjective} />}
            {proofStatus && <KeyValueRow label="Proof status" value={proofStatus} />}
            {validationStatus && <KeyValueRow label="Validation" value={validationStatusLabel ?? validationStatusLabels[validationStatus]} />}
            {sourceContext && <KeyValueRow label="Source context" value={sourceContext} />}
            {expectedOutcome && <KeyValueRow label="Expected outcome" value={expectedOutcome} helper="Expected outcome is not proven value." />}
          </KeyValueList>
        </SectionBlock>

        <SectionBlock title="Proof points">
          <div className="divide-y divide-(--ec-color-border)">
            {proofPoints.map((point) => (
              <div key={point.label} className="py-3 first:pt-0 last:pb-0">
                <p className="text-sm font-medium text-(--ec-color-text-primary)">{point.label}</p>
                <p className="mt-1 text-sm text-(--ec-color-text-secondary)">{point.value}</p>
              </div>
            ))}
          </div>
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

ValueProofCard.displayName = "ValueProofCard";
