import { Header } from "@/components/Header";
import { TemplateCard } from "@/components/TemplateCard";

const templates = [
  {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect confidential information shared between parties.",
    category: "Confidentiality",
    slug: "nda",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Legal Document Templates</h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional legal templates for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard key={template.slug} {...template} />
            ))}
          </div>
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