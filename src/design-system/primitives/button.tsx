import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'filter' | 'icon';
type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  active?: boolean;
  icon?: ReactNode;
}

const baseClasses = 'inline-flex items-center justify-center transition-all whitespace-nowrap disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'gap-1.5 rounded-lg text-white text-[13px] hover:opacity-90',
  secondary: 'gap-1.5 rounded-lg text-neutral-700 text-[13px] border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300',
  ghost: 'rounded-lg text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100',
  filter: 'gap-1.5 rounded-lg text-[13px] border',
  icon: 'rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5',
  md: 'px-4 py-2.5',
};

const iconSizeClasses: Record<ButtonSize, string> = {
  sm: 'h-7 w-7',
  md: 'h-8 w-8',
};

export function Button({
  variant = 'secondary',
  size = 'md',
  active = false,
  icon,
  className,
  style,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  const isPrimary = variant === 'primary';
  const isIcon = variant === 'icon';

  return (
    <button
      type={type}
      className={cn(
        baseClasses,
        variantClasses[variant],
        isIcon ? iconSizeClasses[size] : sizeClasses[size],
        active && variant === 'filter' && 'border-[#00985F] text-[#00985F] bg-[#f0faf5]',
        !active && variant === 'filter' && 'border-neutral-200 text-neutral-600 bg-white hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800',
        className,
      )}
      style={{
        fontWeight: isPrimary ? 600 : 500,
        ...(isPrimary ? { backgroundColor: '#00985F' } : null),
        ...style,
      }}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
