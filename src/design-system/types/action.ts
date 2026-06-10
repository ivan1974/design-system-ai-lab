export type ActionPriority = "low" | "medium" | "high" | "critical";

export type ActionStatus = "todo" | "in-progress" | "blocked" | "done";

export type ActionOwnership = {
  owner: string;
  dueDate: string;
  priority: ActionPriority;
};

export const actionPriorityLabels: Record<ActionPriority, string> = {
  low: "Low priority",
  medium: "Medium priority",
  high: "High priority",
  critical: "Critical priority",
};

export const actionStatusLabels: Record<ActionStatus, string> = {
  todo: "To do",
  "in-progress": "In progress",
  blocked: "Blocked",
  done: "Done",
};
