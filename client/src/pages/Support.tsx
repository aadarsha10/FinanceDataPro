import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { 
  BookOpen, 
  FileText, 
  HeadphonesIcon, 
  HelpCircle, 
  MessageSquare, 
  PanelRight, 
  PlayCircle, 
  Search, 
  ThumbsUp,
  Users 
} from "lucide-react";
import { Link } from "wouter";

const Support = () => {
  return (
    <StaticPageLayout
      title="Help & Support"
      subtitle="Get the help you need to make the most of FinDataPRO"
    >
      <div className="space-y-12">
        {/* Search section */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3 text-center">How can we help you?</h2>
            <p className="text-center text-gray-600 mb-6">
              Search our knowledge base for answers to common questions
            </p>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search for answers..." className="pl-10" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Button variant="outline" size="sm">Templates</Button>
              <Button variant="outline" size="sm">Data Extraction</Button>
              <Button variant="outline" size="sm">API</Button>
              <Button variant="outline" size="sm">Billing</Button>
              <Button variant="outline" size="sm">Exports</Button>
            </div>
          </div>
        </section>

        {/* Support options */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="mb-2">
                  <HeadphonesIcon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Get help from our customer support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our support team is available Monday through Friday, 9am to 5pm EST.
                  We typically respond within 24 hours.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contact Support</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2">
                  <MessageSquare className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Community Forum</CardTitle>
                <CardDescription>
                  Get help from the FinDataPRO community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect with other users, share tips and solutions, and get
                  your questions answered by the community.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/community">
                  <Button variant="outline" className="w-full">Visit Community</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Comprehensive guides and references
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Browse our detailed documentation to learn about all the features
                  and capabilities of FinDataPRO.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/documentation">
                  <Button variant="outline" className="w-full">View Documentation</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Popular resources */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Popular Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start mb-3">
                <div className="bg-blue-100 p-2 rounded mr-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Getting Started Guide</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Learn how to set up your account, create templates, and process your first document.
              </p>
              <Link href="/guides/getting-started">
                <Button variant="ghost" size="sm">Read guide</Button>
              </Link>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start mb-3">
                <div className="bg-blue-100 p-2 rounded mr-3">
                  <PlayCircle className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Video Tutorials</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Watch step-by-step video tutorials covering all aspects of using FinDataPRO.
              </p>
              <Button variant="ghost" size="sm">Watch videos</Button>
            </div>

            <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start mb-3">
                <div className="bg-blue-100 p-2 rounded mr-3">
                  <PanelRight className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium">Template Library</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Browse our collection of pre-built templates for common financial documents.
              </p>
              <Link href="/templates">
                <Button variant="ghost" size="sm">View templates</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <Link href="/documentation">
              <Button variant="outline" size="sm">View All FAQs</Button>
            </Link>
          </div>
          
          <Tabs defaultValue="general">
            <TabsList className="mb-6">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="account">Account & Billing</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="processing">Document Processing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is FinDataPRO?</AccordionTrigger>
                  <AccordionContent>
                    FinDataPRO is a powerful web-based platform that helps businesses extract structured 
                    data from financial documents. Our solution specializes in processing bank statements, 
                    invoices, and other financial documents, converting them into usable data formats like 
                    CSV and Excel.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is my data secure with FinDataPRO?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we take data security very seriously. FinDataPRO uses bank-level encryption for 
                    all data in transit and at rest. We're compliant with industry security standards, and 
                    we never share your data with third parties. Additionally, you can delete your documents 
                    at any time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>What types of documents can FinDataPRO process?</AccordionTrigger>
                  <AccordionContent>
                    FinDataPRO specializes in processing financial documents, particularly bank statements, 
                    credit card statements, invoices, receipts, and financial reports. Our system works best 
                    with PDF documents but can also handle scanned images in various formats.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How accurate is the data extraction?</AccordionTrigger>
                  <AccordionContent>
                    FinDataPRO delivers high accuracy rates, typically 95-99% for well-structured documents 
                    with good quality. For documents that use consistent templates (like bank statements), 
                    our accuracy rate is even higher. You can always review and edit the extracted data 
                    before exporting it.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="account">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    You can reset your password by clicking the "Forgot Password" link on the login page. 
                    We'll send you an email with instructions to create a new password. If you don't 
                    receive the email, please check your spam folder or contact support.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. 
                    For enterprise customers, we also offer invoice payment options. All payments are 
                    processed securely through our payment provider.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I upgrade my subscription?</AccordionTrigger>
                  <AccordionContent>
                    You can upgrade your subscription at any time from your account settings. Navigate 
                    to "Billing" and select the plan you'd like to upgrade to. The price difference will 
                    be prorated for the remainder of your billing cycle.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can cancel your subscription at any time from your account settings. 
                    Your access will continue until the end of your current billing period. We don't 
                    offer refunds for partial months, but you can continue using the service until 
                    the subscription expires.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="templates">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What are templates and how do they work?</AccordionTrigger>
                  <AccordionContent>
                    Templates are predefined mappings that tell FinDataPRO where to find specific data 
                    in your documents. They help our system accurately extract information from documents 
                    with consistent layouts, like bank statements. When you upload a document, the system 
                    matches it to the appropriate template and extracts the data accordingly.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I create a custom template?</AccordionTrigger>
                  <AccordionContent>
                    To create a custom template, go to the Templates section and click "Create New Template." 
                    Upload a sample document, then use our visual editor to mark the areas containing the 
                    data you want to extract. You can define fields for headers, transaction tables, and 
                    summary sections. Save your template, and it will be available for future documents.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I share templates with my team?</AccordionTrigger>
                  <AccordionContent>
                    Yes, templates can be shared across your organization if you're on a team or enterprise 
                    plan. Any templates created by team members will be available to everyone in your 
                    organization. This helps ensure consistency in data extraction across your team.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Are there pre-built templates available?</AccordionTrigger>
                  <AccordionContent>
                    Yes, FinDataPRO comes with a library of pre-built templates for common financial 
                    documents from major banks and financial institutions. These templates are regularly 
                    updated to accommodate format changes. You can use these templates as-is or customize 
                    them to better fit your specific needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="processing">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does document processing take?</AccordionTrigger>
                  <AccordionContent>
                    Most documents are processed within seconds to a few minutes, depending on the size 
                    and complexity. A typical bank statement with 5-10 pages is usually processed in under 
                    a minute. For large documents or batches, processing time may be longer.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>What file formats are supported?</AccordionTrigger>
                  <AccordionContent>
                    FinDataPRO primarily supports PDF files, including both digital PDFs and scanned 
                    documents. We also support common image formats like JPG, PNG, and TIFF. For best 
                    results, we recommend using digital PDFs whenever possible as they generally yield 
                    higher extraction accuracy.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I process multiple documents at once?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upload multiple documents for batch processing. Our system will process 
                    them sequentially and notify you when all documents have been processed. Each document 
                    will be matched to the appropriate template automatically.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How can I edit extracted data?</AccordionTrigger>
                  <AccordionContent>
                    After processing, you can review and edit the extracted data in our web interface. 
                    Simply click on any field to make changes. Our system highlights potential issues for 
                    your review. Once you're satisfied with the data, you can mark it as verified and 
                    proceed to export it in your preferred format.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </section>

        {/* Community support */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-3">Community Support</h2>
              <p className="text-gray-600 mb-6">
                Join our thriving community of financial professionals and document processing experts.
                Get answers to your questions, share your experiences, and learn best practices from
                other users.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ThumbsUp className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Community Forum</h3>
                    <p className="text-sm text-gray-600">
                      Post questions and get answers from the community and our expert team
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">User Groups</h3>
                    <p className="text-sm text-gray-600">
                      Connect with users in your industry to share domain-specific tips
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HelpCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-medium">Expert Help</h3>
                    <p className="text-sm text-gray-600">
                      Get guidance from our community experts who volunteer their time
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/community">
                  <Button>Join Our Community</Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
                alt="Community collaboration"
                className="rounded-lg shadow-md"
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">Still Need Help?</h2>
          <Card>
            <CardHeader>
              <CardTitle>Contact Our Support Team</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's your question about?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Describe your issue in detail"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Support;