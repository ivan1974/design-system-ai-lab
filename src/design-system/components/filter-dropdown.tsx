import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../internal/ui/dropdown-menu';
import { Badge } from '../primitives';

export interface FilterDropdownOption {
  label: string;
  value: string;
}

export interface FilterDropdownProps {
  label: string;
  options: FilterDropdownOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
  className?: string;
}

export function FilterDropdown({
  label,
  options,
  selectedValues,
  onToggle,
  className = '',
}: FilterDropdownProps) {
  const count = selectedValues.length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] border transition-all duration-150 whitespace-nowrap ${count > 0 ? 'border-[#00985F] text-[#00985F] bg-[#f0faf5]' : 'border-neutral-200 text-neutral-600 bg-white hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-800'} ${className}`.trim()}
          style={{ fontWeight: count > 0 ? 600 : 400 }}
        >
          {label}
          {count > 0 && (
            <Badge
              variant="success"
              size="xs"
              shape="pill"
              className="w-4 h-4 px-0 border-0 bg-[#00985F] text-white justify-center shrink-0"
              style={{ fontWeight: 700 }}
            >
              {count}
            </Badge>
          )}
          <ChevronDown size={12} className="text-neutral-400" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {options.map(option => {
          const checked = selectedValues.includes(option.value);
          return (
            <DropdownMenuCheckboxItem
              key={option.value}
              checked={checked}
              onCheckedChange={() => onToggle(option.value)}
              onSelect={event => event.preventDefault()}
              className="justify-between pr-3"
              style={{ fontWeight: checked ? 500 : 400 }}
            >
              <span>{option.label}</span>
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
