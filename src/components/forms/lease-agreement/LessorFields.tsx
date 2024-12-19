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

interface LessorFieldsProps {
  form: UseFormReturn<LeaseFormData>;
}

export function LessorFields({ form }: LessorFieldsProps) {
  return (
    <div className="space-y-4">
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
    </div>
  );
}