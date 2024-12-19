import { UseFormReturn } from "react-hook-form";
import { LoanFormData } from "./types";
import { LoanFormFields } from "./LoanFormFields";

interface LoanAgreementFormProps {
  form: UseFormReturn<LoanFormData>;
}

export const LoanAgreementForm = ({ form }: LoanAgreementFormProps) => {
  return <LoanFormFields form={form} />;
};