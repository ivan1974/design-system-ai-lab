import { Search, HelpCircle, ChevronDown } from 'lucide-react';

interface MainNavProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function MainNav({ searchQuery, onSearchChange }: MainNavProps) {
  return (
    <nav
      className="h-[60px] bg-white border-b border-neutral-200/80 flex items-center px-5 gap-5 flex-shrink-0 z-50"
      style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.06)' }}
    >
      {/* Brand */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <SELogo />
        <div className="flex flex-col leading-none gap-0.5">
          <span
            className="text-[9px] tracking-[0.15em] uppercase text-neutral-400"
            style={{ fontWeight: 600, letterSpacing: '0.12em' }}
          >
            Schneider Electric
          </span>
          <span className="text-[13px] text-neutral-900 tracking-tight leading-none" style={{ fontWeight: 700 }}>
            Installed Base Intelligence
          </span>
        </div>
      </div>

      <div className="w-px h-6 bg-neutral-200 flex-shrink-0 mx-1" />

      {/* Global Search */}
      <div className="relative flex-1 max-w-[360px]">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: '#9CA3AF' }}
        />
        <input
          type="text"
          placeholder="Search assets, sites, documents"
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
          className="w-full pl-9 pr-4 py-[7px] text-[13px] rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 outline-none transition-all duration-150"
          style={{
            fontFamily: 'inherit',
            boxShadow: 'none',
          }}
          onFocus={e => {
            e.target.style.borderColor = '#00985F';
            e.target.style.backgroundColor = '#fff';
            e.target.style.boxShadow = '0 0 0 3px rgba(0,152,95,0.08)';
          }}
          onBlur={e => {
            e.target.style.borderColor = '';
            e.target.style.backgroundColor = '';
            e.target.style.boxShadow = '';
          }}
        />
      </div>

      <div className="flex items-center gap-1 ml-auto flex-shrink-0">
        {/* Help */}
        <button
          className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
          title="Help"
        >
          <HelpCircle size={17} />
        </button>

        {/* User Menu */}
        <button className="flex items-center gap-2 pl-1 pr-2.5 py-1 ml-1 rounded-lg hover:bg-neutral-100 transition-colors group">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #00985F 0%, #007A4A 100%)', fontWeight: 700 }}
          >
            AU
          </div>
          <span className="text-[13px] text-neutral-700" style={{ fontWeight: 500 }}>Anna Utz</span>
          <ChevronDown size={12} className="text-neutral-400 mt-px" />
        </button>
      </div>
    </nav>
  );
}

function SELogo() {
  return (
    <div
      className="w-[34px] h-[34px] rounded-[7px] flex items-center justify-center flex-shrink-0"
      style={{ background: 'linear-gradient(145deg, #00985F 0%, #007A4A 100%)' }}
    >
      {/* SE lightning bolt / checkmark icon */}
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M10.5 2.5L4.5 10H9L7.5 15.5L13.5 8H9L10.5 2.5Z"
          fill="white"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
