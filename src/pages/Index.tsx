import { Header } from "@/components/Header";
import { TemplateCard } from "@/components/TemplateCard";

const templates = [
  {
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect confidential information shared between two or more parties. Essential for business discussions, product development, and negotiations.",
    category: "Confidentiality",
    slug: "nda",
  },
  {
    title: "Employment Agreement",
    description: "Define employment terms including salary, benefits, job responsibilities, and confidentiality obligations.",
    category: "Employment",
    slug: "employment-agreement",
  },
  {
    title: "Independent Contractor Agreement",
    description: "Establish terms for freelancers and contractors, including work scope, payment, and deliverables.",
    category: "Employment",
    slug: "contractor-agreement",
  },
  {
    title: "Partnership Agreement",
    description: "Define partnership terms including profit-sharing, decision-making, roles, and exit strategies.",
    category: "Business Formation",
    slug: "partnership-agreement",
  },
  {
    title: "Operating Agreement",
    description: "Set out LLC member rights, duties, company structure, and profit-sharing arrangements.",
    category: "Business Formation",
    slug: "operating-agreement",
  },
  {
    title: "Shareholder Agreement",
    description: "Govern shareholder relationships, including voting rights, stock transfers, and dividend policies.",
    category: "Business Formation",
    slug: "shareholder-agreement",
  },
  {
    title: "Terms and Conditions",
    description: "Establish rules for using your website, app, or service, including liability and user responsibilities.",
    category: "Website Policies",
    slug: "terms-and-conditions",
  },
  {
    title: "Privacy Policy",
    description: "Explain how you collect, store, and use customer data in compliance with regulations like GDPR.",
    category: "Website Policies",
    slug: "privacy-policy",
  },
  {
    title: "Intellectual Property Assignment",
    description: "Ensure company ownership of IP created by employees or contractors.",
    category: "Intellectual Property",
    slug: "ip-assignment",
  },
  {
    title: "Confidentiality Agreement",
    description: "Protect proprietary business data when sharing with employees or partners.",
    category: "Confidentiality",
    slug: "confidentiality-agreement",
  },
  {
    title: "Loan Agreement",
    description: "Detail terms of business loans including interest rates, repayment schedules, and collateral.",
    category: "Financial",
    slug: "loan-agreement",
  },
  {
    title: "Investment Agreement",
    description: "Outline terms for investor capital including equity, ownership percentages, and voting rights.",
    category: "Financial",
    slug: "investment-agreement",
  },
  {
    title: "Sales Agreement",
    description: "Define terms for sales contracts including price, delivery, warranties, and responsibilities.",
    category: "Sales",
    slug: "sales-agreement",
  },
  {
    title: "Non-Compete Agreement",
    description: "Prevent competition from former employees or business partners for a specified period.",
    category: "Employment",
    slug: "non-compete",
  },
  {
    title: "Waiver and Release",
    description: "Limit business liability for potential accidents, injuries, or damages.",
    category: "Legal Protection",
    slug: "waiver-release",
  },
  {
    title: "Lease Agreement",
    description: "Establish terms for commercial property rental including rent, duration, and maintenance.",
    category: "Real Estate",
    slug: "lease-agreement",
  },
  {
    title: "Purchase Order Agreement",
    description: "Specify terms for purchasing goods or services including quantities, prices, and delivery.",
    category: "Sales",
    slug: "purchase-order",
  },
  {
    title: "Loan Note",
    description: "Confirm terms of debt agreements with investors or third parties.",
    category: "Financial",
    slug: "loan-note",
  },
  {
    title: "Exit Strategy Agreement",
    description: "Plan business exit through equity sale, merger, or acquisition.",
    category: "Business Planning",
    slug: "exit-strategy",
  },
  {
    title: "Dividend Policy Agreement",
    description: "Define how company profits will be distributed to shareholders.",
    category: "Financial",
    slug: "dividend-policy",
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