import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import Bylaws from "@/pages/Bylaws";
import Governance from "@/pages/Governance";
import FAQ from "@/pages/FAQ";
import Roadmap from "@/pages/Roadmap";
import FoundationStrategy from "@/pages/FoundationStrategy";
import StartupGuide from "@/pages/StartupGuide";
import Documents from "@/pages/Documents";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/programs" component={Programs} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/donate" component={Donate} />
          <Route path="/bylaws" component={Bylaws} />
          <Route path="/governance" component={Governance} />
          <Route path="/faq" component={FAQ} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/strategy" component={FoundationStrategy} />
          <Route path="/startup-guide" component={StartupGuide} />
          <Route path="/documents" component={Documents} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
