import {
  AllFiltersPanel as DesignSystemAllFiltersPanel,
  type FilterOptionStyle,
  type PillColorClasses,
} from '../../design-system/components';
import { filterCategories } from '../data/assets';

interface AllFiltersPanelProps {
  isOpen: boolean;
  activeFilters: Record<string, string[]>;
  onToggleOption: (category: string, option: string) => void;
  onClearAll: () => void;
  onApply: () => void;
  onClose: () => void;
}

// §5 v1.1: Health=Pill style, Coverage/DPP=Tag style
const CATEGORY_STYLE: Record<string, FilterOptionStyle> = {
  'Health': 'pill',
  'Connectivity': 'checkbox',
  'Coverage': 'tag',
  'DPP': 'tag',
  'Status': 'checkbox',
  'Age': 'checkbox',
  'Location': 'checkbox',
  'Asset Type': 'checkbox',
  'Contract Type': 'checkbox',
};

const HEALTH_PILL_COLORS: Record<string, PillColorClasses> = {
  Critical: { bg: 'bg-white', activeBg: 'bg-red-100', text: 'text-neutral-600', activeText: 'text-red-700', border: 'border-neutral-200', activeBorder: 'border-red-400' },
  Poor: { bg: 'bg-white', activeBg: 'bg-orange-100', text: 'text-neutral-600', activeText: 'text-orange-700', border: 'border-neutral-200', activeBorder: 'border-orange-400' },
  Fair: { bg: 'bg-white', activeBg: 'bg-amber-100', text: 'text-neutral-600', activeText: 'text-amber-700', border: 'border-neutral-200', activeBorder: 'border-amber-400' },
  Good: { bg: 'bg-white', activeBg: 'bg-emerald-100', text: 'text-neutral-600', activeText: 'text-emerald-700', border: 'border-neutral-200', activeBorder: 'border-emerald-400' },
  Excellent: { bg: 'bg-white', activeBg: 'bg-[#e6f7f0]', text: 'text-neutral-600', activeText: 'text-[#00985F]', border: 'border-neutral-200', activeBorder: 'border-[#00985F]' },
};

export function AllFiltersPanel({
  isOpen,
  activeFilters,
  onToggleOption,
  onClearAll,
  onApply,
  onClose,
}: AllFiltersPanelProps) {
  return (
    <DesignSystemAllFiltersPanel
      isOpen={isOpen}
      categories={filterCategories}
      optionStyleByCategory={CATEGORY_STYLE}
      pillColorByOption={HEALTH_PILL_COLORS}
      activeFilters={activeFilters}
      onToggleOption={onToggleOption}
      onClearAll={onClearAll}
      onApply={onApply}
      onClose={onClose}
    />
  );
}
