import { z } from "zod";

export const employmentFormSchema = z.object({
  employerName: z.string().min(1, "Employer name is required"),
  employerAddress: z.string().min(1, "Employer address is required"),
  employeeName: z.string().min(1, "Employee name is required"),
  employeeAddress: z.string().min(1, "Employee address is required"),
  position: z.string().min(1, "Position is required"),
  startDate: z.string().min(1, "Start date is required"),
  salary: z.string().min(1, "Salary is required"),
  paymentFrequency: z.string().min(1, "Payment frequency is required"),
  workHours: z.string().min(1, "Work hours are required"),
  state: z.string().min(1, "State is required"),
});

export type EmploymentFormData = z.infer<typeof employmentFormSchema>;