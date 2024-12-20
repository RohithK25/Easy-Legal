import { z } from "zod";

export const employmentFormSchema = z.object({
  employerName: z.string().min(1, "Employer name is required"),
  employerAddress: z.string().min(1, "Employer address is required"),
  employeeName: z.string().min(1, "Employee name is required"),
  employeeAddress: z.string().min(1, "Employee address is required"),
  startDate: z.string().min(1, "Start date is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  salary: z.string().min(1, "Salary is required"),
  salaryPeriod: z.string().min(1, "Salary period is required"),
  supervisorName: z.string().min(1, "Supervisor name is required"),
  nonCompetePeriod: z.string().min(1, "Non-compete period is required"),
  geographicArea: z.string().min(1, "Geographic area is required"),
  noticePeriod: z.string().min(1, "Notice period is required"),
  state: z.string().min(1, "State is required"),
});

export type EmploymentFormData = z.infer<typeof employmentFormSchema>;