import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { IpAssignmentFormData } from "./types";

interface IpAssignmentFormFieldsProps {
  form: UseFormReturn<IpAssignmentFormData>;
}

export function IpAssignmentFormFields({ form }: IpAssignmentFormFieldsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="assignorName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Assignor Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter assignor's full name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="assignorAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Assignor Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter assignor's address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="assigneeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Assignee Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter assignee's name or company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="assigneeAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Assignee Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter assignee's address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="workDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Work Description</FormLabel>
            <FormControl>
              <Input placeholder="Describe the work, project, or area of work" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="relationshipType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Relationship Type</FormLabel>
            <FormControl>
              <Input placeholder="e.g., employment, contractual agreement, partnership" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="consideration"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Consideration</FormLabel>
            <FormControl>
              <Input placeholder="Enter amount or describe other consideration" {...field} />
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