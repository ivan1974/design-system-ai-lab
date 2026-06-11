import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Button,
  Dialog,
  DialogClose,
  DialogFooter,
  Field,
  Input,
  Select,
  Textarea,
} from "../../index";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    trigger: <Button>Créer une action</Button>,
    title: "Créer une action client",
    description:
      "Ajoutez une action de suivi liée à la situation actuelle du client.",
    children: (
      <form className="space-y-4">
        <Field label="Titre de l’action" htmlFor="action-title">
          <Input
            id="action-title"
            placeholder="Ex. Planifier un point de suivi connectivité"
          />
        </Field>

        <Field label="Priorité" htmlFor="action-priority">
          <Select id="action-priority" defaultValue="high">
            <option value="high">Haute</option>
            <option value="medium">Moyenne</option>
            <option value="low">Basse</option>
          </Select>
        </Field>

        <Field label="Date cible" htmlFor="action-due-date">
          <Input id="action-due-date" type="date" />
        </Field>
      </form>
    ),
  },
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CreateAction: Story = {};

export const WithButtonTrigger: Story = {
  name: "With Button trigger",
  args: {
    trigger: <Button>Open dialog</Button>,
    title: "Button trigger compatibility",
    description:
      "This story validates that Button supports ref forwarding and works directly as a Radix Dialog trigger.",
    children: (
      <div className="space-y-3">
        <p className="text-sm text-(--ec-color-text-secondary)">
          No local wrapper is required. The design-system Button can be used
          directly as the dialog trigger.
        </p>
      </div>
    ),
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
  },
};

export const WithCustomFooter: Story = {
  args: {
    trigger: <Button>Créer une action avancée</Button>,
    title: "Créer une action avancée",
    description:
      "Utilisez un footer personnalisé quand le formulaire doit contrôler la soumission.",
    children: (
      <form id="storybook-action-form" className="space-y-4">
        <Field
          label="Titre de l’action"
          htmlFor="advanced-action-title"
          helper="Formulez l’action comme une prochaine étape concrète."
        >
          <Input
            id="advanced-action-title"
            placeholder="Préparer le résumé de valeur client"
          />
        </Field>

        <Field label="Responsable" htmlFor="advanced-action-owner">
          <Input id="advanced-action-owner" placeholder="Account owner" />
        </Field>

        <Field label="Priorité" htmlFor="advanced-action-priority">
          <Select id="advanced-action-priority" defaultValue="medium">
            <option value="high">Haute</option>
            <option value="medium">Moyenne</option>
            <option value="low">Basse</option>
          </Select>
        </Field>

        <Field
          label="Note"
          htmlFor="advanced-action-note"
          helper="Ajoutez le contexte utile pour l’équipe."
        >
          <Textarea
            id="advanced-action-note"
            placeholder="Expliquez pourquoi cette action est importante."
          />
        </Field>
      </form>
    ),
    footer: (
      <DialogFooter>
        <DialogClose variant="secondary">Annuler</DialogClose>
        <Button type="submit" form="storybook-action-form">
          Enregistrer l’action
        </Button>
      </DialogFooter>
    ),
  },
};