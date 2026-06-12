import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import type { ActionPriority } from "../types/action";
import { actionPriorityLabels } from "../types/action";
import { SemanticPill } from "./semantic-pill";
import type { SemanticPillTone } from "./semantic-pill";

/** @deprecated Use SemanticPill with contract-controlled priority mapping. */
export type PriorityPillProps = HTMLAttributes<HTMLSpanElement> & {
  priority: ActionPriority;
};

const priorityTone: Record<ActionPriority, SemanticPillTone> = {
  critical: "danger",
  high: "danger",
  medium: "warning",
  low: "neutral",
};

/** @deprecated Use SemanticPill with contract-controlled priority mapping. */
export const PriorityPill = forwardRef<HTMLSpanElement, PriorityPillProps>(
  ({ priority, className = "", ...props }, ref) => {
    return (
      <SemanticPill ref={ref} tone={priorityTone[priority]} className={className} {...props}>
        {actionPriorityLabels[priority]}
      </SemanticPill>
    );
  },
);

PriorityPill.displayName = "PriorityPill";
