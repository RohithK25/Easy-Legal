import { UseFormReturn } from "react-hook-form";
import { EmploymentFormFields } from "./EmploymentFormFields";
import { EmploymentFormData } from "./types";

interface EmploymentAgreementFormProps {
  form: UseFormReturn<EmploymentFormData>;
}

export const EmploymentAgreementForm = ({ form }: EmploymentAgreementFormProps) => {
  return <EmploymentFormFields form={form} />;
};