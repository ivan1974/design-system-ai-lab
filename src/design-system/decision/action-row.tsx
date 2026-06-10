import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import type { ActionPriority, ActionStatus } from "../types/action";

export type ActionRowProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  owner: string;
  dueDate: string;
  priority: ActionPriority;
  status?: ActionStatus;
  context?: string;
  action?: ReactNode;
};

export const ActionRow = forwardRef<HTMLDivElement, ActionRowProps>(
  ({ title, owner, dueDate, priority, status, context, action, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "grid gap-3 border-b border-(--ec-color-border) py-3 last:border-b-0 md:grid-cols-[minmax(0,1fr)_12rem_auto] md:items-start",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0 space-y-1">
          <p className="text-sm font-medium text-(--ec-color-text-primary)">{title}</p>
          {context && <p className="text-sm text-(--ec-color-text-secondary)">{context}</p>}
        </div>
        <div className="text-xs text-(--ec-color-text-muted)">
          <p>Owner: {owner}</p>
          <p>Due: {dueDate}</p>
          <p>Priority: {priority}</p>
          {status && <p>Status: {status}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    );
  },
);

ActionRow.displayName = "ActionRow";
