import type { Meta, StoryObj } from "@storybook/react-vite";

const ColorSwatch = ({
  name,
  value,
  usage,
}: {
  name: string;
  value: string;
  usage: string;
}) => (
  <div className="overflow-hidden rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface)">
    <div
      className="h-20 border-b border-(--ec-color-border)"
      style={{ background: `var(${name})` }}
    />
    <div className="space-y-1 p-4">
      <p className="font-mono text-xs text-(--ec-color-text-primary)">
        {name}
      </p>
      <p className="font-mono text-xs text-(--ec-color-text-muted)">
        {value}
      </p>
      <p className="text-sm text-(--ec-color-text-secondary)">{usage}</p>
    </div>
  </div>
);

const meta = {
  title: "Design System/Foundations/Colors",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Palette: Story = {
  render: () => (
    <div className="max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-(--ec-color-text-primary)">
          Color palette
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
          Colors are optimized for sober B2B decision interfaces: clear
          hierarchy, readable status signals and low visual noise.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-(--ec-color-text-primary)">
          Surfaces
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <ColorSwatch
            name="--ec-color-background"
            value="#f8fafc"
            usage="Page background."
          />
          <ColorSwatch
            name="--ec-color-surface"
            value="#ffffff"
            usage="Cards and dialogs."
          />
          <ColorSwatch
            name="--ec-color-surface-muted"
            value="#f1f5f9"
            usage="Muted blocks and secondary surfaces."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-(--ec-color-text-primary)">
          Text and borders
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          <ColorSwatch
            name="--ec-color-text-primary"
            value="#0f172a"
            usage="Headings and main content."
          />
          <ColorSwatch
            name="--ec-color-text-secondary"
            value="#475569"
            usage="Descriptions and secondary text."
          />
          <ColorSwatch
            name="--ec-color-text-muted"
            value="#64748b"
            usage="Metadata and helper text."
          />
          <ColorSwatch
            name="--ec-color-border"
            value="#e2e8f0"
            usage="Borders and dividers."
          />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-(--ec-color-text-primary)">
          Actions and status
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          <ColorSwatch
            name="--ec-color-primary"
            value="#2563eb"
            usage="Primary actions and emphasis."
          />
          <ColorSwatch
            name="--ec-color-success"
            value="#16a34a"
            usage="Positive status."
          />
          <ColorSwatch
            name="--ec-color-warning"
            value="#d97706"
            usage="Attention and watch status."
          />
          <ColorSwatch
            name="--ec-color-danger"
            value="#dc2626"
            usage="Critical risks and destructive states."
          />
        </div>
      </section>
    </div>
  ),
};