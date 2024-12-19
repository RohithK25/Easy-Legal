import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TemplateCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
}

export const TemplateCard = ({ title, description, category, slug }: TemplateCardProps) => {
  return (
    <Link to={`/template/${slug}`} className="template-card group">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-primary-accent">{category}</span>
        <h3 className="text-xl font-serif font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex items-center text-primary">
          <span className="font-medium">Use template</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};