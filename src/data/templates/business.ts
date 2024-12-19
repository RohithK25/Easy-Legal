import { Template } from "@/types/template";
import { operatingAgreementTemplate } from "./operating-agreement";
import { shareholderAgreementTemplate } from "./shareholder-agreement";

export const businessTemplates: Template[] = [
  {
    title: "Partnership Agreement",
    description: "Defines terms of business partnership, including profit-sharing and decision-making.",
    category: "Business Formation",
    slug: "partnership-agreement",
    content: `This Partnership Agreement (the "Agreement") is made and entered into as of [Date], by and between the following parties:

Partner 1: [Partner 1 Full Name], [Address]
Partner 2: [Partner 2 Full Name], [Address]
(Additional Partners, if applicable, can be added here)

1. Formation of the Partnership
1.1 Name of the Partnership
The name of the Partnership is [Partnership Name].

1.2 Formation of the Partnership
The Partnership is formed under the laws of the state of [State].

1.3 Principal Place of Business
The principal place of business of the Partnership is located at [Business Address].

2. Purpose of the Partnership
The Partnership is formed for the purpose of engaging in [describe the business activity].

3. Capital Contributions
3.1 Initial Contributions
Each Partner agrees to contribute the following capital to the Partnership as their initial contribution:
Partner 1: $[Amount]
Partner 2: $[Amount]

4. Ownership Interests
4.1 Ownership Percentage
The ownership interests of the Partners in the Partnership shall be as follows:
Partner 1: [X]%
Partner 2: [X]%

5. Management
5.1 Management Structure
The Partnership shall be managed by the Partners.

6. Profits and Losses
6.1 Allocation of Profits and Losses
Profits and losses of the Partnership shall be allocated to the Partners in proportion to their ownership percentages.

7. Confidentiality
7.1 Confidential Information
Each Partner agrees to keep confidential any proprietary or business-sensitive information about the Partnership.

8. Amendments
8.1 Amendments
This Agreement may be amended only by written consent of all Partners.

IN WITNESS WHEREOF, the Partners have executed this Partnership Agreement as of the date first written above.

Partner 1:
By: ____________________________
Name: _________________________
Date: __________________________

Partner 2:
By: ____________________________
Name: _________________________
Date: __________________________`
  },
  operatingAgreementTemplate,
  shareholderAgreementTemplate
];
