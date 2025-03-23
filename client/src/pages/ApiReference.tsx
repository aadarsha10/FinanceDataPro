import { useState } from "react";
import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import { 
  Code, 
  Copy, 
  Database, 
  FilePlus, 
  FileText, 
  Key, 
  Search, 
  Server, 
  Shield, 
  Terminal
} from "lucide-react";

const ApiReference = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const copyToClipboard = (text: string, endpointId: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(endpointId);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  const endpoints = [
    {
      id: "get-documents",
      method: "GET",
      path: "/v1/documents",
      description: "List all documents",
      request: `curl -X GET "https://api.findatapro.com/v1/documents" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      response: `{
  "success": true,
  "data": [
    {
      "id": 123,
      "filename": "bank_statement_jan_2025.pdf",
      "uploaded_at": "2025-01-15T09:32:45Z",
      "processed": true,
      "template_id": 45,
      "file_size": 1243567
    },
    {
      "id": 124,
      "filename": "invoice_acme_corp.pdf",
      "uploaded_at": "2025-01-18T14:22:12Z",
      "processed": false,
      "template_id": null,
      "file_size": 458921
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "per_page": 10
  }
}`
    },
    {
      id: "get-document",
      method: "GET",
      path: "/v1/documents/:id",
      description: "Get a specific document",
      request: `curl -X GET "https://api.findatapro.com/v1/documents/123" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      response: `{
  "success": true,
  "data": {
    "id": 123,
    "filename": "bank_statement_jan_2025.pdf",
    "uploaded_at": "2025-01-15T09:32:45Z",
    "processed": true,
    "template_id": 45,
    "file_size": 1243567,
    "original_filename": "Bank_Statement_January.pdf",
    "page_count": 5,
    "process_time": 3.45,
    "extracted_data_id": 89
  }
}`
    },
    {
      id: "create-document",
      method: "POST",
      path: "/v1/documents",
      description: "Upload a new document",
      request: `curl -X POST "https://api.findatapro.com/v1/documents" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@/path/to/document.pdf" \\
  -F "template_id=45" \\
  -F "auto_process=true"`,
      response: `{
  "success": true,
  "data": {
    "id": 125,
    "filename": "document_125.pdf",
    "uploaded_at": "2025-01-20T10:15:33Z",
    "processed": false,
    "template_id": 45,
    "file_size": 985672
  }
}`
    },
    {
      id: "process-document",
      method: "POST",
      path: "/v1/documents/:id/process",
      description: "Process a document",
      request: `curl -X POST "https://api.findatapro.com/v1/documents/125/process" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template_id": 45
  }'`,
      response: `{
  "success": true,
  "data": {
    "id": 125,
    "filename": "document_125.pdf",
    "processed": true,
    "process_time": 2.78,
    "extracted_data_id": 90
  }
}`
    },
    {
      id: "get-extracted-data",
      method: "GET",
      path: "/v1/extracted-data/:id",
      description: "Get extracted data from a document",
      request: `curl -X GET "https://api.findatapro.com/v1/extracted-data/90" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      response: `{
  "success": true,
  "data": {
    "id": 90,
    "document_id": 125,
    "extracted_at": "2025-01-20T10:18:22Z",
    "verified": false,
    "fields": {
      "account_number": "1234567890",
      "statement_date": "2025-01-01",
      "opening_balance": 5240.75,
      "closing_balance": 6123.42
    },
    "transactions": [
      {
        "date": "2025-01-03",
        "description": "ACME CORP PAYMENT",
        "amount": 1500.00,
        "type": "credit"
      },
      {
        "date": "2025-01-05",
        "description": "GROCERY STORE",
        "amount": 85.23,
        "type": "debit"
      }
    ]
  }
}`
    },
    {
      id: "update-extracted-data",
      method: "PUT",
      path: "/v1/extracted-data/:id",
      description: "Update extracted data",
      request: `curl -X PUT "https://api.findatapro.com/v1/extracted-data/90" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "fields": {
      "account_number": "0987654321",
      "opening_balance": 5240.75
    },
    "verified": true
  }'`,
      response: `{
  "success": true,
  "data": {
    "id": 90,
    "document_id": 125,
    "verified": true,
    "updated_at": "2025-01-20T11:05:14Z"
  }
}`
    },
    {
      id: "get-templates",
      method: "GET",
      path: "/v1/templates",
      description: "List all templates",
      request: `curl -X GET "https://api.findatapro.com/v1/templates" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      response: `{
  "success": true,
  "data": [
    {
      "id": 45,
      "name": "Bank of America Statement",
      "description": "Template for Bank of America statements",
      "document_type": "bank_statement",
      "created_at": "2024-12-10T14:22:12Z",
      "usage_count": 28
    },
    {
      "id": 46,
      "name": "Chase Credit Card Statement",
      "description": "Template for Chase credit card statements",
      "document_type": "credit_card_statement",
      "created_at": "2024-12-15T09:45:30Z",
      "usage_count": 15
    }
  ],
  "meta": {
    "total": 2,
    "page": 1,
    "per_page": 10
  }
}`
    },
    {
      id: "export-data",
      method: "GET",
      path: "/v1/documents/:id/export",
      description: "Export document data",
      request: `curl -X GET "https://api.findatapro.com/v1/documents/125/export?format=csv" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`,
      response: `{
  "success": true,
  "data": {
    "export_url": "https://api.findatapro.com/exports/document_125_export.csv",
    "expires_at": "2025-01-21T10:18:22Z"
  }
}`
    }
  ];

  // Filter endpoints based on search query
  const filteredEndpoints = endpoints.filter(
    (endpoint) =>
      endpoint.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      endpoint.method.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StaticPageLayout title="API Reference" subtitle="Integrate FinDataPRO with your applications">
      <div className="space-y-10">
        {/* Search section */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search API endpoints..." 
                className="pl-10" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* API Overview */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">API Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Server className="h-5 w-5 mr-2 text-blue-500" />
                  Base URL
                </CardTitle>
              </CardHeader>
              <CardContent>
                <code className="text-sm bg-gray-100 p-2 rounded block">
                  https://api.findatapro.com
                </code>
                <p className="text-sm text-gray-600 mt-2">
                  All API requests should be made to this base URL followed by the endpoint path.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-500" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  API requests are authenticated using API keys. Include your key in the Authorization header.
                </p>
                <pre className="text-xs bg-gray-100 p-2 rounded block mt-2 overflow-x-auto">
                  <code>
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-blue-500" />
                  Response Format
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  All API responses are returned in JSON format with a consistent structure including success status
                  and data payload.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Getting Started</h3>
            <p className="mb-4">
              To use the FinDataPRO API, you'll need to:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-4">
              <li>Sign up for a FinDataPRO account</li>
              <li>Generate an API key in your account settings</li>
              <li>Use the API key to authenticate your requests</li>
            </ol>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-medium flex items-center mb-2">
                <Key className="h-4 w-4 mr-2" /> 
                Generating an API Key
              </h4>
              <ol className="list-decimal pl-6 text-sm space-y-1">
                <li>Log in to your FinDataPRO account</li>
                <li>Navigate to Settings → API Keys</li>
                <li>Click "Generate New Key" and provide a descriptive name</li>
                <li>Copy and securely store your API key (it won't be shown again)</li>
              </ol>
            </div>
          </div>
        </section>

        {/* API Endpoint Tabs */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">API Endpoints</h2>
            {searchQuery && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            )}
          </div>
          
          <Tabs defaultValue="documents">
            <TabsList className="mb-6">
              <TabsTrigger value="documents" className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> Documents
              </TabsTrigger>
              <TabsTrigger value="templates" className="flex items-center gap-2">
                <FilePlus className="h-4 w-4" /> Templates
              </TabsTrigger>
              <TabsTrigger value="data" className="flex items-center gap-2">
                <Database className="h-4 w-4" /> Extracted Data
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="documents">
              {filteredEndpoints.filter(e => e.path.includes('documents')).length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No document endpoints match your search criteria.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredEndpoints
                    .filter(e => e.path.includes('documents'))
                    .map((endpoint) => (
                      <EndpointCard 
                        key={endpoint.id} 
                        endpoint={endpoint} 
                        copyToClipboard={copyToClipboard}
                        copySuccess={copySuccess}
                      />
                    ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="templates">
              {filteredEndpoints.filter(e => e.path.includes('templates')).length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No template endpoints match your search criteria.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredEndpoints
                    .filter(e => e.path.includes('templates'))
                    .map((endpoint) => (
                      <EndpointCard 
                        key={endpoint.id} 
                        endpoint={endpoint} 
                        copyToClipboard={copyToClipboard}
                        copySuccess={copySuccess}
                      />
                    ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="data">
              {filteredEndpoints.filter(e => e.path.includes('extracted-data')).length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No data endpoints match your search criteria.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredEndpoints
                    .filter(e => e.path.includes('extracted-data'))
                    .map((endpoint) => (
                      <EndpointCard 
                        key={endpoint.id} 
                        endpoint={endpoint} 
                        copyToClipboard={copyToClipboard}
                        copySuccess={copySuccess}
                      />
                    ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* Webhooks section */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Webhooks</h2>
          <p className="mb-4">
            Webhooks allow your application to receive real-time notifications when events occur in FinDataPRO,
            such as when a document is processed or data is verified.
          </p>
          <div className="flex justify-center">
            <Link href="/documentation#webhooks">
              <Button variant="outline">
                Learn More About Webhooks
              </Button>
            </Link>
          </div>
        </section>

        {/* SDKs and Libraries */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">SDKs and Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>JavaScript SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Official JavaScript library for integrating FinDataPRO into web applications.
                </p>
                <pre className="text-xs bg-gray-100 p-2 rounded block mb-4 overflow-x-auto">
                  <code>npm install findatapro-js</code>
                </pre>
                <Button variant="outline" size="sm" className="w-full">
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Python SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Official Python library for server-side integration with FinDataPRO.
                </p>
                <pre className="text-xs bg-gray-100 p-2 rounded block mb-4 overflow-x-auto">
                  <code>pip install findatapro-python</code>
                </pre>
                <Button variant="outline" size="sm" className="w-full">
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Community Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Explore community-maintained libraries for various languages and frameworks.
                </p>
                <ul className="text-sm space-y-2 mb-4">
                  <li>• Ruby Gem</li>
                  <li>• PHP Composer Package</li>
                  <li>• .NET NuGet Package</li>
                </ul>
                <Button variant="outline" size="sm" className="w-full">
                  View All Libraries
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rate Limits */}
        <section className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Rate Limits</h2>
          <p className="mb-4">
            To ensure fair usage of the API, we implement rate limits based on your subscription plan:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requests per minute
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Requests per day
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Basic
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    60
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    10,000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Professional
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    300
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    50,000
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Enterprise
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    600
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Unlimited
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Each API response includes rate limit headers showing your current usage and limits.
          </p>
        </section>
        
        {/* Support */}
        <section className="text-center">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="mb-6">
            If you have any questions or need assistance with the API, our developer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/documentation">
              <Button variant="outline">View Documentation</Button>
            </Link>
            <Link href="/support">
              <Button>Contact Developer Support</Button>
            </Link>
          </div>
        </section>
      </div>
    </StaticPageLayout>
  );
};

interface EndpointCardProps {
  endpoint: {
    id: string;
    method: string;
    path: string;
    description: string;
    request: string;
    response: string;
  };
  copyToClipboard: (text: string, endpointId: string) => void;
  copySuccess: string | null;
}

const EndpointCard = ({ endpoint, copyToClipboard, copySuccess }: EndpointCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center">
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded mr-3 ${
                endpoint.method === "GET" 
                  ? "bg-blue-100 text-blue-800" 
                  : endpoint.method === "POST"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}>
                {endpoint.method}
              </span>
              <span className="font-mono text-sm font-medium">{endpoint.path}</span>
            </div>
            <p className="mt-1 text-sm text-gray-600">{endpoint.description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium flex items-center">
              <Terminal className="h-4 w-4 mr-2" /> 
              Request Example
            </h4>
            <button 
              onClick={() => copyToClipboard(endpoint.request, `${endpoint.id}-request`)}
              className="text-gray-500 hover:text-gray-700"
              title="Copy to clipboard"
            >
              {copySuccess === `${endpoint.id}-request` ? (
                <span className="text-green-500 text-xs">Copied!</span>
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <code>{endpoint.request}</code>
          </pre>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-sm font-medium flex items-center">
              <Code className="h-4 w-4 mr-2" /> 
              Response Example
            </h4>
            <button 
              onClick={() => copyToClipboard(endpoint.response, `${endpoint.id}-response`)}
              className="text-gray-500 hover:text-gray-700"
              title="Copy to clipboard"
            >
              {copySuccess === `${endpoint.id}-response` ? (
                <span className="text-green-500 text-xs">Copied!</span>
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <code>{endpoint.response}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ApiReference;