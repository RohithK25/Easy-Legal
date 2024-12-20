import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { EmploymentFormData } from "./types";

interface EmploymentFormFieldsProps {
  form: UseFormReturn<EmploymentFormData>;
}

export const EmploymentFormFields = ({ form }: EmploymentFormFieldsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="employerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Employer Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter employer name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="employerAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Employer Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter employer address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="employeeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Employee Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter employee name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="employeeAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Employee Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter employee address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="position"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Position</FormLabel>
            <FormControl>
              <Input placeholder="Enter position" {...field} />
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
        name="salary"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Salary</FormLabel>
            <FormControl>
              <Input placeholder="Enter salary" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="paymentFrequency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Frequency</FormLabel>
            <FormControl>
              <Input placeholder="Enter payment frequency" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="workHours"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Work Hours</FormLabel>
            <FormControl>
              <Input placeholder="Enter work hours" {...field} />
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
};