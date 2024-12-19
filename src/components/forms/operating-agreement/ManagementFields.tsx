import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { OperatingFormData } from "./types";

interface ManagementFieldsProps {
  form: UseFormReturn<OperatingFormData>;
}

export const ManagementFields = ({ form }: ManagementFieldsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="managementType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Management Type</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select management type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="member-managed">Member-Managed</SelectItem>
                  <SelectItem value="manager-managed">Manager-Managed</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="taxStatus"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tax Status</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tax status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="s-corporation">S-Corporation</SelectItem>
                  <SelectItem value="c-corporation">C-Corporation</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};