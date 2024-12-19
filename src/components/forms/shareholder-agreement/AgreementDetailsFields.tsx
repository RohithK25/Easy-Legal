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

interface AgreementDetailsFieldsProps {
  form: UseFormReturn<ShareholderFormData>;
}

export const AgreementDetailsFields = ({ form }: AgreementDetailsFieldsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Agreement Details</h3>
      <FormField
        control={form.control}
        name="supermajorityThreshold"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Supermajority Vote Threshold (%)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter supermajority threshold" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="dragAlongThreshold"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Drag-Along Rights Threshold (%)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter drag-along threshold" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="confidentialityPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confidentiality Period (years)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter confidentiality period" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="amendmentThreshold"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amendment Threshold (%)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter amendment threshold" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};