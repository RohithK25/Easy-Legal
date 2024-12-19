import { z } from "zod";

export const shareholderFormSchema = z.object({
  shareholder1Name: z.string().min(1, "Shareholder 1 name is required"),
  shareholder1Address: z.string().min(1, "Shareholder 1 address is required"),
  shareholder2Name: z.string().min(1, "Shareholder 2 name is required"),
  shareholder2Address: z.string().min(1, "Shareholder 2 address is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyType: z.string().min(1, "Company type is required"),
  state: z.string().min(1, "State is required"),
  incorporationDate: z.string().min(1, "Incorporation date is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  shareholder1Shares: z.string().min(1, "Number of shares is required"),
  shareholder2Shares: z.string().min(1, "Number of shares is required"),
  shareholder1Ownership: z.string().min(1, "Ownership percentage is required"),
  shareholder2Ownership: z.string().min(1, "Ownership percentage is required"),
  shareholder1Directors: z.string().min(1, "Number of directors is required"),
  shareholder2Directors: z.string().min(1, "Number of directors is required"),
  supermajorityThreshold: z.string().min(1, "Supermajority threshold is required"),
  dragAlongThreshold: z.string().min(1, "Drag-along threshold is required"),
  confidentialityPeriod: z.string().min(1, "Confidentiality period is required"),
  amendmentThreshold: z.string().min(1, "Amendment threshold is required"),
});

export type ShareholderFormData = z.infer<typeof shareholderFormSchema>;