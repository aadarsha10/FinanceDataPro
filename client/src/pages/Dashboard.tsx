import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Document } from "@shared/schema";
import { FileText, Calendar, BarChart, Clock, CheckCircle, AlertTriangle } from "lucide-react";
import DocumentProcessor from "@/components/features/DocumentProcessor";
import UploadModal from "@/components/features/UploadModal";

const Dashboard = () => {
  const { toast } = useToast();
  const [uploadOpen, setUploadOpen] = useState(false);
  const [selectedDocumentId, setSelectedDocumentId] = useState<number | null>(null);

  const { data: documents, isLoading } = useQuery<Document[]>({    queryKey: ["/api/documents"],  });

  const handleDocumentSelect = (documentId: number) => {
    setSelectedDocumentId(documentId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Document Processing Dashboard</h1>
          <p className="text-neutral-600 mt-1">
            Upload and process your financial documents to extract structured data
          </p>
        </div>
        <Button
          className="mt-4 md:mt-0"
          onClick={() => setUploadOpen(true)}
        >
          <FileText className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
            <FileText className="h-4 w-4 text-neutral-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documents?.length || 0}</div>
            <p className="text-xs text-neutral-500 mt-1">Uploaded documents</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Processed Documents</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {documents?.filter((doc: Document) => doc.processed).length || 0}
            </div>
            <p className="text-xs text-neutral-500 mt-1">Successfully processed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Documents</CardTitle>
            <Clock className="h-4 w-4 text-neutral-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {documents?.filter((doc: Document) => !doc.processed).length || 0}
            </div>
            <p className="text-xs text-neutral-500 mt-1">Awaiting processing</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="processor" className="w-full">
        <TabsList className="grid grid-cols-2 w-[400px] mb-6">
          <TabsTrigger value="processor">Document Processor</TabsTrigger>
          <TabsTrigger value="documents">Recent Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="processor">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-neutral-900">Document Processor</h3>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setUploadOpen(true)}
                >
                  Upload New
                </Button>
              </div>
            </div>

            <div className="p-6">
              <DocumentProcessor documentId={selectedDocumentId} />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="documents">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-neutral-200 px-6 py-4">
              <h3 className="text-lg font-medium text-neutral-900">Recent Documents</h3>
            </div>

            <div className="p-6">
              {isLoading ? (
                <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : documents && documents.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {documents.map((document: Document) => (
                    <Card 
                      key={document.id} 
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedDocumentId === document.id ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => handleDocumentSelect(document.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-4">
                          <div className="bg-neutral-100 rounded-md p-2">
                            <FileText className="h-6 w-6 text-neutral-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-neutral-900 truncate">
                              {document.name}
                            </p>
                            <p className="text-xs text-neutral-500 mt-1">
                              {new Date(document.uploadedAt).toLocaleDateString()}
                            </p>
                            <div className="flex items-center mt-2">
                              {document.processed ? (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                  <CheckCircle className="mr-1 h-3 w-3" />
                                  Processed
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                  <Clock className="mr-1 h-3 w-3" />
                                  Pending
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="h-12 w-12 mx-auto text-neutral-400" />
                  <h3 className="mt-4 text-lg font-medium text-neutral-900">No documents yet</h3>
                  <p className="mt-2 text-neutral-600">
                    Upload your first document to get started
                  </p>
                  <Button className="mt-4" onClick={() => setUploadOpen(true)}>
                    Upload Document
                  </Button>
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <UploadModal isOpen={uploadOpen} onClose={() => setUploadOpen(false)} />
    </div>
  );
};

export default Dashboard;
