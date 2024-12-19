import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const nonCompeteFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  employeeName: z.string().min(1, "Employee/Contractor name is required"),
  employeeAddress: z.string().min(1, "Employee/Contractor address is required"),
  effectiveDate: z.string().min(1, "Effective date is required"),
  nonCompetePeriod: z.string().min(1, "Non-compete period is required"),
  geographicArea: z.string().min(1, "Geographic area is required"),
  industry: z.string().min(1, "Industry description is required"),
  nonSolicitPeriod: z.string().min(1, "Non-solicitation period is required"),
  state: z.string().min(1, "State is required"),
});

export type NonCompeteFormData = z.infer<typeof nonCompeteFormSchema>;

interface NonCompeteAgreementFormProps {
  form: UseFormReturn<NonCompeteFormData>;
}

export const NonCompeteAgreementForm = ({ form }: NonCompeteAgreementFormProps) => {
  return (
    <div className="grid gap-4 py-4">
      <FormField
        control={form.control}
        name="companyName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="companyAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter company address" {...field} />
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
            <FormLabel>Employee/Contractor Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter employee/contractor name" {...field} />
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
            <FormLabel>Employee/Contractor Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter employee/contractor address" {...field} />
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
        name="nonCompetePeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Non-Compete Period (in years)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter number of years" {...field} />
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
              <Input placeholder="Enter geographic area (e.g., United States, specific states)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="industry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Industry Description</FormLabel>
            <FormControl>
              <Input placeholder="Enter industry (e.g., technology, software development)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="nonSolicitPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Non-Solicitation Period (in years)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter number of years" {...field} />
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