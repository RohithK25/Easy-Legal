import { UseFormReturn } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { EmploymentFormFields } from "./EmploymentFormFields";
import { EmploymentFormData } from "./types";

interface EmploymentAgreementFormProps {
  form: UseFormReturn<EmploymentFormData>;
}

export const EmploymentAgreementForm = ({ form }: EmploymentAgreementFormProps) => {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <EmploymentFormFields form={form} />
    </ScrollArea>
  );
};