import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { Document as DocType } from "@shared/schema";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Check, 
  Clock, 
  MoreVertical, 
  Download, 
  Search, 
  Trash2, 
  Eye 
} from "lucide-react";
import { Link, useLocation } from "wouter";
import UploadModal from "@/components/features/UploadModal";
import DocumentProcessor from "@/components/features/DocumentProcessor";

const Documents = () => {
  const { toast } = useToast();
  const [, navigate] = useLocation();
  const [uploadOpen, setUploadOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDocumentId, setSelectedDocumentId] = useState<number | null>(null);

  const { data: documents = [], isLoading } = useQuery<DocType[]>({queryKey: ['/api/documents'], initialData: []});

  const filteredDocuments = documents.filter((doc: DocType) => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const processedDocuments = filteredDocuments.filter((doc: DocType) => doc.processed);
  const pendingDocuments = filteredDocuments.filter((doc: DocType) => !doc.processed);

  const handleDocumentClick = (documentId: number) => {
    setSelectedDocumentId(documentId);
  };

  const handleDeleteDocument = (documentId: number) => {
    // In a real app, you would delete the document via API
    toast({
      title: "Not implemented",
      description: "Document deletion would be implemented in the full version.",
    });
  };

  const handleExportDocument = (documentId: number, format: string) => {
    // Export document data
    window.open(`/api/documents/${documentId}/export/${format}`, '_blank');
  };

  const renderDocumentList = (docs: DocType[] | undefined) => {
    if (!docs || docs.length === 0) {
      return (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 mx-auto text-neutral-400" />
          <h3 className="mt-4 text-lg font-medium text-neutral-900">No documents found</h3>
          <p className="mt-2 text-neutral-600">
            {searchQuery ? "Try a different search query or" : "Upload your first document to get started"}
          </p>
          <Button className="mt-4" onClick={() => setUploadOpen(true)}>
            Upload Document
          </Button>
        </div>
      );
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Template</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {docs.map((doc: DocType) => (
            <TableRow 
              key={doc.id} 
              className={`cursor-pointer ${selectedDocumentId === doc.id ? "bg-primary/5" : ""}`}
              onClick={() => handleDocumentClick(doc.id)}
            >
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-neutral-400" />
                  {doc.name}
                </div>
              </TableCell>
              <TableCell>
                {new Date(doc.uploadedAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {(doc.size / 1024 / 1024).toFixed(2)} MB
              </TableCell>
              <TableCell>
                {doc.processed ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <Check className="mr-1 h-3 w-3" />
                    Processed
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    <Clock className="mr-1 h-3 w-3" />
                    Pending
                  </span>
                )}
              </TableCell>
              <TableCell>
                {doc.templateId || "—"}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={(e) => {
                      e.stopPropagation();
                      handleDocumentClick(doc.id);
                    }}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    {doc.processed && (
                      <>
                        <DropdownMenuItem onClick={(e) => {
                          e.stopPropagation();
                          handleExportDocument(doc.id, 'csv');
                        }}>
                          <Download className="mr-2 h-4 w-4" />
                          Export as CSV
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={(e) => {
                          e.stopPropagation();
                          handleExportDocument(doc.id, 'excel');
                        }}>
                          <Download className="mr-2 h-4 w-4" />
                          Export as Excel
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteDocument(doc.id);
                      }}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">Documents</h1>
          <p className="text-neutral-600 mt-1">
            Manage and process your uploaded financial documents
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
            <div className="text-2xl font-bold">{documents.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Processed</CardTitle>
            <Check className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{processedDocuments.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-neutral-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingDocuments.length}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Documents</CardTitle>
              <div className="relative mt-2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Search documents..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Tabs defaultValue="all" className="w-full">
                <div className="px-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="processed">Processed</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                  </TabsList>
                </div>
                <div className="px-6 pt-4 pb-0">
                  {isLoading ? (
                    <div className="flex justify-center items-center h-32">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
                    </div>
                  ) : (
                    <>
                      <TabsContent value="all" className="m-0">
                        {renderDocumentList(filteredDocuments)}
                      </TabsContent>
                      <TabsContent value="processed" className="m-0">
                        {renderDocumentList(processedDocuments)}
                      </TabsContent>
                      <TabsContent value="pending" className="m-0">
                        {renderDocumentList(pendingDocuments)}
                      </TabsContent>
                    </>
                  )}
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Document Processor</CardTitle>
            </CardHeader>
            <CardContent>
              <DocumentProcessor documentId={selectedDocumentId} />
            </CardContent>
          </Card>
        </div>
      </div>

      <UploadModal isOpen={uploadOpen} onClose={() => setUploadOpen(false)} />
    </div>
  );
};

export default Documents;
