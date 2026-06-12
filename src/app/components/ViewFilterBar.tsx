import { List, Globe, Zap } from 'lucide-react';
import { ViewFilterBar as DesignSystemViewFilterBar, type ViewFilterBarView } from '../../design-system/components';
import { quickFilterOptions } from '../data/assets';

type View = 'list' | 'geography' | 'electrical';

interface ViewFilterBarProps {
  activeView: View;
  onViewChange: (v: View) => void;
  onAllFilters: () => void;
  activeFilterCount: number;
  activeFilters: Record<string, string[]>;
  onToggleOption: (category: string, option: string) => void;
}

const VIEWS: Array<ViewFilterBarView<View>> = [
  { id: 'list', label: 'List', icon: <List size={13} /> },
  { id: 'geography', label: 'Geography', icon: <Globe size={13} /> },
  { id: 'electrical', label: 'Electrical', icon: <Zap size={13} /> },
];

export function ViewFilterBar({
  activeView,
  onViewChange,
  onAllFilters,
  activeFilterCount,
  activeFilters,
  onToggleOption,
}: ViewFilterBarProps) {
  return (
    <DesignSystemViewFilterBar
      views={VIEWS}
      activeView={activeView}
      quickFilterOptions={quickFilterOptions}
      activeFilterCount={activeFilterCount}
      activeFilters={activeFilters}
      onViewChange={onViewChange}
      onAllFilters={onAllFilters}
      onToggleOption={onToggleOption}
    />
  );
}
