import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileDown } from "lucide-react";
import { Header } from "@/components/Header";
import { DocumentForm } from "@/components/DocumentForm";
import { useState } from "react";

const templates = {
  nda: {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect confidential information shared between two or more parties. Essential for business discussions, product development, and negotiations.",
    category: "Confidentiality",
    content: `
      NON-DISCLOSURE AGREEMENT (NDA)

      This Non-Disclosure Agreement ("Agreement") is entered into as of [Date], by and between:

      Disclosing Party: [Full Legal Name of Disclosing Party]
      Type of Entity: [e.g., corporation, LLC]
      Address: [Address]
      (hereinafter referred to as "Disclosing Party")

      Receiving Party: [Full Legal Name of Receiving Party]
      Type of Entity: [e.g., corporation, LLC, individual]
      Address: [Address]
      (hereinafter referred to as "Receiving Party")

      Collectively referred to as the "Parties" or individually as a "Party."

      1. CONFIDENTIAL INFORMATION
      --------------------------
      For the purposes of this Agreement, "Confidential Information" includes, but is not limited to:

      • Business plans, strategies, and forecasts
      • Proprietary software, code, or technology
      • Trade secrets, formulas, algorithms, data, and know-how
      • Customer lists, supplier details, and vendor contracts
      • Marketing and sales strategies, financial projections, and other non-public information

      Confidential Information does not include information that:
      • Was already in the public domain at the time of disclosure
      • Becomes publicly available through no fault of the Receiving Party
      • Was already known to the Receiving Party prior to disclosure
      • Was disclosed with the written consent of the Disclosing Party
      • Was independently developed by the Receiving Party without reference to the Disclosing Party's Confidential Information

      2. OBLIGATIONS OF THE RECEIVING PARTY
      -----------------------------------
      The Receiving Party agrees to:

      • Maintain the Confidential Information in strict confidence
      • Not disclose the Confidential Information to any third party without prior written consent from the Disclosing Party
      • Use the Confidential Information solely for the purpose of [Purpose of disclosure]
      • Take reasonable measures to protect the Confidential Information from unauthorized use or disclosure

      3. EXCLUSIONS FROM CONFIDENTIALITY
      --------------------------------
      The Receiving Party shall not be in breach of this Agreement if the Confidential Information is disclosed in response to a subpoena, court order, or as otherwise required by law, provided that the Receiving Party promptly notifies the Disclosing Party of such requirement and cooperates to seek protective measures.

      4. TERM
      -------
      This Agreement shall commence on the date first written above and continue in effect until the Confidential Information no longer qualifies as confidential under the terms of this Agreement, or until terminated by either Party with thirty (30) days written notice. The Receiving Party's obligation to keep the Confidential Information confidential will survive termination of this Agreement for a period of [number of years] years.

      5. RETURN OR DESTRUCTION OF CONFIDENTIAL INFORMATION
      ------------------------------------------------
      Upon termination of this Agreement or upon request of the Disclosing Party, the Receiving Party agrees to return or destroy all Confidential Information, including any copies, notes, or records made thereof, within [X] days.

      6. NO LICENSE
      ------------
      Nothing in this Agreement grants the Receiving Party any rights, title, or interest in or to any of the Confidential Information, except as expressly set forth herein for the purpose of evaluating the disclosed information.

      7. NO OBLIGATION TO ENTER INTO BUSINESS RELATIONSHIP
      ------------------------------------------------
      This Agreement does not obligate either Party to enter into any business transaction or relationship. The Parties acknowledge that no obligation exists to proceed with any further discussions or agreements following the exchange of Confidential Information.

      8. INDEMNITY
      -----------
      The Receiving Party agrees to indemnify and hold harmless the Disclosing Party from any damages, losses, or expenses arising from the Receiving Party's unauthorized use or disclosure of Confidential Information.

      9. GOVERNING LAW
      ---------------
      This Agreement shall be governed by and construed in accordance with the laws of the State of [State], without regard to its conflict of laws principles.

      10. DISPUTE RESOLUTION
      --------------------
      Any disputes arising under this Agreement shall be resolved through [arbitration/mediation] in [Location], and the Parties agree to bear their respective costs in connection with such proceedings.

      11. ENTIRE AGREEMENT
      ------------------
      This Agreement constitutes the entire understanding between the Parties concerning Confidential Information. Any amendments or modifications to this Agreement must be made in writing and executed by both Parties.

      12. NO WAIVER
      ------------
      No failure or delay in exercising any right, power, or remedy under this Agreement shall operate as a waiver thereof, nor shall any single or partial exercise of any right, power, or remedy preclude further exercise of that or any other right, power, or remedy.

      IN WITNESS WHEREOF, the Parties hereto have executed this Non-Disclosure Agreement as of the date first written above.

      DISCLOSING PARTY:                          RECEIVING PARTY:
      
      By: _________________________             By: _________________________
      
      Name: _______________________             Name: _______________________
      
      Title: _______________________             Title: _______________________
      
      Date: _______________________             Date: _______________________
    `
  }
};

const Template = () => {
  const { slug } = useParams();
  const [showForm, setShowForm] = useState(false);

  // Find the template data based on the slug
  const template = templates[slug as keyof typeof templates] || {
    title: "Template Not Found",
    description: "The requested template could not be found.",
    category: "Unknown",
    content: "Template content not available."
  };

  // Add empty search handler since we don't need search functionality on this page
  const handleSearch = (value: string) => {
    // Search is not needed on the template detail page
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Template Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <span className="text-sm font-medium text-primary-accent">{template.category}</span>
                <h1 className="text-3xl font-bold mt-2">{template.title}</h1>
                <p className="text-gray-600 mt-4">{template.description}</p>
              </div>

              <Button className="w-full" onClick={() => setShowForm(true)}>
                <FileDown className="mr-2" />
                Download Document
              </Button>

              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  This template is provided for informational purposes only and should not be considered as legal advice.
                  Please consult with a legal professional before using this document.
                </p>
              </div>
            </div>

            {/* Document Preview */}
            <div className="lg:col-span-2 border rounded-lg bg-white shadow-sm">
              <div className="p-6 border-b">
                <h2 className="font-semibold">Document Preview</h2>
              </div>
              <ScrollArea className="h-[600px] p-6">
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap font-serif text-base">
                    {template.content}
                  </pre>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </main>

      <DocumentForm 
        open={showForm} 
        onOpenChange={setShowForm}
        templateTitle={template.title}
      />
    </div>
  );
};

export default Template;