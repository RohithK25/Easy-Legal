import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { WaiverReleaseFormData } from "./types";

interface WaiverReleaseFormFieldsProps {
  form: UseFormReturn<WaiverReleaseFormData>;
}

export function WaiverReleaseFormFields({ form }: WaiverReleaseFormFieldsProps) {
  return (
    <div className="space-y-4">
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
        name="releasorName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Releasor's Full Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="releasorAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Releasor's Address</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="releaseeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Releasee's Full Name or Company Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="releaseeAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Releasee's Address</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="activityDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Activity Description</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="Describe the activity or event (e.g., workshops, training, exercise)" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="risks"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Risks Description</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder="Describe the potential risks (e.g., physical injury, property damage)" />
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
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="county"
        render={({ field }) => (
          <FormItem>
            <FormLabel>County</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="notaryName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Notary Name (Optional)</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}