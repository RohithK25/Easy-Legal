import * as z from "zod";

export const leaseFormSchema = z.object({
  effectiveDate: z.string().min(1, "Effective date is required"),
  lessorName: z.string().min(1, "Lessor name is required"),
  lessorAddress: z.string().min(1, "Lessor address is required"),
  lesseeName: z.string().min(1, "Lessee name is required"),
  lesseeAddress: z.string().min(1, "Lessee address is required"),
  propertyAddress: z.string().min(1, "Property address is required"),
  intendedUse: z.string().min(1, "Intended use is required"),
  term: z.string().min(1, "Term is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  renewalTerm: z.string().min(1, "Renewal term is required"),
  noticePeriod: z.string().min(1, "Notice period is required"),
  rentAmount: z.string().min(1, "Rent amount is required"),
  rentDueDay: z.string().min(1, "Rent due day is required"),
  lateFeeGracePeriod: z.string().min(1, "Late fee grace period is required"),
  lateFeeAmount: z.string().min(1, "Late fee amount is required"),
  securityDeposit: z.string().min(1, "Security deposit is required"),
  depositReturnPeriod: z.string().min(1, "Deposit return period is required"),
  defaultPeriod: z.string().min(1, "Default period is required"),
  curePeriod: z.string().min(1, "Cure period is required"),
  terminationNoticePeriod: z.string().min(1, "Termination notice period is required"),
  terminationFee: z.string().min(1, "Termination fee is required"),
  state: z.string().min(1, "State is required"),
});

export type LeaseFormData = z.infer<typeof leaseFormSchema>;