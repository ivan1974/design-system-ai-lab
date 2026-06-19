import ProposalAScreen from "../generated/proposal-a/screen";
import { metadata as proposalA } from "../generated/proposal-a/metadata";
import ProposalBScreen from "../generated/proposal-b/screen";
import { metadata as proposalB } from "../generated/proposal-b/metadata";

const proposals = [
  { ...proposalA, component: ProposalAScreen },
  { ...proposalB, component: ProposalBScreen },
];

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border px-2 py-1 text-xs font-medium">{children}</span>;
}

function MetadataPanel({ proposal }: { proposal: (typeof proposals)[number] }) {
  return (
    <aside className="rounded-xl border bg-card p-4 text-card-foreground shadow-sm">
      <h3 className="text-sm font-semibold">{proposal.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{proposal.description}</p>

      <div className="mt-4 space-y-3">
        <section>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">DS components used</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {proposal.packageComponents.length ? proposal.packageComponents.map((item) => <Badge key={item}>{item}</Badge>) : <Badge>None</Badge>}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">DS primitives used</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {proposal.packagePrimitives.length ? proposal.packagePrimitives.map((item) => <Badge key={item}>{item}</Badge>) : <Badge>None</Badge>}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Local components</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {proposal.localComponents.map((item) => <Badge key={item}>{item}</Badge>)}
          </div>
        </section>

        <section>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Compliance</p>
          <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
            <div className="rounded-md bg-muted p-2">Status<br /><strong>{proposal.compliance.status}</strong></div>
            <div className="rounded-md bg-muted p-2">Blockers<br /><strong>{proposal.compliance.blockers}</strong></div>
            <div className="rounded-md bg-muted p-2">Warnings<br /><strong>{proposal.compliance.warnings}</strong></div>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-muted-foreground">
            {proposal.compliance.notes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </section>
      </div>
    </aside>
  );
}

function PreviewPane({ proposal }: { proposal: (typeof proposals)[number] }) {
  const Screen = proposal.component;
  return (
    <section className="overflow-hidden rounded-2xl border bg-background shadow-sm">
      <div className="border-b bg-muted/40 px-4 py-3">
        <p className="text-sm font-semibold">{proposal.title}</p>
      </div>
      <div className="max-h-[560px] overflow-auto">
        <Screen />
      </div>
    </section>
  );
}

export default function App() {
  const [left, right] = proposals;

  return (
    <main className="min-h-screen bg-muted/30 text-foreground">
      <header className="border-b bg-background px-6 py-5">
        <p className="text-sm text-muted-foreground">Design-system AI Lab</p>
        <h1 className="mt-1 text-2xl font-semibold">Exploration playground</h1>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Compare generated proposals, visible design-system material, local components and compliance notes in one controlled console.
        </p>
      </header>

      <section className="grid gap-4 p-6 lg:grid-cols-2">
        <MetadataPanel proposal={left} />
        <MetadataPanel proposal={right} />
      </section>

      <section className="grid gap-4 px-6 pb-6 lg:grid-cols-2">
        <PreviewPane proposal={left} />
        <PreviewPane proposal={right} />
      </section>
    </main>
  );
}
