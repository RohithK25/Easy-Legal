import { z } from "zod";

export const independentContractorFormSchema = z.object({
  contractorName: z.string().min(1, "Contractor name is required"),
  contractorAddress: z.string().min(1, "Contractor address is required"),
  services: z.string().min(1, "Services description is required"),
  paymentTerms: z.string().min(1, "Payment terms are required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  state: z.string().min(1, "State is required"),
});

export type IndependentContractorFormData = z.infer<typeof independentContractorFormSchema>;