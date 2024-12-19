import { Template } from "@/types/template";
import { investmentAgreementTemplate } from "./investment-agreement";
import { loanAgreementTemplate } from "./loan-agreement";
import { loanNoteTemplate } from "./loan-note";

export const financialTemplates: Template[] = [
  investmentAgreementTemplate,
  loanAgreementTemplate,
  loanNoteTemplate,
  {
    title: "Dividend Policy Agreement",
    description: "Defines how company will distribute profits to shareholders.",
    category: "Financial",
    slug: "dividend-policy",
    content: ""
  }
];