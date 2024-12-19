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

interface LeaseFormFieldsProps {
  form: UseFormReturn<LeaseFormData>;
}

export function LeaseFormFields({ form }: LeaseFormFieldsProps) {
  return (
    <div className="grid gap-4">
      <FormField
        control={form.control}
        name="effectiveDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Effective Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lessorName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lessor Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter lessor's full name or company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lessorAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lessor Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter lessor's address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lesseeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lessee Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter lessee's full name or company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lesseeAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Lessee Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter lessee's address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="propertyAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Property Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter property address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="intendedUse"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Intended Use</FormLabel>
            <FormControl>
              <Input placeholder="e.g., office space, retail business" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="term"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Term</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 12 months, 2 years" {...field} />
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
        name="endDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>End Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="renewalTerm"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Renewal Term</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 12 months" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="noticePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Notice Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 30" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
      <FormField
        control={form.control}
        name="defaultPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Default Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 10" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="curePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cure Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 30" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="terminationNoticePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Termination Notice Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 60" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="terminationFee"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Early Termination Fee</FormLabel>
            <FormControl>
              <Input placeholder="Enter amount in dollars" {...field} />
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