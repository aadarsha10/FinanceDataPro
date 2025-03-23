import { useState } from "react";
import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Search, BookOpen, Code, FileText, PlayCircle, HelpCircle, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      title: "Getting Started",
      items: [
        { title: "Introduction to FinDataPRO", link: "#introduction" },
        { title: "Creating Your Account", link: "#account-setup" },
        { title: "Platform Overview", link: "#platform-overview" },
        { title: "System Requirements", link: "#system-requirements" },
        { title: "Your First Document", link: "#first-document" },
      ],
    },
    {
      title: "Document Processing",
      items: [
        { title: "Uploading Documents", link: "#uploading" },
        { title: "Processing Workflow", link: "#processing-workflow" },
        { title: "Reviewing Extracted Data", link: "#reviewing-data" },
        { title: "Handling Errors & Exceptions", link: "#error-handling" },
        { title: "Exporting Processed Data", link: "#exporting" },
      ],
    },
    {
      title: "Template Management",
      items: [
        { title: "Understanding Templates", link: "#templates-overview" },
        { title: "Using Pre-built Templates", link: "#prebuilt-templates" },
        { title: "Creating Custom Templates", link: "#custom-templates" },
        { title: "Field Mapping Guide", link: "#field-mapping" },
        { title: "Template Settings & Configuration", link: "#template-config" },
      ],
    },
    {
      title: "Data Management",
      items: [
        { title: "Data Storage & Security", link: "#data-security" },
        { title: "Managing Documents", link: "#managing-documents" },
        { title: "Organizing & Tagging", link: "#organizing" },
        { title: "Search & Filtering", link: "#search-filtering" },
        { title: "Bulk Operations", link: "#bulk-operations" },
      ],
    },
    {
      title: "Integration",
      items: [
        { title: "API Overview", link: "#api-overview" },
        { title: "Authentication", link: "#api-authentication" },
        { title: "Webhooks", link: "#webhooks" },
        { title: "Third-Party Integrations", link: "#third-party" },
        { title: "Custom Export Formats", link: "#custom-exports" },
      ],
    },
  ];

  // Filter sections based on search query
  const filteredSections = sections.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0);

  return (
    <StaticPageLayout title="Documentation" subtitle="Comprehensive guides and references for FinDataPRO">
      <div className="space-y-10">
        {/* Search section */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <Button variant="outline" size="sm" onClick={() => setSearchQuery("templates")}>Templates</Button>
              <Button variant="outline" size="sm" onClick={() => setSearchQuery("export")}>Exporting</Button>
              <Button variant="outline" size="sm" onClick={() => setSearchQuery("api")}>API</Button>
              <Button variant="outline" size="sm" onClick={() => setSearchQuery("security")}>Security</Button>
              <Button variant="outline" size="sm" onClick={() => setSearchQuery("upload")}>Uploading</Button>
            </div>
          </div>
        </section>

        {/* Documentation navigation */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Navigation sidebar */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white border rounded-lg p-4 sticky top-4">
              <h3 className="font-medium text-lg mb-4">Contents</h3>
              <nav className="space-y-1">
                {sections.map((section, index) => (
                  <div key={index} className="mb-3">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">{section.title}</h4>
                    <ul className="space-y-1">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.link}
                            className="text-sm text-gray-700 hover:text-blue-600 block py-1 pl-2 border-l-2 border-transparent hover:border-blue-500 transition-colors"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-3">
            {searchQuery && filteredSections.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No results found</h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any documentation matching "{searchQuery}"
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            ) : searchQuery ? (
              <div className="space-y-8">
                <h2 className="text-2xl font-semibold mb-6">Search Results for "{searchQuery}"</h2>
                {filteredSections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-medium">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="border-b border-gray-100 pb-2">
                          <a href={item.link} className="text-blue-600 hover:underline font-medium">
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <Tabs defaultValue="guides" className="mt-2">
                  <TabsList className="w-full grid grid-cols-4 mb-8">
                    <TabsTrigger value="guides" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" /> Guides
                    </TabsTrigger>
                    <TabsTrigger value="api" className="flex items-center gap-2">
                      <Code className="h-4 w-4" /> API Reference
                    </TabsTrigger>
                    <TabsTrigger value="tutorials" className="flex items-center gap-2">
                      <PlayCircle className="h-4 w-4" /> Tutorials
                    </TabsTrigger>
                    <TabsTrigger value="faq" className="flex items-center gap-2">
                      <HelpCircle className="h-4 w-4" /> FAQs
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="guides" className="space-y-10">
                    <section className="space-y-6">
                      <h2 className="text-2xl font-semibold" id="introduction">Introduction to FinDataPRO</h2>
                      <p>
                        FinDataPRO is a powerful web-based platform designed to streamline the process of extracting
                        structured data from financial documents. Whether you're working with bank statements, invoices,
                        or other financial records, our solution helps you automate the tedious task of manual data entry.
                      </p>
                      <p>
                        This documentation will help you get started with FinDataPRO and guide you through its features
                        and capabilities. From basic document processing to advanced template creation and API integration,
                        you'll find comprehensive information to make the most of the platform.
                      </p>

                      <h3 className="text-xl font-medium mt-8">Key Features</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Automated data extraction from various financial document formats</li>
                        <li>Template management for consistent processing of recurring document types</li>
                        <li>Data validation and correction tools</li>
                        <li>Export capabilities (CSV, Excel, API)</li>
                        <li>User management and access controls</li>
                        <li>Integration with accounting software and other financial systems</li>
                      </ul>
                    </section>

                    <section className="space-y-6">
                      <h2 className="text-2xl font-semibold" id="account-setup">Creating Your Account</h2>
                      <p>
                        Before you can start using FinDataPRO, you'll need to create an account. This section guides
                        you through the account creation process and initial setup steps.
                      </p>

                      <h3 className="text-xl font-medium mt-8">Registration</h3>
                      <p>
                        To create a new account, visit the FinDataPRO website and click the "Sign Up" button. You'll
                        need to provide your email address, create a password, and enter some basic information about
                        your organization.
                      </p>

                      <h3 className="text-xl font-medium mt-8">Subscription Plans</h3>
                      <p>
                        FinDataPRO offers several subscription plans to suit different needs and organization sizes.
                        During registration, you'll be prompted to select a plan that matches your requirements. You
                        can start with a free trial to explore the platform before committing to a paid subscription.
                      </p>

                      <div className="bg-blue-50 p-4 rounded-lg mt-4">
                        <h4 className="font-medium mb-2">Pro Tip</h4>
                        <p className="text-sm">
                          Start with a smaller plan and upgrade as your needs grow. You can change your subscription
                          at any time from your account settings.
                        </p>
                      </div>
                    </section>

                    <section className="space-y-6">
                      <h2 className="text-2xl font-semibold" id="platform-overview">Platform Overview</h2>
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                        alt="Platform Overview"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <p>
                        The FinDataPRO interface is designed to be intuitive and user-friendly. Here's a quick
                        overview of the main components:
                      </p>

                      <h3 className="text-xl font-medium mt-8">Dashboard</h3>
                      <p>
                        The dashboard provides an overview of your recent activity, document processing status,
                        and quick access to common tasks. You can see statistics on processed documents, pending
                        tasks, and system notices.
                      </p>

                      <h3 className="text-xl font-medium mt-8">Documents</h3>
                      <p>
                        The Documents section is where you manage your uploaded files. You can view, process,
                        and organize your documents here. The interface allows for filtering by status, date,
                        and other criteria.
                      </p>

                      <h3 className="text-xl font-medium mt-8">Templates</h3>
                      <p>
                        The Templates section allows you to create, edit, and manage document templates. Templates
                        define how data is extracted from specific document types, ensuring consistency and accuracy.
                      </p>

                      <h3 className="text-xl font-medium mt-8">Settings</h3>
                      <p>
                        The Settings area provides access to your account configuration, user management, API keys,
                        and other system settings.
                      </p>
                    </section>

                    <div className="border-t border-gray-200 pt-8 text-center">
                      <p className="text-gray-600 mb-4">
                        Can't find what you're looking for? Our support team is here to help.
                      </p>
                      <Link href="/support">
                        <Button variant="outline">Contact Support</Button>
                      </Link>
                    </div>
                  </TabsContent>

                  <TabsContent value="api" className="space-y-6">
                    <section className="space-y-6">
                      <h2 className="text-2xl font-semibold">API Reference</h2>
                      <p>
                        FinDataPRO offers a comprehensive REST API that allows you to integrate our document processing
                        capabilities into your own applications and workflows. This API Reference provides detailed
                        information about available endpoints, authentication methods, and example requests.
                      </p>

                      <div className="bg-blue-50 p-6 rounded-lg mt-6 text-center">
                        <h3 className="text-lg font-medium mb-2">Full API Documentation</h3>
                        <p className="mb-4">
                          For complete API documentation with interactive examples and code snippets, visit our
                          dedicated API Reference portal.
                        </p>
                        <Link href="/api-reference">
                          <Button className="flex items-center gap-2">
                            <Code className="h-4 w-4" /> View API Reference <ExternalLink className="h-4 w-4 ml-1" />
                          </Button>
                        </Link>
                      </div>

                      <h3 className="text-xl font-medium mt-8">Getting Started with the API</h3>
                      <p className="mb-4">
                        To use the FinDataPRO API, you'll need to:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Generate an API key in your account settings</li>
                        <li>Include the API key in your request headers</li>
                        <li>Make requests to the appropriate endpoints</li>
                      </ol>

                      <div className="mt-6 bg-gray-900 text-white p-4 rounded-lg font-mono text-sm overflow-x-auto">
                        <pre>
                          {`// Example API request
const response = await fetch('https://api.findatapro.com/v1/documents', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();`}
                        </pre>
                      </div>
                    </section>
                  </TabsContent>

                  <TabsContent value="tutorials" className="space-y-6">
                    <section>
                      <h2 className="text-2xl font-semibold mb-6">Video Tutorials</h2>
                      <p className="mb-6">
                        Learn how to use FinDataPRO with our step-by-step video tutorials. These guided walkthroughs
                        cover everything from basic operations to advanced features.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-gray-100 aspect-video flex items-center justify-center">
                            <PlayCircle className="h-16 w-16 text-gray-400" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium mb-2">Getting Started with FinDataPRO</h3>
                            <p className="text-sm text-gray-600 mb-3">
                              A complete introduction to the platform and its core features.
                            </p>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Duration: 10:23</span>
                              <Button variant="ghost" size="sm" className="flex items-center">
                                <PlayCircle className="h-4 w-4 mr-1" /> Watch
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-gray-100 aspect-video flex items-center justify-center">
                            <PlayCircle className="h-16 w-16 text-gray-400" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium mb-2">Creating Custom Templates</h3>
                            <p className="text-sm text-gray-600 mb-3">
                              Learn how to build templates for your specific document types.
                            </p>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Duration: 15:47</span>
                              <Button variant="ghost" size="sm" className="flex items-center">
                                <PlayCircle className="h-4 w-4 mr-1" /> Watch
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-gray-100 aspect-video flex items-center justify-center">
                            <PlayCircle className="h-16 w-16 text-gray-400" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium mb-2">Advanced Data Extraction</h3>
                            <p className="text-sm text-gray-600 mb-3">
                              Tips and tricks for handling complex documents and edge cases.
                            </p>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Duration: 12:35</span>
                              <Button variant="ghost" size="sm" className="flex items-center">
                                <PlayCircle className="h-4 w-4 mr-1" /> Watch
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="border rounded-lg overflow-hidden">
                          <div className="bg-gray-100 aspect-video flex items-center justify-center">
                            <PlayCircle className="h-16 w-16 text-gray-400" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-medium mb-2">API Integration Guide</h3>
                            <p className="text-sm text-gray-600 mb-3">
                              How to integrate FinDataPRO with your existing systems.
                            </p>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-500">Duration: 18:22</span>
                              <Button variant="ghost" size="sm" className="flex items-center">
                                <PlayCircle className="h-4 w-4 mr-1" /> Watch
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 text-center">
                        <Button>View All Tutorials</Button>
                      </div>
                    </section>
                  </TabsContent>

                  <TabsContent value="faq" className="space-y-8">
                    <section>
                      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                      <p className="mb-6">
                        Find quick answers to common questions about using FinDataPRO.
                      </p>

                      <div className="space-y-6">
                        <div className="border-b pb-6">
                          <h3 className="font-medium text-lg mb-2">How accurate is the data extraction?</h3>
                          <p className="text-gray-600">
                            FinDataPRO typically achieves 95-99% accuracy for well-structured documents with good
                            quality. For documents that use consistent templates (like bank statements), our accuracy
                            rate is even higher. You can always review and edit the extracted data before exporting it.
                          </p>
                        </div>

                        <div className="border-b pb-6">
                          <h3 className="font-medium text-lg mb-2">What file formats are supported?</h3>
                          <p className="text-gray-600">
                            FinDataPRO primarily supports PDF files, including both digital PDFs and scanned documents.
                            We also support common image formats like JPG, PNG, and TIFF. For best results, we recommend
                            using digital PDFs whenever possible as they generally yield higher extraction accuracy.
                          </p>
                        </div>

                        <div className="border-b pb-6">
                          <h3 className="font-medium text-lg mb-2">Is my data secure?</h3>
                          <p className="text-gray-600">
                            Yes, we take data security very seriously. FinDataPRO uses bank-level encryption for all
                            data in transit and at rest. We're compliant with industry security standards, and we never
                            share your data with third parties. Additionally, you can delete your documents at any time.
                          </p>
                        </div>

                        <div className="border-b pb-6">
                          <h3 className="font-medium text-lg mb-2">How do I create a custom template?</h3>
                          <p className="text-gray-600">
                            To create a custom template, go to the Templates section and click "Create New Template."
                            Upload a sample document, then use our visual editor to mark the areas containing the data
                            you want to extract. You can define fields for headers, transaction tables, and summary
                            sections. Save your template, and it will be available for future documents.
                          </p>
                        </div>

                        <div className="border-b pb-6">
                          <h3 className="font-medium text-lg mb-2">Can I integrate FinDataPRO with my accounting software?</h3>
                          <p className="text-gray-600">
                            Yes, FinDataPRO offers integrations with popular accounting platforms including QuickBooks,
                            Xero, and Sage. For other systems, you can use our API to build custom integrations or
                            export data in standard formats like CSV and Excel for manual import.
                          </p>
                        </div>

                        <div className="border-b pb-6">
                          <h3 className="font-medium text-lg mb-2">What kind of support is available?</h3>
                          <p className="text-gray-600">
                            We offer multiple support channels including email, chat, and phone support depending on
                            your subscription plan. All customers have access to our comprehensive documentation, video
                            tutorials, and community forum. Enterprise customers also receive dedicated account
                            management and priority support.
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 text-center">
                        <Link href="/support">
                          <Button>View All FAQs</Button>
                        </Link>
                      </div>
                    </section>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Documentation;