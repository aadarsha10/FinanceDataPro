import StaticPageLayout from "../components/layout/StaticPageLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Briefcase, Building, Clock, Globe, HeartHandshake, MapPin, Rocket, UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  remote: boolean;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits?: string[];
  postedDate: string;
}

const openPositions: JobPosition[] = [
  {
    id: "fe-dev-1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "San Francisco, CA",
    remote: true,
    type: "Full-time",
    description: "We're looking for a Senior Frontend Developer to help build and improve our user interfaces. You'll work closely with our design and backend teams to create engaging, high-performance web applications for our financial document processing platform.",
    responsibilities: [
      "Develop and maintain frontend components using React and TypeScript",
      "Collaborate with design team to implement responsive, accessible UIs",
      "Write clean, maintainable, and well-tested code",
      "Optimize application performance and ensure cross-browser compatibility",
      "Mentor junior developers and participate in code reviews"
    ],
    requirements: [
      "5+ years of experience in frontend development with React",
      "Strong knowledge of modern JavaScript, HTML, and CSS",
      "Experience with TypeScript and state management libraries",
      "Understanding of responsive design principles and accessibility",
      "Experience with testing frameworks like Jest and React Testing Library",
      "Excellent communication and collaboration skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote work options",
      "Professional development budget",
      "Generous PTO policy"
    ],
    postedDate: "March 15, 2025"
  },
  {
    id: "ml-eng-1",
    title: "Machine Learning Engineer",
    department: "Data Science",
    location: "Boston, MA",
    remote: true,
    type: "Full-time",
    description: "Join our Data Science team to improve our document processing algorithms. You'll work on developing and optimizing machine learning models that extract and structure data from financial documents with high accuracy.",
    responsibilities: [
      "Develop and improve ML models for document data extraction",
      "Fine-tune existing models to improve accuracy and performance",
      "Collaborate with engineering team to integrate models into our production systems",
      "Research and implement new ML techniques relevant to document processing",
      "Analyze model performance and identify areas for improvement"
    ],
    requirements: [
      "MS or PhD in Computer Science, Machine Learning, or related field",
      "3+ years of experience building ML models for production environments",
      "Strong knowledge of deep learning frameworks (TensorFlow, PyTorch)",
      "Experience with NLP and computer vision techniques",
      "Proficiency in Python and data processing libraries",
      "Experience with OCR and document processing is a plus"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote work options",
      "Professional development budget",
      "Generous PTO policy"
    ],
    postedDate: "March 10, 2025"
  },
  {
    id: "pm-1",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    remote: true,
    type: "Full-time",
    description: "We're looking for a Product Manager to help shape the future of our financial document processing platform. You'll work with our customers, engineering team, and leadership to define product strategy and roadmap.",
    responsibilities: [
      "Define product vision, strategy, and roadmap based on market research and customer needs",
      "Gather and prioritize requirements for new features and improvements",
      "Work closely with engineering and design teams throughout the development process",
      "Analyze product metrics and user feedback to inform product decisions",
      "Present product updates to stakeholders and customers"
    ],
    requirements: [
      "3+ years of experience in product management for SaaS products",
      "Strong understanding of financial services industry or document processing",
      "Excellent communication and presentation skills",
      "Data-driven approach to decision making",
      "Experience with agile development methodologies",
      "Strong problem-solving skills and attention to detail"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote work options",
      "Professional development budget",
      "Generous PTO policy"
    ],
    postedDate: "March 5, 2025"
  },
  {
    id: "cs-1",
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Chicago, IL",
    remote: true,
    type: "Full-time",
    description: "Join our Customer Success team to help our customers get the most value from our platform. You'll build relationships with key accounts, provide technical guidance, and ensure customer satisfaction and retention.",
    responsibilities: [
      "Serve as the primary point of contact for a portfolio of enterprise customers",
      "Understand customer business needs and help them achieve their goals with our platform",
      "Develop and deliver customer training and onboarding sessions",
      "Identify upsell and cross-sell opportunities within your customer base",
      "Work with product team to advocate for customer needs and feedback"
    ],
    requirements: [
      "3+ years of experience in customer success or account management for B2B SaaS",
      "Strong technical aptitude and ability to explain complex concepts simply",
      "Experience with financial services or document processing solutions is a plus",
      "Excellent communication and relationship-building skills",
      "Problem-solving mindset and ability to navigate customer challenges",
      "Bachelor's degree in a relevant field"
    ],
    benefits: [
      "Competitive salary and commission structure",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote work options",
      "Professional development budget",
      "Generous PTO policy"
    ],
    postedDate: "February 28, 2025"
  },
  {
    id: "sales-1",
    title: "Enterprise Sales Representative",
    department: "Sales",
    location: "Remote",
    remote: true,
    type: "Full-time",
    description: "We're expanding our sales team to bring our document processing solution to more enterprise customers. You'll identify and pursue new opportunities, build relationships with decision-makers, and close deals that drive company growth.",
    responsibilities: [
      "Develop and execute sales strategies for enterprise accounts",
      "Build relationships with key decision-makers in target organizations",
      "Create and deliver compelling product demonstrations and presentations",
      "Negotiate contracts and close deals to meet or exceed sales targets",
      "Collaborate with marketing, product, and customer success teams"
    ],
    requirements: [
      "5+ years of B2B SaaS sales experience, preferably in fintech or enterprise software",
      "Track record of meeting or exceeding sales quotas",
      "Experience with consultative selling and complex sales cycles",
      "Strong communication and presentation skills",
      "Understanding of financial processes and document workflows",
      "CRM experience (Salesforce preferred)"
    ],
    benefits: [
      "Competitive base salary and commission structure",
      "Uncapped earning potential",
      "Health, dental, and vision insurance",
      "Flexible work schedule and remote work options",
      "Generous PTO policy"
    ],
    postedDate: "February 20, 2025"
  }
];

const Careers = () => {
  return (
    <StaticPageLayout
      title="Careers at FinDataPRO"
      subtitle="Join us in transforming financial document processing"
    >
      <div className="space-y-12">
        {/* Hero section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Build The Future With Us</h2>
            <p className="text-gray-600 mb-6">
              At FinDataPRO, we're solving complex challenges in financial document processing using
              the latest in machine learning, computer vision, and cloud technologies. Join our
              talented team and make a real impact on how businesses handle financial data.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">View Open Positions</Button>
              <Button variant="outline" size="lg">Meet Our Team</Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaborating in office"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Company values */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-blue-50 border-none">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace new ideas and technologies to solve complex problems in creative ways.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-none">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Inclusivity</h3>
                  <p className="text-gray-600">
                    We value diverse perspectives and believe that inclusion drives better outcomes.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-none">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <HeartHandshake className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Customer Focus</h3>
                  <p className="text-gray-600">
                    We're committed to understanding our customers' needs and exceeding their expectations.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-none">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Impact</h3>
                  <p className="text-gray-600">
                    We measure our success by the positive impact we create for our customers and society.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-4">Flexible Work</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Remote-friendly culture</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Flexible working hours</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Home office stipend</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Health & Wellness</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Comprehensive health insurance</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Mental health resources</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Wellness program and gym stipend</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Growth & Reward</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Competitive compensation and equity</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Professional development budget</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span>Generous paid time off</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Job listings */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Departments</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
              <TabsTrigger value="customer">Customer Success</TabsTrigger>
              <TabsTrigger value="sales">Sales & Marketing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="space-y-4">
                {openPositions.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="engineering">
              <div className="space-y-4">
                {openPositions
                  .filter((job) => job.department === "Engineering")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                {openPositions.filter((job) => job.department === "Engineering").length === 0 && (
                  <NoJobsMessage department="Engineering" />
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="product">
              <div className="space-y-4">
                {openPositions
                  .filter((job) => job.department === "Product")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                {openPositions.filter((job) => job.department === "Product").length === 0 && (
                  <NoJobsMessage department="Product" />
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="data">
              <div className="space-y-4">
                {openPositions
                  .filter((job) => job.department === "Data Science")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                {openPositions.filter((job) => job.department === "Data Science").length === 0 && (
                  <NoJobsMessage department="Data Science" />
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="customer">
              <div className="space-y-4">
                {openPositions
                  .filter((job) => job.department === "Customer Success")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                {openPositions.filter((job) => job.department === "Customer Success").length === 0 && (
                  <NoJobsMessage department="Customer Success" />
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="sales">
              <div className="space-y-4">
                {openPositions
                  .filter((job) => job.department === "Sales" || job.department === "Marketing")
                  .map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                {openPositions.filter((job) => job.department === "Sales" || job.department === "Marketing").length === 0 && (
                  <NoJobsMessage department="Sales & Marketing" />
                )}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* No open positions message */}
        <section className="bg-blue-50 p-8 rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-3">Don't see a role that fits?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-600">
            We're always interested in connecting with talented individuals. Send us your resume and let us
            know what you're interested in.
          </p>
          <Button>
            Submit General Application
          </Button>
        </section>

        {/* Employee testimonials */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center">Life at FinDataPRO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                      alt="Employee testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="italic text-gray-600 mb-4">
                    "The best thing about working at FinDataPRO is the impact we're having on our customers.
                    It's incredible to see how much time our platform saves them."
                  </blockquote>
                  <div>
                    <p className="font-medium">Jennifer Lee</p>
                    <p className="text-sm text-gray-500">Product Manager, 2 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"
                      alt="Employee testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="italic text-gray-600 mb-4">
                    "As an engineer, I love that I get to work with cutting-edge technologies and solve
                    challenging problems that make a real difference for businesses."
                  </blockquote>
                  <div>
                    <p className="font-medium">Marcus Johnson</p>
                    <p className="text-sm text-gray-500">Senior Engineer, 3 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                      alt="Employee testimonial"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="italic text-gray-600 mb-4">
                    "The culture at FinDataPRO truly values work-life balance and personal growth. I've had
                    amazing opportunities to develop my skills and advance my career."
                  </blockquote>
                  <div>
                    <p className="font-medium">Aisha Patel</p>
                    <p className="text-sm text-gray-500">Data Scientist, 1.5 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </StaticPageLayout>
  );
};

const JobCard = ({ job }: { job: JobPosition }) => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription className="mt-1">
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                <span>{job.department}</span>
              </div>
            </CardDescription>
          </div>
          <div className="flex flex-col items-end">
            <Badge variant={job.remote ? "default" : "outline"}>
              {job.remote ? "Remote" : "In-Office"}
            </Badge>
            <span className="text-xs text-gray-500 mt-1">Posted {job.postedDate}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Briefcase className="h-4 w-4 mr-1" />
            {job.type}
          </div>
        </div>
        <p className="text-gray-600 line-clamp-2">{job.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Details <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const NoJobsMessage = ({ department }: { department: string }) => {
  return (
    <div className="text-center py-8 bg-gray-50 rounded-lg">
      <Briefcase className="h-12 w-12 text-gray-300 mx-auto mb-3" />
      <h3 className="text-lg font-medium mb-2">No open positions in {department}</h3>
      <p className="text-gray-600 mb-4">
        We don't have any openings in this department right now, but we're always growing!
        Check back soon or submit a general application.
      </p>
      <Button variant="outline">Submit General Application</Button>
    </div>
  );
};

export default Careers;