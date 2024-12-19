import { DocumentFormProps } from "@/types/document-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { generateWordDocument } from "@/utils/documentGenerator";
import { DocumentFormSelector } from "./DocumentFormSelector";
import { WaiverReleaseFormData } from "./forms/waiver-release/types";
import { LeaseFormData } from "./forms/lease-agreement/types";
import { ExitStrategyFormData } from "./forms/exit-strategy/types";
import { ConfidentialityFormData } from "./forms/confidentiality/types";
import { IpAssignmentFormData } from "./forms/ip-assignment/types";
import { PrivacyPolicyFormData } from "./forms/privacy-policy/types";
import { TermsConditionsFormData } from "./forms/terms-conditions/types";
import { PurchaseOrderFormData } from "./forms/purchase-order/types";
import { SalesFormData } from "./forms/sales-agreement/types";
import { DividendPolicyFormData } from "./forms/dividend-policy/types";
import { LoanNoteFormData } from "./forms/loan-note/types";
import { LoanFormData } from "./forms/loan-agreement/types";
import { InvestmentFormData } from "./forms/investment-agreement/types";

export const DocumentForm = ({ open, onOpenChange, templateTitle, templateContent }: DocumentFormProps) => {
  const generateDocument = (data: WaiverReleaseFormData | LeaseFormData | ExitStrategyFormData | ConfidentialityFormData | IpAssignmentFormData | PrivacyPolicyFormData | TermsConditionsFormData | PurchaseOrderFormData | SalesFormData | DividendPolicyFormData | LoanNoteFormData | LoanFormData | InvestmentFormData) => {
    let content = templateContent;

    if (templateTitle === "Loan Agreement") {
      const loanData = data as LoanFormData;
      content = content
        .replace("[Lender Name]", loanData.lenderName)
        .replace("[Lender Address]", loanData.lenderAddress)
        .replace("[Borrower Name]", loanData.borrowerName)
        .replace("[Borrower Address]", loanData.borrowerAddress)
        .replace(/\[State\]/g, loanData.state)
        .replace(/\[Loan Amount\]/g, loanData.loanAmount)
        .replace("[Bank Name]", loanData.bankName)
        .replace("[Account Number]", loanData.accountNumber)
        .replace("[Interest Rate]", loanData.interestRate)
        .replace("[Year Basis]", loanData.yearBasis)
        .replace("[Payment Frequency]", loanData.paymentFrequency)
        .replace("[Start Date]", new Date(loanData.startDate).toLocaleDateString())
        .replace("[Maturity Date]", new Date(loanData.maturityDate).toLocaleDateString())
        .replace("[Installment Amount]", loanData.installmentAmount)
        .replace("[Payment Day]", loanData.paymentDay)
        .replace("[Payment Period]", loanData.paymentPeriod)
        .replace("[Late Fee]", loanData.lateFee)
        .replace("[Late Fee Percentage]", loanData.lateFeePercentage)
        .replace("[Grace Period]", loanData.gracePeriod)
        .replace("[Entity Type]", loanData.entityType)
        .replace("[Default Cure Period]", loanData.defaultCurePeriod);
    }

    if (templateTitle === "Loan Note") {
      const loanNoteData = data as LoanNoteFormData;
      content = content
        .replace("[Lender Name]", loanNoteData.lenderName)
        .replace("[Lender Address]", loanNoteData.lenderAddress)
        .replace("[Borrower Name]", loanNoteData.borrowerName)
        .replace("[Borrower Address]", loanNoteData.borrowerAddress)
        .replace(/\[Loan Amount\]/g, loanNoteData.loanAmount)
        .replace("[Bank Name]", loanNoteData.bankName)
        .replace("[Account Number]", loanNoteData.accountNumber)
        .replace("[Maturity Date]", new Date(loanNoteData.maturityDate).toLocaleDateString())
        .replace(/\[State\]/g, loanNoteData.state)
        .replace("[X]", loanNoteData.interestRate)
        .replace("[360-day/365-day]", loanNoteData.yearBasis === "360" ? "360-day" : "365-day")
        .replace("[Start Date]", new Date(loanNoteData.startDate).toLocaleDateString())
        .replace("[month/quarter/year]", loanNoteData.paymentSchedule)
        .replace("[Amount]", loanNoteData.installmentAmount)
        .replace("[Day]", loanNoteData.paymentDay)
        .replace("[Late Fee]", loanNoteData.lateFee)
        .replace("[Date]", new Date().toLocaleDateString());
    }

    if (templateTitle === "Dividend Policy Agreement") {
      const dividendData = data as DividendPolicyFormData;
      content = content
        .replace("[Company Name]", dividendData.companyName)
        .replace("[Company Address]", dividendData.companyAddress)
        .replace(/\[State\]/g, dividendData.state)
        .replace("[Shareholder(s) or Shareholder(s) Name(s)]", dividendData.shareholderNames)
        .replace("[Frequency, e.g., quarterly]", dividendData.paymentPeriod)
        .replace("[number of days]", dividendData.paymentDays);
    }

    if (templateTitle === "Sales Agreement") {
      const salesData = data as SalesFormData;
      content = content
        .replace("[Seller Name]", salesData.sellerName)
        .replace("[Seller Address]", salesData.sellerAddress)
        .replace("[Buyer Name]", salesData.buyerName)
        .replace("[Buyer Address]", salesData.buyerAddress)
        .replace(/\[State\]/g, salesData.state)
        .replace("[describe the goods or assets being sold, including any identifying features such as model numbers, serial numbers, etc.]", salesData.description)
        .replace("[Quantity or value of goods/assets being sold]", salesData.quantity)
        .replace("[New, used, or refurbished condition, as applicable]", salesData.condition)
        .replace(/\[Total Purchase Price\]/g, salesData.totalPrice)
        .replace("[Deposit Amount]", salesData.depositAmount)
        .replace("[Balance Amount]", salesData.balanceAmount)
        .replace("[Payment schedule, e.g., \"50% upon execution of the Agreement and 50% upon delivery.\"]", salesData.paymentSchedule)
        .replace("[method of payment, e.g., wire transfer, check, credit card, etc.]", salesData.paymentMethod)
        .replace("[Date]", new Date(salesData.deliveryDate).toLocaleDateString())
        .replace("[Delivery Address]", salesData.deliveryAddress)
        .replace("[Buyer/Seller]", salesData.responsibleParty)
        .replace("[X]", salesData.inspectionPeriod)
        .replace("[arbitration/mediation]", salesData.disputeResolution)
        .replace("[Location]", salesData.location);
    }

    if (templateTitle === "Purchase Order Agreement") {
      const purchaseOrderData = data as PurchaseOrderFormData;
      content = content
        .replace("[Buyer Name]", purchaseOrderData.buyerName)
        .replace("[Buyer Address]", purchaseOrderData.buyerAddress)
        .replace("[Seller Name]", purchaseOrderData.sellerName)
        .replace("[Seller Address]", purchaseOrderData.sellerAddress)
        .replace("[Detailed description of the goods or services being purchased, including item numbers, quantities, specifications, and any applicable features or requirements.]", purchaseOrderData.goodsDescription)
        .replace("[Quantity of goods/services]", purchaseOrderData.quantity)
        .replace("[Unit Price]", purchaseOrderData.unitPrice)
        .replace(/\[Total Price\]/g, purchaseOrderData.totalPrice)
        .replace("[Delivery Date]", new Date(purchaseOrderData.deliveryDate).toLocaleDateString())
        .replace("[Delivery Address]", purchaseOrderData.deliveryAddress)
        .replace("[Payment Method: Bank transfer, check, credit card, etc.]", purchaseOrderData.paymentTerms)
        .replace(/\[State\]/g, purchaseOrderData.state);
    }

    if (templateTitle === "Privacy Policy") {
      const privacyData = data as PrivacyPolicyFormData;
      content = content
        .replace("[Your Company Name]", privacyData.companyName)
        .replace("[Your website URL]", privacyData.websiteUrl)
        .replace("[Contact Information]", `Email: ${privacyData.contactEmail}, Phone: ${privacyData.contactPhone}`)
        .replace("[Your physical business address]", privacyData.businessAddress)
        .replace(/\[State\]/g, privacyData.state)
        .replace("[Location]", privacyData.location);
    }
    
    if (templateTitle === "Intellectual Property Assignment") {
      const ipData = data as IpAssignmentFormData;
      content = content
        .replace("[Assignor's Full Name]", ipData.assignorName)
        .replace("[Assignor's Address]", ipData.assignorAddress)
        .replace("[Assignee's Full Name or Company Name]", ipData.assigneeName)
        .replace("[Assignee's Address]", ipData.assigneeAddress)
        .replace("[describe the work, project, or area of work]", ipData.workDescription)
        .replace("[employment, contractual agreement, partnership, etc.]", ipData.relationshipType)
        .replace("[Insert Amount]", ipData.consideration)
        .replace(/\[State\]/g, ipData.state);
    } else if (templateTitle === "Waiver and Release") {
      const waiverData = data as WaiverReleaseFormData;
      content = content
        .replace("[Effective Date]", new Date(waiverData.effectiveDate).toLocaleDateString())
        .replace("[Releasor's Full Name]", waiverData.releasorName)
        .replace("[Releasor's Address]", waiverData.releasorAddress)
        .replace("[Releasee's Full Name or Company Name]", waiverData.releaseeName)
        .replace("[Releasee's Address]", waiverData.releaseeAddress)
        .replace("[describe the activity/event, e.g., workshops, training, exercise, or participation in a contest, etc.]", waiverData.activityDescription)
        .replace("[describe the risks specific to the activity, such as physical injury, property damage, health risks, etc.]", waiverData.risks)
        .replace(/\[State\]/g, waiverData.state)
        .replace("[County]", waiverData.county)
        .replace("[Notary Name]", waiverData.notaryName || "");
    } else if (templateTitle === "Commercial Lease Agreement") {
      const leaseData = data as LeaseFormData;
      content = content
        .replace("[Effective Date]", new Date(leaseData.effectiveDate).toLocaleDateString())
        .replace(/\[Lessor's Full Name or Company Name\]/g, leaseData.lessorName)
        .replace(/\[Lessor's Address\]/g, leaseData.lessorAddress)
        .replace(/\[Lessee's Full Name or Company Name\]/g, leaseData.lesseeName)
        .replace(/\[Lessee's Address\]/g, leaseData.lesseeAddress)
        .replace(/\[Property Address\]/g, leaseData.propertyAddress)
        .replace("[Describe the intended use, such as office space, retail business, warehouse, etc.]", leaseData.intendedUse)
        .replace("[Number of Years or Months]", leaseData.term)
        .replace("[Start Date]", new Date(leaseData.startDate).toLocaleDateString())
        .replace("[End Date]", new Date(leaseData.endDate).toLocaleDateString())
        .replace("[Renewal Term]", leaseData.renewalTerm)
        .replace("[Notice Period]", leaseData.noticePeriod)
        .replace("[Dollar Amount]", leaseData.rentAmount)
        .replace("[Day of the Month]", leaseData.rentDueDay)
        .replace("[Number of Days]", leaseData.lateFeeGracePeriod)
        .replace("[Late Fee Amount or Percentage]", leaseData.lateFeeAmount)
        .replace("[Security Deposit Amount]", leaseData.securityDeposit)
        .replace("[Deposit Return Period]", leaseData.depositReturnPeriod)
        .replace("[Default Period]", leaseData.defaultPeriod)
        .replace("[Cure Period]", leaseData.curePeriod)
        .replace("[Termination Notice Period]", leaseData.terminationNoticePeriod)
        .replace("[Termination Fee Amount]", leaseData.terminationFee)
        .replace(/\[State\]/g, leaseData.state);
    } else if (templateTitle === "Exit Strategy Agreement") {
      const exitData = data as ExitStrategyFormData;
      content = content
        .replace("[Effective Date]", new Date(exitData.effectiveDate).toLocaleDateString())
        .replace("[Company Name]", exitData.companyName)
        .replace("[Company Address]", exitData.companyAddress)
        .replace("[Founder(s) or Shareholder(s) Name(s)]", exitData.founderNames)
        .replace("[Founder(s) or Shareholder(s) Address(es)]", exitData.founderAddresses)
        .replace("[type of business, e.g., technology startup, e-commerce, etc.]", exitData.businessType)
        .replace(/\[State\]/g, exitData.state)
        .replace("[Frequency, e.g., annually]", exitData.reviewFrequency)
        .replace("[specific event, e.g., reaching certain financial milestones, changes in market conditions, etc.]", exitData.exitTriggerEvent)
        .replace(/\[Dollar Amount\]/g, exitData.revenueTarget)
        .replace("[Specify Percentage, e.g., 75%]", exitData.shareholderApprovalPercentage)
        .replace("[Valuation Method, e.g., an independent third-party appraiser, a multiple of earnings before interest, taxes, depreciation, and amortization (EBITDA), etc.]", exitData.valuationMethod)
        .replace("[specified time period, e.g., two years]", exitData.nonCompetePeriod)
        .replace("[geographical scope, e.g., United States]", exitData.geographicalScope)
        .replace("[specified time period, e.g., one year]", exitData.nonSolicitationPeriod)
        .replace("[number of years]", exitData.confidentialityPeriod)
        .replace("[American Arbitration Association or other arbitration body]", exitData.arbitrationBody);
    } else if (templateTitle === "Confidentiality Agreement") {
      const confidentialityData = data as ConfidentialityFormData;
      content = content
        .replace("[Effective Date]", new Date(confidentialityData.effectiveDate).toLocaleDateString())
        .replace(/\[Party A Name\]/g, confidentialityData.partyAName)
        .replace(/\[Party A Address\]/g, confidentialityData.partyAAddress)
        .replace(/\[Party B Name\]/g, confidentialityData.partyBName)
        .replace(/\[Party B Address\]/g, confidentialityData.partyBAddress)
        .replace("[Confidentiality Period]", confidentialityData.confidentialityPeriod)
        .replace("[Return Period]", confidentialityData.returnPeriod)
        .replace(/\[State\]/g, confidentialityData.state)
        .replace("[Location]", confidentialityData.location);
    } else if (templateTitle === "Terms and Conditions") {
      const termsData = data as TermsConditionsFormData;
      content = content
        .replace("[Your Company Name]", termsData.companyName)
        .replace("[Your website URL]", termsData.websiteUrl)
        .replace("[Contact Information]", `Email: ${termsData.contactEmail}, Phone: ${termsData.contactPhone}`)
        .replace("[Your physical business address]", termsData.businessAddress)
        .replace(/\[State\]/g, termsData.state)
        .replace("[Location]", termsData.location);
    } else if (templateTitle === "Investment Agreement") {
      const investmentData = data as InvestmentFormData;
      content = content
        .replace("[Investor Name]", investmentData.investorName)
        .replace("[Investor Address]", investmentData.investorAddress)
        .replace("[Company Name]", investmentData.companyName)
        .replace("[Company Address]", investmentData.companyAddress)
        .replace(/\[State\]/g, investmentData.state)
        .replace(/\[Investment Amount\]/g, investmentData.investmentAmount)
        .replace("[Number]", investmentData.numberOfShares)
        .replace("[Price per Share]", investmentData.pricePerShare)
        .replace("[Closing Date]", new Date(investmentData.closingDate).toLocaleDateString())
        .replace("[X]", investmentData.boardRepresentationThreshold)
        .replace("[X years]", investmentData.nonCompetePeriod)
        .replace("[geographic region]", investmentData.geographicRegion)
        .replace("[Date]", new Date().toLocaleDateString());
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

  const onSubmit = async (data: WaiverReleaseFormData | LeaseFormData | ExitStrategyFormData | ConfidentialityFormData | IpAssignmentFormData | PrivacyPolicyFormData | TermsConditionsFormData | PurchaseOrderFormData | SalesFormData | DividendPolicyFormData | LoanNoteFormData | LoanFormData | InvestmentFormData) => {
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
        <DocumentFormSelector
          open={open}
          onOpenChange={onOpenChange}
          templateTitle={templateTitle}
          templateContent={templateContent}
          onSubmit={onSubmit}
        />
      </DialogContent>
    </Dialog>
  );
};
