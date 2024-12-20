import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { IndependentContractorFormData } from "./types";

interface IndependentContractorAgreementFormProps {
  form: UseFormReturn<IndependentContractorFormData>;
}

export function IndependentContractorAgreementForm({ form }: IndependentContractorAgreementFormProps) {
  return (
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
        name="services"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Services Description</FormLabel>
            <FormControl>
              <Input placeholder="Describe the services" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="paymentTerms"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Terms</FormLabel>
            <FormControl>
              <Input placeholder="Enter payment terms" {...field} />
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
  );
}