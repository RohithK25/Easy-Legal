import { UseFormReturn } from "react-hook-form";
import { InvestmentFormData } from "./types";
import { InvestmentFormFields } from "./InvestmentFormFields";

interface InvestmentAgreementFormProps {
  form: UseFormReturn<InvestmentFormData>;
}

export function InvestmentAgreementForm({ form }: InvestmentAgreementFormProps) {
  return <InvestmentFormFields form={form} />;
}