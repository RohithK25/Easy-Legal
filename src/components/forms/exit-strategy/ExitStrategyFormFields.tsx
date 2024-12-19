import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ExitStrategyFormData } from "./types";
import { CompanyDetailsFields } from "./CompanyDetailsFields";
import { FounderDetailsFields } from "./FounderDetailsFields";
import { ExitTermsFields } from "./ExitTermsFields";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ExitStrategyFormFieldsProps {
  form: UseFormReturn<ExitStrategyFormData>;
}

export const ExitStrategyFormFields = ({ form }: ExitStrategyFormFieldsProps) => {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-6">
        <CompanyDetailsFields form={form} />
        <FounderDetailsFields form={form} />
        <ExitTermsFields form={form} />
        
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="shareholderApprovalPercentage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shareholder Approval Percentage</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 75" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="valuationMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valuation Method</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., independent third-party appraiser" {...field} />
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
        </div>
      </div>
    </ScrollArea>
  );
};