import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

export type ScrollAreaMaxHeight = "panel" | "list" | "none";

export type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
  maxHeight?: ScrollAreaMaxHeight;
};

const maxHeightClasses: Record<ScrollAreaMaxHeight, string> = {
  panel: "max-h-[calc(100dvh-12rem)]",
  list: "max-h-[32rem]",
  none: "",
};

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className = "", maxHeight = "none", ...props }, ref) => (
    <div
      ref={ref}
      className={[
        "min-h-0 overflow-auto overscroll-contain",
        "scrollbar-thin scrollbar-thumb-(--ec-color-border) scrollbar-track-transparent",
        maxHeightClasses[maxHeight],
        className,
      ].join(" ")}
      {...props}
    />
  ),
);

ScrollArea.displayName = "ScrollArea";
