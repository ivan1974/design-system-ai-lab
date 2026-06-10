import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Button } from "../components/button";
import { Dialog, DialogClose, DialogFooter } from "../components/dialog";
import { Field } from "../forms/field";
import { Input } from "../forms/input";
import { Select } from "../forms/select";
import { Textarea } from "../forms/textarea";
import type { ActionPriority } from "../decision/action-card";

export type CreateActionDialogValues = {
  title: string;
  owner: string;
  dueDate: string;
  priority: ActionPriority;
  context: string;
  assetContext: string;
  sourceContext: string;
  validationStatus: string;
  proofContext: string;
  note: string;
};

export type CreateActionDialogProps = {
  trigger?: ReactNode;
  title?: string;
  description?: string;
  confirmLabel?: string;
  defaultValues?: Partial<CreateActionDialogValues>;
  showContextFields?: boolean;
  onSubmit?: (values: CreateActionDialogValues) => void;
};

const defaultActionValues: CreateActionDialogValues = {
  title: "",
  owner: "",
  dueDate: "",
  priority: "high",
  context: "",
  assetContext: "",
  sourceContext: "",
  validationStatus: "",
  proofContext: "",
  note: "",
};

export function CreateActionDialog({
  trigger = <Button>Create action</Button>,
  title = "Create action",
  description = "Add a follow-up action with an owner, due date and priority.",
  confirmLabel = "Save action",
  defaultValues,
  showContextFields = false,
  onSubmit,
}: CreateActionDialogProps) {
  const [values, setValues] = useState<CreateActionDialogValues>({
    ...defaultActionValues,
    ...defaultValues,
  });

  const hasContextDefaults = Boolean(
    defaultValues?.context ||
    defaultValues?.assetContext ||
    defaultValues?.sourceContext ||
    defaultValues?.validationStatus ||
    defaultValues?.proofContext,
  );

  const shouldShowContextFields = showContextFields || hasContextDefaults;

  function updateValue<Key extends keyof CreateActionDialogValues>(
    key: Key,
    value: CreateActionDialogValues[Key],
  ) {
    setValues((currentValues) => ({
      ...currentValues,
      [key]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(values);
  }

  return (
    <Dialog
      trigger={trigger}
      title={title}
      description={description}
      confirmLabel={confirmLabel}
      footer={
        <DialogFooter>
          <DialogClose variant="secondary">Cancel</DialogClose>
          <Button type="submit" form="ec-create-action-form">
            {confirmLabel}
          </Button>
        </DialogFooter>
      }
    >
      <form
        id="ec-create-action-form"
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <Field label="Action title" htmlFor="action-title">
          <Input
            id="action-title"
            placeholder="Review source evidence before customer discussion"
            value={values.title}
            onChange={(event) => updateValue("title", event.target.value)}
          />
        </Field>

        <Field label="Owner" htmlFor="action-owner">
          <Input
            id="action-owner"
            placeholder="Account owner, Support Team or Service Manager"
            value={values.owner}
            onChange={(event) => updateValue("owner", event.target.value)}
          />
        </Field>

        <Field label="Priority" htmlFor="action-priority">
          <Select
            id="action-priority"
            value={values.priority}
            onChange={(event) =>
              updateValue("priority", event.target.value as ActionPriority)
            }
          >
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </Select>
        </Field>

        <Field label="Due date" htmlFor="action-due-date">
          <Input
            id="action-due-date"
            type="date"
            value={values.dueDate}
            onChange={(event) => updateValue("dueDate", event.target.value)}
          />
        </Field>

        {shouldShowContextFields && (
          <div className="space-y-4 rounded-(--ec-radius-md) border border-(--ec-color-border) bg-(--ec-color-surface-muted) p-4">
            <div>
              <h3 className="text-sm font-semibold text-(--ec-color-text-primary)">
                Context for follow-through
              </h3>
              <p className="mt-1 text-xs text-(--ec-color-text-secondary)">
                Keep asset, source, validation or proof context visible when it
                affects follow-through.
              </p>
            </div>

            <Field
              label="Action context"
              htmlFor="action-context"
              helper="Explain why this action is needed."
            >
              <Textarea
                id="action-context"
                placeholder="Follow-up required after high-priority recommendation."
                value={values.context}
                onChange={(event) => updateValue("context", event.target.value)}
              />
            </Field>

            <Field
              label="Asset context"
              htmlFor="action-asset-context"
              helper="Add the affected site, room, asset group or scope when relevant."
            >
              <Input
                id="action-asset-context"
                placeholder="Critical Power > UPS Room A"
                value={values.assetContext}
                onChange={(event) =>
                  updateValue("assetContext", event.target.value)
                }
              />
            </Field>

            <Field
              label="Source context"
              htmlFor="action-source-context"
              helper="Keep source scope, source strength or freshness visible when they affect trust."
            >
              <Textarea
                id="action-source-context"
                placeholder="Monitored assets only · Source strength: partial"
                value={values.sourceContext}
                onChange={(event) =>
                  updateValue("sourceContext", event.target.value)
                }
              />
            </Field>

            <Field
              label="Validation status"
              htmlFor="action-validation-status"
              helper="Clarify review or validation needed before customer use."
            >
              <Input
                id="action-validation-status"
                placeholder="Review before customer use"
                value={values.validationStatus}
                onChange={(event) =>
                  updateValue("validationStatus", event.target.value)
                }
              />
            </Field>

            <Field
              label="Proof context"
              htmlFor="action-proof-context"
              helper="Add proof status when the action closes a proof gap."
            >
              <Input
                id="action-proof-context"
                placeholder="Internal proof, not customer-ready"
                value={values.proofContext}
                onChange={(event) =>
                  updateValue("proofContext", event.target.value)
                }
              />
            </Field>
          </div>
        )}

        <Field
          label="Note"
          htmlFor="action-note"
          helper="Add useful context for the team."
        >
          <Textarea
            id="action-note"
            placeholder="Describe what should happen next without hiding critical context."
            value={values.note}
            onChange={(event) => updateValue("note", event.target.value)}
          />
        </Field>
      </form>
    </Dialog>
  );
}
