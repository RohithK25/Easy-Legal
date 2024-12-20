import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const stockOptionFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  optionHolderName: z.string().min(1, "Option holder name is required"),
  optionHolderAddress: z.string().min(1, "Option holder address is required"),
  effectiveDate: z.string().min(1, "Effective date is required"),
  numberOfShares: z.string().min(1, "Number of shares is required"),
  exercisePrice: z.string().min(1, "Exercise price is required"),
  vestingSchedule: z.string().min(1, "Vesting schedule is required"),
  optionTerm: z.string().min(1, "Option term is required"),
  expirationDate: z.string().min(1, "Expiration date is required"),
  terminationPeriod: z.string().min(1, "Termination period is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  state: z.string().min(1, "State is required"),
});

export type StockOptionFormData = z.infer<typeof stockOptionFormSchema>;

interface StockOptionAgreementFormProps {
  form: UseFormReturn<StockOptionFormData>;
}

export function StockOptionAgreementForm({ form }: StockOptionAgreementFormProps) {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <div className="space-y-4">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="companyAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter company address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="optionHolderName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Option Holder Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter option holder name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="optionHolderAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Option Holder Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter option holder address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
        name="numberOfShares"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Number of Shares</FormLabel>
            <FormControl>
              <Input placeholder="Enter number of shares" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="exercisePrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Exercise Price per Share</FormLabel>
            <FormControl>
              <Input placeholder="Enter exercise price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="vestingSchedule"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vesting Schedule</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 25% annually over 4 years" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="optionTerm"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Option Term (years)</FormLabel>
            <FormControl>
              <Input placeholder="Enter option term" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="expirationDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expiration Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="terminationPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Termination Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="Enter termination period" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Method</FormLabel>
            <FormControl>
              <Input placeholder="e.g., check, wire transfer" {...field} />
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
    </ScrollArea>
  );
}
