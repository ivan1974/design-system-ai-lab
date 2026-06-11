import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";

export type TooltipProps = {
  children: ReactNode;
  content: ReactNode;
  side?: TooltipSide;
  align?: TooltipAlign;
  delayDuration?: number;
};

export function Tooltip({
  children,
  content,
  side = "top",
  align = "center",
  delayDuration = 300,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={6}
            className="z-400 max-w-xs rounded-(--ec-radius-sm) border border-(--ec-color-border) bg-(--ec-color-surface) px-3 py-2 text-xs leading-relaxed text-(--ec-color-text-primary) shadow-sm"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-(--ec-color-surface)" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
