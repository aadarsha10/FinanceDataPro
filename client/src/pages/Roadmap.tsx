import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Clock,
  Calendar,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import FeatureRequestForm from "@/components/features/FeatureRequestForm";

type RoadmapItem = {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  timeline: string;
};

const Roadmap = () => {
  const [activeTab, setActiveTab] = useState<string>("upcoming");

  // These would ideally come from an API
  const roadmapItems: RoadmapItem[] = [
    {
      title: "AI-Powered Field Detection",
      description: "Automatically identify and map fields in financial documents without manual configuration.",
      status: "in-progress",
      timeline: "Q3 2023"
    },
    {
      title: "API Integrations",
      description: "Connect with accounting software and other financial tools via REST API.",
      status: "planned",
      timeline: "Q3 2023"
    },
    {
      title: "Batch Processing Improvements",
      description: "Process multiple documents simultaneously with enhanced progress tracking.",
      status: "planned",
      timeline: "Q3 2023"
    },
    {
      title: "Advanced Data Validation",
      description: "Implement intelligent validation rules for different financial document types.",
      status: "planned",
      timeline: "Q4 2023"
    },
    {
      title: "Team Collaboration",
      description: "Share templates and documents within teams with role-based permissions.",
      status: "planned",
      timeline: "Q4 2023"
    },
    {
      title: "Mobile App",
      description: "Native mobile applications for iOS and Android for on-the-go document processing.",
      status: "planned",
      timeline: "Q4 2023"
    },
    {
      title: "Financial Analysis",
      description: "Generate insights and visualizations from processed financial documents.",
      status: "planned",
      timeline: "2024"
    },
    {
      title: "Enterprise Features",
      description: "SSO integration, audit logs, and enhanced security features for enterprise customers.",
      status: "planned",
      timeline: "2024"
    },
    {
      title: "Basic PDF Upload",
      description: "Upload PDF financial documents to the platform.",
      status: "completed",
      timeline: "Released"
    },
    {
      title: "Template Management",
      description: "Create and manage templates for different document types.",
      status: "completed",
      timeline: "Released"
    },
    {
      title: "Data Extraction",
      description: "Extract structured data from financial documents using templates.",
      status: "completed",
      timeline: "Released"
    },
    {
      title: "CSV and Excel Export",
      description: "Export extracted data to CSV and Excel formats.",
      status: "completed",
      timeline: "Released"
    }
  ];

  const upcomingFeatures = roadmapItems.filter(item => item.status === "planned" || item.status === "in-progress");
  const completedFeatures = roadmapItems.filter(item => item.status === "completed");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-primary" />;
      case "planned":
        return <Calendar className="h-5 w-5 text-neutral-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Completed
          </span>
        );
      case "in-progress":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            In Progress
          </span>
        );
      case "planned":
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
            Planned
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-neutral-900">Product Roadmap</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600">
          See what features are coming next to our platform and help shape our future by submitting feature requests.
        </p>
      </div>

      <Tabs defaultValue="upcoming" onValueChange={setActiveTab} className="w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Features</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Features</CardTitle>
              <CardDescription>
                Features we're currently working on and planning to implement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {/* Q3 2023 */}
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-4">Q3 2023</h3>
                  <div className="space-y-4">
                    {upcomingFeatures
                      .filter(item => item.timeline === "Q3 2023")
                      .map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            {getStatusIcon(item.status)}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h4 className="text-base font-medium text-neutral-900">{item.title}</h4>
                              <div className="ml-2">{getStatusBadge(item.status)}</div>
                            </div>
                            <p className="mt-1 text-sm text-neutral-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Q4 2023 */}
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-4">Q4 2023</h3>
                  <div className="space-y-4">
                    {upcomingFeatures
                      .filter(item => item.timeline === "Q4 2023")
                      .map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                            {getStatusIcon(item.status)}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h4 className="text-base font-medium text-neutral-900">{item.title}</h4>
                              <div className="ml-2">{getStatusBadge(item.status)}</div>
                            </div>
                            <p className="mt-1 text-sm text-neutral-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* 2024 */}
                <div>
                  <h3 className="text-lg font-medium text-neutral-900 mb-4">2024</h3>
                  <div className="space-y-4">
                    {upcomingFeatures
                      .filter(item => item.timeline === "2024")
                      .map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                            {getStatusIcon(item.status)}
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h4 className="text-base font-medium text-neutral-900">{item.title}</h4>
                              <div className="ml-2">{getStatusBadge(item.status)}</div>
                            </div>
                            <p className="mt-1 text-sm text-neutral-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed">
          <Card>
            <CardHeader>
              <CardTitle>Completed Features</CardTitle>
              <CardDescription>
                Features we've already implemented and released
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedFeatures.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h4 className="text-base font-medium text-neutral-900">{item.title}</h4>
                        <div className="ml-2">{getStatusBadge(item.status)}</div>
                      </div>
                      <p className="mt-1 text-sm text-neutral-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Feature Request Form */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Request a Feature</CardTitle>
            <CardDescription>
              Have a suggestion for a new feature? Let us know what you'd like to see.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FeatureRequestForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Roadmap;
