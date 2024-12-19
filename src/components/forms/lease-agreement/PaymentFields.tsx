import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { LeaseFormData } from "./types";

interface PaymentFieldsProps {
  form: UseFormReturn<LeaseFormData>;
}

export function PaymentFields({ form }: PaymentFieldsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="rentAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Monthly Rent Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter amount in dollars" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="rentDueDay"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Rent Due Day</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 1st" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lateFeeGracePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Late Fee Grace Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 5" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lateFeeAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Late Fee Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter amount in dollars" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="securityDeposit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Security Deposit</FormLabel>
            <FormControl>
              <Input placeholder="Enter amount in dollars" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="depositReturnPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Deposit Return Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 30" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}