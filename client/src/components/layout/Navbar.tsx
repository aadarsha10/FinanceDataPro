import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import UploadModal from "../features/UploadModal";

const Navbar = () => {
  const [location] = useLocation();
  const [uploadOpen, setUploadOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Templates", path: "/templates" },
    { name: "Documents", path: "/documents" },
    { name: "Documentation", path: "/documentation" },
    { name: "Roadmap", path: "/roadmap" },
  ];

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-semibold text-2xl">Dobaato</span>
            </Link>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-neutral-900 font-medium rounded-md px-3 py-2 text-sm hover:bg-neutral-50 transition-all ${
                    location === link.path ? "bg-neutral-50" : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center">
            <Button onClick={() => setUploadOpen(true)}>
              Upload Document
            </Button>
            <div className="ml-4 relative flex-shrink-0">
              <div>
                <button
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none"
                  id="user-menu-button"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User avatar"
                  />
                </button>
              </div>
            </div>

            <div className="md:hidden ml-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className={`text-neutral-900 font-medium rounded-md px-3 py-2 hover:bg-neutral-50 transition-all ${
                          location === link.path ? "bg-neutral-50" : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      <UploadModal 
        isOpen={uploadOpen} 
        onClose={() => setUploadOpen(false)}
      />
    </header>
  );
};

export default Navbar;
