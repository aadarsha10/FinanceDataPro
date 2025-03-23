import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Template } from "@shared/schema";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import TemplateCard from "@/components/features/TemplateCard";
import { PlusCircle } from "lucide-react";

const Templates = () => {
  const { toast } = useToast();
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [templateName, setTemplateName] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");
  const [bankName, setBankName] = useState("");

  const { data: templates, isLoading } = useQuery({
    queryKey: ["/api/templates"],
  });

  const handleCreateTemplate = () => {
    // In a real app, you would create the template through the API
    toast({
      title: "Template creation not implemented",
      description: "This is a preview feature. Template creation would be implemented in the full version.",
    });
    setCreateDialogOpen(false);
    setTemplateName("");
    setTemplateDescription("");
    setBankName("");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900">Template Management</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
          Create and manage custom templates for different financial document types.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
          <h3 className="text-lg font-medium text-neutral-900">Your Templates</h3>
          <Button onClick={() => setCreateDialogOpen(true)}>
            <PlusCircle className="h-4 w-4 mr-1.5" />
            Create Template
          </Button>
        </div>

        <div className="p-6">
          {isLoading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {templates?.map((template: Template) => (
                <TemplateCard 
                  key={template.id} 
                  template={template}
                  onSelectTemplate={(template) => {
                    toast({
                      title: "Template selected",
                      description: `You selected the "${template.name}" template.`,
                    });
                  }}
                />
              ))}
              <TemplateCard 
                isNewCard 
                onCreateTemplate={() => setCreateDialogOpen(true)}
              />
            </div>
          )}
        </div>
      </div>

      <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Template</DialogTitle>
            <DialogDescription>
              Configure a custom template for a specific document type.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Template Name</Label>
              <Input
                id="name"
                placeholder="e.g. Chase Bank Statement"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Describe the purpose of this template"
                value={templateDescription}
                onChange={(e) => setTemplateDescription(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bank">Bank Name</Label>
              <Input
                id="bank"
                placeholder="e.g. Chase, Bank of America"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Field Configuration</Label>
              <div className="bg-neutral-50 rounded-md p-4 text-center text-sm text-neutral-600">
                Advanced field configuration would be available in the full version.
              </div>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between">
            <Button
              variant="outline"
              onClick={() => setCreateDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleCreateTemplate}
              disabled={!templateName}
            >
              Create Template
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Templates;
