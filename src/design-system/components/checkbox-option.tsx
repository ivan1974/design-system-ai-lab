import { Checkbox } from '../internal/ui/checkbox';

export interface CheckboxOptionProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function CheckboxOption({
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
}: CheckboxOptionProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={checked}
      onClick={() => onChange(!checked)}
      className={`flex w-full items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors group select-none text-left disabled:cursor-not-allowed disabled:opacity-50 ${className}`.trim()}
    >
      <Checkbox
        checked={checked}
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none group-hover:border-neutral-400"
      />
      <span
        className={`text-[13px] transition-colors ${checked ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-800'}`}
        style={{ fontWeight: checked ? 500 : 400 }}
      >
        {label}
      </span>
    </button>
  );
}
