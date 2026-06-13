import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '../../lib/utils';

type PillVariant = 'neutral' | 'success' | 'warning' | 'danger';
type PillSize = 'sm' | 'md';

export interface PillProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PillVariant;
  size?: PillSize;
  active?: boolean;
  children: ReactNode;
}

const baseClasses = 'inline-flex items-center justify-center rounded-full border transition-all whitespace-nowrap disabled:pointer-events-none disabled:opacity-50';

const inactiveClasses: Record<PillVariant, string> = {
  neutral: 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300',
  success: 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300',
  warning: 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300',
  danger: 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300',
};

const activeClasses: Record<PillVariant, string> = {
  neutral: 'bg-neutral-100 text-neutral-700 border-neutral-300',
  success: 'bg-[#e6f7f0] text-[#00985F] border-[#00985F]',
  warning: 'bg-amber-100 text-amber-700 border-amber-400',
  danger: 'bg-red-100 text-red-700 border-red-400',
};

const sizeClasses: Record<PillSize, string> = {
  sm: 'px-2.5 py-0.5 text-[11px]',
  md: 'px-3 py-1 text-[12px]',
};

export function Pill(props: PillProps) {
  const {
    variant = 'neutral',
    size = 'md',
    active = false,
    className,
    style,
    children,
    type = 'button',
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={cn(baseClasses, sizeClasses[size], active ? activeClasses[variant] : inactiveClasses[variant], className)}
      style={{ fontWeight: active ? 600 : 400, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
