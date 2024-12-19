import { Template } from "@/types/template";
import { operatingAgreementTemplate } from "./operating-agreement";
import { shareholderAgreementTemplate } from "./shareholder-agreement";

export const businessTemplates: Template[] = [
  {
    title: "Partnership Agreement",
    description: "Defines terms of business partnership, including profit-sharing and decision-making.",
    category: "Business Formation",
    slug: "partnership-agreement",
    content: `**PARTNERSHIP AGREEMENT**

THIS PARTNERSHIP AGREEMENT (the "Agreement") is made and entered into as of [Date], by and between:

**Partner 1:**
[Partner 1 Full Name]
[Address]

**Partner 2:**
[Partner 2 Full Name]
[Address]

RECITALS:

WHEREAS, the parties wish to form a partnership for the purpose of conducting business; and

WHEREAS, the parties desire to set forth their rights and obligations as partners;

NOW, THEREFORE, in consideration of the mutual covenants contained herein, the parties agree as follows:

**1. FORMATION OF THE PARTNERSHIP**

1.1. Name. The name of the Partnership shall be [Partnership Name].

1.2. Principal Place of Business. The principal place of business shall be at [Business Address].

1.3. Purpose. The Partnership is formed for the purpose of [describe the business activity].

**2. CAPITAL CONTRIBUTIONS**

2.1. Initial Contributions
Partner 1: $[Amount]
Partner 2: $[Amount]

**3. OWNERSHIP AND PROFITS**

3.1. Ownership Interests
Partner 1: [X]%
Partner 2: [X]%

3.2. Profit Distribution. Profits shall be distributed [quarterly/annual] basis.

**4. MANAGEMENT**

4.1. Management Rights. Each partner shall participate in the management of the Partnership.

4.2. Decision Making. Major decisions require unanimous consent of all partners.

**5. WITHDRAWAL AND DISSOLUTION**

5.1. Withdrawal Notice. A partner must provide [X] days written notice before withdrawal.

5.2. Buy-Out Provisions. The remaining partner shall have the first right to purchase the withdrawing partner's interest.

**6. CONFIDENTIALITY**

6.1. Confidential Information. Partners shall maintain the confidentiality of Partnership information.

**7. DISPUTE RESOLUTION**

7.1. Resolution Method. Disputes shall be resolved through [mediation/arbitration] in [Location].

**8. GOVERNING LAW**

8.1. This Agreement shall be governed by the laws of the State of [State].

**9. AMENDMENTS**

9.1. This Agreement may be amended only by written agreement of all partners.

IN WITNESS WHEREOF, the parties have executed this Partnership Agreement as of the date first written above.

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