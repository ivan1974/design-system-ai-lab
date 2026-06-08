import type { Meta, StoryObj } from "@storybook/react-vite";

const TokenRow = ({
  name,
  value,
  description,
}: {
  name: string;
  value: string;
  description: string;
}) => (
  <tr className="border-b border-(--ec-color-border)">
    <td className="px-4 py-3 font-mono text-xs text-(--ec-color-text-primary)">
      {name}
    </td>
    <td className="px-4 py-3 font-mono text-xs text-(--ec-color-text-secondary)">
      {value}
    </td>
    <td className="px-4 py-3 text-sm text-(--ec-color-text-secondary)">
      {description}
    </td>
  </tr>
);

const meta = {
  title: "Design System/Foundations/Tokens",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CoreTokens: Story = {
  render: () => (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-(--ec-color-text-primary)">
          Design tokens
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
          The design system uses <code>--ec-*</code> tokens as the source of
          truth. Compatibility aliases are provided for Figma Make and
          shadcn-like generators.
        </p>
      </div>

      <div className="overflow-hidden rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface)">
        <table className="w-full border-collapse">
          <thead className="bg-(--ec-color-surface-muted)">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-(--ec-color-text-muted)">
                Token
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-(--ec-color-text-muted)">
                Value
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-(--ec-color-text-muted)">
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            <TokenRow
              name="--ec-color-background"
              value="#f8fafc"
              description="Application background."
            />
            <TokenRow
              name="--ec-color-surface"
              value="#ffffff"
              description="Cards, dialogs and elevated surfaces."
            />
            <TokenRow
              name="--ec-color-surface-muted"
              value="#f1f5f9"
              description="Muted surfaces and subtle blocks."
            />
            <TokenRow
              name="--ec-color-text-primary"
              value="#0f172a"
              description="Main content and headings."
            />
            <TokenRow
              name="--ec-color-text-secondary"
              value="#475569"
              description="Secondary descriptions and supporting text."
            />
            <TokenRow
              name="--ec-color-text-muted"
              value="#64748b"
              description="Metadata, labels and helper text."
            />
            <TokenRow
              name="--ec-color-border"
              value="#e2e8f0"
              description="Card, input and divider borders."
            />
            <TokenRow
              name="--ec-color-primary"
              value="#2563eb"
              description="Primary actions and interactive emphasis."
            />
            <TokenRow
              name="--ec-radius-sm"
              value="6px"
              description="Inputs, buttons and compact controls."
            />
            <TokenRow
              name="--ec-radius-md"
              value="10px"
              description="Cards and medium containers."
            />
            <TokenRow
              name="--ec-radius-lg"
              value="16px"
              description="Dialogs and larger surfaces."
            />
          </tbody>
        </table>
      </div>
    </div>
  ),
};

export const CompatibilityAliases: Story = {
  render: () => (
    <div className="max-w-5xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-(--ec-color-text-primary)">
          Compatibility aliases
        </h1>
        <p className="mt-2 max-w-3xl text-sm text-(--ec-color-text-secondary)">
          These aliases help Figma Make render generated code correctly when it
          uses common variables like <code>--background</code> or{" "}
          <code>--foreground</code>. They point back to the official{" "}
          <code>--ec-*</code> tokens.
        </p>
      </div>

      <div className="overflow-hidden rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface)">
        <table className="w-full border-collapse">
          <thead className="bg-(--ec-color-surface-muted)">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-(--ec-color-text-muted)">
                Alias
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-(--ec-color-text-muted)">
                Maps to
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-(--ec-color-text-muted)">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            <TokenRow
              name="--background"
              value="var(--ec-color-background)"
              description="Generated page backgrounds."
            />
            <TokenRow
              name="--foreground"
              value="var(--ec-color-text-primary)"
              description="Generated main text color."
            />
            <TokenRow
              name="--card"
              value="var(--ec-color-surface)"
              description="Generated card surfaces."
            />
            <TokenRow
              name="--muted-foreground"
              value="var(--ec-color-text-muted)"
              description="Generated muted text."
            />
            <TokenRow
              name="--border"
              value="var(--ec-color-border)"
              description="Generated border color."
            />
            <TokenRow
              name="--input-background"
              value="var(--ec-color-surface)"
              description="Generated form control backgrounds."
            />
            <TokenRow
              name="--radius-sm"
              value="var(--ec-radius-sm)"
              description="Generated compact radius."
            />
            <TokenRow
              name="--radius-md"
              value="var(--ec-radius-md)"
              description="Generated medium radius."
            />
          </tbody>
        </table>
      </div>
    </div>
  ),
};