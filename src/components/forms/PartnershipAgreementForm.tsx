import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { z } from "zod";

export const partnershipFormSchema = z.object({
  partner1Name: z.string().min(1, "Partner 1 name is required"),
  partner1Address: z.string().min(1, "Partner 1 address is required"),
  partner2Name: z.string().min(1, "Partner 2 name is required"),
  partner2Address: z.string().min(1, "Partner 2 address is required"),
  partnershipName: z.string().min(1, "Partnership name is required"),
  businessActivity: z.string().min(1, "Business activity is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  partner1Contribution: z.string().min(1, "Partner 1 contribution is required"),
  partner2Contribution: z.string().min(1, "Partner 2 contribution is required"),
  partner1Ownership: z.string().min(1, "Partner 1 ownership percentage is required"),
  partner2Ownership: z.string().min(1, "Partner 2 ownership percentage is required"),
  profitDistribution: z.string().min(1, "Profit distribution period is required"),
  withdrawalNotice: z.string().min(1, "Withdrawal notice period is required"),
  state: z.string().min(1, "State is required"),
  location: z.string().min(1, "Location is required"),
});

export type PartnershipFormData = z.infer<typeof partnershipFormSchema>;

interface PartnershipAgreementFormProps {
  form: UseFormReturn<PartnershipFormData>;
}

export const PartnershipAgreementForm = ({ form }: PartnershipAgreementFormProps) => {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <div className="space-y-4">
      <FormField
        control={form.control}
        name="partner1Name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partner 1 Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter partner 1 name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partner1Address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partner 1 Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter partner 1 address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partner2Name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partner 2 Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter partner 2 name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partner2Address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partner 2 Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter partner 2 address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partnershipName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partnership Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter partnership name" {...field} />
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
            <FormLabel>Business Activity</FormLabel>
            <FormControl>
              <Input placeholder="Describe the business activity" {...field} />
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
        name="partner1Contribution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partner 1 Contribution</FormLabel>
            <FormControl>
              <Input placeholder="Enter contribution amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partner2Contribution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partner 2 Contribution</FormLabel>
            <FormControl>
              <Input placeholder="Enter contribution amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partner1Ownership"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partner 1 Ownership Percentage</FormLabel>
            <FormControl>
              <Input placeholder="Enter ownership percentage" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partner2Ownership"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Partner 2 Ownership Percentage</FormLabel>
            <FormControl>
              <Input placeholder="Enter ownership percentage" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="profitDistribution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Profit Distribution Period</FormLabel>
            <FormControl>
              <Input placeholder="Enter distribution period (e.g., quarterly, annual)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="withdrawalNotice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Withdrawal Notice Period (days)</FormLabel>
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
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter location" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
    </ScrollArea>
  );
};
