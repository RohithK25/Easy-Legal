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

interface PropertyFieldsProps {
  form: UseFormReturn<LeaseFormData>;
}

export function PropertyFields({ form }: PropertyFieldsProps) {
  return (
    <div className="space-y-4">
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
    </div>
  );
}