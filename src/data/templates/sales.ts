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
  content: "// Template content here"
};

export const salesTemplates: Template[] = [
  salesAgreementTemplate,
  purchaseOrderTemplate
];
