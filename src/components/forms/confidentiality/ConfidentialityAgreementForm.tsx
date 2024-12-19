import { UseFormReturn } from "react-hook-form";
import { ConfidentialityFormData } from "./types";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ConfidentialityAgreementFormProps {
  form: UseFormReturn<ConfidentialityFormData>;
}

export const ConfidentialityAgreementForm = ({ form }: ConfidentialityAgreementFormProps) => {
  return (
    <>
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
        name="partyAName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Disclosing Party Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter disclosing party name" {...field} />
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
              <Input placeholder="Enter disclosing party address" {...field} />
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
              <Input placeholder="Enter receiving party name" {...field} />
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
              <Input placeholder="Enter receiving party address" {...field} />
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
              <Input placeholder="Enter confidentiality period" {...field} />
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
              <Input placeholder="Enter return period" {...field} />
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
    </>
  );
};