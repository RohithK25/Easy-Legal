import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { StockOptionFormData } from "./types";

interface StockOptionAgreementFormProps {
  form: UseFormReturn<StockOptionFormData>;
}

export function StockOptionAgreementForm({ form }: StockOptionAgreementFormProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="employeeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Employee Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter employee name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="numberOfOptions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Options</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter number of options" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="exercisePrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Exercise Price</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter exercise price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="vestingSchedule"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vesting Schedule</FormLabel>
            <FormControl>
              <Input placeholder="Enter vesting schedule" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="expirationDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expiration Date</FormLabel>
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