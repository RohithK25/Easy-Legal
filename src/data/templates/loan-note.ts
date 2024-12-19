import { Template } from "@/types/template";

export const loanNoteTemplate: Template = {
  title: "Loan Note",
  description: "A simple promissory note for documenting loans.",
  category: "Financial",
  slug: "loan-note",
  content: `LOAN NOTE

Principal Amount: $[Loan Amount]
Date: [Date]
Maturity Date: [Maturity Date]

This Loan Note (the "Note") is made as of the date first written above by [Borrower Name], a [State] corporation, with its principal place of business at [Borrower Address] (the "Borrower"), in favor of [Lender Name], with a principal address at [Lender Address] (the "Lender").

For value received, the Borrower promises to pay to the Lender, or to the Lender's assigns, the principal sum of $[Loan Amount], together with interest thereon as set forth in this Note.

1. Loan Amount and Disbursement
1.1 Loan Amount
The principal amount of this loan is $[Loan Amount] (the "Loan").

1.2 Disbursement of Loan
The Loan will be disbursed to the Borrower on or about [Date], to the Borrower's designated account at [Bank Name] with account number [Account Number], or by other means as agreed by the Parties.

2. Interest Rate
2.1 Interest Rate
The outstanding principal balance of the Loan shall accrue interest at a rate of [X]% per annum.

3. Repayment Terms
3.1 Late Payment
If any payment is not made when due, the Borrower shall pay a late fee of $[Late Fee].

4. Maturity
4.1 Maturity Date
The full outstanding principal balance of this Loan, together with all accrued and unpaid interest, is due and payable in full on [Maturity Date].

IN WITNESS WHEREOF, the Borrower and the Lender have executed this Loan Note as of the date first written above.

Lender:
By: ____________________________
Name: [Lender Name]
Date: [Date]

Borrower:
By: ____________________________
Name: [Borrower Name]
Date: [Date]`
};