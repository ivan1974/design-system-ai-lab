import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "outline";
export type ButtonSize = "sm" | "md" | "lg" | "icon";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant; size?: ButtonSize; children: ReactNode };
const variantClasses: Record<ButtonVariant, string> = { primary: "bg-(--ec-color-primary) text-(--ec-color-primary-foreground) hover:bg-(--ec-color-primary-hover)", secondary: "border border-(--ec-color-border) bg-(--ec-color-surface) text-(--ec-color-text-primary) hover:bg-(--ec-color-surface-muted)", ghost: "bg-transparent text-(--ec-color-text-secondary) hover:bg-(--ec-color-surface-muted) hover:text-(--ec-color-text-primary)", danger: "bg-(--ec-color-danger) text-white hover:opacity-90", outline: "border border-(--ec-color-border) bg-transparent text-(--ec-color-text-primary) hover:bg-(--ec-color-surface-muted)" };
const sizeClasses: Record<ButtonSize, string> = { sm: "h-9 px-3.5 text-sm", md: "h-10 px-4 text-sm", lg: "h-11 px-6 text-base", icon: "h-9 w-9 p-0" };
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = "primary", size = "md", className = "", type = "button", children, ...props }, ref) => (<button ref={ref} type={type} className={["inline-flex items-center justify-center gap-2 rounded-(--ec-radius-sm) font-medium transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ec-color-primary) focus-visible:ring-offset-2", "disabled:pointer-events-none disabled:opacity-50", variantClasses[variant], sizeClasses[size], className].join(" ")} {...props}>{children}</button>));
Button.displayName = "Button";
