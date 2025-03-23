import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Users, MessageSquare, Share2, Award, Globe, Calendar } from "lucide-react";

const Community = () => {
  return (
    <StaticPageLayout
      title="Community"
      subtitle="Connect, learn, and collaborate with other FinDataPRO users"
    >
      <div className="space-y-10">
        <section className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6">
              The FinDataPRO community brings together finance professionals, data analysts, and 
              developers who are passionate about financial data automation. Share your experiences, 
              learn from others, and stay updated on the latest features and best practices.
            </p>
            <div className="space-y-3">
              <Button size="lg" className="mr-4">
                Join Community Forum
              </Button>
              <Button variant="outline" size="lg">
                <Globe className="mr-2 h-4 w-4" /> Slack Workspace
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
              alt="Community collaboration"
              className="rounded-lg shadow-md"
              width={500}
              height={300}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Community Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-blue-500" />
                  Forums
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Discuss best practices, troubleshoot issues, and share your success stories with
                  fellow users.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>2,500+ active members</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Visit Forums</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-blue-500" />
                  Experts Program
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our community experts who help others and gain early access to new features.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>50+ certified experts</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Apply Now</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Attend virtual meetups, webinars, and annual conferences to learn and network.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Next event: March 30, 2025</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Calendar</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Community Discussions</h2>
          
          <Tabs defaultValue="popular">
            <TabsList className="mb-6">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
            </TabsList>
            
            <TabsContent value="popular">
              <div className="space-y-4">
                {[
                  {
                    title: "Best practices for bank statement templates",
                    category: "Templates",
                    replies: 34,
                    views: 1250,
                  },
                  {
                    title: "Integrating with QuickBooks Online: Step-by-step guide",
                    category: "Integrations",
                    replies: 28,
                    views: 975,
                  },
                  {
                    title: "How to improve extraction accuracy for PDF scans",
                    category: "Data Extraction",
                    replies: 23,
                    views: 890,
                  },
                  {
                    title: "Batch processing large volumes of statements",
                    category: "Performance",
                    replies: 19,
                    views: 765,
                  },
                ].map((thread, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium hover:text-blue-600 cursor-pointer">
                          {thread.title}
                        </h3>
                        <div className="mt-1 flex items-center">
                          <Badge variant="outline" className="mr-2">
                            {thread.category}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            <span className="mr-3">{thread.replies} replies</span>
                            <span>{thread.views} views</span>
                          </span>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <MessageSquare className="h-4 w-4 mr-2" /> Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline">View All Discussions</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="recent">
              <div className="p-8 text-center text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="font-medium text-lg mb-2">Recent discussions will appear here</h3>
                <p>Switch to the "Popular" tab to see example content</p>
              </div>
            </TabsContent>
            
            <TabsContent value="unanswered">
              <div className="p-8 text-center text-gray-500">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <h3 className="font-medium text-lg mb-2">Unanswered questions will appear here</h3>
                <p>Switch to the "Popular" tab to see example content</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        <section className="bg-blue-50 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Contribute to our Community</h2>
              <p className="text-gray-600 mb-6">
                Share your knowledge, templates, and integrations with the FinDataPRO community. Help
                others succeed while showcasing your expertise.
              </p>
              <Button>
                <Share2 className="mr-2 h-4 w-4" /> Contribute Now
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium mb-2">Share Templates</h3>
                <p className="text-sm text-gray-600">
                  Contribute your custom templates for specific document types
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium mb-2">Write Tutorials</h3>
                <p className="text-sm text-gray-600">
                  Create guides explaining how to solve common challenges
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium mb-2">Share Code</h3>
                <p className="text-sm text-gray-600">
                  Publish integration code and automation scripts
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-medium mb-2">Answer Questions</h3>
                <p className="text-sm text-gray-600">
                  Help other members solve their implementation challenges
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Community Guidelines</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Be Respectful</h3>
                  <p className="text-gray-600">
                    Treat other community members with respect. Harassment, hate speech, and personal
                    attacks are not tolerated.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Share Knowledge</h3>
                  <p className="text-gray-600">
                    Our community thrives when members share their expertise. Be generous with your
                    knowledge and help others learn.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Respect Privacy</h3>
                  <p className="text-gray-600">
                    Do not share sensitive financial data, personally identifiable information, or
                    confidential business data in community forums.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Stay On Topic</h3>
                  <p className="text-gray-600">
                    Keep discussions relevant to FinDataPRO, financial data processing, and related
                    topics. Use appropriate categories for your posts.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">No Promotions</h3>
                  <p className="text-gray-600">
                    Avoid unsolicited advertising or promotional content. If you have a relevant
                    service or product, contact us for partnership opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Community;