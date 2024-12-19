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

1. SALE OF GOODS/ASSETS

1.1 Sale of Goods/Assets
Subject to the terms and conditions of this Agreement, the Seller agrees to sell, transfer, and deliver to the Buyer, and the Buyer agrees to purchase from the Seller, the following goods/assets (the "Goods/Assets"):

Description of Goods/Assets: [Description]
Quantity/Amount: [Quantity]
Condition: [Condition]

2. PURCHASE PRICE AND PAYMENT TERMS

2.1 Purchase Price
The total purchase price for the Goods/Assets is $[Total Price] (the "Purchase Price").

2.2 Payment Terms
The Buyer agrees to pay the Purchase Price as follows:

Deposit Amount: $[Deposit Amount]
Balance Payment: $[Balance Amount]
Payment Schedule: [Payment Schedule]

2.3 Method of Payment
All payments shall be made by [Payment Method] to the Seller's designated account.

3. DELIVERY AND TRANSFER

3.1 Delivery Date
The Seller shall deliver the Goods/Assets to the Buyer on or before [Delivery Date].

3.2 Delivery Location
Delivery Address: [Delivery Address]

3.3 Shipping and Handling
The [Responsible Party] shall bear the costs of shipping and handling.

3.4 Risk of Loss
Risk of loss or damage to the Goods/Assets shall transfer from the Seller to the Buyer upon delivery.

4. TITLE AND OWNERSHIP

4.1 Transfer of Title
Title to the Goods/Assets shall transfer to the Buyer upon full payment and delivery.

4.2 Retention of Title
The Seller retains the right to reclaim the Goods/Assets until full payment is received.

5. REPRESENTATIONS AND WARRANTIES

5.1 Seller's Warranties
The Seller warrants that:
- The Seller has good title to the Goods/Assets
- The Goods/Assets are free from liens and encumbrances
- The Goods/Assets conform to specifications

5.2 Buyer's Warranties
The Buyer warrants that:
- The Buyer has authority to enter this Agreement
- The Buyer accepts the Goods/Assets in current condition

6. INSPECTION AND ACCEPTANCE

6.1 Inspection
The Buyer has the right to inspect the Goods/Assets upon delivery.

6.2 Acceptance
The Goods/Assets shall be deemed accepted if no defects are reported within [Inspection Period] days after delivery.

7. INDEMNIFICATION

7.1 Seller's Indemnification
The Seller agrees to indemnify the Buyer against claims arising from breach of Seller's warranties.

7.2 Buyer's Indemnification
The Buyer agrees to indemnify the Seller against claims arising from Buyer's use of the Goods/Assets.

8. CONFIDENTIALITY

The Parties agree to maintain confidentiality of information disclosed during this Agreement.

9. DEFAULT

9.1 Seller's Default
The Buyer may terminate and seek remedies if the Seller fails to deliver or breaches terms.

9.2 Buyer's Default
The Seller may terminate, retain deposits, and seek remedies if the Buyer breaches terms.

10. MISCELLANEOUS

10.1 Governing Law
This Agreement is governed by the laws of [State].

10.2 Dispute Resolution
Disputes shall be resolved through [Dispute Resolution] in [Location].

10.3 Entire Agreement
This Agreement constitutes the entire understanding between the Parties.

10.4 Amendments
Amendments must be in writing and signed by both Parties.

10.5 Severability
Invalid provisions shall not affect the remainder of the Agreement.

11. SIGNATURES

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the date first written above.

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
