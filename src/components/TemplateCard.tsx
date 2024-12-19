import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

interface TemplateCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
}

export function TemplateCard({ title, description, category, slug }: TemplateCardProps) {
  return (
    <Link to={`/template/${slug}`} className="template-card group">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
          <FileText className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium leading-none group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}