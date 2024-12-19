import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { OperatingFormData } from "./types";

interface MemberFieldsProps {
  form: UseFormReturn<OperatingFormData>;
  memberNumber: 1 | 2;
}

export const MemberFields = ({ form, memberNumber }: MemberFieldsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name={`member${memberNumber}Name` as keyof OperatingFormData}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member {memberNumber} Full Name</FormLabel>
            <FormControl>
              <Input placeholder={`Enter member ${memberNumber} name`} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`member${memberNumber}Address` as keyof OperatingFormData}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member {memberNumber} Address</FormLabel>
            <FormControl>
              <Input placeholder={`Enter member ${memberNumber} address`} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`member${memberNumber}Contribution` as keyof OperatingFormData}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member {memberNumber} Initial Capital Contribution ($)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`member${memberNumber}Ownership` as keyof OperatingFormData}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Member {memberNumber} Ownership Percentage (%)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter percentage" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};