import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { Badge } from "../components/badge";

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

const priorityTone: Record<ActionPriority, "danger" | "warning" | "neutral"> = {
  high: "danger",
  medium: "warning",
  low: "neutral",
};

const priorityLabel: Record<ActionPriority, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
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
    const hasContext =
      context ||
      assetContext ||
      sourceContext ||
      validationStatus ||
      proofContext;

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
              <Badge tone={priorityTone[priority]}>
                Priority: {priorityLabel[priority]}
              </Badge>

              {status && (
                <Badge tone={statusTone[status]}>
                  {statusLabel[status]}
                </Badge>
              )}
            </div>

            <h3 className="text-sm font-semibold text-(--ec-color-text-primary)">
              {title}
            </h3>

            <dl className="mt-2 space-y-1 text-sm">
              <div>
                <dt className="sr-only">Owner</dt>
                <dd className="text-(--ec-color-text-secondary)">
                  Owner: {owner}
                </dd>
              </div>

              <div>
                <dt className="sr-only">Due date</dt>
                <dd className="text-(--ec-color-text-muted)">
                  Due: {dueDate}
                </dd>
              </div>
            </dl>

            {hasContext && (
              <dl className="mt-3 space-y-1 text-xs text-(--ec-color-text-muted)">
                {context && (
                  <div>
                    <dt className="sr-only">Context</dt>
                    <dd>Context: {context}</dd>
                  </div>
                )}

                {assetContext && (
                  <div>
                    <dt className="sr-only">Asset context</dt>
                    <dd>Asset context: {assetContext}</dd>
                  </div>
                )}

                {sourceContext && (
                  <div>
                    <dt className="sr-only">Source context</dt>
                    <dd>Source context: {sourceContext}</dd>
                  </div>
                )}

                {validationStatus && (
                  <div>
                    <dt className="sr-only">Validation status</dt>
                    <dd>Validation: {validationStatus}</dd>
                  </div>
                )}

                {proofContext && (
                  <div>
                    <dt className="sr-only">Proof context</dt>
                    <dd>Proof: {proofContext}</dd>
                  </div>
                )}
              </dl>
            )}
          </div>
        </div>
      </article>
    );
  },
);

ActionCard.displayName = "ActionCard";