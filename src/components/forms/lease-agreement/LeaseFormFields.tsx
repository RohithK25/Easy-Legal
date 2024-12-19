import { ScrollArea } from "@/components/ui/scroll-area";
import { UseFormReturn } from "react-hook-form";
import { LeaseFormData } from "./types";
import { LessorFields } from "./LessorFields";
import { LesseeFields } from "./LesseeFields";
import { PropertyFields } from "./PropertyFields";
import { TermsFields } from "./TermsFields";
import { PaymentFields } from "./PaymentFields";

interface LeaseFormFieldsProps {
  form: UseFormReturn<LeaseFormData>;
}

export function LeaseFormFields({ form }: LeaseFormFieldsProps) {
  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Lessor Information</h3>
          <LessorFields form={form} />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Lessee Information</h3>
          <LesseeFields form={form} />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Property Details</h3>
          <PropertyFields form={form} />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Lease Terms</h3>
          <TermsFields form={form} />
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Payment Details</h3>
          <PaymentFields form={form} />
        </div>
      </div>
    </ScrollArea>
  );
}