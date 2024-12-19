import { Template } from "@/types/template";
import { investmentAgreementTemplate } from "./investment-agreement";
import { loanAgreementTemplate } from "./loan-agreement";
import { loanNoteTemplate } from "./loan-note";

const dividendPolicyTemplate: Template = {
  title: "Dividend Policy Agreement",
  description: "Defines how company will distribute profits to shareholders.",
  category: "Financial",
  slug: "dividend-policy",
  content: `DIVIDEND POLICY AGREEMENT

This Dividend Policy Agreement (the "Agreement") is made and entered into as of [Date], by and between:

Company: [Company Name], a [State] corporation, with its principal place of business at [Company Address] (the "Company").
Shareholder(s): [Shareholder Names], (the "Shareholder(s)").
The Company and Shareholder(s) are collectively referred to as the "Parties" and individually as a "Party."

1. Purpose of Agreement
1.1 Dividend Policy
The purpose of this Dividend Policy Agreement is to set forth the guidelines and procedures under which the Company will determine and distribute dividends to its shareholders. The Company’s Board of Directors (the "Board") will have discretion over the timing, amount, and method of dividend distributions, based on the Company's financial performance, capital needs, and long-term business objectives.

2. Dividend Declaration
2.1 Board Discretion
The Board may declare dividends at its sole discretion, subject to applicable laws and the Company’s financial condition. Dividends are not mandatory and may be declared only when the Board deems it appropriate.

2.2 Factors for Declaration
In determining whether to declare a dividend, the Board will consider the following factors, among others:

The Company’s profitability, liquidity, and financial position.
The Company’s working capital requirements and capital expenditures.
Future growth and investment opportunities.
The interests of shareholders and the need to reward them.
Compliance with applicable corporate laws and tax regulations.
Any restrictions under the Company’s debt agreements or financing arrangements.
2.3 Dividend Frequency
The frequency of dividend payments, whether quarterly, semi-annually, or annually, shall be determined by the Board based on the Company’s cash flow, profitability, and business needs.

3. Amount of Dividend
3.1 Dividend Rate
The amount of each dividend payment shall be determined by the Board and may vary based on the financial performance of the Company and any other relevant factors. The dividend may be expressed as:

A fixed percentage of the Company's profits.
A fixed amount per share of common stock.
Any other method deemed appropriate by the Board.
3.2 Dividend Payment Ratio
The Board may establish a target dividend payout ratio, which represents the proportion of net income that will be paid out to shareholders as dividends. The payout ratio may be adjusted by the Board in response to changes in business conditions, profitability, or other relevant factors.

4. Dividend Distribution
4.1 Eligible Shareholders
Dividends shall be distributed to shareholders who are the record holders of the Company's shares on the declared record date. Only shareholders on record on the record date will be entitled to receive the declared dividend.

4.2 Payment Date
The Board will set a payment date for each declared dividend. The dividend shall be paid on or after the payment date, but not later than [X] days following the record date, unless otherwise determined by the Board.

4.3 Payment Method
Dividends may be paid in cash, stock, or other property, at the discretion of the Board. The Board may determine the specific method of payment based on the Company’s liquidity position and financial condition.

5. Dividend Policy Modifications
5.1 Amendment or Termination of Policy
The Board reserves the right to modify, suspend, or terminate the dividend policy at any time, in its sole discretion, based on changes in the Company’s financial condition, business needs, or any other factors that may affect its ability to distribute dividends.

5.2 Notification of Changes
In the event the dividend policy is modified, suspended, or terminated, the Company will notify its shareholders of the changes in writing or via a formal communication to ensure transparency.

6. Legal Compliance
6.1 Compliance with Laws
The declaration and payment of dividends shall comply with all applicable federal, state, and local laws, including corporate law, tax law, and securities regulations. The Company shall ensure that all dividends are declared and paid in accordance with the legal requirements of the jurisdiction in which the Company is incorporated and any other applicable laws.

6.2 Restrictions on Dividends
The Company shall not declare or pay any dividends that would render it insolvent or that would violate any applicable law or contractual obligation. Additionally, the Company may not declare dividends if such a declaration would violate restrictions imposed by debt covenants or agreements with third parties.

7. Tax Considerations
7.1 Tax Implications
The Company and shareholders should be aware of the potential tax implications of dividend payments. Dividends are generally subject to federal and state taxes, and shareholders are responsible for any tax liability resulting from the receipt of dividends.

7.2 Dividend Withholding
The Company may be required to withhold taxes on dividends at the applicable tax rates, depending on the shareholder’s residency and tax status. The Company shall comply with any applicable withholding tax laws and regulations.

8. Miscellaneous
8.1 Entire Agreement
This Agreement constitutes the entire understanding between the Parties regarding the dividend policy and supersedes any prior oral or written agreements or understandings between the Parties relating to dividend distribution.

8.2 Governing Law
This Agreement shall be governed by and construed in accordance with the laws of the state of [State], without regard to its conflict of law provisions.

8.3 Severability
If any provision of this Agreement is determined to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.

8.4 Amendments
Any amendments to this Agreement must be in writing and approved by the Board of Directors and shareholders holding a majority of the outstanding shares of the Company.

9. Signatures
IN WITNESS WHEREOF, the undersigned have executed this Dividend Policy Agreement as of the date first written above.

Company:
By: ____________________________
Name: _________________________
Title: __________________________
Date: __________________________

Shareholder(s):
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
