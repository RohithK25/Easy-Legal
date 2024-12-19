import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { LoanNoteFormData } from "./types";
import { LoanNoteFormFields } from "./LoanNoteFormFields";

interface LoanNoteFormProps {
  form: UseFormReturn<LoanNoteFormData>;
}

export function LoanNoteForm({ form }: LoanNoteFormProps) {
  return (
    <div className="space-y-4">
      <LoanNoteFormFields form={form} />
    </div>
  );
}

export type { LoanNoteFormData } from "./types";
export { loanNoteFormSchema } from "./types";