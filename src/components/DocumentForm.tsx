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
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateWordDocument } from "@/utils/documentGenerator";

const formSchema = z.object({
  partyAName: z.string().min(1, "Party A name is required"),
  partyAAddress: z.string().min(1, "Party A address is required"),
  partyBName: z.string().min(1, "Party B name is required"),
  partyBAddress: z.string().min(1, "Party B address is required"),
  effectiveDate: z.string().min(1, "Effective date is required"),
  purposeOfDisclosure: z.string().min(1, "Purpose of disclosure is required"),
  state: z.string().min(1, "State is required"),
  location: z.string().min(1, "Location is required"),
  confidentialityPeriod: z.string().min(1, "Confidentiality period is required"),
  returnPeriod: z.string().min(1, "Return period is required"),
});

type FormData = z.infer<typeof formSchema>;

interface DocumentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  templateTitle: string;
  templateContent: string;
}

export const DocumentForm = ({ open, onOpenChange, templateTitle, templateContent }: DocumentFormProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      partyAName: "",
      partyAAddress: "",
      partyBName: "",
      partyBAddress: "",
      effectiveDate: "",
      purposeOfDisclosure: "",
      state: "",
      location: "",
      confidentialityPeriod: "",
      returnPeriod: "",
    },
  });

  const generateDocument = (data: FormData) => {
    let content = templateContent;
    
    // Replace placeholders with form data
    content = content
      .replace("[Date]", new Date(data.effectiveDate).toLocaleDateString())
      .replace("[Full Legal Name of Disclosing Party]", data.partyAName)
      .replace("[Address]", data.partyAAddress)
      .replace("[Full Legal Name of Receiving Party]", data.partyBName)
      .replace(/\[Address\]/, data.partyBAddress)
      .replace("[Purpose of disclosure, e.g., evaluating a potential business partnership, investment, etc.]", data.purposeOfDisclosure)
      .replace("[number of years, e.g., two (2)]", data.confidentialityPeriod)
      .replace("[X]", data.returnPeriod)
      .replace("[State]", data.state)
      .replace("[Location]", data.location)
      .replace("[arbitration/mediation]", "arbitration");

    return content;
  };

  const downloadDocument = async (content: string) => {
    try {
      const blob = await generateWordDocument(content);
      const url = URL.createObjectURL(blob);
      const element = document.createElement("a");
      element.href = url;
      element.download = `${templateTitle.toLowerCase().replace(/\s+/g, "-")}.docx`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating Word document:", error);
      toast.error("Failed to generate document");
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const documentContent = generateDocument(data);
      await downloadDocument(documentContent);
      toast.success("Document generated successfully!");
      onOpenChange(false);
    } catch (error) {
      toast.error("Failed to generate document");
      console.error("Error generating document:", error);
    }
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
            <FormField
              control={form.control}
              name="purposeOfDisclosure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose of Disclosure</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the purpose of disclosure" {...field} />
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
                  <FormLabel>Governing Law State</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the state" {...field} />
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
                  <FormLabel>Dispute Resolution Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confidentialityPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confidentiality Period (years)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the confidentiality period in years" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="returnPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Return Period (days)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the return period in days" {...field} />
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
