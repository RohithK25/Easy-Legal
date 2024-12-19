import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
            <FormLabel>Loan Amount ($)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter loan amount" {...field} />
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
        name="interestRate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Interest Rate (%)</FormLabel>
            <FormControl>
              <Input type="number" step="0.01" placeholder="Enter interest rate" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="yearBasis"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Year Basis</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select year basis" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="360">360-day year</SelectItem>
                <SelectItem value="365">365-day year</SelectItem>
              </SelectContent>
            </Select>
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
        name="paymentSchedule"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Schedule</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment schedule" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="annually">Annually</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="installmentAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Installment Amount ($)</FormLabel>
            <FormControl>
              <Input type="number" step="0.01" placeholder="Enter installment amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="paymentDay"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Day</FormLabel>
            <FormControl>
              <Input type="number" min="1" max="31" placeholder="Enter payment day" {...field} />
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
            <FormLabel>Late Fee ($)</FormLabel>
            <FormControl>
              <Input type="number" step="0.01" placeholder="Enter late fee amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="defaultPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Default Period (days)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter default period in days" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}