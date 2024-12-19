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

interface TermsFieldsProps {
  form: UseFormReturn<LeaseFormData>;
}

export function TermsFields({ form }: TermsFieldsProps) {
  return (
    <div className="space-y-4">
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
    </div>
  );
}