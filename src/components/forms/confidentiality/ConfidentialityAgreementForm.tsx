import { UseFormReturn } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ConfidentialityFormFields } from "./ConfidentialityFormFields";
import { ConfidentialityFormData } from "./types";

interface ConfidentialityAgreementFormProps {
  form: UseFormReturn<ConfidentialityFormData>;
}

export const ConfidentialityAgreementForm = ({ form }: ConfidentialityAgreementFormProps) => {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <ConfidentialityFormFields form={form} />
    </ScrollArea>
  );
};