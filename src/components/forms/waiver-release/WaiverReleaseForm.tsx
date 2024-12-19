import { UseFormReturn } from "react-hook-form";
import { WaiverReleaseFormData } from "./types";
import { WaiverReleaseFormFields } from "./WaiverReleaseFormFields";

interface WaiverReleaseFormProps {
  form: UseFormReturn<WaiverReleaseFormData>;
}

export function WaiverReleaseForm({ form }: WaiverReleaseFormProps) {
  return <WaiverReleaseFormFields form={form} />;
}