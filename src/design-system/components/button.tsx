import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-(--ec-color-primary) text-(--ec-color-primary-foreground) hover:bg-(--ec-color-primary-hover)",
  secondary:
    "bg-(--ec-color-surface) text-(--ec-color-text-primary) border border-(--ec-color-border) hover:bg-(--ec-color-surface-muted)",
  ghost:
    "bg-transparent text-(--ec-color-text-secondary) hover:bg-(--ec-color-surface-muted)",
  danger: "bg-(--ec-color-danger) text-white hover:opacity-90",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center rounded-(--ec-radius-sm) font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ec-color-primary) focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";