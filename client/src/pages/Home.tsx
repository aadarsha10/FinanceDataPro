import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  Folders,
  BarChart4,
  Layers,
  Download,
  Eye,
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

      {/* How It Works */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900">How It Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
              Simple steps to transform your financial documents into structured data.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Upload Documents</h3>
              <p className="mt-2 text-neutral-600">
                Upload your PDF bank statements or financial documents to our secure platform.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Select Template</h3>
              <p className="mt-2 text-neutral-600">
                Choose from existing templates or create a new one for your specific document type.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-medium text-neutral-900">Export Data</h3>
              <p className="mt-2 text-neutral-600">
                Review, edit if needed, and export the extracted data in your preferred format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/90">
              Start processing your financial documents today and save hours of manual data entry.
            </p>
            <div className="mt-8">
              <Link href="/dashboard">
                <Button
                  variant="secondary"
                  size="lg"
                  className="px-6 py-3"
                >
                  Try Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
