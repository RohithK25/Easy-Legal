import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileDown } from "lucide-react";

const Template = () => {
  const { slug } = useParams();

  // Find the template data based on the slug
  const template = {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect your confidential information when sharing with other parties.",
    category: "Confidentiality",
    content: `
      THIS NON-DISCLOSURE AGREEMENT (this "Agreement") is made as of [DATE] by and between:

      [PARTY A NAME], a company organized under the laws of [STATE], with its principal place of business at [ADDRESS] ("Disclosing Party")

      and

      [PARTY B NAME], a company organized under the laws of [STATE], with its principal place of business at [ADDRESS] ("Receiving Party")

      1. Definition of Confidential Information
      "Confidential Information" means any and all non-public, confidential or proprietary information disclosed by the Disclosing Party to the Receiving Party...
    `
  };

  return (
    <div className="min-h-screen flex flex-col">
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

              <Button className="w-full">
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
    </div>
  );
};

export default Template;