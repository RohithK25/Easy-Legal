import * as z from "zod";

export const purchaseOrderFormSchema = z.object({
  buyerName: z.string().min(1, "Buyer name is required"),
  buyerAddress: z.string().min(1, "Buyer address is required"),
  sellerName: z.string().min(1, "Seller name is required"),
  sellerAddress: z.string().min(1, "Seller address is required"),
  state: z.string().min(1, "State is required"),
  purchaseOrderNumber: z.string().min(1, "Purchase order number is required"),
  description: z.string().min(1, "Description is required"),
  quantity: z.string().min(1, "Quantity is required"),
  unitPrice: z.string().min(1, "Unit price is required"),
  totalPrice: z.string().min(1, "Total price is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  paymentMethod: z.string().min(1, "Payment method is required"),
  paymentSchedule: z.string().min(1, "Payment schedule is required"),
  paymentDueDate: z.string().min(1, "Payment due date is required"),
  shippingTerms: z.string().min(1, "Shipping terms is required"),
  responsibleParty: z.string().min(1, "Responsible party is required"),
  inspectionPeriod: z.string().min(1, "Inspection period is required"),
  disputeResolution: z.string().min(1, "Dispute resolution is required"),
  location: z.string().min(1, "Location is required"),
});

export type PurchaseOrderFormData = z.infer<typeof purchaseOrderFormSchema>;