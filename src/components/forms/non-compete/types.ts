import { z } from "zod";

export const nonCompeteFormSchema = z.object({
  employeeName: z.string().min(1, "Employee name is required"),
  employerName: z.string().min(1, "Employer name is required"),
  duration: z.string().min(1, "Duration is required"),
  geographicArea: z.string().min(1, "Geographic area is required"),
  state: z.string().min(1, "State is required"),
});

export type NonCompeteFormData = z.infer<typeof nonCompeteFormSchema>;