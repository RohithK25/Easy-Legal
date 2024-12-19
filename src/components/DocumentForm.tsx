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
import { 
  ConfidentialityAgreementForm, 
  confidentialityFormSchema, 
  type ConfidentialityFormData 
} from "./forms/ConfidentialityAgreementForm";
import {
  EmploymentAgreementForm,
  employmentFormSchema,
  type EmploymentFormData
} from "./forms/EmploymentAgreementForm";
import {
  ContractorAgreementForm,
  contractorFormSchema,
  type ContractorFormData
} from "./forms/ContractorAgreementForm";

interface DocumentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  templateTitle: string;
  templateContent: string;
}

export const DocumentForm = ({ open, onOpenChange, templateTitle, templateContent }: DocumentFormProps) => {
  const isEmploymentAgreement = templateTitle === "Employment Agreement";
  const isContractorAgreement = templateTitle === "Independent Contractor Agreement";
  
  const employmentForm = useForm<EmploymentFormData>({
    resolver: zodResolver(employmentFormSchema),
    defaultValues: {
      employerName: "",
      employerAddress: "",
      employeeName: "",
      employeeAddress: "",
      startDate: "",
      jobTitle: "",
      salary: "",
      salaryPeriod: "month",
      supervisorName: "",
      nonCompetePeriod: "",
      geographicArea: "",
      noticePeriod: "",
      state: "",
    }
  });

  const contractorForm = useForm<ContractorFormData>({
    resolver: zodResolver(contractorFormSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      contractorName: "",
      contractorAddress: "",
      startDate: "",
      endDate: "",
      amount: "",
      paymentSchedule: "",
      invoicePeriod: "",
      noticePeriod: "",
      nonSolicitPeriod: "",
      state: "",
      location: "",
    }
  });

  const confidentialityForm = useForm<ConfidentialityFormData>({
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
    }
  });

  const generateDocument = (data: EmploymentFormData | ConfidentialityFormData | ContractorFormData) => {
    let content = templateContent;
    
    if (isEmploymentAgreement) {
      const employmentData = data as EmploymentFormData;
      content = content
        .replace("[Date]", new Date(employmentData.startDate).toLocaleDateString())
        .replace("[Company Name]", employmentData.employerName)
        .replace("[Address]", employmentData.employerAddress)
        .replace("[Employee's Full Name]", employmentData.employeeName)
        .replace(/\[Address\]/, employmentData.employeeAddress)
        .replace("[Start Date]", new Date(employmentData.startDate).toLocaleDateString())
        .replace("[Job Title]", employmentData.jobTitle)
        .replace("[Amount]", employmentData.salary)
        .replace("[hour/week/month/year]", employmentData.salaryPeriod)
        .replace("[Supervisor's Name or Position]", employmentData.supervisorName)
        .replace("[X] years", employmentData.nonCompetePeriod)
        .replace("[geographic area]", employmentData.geographicArea)
        .replace("[X] weeks", employmentData.noticePeriod)
        .replace(/\[State\]/g, employmentData.state);
    } else if (isContractorAgreement) {
      const contractorData = data as ContractorFormData;
      content = content
        .replace("[Date]", new Date(contractorData.startDate).toLocaleDateString())
        .replace("[Company Name]", contractorData.companyName)
        .replace("[Address]", contractorData.companyAddress)
        .replace("[Contractor's Full Name]", contractorData.contractorName)
        .replace(/\[Address\]/, contractorData.contractorAddress)
        .replace("[Start Date]", new Date(contractorData.startDate).toLocaleDateString())
        .replace("[End Date]", new Date(contractorData.endDate).toLocaleDateString())
        .replace("[Amount]", contractorData.amount)
        .replace("[weekly/monthly/upon completion of project, etc.]", contractorData.paymentSchedule)
        .replace("[X] days", contractorData.invoicePeriod)
        .replace(/\[X\] days'/, `${contractorData.noticePeriod} days'`)
        .replace("[X] years", contractorData.nonSolicitPeriod)
        .replace(/\[State\]/g, contractorData.state)
        .replace("[Location]", contractorData.location)
        .replace("[arbitration/mediation]", "arbitration");
    } else {
      const confidentialityData = data as ConfidentialityFormData;
      content = content
        .replace("[Date]", new Date(confidentialityData.effectiveDate).toLocaleDateString())
        .replace("[Full Legal Name of Disclosing Party]", confidentialityData.partyAName)
        .replace("[Address]", confidentialityData.partyAAddress)
        .replace("[Full Legal Name of Receiving Party]", confidentialityData.partyBName)
        .replace(/\[Address\]/, confidentialityData.partyBAddress)
        .replace("[number of years, e.g., two (2)]", confidentialityData.confidentialityPeriod)
        .replace("[X]", confidentialityData.returnPeriod)
        .replace("[State]", confidentialityData.state)
        .replace("[Location]", confidentialityData.location)
        .replace("[arbitration/mediation]", "arbitration");
    }

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

  const onSubmit = async (data: EmploymentFormData | ConfidentialityFormData | ContractorFormData) => {
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
        {isEmploymentAgreement ? (
          <Form {...employmentForm}>
            <form onSubmit={employmentForm.handleSubmit(onSubmit)} className="space-y-4">
              <EmploymentAgreementForm form={employmentForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isContractorAgreement ? (
          <Form {...contractorForm}>
            <form onSubmit={contractorForm.handleSubmit(onSubmit)} className="space-y-4">
              <ContractorAgreementForm form={contractorForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : (
          <Form {...confidentialityForm}>
            <form onSubmit={confidentialityForm.handleSubmit(onSubmit)} className="space-y-4">
              <ConfidentialityAgreementForm form={confidentialityForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};