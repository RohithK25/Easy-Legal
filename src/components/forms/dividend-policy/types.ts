import { z } from "zod";

export const dividendPolicyFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  state: z.string().min(1, "State is required"),
  shareholderNames: z.string().min(1, "Shareholder name(s) are required"),
  paymentPeriod: z.string().min(1, "Payment period is required"),
  paymentDays: z.string().min(1, "Payment days are required"),
});

export type DividendPolicyFormData = z.infer<typeof dividendPolicyFormSchema>;