import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Dobaato</h3>
            <p className="text-neutral-400 text-sm">
              Intelligent document processing platform for financial statements and bank records.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-base font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white text-sm transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-neutral-400 text-sm">
            &copy; 2023{" "}
            <a
              href="https://dobaato.com"
              className="text-neutral-300 hover:text-white"
            >
              Dobaato.com
            </a>
            . All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/"
              className="text-neutral-400 hover:text-white text-sm transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-neutral-400 hover:text-white text-sm transition-all"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="text-neutral-400 hover:text-white text-sm transition-all"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
