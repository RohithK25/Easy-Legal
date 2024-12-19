import { employmentTemplates } from './templates/employment';
import { confidentialityTemplates } from './templates/confidentiality';
import { businessTemplates } from './templates/business';
import { financialTemplates } from './templates/financial';
import { salesTemplates } from './templates/sales';
import { websiteTemplates } from './templates/website';
import { intellectualPropertyTemplates } from './templates/intellectual-property';
import { propertyTemplates } from './templates/property';
import { planningTemplates } from './templates/planning';

export const templates = [
  ...confidentialityTemplates,
  ...employmentTemplates,
  ...businessTemplates,
  ...financialTemplates,
  ...salesTemplates,
  ...websiteTemplates,
  ...intellectualPropertyTemplates,
  ...propertyTemplates,
  ...planningTemplates
];