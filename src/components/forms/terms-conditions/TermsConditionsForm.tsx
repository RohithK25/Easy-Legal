import { UseFormReturn } from "react-hook-form";
import { TermsConditionsFormData } from "./types";
import { TermsConditionsFormFields } from "./TermsConditionsFormFields";

interface TermsConditionsFormProps {
  form: UseFormReturn<TermsConditionsFormData>;
}

export const TermsConditionsForm = ({ form }: TermsConditionsFormProps) => {
  return <TermsConditionsFormFields form={form} />;
};