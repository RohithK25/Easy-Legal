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

export const DocumentForm = ({ open, onOpenChange, templateTitle, templateContent }: DocumentFormProps) => {
  const generateDocument = (data: WaiverReleaseFormData | LeaseFormData | ExitStrategyFormData | ConfidentialityFormData | IpAssignmentFormData | PrivacyPolicyFormData | TermsConditionsFormData | PurchaseOrderFormData) => {
    let content = templateContent;

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

  const onSubmit = async (data: WaiverReleaseFormData | LeaseFormData | ExitStrategyFormData | ConfidentialityFormData | IpAssignmentFormData | PrivacyPolicyFormData | TermsConditionsFormData) => {
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
