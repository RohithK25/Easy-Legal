import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

export const loanFormSchema = z.object({
  lenderName: z.string().min(1, "Lender name is required"),
  lenderAddress: z.string().min(1, "Lender address is required"),
  borrowerName: z.string().min(1, "Borrower name is required"),
  borrowerAddress: z.string().min(1, "Borrower address is required"),
  state: z.string().min(1, "State is required"),
  loanAmount: z.string().min(1, "Loan amount is required"),
  accountDetails: z.string().min(1, "Account details are required"),
  disbursementPeriod: z.string().min(1, "Disbursement period is required"),
  interestRate: z.string().min(1, "Interest rate is required"),
  interestType: z.string().min(1, "Interest type is required"),
  startDate: z.string().min(1, "Start date is required"),
  installmentAmount: z.string().min(1, "Installment amount is required"),
  finalPaymentDate: z.string().min(1, "Final payment date is required"),
  lateFee: z.string().min(1, "Late fee is required"),
  gracePeriod: z.string().min(1, "Grace period is required"),
  collateralDescription: z.string().min(1, "Collateral description is required"),
  defaultCurePeriod: z.string().min(1, "Default cure period is required"),
});

export type LoanFormData = z.infer<typeof loanFormSchema>;

interface LoanAgreementFormProps {
  form: UseFormReturn<LoanFormData>;
}

export const LoanAgreementForm = ({ form }: LoanAgreementFormProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="lenderName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lender Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter lender name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lenderAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lender Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter lender address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="borrowerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Borrower Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter borrower name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="borrowerAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Borrower Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter borrower address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>State</FormLabel>
            <FormControl>
              <Input placeholder="Enter state" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="loanAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Loan Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter loan amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="accountDetails"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Account Details</FormLabel>
            <FormControl>
              <Input placeholder="Enter account details" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="disbursementPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Disbursement Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="Enter disbursement period" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="interestRate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Interest Rate (%)</FormLabel>
            <FormControl>
              <Input placeholder="Enter interest rate" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="interestType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Interest Type</FormLabel>
            <FormControl>
              <Input placeholder="Enter interest type (simple/compound)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="startDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Start Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="installmentAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Installment Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter installment amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="finalPaymentDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Final Payment Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lateFee"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Late Fee</FormLabel>
            <FormControl>
              <Input placeholder="Enter late fee amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="gracePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Grace Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="Enter grace period" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="collateralDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Collateral Description</FormLabel>
            <FormControl>
              <Input placeholder="Enter collateral description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="defaultCurePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Default Cure Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="Enter default cure period" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};