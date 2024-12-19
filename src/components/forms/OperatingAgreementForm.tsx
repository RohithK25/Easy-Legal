import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

export const operatingFormSchema = z.object({
  llcName: z.string().min(1, "LLC name is required"),
  member1Name: z.string().min(1, "Member 1 name is required"),
  member1Address: z.string().min(1, "Member 1 address is required"),
  member2Name: z.string().min(1, "Member 2 name is required"),
  member2Address: z.string().min(1, "Member 2 address is required"),
  state: z.string().min(1, "State is required"),
  filingDate: z.string().min(1, "Filing date is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  businessActivity: z.string().min(1, "Business activity is required"),
  member1Contribution: z.string().min(1, "Member 1 contribution is required"),
  member2Contribution: z.string().min(1, "Member 2 contribution is required"),
  member1Ownership: z.string().min(1, "Member 1 ownership percentage is required"),
  member2Ownership: z.string().min(1, "Member 2 ownership percentage is required"),
  managementType: z.string().min(1, "Management type is required"),
  taxStatus: z.string().min(1, "Tax status is required"),
});

export type OperatingFormData = z.infer<typeof operatingFormSchema>;

interface OperatingAgreementFormProps {
  form: UseFormReturn<OperatingFormData>;
}

export const OperatingAgreementForm = ({ form }: OperatingAgreementFormProps) => {
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
        name="member1Name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member 1 Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter member 1 name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="member1Address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member 1 Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter member 1 address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="member2Name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member 2 Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter member 2 name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="member2Address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member 2 Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter member 2 address" {...field} />
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
            <FormLabel>Business Activity</FormLabel>
            <FormControl>
              <Input placeholder="Enter business activity" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="member1Contribution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member 1 Contribution ($)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="member2Contribution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member 2 Contribution ($)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="member1Ownership"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member 1 Ownership (%)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter percentage" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="member2Ownership"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member 2 Ownership (%)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter percentage" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="managementType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Management Type</FormLabel>
            <FormControl>
              <Input placeholder="Enter management type (e.g., Members/Manager)" {...field} />
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
              <Input placeholder="Enter tax status (e.g., partnership/S-corp/C-corp)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};