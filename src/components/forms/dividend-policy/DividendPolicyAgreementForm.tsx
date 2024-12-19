import { UseFormReturn } from "react-hook-form";
import { DividendPolicyFormData } from "./types";
import { DividendPolicyFormFields } from "./DividendPolicyFormFields";

interface DividendPolicyAgreementFormProps {
  form: UseFormReturn<DividendPolicyFormData>;
}

export function DividendPolicyAgreementForm({ form }: DividendPolicyAgreementFormProps) {
  return <DividendPolicyFormFields form={form} />;
}

export { dividendPolicyFormSchema } from "./types";
export type { DividendPolicyFormData } from "./types";