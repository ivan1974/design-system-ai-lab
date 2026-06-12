import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";

export type TabItem = {
  id: string;
  label: ReactNode;
  count?: string | number;
  disabled?: boolean;
};

export type TabsVariant = "underline" | "contained";
export type TabsSize = "sm" | "md";

export type TabsProps = HTMLAttributes<HTMLDivElement> & {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel?: string;
  variant?: TabsVariant;
  size?: TabsSize;
};

const sizeClasses: Record<TabsSize, string> = {
  sm: "h-(--ec-density-control-height-sm) px-3 text-sm",
  md: "h-(--ec-density-control-height-md) px-4 text-sm",
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      tabs,
      value,
      defaultValue,
      onValueChange,
      ariaLabel = "Tabs",
      variant = "underline",
      size = "md",
      className = "",
      ...props
    },
    ref,
  ) => {
    const activeValue = value ?? defaultValue ?? tabs[0]?.id;

    return (
      <div ref={ref} className={className} {...props}>
        <div
          role="tablist"
          aria-label={ariaLabel}
          className={[
            "flex overflow-x-auto",
            variant === "contained"
              ? "gap-1 rounded-(--ec-radius-md) bg-(--ec-color-surface-muted) p-1"
              : "gap-1 border-b border-(--ec-color-border-soft)",
          ].join(" ")}
        >
          {tabs.map((tab) => {
            const active = tab.id === activeValue;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active ? "true" : "false"}
                disabled={tab.disabled}
                className={[
                  "inline-flex items-center gap-2 whitespace-nowrap rounded-(--ec-radius-sm)",
                  "font-medium transition-colors duration-(--ec-transition-fast)",
                  "disabled:pointer-events-none disabled:opacity-45",
                  sizeClasses[size],
                  variant === "contained"
                    ? active
                      ? "bg-(--ec-color-surface) text-(--ec-color-text-primary) shadow-(--ec-shadow-control)"
                      : "text-(--ec-color-text-secondary) hover:bg-(--ec-color-surface-soft) hover:text-(--ec-color-text-primary)"
                    : active
                      ? "border-b-2 border-(--ec-color-primary) text-(--ec-color-text-primary)"
                      : "border-b-2 border-transparent text-(--ec-color-text-secondary) hover:text-(--ec-color-text-primary)",
                ].join(" ")}
                onClick={() => onValueChange?.(tab.id)}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className="rounded-(--ec-radius-pill) bg-(--ec-color-surface-muted) px-2 py-0.5 text-xs text-(--ec-color-text-muted)">
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  },
);

Tabs.displayName = "Tabs";
