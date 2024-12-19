import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

export const confidentialityFormSchema = z.object({
  partyAName: z.string().min(1, "Party A name is required"),
  partyAAddress: z.string().min(1, "Party A address is required"),
  partyBName: z.string().min(1, "Party B name is required"),
  partyBAddress: z.string().min(1, "Party B address is required"),
  effectiveDate: z.string().min(1, "Effective date is required"),
  returnPeriod: z.string().min(1, "Return period is required"),
  confidentialityPeriod: z.string().min(1, "Confidentiality period is required"),
  state: z.string().min(1, "State is required"),
  location: z.string().min(1, "Location is required"),
});

export type ConfidentialityFormData = z.infer<typeof confidentialityFormSchema>;

interface ConfidentialityAgreementFormProps {
  form: UseFormReturn<ConfidentialityFormData>;
}

export const ConfidentialityAgreementForm = ({ form }: ConfidentialityAgreementFormProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="partyAName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Disclosing Party Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter the name of the disclosing party" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partyAAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Disclosing Party Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter the address of the disclosing party" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partyBName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Receiving Party Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter the name of the receiving party" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="partyBAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Receiving Party Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter the address of the receiving party" {...field} />
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
        name="confidentialityPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confidentiality Period (years)</FormLabel>
            <FormControl>
              <Input placeholder="Enter the confidentiality period in years" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="returnPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Return Period (days)</FormLabel>
            <FormControl>
              <Input placeholder="Enter the return period in days" {...field} />
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
              <Input placeholder="Enter the state" {...field} />
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
            <FormLabel>Dispute Resolution Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter the location" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};