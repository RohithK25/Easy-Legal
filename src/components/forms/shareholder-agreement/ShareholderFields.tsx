import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ShareholderFormData } from "./types";

interface ShareholderFieldsProps {
  form: UseFormReturn<ShareholderFormData>;
  shareholderNumber: 1 | 2;
}

export const ShareholderFields = ({ form, shareholderNumber }: ShareholderFieldsProps) => {
  const prefix = `shareholder${shareholderNumber}` as const;
  
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Shareholder {shareholderNumber} Details</h3>
      <FormField
        control={form.control}
        name={`${prefix}Name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder={`Enter shareholder ${shareholderNumber} name`} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${prefix}Address`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormControl>
              <Input placeholder={`Enter shareholder ${shareholderNumber} address`} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${prefix}Shares`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Shares</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter number of shares" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${prefix}Ownership`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Ownership Percentage (%)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter ownership percentage" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`${prefix}Directors`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Directors to Appoint</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter number of directors" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};