import { z } from "zod";

export const operatingFormSchema = z.object({
  llcName: z.string().min(1, "LLC name is required"),
  member1Name: z.string().min(1, "Member 1 name is required"),
  member1Address: z.string().min(1, "Member 1 address is required"),
  member2Name: z.string().min(1, "Member 2 name is required"),
  member2Address: z.string().min(1, "Member 2 address is required"),
  state: z.string().min(1, "State is required"),
  filingDate: z.string().min(1, "Filing date is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  businessActivity: z.string().min(1, "Business activity is required"),
  member1Contribution: z.string().min(1, "Member 1 contribution is required"),
  member2Contribution: z.string().min(1, "Member 2 contribution is required"),
  member1Ownership: z.string().min(1, "Member 1 ownership percentage is required"),
  member2Ownership: z.string().min(1, "Member 2 ownership percentage is required"),
  managementType: z.string().min(1, "Management type is required"),
  taxStatus: z.string().min(1, "Tax status is required"),
});

export type OperatingFormData = z.infer<typeof operatingFormSchema>;