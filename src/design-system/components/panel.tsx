import { forwardRef } from "react";
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import { Heading, Text } from "./typography";

export type PanelCloseProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export type PanelHeaderProps = HTMLAttributes<HTMLElement> & {
  title: string;
  description?: string;
  meta?: ReactNode;
  actions?: ReactNode;
  onClose?: () => void;
  closeLabel?: string;
};

export type PanelBodyProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export type PanelFooterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export type SlideOverPanelProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
  side?: "right";
  size?: "md" | "lg" | "xl";
  modal?: boolean;
};

const slideOverSizeClasses: Record<NonNullable<SlideOverPanelProps["size"]>, string> = {
  md: "max-w-md",
  lg: "max-w-xl",
  xl: "max-w-2xl",
};

export const PanelClose = forwardRef<HTMLButtonElement, PanelCloseProps>(
  ({ label = "Close panel", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        className={[
          "inline-flex h-9 w-9 items-center justify-center rounded-(--ec-radius-sm)",
          "text-(--ec-color-text-muted) transition-colors hover:bg-(--ec-color-surface-muted) hover:text-(--ec-color-text-primary)",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ec-color-primary) focus-visible:ring-offset-2",
          className,
        ].join(" ")}
        {...props}
      >
        {children ?? <span aria-hidden="true">×</span>}
      </button>
    );
  },
);

export const PanelHeader = forwardRef<HTMLElement, PanelHeaderProps>(
  ({ title, description, meta, actions, onClose, closeLabel, className = "", ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={[
          "flex items-start justify-between gap-6 border-b border-(--ec-color-border-soft)",
          "bg-(--ec-color-surface) px-7 py-7",
          className,
        ].join(" ")}
        {...props}
      >
        <div className="min-w-0 space-y-3">
          <Heading level={2} size="section">{title}</Heading>
          {description && <Text className="max-w-prose">{description}</Text>}
          {meta && <div className="pt-2">{meta}</div>}
        </div>
        {(actions || onClose) && (
          <div className="flex shrink-0 items-start gap-2">
            {actions}
            {onClose && <PanelClose label={closeLabel} onClick={onClose} />}
          </div>
        )}
      </header>
    );
  },
);

export const PanelBody = forwardRef<HTMLDivElement, PanelBodyProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div ref={ref} className={["space-y-8 p-7", className].join(" ")} {...props}>
        {children}
      </div>
    );
  },
);

export const PanelFooter = forwardRef<HTMLDivElement, PanelFooterProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "border-t border-(--ec-color-border-soft) bg-(--ec-color-surface) px-7 py-5",
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export const SlideOverPanel = forwardRef<HTMLDivElement, SlideOverPanelProps>(
  ({ open, onOpenChange, children, side = "right", size = "lg", modal = false, className = "", ...props }, ref) => {
    const shouldRenderBackdrop = modal && open;

    return (
      <>
        {shouldRenderBackdrop && (
          <button
            type="button"
            aria-label="Close overlay"
            className="fixed inset-0 z-40 bg-black/10"
            onClick={() => onOpenChange?.(false)}
          />
        )}
        <div
          ref={ref}
          aria-hidden={!open}
          data-open={open ? "true" : "false"}
          data-side={side}
          className={[
            "fixed inset-y-0 right-0 z-50 w-full border-l border-(--ec-color-border-soft) bg-(--ec-color-surface)",
            slideOverSizeClasses[size],
            "transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
            className,
          ].join(" ")}
          {...props}
        >
          {children}
        </div>
      </>
    );
  },
);

PanelClose.displayName = "PanelClose";
PanelHeader.displayName = "PanelHeader";
PanelBody.displayName = "PanelBody";
PanelFooter.displayName = "PanelFooter";
SlideOverPanel.displayName = "SlideOverPanel";
