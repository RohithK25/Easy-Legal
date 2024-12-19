import { Template } from "@/types/template";

export const loanNoteTemplate: Template = {
  title: "Loan Note",
  description: "A simple promissory note for documenting loans.",
  category: "Financial",
  slug: "loan-note",
  content: `**LOAN NOTE**

This Loan Note ("Note") is made and entered into as of [Date], by and between:

**Lender:** [Lender Name], with a principal address at [Lender Address] (the "Lender"),

**Borrower:** [Borrower Name], with a principal address at [Borrower Address] (the "Borrower").

The Lender and Borrower are collectively referred to as the "Parties" and individually as a "Party."

**1. Principal Amount**
The principal amount of this loan is $[Loan Amount] (the "Loan").

**2. Disbursement**
2.1 The Loan will be disbursed to the Borrower's designated account at [Bank Name] with account number [Account Number].

**3. Interest and Repayment**
3.1 The Loan shall bear interest at a rate of [X]% per annum.
3.2 The full outstanding principal balance of this Loan, together with all accrued and unpaid interest, is due and payable in full on [Maturity Date].

**4. Late Payment**
4.1 If any payment is not made when due, the Borrower shall pay a late fee as specified in the payment schedule.

**5. Governing Law**
5.1 This Note shall be governed by and construed in accordance with the laws of the state of [State].

IN WITNESS WHEREOF, the Parties have executed this Loan Note as of the date first written above.

**Lender:**
By: ____________________________
Name: [Lender Name]
Date: [Date]

**Borrower:**
By: ____________________________
Name: [Borrower Name]
Date: [Date]`
};