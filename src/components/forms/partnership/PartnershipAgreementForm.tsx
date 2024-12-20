import { UseFormReturn } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PartnershipFormFields } from "./PartnershipFormFields";
import { PartnershipFormData } from "./types";

interface PartnershipAgreementFormProps {
  form: UseFormReturn<PartnershipFormData>;
}

export const PartnershipAgreementForm = ({ form }: PartnershipAgreementFormProps) => {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <PartnershipFormFields form={form} />
    </ScrollArea>
  );
};