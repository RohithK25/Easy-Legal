import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileDown } from "lucide-react";
import { Header } from "@/components/Header";
import { DocumentForm } from "@/components/DocumentForm";
import { useState } from "react";
import { templates } from "@/data/templates";
import { Template as TemplateType } from "@/types/template";

const Template = () => {
  const { slug } = useParams();
  const [showForm, setShowForm] = useState(false);

  const defaultTemplate: TemplateType = {
    title: "Template Not Found",
    description: "The requested template could not be found.",
    category: "Unknown",
    content: "Template content not available.",
    slug: "not-found"
  };

  // Find the template data based on the slug
  const template = templates.find(t => t.slug === slug) || defaultTemplate;

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
        templateContent={template.content}
      />
    </div>
  );
};

export default Template;