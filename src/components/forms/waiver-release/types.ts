import { z } from "zod";

export const waiverReleaseFormSchema = z.object({
  effectiveDate: z.string().min(1, "Effective date is required"),
  releasorName: z.string().min(1, "Releasor name is required"),
  releasorAddress: z.string().min(1, "Releasor address is required"),
  releaseeName: z.string().min(1, "Releasee name is required"),
  releaseeAddress: z.string().min(1, "Releasee address is required"),
  activityDescription: z.string().min(1, "Activity description is required"),
  risks: z.string().min(1, "Risks description is required"),
  state: z.string().min(1, "State is required"),
  county: z.string().min(1, "County is required"),
  notaryName: z.string().optional(),
});

export type WaiverReleaseFormData = z.infer<typeof waiverReleaseFormSchema>;