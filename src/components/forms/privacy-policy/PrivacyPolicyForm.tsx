import { UseFormReturn } from "react-hook-form";
import { PrivacyPolicyFormData } from "./types";
import { PrivacyPolicyFormFields } from "./PrivacyPolicyFormFields";

interface PrivacyPolicyFormProps {
  form: UseFormReturn<PrivacyPolicyFormData>;
}

export const PrivacyPolicyForm = ({ form }: PrivacyPolicyFormProps) => {
  return <PrivacyPolicyFormFields form={form} />;
};