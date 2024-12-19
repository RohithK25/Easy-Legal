import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { SalesFormData } from "./types";

interface SalesFormFieldsProps {
  form: UseFormReturn<SalesFormData>;
}

export function SalesFormFields({ form }: SalesFormFieldsProps) {
  return (
    <div className="grid gap-4 py-4">
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
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description of Goods/Assets</FormLabel>
            <FormControl>
              <Input placeholder="Enter description" {...field} />
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
            <FormLabel>Quantity/Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter quantity" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="condition"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Condition</FormLabel>
            <FormControl>
              <Input placeholder="Enter condition" {...field} />
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
            <FormLabel>Total Purchase Price</FormLabel>
            <FormControl>
              <Input placeholder="Enter total price" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="depositAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Deposit Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter deposit amount" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="balanceAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Balance Amount</FormLabel>
            <FormControl>
              <Input placeholder="Enter balance amount" {...field} />
            </FormControl>
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
            <FormControl>
              <Input placeholder="Enter payment schedule" {...field} />
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
            <FormControl>
              <Input placeholder="Enter payment method" {...field} />
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
        name="responsibleParty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Responsible Party for Shipping</FormLabel>
            <FormControl>
              <Input placeholder="Enter responsible party" {...field} />
            </FormControl>
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
              <Input placeholder="Enter inspection period" {...field} />
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
            <FormControl>
              <Input placeholder="Enter dispute resolution method" {...field} />
            </FormControl>
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
}