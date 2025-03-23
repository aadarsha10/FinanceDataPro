import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Templates from "./pages/Templates";
import Documents from "./pages/Documents";
import Documentation from "./pages/Documentation";
import Roadmap from "./pages/Roadmap";
import NotFound from "./pages/not-found";

// Layout components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/templates" component={Templates} />
          <Route path="/documents" component={Documents} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/roadmap" component={Roadmap} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
