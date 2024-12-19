import * as z from "zod";

export const purchaseOrderFormSchema = z.object({
  buyerName: z.string().min(1, "Buyer name is required"),
  buyerAddress: z.string().min(1, "Buyer address is required"),
  sellerName: z.string().min(1, "Seller name is required"),
  sellerAddress: z.string().min(1, "Seller address is required"),
  goodsDescription: z.string().min(1, "Goods description is required"),
  quantity: z.string().min(1, "Quantity is required"),
  unitPrice: z.string().min(1, "Unit price is required"),
  totalPrice: z.string().min(1, "Total price is required"),
  deliveryDate: z.string().min(1, "Delivery date is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  paymentTerms: z.string().min(1, "Payment terms are required"),
  state: z.string().min(1, "State is required"),
});

export type PurchaseOrderFormData = z.infer<typeof purchaseOrderFormSchema>;