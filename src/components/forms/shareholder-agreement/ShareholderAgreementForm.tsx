import { UseFormReturn } from "react-hook-form";
import { ShareholderFormData } from "./types";
import { CompanyDetailsFields } from "./CompanyDetailsFields";
import { ShareholderFields } from "./ShareholderFields";
import { AgreementDetailsFields } from "./AgreementDetailsFields";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ShareholderAgreementFormProps {
  form: UseFormReturn<ShareholderFormData>;
}

export const ShareholderAgreementForm = ({ form }: ShareholderAgreementFormProps) => {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <div className="space-y-6">
        <CompanyDetailsFields form={form} />
        <ShareholderFields form={form} shareholderNumber={1} />
        <ShareholderFields form={form} shareholderNumber={2} />
        <AgreementDetailsFields form={form} />
      </div>
    </ScrollArea>
  );
};