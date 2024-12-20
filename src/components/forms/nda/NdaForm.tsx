import { UseFormReturn } from "react-hook-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NdaFormFields } from "./NdaFormFields";
import { NdaFormData } from "./types";

interface NdaFormProps {
  form: UseFormReturn<NdaFormData>;
}

export const NdaForm = ({ form }: NdaFormProps) => {
  return (
    <ScrollArea className="h-[60vh] pr-4">
      <NdaFormFields form={form} />
    </ScrollArea>
  );
};