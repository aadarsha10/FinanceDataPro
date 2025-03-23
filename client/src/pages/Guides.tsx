import { useState } from "react";
import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Link } from "wouter";
import { 
  BookOpen, 
  FileText, 
  Search, 
  Settings, 
  Database, 
  Share2, 
  BarChart, 
  Shield, 
  Clock,
  PanelRight,
  Users
} from "lucide-react";
import { Badge } from "../components/ui/badge";

interface Guide {
  id: string;
  title: string;
  description: string;
  category: "getting-started" | "templates" | "processing" | "export" | "integrations" | "security";
  difficulty: "beginner" | "intermediate" | "advanced";
  readTime: string;
  icon: React.ReactNode;
  link: string;
}

const guides: Guide[] = [
  {
    id: "intro-guide",
    title: "Introduction to FinDataPRO",
    description: "Learn about the core concepts and features of FinDataPRO for financial document processing.",
    category: "getting-started",
    difficulty: "beginner",
    readTime: "5 min",
    icon: <BookOpen className="h-5 w-5" />,
    link: "/guides/getting-started"
  },
  {
    id: "create-account",
    title: "Creating Your Account",
    description: "A step-by-step guide to setting up your FinDataPRO account and initial configuration.",
    category: "getting-started",
    difficulty: "beginner",
    readTime: "3 min",
    icon: <Users className="h-5 w-5" />,
    link: "/guides/create-account"
  },
  {
    id: "first-document",
    title: "Processing Your First Document",
    description: "Upload and process your first financial document with FinDataPRO.",
    category: "getting-started",
    difficulty: "beginner",
    readTime: "8 min",
    icon: <FileText className="h-5 w-5" />,
    link: "/guides/first-document"
  },
  {
    id: "create-template",
    title: "Creating Custom Templates",
    description: "Learn how to create custom templates for your specific document types.",
    category: "templates",
    difficulty: "intermediate",
    readTime: "12 min",
    icon: <PanelRight className="h-5 w-5" />,
    link: "/guides/create-template"
  },
  {
    id: "template-optimization",
    title: "Optimizing Templates for Accuracy",
    description: "Advanced techniques to improve the accuracy of your document templates.",
    category: "templates",
    difficulty: "advanced",
    readTime: "15 min",
    icon: <Settings className="h-5 w-5" />,
    link: "/guides/template-optimization"
  },
  {
    id: "batch-processing",
    title: "Batch Processing Documents",
    description: "Process multiple documents efficiently with batch processing.",
    category: "processing",
    difficulty: "intermediate",
    readTime: "10 min",
    icon: <Clock className="h-5 w-5" />,
    link: "/guides/batch-processing"
  },
  {
    id: "data-validation",
    title: "Data Validation and Correction",
    description: "Learn how to validate and correct extracted data for maximum accuracy.",
    category: "processing",
    difficulty: "intermediate",
    readTime: "8 min",
    icon: <Database className="h-5 w-5" />,
    link: "/guides/data-validation"
  },
  {
    id: "csv-export",
    title: "Exporting to CSV",
    description: "A comprehensive guide to exporting your data to CSV format.",
    category: "export",
    difficulty: "beginner",
    readTime: "5 min",
    icon: <Share2 className="h-5 w-5" />,
    link: "/guides/csv-export"
  },
  {
    id: "excel-export",
    title: "Exporting to Excel",
    description: "Learn how to export your data to Microsoft Excel with advanced formatting options.",
    category: "export",
    difficulty: "beginner",
    readTime: "7 min",
    icon: <Share2 className="h-5 w-5" />,
    link: "/guides/excel-export"
  },
  {
    id: "api-integration",
    title: "API Integration Guide",
    description: "Integrate FinDataPRO with your existing systems using our API.",
    category: "integrations",
    difficulty: "advanced",
    readTime: "20 min",
    icon: <Share2 className="h-5 w-5" />,
    link: "/guides/api-integration"
  },
  {
    id: "accounting-integration",
    title: "Integrating with Accounting Software",
    description: "Connect FinDataPRO with popular accounting platforms like QuickBooks and Xero.",
    category: "integrations",
    difficulty: "intermediate",
    readTime: "15 min",
    icon: <BarChart className="h-5 w-5" />,
    link: "/guides/accounting-integration"
  },
  {
    id: "security-best-practices",
    title: "Security Best Practices",
    description: "Learn how to keep your financial data secure when using FinDataPRO.",
    category: "security",
    difficulty: "intermediate",
    readTime: "10 min",
    icon: <Shield className="h-5 w-5" />,
    link: "/guides/security-best-practices"
  }
];

// Available filters
const categories = [
  { value: "all", label: "All Categories" },
  { value: "getting-started", label: "Getting Started" },
  { value: "templates", label: "Templates" },
  { value: "processing", label: "Processing" },
  { value: "export", label: "Export" },
  { value: "integrations", label: "Integrations" },
  { value: "security", label: "Security" }
];

const difficulties = [
  { value: "all", label: "All Levels" },
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" }
];

const Guides = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  // Filter guides based on search query and selected filters
  const filteredGuides = guides.filter((guide) => {
    // Search filter
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = 
      categoryFilter === "all" || guide.category === categoryFilter;
    
    // Difficulty filter
    const matchesDifficulty = 
      difficultyFilter === "all" || guide.difficulty === difficultyFilter;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("all");
    setDifficultyFilter("all");
  };

  return (
    <StaticPageLayout title="Guides" subtitle="Learn how to make the most of FinDataPRO">
      <div className="space-y-10">
        {/* Search and filters */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Find the right guide</h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              placeholder="Search guides..." 
              className="pl-10" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium">Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.value}
                    variant={categoryFilter === category.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCategoryFilter(category.value)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium">Difficulty</label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty.value}
                    variant={difficultyFilter === difficulty.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDifficultyFilter(difficulty.value)}
                  >
                    {difficulty.label}
                  </Button>
                ))}
              </div>
            </div>
            
            {(searchQuery || categoryFilter !== "all" || difficultyFilter !== "all") && (
              <div className="flex items-end">
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Guides grid */}
        <section>
          {filteredGuides.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No guides found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any guides matching your search criteria.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide) => (
                <Link key={guide.id} href={guide.link}>
                  <Card className="h-full cursor-pointer hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <div className="text-blue-600">
                            {guide.icon}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={
                            guide.difficulty === "beginner" ? "outline" : 
                            guide.difficulty === "intermediate" ? "secondary" : "default"
                          }>
                            {guide.difficulty}
                          </Badge>
                          <span className="text-xs text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {guide.readTime}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="mt-4 text-lg">{guide.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{guide.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full" size="sm">
                        Read Guide
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Featured guide */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Featured Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-blue-50 p-6 rounded-lg">
            <div>
              <Badge className="mb-2">New</Badge>
              <h3 className="text-xl font-medium mb-3">Automating Bank Statement Processing</h3>
              <p className="text-gray-600 mb-4">
                This comprehensive guide walks you through setting up an automated workflow for
                processing bank statements with FinDataPRO. Learn how to streamline your monthly
                financial data extraction and get your data into your accounting system with minimal
                manual intervention.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-sm">Template creation for major banks</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-sm">Setting up batch processing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-sm">API integration with accounting software</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-sm">Error handling and validation</span>
                </li>
              </ul>
              <div className="flex items-center text-sm mb-6">
                <Badge variant="secondary" className="mr-2">
                  Intermediate
                </Badge>
                <span className="text-gray-500 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  25 min read
                </span>
              </div>
              <Button>Read Full Guide</Button>
            </div>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
                alt="Bank statement processing automation"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Additional resources */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Technical Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Detailed technical documentation for developers and advanced users, including API
                  references and integration specifications.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/documentation">
                  <Button variant="outline" className="w-full">View Documentation</Button>
                </Link>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Watch step-by-step video tutorials that show you how to use FinDataPRO's features
                  in action.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Watch Videos</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Community Forums</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Join our community forums to ask questions, share tips, and learn from other
                  FinDataPRO users.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/community">
                  <Button variant="outline" className="w-full">Join Community</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Help section */}
        <section className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-xl font-semibold mb-3">Need More Help?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-600">
            If you can't find what you're looking for in our guides, our support team is ready to help.
            Contact us for personalized assistance.
          </p>
          <Link href="/support">
            <Button>Contact Support</Button>
          </Link>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Guides;