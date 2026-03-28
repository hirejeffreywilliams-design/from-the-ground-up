import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

import Home from "@/pages/Home";
import Programs from "@/pages/Programs";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Donate from "@/pages/Donate";
import Bylaws from "@/pages/Bylaws";
import Governance from "@/pages/Governance";
import FAQ from "@/pages/FAQ";
import Roadmap from "@/pages/Roadmap";
import StartupGuide from "@/pages/StartupGuide";
import Resources from "@/pages/Resources";
import Assessment from "@/pages/Assessment";
import CareerPathways from "@/pages/CareerPathways";
import StudentEarningHub from "@/pages/StudentEarningHub";
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
import AdminOwnersVault from "@/pages/admin/OwnersVault";
import AdminGuide from "@/pages/admin/AdminGuide";
import AdminDMVPartnerships from "@/pages/admin/DMVPartnerships";

const GrantApplications = lazy(() => import("@/pages/GrantApplications"));
const FundraisingPlaybook = lazy(() => import("@/pages/FundraisingPlaybook"));
const StrategicPlan25 = lazy(() => import("@/pages/StrategicPlan25"));
const FoundationStrategy = lazy(() => import("@/pages/FoundationStrategy"));
const ComplianceGuide = lazy(() => import("@/pages/ComplianceGuide"));
const Documents = lazy(() => import("@/pages/Documents"));

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

function VaultFallback() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

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
        <Route path="/admin/vault" component={AdminOwnersVault} />
        <Route path="/admin/vault/grants">{() => <Suspense fallback={<VaultFallback />}><GrantApplications /></Suspense>}</Route>
        <Route path="/admin/vault/fundraising">{() => <Suspense fallback={<VaultFallback />}><FundraisingPlaybook /></Suspense>}</Route>
        <Route path="/admin/vault/strategic-plan">{() => <Suspense fallback={<VaultFallback />}><StrategicPlan25 /></Suspense>}</Route>
        <Route path="/admin/vault/strategy">{() => <Suspense fallback={<VaultFallback />}><FoundationStrategy /></Suspense>}</Route>
        <Route path="/admin/vault/compliance">{() => <Suspense fallback={<VaultFallback />}><ComplianceGuide /></Suspense>}</Route>
        <Route path="/admin/vault/documents">{() => <Suspense fallback={<VaultFallback />}><Documents /></Suspense>}</Route>
        <Route path="/admin/guide" component={AdminGuide} />
        <Route path="/admin/partnerships" component={AdminDMVPartnerships} />
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
          <Route path="/startup-guide" component={StartupGuide} />
          <Route path="/resources" component={Resources} />
          <Route path="/assessment" component={Assessment} />
          <Route path="/careers" component={CareerPathways} />
          <Route path="/earn" component={StudentEarningHub} />
          <Route path="/fundraising">{() => <Redirect to="/admin/vault/fundraising" />}</Route>
          <Route path="/grant-applications">{() => <Redirect to="/admin/vault/grants" />}</Route>
          <Route path="/strategic-plan">{() => <Redirect to="/admin/vault/strategic-plan" />}</Route>
          <Route path="/strategy">{() => <Redirect to="/admin/vault/strategy" />}</Route>
          <Route path="/compliance-guide">{() => <Redirect to="/admin/vault/compliance" />}</Route>
          <Route path="/documents">{() => <Redirect to="/admin/vault/documents" />}</Route>
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
