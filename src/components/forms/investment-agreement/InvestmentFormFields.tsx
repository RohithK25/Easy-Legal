import { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { InvestmentFormData } from "./types";

interface InvestmentFormFieldsProps {
  form: UseFormReturn<InvestmentFormData>;
}

export function InvestmentFormFields({ form }: InvestmentFormFieldsProps) {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="investorName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Investor Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter investor name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="investorAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Investor Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter investor address" {...field} />
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
          name="investmentAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Investment Amount ($)</FormLabel>
              <FormControl>
                <Input placeholder="Enter investment amount" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfShares"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Shares</FormLabel>
              <FormControl>
                <Input placeholder="Enter number of shares" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pricePerShare"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price per Share ($)</FormLabel>
              <FormControl>
                <Input placeholder="Enter price per share" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="closingDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Closing Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="boardRepresentationThreshold"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Board Representation Threshold (%)</FormLabel>
              <FormControl>
                <Input placeholder="Enter threshold percentage" {...field} />
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
              <FormLabel>Non-Compete Period (years)</FormLabel>
              <FormControl>
                <Input placeholder="Enter non-compete period" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="geographicRegion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Geographic Region</FormLabel>
              <FormControl>
                <Input placeholder="Enter geographic region" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </ScrollArea>
  );
}