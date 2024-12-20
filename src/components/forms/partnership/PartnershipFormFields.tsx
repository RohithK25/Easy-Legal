import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { PartnershipFormData } from "./types";

interface PartnershipFormFieldsProps {
  form: UseFormReturn<PartnershipFormData>;
}

export const PartnershipFormFields = ({ form }: PartnershipFormFieldsProps) => {
  return (
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
  );
};