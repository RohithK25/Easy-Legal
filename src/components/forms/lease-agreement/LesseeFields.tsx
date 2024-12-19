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

interface LesseeFieldsProps {
  form: UseFormReturn<LeaseFormData>;
}

export function LesseeFields({ form }: LesseeFieldsProps) {
  return (
    <div className="space-y-4">
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
    </div>
  );
}