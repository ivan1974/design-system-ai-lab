import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { ActionPriority } from "./action-card";

export type PriorityPillProps = HTMLAttributes<HTMLSpanElement> & {
  priority: ActionPriority;
};

const priorityClasses: Record<ActionPriority, string> = {
  high: "bg-red-50 text-(--ec-color-danger)",
  medium: "bg-amber-50 text-(--ec-color-warning)",
  low: "bg-(--ec-color-surface-muted) text-(--ec-color-text-secondary)",
};

export const PriorityPill = forwardRef<HTMLSpanElement, PriorityPillProps>(
  ({ priority, className = "", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={[
          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
          priorityClasses[priority],
          className,
        ].join(" ")}
        {...props}
      >
        {priority} priority
      </span>
    );
  },
);

PriorityPill.displayName = "PriorityPill";
