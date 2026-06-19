import "design-system-ai-lab/styles.css";
import { mockGroups } from "./mock-data";

function GroupPanel({ group }: { group: (typeof mockGroups)[number] }) {
  return (
    <article className="rounded-xl border bg-card p-4 text-card-foreground shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold">{group.title}</h3>
        <span className="rounded-full border px-2 py-1 text-xs font-medium">{group.count} items</span>
      </div>
      <p className="mt-3 rounded-md bg-muted px-3 py-2 text-xs text-muted-foreground">Evidence: {group.evidence}</p>
      <button className="mt-4 rounded-md border px-3 py-2 text-sm font-medium">Open details</button>
    </article>
  );
}

export default function ProposalBScreen() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl p-6">
        <p className="text-sm text-muted-foreground">CSM workspace</p>
        <h1 className="mt-2 text-2xl font-semibold">Grouped asset review</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Compare grouped signals first, then open detail only when the evidence notes justify review.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {mockGroups.map((group) => (
            <GroupPanel key={group.id} group={group} />
          ))}
        </div>
      </section>
    </main>
  );
}
