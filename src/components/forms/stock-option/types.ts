import { z } from "zod";

export const stockOptionFormSchema = z.object({
  employeeName: z.string().min(1, "Employee name is required"),
  numberOfOptions: z.string().min(1, "Number of options is required"),
  exercisePrice: z.string().min(1, "Exercise price is required"),
  vestingSchedule: z.string().min(1, "Vesting schedule is required"),
  expirationDate: z.string().min(1, "Expiration date is required"),
  state: z.string().min(1, "State is required"),
});

export type StockOptionFormData = z.infer<typeof stockOptionFormSchema>;