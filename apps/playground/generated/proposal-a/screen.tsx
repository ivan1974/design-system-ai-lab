import "design-system-ai-lab/styles.css";

const items = [
  { id: "item-1", name: "Main LV switchboard", status: "Review first", evidence: "Mock data only" },
  { id: "item-2", name: "UPS line 2", status: "Review next", evidence: "Mock data only" },
];

function PriorityItemCard({ item }: { item: (typeof items)[number] }) {
  return (
    <article className="rounded-xl border bg-card p-4 text-card-foreground shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold">{item.name}</h3>
        <span className="rounded-full border px-2 py-1 text-xs font-medium">{item.status}</span>
      </div>
      <p className="mt-3 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">Evidence: {item.evidence}</p>
      <button className="mt-4 rounded-md border px-3 py-2 text-sm font-medium">Review</button>
    </article>
  );
}

export default function GeneratedScreen() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl p-6">
        <p className="text-sm text-muted-foreground">Customer Success Manager</p>
        <h1 className="mt-2 text-2xl font-semibold">Agentic priority review</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">Prioritize items and decide what to review first.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">{items.map((item) => <PriorityItemCard key={item.id} item={item} />)}</div>
      </section>
    </main>
  );
}
