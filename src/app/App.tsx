import { useState, useMemo } from 'react';
import { MainNav } from './components/MainNav';
import { PageHeader } from './components/PageHeader';
import { ViewFilterBar } from './components/ViewFilterBar';
import { AssetList } from './components/AssetList';
import { AllFiltersPanel } from './components/AllFiltersPanel';
import { AssetDetailPanel } from './components/AssetDetailPanel';
import type { PanelTab } from './components/AssetDetailPanel';
import { assetsData } from './data/assets';
import type { Asset } from './data/assets';

type View = 'list' | 'geography' | 'electrical';

export default function App() {
  const [searchQuery,   setSearchQuery]   = useState('');
  const [activeView,    setActiveView]    = useState<View>('list');
  const [filtersOpen,   setFiltersOpen]   = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [activeTab,     setActiveTab]     = useState<PanelTab>('overview');

  const filteredAssets = useMemo(() => {
    return assetsData.filter(asset => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!asset.name.toLowerCase().includes(q) && !asset.asset_id.toLowerCase().includes(q))
          return false;
      }
      for (const [category, selected] of Object.entries(activeFilters)) {
        if (!selected.length) continue;
        let val: string | null = null;
        if (category === 'Health')        val = asset.health;
        if (category === 'Connectivity')  val = asset.connectivity === 'connected' ? 'Connected' : asset.connectivity === 'not-connected' ? 'Non-connected' : 'Unknown';
        if (category === 'Coverage')      val = asset.coverage;
        if (category === 'DPP')           val = asset.dpp ? 'With Digital Product Passport' : 'Without Digital Product Passport';
        // §5 v1.1: category renamed from Activity → Status
        if (category === 'Status')        val = asset.activity.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        if (category === 'Location')      val = asset.building;
        if (category === 'Asset Type')    val = asset.type;
        if (category === 'Contract Type') val = asset.coverage;
        if (val && !selected.includes(val)) return false;
      }
      return true;
    });
  }, [searchQuery, activeFilters]);

  const totalActiveFilters = Object.values(activeFilters).reduce((s, a) => s + a.length, 0);

  function toggleFilterOption(category: string, option: string) {
    setActiveFilters(prev => {
      const current = prev[category] || [];
      return {
        ...prev,
        [category]: current.includes(option)
          ? current.filter(o => o !== option)
          : [...current, option],
      };
    });
  }

  function handleSelectAsset(asset: Asset) {
    setSelectedAsset(asset);
    setActiveTab('overview');
  }

  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* LAYER 1: Main Navigation */}
      <MainNav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* LAYER 2: Page Header */}
      <PageHeader />

      {/* App body */}
      <div className="flex-1 flex overflow-hidden relative bg-neutral-50/60">
        {/* All Filters Panel */}
        <AllFiltersPanel
          isOpen={filtersOpen}
          activeFilters={activeFilters}
          onToggleOption={toggleFilterOption}
          onClearAll={() => setActiveFilters({})}
          onApply={() => setFiltersOpen(false)}
          onClose={() => setFiltersOpen(false)}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* LAYER 3: View & Filter Bar */}
          <ViewFilterBar
            activeView={activeView}
            onViewChange={setActiveView}
            onAllFilters={() => setFiltersOpen(true)}
            activeFilterCount={totalActiveFilters}
            activeFilters={activeFilters}
            onToggleOption={toggleFilterOption}
          />

          {/* LAYER 4: Installed Base List */}
          <AssetList
            assets={filteredAssets}
            selectedId={selectedAsset?.asset_id ?? null}
            onSelect={handleSelectAsset}
          />
        </div>

        {/* LAYER 5: Asset Detail Panel */}
        {selectedAsset && (
          <AssetDetailPanel
            asset={selectedAsset}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onClose={() => setSelectedAsset(null)}
          />
        )}
      </div>
    </div>
  );
}
