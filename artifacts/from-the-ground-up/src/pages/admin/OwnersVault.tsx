import { useState } from "react";
import { Link } from "wouter";
import {
  Lock,
  FileText,
  DollarSign,
  Target,
  Shield,
  Landmark,
  ScrollText,
  ChevronRight,
  AlertTriangle,
  Eye,
  EyeOff,
  Search,
} from "lucide-react";

const vaultSections = [
  {
    id: "grants",
    title: "Grant Applications",
    icon: DollarSign,
    color: "text-green-600 bg-green-50 border-green-200",
    description: "Ready-to-submit grant proposals with budgets and templates",
    route: "/admin/vault/grants",
  },
  {
    id: "fundraising",
    title: "Fundraising Playbook",
    icon: Target,
    color: "text-amber-600 bg-amber-50 border-amber-200",
    description: "Internal fundraising strategies, donor cultivation, and campaign tactics",
    route: "/admin/vault/fundraising",
  },
  {
    id: "strategic-plan",
    title: "25-Year Strategic Plan",
    icon: Landmark,
    color: "text-blue-600 bg-blue-50 border-blue-200",
    description: "Long-term roadmap with revenue projections, KPIs, and risk assessments",
    route: "/admin/vault/strategic-plan",
  },
  {
    id: "strategy",
    title: "Foundation Strategy",
    icon: ScrollText,
    color: "text-purple-600 bg-purple-50 border-purple-200",
    description: "Core organizational strategy and foundation-level planning",
    route: "/admin/vault/strategy",
  },
  {
    id: "compliance",
    title: "Compliance Guide",
    icon: Shield,
    color: "text-red-600 bg-red-50 border-red-200",
    description: "IRS compliance, state registration, audit preparation, and legal requirements",
    route: "/admin/vault/compliance",
  },
  {
    id: "documents",
    title: "Legal & Formation Documents",
    icon: FileText,
    color: "text-indigo-600 bg-indigo-50 border-indigo-200",
    description: "Articles of Incorporation, policies, bylaws drafts, and board templates",
    route: "/admin/vault/documents",
  },
];

export default function OwnersVault() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = vaultSections.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">Owner's Vault</h1>
          </div>
          <p className="text-muted-foreground font-sans max-w-2xl">
            Secure repository for all sensitive organizational documents. These materials have been removed from public view and are only accessible to authenticated board members and administrators.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
        <div>
          <p className="font-semibold text-amber-800 text-sm">Confidential Materials</p>
          <p className="text-amber-700 text-sm mt-1">
            These documents contain sensitive financial projections, internal strategies, and legal templates.
            Do not share publicly. All documents with [BRACKETED PLACEHOLDERS] must be updated with real information before use.
          </p>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search vault documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.id}
              href={section.route}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center border ${section.color}`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Vault Access Log
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center gap-3">
              <Eye className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Documents moved to vault from public site</span>
            </div>
            <span className="text-xs text-muted-foreground">Security Update</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border/50">
            <div className="flex items-center gap-3">
              <EyeOff className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Grant applications restricted to admin access</span>
            </div>
            <span className="text-xs text-muted-foreground">Security Update</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <EyeOff className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">Financial projections removed from public view</span>
            </div>
            <span className="text-xs text-muted-foreground">Security Update</span>
          </div>
        </div>
      </div>
    </div>
  );
}
