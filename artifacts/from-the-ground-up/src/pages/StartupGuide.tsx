import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ClipboardCheck, FileText, Building2, Landmark, Users, DollarSign,
  Shield, Scale, CheckCircle, Circle, AlertCircle, ExternalLink,
  ArrowRight, ChevronDown, ChevronUp, MapPin, Clock, Star
} from "lucide-react";
import { useState } from "react";

interface Step {
  number: number;
  title: string;
  timeline: string;
  status: "ready" | "action-required" | "external";
  description: string;
  details: string[];
  documents?: string[];
  links?: { label: string; url: string }[];
  cost?: string;
  tip?: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Choose Your Nonprofit Name & Check Availability",
    timeline: "Day 1",
    status: "ready",
    description: "Verify that 'From The Ground Up' is available as a business name in Washington DC and doesn't conflict with existing trademarks.",
    details: [
      "Search the DC Department of Licensing and Consumer Protection (DLCP) business name database at corponline.dcra.dc.gov",
      "Search the USPTO trademark database at tess2.uspto.gov to check for federal trademark conflicts",
      "Search the IRS Exempt Organizations database to ensure no existing 501(c)(3) uses the same name",
      "Consider registering the name as a trademark after incorporation for brand protection",
      "Reserve the domain name 'fromthegroundup.org' if not already done",
    ],
    links: [
      { label: "DC Business Name Search", url: "https://corponline.dcra.dc.gov/BizEntity.aspx" },
      { label: "USPTO Trademark Search", url: "https://tess2.uspto.gov" },
      { label: "IRS Exempt Org Search", url: "https://apps.irs.gov/app/eos/" },
    ],
    cost: "Free (name search); $50-$350 (trademark registration, optional)",
  },
  {
    number: 2,
    title: "Recruit Your Initial Board of Directors",
    timeline: "Week 1",
    status: "action-required",
    description: "Assemble at least 3 board members (DC minimum). Your bylaws specify up to 15 members. Start with 5-7 committed individuals.",
    details: [
      "DC requires a minimum of 3 directors for a nonprofit corporation",
      "Board members should bring diverse skills: legal, financial, education, trades, fundraising, community connections",
      "Each board member must be willing to sign a Conflict of Interest Policy disclosure",
      "Prepare board member commitment letters outlining expectations, term length, and responsibilities",
      "At least one board member should have nonprofit governance experience",
      "Consider including a CPA or financial professional for the Treasurer role",
      "Board members do NOT need to be DC residents",
    ],
    tip: "Your bylaws already define officer roles: Chairperson, Vice Chairperson, Secretary, and Treasurer. Identify who will fill each role before the organizational meeting.",
  },
  {
    number: 3,
    title: "File Articles of Incorporation with DC",
    timeline: "Week 1-2",
    status: "external",
    description: "File your Articles of Incorporation with the DC Department of Licensing and Consumer Protection (DLCP) to legally create your nonprofit corporation.",
    details: [
      "File online through the DC Corporate Registration System at corponline.dcra.dc.gov",
      "You can also file by mail: DC Dept. of Licensing and Consumer Protection, Corporations Division, 1100 4th St SW, Washington, DC 20024",
      "The Articles must include: nonprofit purpose clause, 501(c)(3) language, dissolution clause, registered agent information",
      "Your registered agent must have a physical address in DC (cannot be a P.O. Box)",
      "If you don't have a DC address, you can hire a registered agent service ($100-$300/year)",
      "Processing time: Online filing is typically 3-5 business days; mail filing takes 2-4 weeks",
    ],
    documents: ["Articles of Incorporation (draft provided in Documents page)"],
    links: [
      { label: "DC Online Filing", url: "https://corponline.dcra.dc.gov" },
      { label: "DC DLCP Nonprofit Guide", url: "https://dlcp.dc.gov" },
    ],
    cost: "$80 filing fee (online); $80 + processing fee (by mail)",
    tip: "Keep your certified copy of the Articles of Incorporation — you'll need it for the IRS application, bank account, and many other steps.",
  },
  {
    number: 4,
    title: "Obtain Your EIN (Employer Identification Number)",
    timeline: "Week 2",
    status: "external",
    description: "Apply for an EIN from the IRS. This is your nonprofit's 'Social Security number' — required for bank accounts, tax filings, and hiring.",
    details: [
      "Apply online at irs.gov/ein — it's free and you receive your EIN immediately",
      "You can also apply by mail using IRS Form SS-4 (takes 4-6 weeks)",
      "The 'responsible party' on the application should be the Founder or Board Chairperson",
      "Select 'Other nonprofit organization' as the entity type",
      "You need your Articles of Incorporation filed first (Step 3) before applying",
      "Your EIN is permanent — it stays with the organization forever",
    ],
    links: [
      { label: "IRS EIN Online Application", url: "https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" },
      { label: "IRS Form SS-4", url: "https://www.irs.gov/forms-pubs/about-form-ss-4" },
    ],
    cost: "Free",
    tip: "Apply online — it takes about 10 minutes and you get your EIN instantly. Save and print the confirmation letter.",
  },
  {
    number: 5,
    title: "Hold Organizational Board Meeting",
    timeline: "Week 2-3",
    status: "ready",
    description: "Hold your first official board meeting to adopt bylaws, elect officers, approve policies, and authorize key actions.",
    details: [
      "This meeting establishes the organization officially and creates the legal record of its formation",
      "All initial board members should attend (in person or virtually — your bylaws allow electronic participation)",
      "The meeting should follow a formal agenda and be documented with official minutes",
      "Key actions: adopt bylaws, elect officers, approve conflict of interest policy, authorize bank account, set fiscal year",
      "Each board member should sign the Conflict of Interest Policy disclosure form at this meeting",
      "Minutes must be kept as a permanent record of the organization",
    ],
    documents: [
      "Bylaws (already created — see Bylaws page)",
      "Organizational Meeting Minutes template (provided in Documents page)",
      "Conflict of Interest Policy (provided in Documents page)",
      "All other organizational policies (provided in Documents page)",
    ],
    tip: "Record the meeting (with consent) as a backup, but always create formal written minutes signed by the Secretary.",
  },
  {
    number: 6,
    title: "Open a Business Bank Account",
    timeline: "Week 3",
    status: "external",
    description: "Open a dedicated nonprofit bank account. Never mix personal and organizational funds.",
    details: [
      "Bring: EIN confirmation letter, Articles of Incorporation, Bylaws, Board Resolution authorizing the account, government-issued ID for signers",
      "Choose a bank with nonprofit-friendly accounts (many banks waive fees for 501(c)(3) organizations)",
      "Set up the account with at least two authorized signers (typically the Treasurer and Chairperson/Executive Director)",
      "Consider banks with good online banking, bill pay, and integration with accounting software",
      "Recommended DC-area banks for nonprofits: Bank of America, PNC, TD Bank, Industrial Bank (DC-based, minority-owned)",
      "Open both a checking account and a savings account (for reserves/endowment seed)",
    ],
    cost: "Varies (many banks offer free nonprofit accounts)",
    tip: "Ask about the bank's nonprofit program — many offer free checking, waived minimums, and even matching gift programs.",
  },
  {
    number: 7,
    title: "Apply for 501(c)(3) Tax-Exempt Status",
    timeline: "Week 3-4 (file); 3-6 months (approval)",
    status: "external",
    description: "File IRS Form 1023 (or 1023-EZ if eligible) to obtain federal tax-exempt status as a 501(c)(3) public charity.",
    details: [
      "Form 1023-EZ (simplified): Available if projected annual gross receipts are under $50,000 and total assets under $250,000. Filed online through pay.gov.",
      "Form 1023 (full application): Required if above the 1023-EZ thresholds. More detailed but provides stronger documentation.",
      "You MUST include: organizing document (Articles), EIN, description of activities, financial projections, compensation info, conflict of interest policy",
      "The narrative description of activities is critical — it should detail every program, who you serve, how you serve them, and why it qualifies as charitable/educational",
      "Financial projections should cover 3 years of projected revenue and expenses",
      "IRS processing time: 1023-EZ takes 2-4 weeks; Full 1023 takes 3-6 months (sometimes longer)",
      "Once approved, you receive a Determination Letter — this is your most important document. Guard it carefully.",
      "Your 501(c)(3) status is retroactive to the date of incorporation IF you file within 27 months of incorporation",
    ],
    documents: [
      "IRS Form 1023 Narrative (draft provided in Documents page)",
      "3-Year Financial Projections (template provided in Documents page)",
    ],
    links: [
      { label: "IRS Form 1023-EZ (Pay.gov)", url: "https://www.pay.gov/public/form/start/62759871" },
      { label: "IRS Form 1023 Instructions", url: "https://www.irs.gov/forms-pubs/about-form-1023" },
      { label: "IRS Exempt Org Guide", url: "https://www.irs.gov/charities-non-profits/application-for-recognition-of-exemption" },
    ],
    cost: "$275 (Form 1023-EZ) or $600 (Full Form 1023)",
    tip: "Based on your financial projections ($125K+ in Year 1), you'll likely need the full Form 1023. If you start smaller than projected and stay under $50K for the first 3 years, you may qualify for the simpler 1023-EZ instead.",
  },
  {
    number: 8,
    title: "Register for DC Tax Exemption",
    timeline: "After 501(c)(3) approval",
    status: "external",
    description: "Apply for DC sales tax exemption and DC income/franchise tax exemption separately from your federal status.",
    details: [
      "DC does NOT automatically recognize your federal 501(c)(3) status — you must apply separately",
      "File the DC Franchise Tax Exemption application with the DC Office of Tax and Revenue (OTR)",
      "Apply for DC Sales and Use Tax Exemption Certificate (Form OTR-368)",
      "You'll need: IRS Determination Letter, Articles of Incorporation, Bylaws, most recent financial statements",
      "DC exemption covers: franchise tax, sales tax on purchases, and personal property tax",
      "Renewal: DC tax exemption must be renewed annually by filing the DC Exempt Organization Annual Report",
    ],
    links: [
      { label: "DC Office of Tax and Revenue", url: "https://otr.cfo.dc.gov" },
    ],
    cost: "Free",
  },
  {
    number: 9,
    title: "Register for Charitable Solicitation",
    timeline: "Before any fundraising",
    status: "external",
    description: "Register with DC and any other state where you plan to solicit donations. This is legally required before fundraising.",
    details: [
      "DC requires registration with the Office of the Attorney General before soliciting charitable contributions",
      "File the Charitable Solicitation Registration form with the DC AG's Charities Division",
      "If you plan to fundraise online (which reaches all states), you may need to register in multiple states — this is called 'multi-state registration'",
      "Consider using a service like Harbor Compliance or the Multistate Registration Filing Portal (currently 42 states participate)",
      "Registration is typically renewed annually",
      "Some states have exemptions for organizations under certain revenue thresholds",
    ],
    links: [
      { label: "DC Attorney General - Charities", url: "https://oag.dc.gov/charities" },
      { label: "Multistate Filing Portal", url: "https://www.multistatefiling.org" },
    ],
    cost: "$0-$50 per state (varies); services cost $500-$2,000+ for multi-state",
    tip: "Start with DC registration only. Add other states as your fundraising footprint grows.",
  },
  {
    number: 10,
    title: "Obtain Required Licenses & Permits",
    timeline: "Before operations begin",
    status: "external",
    description: "Obtain DC business licenses and any permits required for your training programs.",
    details: [
      "Apply for a DC Basic Business License (BBL) through the DC DLCP",
      "If operating a physical training facility, obtain a Certificate of Occupancy",
      "Check zoning requirements for your training facility location",
      "Depending on programs, you may need: educational institution license, contractor's license compliance, OSHA compliance for hands-on training",
      "Obtain appropriate insurance: General Liability, Professional Liability (E&O), Directors & Officers (D&O), Workers' Compensation, Property Insurance",
      "If your programs involve minors, ensure compliance with DC's youth protection regulations and background check requirements",
    ],
    links: [
      { label: "DC Business License Portal", url: "https://dlcp.dc.gov/service/basic-business-license" },
    ],
    cost: "$125-$500+ (BBL); Insurance varies ($2,000-$10,000+ annually)",
  },
  {
    number: 11,
    title: "Set Up Financial Systems",
    timeline: "Month 1-2",
    status: "action-required",
    description: "Establish accounting systems, financial controls, and reporting processes that meet nonprofit standards.",
    details: [
      "Choose accounting software designed for nonprofits: QuickBooks Nonprofit, Aplos, Wave (free), or Sage Intacct (larger orgs)",
      "Set up your Chart of Accounts following nonprofit accounting standards (unrestricted, temporarily restricted, permanently restricted funds)",
      "Establish a fiscal year (recommend January 1 - December 31 for simplicity, or July 1 - June 30 to align with many grant cycles)",
      "Create a budget for your first year of operations",
      "Implement dual-signature requirements for expenditures over a certain threshold (e.g., $5,000)",
      "Set up a process for tracking restricted vs. unrestricted donations",
      "Plan for annual audits once your revenue exceeds $250,000 (IRS best practice; some grantors require it sooner)",
    ],
    tip: "QuickBooks Online Plus with the Nonprofit version is the most popular choice for small-to-medium nonprofits. It integrates with most donation platforms and payroll services.",
  },
  {
    number: 12,
    title: "Apply for Grants & Launch Fundraising",
    timeline: "Month 2-6",
    status: "action-required",
    description: "Begin seeking funding through grants, individual donations, corporate sponsorships, and program fees.",
    details: [
      "Create a fundraising plan with specific targets and strategies",
      "Apply for foundation grants: Robert Wood Johnson Foundation, Kellogg Foundation, local DC community foundations",
      "Register for DC government grants through the DC Office of Partnerships and Grant Services",
      "Set up online donation capability (Stripe, PayPal Giving Fund, Network for Good, or Donorbox)",
      "Launch a Giving Tuesday campaign and annual fund appeal",
      "Research and apply for federal grants through Grants.gov (register for SAM.gov first — this takes 2-4 weeks)",
      "Build a prospect list of local businesses for corporate sponsorships",
      "Consider applying for DC's Workforce Development grants through the Department of Employment Services (DOES)",
    ],
    links: [
      { label: "Grants.gov", url: "https://www.grants.gov" },
      { label: "SAM.gov Registration", url: "https://sam.gov" },
      { label: "DC Partnerships & Grants", url: "https://opgs.dc.gov" },
    ],
    tip: "Register on SAM.gov immediately — it takes 2-4 weeks to process and is required for ALL federal grants.",
  },
  {
    number: 13,
    title: "File Annual Reports & Maintain Compliance",
    timeline: "Ongoing (annually)",
    status: "action-required",
    description: "Stay in good standing by filing all required annual reports and maintaining compliance with DC and federal requirements.",
    details: [
      "IRS Form 990 (or 990-EZ): Due by the 15th day of the 5th month after your fiscal year ends. This is PUBLIC — it will be visible on GuideStar/Candid.",
      "DC Biennial Report: File with the DC DLCP every 2 years to maintain your DC corporate status ($80 fee)",
      "DC Exempt Organization Annual Report: File with DC OTR to maintain DC tax exemption",
      "DC Charitable Solicitation Renewal: File annually with the DC Attorney General",
      "Board meeting minutes: Document all board meetings (your bylaws require at least quarterly meetings)",
      "Update your Conflict of Interest disclosures annually",
      "Conduct an annual financial review or audit as your budget grows",
      "File any state registrations renewals for states where you solicit donations",
    ],
    links: [
      { label: "IRS Form 990", url: "https://www.irs.gov/forms-pubs/about-form-990" },
    ],
    tip: "Set calendar reminders for every filing deadline. Missing IRS Form 990 three years in a row automatically REVOKES your 501(c)(3) status.",
  },
];

function StepCard({ step }: { step: Step }) {
  const [expanded, setExpanded] = useState(false);

  const statusConfig = {
    "ready": { icon: CheckCircle, color: "text-secondary", bg: "bg-secondary/10", label: "Document Ready" },
    "action-required": { icon: AlertCircle, color: "text-accent", bg: "bg-accent/10", label: "Action Required" },
    "external": { icon: ExternalLink, color: "text-primary", bg: "bg-primary/10", label: "External Filing" },
  };

  const config = statusConfig[step.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-2xl overflow-hidden bg-card hover:shadow-lg transition-shadow"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 md:p-8 text-left flex items-start gap-4 md:gap-6"
      >
        <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-display font-bold text-lg">
          {step.number}
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${config.bg} ${config.color}`}>
              <config.icon size={12} />
              {config.label}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={12} /> {step.timeline}
            </span>
          </div>
          <h3 className="text-lg md:text-xl font-display font-bold text-foreground mb-2">{step.title}</h3>
          <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
        </div>
        <div className="flex-shrink-0 mt-1">
          {expanded ? <ChevronUp size={20} className="text-muted-foreground" /> : <ChevronDown size={20} className="text-muted-foreground" />}
        </div>
      </button>

      {expanded && (
        <div className="px-6 md:px-8 pb-6 md:pb-8 space-y-6">
          <div>
            <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">What To Do</h4>
            <ul className="space-y-2">
              {step.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Circle size={6} className="mt-2 flex-shrink-0 text-primary" fill="currentColor" />
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {step.documents && (
            <div>
              <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Documents Needed</h4>
              <div className="flex flex-wrap gap-2">
                {step.documents.map((doc, i) => (
                  <span key={i} className="inline-flex items-center gap-1 px-3 py-2 bg-secondary/10 text-secondary rounded-lg text-sm font-medium">
                    <FileText size={14} /> {doc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {step.links && (
            <div>
              <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Helpful Links</h4>
              <div className="flex flex-wrap gap-2">
                {step.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink size={14} /> {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {step.cost && (
            <div className="flex items-center gap-2">
              <DollarSign size={16} className="text-accent" />
              <span className="text-sm font-bold text-foreground">Cost:</span>
              <span className="text-sm text-muted-foreground">{step.cost}</span>
            </div>
          )}

          {step.tip && (
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl">
              <div className="flex items-start gap-2">
                <Star size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground"><span className="font-bold">Pro Tip:</span> {step.tip}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function StartupGuide() {
  return (
    <div className="min-h-screen page-gradient">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <ClipboardCheck size={16} />
              DC NONPROFIT FORMATION
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Startup <span className="text-primary">Checklist</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Your complete step-by-step guide to forming and registering From The Ground Up
              as a 501(c)(3) nonprofit in Washington, DC. Follow these steps in order.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold">
                <CheckCircle size={14} /> Document Ready
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full font-bold">
                <AlertCircle size={14} /> Action Required
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-bold">
                <ExternalLink size={14} /> External Filing
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: MapPin, label: "Jurisdiction", value: "Washington, DC" },
              { icon: Landmark, label: "Tax Status", value: "501(c)(3)" },
              { icon: FileText, label: "Documents", value: "15+ Prepared" },
              { icon: DollarSign, label: "Est. Total Cost", value: "$955-$1,500" },
            ].map((stat, i) => (
              <div key={stat.label}>
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-display font-bold text-foreground text-lg">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4 text-center">Formation Steps</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Complete these steps in order. Each step builds on the previous one.
          </p>
          <div className="space-y-4">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Estimated Timeline</h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            From start to full operational status, expect 3-6 months for the core formation process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: "Formation", time: "Weeks 1-4", items: "Name search, Articles of Incorporation, EIN, Board meeting, Bank account" },
              { phase: "Tax Exemption", time: "Months 1-6", items: "501(c)(3) application, DC tax exemption, Charitable solicitation registration" },
              { phase: "Operations", time: "Months 2-6", items: "Licenses & permits, Financial systems, Insurance, Fundraising launch" },
            ].map((p, i) => (
              <div key={p.phase} className="p-6 rounded-2xl border border-border bg-background text-left">
                <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{p.phase}</div>
                <div className="font-display font-bold text-foreground text-xl mb-3">{p.time}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            All Your Documents Are Ready
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every policy, template, and draft document you need has been prepared.
            View them all on the Documents page.
          </p>
          <Link
            href="/documents"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            View All Documents <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
