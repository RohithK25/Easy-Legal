import * as z from "zod";

export const ipAssignmentFormSchema = z.object({
  assignorName: z.string().min(1, "Assignor name is required"),
  assignorAddress: z.string().min(1, "Assignor address is required"),
  assigneeName: z.string().min(1, "Assignee name is required"),
  assigneeAddress: z.string().min(1, "Assignee address is required"),
  workDescription: z.string().min(1, "Work description is required"),
  relationshipType: z.string().min(1, "Relationship type is required"),
  consideration: z.string().min(1, "Consideration is required"),
  state: z.string().min(1, "State is required"),
});

export type IpAssignmentFormData = z.infer<typeof ipAssignmentFormSchema>;