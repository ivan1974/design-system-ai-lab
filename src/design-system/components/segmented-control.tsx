import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type SegmentedControlItem = {
  id: string;
  label: ReactNode;
  disabled?: boolean;
};

export type SegmentedControlProps = HTMLAttributes<HTMLDivElement> & {
  items: SegmentedControlItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel?: string;
};

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  ({ items, value, defaultValue, onValueChange, ariaLabel = "Segmented control", className = "", ...props }, ref) => {
    const activeValue = value ?? defaultValue ?? items[0]?.id;

    return (
      <div
        ref={ref}
        role="group"
        aria-label={ariaLabel}
        className={[
          "inline-flex rounded-(--ec-radius-md) bg-(--ec-color-surface-muted) p-1",
          className,
        ].join(" ")}
        {...props}
      >
        {items.map((item) => {
          const active = item.id === activeValue;

          return (
            <button
              key={item.id}
              type="button"
              disabled={item.disabled}
              aria-pressed={active}
              className={[
                "rounded-(--ec-radius-sm) px-3.5 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-45",
                active
                  ? "bg-(--ec-color-surface) text-(--ec-color-text-primary)"
                  : "text-(--ec-color-text-secondary) hover:text-(--ec-color-text-primary)",
              ].join(" ")}
              onClick={() => onValueChange?.(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    );
  },
);

SegmentedControl.displayName = "SegmentedControl";
