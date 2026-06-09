import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { KeyValueList, KeyValueRow } from "../components/key-value-list";
import { PriorityPill } from "./priority-pill";
import { StatusPill } from "./status-pill";

export type ActionPriority = "high" | "medium" | "low";
export type ActionStatus = "todo" | "in_progress" | "blocked" | "done";

export type ActionCardProps = HTMLAttributes<HTMLElement> & {
  title: string;
  owner: string;
  dueDate: string;
  priority: ActionPriority;
  status?: ActionStatus;
  context?: string;
  assetContext?: string;
  sourceContext?: string;
  validationStatus?: string;
  proofContext?: string;
};

const statusTone: Record<ActionStatus, "neutral" | "primary" | "warning" | "success"> = {
  todo: "neutral",
  in_progress: "primary",
  blocked: "warning",
  done: "success",
};

const statusLabel: Record<ActionStatus, string> = {
  todo: "To do",
  in_progress: "In progress",
  blocked: "Blocked",
  done: "Done",
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
      proofContext,
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
                <PriorityPill priority={priority} />
                {status && <StatusPill tone={statusTone[status]}>{statusLabel[status]}</StatusPill>}
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
            {validationStatus && <KeyValueRow label="Validation" value={validationStatus} />}
            {proofContext && <KeyValueRow label="Proof" value={proofContext} />}
          </KeyValueList>
        </div>
      </article>
    );
  },
);

ActionCard.displayName = "ActionCard";
