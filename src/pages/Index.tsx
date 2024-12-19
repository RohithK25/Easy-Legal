import { Header } from "@/components/Header";
import { TemplateCard } from "@/components/TemplateCard";
import { useState } from "react";

const templates = [
  // Essential Business Agreements
  {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect confidential information shared between parties.",
    category: "Essential Agreements",
    slug: "nda",
    content: `
      **NON-DISCLOSURE AGREEMENT (NDA)**

      This Non-Disclosure Agreement ("Agreement") is entered into as of [Date], by and between:

      **Disclosing Party:** [Full Legal Name of Disclosing Party], a [Type of Entity, e.g., corporation, LLC] with its principal place of business at [Address] ("Disclosing Party").

      **Receiving Party:** [Full Legal Name of Receiving Party], a [Type of Entity, e.g., corporation, LLC, individual] with its principal place of business at [Address] ("Receiving Party").

      Collectively referred to as the "Parties" or individually as a "Party."

      **1. CONFIDENTIAL INFORMATION**
      For the purposes of this Agreement, "Confidential Information" includes, but is not limited to:

      • Business plans, strategies, and forecasts.
      • Proprietary software, code, or technology.
      • Trade secrets, formulas, algorithms, data, and know-how.
      • Customer lists, supplier details, and vendor contracts.
      • Marketing and sales strategies, financial projections, and other non-public information.

      Confidential Information does not include information that:

      • Was already in the public domain at the time of disclosure.
      • Becomes publicly available through no fault of the Receiving Party.
      • Was already known to the Receiving Party prior to disclosure.
      • Was disclosed with the written consent of the Disclosing Party.
      • Was independently developed by the Receiving Party without reference to the Disclosing Party's Confidential Information.

      **2. OBLIGATIONS OF THE RECEIVING PARTY**
      The Receiving Party agrees to:

      • Maintain the Confidential Information in strict confidence.
      • Not disclose the Confidential Information to any third party without prior written consent from the Disclosing Party.
      • Use the Confidential Information solely for the purpose of [Purpose of disclosure, e.g., evaluating a potential business partnership, investment, etc.].
      • Take reasonable measures to protect the Confidential Information from unauthorized use or disclosure, at least equivalent to the measures taken to protect its own proprietary information.

      **3. EXCLUSIONS FROM CONFIDENTIALITY**
      The Receiving Party shall not be in breach of this Agreement if the Confidential Information is disclosed in response to a subpoena, court order, or as otherwise required by law, provided that the Receiving Party promptly notifies the Disclosing Party of such requirement and cooperates to seek protective measures.

      **4. TERM**
      This Agreement shall commence on the date first written above and continue in effect until the Confidential Information no longer qualifies as confidential under the terms of this Agreement, or until terminated by either Party with thirty (30) days written notice. However, the Receiving Party's obligation to keep the Confidential Information confidential will survive termination of this Agreement for a period of [number of years, e.g., two (2)] years.

      **5. RETURN OR DESTRUCTION OF CONFIDENTIAL INFORMATION**
      Upon termination of this Agreement or upon request of the Disclosing Party, the Receiving Party agrees to return or destroy all Confidential Information, including any copies, notes, or records made thereof, within [X] days.

      **6. NO LICENSE**
      Nothing in this Agreement grants the Receiving Party any rights, title, or interest in or to any of the Confidential Information, except as expressly set forth herein for the purpose of evaluating the disclosed information.

      **7. NO OBLIGATION TO ENTER INTO BUSINESS RELATIONSHIP**
      This Agreement does not obligate either Party to enter into any business transaction or relationship. The Parties acknowledge that no obligation exists to proceed with any further discussions or agreements following the exchange of Confidential Information.

      **8. INDEMNITY**
      The Receiving Party agrees to indemnify and hold harmless the Disclosing Party from any damages, losses, or expenses arising from the Receiving Party's unauthorized use or disclosure of Confidential Information.

      **9. GOVERNING LAW**
      This Agreement shall be governed by and construed in accordance with the laws of the State of [State], without regard to its conflict of laws principles.

      **10. DISPUTE RESOLUTION**
      Any disputes arising under this Agreement shall be resolved through [arbitration/mediation] in [Location], and the Parties agree to bear their respective costs in connection with such proceedings.

      **11. ENTIRE AGREEMENT**
      This Agreement constitutes the entire understanding between the Parties concerning Confidential Information. Any amendments or modifications to this Agreement must be made in writing and executed by both Parties.

      **12. NO WAIVER**
      No failure or delay in exercising any right, power, or remedy under this Agreement shall operate as a waiver thereof, nor shall any single or partial exercise of any right, power, or remedy preclude further exercise of that or any other right, power, or remedy.

      **IN WITNESS WHEREOF**, the Parties hereto have executed this Non-Disclosure Agreement as of the date first written above.

      **DISCLOSING PARTY:**                          **RECEIVING PARTY:**
      
      By: _________________________             By: _________________________
      
      Name: _______________________             Name: _______________________
      
      Title: _______________________             Title: _______________________
      
      Date: _______________________             Date: _______________________
    `
  },
  {
    title: "Confidentiality Agreement",
    description: "Protects confidential information, used for employees or partners.",
    category: "Essential Agreements",
    slug: "confidentiality-agreement",
    content: `
      **CONFIDENTIALITY AGREEMENT**

      This Confidentiality Agreement ("Agreement") is entered into as of [Date], by and between:

      **Disclosing Party:** [Full Legal Name of Disclosing Party], a [Type of Entity, e.g., corporation, LLC] with its principal place of business at [Address] ("Disclosing Party").

      **Receiving Party:** [Full Legal Name of Receiving Party], a [Type of Entity, e.g., employee, independent contractor, partner] with its principal place of business at [Address] ("Receiving Party").

      Collectively referred to as the "Parties" or individually as a "Party."

      **1. Confidential Information**
      For the purposes of this Agreement, "Confidential Information" includes, but is not limited to:

      • Business plans, strategies, and projections.
      • Trade secrets, technical data, formulas, software code, algorithms, and inventions.
      • Customer lists, supplier information, and vendor contracts.
      • Marketing strategies, pricing models, and sales techniques.
      • Financial data, including projections, budgets, and accounting records.
      • Any other proprietary or sensitive information disclosed to the Receiving Party in any form (oral, written, or electronic).

      Confidential Information does not include:

      • Information that is publicly available or becomes publicly available through no fault of the Receiving Party.
      • Information that was already in the possession of the Receiving Party prior to the disclosure, as evidenced by written records.
      • Information that is independently developed by the Receiving Party without reference to or reliance upon the Disclosing Party's Confidential Information.
      • Information disclosed with the prior written consent of the Disclosing Party.

      **2. Obligations of the Receiving Party**
      The Receiving Party agrees to:

      • Maintain the Confidential Information in strict confidence and take all reasonable precautions to protect it.
      • Not disclose the Confidential Information to any third parties without the prior written consent of the Disclosing Party, except as required by law or as necessary to fulfill the purpose of this Agreement.
      • Use the Confidential Information only for the specific purpose outlined in this Agreement, such as performing duties related to employment, partnership, or a specific project.
      • Limit access to Confidential Information to employees, contractors, or agents who need to know the information to carry out the purpose of this Agreement, provided that such individuals are bound by confidentiality obligations at least as strict as those set forth in this Agreement.

      **3. Exclusions from Confidentiality**
      The Receiving Party shall not be in breach of this Agreement if Confidential Information is disclosed in accordance with a court order, subpoena, or other legal requirement. In such cases, the Receiving Party must promptly notify the Disclosing Party in writing to allow the Disclosing Party to seek a protective order or other appropriate remedy.

      **4. Return or Destruction of Confidential Information**
      Upon termination of this Agreement or at the request of the Disclosing Party, the Receiving Party agrees to immediately return or destroy all Confidential Information in any form (including copies, notes, or documents) within [X] days, and certify in writing that such return or destruction has occurred.

      **5. Term of Agreement**
      This Agreement shall remain in effect for [number of years, e.g., two (2)] years after the date of disclosure of the Confidential Information, or until the Confidential Information no longer qualifies as confidential under the terms of this Agreement. The confidentiality obligations of the Receiving Party shall survive termination of this Agreement.

      **6. No License**
      Nothing in this Agreement grants the Receiving Party any rights, title, or interest in the Confidential Information. The Receiving Party acknowledges that the Confidential Information remains the exclusive property of the Disclosing Party and that no license or rights are granted under any patent, trademark, copyright, or other intellectual property rights.

      **7. Indemnification**
      The Receiving Party agrees to indemnify, defend, and hold harmless the Disclosing Party from and against any losses, damages, or expenses (including reasonable attorney's fees) arising from any breach of this Agreement by the Receiving Party, including unauthorized use or disclosure of Confidential Information.

      **8. Governing Law**
      This Agreement shall be governed by and construed in accordance with the laws of the State of [State], without regard to its conflict of laws principles.

      **9. Dispute Resolution**
      Any disputes arising out of or in connection with this Agreement shall be resolved through [arbitration/mediation] in [Location], and the Parties agree to bear their respective costs in connection with such proceedings.

      **10. Entire Agreement**
      This Agreement constitutes the entire understanding between the Parties regarding the subject matter hereof and supersedes all prior discussions, negotiations, or agreements, whether written or oral, related to the confidentiality of the information. Any amendments to this Agreement must be in writing and executed by both Parties.

      **11. No Waiver**
      No failure or delay in exercising any right, power, or remedy under this Agreement shall operate as a waiver thereof, nor shall any single or partial exercise of any right, power, or remedy preclude further exercise of that or any other right, power, or remedy.

      **IN WITNESS WHEREOF**, the Parties hereto have executed this Confidentiality Agreement as of the date first above written.

      **Disclosing Party:**
      By: ____________________________
      Name: _________________________
      Title: __________________________
      Date: __________________________

      **Receiving Party:**
      By: ____________________________
      Name: _________________________
      Title: __________________________
      Date: __________________________
    `
  },
  // Employment & HR
  {
    title: "Employment Agreement",
    description: "Outlines terms and conditions of employment, including salary, benefits, and responsibilities.",
    category: "Employment",
    slug: "employment-agreement",
  },
  {
    title: "Independent Contractor Agreement",
    description: "Defines relationship between business and contractors, including work terms and deliverables.",
    category: "Employment",
    slug: "contractor-agreement",
  },
  {
    title: "Non-Compete Agreement",
    description: "Prevents competition from former employees or business partners.",
    category: "Employment",
    slug: "non-compete",
  },
  {
    title: "Stock Option Agreement",
    description: "Allows purchase of company stock at discounted price as incentive.",
    category: "Employment",
    slug: "stock-option",
  },

  // Business Formation
  {
    title: "Partnership Agreement",
    description: "Defines terms of business partnership, including profit-sharing and decision-making.",
    category: "Business Formation",
    slug: "partnership-agreement",
  },
  {
    title: "Operating Agreement",
    description: "Sets out rights and duties of LLC members, company structure, and management.",
    category: "Business Formation",
    slug: "operating-agreement",
  },
  {
    title: "Shareholder Agreement",
    description: "Governs relationship between corporation shareholders, including voting rights and policies.",
    category: "Business Formation",
    slug: "shareholder-agreement",
  },

  // Financial
  {
    title: "Investment Agreement",
    description: "Outlines terms for investors providing capital to the business.",
    category: "Financial",
    slug: "investment-agreement",
  },
  {
    title: "Loan Agreement",
    description: "Details terms of business loans, including interest rates and repayment schedules.",
    category: "Financial",
    slug: "loan-agreement",
  },
  {
    title: "Loan Note",
    description: "Confirms terms of loan or debt agreement from investors or third parties.",
    category: "Financial",
    slug: "loan-note",
  },
  {
    title: "Dividend Policy Agreement",
    description: "Defines how company will distribute profits to shareholders.",
    category: "Financial",
    slug: "dividend-policy",
  },

  // Sales & Services
  {
    title: "Sales Agreement",
    description: "Defines terms of sale or service between business and customers.",
    category: "Sales",
    slug: "sales-agreement",
  },
  {
    title: "Purchase Order Agreement",
    description: "Used for purchasing goods or services, detailing specifications and terms.",
    category: "Sales",
    slug: "purchase-order",
  },

  // Website & Digital
  {
    title: "Terms and Conditions",
    description: "Sets rules for using a website, app, or service, covering liability and user responsibilities.",
    category: "Website Legal",
    slug: "terms-conditions",
  },
  {
    title: "Privacy Policy",
    description: "Explains how business collects, stores, and uses customer data.",
    category: "Website Legal",
    slug: "privacy-policy",
  },

  // Intellectual Property
  {
    title: "Intellectual Property Assignment",
    description: "Ensures company ownership of IP created by employees or contractors.",
    category: "Intellectual Property",
    slug: "ip-assignment",
  },

  // Property & Liability
  {
    title: "Lease Agreement",
    description: "Contract for renting commercial space, outlining terms and responsibilities.",
    category: "Real Estate",
    slug: "lease-agreement",
  },
  {
    title: "Waiver and Release",
    description: "Limits business liability for accidents, injuries, or damages.",
    category: "Liability",
    slug: "waiver-release",
  },

  // Business Planning
  {
    title: "Exit Strategy Agreement",
    description: "Outlines plans for business exit, including sale of equity or acquisition.",
    category: "Business Planning",
    slug: "exit-strategy",
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templates.filter((template) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      template.title.toLowerCase().includes(searchTerm) ||
      template.description.toLowerCase().includes(searchTerm) ||
      template.category.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={(value) => setSearchQuery(value)} />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Legal Document Templates</h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional legal templates for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.slug} {...template} />
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              No templates found matching your search.
            </div>
          )}
        </div>
      </main>
      
      <footer className="border-t py-8 mt-12 bg-gray-50">
        <div className="container">
          <p className="text-center text-gray-600">
            These templates are provided for informational purposes only.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
