import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { IpAssignmentFormData } from "./types";
import { IpAssignmentFormFields } from "./IpAssignmentFormFields";

interface IpAssignmentFormProps {
  form: UseFormReturn<IpAssignmentFormData>;
}

export function IpAssignmentForm({ form }: IpAssignmentFormProps) {
  return (
    <div className="space-y-4">
      <IpAssignmentFormFields form={form} />
    </div>
  );
}