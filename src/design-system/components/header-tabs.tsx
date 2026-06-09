import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

import { Tabs } from "./tabs";
import type { TabItem } from "./tabs";

export type HeaderTabsProps = HTMLAttributes<HTMLDivElement> & {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel?: string;
};

export const HeaderTabs = forwardRef<HTMLDivElement, HeaderTabsProps>(
  ({ tabs, value, defaultValue, onValueChange, ariaLabel = "Header tabs", className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["border-b border-(--ec-color-border-soft)", className].join(" ")}
        {...props}
      >
        <Tabs
          tabs={tabs}
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          ariaLabel={ariaLabel}
          variant="underline"
          size="md"
        />
      </div>
    );
  },
);

HeaderTabs.displayName = "HeaderTabs";
