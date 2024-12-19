import { UseFormReturn } from "react-hook-form";
import { LoanFormFields } from "./LoanFormFields";
import { LoanFormData, loanFormSchema } from "./types";

interface LoanAgreementFormProps {
  form: UseFormReturn<LoanFormData>;
}

export const LoanAgreementForm = ({ form }: LoanAgreementFormProps) => {
  return (
    <div className="max-h-[60vh] overflow-y-auto pr-6">
      <LoanFormFields form={form} />
    </div>
  );
};

export type { LoanFormData };
export { loanFormSchema };