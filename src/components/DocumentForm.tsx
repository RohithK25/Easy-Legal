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
import {
  NonCompeteAgreementForm,
  nonCompeteFormSchema,
  type NonCompeteFormData
} from "./forms/NonCompeteAgreementForm";
import {
  StockOptionAgreementForm,
  stockOptionFormSchema,
  type StockOptionFormData
} from "./forms/StockOptionAgreementForm";

interface DocumentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  templateTitle: string;
  templateContent: string;
}

export const DocumentForm = ({ open, onOpenChange, templateTitle, templateContent }: DocumentFormProps) => {
  const isEmploymentAgreement = templateTitle === "Employment Agreement";
  const isContractorAgreement = templateTitle === "Independent Contractor Agreement";
  const isNonCompeteAgreement = templateTitle === "Non-Compete Agreement";
  const isStockOptionAgreement = templateTitle === "Stock Option Agreement";
  
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

  const nonCompeteForm = useForm<NonCompeteFormData>({
    resolver: zodResolver(nonCompeteFormSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      employeeName: "",
      employeeAddress: "",
      effectiveDate: "",
      nonCompetePeriod: "",
      geographicArea: "",
      industry: "",
      nonSolicitPeriod: "",
      state: "",
    }
  });

  const stockOptionForm = useForm<StockOptionFormData>({
    resolver: zodResolver(stockOptionFormSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      optionHolderName: "",
      optionHolderAddress: "",
      effectiveDate: "",
      numberOfShares: "",
      exercisePrice: "",
      vestingSchedule: "",
      optionTerm: "",
      expirationDate: "",
      terminationPeriod: "",
      paymentMethod: "",
      state: "",
    }
  });

  const generateDocument = (data: EmploymentFormData | ConfidentialityFormData | ContractorFormData | NonCompeteFormData | StockOptionFormData) => {
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
    } else if (isNonCompeteAgreement) {
      const nonCompeteData = data as NonCompeteFormData;
      content = content
        .replace("[Date]", new Date(nonCompeteData.effectiveDate).toLocaleDateString())
        .replace("[Company Name]", nonCompeteData.companyName)
        .replace("[Address]", nonCompeteData.companyAddress)
        .replace("[Employee/Contractor's Full Name]", nonCompeteData.employeeName)
        .replace(/\[Address\]/, nonCompeteData.employeeAddress)
        .replace(/\[X\] years/g, `${nonCompeteData.nonCompetePeriod} years`)
        .replace("[define area, e.g., specific states, cities, or nationwide]", nonCompeteData.geographicArea)
        .replace("[describe the industry, e.g., technology, software development, etc.]", nonCompeteData.industry)
        .replace(/\[State\]/g, nonCompeteData.state);
    } else if (isStockOptionAgreement) {
      const stockOptionData = data as StockOptionFormData;
      content = content
        .replace("[Date]", new Date(stockOptionData.effectiveDate).toLocaleDateString())
        .replace("[Company Name]", stockOptionData.companyName)
        .replace("[Address]", stockOptionData.companyAddress)
        .replace("[Option Holder's Full Name]", stockOptionData.optionHolderName)
        .replace(/\[Address\]/, stockOptionData.optionHolderAddress)
        .replace("[Number of Shares]", stockOptionData.numberOfShares)
        .replace(/\$\[Exercise Price\]/g, `$${stockOptionData.exercisePrice}`)
        .replace("[e.g., 25% annually over 4 years, or specific vesting milestones]", stockOptionData.vestingSchedule)
        .replace("[X] years", stockOptionData.optionTerm)
        .replace("[Expiration Date]", new Date(stockOptionData.expirationDate).toLocaleDateString())
        .replace("[X] days", stockOptionData.terminationPeriod)
        .replace("[check, wire transfer, or other method]", stockOptionData.paymentMethod)
        .replace(/\[State\]/g, stockOptionData.state);
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

  const onSubmit = async (data: EmploymentFormData | ConfidentialityFormData | ContractorFormData | NonCompeteFormData) => {
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
        ) : isNonCompeteAgreement ? (
          <Form {...nonCompeteForm}>
            <form onSubmit={nonCompeteForm.handleSubmit(onSubmit)} className="space-y-4">
              <NonCompeteAgreementForm form={nonCompeteForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isStockOptionAgreement ? (
          <Form {...stockOptionForm}>
            <form onSubmit={stockOptionForm.handleSubmit(onSubmit)} className="space-y-4">
              <StockOptionAgreementForm form={stockOptionForm} />
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
