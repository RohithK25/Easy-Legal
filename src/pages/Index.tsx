import { Header } from "@/components/Header";
import { TemplateCard } from "@/components/TemplateCard";

const templates = [
  {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect your confidential information when sharing with other parties.",
    category: "Confidentiality",
    slug: "nda",
  },
  {
    title: "Employment Agreement",
    description: "Standard employment contract for hiring new employees.",
    category: "Employment",
    slug: "employment-agreement",
  },
  {
    title: "Terms of Service",
    description: "Define the terms and conditions for using your service or product.",
    category: "Website Policies",
    slug: "terms-of-service",
  },
  {
    title: "Privacy Policy",
    description: "Explain how you collect and use customer data.",
    category: "Website Policies",
    slug: "privacy-policy",
  },
  {
    title: "Independent Contractor Agreement",
    description: "Contract for hiring freelancers and contractors.",
    category: "Employment",
    slug: "contractor-agreement",
  },
  {
    title: "Partnership Agreement",
    description: "Establish terms and conditions for business partnerships.",
    category: "Business Formation",
    slug: "partnership-agreement",
  },
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
              Professional legal templates for your business needs. Select, customize, and download in minutes.
            </p>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Popular Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <TemplateCard key={template.slug} {...template} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-8 mt-12">
        <div className="container">
          <p className="text-center text-gray-600">
            Disclaimer: These templates are provided for informational purposes only and should not be considered as legal advice.
            Please consult with a legal professional before using any templates for your business.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;