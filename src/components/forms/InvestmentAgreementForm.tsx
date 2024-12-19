import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const investmentFormSchema = z.object({
  investorName: z.string().min(1, "Investor name is required"),
  investorAddress: z.string().min(1, "Investor address is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  state: z.string().min(1, "State is required"),
  investmentAmount: z.string().min(1, "Investment amount is required"),
  numberOfShares: z.string().min(1, "Number of shares is required"),
  pricePerShare: z.string().min(1, "Price per share is required"),
  closingDate: z.string().min(1, "Closing date is required"),
  boardRepresentationThreshold: z.string().min(1, "Board representation threshold is required"),
  nonCompetePeriod: z.string().min(1, "Non-compete period is required"),
  geographicRegion: z.string().min(1, "Geographic region is required"),
});

export type InvestmentFormData = z.infer<typeof investmentFormSchema>;

interface InvestmentAgreementFormProps {
  form: UseFormReturn<InvestmentFormData>;
}

export const InvestmentAgreementForm = ({ form }: InvestmentAgreementFormProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="investorName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Investor Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter investor name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="investorAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Investor Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter investor address" {...field} />
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
        name="investmentAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Investment Amount ($)</FormLabel>
            <FormControl>
              <Input placeholder="Enter investment amount" {...field} />
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
        name="pricePerShare"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price per Share ($)</FormLabel>
            <FormControl>
              <Input placeholder="Enter price per share" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="closingDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Closing Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="boardRepresentationThreshold"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Board Representation Threshold (%)</FormLabel>
            <FormControl>
              <Input placeholder="Enter threshold percentage" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="nonCompetePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Non-Compete Period (years)</FormLabel>
            <FormControl>
              <Input placeholder="Enter non-compete period" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="geographicRegion"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Geographic Region</FormLabel>
            <FormControl>
              <Input placeholder="Enter geographic region" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};