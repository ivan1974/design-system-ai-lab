import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { SemanticPill } from "./semantic-pill";
import type { SemanticPillTone } from "./semantic-pill";

/** @deprecated Use SemanticPill for public generation. */
export type StatusPillTone = SemanticPillTone;

/** @deprecated Use SemanticPill for public generation. */
export type StatusPillProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: StatusPillTone;
  children: ReactNode;
};

/** @deprecated Use SemanticPill for public generation. */
export const StatusPill = forwardRef<HTMLSpanElement, StatusPillProps>(
  ({ tone = "neutral", children, className = "", ...props }, ref) => {
    return (
      <SemanticPill ref={ref} tone={tone} className={className} {...props}>
        {children}
      </SemanticPill>
    );
  },
);

StatusPill.displayName = "StatusPill";
