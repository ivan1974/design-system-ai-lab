import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { SemanticTag } from "./semantic-tag";

export type DppValue = "dpp-enabled" | "no-dpp";

/** @deprecated Use SemanticTag with contract-controlled DPP mapping. */
export type DppTagProps = HTMLAttributes<HTMLSpanElement> & {
  value: DppValue;
  label?: string;
};

const dppMeta: Record<DppValue, { label: string; tone: "success" | "neutral" }> = {
  "dpp-enabled": { label: "DPP enabled", tone: "success" },
  "no-dpp": { label: "No DPP", tone: "neutral" },
};

/** @deprecated Use SemanticTag with contract-controlled DPP mapping. */
export const DppTag = forwardRef<HTMLSpanElement, DppTagProps>(
  ({ value, label, className = "", ...props }, ref) => {
    const meta = dppMeta[value];

    return (
      <SemanticTag ref={ref} tone={meta.tone} className={className} {...props}>
        {label ?? meta.label}
      </SemanticTag>
    );
  },
);

DppTag.displayName = "DppTag";
