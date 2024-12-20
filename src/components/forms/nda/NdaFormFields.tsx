import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { NdaFormData } from "./types";

interface NdaFormFieldsProps {
  form: UseFormReturn<NdaFormData>;
}

export const NdaFormFields = ({ form }: NdaFormFieldsProps) => {
  return (
    <div className="space-y-4">
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