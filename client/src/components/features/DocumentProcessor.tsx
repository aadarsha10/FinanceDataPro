import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Template, Document, ExtractedData } from "@shared/schema";
import PdfViewer from "./PdfViewer";
import DataTable from "./DataTable";
import { Edit, Download } from "lucide-react";

interface DocumentProcessorProps {
  documentId: number | null;
}

const DocumentProcessor = ({ documentId }: DocumentProcessorProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<any>(null);
  const [exportFormat, setExportFormat] = useState<string>("csv");

  const { data: templates = [] } = useQuery<Template[]>({    queryKey: ['/api/templates'],    enabled: !!documentId,    initialData: []  });

  const { data: document } = useQuery<Document>({    queryKey: [`/api/documents/${documentId}`],    enabled: !!documentId  });

  const { data: extractedData, isLoading: isLoadingData } = useQuery<ExtractedData>({    queryKey: [`/api/documents/${documentId}/data`],    enabled: !!documentId && document?.processed === true  });

  useEffect(() => {
    if (extractedData) {
      setEditedData((extractedData as ExtractedData).data);
    }
  }, [extractedData]);

  useEffect(() => {
    if (document && (document as Document).templateId) {
      setSelectedTemplateId(String((document as Document).templateId));
    }
  }, [document]);

  const processMutation = useMutation({
    mutationFn: () => {
      if (!documentId || !selectedTemplateId) {
        throw new Error("Document ID and Template ID are required");
      }
      return apiRequest("POST", `/api/documents/${documentId}/process`, {
        templateId: selectedTemplateId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/documents/${documentId}`] });
      queryClient.invalidateQueries({ queryKey: [`/api/documents/${documentId}/data`] });
      toast({
        title: "Document processed successfully",
        description: "The data has been extracted from your document.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Processing failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const updateDataMutation = useMutation({
    mutationFn: () => {
      if (!documentId || !editedData) {
        throw new Error("Document ID and data are required");
      }
      return apiRequest("PUT", `/api/extracted-data/${documentId}`, {
        data: editedData,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/documents/${documentId}/data`] });
      toast({
        title: "Data updated successfully",
        description: "The extracted data has been updated.",
      });
      setIsEditing(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleDataChange = (path: string, value: any) => {
    if (!editedData) return;
    
    // Handle nested paths like 'transactions.0.amount'
    const pathParts = path.split(".");
    const newData = { ...editedData };
    
    let current = newData;
    for (let i = 0; i < pathParts.length - 1; i++) {
      const part = pathParts[i];
      // Handle array indices
      if (!isNaN(Number(part))) {
        const index = Number(part);
        current = current[index];
      } else {
        current = current[part];
      }
    }
    
    const lastPart = pathParts[pathParts.length - 1];
    current[lastPart] = value;
    
    setEditedData(newData);
  };

  const handleExport = (format: string) => {
    if (!documentId) return;
    
    // Create and click an anchor to download the file
    const link = window.document.createElement("a");
    link.href = `/api/documents/${documentId}/export/${format}`;
    link.download = `exported-data.${format}`;
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
  };

  const renderTransactionTable = () => {
    if (!editedData || !editedData.transactions) return null;
    
    return (
      <div className="mt-4">
        <h4 className="text-sm font-medium text-neutral-900 mb-3">Transaction Details</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead>
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Date</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">Description</th>
                <th className="px-3 py-2 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {editedData.transactions.map((transaction: any, index: number) => (
                <tr key={index}>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-neutral-700">
                    {isEditing ? (
                      <Input
                        value={transaction.date}
                        onChange={(e) => handleDataChange(`transactions.${index}.date`, e.target.value)}
                        className="h-7 text-sm"
                      />
                    ) : (
                      transaction.date
                    )}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-neutral-700">
                    {isEditing ? (
                      <Input
                        value={transaction.description}
                        onChange={(e) => handleDataChange(`transactions.${index}.description`, e.target.value)}
                        className="h-7 text-sm"
                      />
                    ) : (
                      transaction.description
                    )}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap text-sm text-right">
                    {isEditing ? (
                      <Input
                        value={transaction.amount}
                        onChange={(e) => handleDataChange(`transactions.${index}.amount`, parseFloat(e.target.value))}
                        className="h-7 text-sm text-right"
                        type="number"
                        step="0.01"
                      />
                    ) : (
                      <span className={transaction.amount >= 0 ? "text-success" : "text-neutral-700"}>
                        {transaction.amount >= 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  if (!documentId) {
    return (
      <div className="text-center p-6">
        <p className="text-neutral-600">No document selected</p>
      </div>
    );
  }

  const pdfUrl = document ? `/api/documents/${documentId}/file` : null;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* PDF Preview */}
        <PdfViewer url={pdfUrl} className="h-full" />

        {/* Extracted Data */}
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {extractedData ? "Extracted Data" : "Process Document"}
            </CardTitle>
            {extractedData && (
              <div className="flex items-center space-x-2">
                {isEditing ? (
                  <>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        setIsEditing(false);
                        setEditedData((extractedData as ExtractedData).data);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button 
                      size="sm" 
                      onClick={() => updateDataMutation.mutate()}
                      disabled={updateDataMutation.isPending}
                    >
                      {updateDataMutation.isPending ? "Saving..." : "Save Changes"}
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Fields
                  </Button>
                )}
              </div>
            )}
          </CardHeader>
          <CardContent>
            {!document?.processed ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template">Select Template</Label>
                  <Select value={selectedTemplateId} onValueChange={setSelectedTemplateId}>
                    <SelectTrigger id="template">
                      <SelectValue placeholder="Choose a template" />
                    </SelectTrigger>
                    <SelectContent>
                      {templates.map((template: Template) => (
                        <SelectItem key={template.id} value={String(template.id)}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={() => processMutation.mutate()}
                  disabled={!selectedTemplateId || processMutation.isPending}
                  className="w-full"
                >
                  {processMutation.isPending ? "Processing..." : "Process Document"}
                </Button>
              </div>
            ) : isLoadingData ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : extractedData && editedData ? (
              <>
                <div className="rounded-lg border border-neutral-200 bg-white">
                  <div className="p-4 border-b border-neutral-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-500">Account Number</label>
                        <div className="mt-1">
                          {isEditing ? (
                            <Input
                              value={editedData.accountNumber}
                              onChange={(e) => handleDataChange('accountNumber', e.target.value)}
                              className="h-7 text-sm"
                            />
                          ) : (
                            <div className="text-sm text-neutral-900 font-medium">{editedData.accountNumber}</div>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-500">Statement Period</label>
                        <div className="mt-1">
                          {isEditing ? (
                            <Input
                              value={editedData.statementPeriod}
                              onChange={(e) => handleDataChange('statementPeriod', e.target.value)}
                              className="h-7 text-sm"
                            />
                          ) : (
                            <div className="text-sm text-neutral-900 font-medium">{editedData.statementPeriod}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    {renderTransactionTable()}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center p-6">
                <p className="text-neutral-600">No data available</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Export Options */}
      {document?.processed && extractedData && (
        <div className="mt-6 bg-neutral-50 rounded-lg border border-neutral-200 p-4">
          <div className="flex flex-wrap items-center justify-between">
            <h3 className="font-medium text-neutral-900">Export Options</h3>
            <div className="flex items-center space-x-3 mt-2 sm:mt-0">
              <Select value={exportFormat} onValueChange={setExportFormat}>
                <SelectTrigger className="w-36">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="csv">CSV Format</SelectItem>
                  <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={() => handleExport(exportFormat)}>
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentProcessor;
