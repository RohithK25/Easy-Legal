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
    <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
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
            <FormLabel>Releasor&apos;s Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter releasor's full name" {...field} />
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
            <FormLabel>Releasor&apos;s Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter releasor's complete address" {...field} />
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
            <FormLabel>Releasee&apos;s Name or Company Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter releasee's name or company name" {...field} />
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
            <FormLabel>Releasee&apos;s Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter releasee's complete address" {...field} />
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
              <Textarea 
                placeholder="Describe the activity or event (e.g., workshops, training sessions, exercise programs)" 
                className="min-h-[100px]"
                {...field} 
              />
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
              <Textarea 
                placeholder="Describe potential risks (e.g., physical injury, property damage, health risks)"
                className="min-h-[100px]"
                {...field} 
              />
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
              <Input placeholder="Enter state name" {...field} />
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
              <Input placeholder="Enter county name" {...field} />
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
              <Input placeholder="Enter notary name (if applicable)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}