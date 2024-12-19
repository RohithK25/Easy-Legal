import { UseFormReturn } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CompanyFields } from "./CompanyFields";
import { MemberFields } from "./MemberFields";
import { ManagementFields } from "./ManagementFields";
import { OperatingFormData } from "./types";

interface OperatingAgreementFormProps {
  form: UseFormReturn<OperatingFormData>;
}

export const OperatingAgreementForm = ({ form }: OperatingAgreementFormProps) => {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <div className="space-y-6">
        <CompanyFields form={form} />
        <MemberFields form={form} memberNumber={1} />
        <MemberFields form={form} memberNumber={2} />
        <ManagementFields form={form} />
      </div>
    </ScrollArea>
  );
};