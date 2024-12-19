import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { OperatingFormData } from "./types";

interface CompanyFieldsProps {
  form: UseFormReturn<OperatingFormData>;
}

export const CompanyFields = ({ form }: CompanyFieldsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="llcName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LLC Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter LLC name" {...field} />
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
        name="filingDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Filing Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="businessAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter business address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="businessActivity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Activity Description</FormLabel>
            <FormControl>
              <Input placeholder="Enter business activity" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};