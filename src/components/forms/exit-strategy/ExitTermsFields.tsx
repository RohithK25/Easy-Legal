import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ExitStrategyFormData } from "./types";

interface ExitTermsFieldsProps {
  form: UseFormReturn<ExitStrategyFormData>;
}

export const ExitTermsFields = ({ form }: ExitTermsFieldsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="reviewFrequency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Review Frequency</FormLabel>
            <FormControl>
              <Input placeholder="e.g., annually" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="exitTriggerEvent"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Exit Trigger Event</FormLabel>
            <FormControl>
              <Input placeholder="e.g., reaching certain financial milestones" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="revenueTarget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Revenue Target</FormLabel>
            <FormControl>
              <Input placeholder="Enter revenue target amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="profitTarget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Profit Target</FormLabel>
            <FormControl>
              <Input placeholder="Enter profit target amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};