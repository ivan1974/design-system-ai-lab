export type SourceStrength =
  | "unknown"
  | "partial"
  | "single-source"
  | "multi-source"
  | "validated";

export type ValidationStatus =
  | "not-reviewed"
  | "internal-review-needed"
  | "internally-validated"
  | "customer-ready"
  | "blocked";

export type CustomerReadiness =
  | "internal"
  | "needs-review"
  | "customer-ready";

export type HumanValidationRequirement =
  | "not-required"
  | "recommended"
  | "required";

export const sourceStrengthLabels: Record<SourceStrength, string> = {
  unknown: "Source: unknown",
  partial: "Source: partial",
  "single-source": "Source: single source",
  "multi-source": "Source: multi-source",
  validated: "Source: validated",
};

export const validationStatusLabels: Record<ValidationStatus, string> = {
  "not-reviewed": "Not reviewed",
  "internal-review-needed": "Internal review needed",
  "internally-validated": "Internally validated",
  "customer-ready": "Customer-ready",
  blocked: "Blocked",
};

export const customerReadinessLabels: Record<CustomerReadiness, string> = {
  internal: "Internal",
  "needs-review": "Needs review",
  "customer-ready": "Customer-ready",
};

export const humanValidationRequirementLabels: Record<HumanValidationRequirement, string> = {
  "not-required": "Human validation not required",
  recommended: "Human validation recommended",
  required: "Human validation required",
};
