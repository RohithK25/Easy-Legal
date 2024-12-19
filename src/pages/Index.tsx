import { Header } from "@/components/Header";
import { TemplateCard } from "@/components/TemplateCard";
import { useState } from "react";
import { templates } from "@/data/templates";

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
            <p className="text-xl text-gray-600 mb-4">
              Professional legal templates for your business needs.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              These templates are primarily designed for U.S. startups and small-to-medium enterprises (SMEs), 
              with terms and conditions aligned with common U.S. business practices.
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