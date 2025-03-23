import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Folders,
  BarChart4,
  Layers,
  Download,
  Eye,
  CheckCircle,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-neutral-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Process Financial Documents with Precision
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-neutral-500">
              Automatically extract and structure data from bank statements and financial documents.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="px-6 py-3">
                  Get Started
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="outline"
                  size="lg"
                  className="ml-4 px-6 py-3"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-neutral-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900">Key Platform Features</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
              Our platform offers powerful tools to process and extract data from financial documents.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Intelligent Data Extraction</h3>
                <p className="mt-2 text-neutral-600">
                  Automatically extract data from bank statements and financial documents with high accuracy.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Folders className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Custom Templates</h3>
                <p className="mt-2 text-neutral-600">
                  Create and manage templates for different document types to consistently extract specific fields.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Multiple Export Formats</h3>
                <p className="mt-2 text-neutral-600">
                  Export extracted data to CSV, Excel, or JSON formats with customizable field mapping.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Preview & Edit</h3>
                <p className="mt-2 text-neutral-600">
                  Review and edit extracted data before exporting to ensure accuracy and completeness.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Batch Processing</h3>
                <p className="mt-2 text-neutral-600">
                  Process multiple documents simultaneously for increased efficiency and productivity.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                  <BarChart4 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900">Secure Storage</h3>
                <p className="mt-2 text-neutral-600">
                  All uploaded documents and extracted data are stored securely with encryption at rest.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshot Showcase */}
      <section className="bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-sm">
              <span className="text-primary mr-1">✨</span> Platform Tour
            </Badge>
            <h2 className="text-3xl font-bold text-neutral-900">See the Platform in Action</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
              Explore our intuitive interface designed for financial professionals
            </p>
          </div>

          <div className="space-y-24">
            {/* Dashboard Screenshot */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/demo-images/dashboard-screen.svg" 
                  alt="Dashboard Analytics" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Powerful Dashboard Analytics
                </h3>
                <p className="text-neutral-600 mb-6">
                  Get a bird's eye view of all your document processing activities with our comprehensive dashboard. Track processed documents, monitor extraction accuracy, and identify trends in your financial data.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time processing status updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Visual charts of document processing history</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Document categorization and tagging</span>
                  </li>
                </ul>
                <Link href="/dashboard" className="mt-6 inline-flex items-center text-primary font-medium">
                  View Dashboard <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Templates Screenshot */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Template Management System
                </h3>
                <p className="text-neutral-600 mb-6">
                  Create and manage templates for different financial document types. Our template system allows you to define field mappings and extraction rules for consistent data processing.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prebuilt templates for major banks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom template creation wizard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Field mapping with validation rules</span>
                  </li>
                </ul>
                <Link href="/templates" className="mt-6 inline-flex items-center text-primary font-medium">
                  Explore Templates <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div>
                <img 
                  src="/demo-images/templates-screen.svg" 
                  alt="Template Management" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Documents Screenshot */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/demo-images/documents-screen.svg" 
                  alt="Document Processing" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                  Document Processing Workflow
                </h3>
                <p className="text-neutral-600 mb-6">
                  Upload, process, and manage your financial documents with our intuitive interface. Preview documents, review extracted data, and export in various formats.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Drag-and-drop document uploads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Interactive PDF preview with pagination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Real-time data extraction with editing</span>
                  </li>
                </ul>
                <Link href="/documents" className="mt-6 inline-flex items-center text-primary font-medium">
                  Process Documents <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-sm">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold text-neutral-900">How It Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
              Transform your financial documents into structured data in three easy steps
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm border border-neutral-100">
              <div className="absolute -top-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mt-4">Upload Documents</h3>
              <p className="mt-2 text-neutral-600">
                Upload your PDF bank statements or financial documents to our secure platform using our simple drag-and-drop interface.
              </p>
              <Button variant="link" asChild className="mt-4">
                <Link href="/documents">
                  Upload a Document <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm border border-neutral-100">
              <div className="absolute -top-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mt-4">Select Template</h3>
              <p className="mt-2 text-neutral-600">
                Choose from existing templates (Chase, Bank of America, Wells Fargo) or create a custom template for your specific document format.
              </p>
              <Button variant="link" asChild className="mt-4">
                <Link href="/templates">
                  View Templates <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center text-center bg-white p-8 rounded-lg shadow-sm border border-neutral-100">
              <div className="absolute -top-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mt-4">Export Data</h3>
              <p className="mt-2 text-neutral-600">
                Review the extracted data, make any necessary edits or corrections, and export to CSV or Excel for further analysis.
              </p>
              <Button variant="link" asChild className="mt-4">
                <Link href="/documents">
                  Process Documents <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-3 py-1 text-sm">
              <span className="text-emerald-500 mr-1">💰</span> Business Value
            </Badge>
            <h2 className="text-3xl font-bold text-neutral-900">Transform Your Financial Document Processing</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
              Experience the business benefits of automated data extraction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Save Time</h3>
              <p className="text-neutral-600">
                Reduce manual data entry by up to 90%, freeing your team to focus on higher-value tasks.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Increase Accuracy</h3>
              <p className="text-neutral-600">
                Eliminate human error with our intelligent extraction algorithms achieving over 98% accuracy.
              </p>
            </div>
            
            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Boost Productivity</h3>
              <p className="text-neutral-600">
                Process hundreds of documents simultaneously, enabling your business to scale effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
              Get Started Today
            </Badge>
            <h2 className="text-4xl font-bold text-white">Ready to transform your document processing?</h2>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-primary-foreground/90">
              Start processing your financial documents today and save hours of manual data entry.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/dashboard">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-8 py-6 text-lg"
                >
                  Get Started Now
                </Button>
              </Link>
              <Link href="/documentation">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg bg-transparent border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">
              No credit card required • Free to get started • Cancel anytime
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer Note */}
      <section className="bg-neutral-900 py-6 text-center text-neutral-400 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>Powered by <a href="https://dobaato.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Dobaato</a> • All rights reserved &copy; {new Date().getFullYear()}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
