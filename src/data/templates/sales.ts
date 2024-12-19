import { Template } from "@/types/template";

const salesAgreementTemplate: Template = {
  title: "Sales Agreement",
  description: "Defines terms of sale or service between business and customers.",
  category: "Sales",
  slug: "sales-agreement",
  content: `**SALES AGREEMENT**

Principal Amount: $[Total Purchase Price]
Date: [Date]
Delivery Date: [Delivery Date]

This Sales Agreement (the "Agreement") is made as of the date first written above by [Seller Name], a [State] [corporation/LLC], with its principal place of business at [Seller Address] (the "Seller"), and [Buyer Name], a [State] [corporation/LLC/individual], with its principal place of business at [Buyer Address] (the "Buyer").

For value received, the Buyer agrees to purchase from the Seller, and the Seller agrees to sell to the Buyer, the Goods/Assets as described herein.

**1. Description of Goods/Assets**
1.1 Description
[Detailed description of the goods or assets being sold, including any identifying features such as model numbers, serial numbers, etc.]

1.2 Quantity/Amount
[Quantity or value of goods/assets being sold]

1.3 Condition
[New, used, or refurbished condition, as applicable]

**2. Purchase Price and Payment**
2.1 Purchase Price
The total purchase price for the Goods/Assets is $[Total Purchase Price].

2.2 Payment Terms
Deposit Amount: $[Deposit Amount]
Balance Amount: $[Balance Amount]
Payment Schedule: [Payment schedule, e.g., "50% upon execution of the Agreement and 50% upon delivery."]

2.3 Method of Payment
All payments shall be made by [method of payment, e.g., wire transfer, check, credit card, etc.].

**3. Delivery**
3.1 Delivery Location
The Goods/Assets shall be delivered to: [Delivery Address]

3.2 Shipping Responsibility
The [Buyer/Seller] shall be responsible for shipping and handling costs.

**4. Inspection and Acceptance**
4.1 Inspection Period
The Buyer shall have [X] days to inspect the Goods/Assets upon delivery.

4.2 Dispute Resolution
Any disputes shall be resolved through [arbitration/mediation] in [Location].

**5. Representations and Warranties**
5.1 Seller's Warranties
The Seller represents and warrants that:
- The Seller has good title to the Goods/Assets
- The Goods/Assets are free from liens and encumbrances
- The Goods/Assets conform to specifications

5.2 Buyer's Warranties
The Buyer represents and warrants that:
- The Buyer has the authority to enter into this Agreement
- The Buyer accepts the Goods/Assets in their current condition

**6. Governing Law**
This Agreement shall be governed by and construed in accordance with the laws of the state of [State].

**7. Signatures**

IN WITNESS WHEREOF, the Parties have executed this Sales Agreement as of the date first written above.

**Seller:**
By: ____________________________
Name: _________________________
Title: __________________________
Date: __________________________

**Buyer:**
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
  content: `**PURCHASE ORDER AGREEMENT**

This Purchase Order Agreement (the "Agreement") is made and entered into as of [Date], by and between:

Buyer: [Buyer Name], a [State] [corporation/LLC], with its principal place of business at [Buyer Address] (the "Buyer").
Seller: [Seller Name], a [State] [corporation/LLC], with its principal place of business at [Seller Address] (the "Seller").
The Buyer and Seller are collectively referred to as the "Parties" and individually as a "Party."

**1. Purchase Order Details**
1.1 Purchase Order Number
This Agreement refers to Purchase Order No. [Purchase Order Number] (the "Purchase Order").

1.2 Goods/Services Ordered
The Buyer agrees to purchase from the Seller, and the Seller agrees to sell, the following goods or services (the "Goods/Services"):

Description of Goods/Services: [Detailed description of the goods or services being purchased, including item numbers, quantities, specifications, and any applicable features or requirements.]
Quantity: [Quantity of goods/services]
Unit Price: $[Unit Price] per unit or per service
Total Price: $[Total Price] (total for all goods/services, based on unit price and quantity)

1.3 Delivery Location
The Goods/Services shall be delivered to the following location:
[Delivery Address]

1.4 Delivery Date
The Goods/Services shall be delivered by [Delivery Date], unless otherwise agreed upon by the Parties.

**2. Payment Terms**
2.1 Purchase Price
The total purchase price for the Goods/Services is $[Total Purchase Price], which is based on the quantities and unit prices described in Section 1.2.

2.2 Payment Method
Payment for the Goods/Services shall be made by the Buyer in the following manner:

[Payment Method: Bank transfer, check, credit card, etc.]
[Payment Schedule: e.g., 50% deposit upon order, 50% upon delivery, or 100% upon delivery.]

2.3 Due Date for Payment
The Buyer agrees to pay the full Purchase Price to the Seller on or before [Payment Due Date], unless otherwise agreed.

**3. Delivery and Risk of Loss**
3.1 Delivery Terms
The Seller agrees to deliver the Goods/Services to the Buyer at the specified delivery location. The delivery terms shall be [specify shipping terms, e.g., FOB Destination, FOB Origin, DDP (Delivered Duty Paid), etc.], meaning that the risk of loss or damage to the Goods shall transfer to the Buyer upon delivery.

3.2 Risk of Loss
The risk of loss or damage to the Goods shall transfer from the Seller to the Buyer upon delivery to the delivery location. If the Goods are lost or damaged during transit, the Seller shall be responsible for replacing or repairing the Goods at no additional cost to the Buyer.

3.3 Shipping and Handling
The [Buyer/Seller] shall be responsible for shipping costs, including freight, insurance, and handling charges unless otherwise agreed by the Parties.

**4. Inspection and Acceptance**
4.1 Inspection
Upon delivery of the Goods/Services, the Buyer shall have a reasonable period to inspect the Goods/Services for any defects, damages, or discrepancies. The Buyer shall have [X] days to notify the Seller in writing of any issues regarding the Goods/Services.

4.2 Acceptance
If the Buyer does not provide written notice of defects or issues within [X] days after delivery, the Goods/Services shall be deemed accepted. If the Buyer provides timely notice, the Seller will be required to correct or replace the defective Goods/Services at no additional cost to the Buyer.

**5. Warranties and Representations**
5.1 Seller's Warranty
The Seller warrants that the Goods/Services shall:

- Conform to the specifications provided in the Purchase Order and any other applicable documentation.
- Be free from defects in material, workmanship, and design.
- Be of merchantable quality and fit for the intended purpose.

5.2 Buyer's Warranty
The Buyer warrants that it has the authority to enter into this Agreement and that it will comply with all applicable laws and regulations regarding the purchase of Goods/Services.

**6. Indemnification**
6.1 Seller's Indemnification
The Seller agrees to indemnify, defend, and hold harmless the Buyer from and against any claims, damages, liabilities, or expenses arising from the Seller's breach of this Agreement, including defects in the Goods/Services.

6.2 Buyer's Indemnification
The Buyer agrees to indemnify, defend, and hold harmless the Seller from and against any claims, damages, liabilities, or expenses arising from the Buyer's use of the Goods/Services after delivery.

**7. Force Majeure**
Neither Party shall be liable for any delay or failure in performance due to circumstances beyond its reasonable control, including acts of God, war, terrorism, civil disturbance, labor strikes, or government action (a "Force Majeure Event"). The Party affected by the Force Majeure Event shall promptly notify the other Party and make reasonable efforts to mitigate the effects of the delay or failure.

**8. Confidentiality**
The Parties agree to keep all terms, conditions, and pricing information related to this Agreement confidential unless required by law or with the prior written consent of the other Party.

**9. Termination**
9.1 Termination by Buyer
The Buyer may terminate this Agreement without cause by providing written notice to the Seller. In such case, the Buyer shall pay for any Goods/Services delivered up to the date of termination.

9.2 Termination for Breach
Either Party may terminate this Agreement for cause if the other Party breaches any material provision of this Agreement and fails to cure the breach within [X] days of receiving written notice.

**10. Governing Law and Dispute Resolution**
10.1 Governing Law
This Agreement shall be governed by and construed in accordance with the laws of the state of [State], without regard to its conflict of laws provisions.

10.2 Dispute Resolution
Any disputes arising from or relating to this Agreement shall be resolved through [mediation/arbitration] in [Location] in accordance with the rules of the [Arbitration Association or relevant body].

**11. Miscellaneous**
11.1 Entire Agreement
This Agreement constitutes the entire understanding between the Parties and supersedes any prior oral or written agreements related to the subject matter of this Agreement.

11.2 Amendments
This Agreement may be amended only in writing and signed by both Parties.

11.3 Severability
If any provision of this Agreement is found to be invalid or unenforceable, the remainder of the Agreement will remain in full force and effect.

11.4 Assignment
Neither Party may assign or transfer this Agreement without the prior written consent of the other Party, except in the case of a merger or acquisition.

**12. Signatures**
IN WITNESS WHEREOF, the undersigned have executed this Purchase Order Agreement as of the date first written above.

Buyer:
By: ____________________________
Name: _________________________
Title: __________________________
Date: __________________________

Seller:
By: ____________________________
Name: _________________________
Title: __________________________
Date: __________________________`
};

export const salesTemplates: Template[] = [
  salesAgreementTemplate,
  purchaseOrderTemplate
];