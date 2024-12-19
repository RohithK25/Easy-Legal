import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { UseFormReturn } from "react-hook-form";

export const employmentFormSchema = z.object({
  employerName: z.string().min(1, "Employer name is required"),
  employerAddress: z.string().min(1, "Employer address is required"),
  employeeName: z.string().min(1, "Employee name is required"),
  employeeAddress: z.string().min(1, "Employee address is required"),
  startDate: z.string().min(1, "Start date is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  salary: z.string().min(1, "Salary amount is required"),
  salaryPeriod: z.enum(["hour", "week", "month", "year"], {
    required_error: "Please select a salary period",
  }),
  supervisorName: z.string().min(1, "Supervisor name is required"),
  nonCompetePeriod: z.string().min(1, "Non-compete period is required"),
  geographicArea: z.string().min(1, "Geographic area is required"),
  noticePeriod: z.string().min(1, "Notice period is required"),
  state: z.string().min(1, "State is required"),
});

export type EmploymentFormData = z.infer<typeof employmentFormSchema>;

interface EmploymentAgreementFormProps {
  form: UseFormReturn<EmploymentFormData>;
}

export const EmploymentAgreementForm = ({ form }: EmploymentAgreementFormProps) => {
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
            <FormLabel>Salary Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter salary amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="salaryPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Salary Period</FormLabel>
            <FormControl>
              <select
                {...field}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select period</option>
                <option value="hour">Per Hour</option>
                <option value="week">Per Week</option>
                <option value="month">Per Month</option>
                <option value="year">Per Year</option>
              </select>
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

      <FormField
        control={form.control}
        name="nonCompetePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Non-Compete Period (in years)</FormLabel>
            <FormControl>
              <Input placeholder="Enter non-compete period" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="geographicArea"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Geographic Area</FormLabel>
            <FormControl>
              <Input placeholder="Enter geographic area" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="noticePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Notice Period (in weeks)</FormLabel>
            <FormControl>
              <Input placeholder="Enter notice period" {...field} />
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