import { Link } from "wouter";

interface StaticPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backLink?: {
    href: string;
    label: string;
  };
}

const StaticPageLayout = ({ title, subtitle, children, backLink }: StaticPageLayoutProps) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {backLink && (
        <Link 
          href={backLink.href}
          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-6"
        >
          ← {backLink.label}
        </Link>
      )}
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h1>
      
      {subtitle && (
        <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
      )}
      
      <div className="prose prose-blue max-w-none">
        {children}
      </div>
    </div>
  );
};

export default StaticPageLayout;