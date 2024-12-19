import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { ExitStrategyFormData } from "./types";

interface ExitStrategyFormFieldsProps {
  form: UseFormReturn<ExitStrategyFormData>;
}

export const ExitStrategyFormFields = ({ form }: ExitStrategyFormFieldsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4">
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
        name="founderNames"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Founder Name(s)</FormLabel>
            <FormControl>
              <Input placeholder="Enter founder name(s)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="founderAddresses"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Founder Address(es)</FormLabel>
            <FormControl>
              <Input placeholder="Enter founder address(es)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="businessType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Type</FormLabel>
            <FormControl>
              <Input placeholder="e.g., technology startup, e-commerce" {...field} />
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
        name="reviewFrequency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Review Frequency</FormLabel>
            <FormControl>
              <Input placeholder="e.g., annually" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="exitTriggerEvent"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Exit Trigger Event</FormLabel>
            <FormControl>
              <Input placeholder="e.g., reaching certain financial milestones" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="revenueTarget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Revenue Target</FormLabel>
            <FormControl>
              <Input placeholder="Enter revenue target amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="profitTarget"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Profit Target</FormLabel>
            <FormControl>
              <Input placeholder="Enter profit target amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="shareholderApprovalPercentage"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Shareholder Approval Percentage</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 75" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="valuationMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Valuation Method</FormLabel>
            <FormControl>
              <Input placeholder="e.g., independent third-party appraiser" {...field} />
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
            <FormLabel>Non-Compete Period</FormLabel>
            <FormControl>
              <Input placeholder="e.g., two years" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="geographicalScope"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Geographical Scope</FormLabel>
            <FormControl>
              <Input placeholder="e.g., United States" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="nonSolicitationPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Non-Solicitation Period</FormLabel>
            <FormControl>
              <Input placeholder="e.g., one year" {...field} />
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
            <FormLabel>Confidentiality Period</FormLabel>
            <FormControl>
              <Input placeholder="Enter number of years" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="arbitrationBody"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Arbitration Body</FormLabel>
            <FormControl>
              <Input placeholder="e.g., American Arbitration Association" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};