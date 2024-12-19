import { Template } from "@/types/template";

export const employmentTemplates: Template[] = [
  {
    title: "Employment Agreement",
    description: "Outlines terms and conditions of employment, including salary, benefits, and responsibilities.",
    category: "Employment",
    slug: "employment-agreement",
    content: `
      **EMPLOYMENT AGREEMENT**

      This Employment Agreement ("Agreement") is entered into as of [Start Date], by and between:

      **Employer:** [Company Name], with its principal place of business at [Address] ("Employer" or "Company").

      **Employee:** [Employee's Full Name], residing at [Address] ("Employee").

      Collectively referred to as the "Parties" or individually as a "Party."

      **1. POSITION AND DUTIES**
      The Company agrees to employ the Employee as [Job Title]. The Employee shall report to [Supervisor's Name or Position] and agrees to perform all duties and responsibilities associated with this position.

      **2. COMPENSATION**
      The Company agrees to pay the Employee a salary of [Amount] per year, payable in accordance with the Company's regular payroll practices.

      **3. TERM**
      This Agreement shall commence on [Start Date] and continue until terminated by either Party in accordance with the terms of this Agreement.

      **4. CONFIDENTIALITY**
      The Employee agrees to maintain the confidentiality of all proprietary and confidential information belonging to the Company during and after the term of employment.

      **5. INTELLECTUAL PROPERTY**
      All work product, inventions, and intellectual property created by the Employee during the course of employment shall be the exclusive property of the Company.

      **6. TERMINATION**
      Either Party may terminate this Agreement with written notice in accordance with applicable law and company policies.

      **7. GOVERNING LAW**
      This Agreement shall be governed by and construed in accordance with the laws of the state where the Company's principal office is located.

      **IN WITNESS WHEREOF**, the Parties have executed this Employment Agreement as of the date first above written.

      **EMPLOYER:**                               **EMPLOYEE:**
      
      By: _________________________             By: _________________________
      
      Name: _______________________             Name: _______________________
      
      Title: _______________________             Date: _______________________
      
      Date: _______________________
    `
  },
  {
    title: "Independent Contractor Agreement",
    description: "Defines relationship between business and contractors, including work terms and deliverables.",
    category: "Employment",
    slug: "contractor-agreement",
    content: "Template content for Independent Contractor Agreement"
  },
  {
    title: "Non-Compete Agreement",
    description: "Prevents competition from former employees or business partners.",
    category: "Employment",
    slug: "non-compete",
    content: "Template content for Non-Compete Agreement"
  },
  {
    title: "Stock Option Agreement",
    description: "Allows purchase of company stock at discounted price as incentive.",
    category: "Employment",
    slug: "stock-option",
    content: "Template content for Stock Option Agreement"
  }
];
