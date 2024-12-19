import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ExitStrategyFormData } from "./types";

interface FounderDetailsFieldsProps {
  form: UseFormReturn<ExitStrategyFormData>;
}

export const FounderDetailsFields = ({ form }: FounderDetailsFieldsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="founderNames"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Founder Name(s)</FormLabel>
            <FormControl>
              <Input placeholder="Enter founder name(s)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="founderAddresses"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Founder Address(es)</FormLabel>
            <FormControl>
              <Input placeholder="Enter founder address(es)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="businessType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Type</FormLabel>
            <FormControl>
              <Input placeholder="e.g., technology startup, e-commerce" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};