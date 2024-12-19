import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UseFormReturn } from "react-hook-form";
import { DividendPolicyFormData } from "./types";

interface DividendPolicyFormFieldsProps {
  form: UseFormReturn<DividendPolicyFormData>;
}

export function DividendPolicyFormFields({ form }: DividendPolicyFormFieldsProps) {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter company name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter company address" {...field} />
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
          name="shareholderNames"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shareholder Name(s)</FormLabel>
              <FormControl>
                <Input placeholder="Enter shareholder name(s)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paymentPeriod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Period</FormLabel>
              <FormControl>
                <Input placeholder="e.g., quarterly, annually" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="paymentDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Days</FormLabel>
              <FormControl>
                <Input placeholder="Enter number of days" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </ScrollArea>
  );
}