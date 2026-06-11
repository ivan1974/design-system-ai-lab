import { cloneElement, isValidElement, useId, useState } from "react";
import type { ReactElement, ReactNode } from "react";

export type PopoverSide = "top" | "right" | "bottom" | "left";
export type PopoverAlign = "start" | "center" | "end";

export type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
  side?: PopoverSide;
  align?: PopoverAlign;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const sideClasses: Record<PopoverSide, string> = {
  top: "bottom-full mb-2",
  right: "left-full ml-2 top-0",
  bottom: "top-full mt-2",
  left: "right-full mr-2 top-0",
};

const alignClasses: Record<PopoverAlign, string> = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
};

export function Popover({
  trigger,
  children,
  side = "bottom",
  align = "start",
  open,
  onOpenChange,
}: PopoverProps) {
  const fallbackId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isOpen = open ?? uncontrolledOpen;

  function setOpen(nextOpen: boolean) {
    onOpenChange?.(nextOpen);
    if (open === undefined) {
      setUncontrolledOpen(nextOpen);
    }
  }

  const triggerProps = {
    "aria-controls": fallbackId,
    "aria-expanded": isOpen,
    onClick: () => setOpen(!isOpen),
  };

  const renderedTrigger = isValidElement(trigger)
    ? cloneElement(trigger as ReactElement, triggerProps)
    : (
      <button type="button" {...triggerProps}>
        {trigger}
      </button>
    );

  return (
    <span className="relative inline-flex">
      {renderedTrigger}
      {isOpen ? (
        <span
          id={fallbackId}
          role="dialog"
          className={[
            "absolute z-400 min-w-64 rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface) p-4 text-sm text-(--ec-color-text-primary) shadow-md",
            sideClasses[side],
            side === "top" || side === "bottom" ? alignClasses[align] : "",
          ].join(" ")}
        >
          {children}
        </span>
      ) : null}
    </span>
  );
}
