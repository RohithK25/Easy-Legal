import { UseFormReturn } from "react-hook-form";
import { PurchaseOrderFormData } from "./types";
import { PurchaseOrderFormFields } from "./PurchaseOrderFormFields";

interface PurchaseOrderFormProps {
  form: UseFormReturn<PurchaseOrderFormData>;
}

export const PurchaseOrderForm = ({ form }: PurchaseOrderFormProps) => {
  return <PurchaseOrderFormFields form={form} />;
};