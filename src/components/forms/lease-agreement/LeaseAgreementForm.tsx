import { UseFormReturn } from "react-hook-form";
import { LeaseFormData } from "./types";
import { LeaseFormFields } from "./LeaseFormFields";

interface LeaseAgreementFormProps {
  form: UseFormReturn<LeaseFormData>;
}

export function LeaseAgreementForm({ form }: LeaseAgreementFormProps) {
  return <LeaseFormFields form={form} />;
}