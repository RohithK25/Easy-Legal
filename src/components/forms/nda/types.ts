import { z } from "zod";

export const ndaFormSchema = z.object({
  partyAName: z.string().min(1, "Disclosing party name is required"),
  partyAAddress: z.string().min(1, "Disclosing party address is required"),
  partyBName: z.string().min(1, "Receiving party name is required"),
  partyBAddress: z.string().min(1, "Receiving party address is required"),
  effectiveDate: z.string().min(1, "Effective date is required"),
  confidentialityPeriod: z.string().min(1, "Confidentiality period is required"),
  state: z.string().min(1, "State is required"),
  location: z.string().min(1, "Location is required"),
});

export type NdaFormData = z.infer<typeof ndaFormSchema>;