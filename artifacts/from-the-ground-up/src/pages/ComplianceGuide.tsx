import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Shield, FileText, Calendar, AlertTriangle, CheckCircle, Building2,
  DollarSign, Users, HardHat, Heart, Scale, ArrowRight, Clock,
  Globe, BookOpen, ChevronDown, ChevronUp, Star, Target
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface ComplianceItem {
  id: string;
  title: string;
  agency: string;
  form: string;
  frequency: string;
  dueDate: string;
  fee: string;
  description: string;
  steps: string[];
  consequences: string;
  tips: string;
  website: string;
}

const federalFilings: ComplianceItem[] = [
  {
    id: "irs-1023",
    title: "IRS Form 1023 — Application for Tax-Exempt Status",
    agency: "Internal Revenue Service",
    form: "Form 1023 or 1023-EZ",
    frequency: "One-time",
    dueDate: "Submit within 27 months of incorporation for retroactive exemption",
    fee: "$600 (Form 1023) or $275 (Form 1023-EZ)",
    description: "The foundational filing that establishes FTGU as a 501(c)(3) tax-exempt organization. Without this, donations are not tax-deductible and FTGU cannot receive most grant funding.",
    steps: [
      "Complete Articles of Incorporation with required IRS language (purpose, dissolution clauses)",
      "Obtain EIN from IRS (Form SS-4, free, instant online)",
      "Prepare organizational documents (bylaws, conflict of interest policy, board minutes)",
      "Complete Form 1023 narrative describing programs, governance, and financials",
      "Include 3-year financial projections (budget)",
      "Attach all required schedules and supporting documents",
      "Pay user fee and submit via Pay.gov",
      "Respond promptly to any IRS follow-up questions",
      "Receive determination letter (typically 3–6 months for 1023-EZ, 6–12 months for full 1023)",
    ],
    consequences: "Cannot legally claim tax-exempt status, cannot receive tax-deductible donations, ineligible for most grants",
    tips: "Consider filing Form 1023-EZ if projected gross receipts are under $50,000 for 3 years and total assets under $250,000. Much faster processing. However, full 1023 provides stronger foundation for larger organizations.",
    website: "https://www.irs.gov/forms-pubs/about-form-1023",
  },
  {
    id: "irs-990",
    title: "IRS Form 990 — Annual Information Return",
    agency: "Internal Revenue Service",
    form: "990, 990-EZ, or 990-N (e-Postcard)",
    frequency: "Annual",
    dueDate: "15th day of 5th month after fiscal year end (May 15 for calendar year)",
    fee: "$0",
    description: "The annual public disclosure of FTGU's finances, governance, programs, and compensation. This is the most important annual filing — it's PUBLIC and funders, donors, and media will review it.",
    steps: [
      "Determine which form to file: 990-N (under $50K revenue), 990-EZ ($50K–$200K), full 990 (over $200K)",
      "Compile financial statements for fiscal year",
      "Prepare program service accomplishments narrative",
      "List all officers, directors, key employees, and compensation",
      "Complete Schedule A (public charity status test)",
      "Complete any other applicable schedules",
      "Have board treasurer or finance committee review before filing",
      "File electronically (mandatory for 990 and 990-EZ)",
      "Make publicly available on FTGU website and via Candid/GuideStar",
    ],
    consequences: "Automatic revocation of tax-exempt status if not filed for 3 consecutive years. Penalties for late filing.",
    tips: "Your 990 is your annual marketing document to funders. Write the narrative sections well — they're public. File on time EVERY year. Set up calendar reminders 90 days before due date.",
    website: "https://www.irs.gov/charities-non-profits/annual-filing-requirements",
  },
  {
    id: "irs-990t",
    title: "IRS Form 990-T — Unrelated Business Income",
    agency: "Internal Revenue Service",
    form: "Form 990-T",
    frequency: "Annual (if applicable)",
    dueDate: "Same as Form 990",
    fee: "$0 to file; tax due on net UBI over $1,000",
    description: "Required if FTGU earns more than $1,000 in gross income from a regularly-carried-on trade or business not substantially related to its exempt purpose.",
    steps: [
      "Identify any unrelated business activities (e.g., facility rental to non-mission entities, merchandise sales)",
      "Calculate gross income and deductions from unrelated activities",
      "If net UBI exceeds $1,000, file Form 990-T",
      "Pay estimated tax quarterly if UBI tax expected to exceed $500",
    ],
    consequences: "Tax penalties and interest. Excessive UBI can jeopardize tax-exempt status.",
    tips: "Most of FTGU's activities (training, consulting, community repairs) ARE related to mission and won't trigger UBI. Document the mission connection for any activity that could be questioned.",
    website: "https://www.irs.gov/forms-pubs/about-form-990-t",
  },
  {
    id: "sam-registration",
    title: "SAM.gov Registration",
    agency: "General Services Administration",
    form: "SAM.gov profile",
    frequency: "Annual renewal",
    dueDate: "Must be active to receive federal funds; renew annually",
    fee: "$0",
    description: "Registration in the System for Award Management is REQUIRED before FTGU can receive any federal grant funding. This includes DOL, DOES pass-through, and all federal awards.",
    steps: [
      "Go to SAM.gov and create an account",
      "Obtain a Unique Entity ID (UEI) — replaces DUNS number",
      "Complete entity registration with organization details",
      "Provide banking information for electronic fund transfers",
      "Complete required representations and certifications",
      "Submit registration (processing takes 7–10 business days)",
      "Set annual renewal reminder — registration expires yearly",
    ],
    consequences: "Cannot receive any federal grant funding. Applications will be rejected.",
    tips: "Register IMMEDIATELY upon incorporation. Don't wait until you have a grant application — the process takes 1–2 weeks and you'll miss deadlines.",
    website: "https://sam.gov",
  },
];

const dcFilings: ComplianceItem[] = [
  {
    id: "dc-bra25",
    title: "DC Biennial Report — Form BRA-25",
    agency: "DC Department of Licensing and Consumer Protection (DLCP)",
    form: "BRA-25",
    frequency: "Every 2 years",
    dueDate: "April 1 of the year after incorporation, then every 2nd year",
    fee: "$80",
    description: "Maintains FTGU's good standing with the District of Columbia. Required to keep the organization legally recognized as a DC nonprofit corporation.",
    steps: [
      "Log into DC DLCP online portal (business.dc.gov)",
      "Verify and update registered agent and office address",
      "Confirm current officers and directors",
      "Pay $80 filing fee",
      "Submit before April 1 deadline",
    ],
    consequences: "Administrative dissolution of the DC nonprofit corporation. Loss of good standing, inability to conduct business.",
    tips: "Set a reminder 60 days before the April 1 deadline every other year. Keep your registered agent and address current at all times.",
    website: "https://business.dc.gov",
  },
  {
    id: "dc-charitable",
    title: "DC Charitable Solicitation License",
    agency: "DC DLCP (formerly DCRA)",
    form: "Basic Business License (BBL) — Charitable Solicitation",
    frequency: "Every 2 years",
    dueDate: "End of month prior to registration month (check your specific date)",
    fee: "$412.50",
    description: "REQUIRED before FTGU can solicit ANY donations in the District of Columbia. This includes online fundraising, events, direct mail, and in-person asks.",
    steps: [
      "Apply for Basic Business License with Charitable Solicitation endorsement",
      "Provide IRS determination letter (or fiscal sponsor letter)",
      "Submit most recent Form 990 (or financial statements if new)",
      "Provide officer/director list and organizational documents",
      "Pay $412.50 fee",
      "Renew biennially — track your specific renewal date",
    ],
    consequences: "ILLEGAL to solicit donations in DC without this license. Fines, penalties, and reputational damage.",
    tips: "Apply for this IMMEDIATELY after receiving 501(c)(3) determination. You CANNOT legally fundraise in DC without it. If using a fiscal sponsor, they may already have coverage.",
    website: "https://dlcp.dc.gov",
  },
  {
    id: "dc-fr164",
    title: "DC Tax Exemption — Form FR-164",
    agency: "DC Office of Tax and Revenue (OTR)",
    form: "FR-164",
    frequency: "One-time application + 5-year renewal",
    dueDate: "Upon receipt of IRS determination letter",
    fee: "$0",
    description: "Exempts FTGU from DC sales tax, use tax, and personal property tax. Must have IRS determination letter first.",
    steps: [
      "Complete Form FR-164 application",
      "Attach IRS determination letter",
      "Attach Articles of Incorporation and bylaws",
      "Submit to OTR (can mail or submit in person)",
      "Receive DC tax exemption certificate",
      "Renew every 5 years (OTR will send reminder)",
    ],
    consequences: "Must pay DC sales tax on purchases and may owe other DC taxes unnecessarily.",
    tips: "Keep your DC exemption certificate readily available — you'll need to present it to vendors for tax-exempt purchases.",
    website: "https://otr.cfo.dc.gov",
  },
  {
    id: "dc-fr500",
    title: "DC Tax Registration — Form FR-500",
    agency: "DC Office of Tax and Revenue (OTR)",
    form: "FR-500",
    frequency: "One-time",
    dueDate: "At formation / before hiring employees",
    fee: "$0",
    description: "Registers FTGU with DC OTR for all applicable taxes including withholding, unemployment, and any applicable business taxes.",
    steps: [
      "Complete Form FR-500 (Combined Business Tax Registration)",
      "Register for applicable taxes: withholding, unemployment, workers' comp",
      "Submit online through MyTax.DC.gov",
      "Receive DC tax identification number",
    ],
    consequences: "Cannot legally hire employees or conduct business requiring tax filings in DC.",
    tips: "Do this before your first hire. You'll need your EIN and DC incorporation documents.",
    website: "https://mytax.dc.gov",
  },
  {
    id: "dc-unemployment",
    title: "DC Unemployment Insurance",
    agency: "DC Department of Employment Services (DOES)",
    form: "Employer registration",
    frequency: "Quarterly tax filing once registered",
    dueDate: "Quarterly (last day of month following quarter end)",
    fee: "Tax rate varies by experience (new employers: ~2.7%)",
    description: "Required for all DC employers. FTGU must register and file quarterly unemployment insurance tax returns.",
    steps: [
      "Register with DOES as a new employer",
      "File quarterly Employer's Contribution & Wage Reports",
      "Pay quarterly unemployment tax",
      "Respond promptly to any unemployment claims",
    ],
    consequences: "Tax penalties, interest, and potential legal action. Cannot operate legally as an employer in DC.",
    tips: "501(c)(3) organizations can elect to be 'reimbursing employers' — paying actual unemployment claims instead of quarterly taxes. This can save money if claims are rare.",
    website: "https://does.dc.gov/service/unemployment-insurance",
  },
];

const employmentLaw: ComplianceItem[] = [
  {
    id: "dc-min-wage",
    title: "DC Minimum Wage Compliance",
    agency: "DC Department of Employment Services",
    form: "N/A (workplace poster required)",
    frequency: "Ongoing",
    dueDate: "Continuous compliance",
    fee: "$0",
    description: "DC minimum wage is among the highest in the nation. All FTGU employees must be paid at least the DC minimum wage, with overtime pay for non-exempt employees over 40 hours/week.",
    steps: [
      "Post current DC minimum wage poster in workplace",
      "Ensure all employee pay meets or exceeds DC minimum wage",
      "Track hours for non-exempt employees for overtime calculation",
      "Review annually — DC minimum wage increases with inflation (CPI)",
    ],
    consequences: "Back pay, penalties, lawsuits, and Department of Employment Services enforcement actions.",
    tips: "DC minimum wage is indexed to CPI and increases annually. Check the current rate every July 1.",
    website: "https://does.dc.gov/service/office-wage-hour",
  },
  {
    id: "dc-paid-leave",
    title: "DC Paid Family Leave (Universal Paid Leave)",
    agency: "DC Office of Paid Family Leave",
    form: "Employer registration + quarterly reporting",
    frequency: "Quarterly",
    dueDate: "Quarterly with payroll tax filings",
    fee: "0.26% of employee wages (employer-paid)",
    description: "DC requires all employers to contribute to the Universal Paid Leave fund. Employees can receive paid leave for family, medical, and prenatal needs.",
    steps: [
      "Register with DC Office of Paid Family Leave",
      "Withhold and remit 0.26% of covered employee wages quarterly",
      "File quarterly wage reports",
      "Inform employees of their paid leave benefits",
    ],
    consequences: "Penalties for non-compliance with DC's paid leave mandate.",
    tips: "This is an employer-paid tax — do NOT deduct from employee wages. Budget for it in your personnel costs.",
    website: "https://dcpaidfamilyleave.dc.gov",
  },
  {
    id: "workers-comp",
    title: "Workers' Compensation Insurance",
    agency: "DC Department of Insurance, Securities, and Banking",
    form: "Insurance policy",
    frequency: "Annual policy renewal",
    dueDate: "Must be in place before first employee starts",
    fee: "Varies by payroll and risk classification (construction training = higher rates)",
    description: "MANDATORY for all DC employers. Especially critical for FTGU given hands-on construction training activities. Covers medical costs and lost wages for work-related injuries.",
    steps: [
      "Obtain workers' comp insurance from licensed DC carrier",
      "Classify employees correctly (construction/training = higher risk class)",
      "Post Certificate of Insurance in workplace",
      "Report any workplace injuries promptly to carrier",
      "Maintain safety program to control premiums",
    ],
    consequences: "Criminal penalties, fines up to $10,000, personal liability for employer, and stop-work orders.",
    tips: "FTGU's construction training activities mean higher workers' comp rates. Invest in a strong safety program to keep premiums manageable. Consider a safety committee.",
    website: "https://disb.dc.gov",
  },
];

const safetyCompliance: ComplianceItem[] = [
  {
    id: "osha-general",
    title: "OSHA General Duty Clause Compliance",
    agency: "Occupational Safety and Health Administration",
    form: "OSHA 300 Log (injury/illness recordkeeping)",
    frequency: "Ongoing + annual posting",
    dueDate: "OSHA 300A summary posted Feb 1 – April 30 annually",
    fee: "$0 for compliance; fines for violations up to $156,259/willful",
    description: "FTGU must maintain a safe workplace under OSHA's General Duty Clause. Given construction training activities, FTGU must follow OSHA construction standards (29 CFR 1926).",
    steps: [
      "Develop written safety program covering all training activities",
      "Provide required PPE (hard hats, safety glasses, gloves, steel-toe boots)",
      "Maintain OSHA 300 Log of workplace injuries and illnesses",
      "Post OSHA 300A annual summary (February 1 – April 30)",
      "Conduct regular safety training for all staff and students",
      "Maintain SDS (Safety Data Sheets) for all chemicals on site",
      "Conduct hazard assessments for each training area",
      "Report fatalities within 8 hours, hospitalizations within 24 hours",
    ],
    consequences: "Fines up to $15,625 per serious violation, $156,259 per willful/repeated violation. Criminal penalties for willful violations causing death.",
    tips: "Designate a safety officer. Conduct monthly safety inspections. Document everything. Consider OSHA's free on-site consultation program for small employers — they help you find hazards WITHOUT issuing citations.",
    website: "https://www.osha.gov/consultation",
  },
  {
    id: "osha-training",
    title: "OSHA Construction Training Requirements",
    agency: "OSHA",
    form: "Training records and certificates",
    frequency: "Ongoing",
    dueDate: "Before employees/students engage in construction activities",
    fee: "Cost of training programs",
    description: "All FTGU instructors and students working on construction projects must receive appropriate OSHA safety training for the tasks they perform.",
    steps: [
      "All instructors: OSHA 30-Hour Construction certification",
      "All students: OSHA 10-Hour Construction certification (include in curriculum)",
      "Task-specific training: fall protection, scaffolding, electrical safety, confined spaces",
      "Document all training with dates, content, instructor, and attendee signatures",
      "Provide refresher training annually",
      "Maintain training records for at least 5 years",
    ],
    consequences: "OSHA citations, fines, and liability exposure for incidents involving untrained workers.",
    tips: "Make OSHA 10 a graduation requirement for every student — it's an industry-standard credential and demonstrates FTGU's commitment to safety.",
    website: "https://www.osha.gov/training/outreach",
  },
];

const insuranceRequirements = [
  { type: "General Liability", coverage: "$1M per occurrence / $2M aggregate", required: "Essential", notes: "Covers bodily injury, property damage, personal injury claims. Construction training activities increase risk." },
  { type: "Workers' Compensation", coverage: "Statutory limits (DC)", required: "Legally required", notes: "Mandatory for all DC employers. Higher premiums for construction classification." },
  { type: "Directors & Officers (D&O)", coverage: "$1M–$2M", required: "Highly recommended", notes: "Protects board members from personal liability for governance decisions." },
  { type: "Professional Liability (E&O)", coverage: "$1M", required: "Recommended", notes: "Covers claims arising from training services, consulting, or professional advice." },
  { type: "Commercial Property", coverage: "Replacement value of assets", required: "Essential", notes: "Covers tools, equipment, furniture, and facility improvements." },
  { type: "Commercial Auto", coverage: "$1M", required: "If FTGU owns/leases vehicles", notes: "Required if transporting students, materials, or equipment." },
  { type: "Umbrella/Excess Liability", coverage: "$2M–$5M", required: "Recommended", notes: "Additional coverage above underlying policies. Important given construction risk profile." },
  { type: "Cyber Liability", coverage: "$500K–$1M", required: "Recommended", notes: "Covers data breaches involving student/donor personal information." },
  { type: "Employment Practices Liability (EPLI)", coverage: "$1M", required: "Recommended", notes: "Covers claims of discrimination, wrongful termination, harassment by employees." },
  { type: "Event Insurance", coverage: "Per event", required: "As needed", notes: "For fundraising events, open houses, community activities." },
];

function ComplianceSection({ title, items, icon: Icon }: { title: string; items: ComplianceItem[]; icon: any }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
        <Icon size={24} className="text-primary" />
        {title}
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="glass-panel rounded-2xl overflow-hidden">
            <button
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className="w-full p-6 text-left flex items-start justify-between gap-4"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                <div className="flex flex-wrap gap-3 text-xs">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full font-bold">{item.agency}</span>
                  <span className="px-2 py-1 bg-white/10 text-foreground/60 rounded-full">{item.frequency}</span>
                  <span className="px-2 py-1 bg-white/10 text-foreground/60 rounded-full">{item.fee}</span>
                </div>
              </div>
              {expandedId === item.id ? <ChevronUp size={20} className="text-foreground/40" /> : <ChevronDown size={20} className="text-foreground/40" />}
            </button>

            {expandedId === item.id && (
              <div className="border-t border-white/10 p-6 space-y-5">
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-1">Form</div>
                    <div className="text-foreground font-bold text-sm">{item.form}</div>
                  </div>
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-1">Due Date</div>
                    <div className="text-foreground font-bold text-sm">{item.dueDate}</div>
                  </div>
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-foreground/40 mb-1">Fee</div>
                    <div className="text-foreground font-bold text-sm">{item.fee}</div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3">Step-by-Step Process</h4>
                  <ol className="space-y-2">
                    {item.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/70 text-sm">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-red-400 mb-1">Consequences of Non-Compliance</div>
                      <div className="text-foreground/70 text-sm">{item.consequences}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                  <div className="flex items-start gap-2">
                    <Star size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-green-700 mb-1">Pro Tips</div>
                      <div className="text-foreground/70 text-sm">{item.tips}</div>
                    </div>
                  </div>
                </div>

                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:text-primary/80 transition-colors"
                >
                  Official Website <ArrowRight size={14} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ComplianceGuide() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
            <Shield size={16} /> Legal & Regulatory
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-6">
            Compliance <span className="text-primary">Guide</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Every federal, DC, employment, safety, and insurance requirement FTGU must meet — with step-by-step
            instructions, deadlines, fees, consequences, and pro tips for each filing.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <AlertTriangle size={24} className="text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-amber-900 mb-2">Important Legal Disclaimer</h3>
              <p className="text-amber-900/80 text-sm sm:text-base">
                This guide is for informational and planning purposes only and does not constitute legal, tax, or professional advice.
                Laws and regulations change frequently. Consult with a qualified attorney and CPA before making compliance decisions.
                Have all documents reviewed by a legal professional before filing.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Federal Filings", count: federalFilings.length, icon: Globe },
            { label: "DC Requirements", count: dcFilings.length, icon: Building2 },
            { label: "Employment Law", count: employmentLaw.length, icon: Users },
            { label: "Safety/OSHA", count: safetyCompliance.length, icon: HardHat },
          ].map((stat) => (
            <div key={stat.label} className="glass-panel rounded-xl p-4 text-center">
              <stat.icon size={24} className="text-primary mx-auto mb-2" />
              <div className="text-2xl font-display font-black text-foreground">{stat.count}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-foreground/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <ComplianceSection title="Federal Requirements (IRS & Federal)" items={federalFilings} icon={Globe} />
        <ComplianceSection title="District of Columbia Requirements" items={dcFilings} icon={Building2} />
        <ComplianceSection title="Employment & Labor Law" items={employmentLaw} icon={Users} />
        <ComplianceSection title="Safety & OSHA Compliance" items={safetyCompliance} icon={HardHat} />

        <motion.div {...fadeIn} className="mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
            <Shield size={24} className="text-primary" />
            Insurance Requirements
          </h2>
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-foreground/50">Type</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-foreground/50">Recommended Coverage</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-foreground/50">Status</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-foreground/50">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {insuranceRequirements.map((ins) => (
                    <tr key={ins.type} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 font-bold text-foreground text-sm">{ins.type}</td>
                      <td className="py-3 px-4 text-foreground/70 text-sm">{ins.coverage}</td>
                      <td className="py-3 px-4">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                          ins.required === "Legally required" ? "bg-red-500/20 text-red-400" :
                          ins.required === "Essential" ? "bg-amber-500/20 text-amber-400" :
                          "bg-blue-500/20 text-blue-400"
                        }`}>
                          {ins.required}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground/60 text-sm max-w-xs">{ins.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="mb-12">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
            <Calendar size={24} className="text-primary" />
            Annual Compliance Calendar
          </h2>
          <div className="glass-panel rounded-2xl p-6">
            <div className="space-y-4">
              {[
                { month: "January", tasks: ["Begin Form 990 preparation", "Review and update insurance policies", "Check SAM.gov registration renewal date", "Workers' comp audit (if applicable)"] },
                { month: "February", tasks: ["Post OSHA 300A annual summary (through April 30)", "Q4 unemployment tax filing deadline (Jan 31)", "Review DC paid family leave contributions"] },
                { month: "March", tasks: ["Prepare for DC Biennial Report (if due year)", "Annual board conflict of interest disclosures", "Review and update safety program"] },
                { month: "April", tasks: ["DC Biennial Report due April 1 (every other year)", "Remove OSHA 300A posting (after April 30)", "Q1 unemployment tax filing deadline (April 30)"] },
                { month: "May", tasks: ["Form 990 due May 15 (calendar year filers)", "Annual financial audit planning", "DC charitable solicitation renewal (check your date)"] },
                { month: "June", tasks: ["Mid-year compliance review with attorney", "Update employee handbook if needed", "Safety equipment inspection and replacement"] },
                { month: "July", tasks: ["DC minimum wage update check (effective July 1 annually)", "Q2 unemployment tax filing deadline (July 31)", "Mid-year financial review with board"] },
                { month: "August", tasks: ["Begin annual report preparation for donors", "Review and update all organizational policies", "SAM.gov renewal check"] },
                { month: "September", tasks: ["Annual board governance review", "Update conflict of interest disclosures", "Review insurance coverage adequacy"] },
                { month: "October", tasks: ["Q3 unemployment tax filing deadline (October 31)", "Begin next year's budget planning", "Review DC tax exemption renewal date"] },
                { month: "November", tasks: ["Prepare IRS donor acknowledgment letters for year-end giving", "Open enrollment for employee benefits (if applicable)", "Annual safety training refresher"] },
                { month: "December", tasks: ["Year-end financial close procedures", "Prepare W-2s and 1099s for January filing", "Document board meeting decisions and actions", "Archive annual records per retention policy"] },
              ].map((month) => (
                <div key={month.month} className="flex gap-4">
                  <div className="w-24 flex-shrink-0">
                    <div className="text-sm font-bold text-primary">{month.month}</div>
                  </div>
                  <ul className="flex-1 space-y-1">
                    {month.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/60 text-sm">
                        <CheckCircle size={12} className="text-foreground/30 mt-1 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="mt-16 text-center">
          <div className="section-crimson rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4">Stay Compliant, Stay Protected</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Use the admin Compliance Calendar to track all deadlines automatically.
              Consult with a DC nonprofit attorney and CPA annually to ensure full compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/admin/vault/fundraising" className="px-8 py-4 bg-white text-primary font-bold uppercase tracking-wider hover:bg-white/90 transition-colors flex items-center gap-2 rounded-lg">
                Fundraising Playbook <DollarSign size={18} />
              </Link>
              <Link href="/admin/vault/strategic-plan" className="px-8 py-4 bg-white/15 text-white font-bold uppercase tracking-wider hover:bg-white/25 transition-colors flex items-center gap-2 rounded-lg border border-white/20">
                25-Year Strategic Plan <Target size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
