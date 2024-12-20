import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const contractorFormSchema = z.object({
  contractorName: z.string().min(1, "Contractor name is required"),
  contractorAddress: z.string().min(1, "Contractor address is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  services: z.string().min(1, "Services description is required"),
  compensation: z.string().min(1, "Compensation amount is required"),
  paymentSchedule: z.string().min(1, "Payment schedule is required"),
  terminationNotice: z.string().min(1, "Termination notice period is required"),
  state: z.string().min(1, "State is required"),
});

export type ContractorFormData = z.infer<typeof contractorFormSchema>;

interface IndependentContractorAgreementFormProps {
  form: UseFormReturn<ContractorFormData>;
}

export const IndependentContractorAgreementForm = ({ form }: IndependentContractorAgreementFormProps) => {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="contractorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contractor Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter contractor name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contractorAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contractor Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter contractor address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="services"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Services Description</FormLabel>
              <FormControl>
                <Input placeholder="Describe the services to be provided" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="compensation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Compensation Amount</FormLabel>
              <FormControl>
                <Input placeholder="Enter compensation amount" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="paymentSchedule"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Schedule</FormLabel>
              <FormControl>
                <Input placeholder="Enter payment schedule (e.g., monthly, bi-weekly)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terminationNotice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Termination Notice Period (days)</FormLabel>
              <FormControl>
                <Input placeholder="Enter notice period in days" {...field} />
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
};