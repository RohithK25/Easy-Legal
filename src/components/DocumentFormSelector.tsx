import { DocumentFormProps } from "@/types/document-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NdaForm } from "./forms/nda/NdaForm";
import { ndaFormSchema, type NdaFormData } from "./forms/nda/types";
import { PartnershipAgreementForm } from "./forms/partnership/PartnershipAgreementForm";
import { partnershipFormSchema, type PartnershipFormData } from "./forms/partnership/types";
import { EmploymentAgreementForm } from "./forms/employment-agreement/EmploymentAgreementForm";
import { employmentFormSchema, type EmploymentFormData } from "./forms/employment-agreement/types";

interface DocumentFormSelectorProps extends DocumentFormProps {
  onSubmit: (data: any) => void;
}

export function DocumentFormSelector({ templateTitle, onSubmit }: DocumentFormSelectorProps) {
  const isNda = templateTitle === "Non-Disclosure Agreement (NDA)";
  const isPartnershipAgreement = templateTitle === "Partnership Agreement";
  const isEmploymentAgreement = templateTitle === "Employment Agreement";

  const ndaForm = useForm<NdaFormData>({
    resolver: zodResolver(ndaFormSchema),
    defaultValues: {
      partyAName: "",
      partyAAddress: "",
      partyBName: "",
      partyBAddress: "",
      effectiveDate: "",
      confidentialityPeriod: "",
      state: "",
      location: "",
    }
  });

  const partnershipForm = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      partner1Name: "",
      partner1Address: "",
      partner2Name: "",
      partner2Address: "",
      partnershipName: "",
      businessActivity: "",
      businessAddress: "",
      partner1Contribution: "",
      partner2Contribution: "",
      partner1Ownership: "",
      partner2Ownership: "",
      profitDistribution: "",
      withdrawalNotice: "",
      state: "",
      location: "",
    }
  });

  const employmentForm = useForm<EmploymentFormData>({
    resolver: zodResolver(employmentFormSchema),
    defaultValues: {
      employerName: "",
      employerAddress: "",
      employeeName: "",
      employeeAddress: "",
      position: "",
      startDate: "",
      salary: "",
      paymentFrequency: "",
      workHours: "",
      state: "",
    }
  });

  if (isNda) {
    return (
      <Form {...ndaForm}>
        <form onSubmit={ndaForm.handleSubmit(onSubmit)} className="space-y-4">
          <NdaForm form={ndaForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isPartnershipAgreement) {
    return (
      <Form {...partnershipForm}>
        <form onSubmit={partnershipForm.handleSubmit(onSubmit)} className="space-y-4">
          <PartnershipAgreementForm form={partnershipForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  if (isEmploymentAgreement) {
    return (
      <Form {...employmentForm}>
        <form onSubmit={employmentForm.handleSubmit(onSubmit)} className="space-y-4">
          <EmploymentAgreementForm form={employmentForm} />
          <DialogFooter>
            <Button type="submit">Generate Document</Button>
          </DialogFooter>
        </form>
      </Form>
    );
  }

  return null;
}