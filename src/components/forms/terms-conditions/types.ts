import * as z from "zod";

export const termsConditionsFormSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  websiteUrl: z.string().min(1, "Website URL is required"),
  contactEmail: z.string().email("Invalid email address"),
  contactPhone: z.string().min(1, "Contact phone is required"),
  businessAddress: z.string().min(1, "Business address is required"),
  state: z.string().min(1, "State is required"),
  location: z.string().min(1, "Location is required"),
});

export type TermsConditionsFormData = z.infer<typeof termsConditionsFormSchema>;