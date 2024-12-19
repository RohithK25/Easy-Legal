import { UseFormReturn } from "react-hook-form";
import { SalesFormData } from "./types";
import { SalesFormFields } from "./SalesFormFields";

interface SalesAgreementFormProps {
  form: UseFormReturn<SalesFormData>;
}

export function SalesAgreementForm({ form }: SalesAgreementFormProps) {
  return <SalesFormFields form={form} />;
}