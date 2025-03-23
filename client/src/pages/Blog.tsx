import { useState } from "react";
import { Link } from "wouter";
import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { ChevronRight, Search, Calendar, User, Tag, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Ways to Optimize Your Financial Document Processing Workflow",
    excerpt: "Learn how to streamline your document processing to save time and reduce errors. These proven strategies will help you focus on analysis instead of data entry.",
    date: "March 15, 2025",
    author: "Sarah Chen",
    category: "Best Practices",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    featured: true,
  },
  {
    id: "2",
    title: "Understanding AI-Powered Data Extraction: How It Works",
    excerpt: "Dive into the technology behind intelligent document processing and understand how AI can accurately extract data from complex financial documents.",
    date: "March 8, 2025",
    author: "Michael Rodriguez",
    category: "Technology",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    id: "3",
    title: "Case Study: How ABC Financial Saved 30 Hours Per Week",
    excerpt: "Read how ABC Financial implemented document automation to transform their monthly reporting process and achieve significant time savings.",
    date: "February 28, 2025",
    author: "Alex Johnson",
    category: "Case Study",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4",
  },
  {
    id: "4",
    title: "Integrating Financial Document Processing with Your Accounting Software",
    excerpt: "A step-by-step guide to connecting your document processing solution with popular accounting platforms for seamless data flow.",
    date: "February 20, 2025",
    author: "Emily Wong",
    category: "Integration",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    id: "5",
    title: "The Future of Financial Document Processing: Trends to Watch",
    excerpt: "Explore emerging technologies and approaches that will shape the future of how businesses handle financial documents and data extraction.",
    date: "February 12, 2025",
    author: "David Miller",
    category: "Industry Trends",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
  },
  {
    id: "6",
    title: "Ensuring Compliance When Automating Financial Document Processing",
    excerpt: "Learn best practices for maintaining regulatory compliance while implementing automation in your financial document workflows.",
    date: "February 5, 2025",
    author: "Rachel Kim",
    category: "Compliance",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3",
  },
];

const categories = [
  "All Categories",
  "Best Practices",
  "Technology",
  "Case Study",
  "Integration",
  "Industry Trends",
  "Compliance",
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    // Filter by category if not "All Categories"
    const categoryMatch =
      selectedCategory === "All Categories" || post.category === selectedCategory;

    // Filter by search query
    const searchMatch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <StaticPageLayout title="Blog" subtitle="Insights and resources on financial document processing">
      <div className="space-y-10">
        {/* Featured post */}
        {featuredPost && (
          <section>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ backgroundImage: `url(${featuredPost.image})` }}
                ></div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-2">{featuredPost.category}</Badge>
                  <h2 className="text-2xl font-semibold mb-3">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="w-fit">
                      Read Article <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </section>
        )}

        {/* Search and filters */}
        <section className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Blog posts grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card key={post.id} className="flex flex-col h-full">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{post.category}</Badge>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="mt-auto pt-0">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                        <Clock className="h-4 w-4 ml-3 mr-1" />
                        {post.readTime}
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </section>

        {/* Newsletter signup */}
        <section className="bg-blue-50 p-8 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-3">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest insights and updates on financial
              document processing and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input placeholder="Enter your email" className="sm:flex-1" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our
              company.
            </p>
          </div>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default Blog;