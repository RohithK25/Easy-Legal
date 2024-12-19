import * as z from "zod";

export const salesFormSchema = z.object({
  sellerName: z.string().min(1, "Seller name is required"),
  sellerAddress: z.string().min(1, "Seller address is required"),
  buyerName: z.string().min(1, "Buyer name is required"),
  buyerAddress: z.string().min(1, "Buyer address is required"),
  state: z.string().min(1, "State is required"),
  description: z.string().min(1, "Description is required"),
  quantity: z.string().min(1, "Quantity is required"),
  condition: z.string().min(1, "Condition is required"),
  totalPrice: z.string().min(1, "Total price is required"),
  depositAmount: z.string().min(1, "Deposit amount is required"),
  balanceAmount: z.string().min(1, "Balance amount is required"),
  paymentSchedule: z.string().min(1, "Payment schedule is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  responsibleParty: z.string().min(1, "Responsible party is required"),
  inspectionPeriod: z.string().min(1, "Inspection period is required"),
  disputeResolution: z.string().min(1, "Dispute resolution method is required"),
  location: z.string().min(1, "Location is required"),
});

export type SalesFormData = z.infer<typeof salesFormSchema>;