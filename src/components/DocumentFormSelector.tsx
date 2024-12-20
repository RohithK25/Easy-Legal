import { DocumentFormProps } from "@/types/document-form";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NdaForm } from "./forms/nda/NdaForm";
import { ndaFormSchema, type NdaFormData } from "./forms/nda/types";
import { PartnershipAgreementForm } from "./forms/partnership/PartnershipAgreementForm";
import { partnershipFormSchema, type PartnershipFormData } from "./forms/partnership/types";
import { EmploymentAgreementForm } from "./forms/employment-agreement/EmploymentAgreementForm";
import { employmentFormSchema, type EmploymentFormData } from "./forms/employment-agreement/types";
import { ConfidentialityAgreementForm } from "./forms/confidentiality/ConfidentialityAgreementForm";
import { confidentialityFormSchema, type ConfidentialityFormData } from "./forms/confidentiality/types";
import { IndependentContractorAgreementForm } from "./forms/independent-contractor/IndependentContractorAgreementForm";
import { independentContractorFormSchema, type IndependentContractorFormData } from "./forms/independent-contractor/types";
import { NonCompeteAgreementForm } from "./forms/non-compete/NonCompeteAgreementForm";
import { nonCompeteFormSchema, type NonCompeteFormData } from "./forms/non-compete/types";
import { StockOptionAgreementForm } from "./forms/stock-option/StockOptionAgreementForm";
import { stockOptionFormSchema, type StockOptionFormData } from "./forms/stock-option/types";
import { OperatingAgreementForm } from "./forms/operating-agreement/OperatingAgreementForm";
import { operatingFormSchema, type OperatingFormData } from "./forms/operating-agreement/types";
import { ShareholderAgreementForm } from "./forms/shareholder-agreement/ShareholderAgreementForm";
import { shareholderFormSchema, type ShareholderFormData } from "./forms/shareholder-agreement/types";
import { InvestmentAgreementForm } from "./forms/investment-agreement/InvestmentAgreementForm";
import { investmentFormSchema, type InvestmentFormData } from "./forms/investment-agreement/types";
import { LoanAgreementForm } from "./forms/loan-agreement/LoanAgreementForm";
import { loanFormSchema, type LoanFormData } from "./forms/loan-agreement/types";
import { LoanNoteForm } from "./forms/loan-note/LoanNoteForm";
import { loanNoteFormSchema, type LoanNoteFormData } from "./forms/loan-note/types";
import { DividendPolicyAgreementForm } from "./forms/dividend-policy/DividendPolicyAgreementForm";
import { dividendPolicyFormSchema, type DividendPolicyFormData } from "./forms/dividend-policy/types";
import { SalesAgreementForm } from "./forms/sales-agreement/SalesAgreementForm";
import { salesFormSchema, type SalesFormData } from "./forms/sales-agreement/types";
import { PurchaseOrderForm } from "./forms/purchase-order/PurchaseOrderForm";
import { purchaseOrderFormSchema, type PurchaseOrderFormData } from "./forms/purchase-order/types";
import { TermsConditionsForm } from "./forms/terms-conditions/TermsConditionsForm";
import { termsConditionsFormSchema, type TermsConditionsFormData } from "./forms/terms-conditions/types";
import { PrivacyPolicyForm } from "./forms/privacy-policy/PrivacyPolicyForm";
import { privacyPolicyFormSchema, type PrivacyPolicyFormData } from "./forms/privacy-policy/types";
import { IpAssignmentForm } from "./forms/ip-assignment/IpAssignmentForm";
import { ipAssignmentFormSchema, type IpAssignmentFormData } from "./forms/ip-assignment/types";
import { WaiverReleaseForm } from "./forms/waiver-release/WaiverReleaseForm";
import { waiverReleaseFormSchema, type WaiverReleaseFormData } from "./forms/waiver-release/types";
import { ExitStrategyForm } from "./forms/exit-strategy/ExitStrategyForm";
import { exitStrategyFormSchema, type ExitStrategyFormData } from "./forms/exit-strategy/types";
import { ConfidentialityAgreementForm } from "./forms/confidentiality/ConfidentialityAgreementForm";
import { confidentialityFormSchema, type ConfidentialityFormData } from "./forms/confidentiality/types";

interface DocumentFormSelectorProps extends DocumentFormProps {
  onSubmit: (data: any) => void;
}

export function DocumentFormSelector({ templateTitle, onSubmit }: DocumentFormSelectorProps) {
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

  const confidentialityForm = useForm<ConfidentialityFormData>({
    resolver: zodResolver(confidentialityFormSchema),
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

  const independentContractorForm = useForm<IndependentContractorFormData>({
    resolver: zodResolver(independentContractorFormSchema),
    defaultValues: {
      contractorName: "",
      contractorAddress: "",
      services: "",
      paymentTerms: "",
      startDate: "",
      endDate: "",
      state: "",
    }
  });

  const nonCompeteForm = useForm<NonCompeteFormData>({
    resolver: zodResolver(nonCompeteFormSchema),
    defaultValues: {
      employeeName: "",
      employerName: "",
      duration: "",
      geographicArea: "",
      state: "",
    }
  });

  const stockOptionForm = useForm<StockOptionFormData>({
    resolver: zodResolver(stockOptionFormSchema),
    defaultValues: {
      employeeName: "",
      numberOfOptions: "",
      exercisePrice: "",
      vestingSchedule: "",
      expirationDate: "",
      state: "",
    }
  });

  const operatingForm = useForm<OperatingFormData>({
    resolver: zodResolver(operatingFormSchema),
    defaultValues: {
      llcName: "",
      member1Name: "",
      member1Address: "",
      member2Name: "",
      member2Address: "",
      state: "",
      filingDate: "",
      businessAddress: "",
      businessActivity: "",
      member1Contribution: "",
      member2Contribution: "",
      member1Ownership: "",
      member2Ownership: "",
      managementType: "",
      taxStatus: "",
    }
  });

  const shareholderForm = useForm<ShareholderFormData>({
    resolver: zodResolver(shareholderFormSchema),
    defaultValues: {
      companyName: "",
      shareholder1Name: "",
      shareholder1Address: "",
      shareholder2Name: "",
      shareholder2Address: "",
      state: "",
    }
  });

  const investmentForm = useForm<InvestmentFormData>({
    resolver: zodResolver(investmentFormSchema),
    defaultValues: {
      investorName: "",
      investorAddress: "",
      companyName: "",
      companyAddress: "",
      state: "",
      investmentAmount: "",
      numberOfShares: "",
      pricePerShare: "",
      closingDate: "",
      boardRepresentationThreshold: "",
      nonCompetePeriod: "",
      geographicRegion: "",
    }
  });

  const loanForm = useForm<LoanFormData>({
    resolver: zodResolver(loanFormSchema),
    defaultValues: {
      lenderName: "",
      lenderAddress: "",
      borrowerName: "",
      borrowerAddress: "",
      loanAmount: "",
      bankName: "",
      accountNumber: "",
      maturityDate: "",
      state: "",
      interestRate: "",
      yearBasis: "",
      startDate: "",
      paymentSchedule: "",
      installmentAmount: "",
      paymentDay: "",
      lateFee: "",
      defaultPeriod: "",
    }
  });

  const loanNoteForm = useForm<LoanNoteFormData>({
    resolver: zodResolver(loanNoteFormSchema),
    defaultValues: {
      lenderName: "",
      lenderAddress: "",
      borrowerName: "",
      borrowerAddress: "",
      loanAmount: "",
      bankName: "",
      accountNumber: "",
      maturityDate: "",
      state: "",
      interestRate: "",
      yearBasis: "",
      startDate: "",
      paymentSchedule: "",
      installmentAmount: "",
      paymentDay: "",
      lateFee: "",
      defaultPeriod: "",
    }
  });

  const dividendPolicyForm = useForm<DividendPolicyFormData>({
    resolver: zodResolver(dividendPolicyFormSchema),
    defaultValues: {
      companyName: "",
      companyAddress: "",
      state: "",
      shareholderNames: "",
      paymentPeriod: "",
      paymentDays: "",
    }
  });

  const salesForm = useForm<SalesFormData>({
    resolver: zodResolver(salesFormSchema),
    defaultValues: {
      sellerName: "",
      sellerAddress: "",
      buyerName: "",
      buyerAddress: "",
      state: "",
      description: "",
      quantity: "",
      condition: "",
      totalPrice: "",
      depositAmount: "",
      balanceAmount: "",
      paymentSchedule: "",
      paymentMethod: "",
      deliveryDate: "",
      deliveryAddress: "",
      responsibleParty: "",
      inspectionPeriod: "",
      disputeResolution: "",
      location: "",
    }
  });

  const purchaseOrderForm = useForm<PurchaseOrderFormData>({
    resolver: zodResolver(purchaseOrderFormSchema),
    defaultValues: {
      buyerName: "",
      buyerAddress: "",
      sellerName: "",
      sellerAddress: "",
      goodsDescription: "",
      quantity: "",
      unitPrice: "",
      totalPrice: "",
      deliveryDate: "",
      deliveryAddress: "",
      paymentTerms: "",
      state: "",
    }
  });

  const termsConditionsForm = useForm<TermsConditionsFormData>({
    resolver: zodResolver(termsConditionsFormSchema),
    defaultValues: {
      companyName: "",
      websiteUrl: "",
      contactEmail: "",
      contactPhone: "",
      businessAddress: "",
      state: "",
      location: "",
    }
  });

  const privacyPolicyForm = useForm<PrivacyPolicyFormData>({
    resolver: zodResolver(privacyPolicyFormSchema),
    defaultValues: {
      companyName: "",
      websiteUrl: "",
      contactEmail: "",
      contactPhone: "",
      businessAddress: "",
      state: "",
      location: "",
    }
  });

  const ipAssignmentForm = useForm<IpAssignmentFormData>({
    resolver: zodResolver(ipAssignmentFormSchema),
    defaultValues: {
      assignorName: "",
      assignorAddress: "",
      assigneeName: "",
      assigneeAddress: "",
      workDescription: "",
      relationshipType: "",
      consideration: "",
      state: "",
    }
  });

  const waiverReleaseForm = useForm<WaiverReleaseFormData>({
    resolver: zodResolver(waiverReleaseFormSchema),
    defaultValues: {
      effectiveDate: "",
      releasorName: "",
      releasorAddress: "",
      releaseeName: "",
      releaseeAddress: "",
      activityDescription: "",
      risks: "",
      state: "",
      county: "",
      notaryName: "",
    }
  });

  const exitStrategyForm = useForm<ExitStrategyFormData>({
    resolver: zodResolver(exitStrategyFormSchema),
    defaultValues: {
      effectiveDate: "",
      companyName: "",
      companyAddress: "",
      founderNames: "",
      founderAddresses: "",
      businessType: "",
      state: "",
      reviewFrequency: "",
      exitTriggerEvent: "",
      revenueTarget: "",
      shareholderApprovalPercentage: "",
      valuationMethod: "",
      nonCompetePeriod: "",
      geographicalScope: "",
      nonSolicitationPeriod: "",
      confidentialityPeriod: "",
      arbitrationBody: "",
    }
  });

  const renderForm = () => {
    switch (templateTitle) {
      case "Non-Disclosure Agreement (NDA)":
        return (
          <Form {...ndaForm}>
            <form onSubmit={ndaForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <NdaForm form={ndaForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Partnership Agreement":
        return (
          <Form {...partnershipForm}>
            <form onSubmit={partnershipForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <PartnershipAgreementForm form={partnershipForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Employment Agreement":
        return (
          <Form {...employmentForm}>
            <form onSubmit={employmentForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <EmploymentAgreementForm form={employmentForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Confidentiality Agreement":
        return (
          <Form {...confidentialityForm}>
            <form onSubmit={confidentialityForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <ConfidentialityAgreementForm form={confidentialityForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Independent Contractor Agreement":
        return (
          <Form {...independentContractorForm}>
            <form onSubmit={independentContractorForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <IndependentContractorAgreementForm form={independentContractorForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Non-Compete Agreement":
        return (
          <Form {...nonCompeteForm}>
            <form onSubmit={nonCompeteForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <NonCompeteAgreementForm form={nonCompeteForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Stock Option Agreement":
        return (
          <Form {...stockOptionForm}>
            <form onSubmit={stockOptionForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <StockOptionAgreementForm form={stockOptionForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Operating Agreement":
        return (
          <Form {...operatingForm}>
            <form onSubmit={operatingForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <OperatingAgreementForm form={operatingForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Shareholder Agreement":
        return (
          <Form {...shareholderForm}>
            <form onSubmit={shareholderForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <ShareholderAgreementForm form={shareholderForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Investment Agreement":
        return (
          <Form {...investmentForm}>
            <form onSubmit={investmentForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <InvestmentAgreementForm form={investmentForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Loan Agreement":
        return (
          <Form {...loanForm}>
            <form onSubmit={loanForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <LoanAgreementForm form={loanForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Loan Note":
        return (
          <Form {...loanNoteForm}>
            <form onSubmit={loanNoteForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <LoanNoteForm form={loanNoteForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Dividend Policy Agreement":
        return (
          <Form {...dividendPolicyForm}>
            <form onSubmit={dividendPolicyForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <DividendPolicyAgreementForm form={dividendPolicyForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Sales Agreement":
        return (
          <Form {...salesForm}>
            <form onSubmit={salesForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <SalesAgreementForm form={salesForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Purchase Order Agreement":
        return (
          <Form {...purchaseOrderForm}>
            <form onSubmit={purchaseOrderForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <PurchaseOrderForm form={purchaseOrderForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Terms and Conditions":
        return (
          <Form {...termsConditionsForm}>
            <form onSubmit={termsConditionsForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <TermsConditionsForm form={termsConditionsForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Privacy Policy":
        return (
          <Form {...privacyPolicyForm}>
            <form onSubmit={privacyPolicyForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <PrivacyPolicyForm form={privacyPolicyForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Intellectual Property Assignment":
        return (
          <Form {...ipAssignmentForm}>
            <form onSubmit={ipAssignmentForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <IpAssignmentForm form={ipAssignmentForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Waiver and Release":
        return (
          <Form {...waiverReleaseForm}>
            <form onSubmit={waiverReleaseForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <WaiverReleaseForm form={waiverReleaseForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      case "Exit Strategy Agreement":
        return (
          <Form {...exitStrategyForm}>
            <form onSubmit={exitStrategyForm.handleSubmit(onSubmit)} className="space-y-4">
              <ScrollArea className="h-[60vh] pr-4">
                <ExitStrategyForm form={exitStrategyForm} />
              </ScrollArea>
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        );
      default:
        return null;
    }
  };

  return renderForm();
}
