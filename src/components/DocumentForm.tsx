import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateWordDocument } from "@/utils/documentGenerator";
import { ConfidentialityAgreementForm, confidentialityFormSchema, type ConfidentialityFormData } from "./forms/ConfidentialityAgreementForm";

interface DocumentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  templateTitle: string;
  templateContent: string;
}

export const DocumentForm = ({ open, onOpenChange, templateTitle, templateContent }: DocumentFormProps) => {
  const form = useForm<ConfidentialityFormData>({
    resolver: zodResolver(confidentialityFormSchema),
    defaultValues: {
      partyAName: "",
      partyAAddress: "",
      partyBName: "",
      partyBAddress: "",
      effectiveDate: "",
      state: "",
      location: "",
      confidentialityPeriod: "",
      returnPeriod: "",
    },
  });

  const generateDocument = (data: ConfidentialityFormData) => {
    let content = templateContent;
    
    // Replace placeholders with form data
    content = content
      .replace("[Date]", new Date(data.effectiveDate).toLocaleDateString())
      .replace("[Full Legal Name of Disclosing Party]", data.partyAName)
      .replace("[Address]", data.partyAAddress)
      .replace("[Full Legal Name of Receiving Party]", data.partyBName)
      .replace(/\[Address\]/, data.partyBAddress)
      .replace("[number of years, e.g., two (2)]", data.confidentialityPeriod)
      .replace("[X]", data.returnPeriod)
      .replace("[State]", data.state)
      .replace("[Location]", data.location)
      .replace("[arbitration/mediation]", "arbitration");

    return content;
  };

  const downloadDocument = async (content: string) => {
    try {
      const blob = await generateWordDocument(content);
      const url = URL.createObjectURL(blob);
      const element = document.createElement("a");
      element.href = url;
      element.download = `${templateTitle.toLowerCase().replace(/\s+/g, "-")}.docx`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating Word document:", error);
      toast.error("Failed to generate document");
    }
  };

  const onSubmit = async (data: ConfidentialityFormData) => {
    try {
      const documentContent = generateDocument(data);
      await downloadDocument(documentContent);
      toast.success("Document generated successfully!");
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to generate document");
      console.error("Error generating document:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Generate {templateTitle}</DialogTitle>
          <DialogDescription>
            Fill in the required information to generate your document.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <ConfidentialityAgreementForm form={form} />
            <DialogFooter>
              <Button type="submit">Generate Document</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};