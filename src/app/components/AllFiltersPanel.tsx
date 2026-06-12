import { X } from 'lucide-react';
import { Button } from '../../design-system/primitives';
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
type OptionStyle = 'pill' | 'tag' | 'checkbox';
const CATEGORY_STYLE: Record<string, OptionStyle> = {
  'Health':        'pill',
  'Connectivity':  'checkbox',
  'Coverage':      'tag',
  'DPP':           'tag',
  'Status':        'checkbox',
  'Age':           'checkbox',
  'Location':      'checkbox',
  'Asset Type':    'checkbox',
  'Contract Type': 'checkbox',
};

const HEALTH_PILL_COLORS: Record<string, { bg: string; activeBg: string; text: string; activeText: string; border: string; activeBorder: string }> = {
  Critical: { bg: 'bg-white', activeBg: 'bg-red-100',    text: 'text-neutral-600', activeText: 'text-red-700',    border: 'border-neutral-200', activeBorder: 'border-red-400' },
  Poor:     { bg: 'bg-white', activeBg: 'bg-orange-100', text: 'text-neutral-600', activeText: 'text-orange-700', border: 'border-neutral-200', activeBorder: 'border-orange-400' },
  Fair:     { bg: 'bg-white', activeBg: 'bg-amber-100',  text: 'text-neutral-600', activeText: 'text-amber-700',  border: 'border-neutral-200', activeBorder: 'border-amber-400' },
  Good:     { bg: 'bg-white', activeBg: 'bg-emerald-100',text: 'text-neutral-600', activeText: 'text-emerald-700',border: 'border-neutral-200', activeBorder: 'border-emerald-400' },
  Excellent:{ bg: 'bg-white', activeBg: 'bg-[#e6f7f0]', text: 'text-neutral-600', activeText: 'text-[#00985F]',  border: 'border-neutral-200', activeBorder: 'border-[#00985F]' },
};

export function AllFiltersPanel({
  isOpen, activeFilters, onToggleOption, onClearAll, onApply, onClose,
}: AllFiltersPanelProps) {
  const totalActive = Object.values(activeFilters).reduce((s, a) => s + a.length, 0);

  return (
    <>
      <div
        className={`fixed inset-0 top-[60px] z-30 bg-black/20 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed left-0 top-[60px] bottom-0 w-[300px] bg-white border-r border-neutral-200 z-40 flex flex-col transition-transform duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ boxShadow: isOpen ? '4px 0 24px rgba(0,0,0,0.08)' : 'none' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-[14px] text-neutral-900" style={{ fontWeight: 700 }}>Filters</span>
            {totalActive > 0 && (
              <span
                className="h-5 min-w-5 px-1.5 rounded-full text-[11px] text-white flex items-center justify-center"
                style={{ backgroundColor: '#00985F', fontWeight: 700 }}
              >
                {totalActive}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-md flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Filter categories — order preserved per spec §5 */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-5">
          {Object.entries(filterCategories).map(([category, options]) => {
            const style = CATEGORY_STYLE[category] ?? 'checkbox';
            const selectedInGroup = (activeFilters[category] || []).length;
            return (
              <div key={category}>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10.5px] text-neutral-500 uppercase tracking-widest" style={{ fontWeight: 700 }}>
                    {category}
                  </span>
                  {selectedInGroup > 0 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded-full" style={{ backgroundColor: '#f0faf5', color: '#00985F', fontWeight: 700 }}>
                      {selectedInGroup}
                    </span>
                  )}
                </div>

                {style === 'pill' && (
                  // §5 v1.1: Health — Pill style (horizontal row of pills)
                  <div className="flex flex-wrap gap-1.5">
                    {options.map(opt => {
                      const checked = (activeFilters[category] || []).includes(opt);
                      const hc = HEALTH_PILL_COLORS[opt];
                      return (
                        <button
                          key={opt}
                          onClick={() => onToggleOption(category, opt)}
                          className={`px-3 py-1 rounded-full text-[12px] border transition-all duration-100 ${
                            checked
                              ? `${hc.activeBg} ${hc.activeText} ${hc.activeBorder}`
                              : `${hc.bg} ${hc.text} ${hc.border} hover:border-neutral-300`
                          }`}
                          style={{ fontWeight: checked ? 600 : 400 }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {style === 'tag' && (
                  // §5 v1.1: Coverage / DPP — Tag style (bordered rectangular chips)
                  <div className="flex flex-col gap-1">
                    {options.map(opt => {
                      const checked = (activeFilters[category] || []).includes(opt);
                      return (
                        <button
                          key={opt}
                          onClick={() => onToggleOption(category, opt)}
                          className={`px-3 py-1.5 rounded-lg text-[12px] border text-left transition-all duration-100 ${
                            checked
                              ? 'bg-[#f0faf5] text-[#00985F] border-[#00985F]'
                              : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                          }`}
                          style={{ fontWeight: checked ? 600 : 400 }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {style === 'checkbox' && (
                  // Default — checkbox style
                  <div className="space-y-0.5">
                    {options.map(opt => {
                      const checked = (activeFilters[category] || []).includes(opt);
                      return (
                        <label
                          key={opt}
                          className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-neutral-50 transition-colors group select-none"
                          onClick={() => onToggleOption(category, opt)}
                        >
                          <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                            checked ? 'bg-[#00985F] border-[#00985F]' : 'border-neutral-300 bg-white group-hover:border-neutral-400'
                          }`}>
                            {checked && (
                              <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </div>
                          <span
                            className={`text-[13px] transition-colors ${checked ? 'text-neutral-900' : 'text-neutral-600 group-hover:text-neutral-800'}`}
                            style={{ fontWeight: checked ? 500 : 400 }}
                          >
                            {opt}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer — §5: Clear All required */}
        <div className="px-4 py-4 border-t border-neutral-100 flex gap-2.5 flex-shrink-0">
          <Button
            variant="secondary"
            size="md"
            onClick={onClearAll}
            className="flex-1 text-neutral-600 hover:bg-neutral-50 transition-colors"
          >
            Clear All
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={onApply}
            className="flex-1"
          >
            Apply
          </Button>
        </div>
      </div>
    </>
  );
}
