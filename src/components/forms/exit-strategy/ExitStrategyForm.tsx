import { UseFormReturn } from "react-hook-form";
import { ExitStrategyFormData } from "./types";
import { ExitStrategyFormFields } from "./ExitStrategyFormFields";

interface ExitStrategyFormProps {
  form: UseFormReturn<ExitStrategyFormData>;
}

export const ExitStrategyForm = ({ form }: ExitStrategyFormProps) => {
  return <ExitStrategyFormFields form={form} />;
};