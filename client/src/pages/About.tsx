import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "wouter";
import { Button } from "../components/ui/button";
import { Award, BookOpen, Briefcase, ClipboardCheck, Globe, HeartHandshake, LightbulbIcon, Users } from "lucide-react";

const About = () => {
  return (
    <StaticPageLayout
      title="About FinDataPRO"
      subtitle="Transforming financial document processing with intelligent automation"
    >
      <div className="space-y-12">
        <section>
          <div className="md:flex gap-10 items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At FinDataPRO, we're on a mission to eliminate the tedious manual work of processing financial 
                documents. We believe that finance professionals should focus on analysis and decision-making, 
                not on data entry and document sorting.
              </p>
              <p className="text-gray-600">
                Our platform uses advanced technology to extract, structure, and validate data from financial 
                documents automatically, freeing up valuable time and reducing errors. By streamlining these 
                workflows, we help businesses make faster, more informed financial decisions.
              </p>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="Team working on financial documents" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="font-medium text-lg mb-2">2021 - The Beginning</h3>
              <p className="text-gray-600">
                FinDataPRO was founded by a team of finance and technology experts who experienced firsthand
                the challenges of processing large volumes of financial documents. After spending countless hours
                manually extracting data from bank statements, invoices, and financial reports, they decided
                there had to be a better way.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="font-medium text-lg mb-2">2022 - Building the Foundation</h3>
              <p className="text-gray-600">
                The team developed the core technology for intelligent document processing, focusing on
                accuracy and ease of use. After months of development and testing, the first version of
                FinDataPRO was launched with support for bank statement processing.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="font-medium text-lg mb-2">2023 - Expanding Capabilities</h3>
              <p className="text-gray-600">
                Following positive feedback from early users, we expanded our platform's capabilities to support
                more document types and added API access for enterprise integrations. Our user base grew rapidly
                as word spread about the time and resources saved using our platform.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="font-medium text-lg mb-2">2024 - Growth and Recognition</h3>
              <p className="text-gray-600">
                FinDataPRO secured significant investment to accelerate growth and product development. The platform
                received industry recognition for innovation in financial technology, and partnerships with major
                accounting software providers helped expand our reach.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="font-medium text-lg mb-2">2025 - Today and Beyond</h3>
              <p className="text-gray-600">
                Today, FinDataPRO serves thousands of businesses worldwide, from small accounting firms to large
                financial institutions. We continue to innovate and improve our platform, driven by our mission
                to transform financial document processing for everyone.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <LightbulbIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    We continuously push the boundaries of what's possible in document processing technology.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <ClipboardCheck className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Accuracy</h3>
                  <p className="text-gray-600 text-sm">
                    We're committed to delivering the highest level of accuracy in data extraction and processing.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <HeartHandshake className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Customer Success</h3>
                  <p className="text-gray-600 text-sm">
                    We measure our success by the success of our customers and their ability to achieve their goals.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium mb-2">Transparency</h3>
                  <p className="text-gray-600 text-sm">
                    We believe in clear communication and being upfront about what our technology can and cannot do.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" 
                  alt="Alex Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Alex Johnson</h3>
              <p className="text-gray-600">Co-Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" 
                  alt="Sarah Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Sarah Chen</h3>
              <p className="text-gray-600">Co-Founder & CTO</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Michael Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-medium text-lg">Michael Rodriguez</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Our team consists of experts in finance, machine learning, software development, and user experience design.
              We're united by our passion for solving complex problems and creating technology that makes a difference.
            </p>
            
            <Link href="/careers">
              <Button variant="outline">
                <Briefcase className="mr-2 h-4 w-4" /> Join Our Team
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <Globe className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Global Reach</h2>
            <p className="text-gray-600 mb-4">
              FinDataPRO serves customers across 30+ countries, helping businesses of all sizes streamline
              their financial document processing.
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div>5,000+ Active Users</div>
              <div>30+ Countries</div>
              <div>1M+ Documents Processed</div>
              <div>99.5% Accuracy Rate</div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <Award className="h-8 w-8 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-3">Recognition</h2>
            <p className="text-gray-600 mb-4">
              Our innovative approach to financial document processing has earned recognition from
              industry experts and publications.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>"Top 50 FinTech Innovators" - FinTech Magazine</li>
              <li>"Best Document Processing Solution" - Finance Innovation Awards</li>
              <li>"Startup to Watch" - Tech Insider</li>
            </ul>
          </div>
        </section>

        <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Join us on our mission</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We're building the future of financial document processing, and we'd love for you to be a part of it.
            Whether you're looking to use our platform, join our team, or partner with us, we're excited to
            connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary">Get Started</Button>
            <Link href="/careers">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                <Briefcase className="mr-2 h-4 w-4" /> View Open Positions
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600">
                <Users className="mr-2 h-4 w-4" /> Partnership Inquiries
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </StaticPageLayout>
  );
};

export default About;