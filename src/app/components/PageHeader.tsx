import { MapPin, Building2, Zap } from 'lucide-react';

export function PageHeader() {
  return (
    <div className="bg-white border-b border-neutral-200/80 flex-shrink-0">
      <div className="px-6 py-3 flex items-center gap-4">
        {/* Site context */}
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#f0faf5' }}
          >
            <MapPin size={12} style={{ color: '#00985F' }} />
          </div>
          <span className="text-[13px] text-neutral-900" style={{ fontWeight: 600 }}>
            Demo Data Center — DC-WE01
          </span>
        </div>

        {/* Separator */}
        <div className="w-px h-4 bg-neutral-200 flex-shrink-0" />

        {/* Context pill */}
        <span
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] border"
          style={{
            backgroundColor: '#f0faf5',
            color: '#00985F',
            borderColor: '#b3e6d0',
            fontWeight: 600,
          }}
        >
          Reference Campus
        </span>

        {/* Separator */}
        <div className="w-px h-4 bg-neutral-200 flex-shrink-0" />

        {/* Portfolio scope stats */}
        <div className="flex items-center gap-4">
          <StatChip icon={<Building2 size={11} />} value="2" label="Buildings" />
          <StatChip icon={<Zap size={11} />} value="3" label="Electrical Rooms" />
          <div className="flex items-center gap-1.5 text-[12px] text-neutral-500">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00985F]" />
            Component hierarchy + intelligence enabled
          </div>
        </div>

        {/* Portfolio title — right aligned */}
        <div className="ml-auto text-right flex-shrink-0">
          <div className="text-[13px] text-neutral-900" style={{ fontWeight: 700 }}>Asset Portfolio</div>
        </div>
      </div>
    </div>
  );
}

function StatChip({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-neutral-400">{icon}</span>
      <span className="text-[13px] text-neutral-900" style={{ fontWeight: 700 }}>{value}</span>
      <span className="text-[12px] text-neutral-500">{label}</span>
    </div>
  );
}
