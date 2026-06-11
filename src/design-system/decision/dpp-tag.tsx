import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { Badge } from "../components/badge";

export type DppValue = "dpp-enabled" | "no-dpp";

export type DppTagProps = HTMLAttributes<HTMLSpanElement> & {
  value: DppValue;
  label?: string;
};

const dppMeta: Record<DppValue, { label: string; tone: "success" | "neutral" }> = {
  "dpp-enabled": {
    label: "DPP Enabled",
    tone: "success",
  },
  "no-dpp": {
    label: "No DPP",
    tone: "neutral",
  },
};

export const DppTag = forwardRef<HTMLSpanElement, DppTagProps>(
  ({ value, label, className = "", ...props }, ref) => {
    const meta = dppMeta[value];

    return (
      <Badge ref={ref} tone={meta.tone} className={className} {...props}>
        {label ?? meta.label}
      </Badge>
    );
  },
);

DppTag.displayName = "DppTag";
