import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, FileText, Folder, FileCode, BookOpen, HelpCircle } from "lucide-react";

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const faqItems = [
    {
      question: "What types of documents can I process?",
      answer: "Currently, the platform is optimized for financial documents, particularly bank statements. We support PDF files from major banks including Chase, Bank of America, Wells Fargo, and Citibank. Support for additional document types is planned for future updates."
    },
    {
      question: "How accurate is the data extraction?",
      answer: "Our extraction engine typically achieves 95%+ accuracy on supported document types. Accuracy depends on document quality and whether a matching template exists. You can always review and edit the extracted data before exporting it."
    },
    {
      question: "Can I create custom templates?",
      answer: "Yes! You can create custom templates for any financial document type. Navigate to the Templates section, click 'Create Template', and follow the guided setup process to map fields from your document."
    },
    {
      question: "What export formats are supported?",
      answer: "Currently, you can export extracted data to CSV and Excel formats. Additional export formats, including JSON and API integrations with accounting software, are planned for future updates."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, security is our priority. All uploaded documents and extracted data are encrypted at rest and in transit. We do not store your documents longer than necessary for processing, and you can delete your data at any time."
    },
    {
      question: "How many documents can I process?",
      answer: "The number of documents you can process depends on your subscription plan. Free accounts can process up to 5 documents per month, while paid plans offer higher limits and additional features."
    },
    {
      question: "Can I batch process multiple documents?",
      answer: "Yes, batch processing is available on all paid plans. You can upload multiple documents at once and apply the same template to process them in bulk."
    },
    {
      question: "How do I request a new feature?",
      answer: "You can submit feature requests through the Roadmap page. Click on 'Request a Feature' and provide details about what you'd like to see added to the platform."
    }
  ];

  const filteredFaqs = faqItems.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Documentation</h1>
        <p className="text-neutral-600 mt-2">
          Learn how to use Dobaato's financial document processing platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <FileText className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Learn the basics of our platform</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-white hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <Folder className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Templates</CardTitle>
            <CardDescription>Creating and managing document templates</CardDescription>
          </CardHeader>
        </Card>
        <Card className="bg-white hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <FileCode className="h-8 w-8 text-primary mb-2" />
            <CardTitle>API Reference</CardTitle>
            <CardDescription>Developer documentation for API integration</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="user-guides" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
          <TabsTrigger value="user-guides">User Guides</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
        </TabsList>
        
        <TabsContent value="user-guides">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                User Guides
              </CardTitle>
              <CardDescription>
                Comprehensive guides to help you make the most of our platform
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-medium mb-2">Document Processing Workflow</h3>
                  <p className="text-neutral-600 mb-3">
                    Learn how to upload, process, and extract data from financial documents
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Uploading documents
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Selecting templates
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Processing documents
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Exporting data
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-medium mb-2">Template Management</h3>
                  <p className="text-neutral-600 mb-3">
                    Master the art of creating and managing document templates
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Creating templates
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Field mapping
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Testing templates
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Sharing templates
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-medium mb-2">Data Extraction</h3>
                  <p className="text-neutral-600 mb-3">
                    Understanding how our system extracts data from documents
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      OCR technology
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Field recognition
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Data validation
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Error handling
                    </li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-4 hover:border-primary transition-colors">
                  <h3 className="text-lg font-medium mb-2">Export Options</h3>
                  <p className="text-neutral-600 mb-3">
                    Explore different ways to export and use your extracted data
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      CSV export
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Excel export
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Data formatting
                    </li>
                    <li className="flex items-center text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      Batch exports
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="faqs">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Find answers to common questions about our platform
              </CardDescription>
              <div className="relative mt-2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-neutral-400" />
                <Input
                  placeholder="Search FAQs..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-neutral-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-8">
                  <SearchIcon className="mx-auto h-12 w-12 text-neutral-300" />
                  <h3 className="mt-4 text-lg font-medium text-neutral-900">No results found</h3>
                  <p className="mt-2 text-neutral-600">
                    We couldn't find any FAQs matching your search query
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tutorials">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Video Tutorials
              </CardTitle>
              <CardDescription>
                Step-by-step video guides to help you get the most out of Dobaato
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-neutral-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Getting Started with Dobaato</h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      An overview of the platform and its key features
                    </p>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-neutral-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Creating Your First Template</h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      Learn how to create and configure document templates
                    </p>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-neutral-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Processing Bank Statements</h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      How to extract data from various bank statement formats
                    </p>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-neutral-100 flex items-center justify-center">
                    <FileText className="h-12 w-12 text-neutral-400" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Advanced Data Extraction</h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      Tips and tricks for handling complex document formats
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Helper component
const SearchIcon = HelpCircle;

export default Documentation;
