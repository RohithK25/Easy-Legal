import { z } from "zod";

export const loanNoteFormSchema = z.object({
  lenderName: z.string().min(1, "Lender name is required"),
  lenderAddress: z.string().min(1, "Lender address is required"),
  borrowerName: z.string().min(1, "Borrower name is required"),
  borrowerAddress: z.string().min(1, "Borrower address is required"),
  loanAmount: z.string().min(1, "Loan amount is required"),
  bankName: z.string().min(1, "Bank name is required"),
  accountNumber: z.string().min(1, "Account number is required"),
  maturityDate: z.string().min(1, "Maturity date is required"),
  state: z.string().min(1, "State is required"),
});

export type LoanNoteFormData = z.infer<typeof loanNoteFormSchema>;