import { z } from "zod";

export const partnershipFormSchema = z.object({
  partner1Name: z.string().min(1, "Partner 1 name is required"),
  partner1Address: z.string().min(1, "Partner 1 address is required"),
  partner2Name: z.string().min(1, "Partner 2 name is required"),
  partner2Address: z.string().min(1, "Partner 2 address is required"),
  partnershipName: z.string().min(1, "Partnership name is required"),
  businessActivity: z.string().min(1, "Business activity is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  partner1Contribution: z.string().min(1, "Partner 1 contribution is required"),
  partner2Contribution: z.string().min(1, "Partner 2 contribution is required"),
  partner1Ownership: z.string().min(1, "Partner 1 ownership percentage is required"),
  partner2Ownership: z.string().min(1, "Partner 2 ownership percentage is required"),
  profitDistribution: z.string().min(1, "Profit distribution period is required"),
  withdrawalNotice: z.string().min(1, "Withdrawal notice period is required"),
  state: z.string().min(1, "State is required"),
  location: z.string().min(1, "Location is required"),
});

export type PartnershipFormData = z.infer<typeof partnershipFormSchema>;