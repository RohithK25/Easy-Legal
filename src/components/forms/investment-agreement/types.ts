import { z } from "zod";

export const investmentFormSchema = z.object({
  investorName: z.string().min(1, "Investor name is required"),
  investorAddress: z.string().min(1, "Investor address is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  state: z.string().min(1, "State is required"),
  investmentAmount: z.string().min(1, "Investment amount is required"),
  numberOfShares: z.string().min(1, "Number of shares is required"),
  pricePerShare: z.string().min(1, "Price per share is required"),
  closingDate: z.string().min(1, "Closing date is required"),
  boardRepresentationThreshold: z.string().min(1, "Board representation threshold is required"),
  nonCompetePeriod: z.string().min(1, "Non-compete period is required"),
  geographicRegion: z.string().min(1, "Geographic region is required"),
});

export type InvestmentFormData = z.infer<typeof investmentFormSchema>;