import type { ReactNode } from 'react';

export interface InstalledBaseWorkspaceProps {
  navigation: ReactNode;
  header: ReactNode;
  filtersPanel: ReactNode;
  toolbar: ReactNode;
  list: ReactNode;
  detailPanel?: ReactNode;
}

export function InstalledBaseWorkspace({
  navigation,
  header,
  filtersPanel,
  toolbar,
  list,
  detailPanel,
}: InstalledBaseWorkspaceProps) {
  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {navigation}
      {header}

      <div className="flex-1 flex overflow-hidden relative bg-neutral-50/60">
        {filtersPanel}

        <div className="flex-1 flex flex-col overflow-hidden">
          {toolbar}
          {list}
        </div>

        {detailPanel}
      </div>
    </div>
  );
}
