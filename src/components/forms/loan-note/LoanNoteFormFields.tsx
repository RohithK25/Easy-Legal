import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { LoanNoteFormData } from "./types";

interface LoanNoteFormFieldsProps {
  form: UseFormReturn<LoanNoteFormData>;
}

export function LoanNoteFormFields({ form }: LoanNoteFormFieldsProps) {
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
        name="bankName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bank Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter bank name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="accountNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Account Number</FormLabel>
            <FormControl>
              <Input placeholder="Enter account number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="maturityDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Maturity Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
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
    </div>
  );
}