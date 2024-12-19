import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { PurchaseOrderFormData } from "./types";

interface PurchaseOrderFormFieldsProps {
  form: UseFormReturn<PurchaseOrderFormData>;
}

export const PurchaseOrderFormFields = ({ form }: PurchaseOrderFormFieldsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="buyerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Buyer Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter buyer name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="buyerAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Buyer Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter buyer address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sellerName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Seller Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter seller name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sellerAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Seller Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter seller address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>State</FormLabel>
            <FormControl>
              <Input placeholder="Enter state" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="purchaseOrderNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Purchase Order Number</FormLabel>
            <FormControl>
              <Input placeholder="Enter purchase order number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description of Goods/Services</FormLabel>
            <FormControl>
              <Input placeholder="Enter detailed description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="quantity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Quantity</FormLabel>
            <FormControl>
              <Input placeholder="Enter quantity" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="unitPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Unit Price</FormLabel>
            <FormControl>
              <Input placeholder="Enter unit price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="totalPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Total Price</FormLabel>
            <FormControl>
              <Input placeholder="Enter total price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="deliveryAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Delivery Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter delivery address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="deliveryDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Delivery Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Method</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment method" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
                <SelectItem value="check">Check</SelectItem>
                <SelectItem value="credit_card">Credit Card</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="paymentSchedule"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Schedule</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select payment schedule" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="50_50">50% deposit, 50% upon delivery</SelectItem>
                <SelectItem value="100">100% upon delivery</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="paymentDueDate"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Payment Due Date</FormLabel>
            <FormControl>
              <Input type="date" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="shippingTerms"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Shipping Terms</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select shipping terms" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="fob_destination">FOB Destination</SelectItem>
                <SelectItem value="fob_origin">FOB Origin</SelectItem>
                <SelectItem value="ddp">DDP (Delivered Duty Paid)</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="responsibleParty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Responsible Party for Shipping</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select responsible party" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="buyer">Buyer</SelectItem>
                <SelectItem value="seller">Seller</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="inspectionPeriod"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Inspection Period (days)</FormLabel>
            <FormControl>
              <Input type="number" placeholder="Enter number of days" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="disputeResolution"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Dispute Resolution Method</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select dispute resolution method" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="mediation">Mediation</SelectItem>
                <SelectItem value="arbitration">Arbitration</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter location" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};