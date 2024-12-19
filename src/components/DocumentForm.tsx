import { DocumentFormProps } from "@/types/document-form";
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
import {
  PartnershipAgreementForm,
  partnershipFormSchema,
  type PartnershipFormData
} from "./forms/PartnershipAgreementForm";
import {
  OperatingAgreementForm,
  operatingFormSchema,
  type OperatingFormData
} from "./forms/OperatingAgreementForm";
import {
  ShareholderAgreementForm,
  shareholderFormSchema,
  type ShareholderFormData
} from "./forms/ShareholderAgreementForm";
import {
  LoanAgreementForm,
  loanFormSchema,
  type LoanFormData 
} from "./forms/loan-agreement/LoanAgreementForm";
import {
  InvestmentAgreementForm,
  investmentFormSchema,
  type InvestmentFormData
} from "./forms/InvestmentAgreementForm";
import {
  LoanNoteForm,
  loanNoteFormSchema,
  type LoanNoteFormData
} from "./forms/loan-note/LoanNoteForm";
import {
  DividendPolicyAgreementForm,
  dividendPolicyFormSchema,
  type DividendPolicyFormData
} from "./forms/dividend-policy/DividendPolicyAgreementForm";
import {
  SalesAgreementForm,
  salesFormSchema,
  type SalesFormData
} from "./forms/sales-agreement/SalesAgreementForm";
import {
  PurchaseOrderForm,
  purchaseOrderFormSchema,
  type PurchaseOrderFormData
} from "./forms/purchase-order/types";

export const DocumentForm = ({ open, onOpenChange, templateTitle, templateContent }: DocumentFormProps) => {
  const isEmploymentAgreement = templateTitle === "Employment Agreement";
  const isContractorAgreement = templateTitle === "Independent Contractor Agreement";
  const isNonCompeteAgreement = templateTitle === "Non-Compete Agreement";
  const isStockOptionAgreement = templateTitle === "Stock Option Agreement";
  const isPartnershipAgreement = templateTitle === "Partnership Agreement";
  const isOperatingAgreement = templateTitle === "Operating Agreement";
  const isShareholderAgreement = templateTitle === "Shareholder Agreement";
  const isInvestmentAgreement = templateTitle === "Investment Agreement";
  const isLoanAgreement = templateTitle === "Loan Agreement";
  const isLoanNote = templateTitle === "Loan Note";
  const isDividendPolicy = templateTitle === "Dividend Policy Agreement";
  const isSalesAgreement = templateTitle === "Sales Agreement";
  const isPurchaseOrder = templateTitle === "Purchase Order Agreement";

  const loanForm = useForm<LoanFormData>({
    resolver: zodResolver(loanFormSchema),
    defaultValues: {
      lenderName: "",
      lenderAddress: "",
      borrowerName: "",
      borrowerAddress: "",
      state: "",
      loanAmount: "",
      bankName: "",
      accountNumber: "",
      interestRate: "",
      yearBasis: "",
      paymentFrequency: "",
      startDate: "",
      maturityDate: "",
      installmentAmount: "",
      paymentDay: "",
      paymentPeriod: "",
      lateFee: "",
      lateFeePercentage: "",
      gracePeriod: "",
      entityType: "",
      defaultCurePeriod: "",
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
      shareholder1Name: "",
      shareholder1Address: "",
      shareholder2Name: "",
      shareholder2Address: "",
      companyName: "",
      companyType: "",
      state: "",
      incorporationDate: "",
      companyAddress: "",
      shareholder1Shares: "",
      shareholder2Shares: "",
      shareholder1Ownership: "",
      shareholder2Ownership: "",
      shareholder1Directors: "",
      shareholder2Directors: "",
      supermajorityThreshold: "",
      dragAlongThreshold: "",
      confidentialityPeriod: "",
      amendmentThreshold: "",
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
      state: "",
      purchaseOrderNumber: "",
      description: "",
      quantity: "",
      unitPrice: "",
      totalPrice: "",
      deliveryAddress: "",
      deliveryDate: "",
      paymentMethod: "",
      paymentSchedule: "",
      paymentDueDate: "",
      shippingTerms: "",
      responsibleParty: "",
      inspectionPeriod: "",
      disputeResolution: "",
      location: "",
    }
  });

  const generateDocument = (data: EmploymentFormData | ConfidentialityFormData | ContractorFormData | NonCompeteFormData | StockOptionFormData | PartnershipFormData | OperatingFormData | ShareholderFormData | InvestmentFormData | LoanFormData | LoanNoteFormData | DividendPolicyFormData | SalesFormData | PurchaseOrderFormData) => {
    let content = templateContent;
    
    if (isSalesAgreement) {
      const salesData = data as SalesFormData;
      content = content
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Seller Name]", salesData.sellerName)
        .replace("[Seller Address]", salesData.sellerAddress)
        .replace("[Buyer Name]", salesData.buyerName)
        .replace("[Buyer Address]", salesData.buyerAddress)
        .replace(/\[State\]/g, salesData.state)
        .replace("[Detailed description of the goods or assets being sold, including any identifying features such as model numbers, serial numbers, etc.]", salesData.description)
        .replace("[Quantity or value of goods/assets being sold]", salesData.quantity)
        .replace("[New, used, or refurbished condition, as applicable]", salesData.condition)
        .replace(/\$\[Total Purchase Price\]/g, `$${salesData.totalPrice}`)
        .replace(/\$\[Deposit Amount\]/g, `$${salesData.depositAmount}`)
        .replace(/\$\[Balance Amount\]/g, `$${salesData.balanceAmount}`)
        .replace("[Payment schedule, e.g., \"50% upon execution of the Agreement and 50% upon delivery.\"]", salesData.paymentSchedule)
        .replace("[method of payment, e.g., wire transfer, check, credit card, etc.]", salesData.paymentMethod)
        .replace("[Delivery Date]", new Date(salesData.deliveryDate).toLocaleDateString())
        .replace("[Delivery Address]", salesData.deliveryAddress)
        .replace("[Buyer/Seller]", salesData.responsibleParty)
        .replace("[X]", salesData.inspectionPeriod)
        .replace("[arbitration/mediation]", salesData.disputeResolution)
        .replace("[Location]", salesData.location);
    } else if (isDividendPolicy) {
      const dividendPolicyData = data as DividendPolicyFormData;
      content = content
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Company Name]", dividendPolicyData.companyName)
        .replace("[Company Address]", dividendPolicyData.companyAddress)
        .replace("[State]", dividendPolicyData.state)
        .replace("[Shareholder Names]", dividendPolicyData.shareholderNames)
        .replace("[quarterly/semi-annually/annually]", dividendPolicyData.paymentPeriod)
        .replace("[X]", dividendPolicyData.paymentDays);
    } else if (isLoanNote) {
      const loanNoteData = data as LoanNoteFormData;
      content = content
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Lender Name]", loanNoteData.lenderName)
        .replace("[Lender Address]", loanNoteData.lenderAddress)
        .replace("[Borrower Name]", loanNoteData.borrowerName)
        .replace("[Borrower Address]", loanNoteData.borrowerAddress)
        .replace(/\$\[Loan Amount\]/g, `$${loanNoteData.loanAmount}`)
        .replace("[Bank Name]", loanNoteData.bankName)
        .replace("[Account Number]", loanNoteData.accountNumber)
        .replace("[Maturity Date]", new Date(loanNoteData.maturityDate).toLocaleDateString())
        .replace(/\[State\]/g, loanNoteData.state);
    } else if (isLoanAgreement) {
      const loanData = data as LoanFormData;
      content = content
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Lender Name]", loanData.lenderName)
        .replace("[Lender Address]", loanData.lenderAddress)
        .replace("[Borrower Name]", loanData.borrowerName)
        .replace("[Borrower Address]", loanData.borrowerAddress)
        .replace(/\[State\]/g, loanData.state)
        .replace(/\$\[Loan Amount\]/g, `$${loanData.loanAmount}`)
        .replace("[Bank Name]", loanData.bankName)
        .replace("[Account Number]", loanData.accountNumber)
        .replace("[X]%", `${loanData.interestRate}%`)
        .replace("[Start Date]", new Date(loanData.startDate).toLocaleDateString())
        .replace("[Maturity Date]", new Date(loanData.maturityDate).toLocaleDateString())
        .replace(/\$\[Late Fee\]/g, `$${loanData.lateFee}`);
    } else if (isInvestmentAgreement) {
      const investmentData = data as InvestmentFormData;
      content = content
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Investor Name]", investmentData.investorName)
        .replace("[Investor Address]", investmentData.investorAddress)
        .replace("[Company Name]", investmentData.companyName)
        .replace("[Company Address]", investmentData.companyAddress)
        .replace(/\[State\]/g, investmentData.state)
        .replace("[Investment Amount]", investmentData.investmentAmount)
        .replace("[Number]", investmentData.numberOfShares)
        .replace("[Price per Share]", investmentData.pricePerShare)
        .replace("[Closing Date]", new Date(investmentData.closingDate).toLocaleDateString())
        .replace("[X]%", `${investmentData.boardRepresentationThreshold}%`)
        .replace("[X] years", `${investmentData.nonCompetePeriod} years`)
        .replace("[geographic region]", investmentData.geographicRegion);
    } else if (isShareholderAgreement) {
      const shareholderData = data as ShareholderFormData;
      content = content
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Shareholder 1 Full Name]", shareholderData.shareholder1Name)
        .replace(/\[Address\]/, shareholderData.shareholder1Address)
        .replace("[Shareholder 2 Full Name]", shareholderData.shareholder2Name)
        .replace(/\[Address\]/, shareholderData.shareholder2Address)
        .replace("[Company Name]", shareholderData.companyName)
        .replace("[type of entity, e.g., corporation]", shareholderData.companyType)
        .replace(/\[State\]/g, shareholderData.state)
        .replace("[Date]", new Date(shareholderData.incorporationDate).toLocaleDateString())
        .replace("[Company Address]", shareholderData.companyAddress)
        .replace("[Number of Shares]", shareholderData.shareholder1Shares)
        .replace(/\[X\]%/, `${shareholderData.shareholder1Ownership}%`)
        .replace("[Number of Shares]", shareholderData.shareholder2Shares)
        .replace(/\[X\]%/, `${shareholderData.shareholder2Ownership}%`)
        .replace("[X]", shareholderData.shareholder1Directors)
        .replace("[X]", shareholderData.shareholder2Directors)
        .replace(/\[X\]%/, `${shareholderData.supermajorityThreshold}%`)
        .replace(/\[X\]%/, `${shareholderData.dragAlongThreshold}%`)
        .replace("[X]", shareholderData.confidentialityPeriod)
        .replace(/\[X\]%/, `${shareholderData.amendmentThreshold}%`);
    } else if (isOperatingAgreement) {
      const operatingData = data as OperatingFormData;
      content = content
        .replace("[LLC Name]", operatingData.llcName)
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Member 1 Full Name]", operatingData.member1Name)
        .replace(/\[Address\]/, operatingData.member1Address)
        .replace("[Member 2 Full Name]", operatingData.member2Name)
        .replace(/\[Address\]/, operatingData.member2Address)
        .replace("[State]", operatingData.state)
        .replace("[Filing Date]", new Date(operatingData.filingDate).toLocaleDateString())
        .replace("[brief description of the business activity]", operatingData.businessActivity)
        .replace(/\$\[Amount\]/g, `$${operatingData.member1Contribution}`)
        .replace(/\$\[Amount\]/g, `$${operatingData.member2Contribution}`)
        .replace(/\[X\]%/g, `${operatingData.member1Ownership}%`)
        .replace(/\[X\]%/g, `${operatingData.member2Ownership}%`)
        .replace("[Management Type]", operatingData.managementType)
        .replace("[Tax Status]", operatingData.taxStatus);
    } else if (isPartnershipAgreement) {
      const partnershipData = data as PartnershipFormData;
      content = content
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Partner 1 Full Name]", partnershipData.partner1Name)
        .replace(/\[Address\]/, partnershipData.partner1Address)
        .replace("[Partner 2 Full Name]", partnershipData.partner2Name)
        .replace(/\[Address\]/, partnershipData.partner2Address)
        .replace("[Partnership Name]", partnershipData.partnershipName)
        .replace("[describe the business activity]", partnershipData.businessActivity)
        .replace("[Business Address]", partnershipData.businessAddress)
        .replace(/\$\[Amount\]/g, `$${partnershipData.partner1Contribution}`)
        .replace(/\$\[Amount\]/g, `$${partnershipData.partner2Contribution}`)
        .replace(/\[X\]%/g, `${partnershipData.partner1Ownership}%`)
        .replace(/\[X\]%/g, `${partnershipData.partner2Ownership}%`)
        .replace("[quarterly/annual]", partnershipData.profitDistribution)
        .replace("[X] days", partnershipData.withdrawalNotice)
        .replace(/\[State\]/g, partnershipData.state)
        .replace("[Location]", partnershipData.location)
        .replace("[mediation/arbitration]", "arbitration");
    } else if (isEmploymentAgreement) {
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
    } else if (isPurchaseOrder) {
      const purchaseOrderData = data as PurchaseOrderFormData;
      content = content
        .replace("[Date]", new Date().toLocaleDateString())
        .replace("[Buyer Name]", purchaseOrderData.buyerName)
        .replace("[Buyer Address]", purchaseOrderData.buyerAddress)
        .replace("[Seller Name]", purchaseOrderData.sellerName)
        .replace("[Seller Address]", purchaseOrderData.sellerAddress)
        .replace(/\[State\]/g, purchaseOrderData.state)
        .replace("[Purchase Order Number]", purchaseOrderData.purchaseOrderNumber)
        .replace("[Detailed description of the goods or services being purchased, including item numbers, quantities, specifications, and any applicable features or requirements.]", purchaseOrderData.description)
        .replace("[Quantity of goods/services]", purchaseOrderData.quantity)
        .replace(/\$\[Unit Price\]/g, `$${purchaseOrderData.unitPrice}`)
        .replace(/\$\[Total Price\]/g, `$${purchaseOrderData.totalPrice}`)
        .replace("[Delivery Address]", purchaseOrderData.deliveryAddress)
        .replace("[Delivery Date]", new Date(purchaseOrderData.deliveryDate).toLocaleDateString())
        .replace("[Payment Method: Bank transfer, check, credit card, etc.]", purchaseOrderData.paymentMethod)
        .replace("[Payment Schedule: e.g., 50% deposit upon order, 50% upon delivery, or 100% upon delivery.]", purchaseOrderData.paymentSchedule)
        .replace("[Payment Due Date]", new Date(purchaseOrderData.paymentDueDate).toLocaleDateString())
        .replace("[specify shipping terms, e.g., FOB Destination, FOB Origin, DDP (Delivered Duty Paid), etc.]", purchaseOrderData.shippingTerms)
        .replace("[Buyer/Seller]", purchaseOrderData.responsibleParty)
        .replace(/\[X\]/g, purchaseOrderData.inspectionPeriod)
        .replace("[mediation/arbitration]", purchaseOrderData.disputeResolution)
        .replace("[Location]", purchaseOrderData.location);
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

  const onSubmit = async (data: EmploymentFormData | ConfidentialityFormData | ContractorFormData | NonCompeteFormData | StockOptionFormData | PartnershipFormData | OperatingFormData | ShareholderFormData | InvestmentFormData | LoanFormData | LoanNoteFormData | DividendPolicyFormData | SalesFormData | PurchaseOrderFormData) => {
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
        {isSalesAgreement ? (
          <Form {...salesForm}>
            <form onSubmit={salesForm.handleSubmit(onSubmit)} className="space-y-4">
              <SalesAgreementForm form={salesForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isDividendPolicy ? (
          <Form {...dividendPolicyForm}>
            <form onSubmit={dividendPolicyForm.handleSubmit(onSubmit)} className="space-y-4">
              <DividendPolicyAgreementForm form={dividendPolicyForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isLoanNote ? (
          <Form {...loanNoteForm}>
            <form onSubmit={loanNoteForm.handleSubmit(onSubmit)} className="space-y-4">
              <LoanNoteForm form={loanNoteForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isLoanAgreement ? (
          <Form {...loanForm}>
            <form onSubmit={loanForm.handleSubmit(onSubmit)} className="space-y-4">
              <LoanAgreementForm form={loanForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isInvestmentAgreement ? (
          <Form {...investmentForm}>
            <form onSubmit={investmentForm.handleSubmit(onSubmit)} className="space-y-4">
              <InvestmentAgreementForm form={investmentForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isShareholderAgreement ? (
          <Form {...shareholderForm}>
            <form onSubmit={shareholderForm.handleSubmit(onSubmit)} className="space-y-4">
              <ShareholderAgreementForm form={shareholderForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isOperatingAgreement ? (
          <Form {...operatingForm}>
            <form onSubmit={operatingForm.handleSubmit(onSubmit)} className="space-y-4">
              <OperatingAgreementForm form={operatingForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isEmploymentAgreement ? (
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
        ) : isPartnershipAgreement ? (
          <Form {...partnershipForm}>
            <form onSubmit={partnershipForm.handleSubmit(onSubmit)} className="space-y-4">
              <PartnershipAgreementForm form={partnershipForm} />
              <DialogFooter>
                <Button type="submit">Generate Document</Button>
              </DialogFooter>
            </form>
          </Form>
        ) : isPurchaseOrder ? (
          <Form {...purchaseOrderForm}>
            <form onSubmit={purchaseOrderForm.handleSubmit(onSubmit)} className="space-y-4">
              <PurchaseOrderForm form={purchaseOrderForm} />
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
