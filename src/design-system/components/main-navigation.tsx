import { forwardRef } from "react";
import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "./button";
import { Input } from "../forms/input";

export type MainNavigationProps = HTMLAttributes<HTMLElement> & {
  logo?: ReactNode;
  productName?: string;
  searchPlaceholder?: string;
  helpLabel?: string;
  userName?: string;
  userAvatar?: ReactNode;
};

export const MainNavigation = forwardRef<HTMLElement, MainNavigationProps>(
  (
    {
      logo = "Product logo",
      productName = "Workspace",
      searchPlaceholder = "Search",
      helpLabel = "Help",
      userName = "User",
      userAvatar,
      className = "",
      ...props
    },
    ref,
  ) => (
    <nav
      ref={ref}
      aria-label="Main navigation"
      className={[
        "flex h-16 items-center gap-4 border-b border-(--ec-color-border) bg-(--ec-color-surface) px-6",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="flex shrink-0 items-center gap-3">
        <div className="text-sm font-semibold text-(--ec-color-text-primary)">{logo}</div>
        <div className="h-6 w-px bg-(--ec-color-border)" aria-hidden="true" />
        <div className="text-sm font-semibold text-(--ec-color-text-primary)">{productName}</div>
      </div>
      <div className="min-w-64 flex-1">
        <Input aria-label="Global search" placeholder={searchPlaceholder} />
      </div>
      <Button variant="ghost" size="sm">{helpLabel}</Button>
      <div className="flex items-center gap-2 text-sm text-(--ec-color-text-primary)">
        {userAvatar ?? <span className="grid h-8 w-8 place-items-center rounded-full bg-(--ec-color-surface-muted) text-xs">U</span>}
        <span>{userName}</span>
      </div>
    </nav>
  ),
);

MainNavigation.displayName = "MainNavigation";
