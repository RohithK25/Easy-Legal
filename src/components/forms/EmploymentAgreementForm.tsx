import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";

export const employmentFormSchema = z.object({
  employerName: z.string().min(1, "Employer name is required"),
  employerAddress: z.string().min(1, "Employer address is required"),
  employeeName: z.string().min(1, "Employee name is required"),
  employeeAddress: z.string().min(1, "Employee address is required"),
  startDate: z.string().min(1, "Start date is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  salary: z.string().min(1, "Salary is required"),
  supervisorName: z.string().min(1, "Supervisor name is required"),
});

export type EmploymentFormData = z.infer<typeof employmentFormSchema>;

export const EmploymentAgreementForm = () => {
  const form = useFormContext<EmploymentFormData>();

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
        name="jobTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="Enter job title" {...field} />
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
              <Input placeholder="Enter salary amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="supervisorName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Supervisor Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter supervisor name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};