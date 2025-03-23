import { Link } from "wouter";
import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowRight, FileText, Code, BarChart, Workflow, Compass } from "lucide-react";

const GuideCard = ({
  title,
  description,
  icon: Icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-3">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          href={href}
          className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Read Guide <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

const Guides = () => {
  return (
    <StaticPageLayout
      title="Guides & Tutorials"
      subtitle="Learn how to make the most of FinDataPRO with our step-by-step guides"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuideCard
              title="Quick Start Guide"
              description="Get up and running with FinDataPRO in under 10 minutes"
              icon={Compass}
              href="/guides/quick-start"
            />
            <GuideCard
              title="Uploading Documents"
              description="Learn how to upload and manage your financial documents"
              icon={FileText}
              href="/guides/uploading-documents"
            />
            <GuideCard
              title="Creating Templates"
              description="Create custom templates to extract data from your specific document formats"
              icon={Workflow}
              href="/guides/creating-templates"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Advanced Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GuideCard
              title="API Integration"
              description="Integrate FinDataPRO into your applications using our REST API"
              icon={Code}
              href="/guides/api-integration"
            />
            <GuideCard
              title="Batch Processing"
              description="Process multiple documents at once for increased efficiency"
              icon={FileText}
              href="/guides/batch-processing"
            />
            <GuideCard
              title="Data Analysis"
              description="Analyze extracted financial data for insights and reporting"
              icon={BarChart}
              href="/guides/data-analysis"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Use Cases</h2>
          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Banking Statement Analysis</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to extract and analyze data from bank statements to track expenses,
                    income, and financial patterns.
                  </p>
                  <Link
                    href="/guides/banking-statements"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Read Guide <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Invoice Processing</h3>
                  <p className="text-gray-600 mb-4">
                    Automate your accounts payable process by extracting key data from
                    vendor invoices.
                  </p>
                  <Link
                    href="/guides/invoice-processing"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Read Guide <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Financial Reporting</h3>
                  <p className="text-gray-600 mb-4">
                    Generate comprehensive financial reports by processing multiple document
                    types and consolidating the data.
                  </p>
                  <Link
                    href="/guides/financial-reporting"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Read Guide <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">Data Export & Integration</h3>
                  <p className="text-gray-600 mb-4">
                    Export processed data to your accounting software, ERP systems, or data
                    warehouses.
                  </p>
                  <Link
                    href="/guides/data-export"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Read Guide <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Not finding what you need?</h2>
          <p className="mb-4">
            Our support team is ready to help with any questions or custom guidance you might need.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Contact Support
          </Link>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Guides;