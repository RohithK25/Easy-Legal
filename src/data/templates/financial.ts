import { Template } from "@/types/template";
import { investmentAgreementTemplate } from "./investment-agreement";
import { loanAgreementTemplate } from "./loan-agreement";
import { loanNoteTemplate } from "./loan-note";

const dividendPolicyTemplate: Template = {
  title: "Dividend Policy Agreement",
  description: "Defines how company will distribute profits to shareholders.",
  category: "Financial",
  slug: "dividend-policy",
  content: `**DIVIDEND POLICY AGREEMENT**

This Dividend Policy Agreement (the "Agreement") is made and entered into as of [Date], by and between:

**Company:** [Company Name], a [State] corporation, with its principal place of business at [Company Address] (the "Company"),

**Shareholder(s):** [Shareholder Names] (the "Shareholder(s)").

The Company and Shareholder(s) are collectively referred to as the "Parties" and individually as a "Party."

**1. Purpose of Agreement**
1.1 The purpose of this Agreement is to establish guidelines for the distribution of dividends to shareholders.

**2. Dividend Declaration**
2.1 The Board of Directors ("Board") shall have sole discretion in declaring dividends.
2.2 Dividends shall be paid [quarterly/semi-annually/annually] as determined by the Board.
2.3 Payment shall be made within [X] days of declaration.

**3. Payment Terms**
3.1 Dividends shall be distributed to shareholders of record.
3.2 The Board shall determine the method of payment (cash, stock, or other).
3.3 Payment frequency shall be [quarterly/semi-annually/annually].

**4. Legal Compliance**
4.1 All dividend distributions shall comply with applicable laws and regulations.
4.2 The Company shall not declare dividends that would render it insolvent.

**5. Amendments**
5.1 This Agreement may be amended only with written consent of all Parties.

**6. Governing Law**
6.1 This Agreement shall be governed by the laws of the state of [State].

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first written above.

**Company:**
By: ____________________________
Name: _________________________
Title: __________________________
Date: __________________________

**Shareholder(s):**
By: ____________________________
Name: _________________________
Title (if applicable): ______________
Date: __________________________`
};

export const financialTemplates: Template[] = [
  investmentAgreementTemplate,
  loanAgreementTemplate,
  loanNoteTemplate,
  dividendPolicyTemplate
];