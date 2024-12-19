import { Template } from "@/types/template";

const salesAgreementTemplate: Template = {
  title: "Sales Agreement",
  description: "Defines terms of sale or service between business and customers.",
  category: "Sales",
  slug: "sales-agreement",
  content: `SALE AGREEMENT

This Sale Agreement (the "Agreement") is made and entered into as of [Date], by and between:

Seller: [Seller Name], a [State] [corporation/LLC], with its principal place of business at [Seller Address] (the "Seller").
Buyer: [Buyer Name], a [State] [corporation/LLC/individual], with its principal place of business at [Buyer Address] (the "Buyer").
The Seller and Buyer are collectively referred to as the "Parties" and individually as a "Party."

1. Sale of Goods/Assets
1.1 Sale of Goods/Assets
Subject to the terms and conditions of this Agreement, the Seller agrees to sell, transfer, and deliver to the Buyer, and the Buyer agrees to purchase from the Seller, the following goods/assets (the "Goods/Assets"):

Description of Goods/Assets: [Detailed description of the goods or assets being sold, including any identifying features such as model numbers, serial numbers, etc.]
Quantity/Amount: [Quantity or value of goods/assets being sold]
Condition: [New, used, or refurbished condition, as applicable]

2. Purchase Price and Payment Terms
2.1 Purchase Price
The total purchase price for the Goods/Assets is $[Total Purchase Price] (the "Purchase Price").

2.2 Payment Terms
The Buyer agrees to pay the Purchase Price as follows:

Deposit Amount: The Buyer shall pay a deposit of $[Deposit Amount] upon execution of this Agreement.
Balance Payment: The remaining balance of $[Balance Amount] shall be paid on or before the delivery date or in accordance with the payment schedule specified below:
[Payment schedule, e.g., "50% upon execution of the Agreement and 50% upon delivery."]

2.3 Method of Payment
All payments shall be made by [method of payment, e.g., wire transfer, check, credit card, etc.] to the Seller's designated account.

3. Delivery and Transfer of Goods/Assets
3.1 Delivery Date
The Seller shall deliver the Goods/Assets to the Buyer on or before [Delivery Date], unless otherwise agreed upon by the Parties.

3.2 Delivery Location
The Goods/Assets shall be delivered to the following location:
[Delivery Address]

3.3 Shipping and Handling
The [Buyer/Seller] shall bear the costs of shipping and handling unless otherwise agreed. [Specify if any costs or arrangements are different.]

3.4 Risk of Loss
Risk of loss or damage to the Goods/Assets shall transfer from the Seller to the Buyer upon delivery, as described above.

4. Title and Ownership
4.1 Transfer of Title
Title to the Goods/Assets shall transfer to the Buyer upon full payment of the Purchase Price and delivery of the Goods/Assets to the Buyer.

4.2 Retention of Title (if applicable)
In the event that the Buyer fails to make full payment, the Seller retains the right to reclaim the Goods/Assets until the Purchase Price is paid in full.

5. Representations and Warranties
5.1 Seller's Warranties
The Seller warrants that:

The Seller has good title to the Goods/Assets and the right to sell them.
The Goods/Assets are free from any liens, claims, or encumbrances.
The Goods/Assets conform to the specifications described in this Agreement.

5.2 Buyer's Warranties
The Buyer warrants that:

The Buyer has the authority to enter into this Agreement and perform its obligations.
The Buyer has examined the Goods/Assets or has had an opportunity to do so and accepts them in their current condition (unless otherwise specified).

5.3 No Other Warranties
Except as expressly provided in this Agreement, the Seller makes no other representations or warranties, either express or implied, regarding the Goods/Assets, including any implied warranties of merchantability or fitness for a particular purpose.

6. Inspection and Acceptance
6.1 Inspection
The Buyer has the right to inspect the Goods/Assets upon delivery to ensure they conform to the terms and conditions of this Agreement.

6.2 Acceptance
If the Buyer does not notify the Seller of any defects or discrepancies within [X] days after delivery, the Goods/Assets shall be deemed accepted by the Buyer.

7. Indemnification
7.1 Seller's Indemnification
The Seller agrees to indemnify, defend, and hold harmless the Buyer from and against any and all claims, damages, liabilities, and expenses arising from any breach of the Seller's warranties, representations, or obligations under this Agreement.

7.2 Buyer's Indemnification
The Buyer agrees to indemnify, defend, and hold harmless the Seller from and against any and all claims, damages, liabilities, and expenses arising from the Buyer's use or resale of the Goods/Assets.

8. Confidentiality
The Parties agree to maintain the confidentiality of any confidential information disclosed during the performance of this Agreement, including pricing, business strategies, and other proprietary information. Confidential information shall not be disclosed to any third party without prior written consent, unless required by law.

9. Default
9.1 Seller's Default
In the event the Seller fails to deliver the Goods/Assets or breaches any other term of this Agreement, the Buyer may terminate this Agreement and seek remedies, including damages.

9.2 Buyer's Default
If the Buyer fails to pay the Purchase Price or breaches any other term of this Agreement, the Seller may terminate this Agreement, retain any deposits, and seek other legal remedies.

10. Miscellaneous
10.1 Governing Law
This Agreement shall be governed by and construed in accordance with the laws of the state of [State], without regard to its conflict of law principles.

10.2 Dispute Resolution
Any disputes arising from or related to this Agreement shall be resolved through [arbitration/mediation] in [Location] in accordance with the rules of [Arbitration Association or applicable rules].

10.3 Entire Agreement
This Agreement constitutes the entire understanding between the Parties and supersedes any prior agreements, oral or written, regarding the subject matter of this Agreement.

10.4 Amendments
Any amendments to this Agreement must be in writing and signed by both Parties.

10.5 Severability
If any provision of this Agreement is found to be invalid or unenforceable, the remainder of the Agreement will remain in full force and effect.

11. Signatures
IN WITNESS WHEREOF, the Parties hereto have executed this Sale Agreement as of the date first written above.

Seller:
By: ____________________________
Name: _________________________
Title: __________________________
Date: __________________________

Buyer:
By: ____________________________
Name: _________________________
Title: __________________________
Date: __________________________`
};

const purchaseOrderTemplate: Template = {
  title: "Purchase Order Agreement",
  description: "Used for purchasing goods or services, detailing specifications and terms.",
  category: "Sales",
  slug: "purchase-order",
  content: "// Template content here"
};

export const salesTemplates: Template[] = [
  salesAgreementTemplate,
  purchaseOrderTemplate
];