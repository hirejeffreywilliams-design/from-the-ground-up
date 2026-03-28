import { useState } from "react";
import {
  BookOpen,
  LayoutDashboard,
  Users,
  Heart,
  HandHelping,
  DollarSign,
  FileSearch,
  ClipboardList,
  Calendar,
  TrendingUp,
  BarChart3,
  Activity,
  Lock,
  Handshake,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  AlertCircle,
  Info,
  MessageSquare,
} from "lucide-react";

interface GuideSection {
  id: string;
  title: string;
  icon: any;
  overview: string;
  steps: string[];
  tips: string[];
  caution?: string;
}

const guideSections: GuideSection[] = [
  {
    id: "dashboard",
    title: "Dashboard Overview",
    icon: LayoutDashboard,
    overview: "The Dashboard is your mission control. It shows real-time stats on donations, students, volunteers, programs, and recent activity. Check it daily to stay on top of operations.",
    steps: [
      "Navigate to Admin > Dashboard to see the overview",
      "Review the 8 stat cards: Programs, Contacts, Donors, Total Donated, Volunteers, Volunteer Hours, Students Tracked, and Testimonials",
      "Scroll down to see Recent Contacts (new inquiries) and Recent Activity",
      "Use Recent Donations to quickly verify incoming gifts",
    ],
    tips: [
      "Check the dashboard first thing each morning",
      "If Total Donated seems off, cross-reference with the Financials page",
      "Recent Contacts shows people reaching out — respond within 24 hours",
    ],
  },
  {
    id: "contacts",
    title: "Managing Contacts",
    icon: MessageSquare,
    overview: "Contacts are people who've reached out through the website's contact form. Each submission includes their name, email, message, and timestamp.",
    steps: [
      "Go to Admin > Contacts to see all submissions",
      "Review new submissions and respond via email",
      "Use this as your CRM starting point — track who's interested",
      "Export contact info for email newsletters or outreach",
    ],
    tips: [
      "Respond to every inquiry within 24-48 hours",
      "Tag potential donors vs. potential students vs. partners",
      "Follow up with unreplied contacts weekly",
    ],
  },
  {
    id: "programs",
    title: "Programs Management",
    icon: BookOpen,
    overview: "Programs are the training courses FTGU offers — Construction, Electrical, Plumbing, HVAC, Carpentry, and AI in Trades. Manage course details, descriptions, and enrollment info.",
    steps: [
      "Go to Admin > Programs to view all current programs",
      "Click 'Add Program' to create a new training course",
      "Fill in the program name, description, duration, and capacity",
      "Edit existing programs to update schedules or descriptions",
      "Delete programs that are no longer offered",
    ],
    tips: [
      "Keep program descriptions up-to-date for the public website",
      "Include specific certifications students will earn",
      "Update capacity numbers as cohorts fill up",
    ],
  },
  {
    id: "donors",
    title: "Donor Management",
    icon: Heart,
    overview: "Track every donation and donor relationship. This is critical for tax receipts, thank-you letters, and cultivating repeat donors.",
    steps: [
      "Go to Admin > Donors to see all donor records",
      "Add new donors with their name, email, donation amount, and date",
      "Track donation frequency — one-time vs. recurring",
      "Use donor notes to track personal details for cultivation",
      "Delete duplicate or test entries to keep data clean",
    ],
    tips: [
      "Send thank-you letters within 48 hours of receiving a donation",
      "Major donors ($1,000+) deserve a personal phone call",
      "Review donor data before board meetings for reporting",
      "Keep donor contact info current for annual appeals",
    ],
    caution: "Donor information is confidential. Never share donor lists publicly or with unauthorized parties.",
  },
  {
    id: "volunteers",
    title: "Volunteer Coordination",
    icon: HandHelping,
    overview: "Track volunteer signups, hours contributed, and areas of expertise. Volunteers are essential to FTGU's operations.",
    steps: [
      "Go to Admin > Volunteers to manage volunteer records",
      "Add new volunteers with name, email, skills, and availability",
      "Log volunteer hours after each event or session",
      "Track total hours for grant reporting and impact metrics",
    ],
    tips: [
      "Volunteer hours are gold for grant applications — track them religiously",
      "Many grants require specific volunteer hour thresholds",
      "Recognize volunteers publicly (with permission) to retain them",
    ],
  },
  {
    id: "financials",
    title: "Financial Tracking",
    icon: DollarSign,
    overview: "Track all income and expenses by category. This data feeds into board reports, tax filings, and grant compliance.",
    steps: [
      "Go to Admin > Financials to see income vs. expense overview",
      "Add income entries: donations, grants, program fees, sponsorships",
      "Add expense entries: salaries, rent, supplies, marketing, insurance",
      "Filter by fiscal year or quarter for reporting periods",
      "Review net income regularly to ensure sustainability",
    ],
    tips: [
      "Enter transactions weekly — don't let them pile up",
      "Categorize everything consistently (same categories each time)",
      "Export data quarterly for your accountant/bookkeeper",
      "Board-approved status matters for compliance — mark transactions accordingly",
    ],
    caution: "Financial accuracy is legally required. Double-check all entries. Errors in reporting can trigger IRS audits.",
  },
  {
    id: "grants",
    title: "Grant Tracker",
    icon: FileSearch,
    overview: "Manage your entire grant pipeline from research to reporting. Track deadlines, amounts, statuses, and funder contacts.",
    steps: [
      "Go to Admin > Grant Tracker to see the pipeline",
      "Add new grant opportunities as you discover them",
      "Set status: Researching → In Progress → Submitted → Awarded/Declined",
      "Track deadlines carefully — late submissions are automatically rejected",
      "Record funder contact info for follow-up communications",
      "Set reporting deadlines for awarded grants",
    ],
    tips: [
      "Pipeline value helps forecast future income",
      "Start grant applications 4-6 weeks before deadlines",
      "Keep a master calendar of all grant deadlines",
      "After receiving an award, immediately note the reporting requirements",
    ],
    caution: "Missing grant reporting deadlines can result in having to return funds and being blacklisted from future grants.",
  },
  {
    id: "compliance",
    title: "Compliance Calendar",
    icon: ClipboardList,
    overview: "Track all legal and regulatory compliance deadlines — IRS filings, state registrations, insurance renewals, and board requirements.",
    steps: [
      "Go to Admin > Compliance to see all compliance items",
      "Add recurring deadlines: Form 990, state annual reports, insurance renewals",
      "Mark items complete as they're filed",
      "Set reminders 30 days before each deadline",
    ],
    tips: [
      "Form 990 is due on the 15th day of the 5th month after your fiscal year ends",
      "State charitable registration renewals vary by state",
      "Keep copies of all filed documents in a secure location",
      "Board meeting minutes are legally required — don't skip them",
    ],
    caution: "Missing IRS deadlines can result in loss of tax-exempt status. This is the #1 killer of small nonprofits.",
  },
  {
    id: "meetings",
    title: "Board Meetings",
    icon: Calendar,
    overview: "Schedule, track, and document board meetings. Minutes are a legal requirement for 501(c)(3) organizations.",
    steps: [
      "Go to Admin > Board Meetings to manage all meetings",
      "Schedule meetings with date, time, location, and agenda",
      "Take minutes during each meeting (or assign a secretary)",
      "Upload or record minutes after each meeting",
      "Track attendance — quorum requirements matter",
    ],
    tips: [
      "Minimum 2-4 board meetings per year (check your bylaws)",
      "Distribute agendas at least 3 days before meetings",
      "Minutes should record motions, votes, and key decisions — not word-for-word transcripts",
      "Keep all minutes permanently — they may be requested during audits",
    ],
  },
  {
    id: "impact",
    title: "Impact Cascade Tracker",
    icon: TrendingUp,
    overview: "FTGU's proprietary tool that calculates the multi-order economic ripple effect of trade education. Shows 1st-order (earnings), 2nd-order (jobs created), and 3rd-order (generational transfer) impacts.",
    steps: [
      "Go to Admin > Impact Cascade to view impact metrics",
      "Input student graduation data and employment outcomes",
      "Review the cascade calculations showing economic multiplier effects",
      "Use these numbers in grant applications and board presentations",
      "Update data quarterly for accurate trending",
    ],
    tips: [
      "This is your secret weapon for grant applications — funders love seeing ripple effects",
      "The 3rd-order impact (generational wealth transfer) is especially powerful for narrative",
      "Export impact data for annual reports and donor communications",
    ],
  },
  {
    id: "skills-gap",
    title: "Skills Gap Analyzer",
    icon: BarChart3,
    overview: "Analyzes local labor market demand versus student supply in DC-area trades. Helps you decide which programs to expand or create.",
    steps: [
      "Go to Admin > Skills Gap to view the analysis",
      "Review demand vs. supply for each trade (Construction, HVAC, Electrical, etc.)",
      "Identify gaps where demand exceeds supply — these are growth opportunities",
      "Use gap data to justify new program creation in grant proposals",
      "Update market data periodically with new labor statistics",
    ],
    tips: [
      "DC's construction boom means demand is high across all trades",
      "AI in Trades is an emerging gap — position FTGU as a leader here",
      "Reference Bureau of Labor Statistics data for credibility",
    ],
  },
  {
    id: "vault",
    title: "Owner's Vault",
    icon: Lock,
    overview: "The vault contains all sensitive documents that were moved from public view — grant applications, fundraising strategies, financial projections, and legal templates.",
    steps: [
      "Go to Admin > Owner's Vault to access secured documents",
      "Browse by category: Grants, Fundraising, Strategy, Compliance, Legal",
      "All documents with [BRACKETED PLACEHOLDERS] must be filled in before use",
      "Download and customize templates for specific grant applications",
    ],
    tips: [
      "Replace ALL bracketed placeholders before submitting any document externally",
      "Review grant application templates quarterly to keep budgets current",
      "The 25-Year Strategic Plan should be reviewed and updated annually",
      "Legal documents should be reviewed by an attorney before filing",
    ],
    caution: "Vault contents are confidential. Never share vault documents with unauthorized individuals.",
  },
  {
    id: "partnerships",
    title: "DMV Partnerships & Opportunities",
    icon: Handshake,
    overview: "Research-backed partnership opportunities and upcoming projects in the DC, Maryland, and Virginia area relevant to FTGU's mission.",
    steps: [
      "Go to Admin > DMV Partnerships to review opportunities",
      "Review each partnership category: Government, Education, Private Sector",
      "Identify high-priority opportunities aligned with FTGU's programs",
      "Reach out to contacts listed for each opportunity",
      "Track partnership status and follow-ups",
    ],
    tips: [
      "Government contracts often require CBE (Certified Business Enterprise) status",
      "Educational partnerships can provide student pipelines",
      "Private sector partnerships can lead to job placement for graduates",
    ],
  },
  {
    id: "activity",
    title: "Activity Log",
    icon: Activity,
    overview: "A chronological record of all admin actions — who did what and when. Essential for accountability and audit trails.",
    steps: [
      "Go to Admin > Activity Log to review recent actions",
      "Filter by date range or action type",
      "Use for troubleshooting — see who changed what",
      "Review before board meetings to summarize recent activity",
    ],
    tips: [
      "Check the activity log if data seems wrong — it'll show who made changes",
      "This log is automatically maintained — no action needed to populate it",
    ],
  },
];

export default function AdminGuide() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["dashboard"]));

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const expandAll = () => setExpandedSections(new Set(guideSections.map((s) => s.id)));
  const collapseAll = () => setExpandedSections(new Set());

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">Admin Guide</h1>
        </div>
        <p className="text-muted-foreground font-sans max-w-2xl">
          Complete guide to running the From The Ground Up admin portal. Everything your team needs to manage the organization effectively — no technical expertise required.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-blue-800 text-sm">Quick Start for New Admins</p>
            <ol className="text-blue-700 text-sm mt-2 space-y-1 list-decimal list-inside">
              <li>Start with the <strong>Dashboard</strong> to get an overview of current operations</li>
              <li>Review <strong>Contacts</strong> for any new inquiries that need responses</li>
              <li>Check <strong>Compliance</strong> for upcoming deadlines</li>
              <li>Review <strong>Grant Tracker</strong> for pending applications and reporting deadlines</li>
              <li>Update <strong>Financials</strong> with any new income or expenses</li>
              <li>Visit the <strong>Owner's Vault</strong> for sensitive documents and templates</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={expandAll}
          className="px-4 py-2 text-sm font-semibold border border-border rounded-lg hover:bg-muted transition-colors"
        >
          Expand All
        </button>
        <button
          onClick={collapseAll}
          className="px-4 py-2 text-sm font-semibold border border-border rounded-lg hover:bg-muted transition-colors"
        >
          Collapse All
        </button>
      </div>

      <div className="space-y-3">
        {guideSections.map((section) => {
          const Icon = section.icon;
          const isExpanded = expandedSections.has(section.id);

          return (
            <div key={section.id} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center gap-4 p-5 hover:bg-muted/50 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-lg text-foreground">{section.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{section.overview.substring(0, 80)}...</p>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 border-t border-border/50">
                  <div className="mt-4 space-y-5">
                    <div>
                      <p className="text-sm text-foreground leading-relaxed">{section.overview}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-3">
                        Step-by-Step
                      </h4>
                      <ol className="space-y-2">
                        {section.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="text-sm text-foreground/80">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        Pro Tips
                      </h4>
                      <ul className="space-y-2">
                        {section.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 mt-2" />
                            <span className="text-sm text-foreground/80">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {section.caution && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-red-800">Important Warning</p>
                          <p className="text-sm text-red-700 mt-1">{section.caution}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-display font-bold text-lg mb-4">Daily Admin Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-3">Every Day</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Check Dashboard for new activity</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Respond to new Contact submissions</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Acknowledge new donations</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-3">Every Week</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Update Financials with new transactions</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Review Grant Tracker deadlines</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Log volunteer hours</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Check Compliance Calendar</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-3">Every Month</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Review Impact Cascade metrics</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Update Skills Gap Analyzer data</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Prepare board meeting materials</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Review DMV partnership opportunities</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground/60 mb-3">Every Quarter</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Financial reporting and board presentation</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Update Strategic Plan progress</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Review and update Vault documents</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-border rounded" /> Export data for accountant/CPA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
