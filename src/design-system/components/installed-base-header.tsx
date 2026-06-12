import type { ReactNode } from 'react';
import { MapPin, Building2, Zap } from 'lucide-react';
import { Badge } from '../primitives';

export interface InstalledBaseHeaderProps {
  siteName: string;
  contextLabel: string;
  buildingCount: string;
  roomCount: string;
  statusLabel: string;
  portfolioTitle: string;
}

export function InstalledBaseHeader({
  siteName,
  contextLabel,
  buildingCount,
  roomCount,
  statusLabel,
  portfolioTitle,
}: InstalledBaseHeaderProps) {
  return (
    <div className="bg-white border-b border-neutral-200/80 flex-shrink-0">
      <div className="px-6 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: '#f0faf5' }}
          >
            <MapPin size={12} style={{ color: '#00985F' }} />
          </div>
          <span className="text-[13px] text-neutral-900" style={{ fontWeight: 600 }}>
            {siteName}
          </span>
        </div>

        <div className="w-px h-4 bg-neutral-200 flex-shrink-0" />

        <Badge variant="success" size="sm" shape="pill" className="px-2.5" style={{ fontWeight: 600 }}>
          {contextLabel}
        </Badge>

        <div className="w-px h-4 bg-neutral-200 flex-shrink-0" />

        <div className="flex items-center gap-4">
          <StatChip icon={<Building2 size={11} />} value={buildingCount} label="Buildings" />
          <StatChip icon={<Zap size={11} />} value={roomCount} label="Electrical Rooms" />
          <div className="flex items-center gap-1.5 text-[12px] text-neutral-500">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00985F]" />
            {statusLabel}
          </div>
        </div>

        <div className="ml-auto text-right flex-shrink-0">
          <div className="text-[13px] text-neutral-900" style={{ fontWeight: 700 }}>{portfolioTitle}</div>
        </div>
      </div>
    </div>
  );
}

function StatChip({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-neutral-400">{icon}</span>
      <span className="text-[13px] text-neutral-900" style={{ fontWeight: 700 }}>{value}</span>
      <span className="text-[12px] text-neutral-500">{label}</span>
    </div>
  );
}
