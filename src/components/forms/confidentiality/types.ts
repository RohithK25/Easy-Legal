import { z } from "zod";

export const confidentialityFormSchema = z.object({
  effectiveDate: z.string().min(1, "Effective date is required"),
  partyAName: z.string().min(1, "Disclosing party name is required"),
  partyAAddress: z.string().min(1, "Disclosing party address is required"),
  partyBName: z.string().min(1, "Receiving party name is required"),
  partyBAddress: z.string().min(1, "Receiving party address is required"),
  confidentialityPeriod: z.string().min(1, "Confidentiality period is required"),
  returnPeriod: z.string().min(1, "Return period is required"),
  state: z.string().min(1, "State is required"),
  location: z.string().min(1, "Location is required"),
});

export type ConfidentialityFormData = z.infer<typeof confidentialityFormSchema>;