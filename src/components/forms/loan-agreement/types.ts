import { z } from "zod";

export const loanFormSchema = z.object({
  lenderName: z.string().min(1, "Lender name is required"),
  lenderAddress: z.string().min(1, "Lender address is required"),
  borrowerName: z.string().min(1, "Borrower name is required"),
  borrowerAddress: z.string().min(1, "Borrower address is required"),
  state: z.string().min(1, "State is required"),
  loanAmount: z.string().min(1, "Loan amount is required"),
  bankName: z.string().min(1, "Bank name is required"),
  accountNumber: z.string().min(1, "Account number is required"),
  interestRate: z.string().min(1, "Interest rate is required"),
  startDate: z.string().min(1, "Start date is required"),
  maturityDate: z.string().min(1, "Maturity date is required"),
  lateFee: z.string().min(1, "Late fee is required"),
});

export type LoanFormData = z.infer<typeof loanFormSchema>;