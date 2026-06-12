import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import type { ActionPriority, ActionStatus } from "../types/action";
import { actionPriorityLabels, actionStatusLabels } from "../types/action";
import type { ProofReadiness } from "../types/evidence";
import { proofReadinessLabels } from "../types/evidence";
import type { ValidationStatus } from "../types/trust";
import { validationStatusLabels } from "../types/trust";
import { SemanticPill } from "./semantic-pill";
import type { SemanticPillTone } from "./semantic-pill";

export type { ActionPriority, ActionStatus } from "../types/action";

export type ActionCardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  owner: string;
  dueDate: string;
  priority: ActionPriority;
  status?: ActionStatus;
  context?: string;
  assetContext?: string;
  sourceContext?: string;
  validationStatus?: ValidationStatus;
  validationStatusLabel?: string;
  proofReadiness?: ProofReadiness;
  proofReadinessLabel?: string;
};

const statusTone: Record<ActionStatus, SemanticPillTone> = {
  todo: "neutral",
  "in-progress": "primary",
  in_progress: "primary",
  blocked: "warning",
  done: "success",
};

const priorityTone: Record<ActionPriority, SemanticPillTone> = {
  critical: "danger",
  high: "danger",
  medium: "warning",
  low: "neutral",
};

export const ActionCard = forwardRef<HTMLElement, ActionCardProps>(
  (
    {
      title,
      owner,
      dueDate,
      priority,
      status,
      context,
      assetContext,
      sourceContext,
      validationStatus,
      validationStatusLabel,
      proofReadiness,
      proofReadinessLabel,
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
              <div className="flex flex-wrap gap-2">
                <SemanticPill tone={priorityTone[priority]}>{actionPriorityLabels[priority]}</SemanticPill>
                {status && <SemanticPill tone={statusTone[status]}>{actionStatusLabels[status]}</SemanticPill>}
              </div>
              <h3 className="text-sm font-semibold text-(--ec-color-text-primary)">{title}</h3>
              {context && <p className="text-sm text-(--ec-color-text-secondary)">{context}</p>}
            </div>
          </div>

          <KeyValueList columns={2}>
            <KeyValueRow label="Owner" value={owner} />
            <KeyValueRow label="Due" value={dueDate} />
            {assetContext && <KeyValueRow label="Asset context" value={assetContext} />}
            {sourceContext && <KeyValueRow label="Source context" value={sourceContext} />}
            {validationStatus && <KeyValueRow label="Validation" value={validationStatusLabel ?? validationStatusLabels[validationStatus]} />}
            {proofReadiness && <KeyValueRow label="Proof" value={proofReadinessLabel ?? proofReadinessLabels[proofReadiness]} />}
          </KeyValueList>
        </div>
      </article>
    );
  },
);

ActionCard.displayName = "ActionCard";
