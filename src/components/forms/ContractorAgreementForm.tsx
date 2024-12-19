import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

export const contractorFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  contractorName: z.string().min(1, "Contractor name is required"),
  contractorAddress: z.string().min(1, "Contractor address is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  amount: z.string().min(1, "Payment amount is required"),
  paymentSchedule: z.string().min(1, "Payment schedule is required"),
  invoicePeriod: z.string().min(1, "Invoice period is required"),
  noticePeriod: z.string().min(1, "Notice period is required"),
  nonSolicitPeriod: z.string().min(1, "Non-solicitation period is required"),
  state: z.string().min(1, "State is required"),
  location: z.string().min(1, "Location is required"),
});

export type ContractorFormData = z.infer<typeof contractorFormSchema>;

interface ContractorAgreementFormProps {
  form: UseFormReturn<ContractorFormData>;
}

export const ContractorAgreementForm = ({ form }: ContractorAgreementFormProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Payment Amount</FormLabel>
              <FormControl>
                <Input placeholder="Enter payment amount" {...field} />
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
                <Input placeholder="e.g., weekly, monthly, upon completion" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="invoicePeriod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Invoice Payment Period (days)</FormLabel>
              <FormControl>
                <Input placeholder="Enter number of days" {...field} />
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
                <Input placeholder="Enter notice period in days" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="nonSolicitPeriod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Non-Solicitation Period (years)</FormLabel>
              <FormControl>
                <Input placeholder="Enter period in years" {...field} />
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
              <FormLabel>Governing Law State</FormLabel>
              <FormControl>
                <Input placeholder="Enter state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dispute Resolution Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter location" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};