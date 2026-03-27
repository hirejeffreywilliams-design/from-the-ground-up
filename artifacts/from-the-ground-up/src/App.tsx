import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
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
import Resources from "@/pages/Resources";
import Assessment from "@/pages/Assessment";
import CareerPathways from "@/pages/CareerPathways";
import FundraisingPlaybook from "@/pages/FundraisingPlaybook";
import StrategicPlan25 from "@/pages/StrategicPlan25";
import ComplianceGuide from "@/pages/ComplianceGuide";
import StudentEarningHub from "@/pages/StudentEarningHub";
import GrantApplications from "@/pages/GrantApplications";
import NotFound from "@/pages/not-found";

import AdminLayout from "@/pages/admin/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import AdminContacts from "@/pages/admin/Contacts";
import AdminPrograms from "@/pages/admin/Programs";
import AdminTestimonials from "@/pages/admin/Testimonials";
import AdminDonors from "@/pages/admin/Donors";
import AdminVolunteers from "@/pages/admin/Volunteers";
import AdminFinancials from "@/pages/admin/Financials";
import AdminImpactCascade from "@/pages/admin/ImpactCascade";
import AdminSkillsGap from "@/pages/admin/SkillsGap";
import AdminActivityLog from "@/pages/admin/ActivityLog";
import AdminGrantTracker from "@/pages/admin/GrantTracker";
import AdminComplianceCalendar from "@/pages/admin/ComplianceCalendar";
import AdminBoardMeetings from "@/pages/admin/BoardMeetings";

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

function AdminRouter() {
  return (
    <AdminLayout>
      <Switch>
        <Route path="/admin" component={Dashboard} />
        <Route path="/admin/contacts" component={AdminContacts} />
        <Route path="/admin/programs" component={AdminPrograms} />
        <Route path="/admin/testimonials" component={AdminTestimonials} />
        <Route path="/admin/donors" component={AdminDonors} />
        <Route path="/admin/volunteers" component={AdminVolunteers} />
        <Route path="/admin/financials" component={AdminFinancials} />
        <Route path="/admin/grants" component={AdminGrantTracker} />
        <Route path="/admin/compliance" component={AdminComplianceCalendar} />
        <Route path="/admin/meetings" component={AdminBoardMeetings} />
        <Route path="/admin/impact" component={AdminImpactCascade} />
        <Route path="/admin/skills-gap" component={AdminSkillsGap} />
        <Route path="/admin/activity" component={AdminActivityLog} />
      </Switch>
    </AdminLayout>
  );
}

function Router() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  if (isAdmin) {
    return <AdminRouter />;
  }

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
          <Route path="/resources" component={Resources} />
          <Route path="/assessment" component={Assessment} />
          <Route path="/careers" component={CareerPathways} />
          <Route path="/fundraising" component={FundraisingPlaybook} />
          <Route path="/strategic-plan" component={StrategicPlan25} />
          <Route path="/compliance-guide" component={ComplianceGuide} />
          <Route path="/earn" component={StudentEarningHub} />
          <Route path="/grant-applications" component={GrantApplications} />
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
