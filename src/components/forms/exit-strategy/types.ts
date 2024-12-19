import { z } from "zod";

export const exitStrategyFormSchema = z.object({
  effectiveDate: z.string().min(1, "Effective date is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  founderNames: z.string().min(1, "Founder name(s) is required"),
  founderAddresses: z.string().min(1, "Founder address(es) is required"),
  businessType: z.string().min(1, "Business type is required"),
  state: z.string().min(1, "State is required"),
  reviewFrequency: z.string().min(1, "Review frequency is required"),
  exitTriggerEvent: z.string().min(1, "Exit trigger event is required"),
  revenueTarget: z.string().min(1, "Revenue target is required"),
  profitTarget: z.string().min(1, "Profit target is required"),
  shareholderApprovalPercentage: z.string().min(1, "Shareholder approval percentage is required"),
  valuationMethod: z.string().min(1, "Valuation method is required"),
  nonCompetePeriod: z.string().min(1, "Non-compete period is required"),
  geographicalScope: z.string().min(1, "Geographical scope is required"),
  nonSolicitationPeriod: z.string().min(1, "Non-solicitation period is required"),
  confidentialityPeriod: z.string().min(1, "Confidentiality period is required"),
  arbitrationBody: z.string().min(1, "Arbitration body is required"),
});

export type ExitStrategyFormData = z.infer<typeof exitStrategyFormSchema>;