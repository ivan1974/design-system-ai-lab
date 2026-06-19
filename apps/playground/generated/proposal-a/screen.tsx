import "design-system-ai-lab/styles.css";
import { mockAssets } from "./mock-data";

function AssetCard({ asset }: { asset: (typeof mockAssets)[number] }) {
  return (
    <article className="rounded-xl border bg-card p-4 text-card-foreground shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{asset.site}</p>
          <h3 className="mt-1 text-base font-semibold">{asset.name}</h3>
        </div>
        <span className="rounded-full border px-2 py-1 text-xs font-medium">{asset.risk}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{asset.signal}</p>
      <p className="mt-3 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">Evidence: {asset.evidence}</p>
      <button className="mt-4 rounded-md border px-3 py-2 text-sm font-medium">Review</button>
    </article>
  );
}

export default function ProposalAScreen() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl p-6">
        <p className="text-sm text-muted-foreground">CSM workspace</p>
        <h1 className="mt-2 text-2xl font-semibold">Asset priority review</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Compare asset signals with visible evidence notes before choosing the next action.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {mockAssets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>
      </section>
    </main>
  );
}
