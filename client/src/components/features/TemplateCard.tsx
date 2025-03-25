import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Template } from "@shared/schema";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Trash2,
  PlusCircle,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface TemplateCardProps {
  template?: Template;
  isNewCard?: boolean;
  onSelectTemplate?: (template: Template) => void;
  onCreateTemplate?: () => void;
}

const TemplateCard = ({
  template,
  isNewCard = false,
  onSelectTemplate,
  onCreateTemplate,
}: TemplateCardProps) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: () => {
      if (!template) throw new Error("No template to delete");
      return apiRequest("DELETE", `/api/templates/${template.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/templates"] });
      toast({
        title: "Template deleted",
        description: "The template has been successfully deleted.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to delete template",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  if (isNewCard) {
    return (
      <Card 
        className="border border-dashed border-neutral-300 hover:bg-neutral-50 transition-all cursor-pointer h-full"
        onClick={onCreateTemplate}
      >
        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <PlusCircle className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-medium text-neutral-900">Create New Template</h4>
          <p className="mt-2 text-sm text-neutral-600">
            Configure a custom template for a new document type
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!template) return null;

  return (
    <>
      <Card className="border border-neutral-200 hover:shadow-md transition-all h-full flex flex-col">
        <CardHeader className="border-b border-neutral-200 flex-row justify-between items-center">
          <h4 className="font-medium text-neutral-900">{template.name}</h4>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-neutral-500 hover:text-neutral-700"
            >
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit template</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-neutral-500 hover:text-neutral-700"
              onClick={() => setShowDeleteDialog(true)}
            >
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete template</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mb-3">
            <div className="text-xs font-medium text-neutral-500">Fields Mapped</div>
            <div className="mt-1 text-sm text-neutral-700">
              {(template.fields as Array<unknown>).length} fields
            </div>
          </div>
          <div className="mb-3">
            <div className="text-xs font-medium text-neutral-500">Last Modified</div>
            <div className="mt-1 text-sm text-neutral-700">
              {new Date(template.updatedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-neutral-500">Used</div>
            <div className="mt-1 text-sm text-neutral-700">
              {template.usageCount} {template.usageCount === 1 ? "time" : "times"}
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-neutral-200 bg-neutral-50 p-4">
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={() => onSelectTemplate?.(template)}
          >
            Use Template
          </Button>
        </CardFooter>
      </Card>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the template "{template.name}". This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteMutation.mutate()}
              className="bg-red-600 focus:ring-red-600"
            >
              {deleteMutation.isPending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default TemplateCard;
