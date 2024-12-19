import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface DocumentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  templateTitle: string;
}

interface FormData {
  partyAName: string;
  partyAAddress: string;
  partyBName: string;
  partyBAddress: string;
  effectiveDate: string;
}

export const DocumentForm = ({ open, onOpenChange, templateTitle }: DocumentFormProps) => {
  const form = useForm<FormData>({
    defaultValues: {
      partyAName: "",
      partyAAddress: "",
      partyBName: "",
      partyBAddress: "",
      effectiveDate: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast.success("Document generated successfully!");
    onOpenChange(false);
    // Here you would typically generate the document with the form data
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Generate {templateTitle}</DialogTitle>
          <DialogDescription>
            Fill in the required information to generate your document.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="partyAName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Party A Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the name of the first party" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="partyAAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Party A Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the address of the first party" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="partyBName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Party B Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the name of the second party" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="partyBAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Party B Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the address of the second party" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="effectiveDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Effective Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Generate Document</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};