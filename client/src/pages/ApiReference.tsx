import StaticPageLayout from "../components/layout/StaticPageLayout";

const ApiReference = () => {
  return (
    <StaticPageLayout 
      title="API Reference" 
      subtitle="Integrate FinDataPRO into your applications with our powerful API"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            The FinDataPRO API provides programmatic access to our document processing and data extraction
            capabilities. This reference documentation covers everything you need to know to integrate with our platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
          <p>
            All API requests require authentication using API keys. You can generate and manage your API keys in 
            your dashboard settings.
          </p>
          <div className="bg-gray-50 p-4 rounded-md mt-4 font-mono text-sm">
            <p>curl -X GET "https://api.findatapro.com/v1/documents" \</p>
            <p>  -H "Authorization: Bearer YOUR_API_KEY"</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <p>
            All API URLs referenced in this documentation have the following base:
          </p>
          <div className="bg-gray-50 p-4 rounded-md mt-4 font-mono text-sm">
            <p>https://api.findatapro.com/v1/</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
          <p>
            The API is rate-limited to ensure fair usage and platform stability. The current limits are:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>100 requests per minute</li>
            <li>5,000 requests per day</li>
          </ul>
          <p className="mt-2">
            If you exceed these limits, you'll receive a 429 Too Many Requests response.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
          
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-2">Documents API</h3>
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-100 p-3">
                <div className="font-medium">Method</div>
                <div className="font-medium">Endpoint</div>
                <div className="font-medium">Description</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>GET</div>
                <div>/documents</div>
                <div>List all documents</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>GET</div>
                <div>/documents/:id</div>
                <div>Get a document by ID</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>POST</div>
                <div>/documents</div>
                <div>Upload a new document</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>DELETE</div>
                <div>/documents/:id</div>
                <div>Delete a document</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium mb-2">Templates API</h3>
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-100 p-3">
                <div className="font-medium">Method</div>
                <div className="font-medium">Endpoint</div>
                <div className="font-medium">Description</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>GET</div>
                <div>/templates</div>
                <div>List all templates</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>GET</div>
                <div>/templates/:id</div>
                <div>Get a template by ID</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>POST</div>
                <div>/templates</div>
                <div>Create a new template</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>PUT</div>
                <div>/templates/:id</div>
                <div>Update a template</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>DELETE</div>
                <div>/templates/:id</div>
                <div>Delete a template</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium mb-2">Processing API</h3>
            <div className="border border-gray-200 rounded-md overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-100 p-3">
                <div className="font-medium">Method</div>
                <div className="font-medium">Endpoint</div>
                <div className="font-medium">Description</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>POST</div>
                <div>/documents/:id/process</div>
                <div>Process a document using specified template</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>GET</div>
                <div>/documents/:id/data</div>
                <div>Get extracted data for a document</div>
              </div>
              <div className="grid grid-cols-3 p-3 border-t border-gray-200">
                <div>GET</div>
                <div>/documents/:id/export/:format</div>
                <div>Export document data (CSV, Excel)</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Error Handling</h2>
          <p>
            When an error occurs, the API will return an appropriate HTTP status code along with a JSON response
            containing more details about the error.
          </p>
          <div className="bg-gray-50 p-4 rounded-md mt-4 font-mono text-sm">
            <p>{"{"}</p>
            <p>  "error": {"{"}  </p>
            <p>    "code": "invalid_template",</p>
            <p>    "message": "The specified template does not exist or is invalid",</p>
            <p>    "status": 400</p>
            <p>  {"}"}</p>
            <p>{"}"}</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Further Resources</h2>
          <ul className="list-disc pl-5">
            <li><a href="/guides" className="text-blue-600 hover:text-blue-800">API Guides</a> - Step-by-step guides for common use cases</li>
            <li><a href="/support" className="text-blue-600 hover:text-blue-800">Support</a> - Contact our team for API integration help</li>
            <li><a href="https://github.com/findatapro/api-examples" className="text-blue-600 hover:text-blue-800">API Examples</a> - Code samples and example projects</li>
          </ul>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default ApiReference;