import { UseFormReturn } from "react-hook-form";
import { LoanFormFields } from "./LoanFormFields";
import { LoanFormData, loanFormSchema } from "./types";

interface LoanAgreementFormProps {
  form: UseFormReturn<LoanFormData>;
}

export const LoanAgreementForm = ({ form }: LoanAgreementFormProps) => {
  return <LoanFormFields form={form} />;
};

export type { LoanFormData };
export { loanFormSchema };