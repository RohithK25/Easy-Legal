import { Header } from "@/components/Header";
import { TemplateCard } from "@/components/TemplateCard";
import { useState } from "react";

const templates = [
  {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect confidential information shared between parties.",
    category: "Confidentiality",
    slug: "nda",
  },
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
  {
    title: "Intellectual Property Assignment",
    description: "Ensures company ownership of IP created by employees or contractors.",
    category: "Intellectual Property",
    slug: "ip-assignment",
  },
  {
    title: "Confidentiality Agreement",
    description: "Protects confidential information, used for employees or partners.",
    category: "Confidentiality",
    slug: "confidentiality-agreement",
  },
  {
    title: "Loan Agreement",
    description: "Details terms of business loans, including interest rates and repayment schedules.",
    category: "Financial",
    slug: "loan-agreement",
  },
  {
    title: "Investment Agreement",
    description: "Outlines terms for investors providing capital to the business.",
    category: "Financial",
    slug: "investment-agreement",
  },
  {
    title: "Sales Agreement",
    description: "Defines terms of sale or service between business and customers.",
    category: "Sales",
    slug: "sales-agreement",
  },
  {
    title: "Non-Compete Agreement",
    description: "Prevents competition from former employees or business partners.",
    category: "Employment",
    slug: "non-compete",
  },
  {
    title: "Waiver and Release",
    description: "Limits business liability for accidents, injuries, or damages.",
    category: "Liability",
    slug: "waiver-release",
  },
  {
    title: "Lease Agreement",
    description: "Contract for renting commercial space, outlining terms and responsibilities.",
    category: "Real Estate",
    slug: "lease-agreement",
  },
  {
    title: "Purchase Order Agreement",
    description: "Used for purchasing goods or services, detailing specifications and terms.",
    category: "Sales",
    slug: "purchase-order",
  },
  {
    title: "Loan Note",
    description: "Confirms terms of loan or debt agreement from investors or third parties.",
    category: "Financial",
    slug: "loan-note",
  },
  {
    title: "Exit Strategy Agreement",
    description: "Outlines plans for business exit, including sale of equity or acquisition.",
    category: "Business Planning",
    slug: "exit-strategy",
  },
  {
    title: "Dividend Policy Agreement",
    description: "Defines how company will distribute profits to shareholders.",
    category: "Financial",
    slug: "dividend-policy",
  },
  {
    title: "Stock Option Agreement",
    description: "Allows purchase of company stock at discounted price as incentive.",
    category: "Employment",
    slug: "stock-option",
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