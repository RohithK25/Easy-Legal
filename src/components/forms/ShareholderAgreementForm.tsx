import { z } from "zod";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const shareholderFormSchema = z.object({
  shareholder1Name: z.string().min(1, "Shareholder 1 name is required"),
  shareholder1Address: z.string().min(1, "Shareholder 1 address is required"),
  shareholder2Name: z.string().min(1, "Shareholder 2 name is required"),
  shareholder2Address: z.string().min(1, "Shareholder 2 address is required"),
  companyName: z.string().min(1, "Company name is required"),
  companyType: z.string().min(1, "Company type is required"),
  state: z.string().min(1, "State is required"),
  incorporationDate: z.string().min(1, "Incorporation date is required"),
  companyAddress: z.string().min(1, "Company address is required"),
  shareholder1Shares: z.string().min(1, "Number of shares is required"),
  shareholder2Shares: z.string().min(1, "Number of shares is required"),
  shareholder1Ownership: z.string().min(1, "Ownership percentage is required"),
  shareholder2Ownership: z.string().min(1, "Ownership percentage is required"),
  shareholder1Directors: z.string().min(1, "Number of directors is required"),
  shareholder2Directors: z.string().min(1, "Number of directors is required"),
  supermajorityThreshold: z.string().min(1, "Supermajority threshold is required"),
  dragAlongThreshold: z.string().min(1, "Drag-along threshold is required"),
  confidentialityPeriod: z.string().min(1, "Confidentiality period is required"),
  amendmentThreshold: z.string().min(1, "Amendment threshold is required"),
});

export type ShareholderFormData = z.infer<typeof shareholderFormSchema>;

interface ShareholderAgreementFormProps {
  form: UseFormReturn<ShareholderFormData>;
}

export const ShareholderAgreementForm = ({ form }: ShareholderAgreementFormProps) => {
  return (
    <div className="space-y-4">
      <div className="space-y-4 border-b pb-4">
        <h3 className="font-medium">Company Information</h3>
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
          name="companyType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select company type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporation">Corporation</SelectItem>
                    <SelectItem value="s-corporation">S-Corporation</SelectItem>
                    <SelectItem value="c-corporation">C-Corporation</SelectItem>
                  </SelectContent>
                </Select>
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
              <FormLabel>State of Incorporation</FormLabel>
              <FormControl>
                <Input placeholder="Enter state" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="incorporationDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Incorporation</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
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
      </div>

      <div className="space-y-4 border-b pb-4">
        <h3 className="font-medium">Shareholder 1 Details</h3>
        <FormField
          control={form.control}
          name="shareholder1Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter shareholder 1 name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareholder1Address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter shareholder 1 address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareholder1Shares"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Shares</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter number of shares" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareholder1Ownership"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ownership Percentage (%)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter ownership percentage" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareholder1Directors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Directors to Appoint</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter number of directors" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4 border-b pb-4">
        <h3 className="font-medium">Shareholder 2 Details</h3>
        <FormField
          control={form.control}
          name="shareholder2Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter shareholder 2 name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareholder2Address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter shareholder 2 address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareholder2Shares"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Shares</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter number of shares" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareholder2Ownership"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ownership Percentage (%)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter ownership percentage" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shareholder2Directors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Directors to Appoint</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter number of directors" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-medium">Agreement Details</h3>
        <FormField
          control={form.control}
          name="supermajorityThreshold"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Supermajority Vote Threshold (%)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter supermajority threshold" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dragAlongThreshold"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Drag-Along Rights Threshold (%)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter drag-along threshold" {...field} />
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
                <Input type="number" placeholder="Enter confidentiality period" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="amendmentThreshold"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amendment Threshold (%)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter amendment threshold" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};