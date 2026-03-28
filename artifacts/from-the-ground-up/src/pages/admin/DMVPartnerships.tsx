import { useState } from "react";
import {
  Handshake,
  Building2,
  GraduationCap,
  Landmark,
  HardHat,
  ExternalLink,
  MapPin,
  DollarSign,
  Users,
  Star,
  ChevronDown,
  ChevronRight,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";

type Priority = "high" | "medium" | "standard";

interface Opportunity {
  title: string;
  organization: string;
  type: string;
  location: string;
  description: string;
  relevance: string;
  actionItems: string[];
  link?: string;
  estimatedValue?: string;
  priority: Priority;
}

const priorityStyles: Record<Priority, string> = {
  high: "bg-red-100 text-red-800 border-red-200",
  medium: "bg-amber-100 text-amber-800 border-amber-200",
  standard: "bg-blue-100 text-blue-800 border-blue-200",
};

const majorProjects: Opportunity[] = [
  {
    title: "DC Commanders Stadium & Entertainment District",
    organization: "Events DC / DC Government",
    type: "Major Construction",
    location: "Washington, DC — RFK Stadium Site",
    description: "Multi-billion dollar new stadium and surrounding mixed-use entertainment district. Expected to create 5,000+ construction jobs including electrical, plumbing, HVAC, carpentry, and general construction across multiple years of development.",
    relevance: "FTGU's flagship opportunity. Direct pipeline for every trade program. The scale of this project means sustained demand for trained workers through 2030+.",
    actionItems: [
      "Contact Events DC about workforce development partnership requirements",
      "Register FTGU as a CBE (Certified Business Enterprise) with DC DSLBD",
      "Identify general contractors bidding on the project and propose training partnerships",
      "Prepare a workforce pipeline proposal showing FTGU graduate readiness",
    ],
    estimatedValue: "$5B+ project value",
    priority: "high",
  },
  {
    title: "National Mall Revitalization — US 250th Anniversary",
    organization: "National Park Service / Federal Government",
    type: "Federal Construction",
    location: "Washington, DC — National Mall",
    description: "$500M+ in improvements for the 2026 U.S. 250th anniversary celebration. Includes a new 15,000 sq ft exhibit space beneath the Lincoln Memorial, pathway upgrades, and infrastructure modernization.",
    relevance: "Federal construction projects often require workforce diversity commitments. FTGU graduates in construction, electrical, and HVAC can be placed with subcontractors.",
    actionItems: [
      "Research NPS subcontractors working on Mall projects",
      "Connect with DC Department of Employment Services (DOES) for federal workforce programs",
      "Propose FTGU as a community workforce partner for the anniversary preparations",
    ],
    estimatedValue: "$500M project value",
    priority: "high",
  },
  {
    title: "Buzzard Point Waterfront Development",
    organization: "Multiple Developers",
    type: "Mixed-Use Development",
    location: "Washington, DC — Buzzard Point",
    description: "Transformation of industrial waterfront into vibrant mixed-use community. Three new buildings completed, three more underway around Audi Field. Nearly 3,000 new residences being built.",
    relevance: "Ongoing multi-year residential construction requiring plumbing, electrical, HVAC, and carpentry. Perfect for placing graduates in sustained work.",
    actionItems: [
      "Identify developers and general contractors at Buzzard Point",
      "Propose apprenticeship placements for FTGU graduates",
      "Partner with DC Housing Authority on affordable housing construction components",
    ],
    estimatedValue: "$2B+ combined value",
    priority: "high",
  },
  {
    title: "Virginia Tech Innovation Campus",
    organization: "Virginia Tech",
    type: "Education/Construction",
    location: "Alexandria, VA",
    description: "$1.1 billion campus in Alexandria. First academic building opened 2025. Multi-phase construction continuing through the decade creating both construction jobs and future education partnerships.",
    relevance: "Dual opportunity: FTGU graduates can work on campus construction, AND FTGU can partner with VT on workforce development research and AI-in-trades curriculum.",
    actionItems: [
      "Contact Virginia Tech's Office of Community Partnerships",
      "Explore joining the Coalition for Smart Construction as a community partner",
      "Propose a joint AI-in-Trades certification program",
      "Connect with HITT Contracting (VT partner) about workforce pipeline",
    ],
    link: "https://news.vt.edu/articles/2026/03/coalition-for-smart-construction.html",
    estimatedValue: "$1.1B project value",
    priority: "high",
  },
  {
    title: "NoVA Data Center Boom",
    organization: "Vantage, CleanArc, and others",
    type: "Data Center Construction",
    location: "Northern Virginia — Stafford, Caroline County",
    description: "$5B+ in new data center investments across Northern Virginia. Vantage Data Centers ($2.2B in Stafford) and CleanArc ($3B in Caroline County) are the largest, with dozens of smaller projects.",
    relevance: "Data centers require specialized electrical, HVAC, and construction work. This is a massive and growing demand area perfect for trained trades workers.",
    actionItems: [
      "Research data center construction workforce requirements",
      "Develop specialized data center trades training modules",
      "Contact Vantage and CleanArc HR departments about workforce partnerships",
      "Partner with Northern Virginia Community College on certification programs",
    ],
    estimatedValue: "$5B+ combined value",
    priority: "high",
  },
  {
    title: "One Rosslyn Mixed-Use Development",
    organization: "Arlington County",
    type: "Residential/Commercial",
    location: "Rosslyn, Arlington, VA",
    description: "845 apartments across three high-rise towers totaling 970,000+ sq ft, plus retail space along the new Gateway Park. Approved by Arlington County Board.",
    relevance: "Large-scale residential construction requiring all trades. Proximity to DC makes it accessible for FTGU graduates.",
    actionItems: [
      "Identify the general contractor for One Rosslyn",
      "Propose workforce partnership agreement",
      "Connect with Arlington County workforce development office",
    ],
    estimatedValue: "$500M+ project value",
    priority: "medium",
  },
  {
    title: "National Geographic 'Base Camp' HQ Renovation",
    organization: "National Geographic Society",
    type: "Commercial Renovation",
    location: "Washington, DC",
    description: "$250M rehabilitation of 3-building campus including Museum of Exploration, solar panel installation, and gray water HVAC systems. A showcase project for green building techniques.",
    relevance: "Green building and sustainable HVAC systems align perfectly with FTGU's forward-looking curriculum. Solar panel and gray water experience is increasingly valuable.",
    actionItems: [
      "Contact National Geographic's construction management team",
      "Highlight FTGU's HVAC program for the gray water systems work",
      "Propose sustainability-focused apprenticeship placements",
    ],
    estimatedValue: "$250M project value",
    priority: "medium",
  },
  {
    title: "WMATA Summer 2025 Major Construction",
    organization: "Washington Metropolitan Area Transit Authority",
    type: "Transit Infrastructure",
    location: "DC / MD / VA Metro Area",
    description: "Multiple station rehabilitation projects, track work, and infrastructure upgrades across the Metro system during summer 2025 and beyond.",
    relevance: "Transit construction requires electrical, construction, and specialized trades. WMATA has workforce diversity requirements.",
    actionItems: [
      "Review WMATA's procurement portal for upcoming contracts",
      "Contact WMATA's Office of Minority Business Enterprise",
      "Propose FTGU as a workforce development pipeline partner",
    ],
    link: "https://www.wmata.com/initiatives/plans/summer-2025-major-construction/index.cfm",
    priority: "medium",
  },
];

const educationPartners: Opportunity[] = [
  {
    title: "Howard University — HBCU Partnership",
    organization: "Howard University",
    type: "Education Partnership",
    location: "Washington, DC",
    description: "Howard University has existing partnerships with construction firms like Gilbane. A partnership with FTGU could create a pipeline from community training to higher education, and leverage Howard's prestige for grant applications.",
    relevance: "HBCU partnership strengthens FTGU's credibility, provides academic backing, and creates a pathway for students who want to advance beyond trades into engineering or management.",
    actionItems: [
      "Contact Howard's School of Engineering and Architecture",
      "Propose a 'Trades to Engineering' bridge program",
      "Explore joint grant applications for workforce development funding",
      "Discuss guest lecture and mentorship opportunities",
    ],
    priority: "high",
  },
  {
    title: "UDC Community College — Workforce Programs",
    organization: "University of the District of Columbia",
    type: "Community College Partnership",
    location: "Washington, DC",
    description: "UDC's Community College offers existing workforce development programs. Partnership could provide shared facilities, instructors, and accredited certifications for FTGU students.",
    relevance: "Community college partnerships provide accreditation pathways and shared resources, reducing FTGU's overhead while increasing program credibility.",
    actionItems: [
      "Meet with UDC Workforce Development department",
      "Explore shared facility and equipment agreements",
      "Discuss articulation agreements for FTGU graduates",
      "Joint application for DOES workforce training grants",
    ],
    priority: "high",
  },
  {
    title: "Northern Virginia Community College (NOVA)",
    organization: "NOVA Community College",
    type: "Community College Partnership",
    location: "Northern Virginia — Multiple Campuses",
    description: "NOVA is the largest community college in Virginia with strong workforce development programs. Their proximity to NoVA construction projects makes them a natural partner.",
    relevance: "NOVA has existing construction and trades programs. Partnership could include dual enrollment, certification alignment, and shared job placement services.",
    actionItems: [
      "Contact NOVA's Workforce Development division",
      "Explore apprenticeship and dual enrollment partnerships",
      "Discuss AI-in-Trades curriculum development collaboration",
    ],
    priority: "medium",
  },
  {
    title: "Virginia Tech Coalition for Smart Construction",
    organization: "Virginia Tech",
    type: "Research Partnership",
    location: "Falls Church, VA (40,000 sq ft innovation lab)",
    description: "Industry-academia coalition with 40,000 sq ft innovation lab under construction in Falls Church. Connects research with construction firms, public agencies, and workforce partners.",
    relevance: "Positions FTGU at the cutting edge of construction innovation. Access to industry partners (HITT Contracting), research resources, and the 'Smart Construction' brand.",
    actionItems: [
      "Apply to join the Coalition as a community workforce partner",
      "Attend Coalition events and introduce FTGU's mission",
      "Explore pilot projects connecting FTGU students with smart construction tech",
      "Partner on AI-in-Trades research and curriculum",
    ],
    link: "https://news.vt.edu/articles/2026/03/coalition-for-smart-construction.html",
    priority: "high",
  },
  {
    title: "DC Department of Employment Services (DOES)",
    organization: "DC Government",
    type: "Government Workforce Program",
    location: "Washington, DC",
    description: "DOES manages DC's workforce development programs, including apprenticeship registration, job training grants, and employer incentives. Essential partner for any DC-based workforce nonprofit.",
    relevance: "DOES is the gateway to DC government workforce funding, apprenticeship registration, and CBE contractor referrals. FTGU must have a strong relationship here.",
    actionItems: [
      "Register FTGU with DOES as an approved training provider",
      "Apply for DOES workforce development grants (multiple cycles per year)",
      "Register apprenticeship programs through DC Apprenticeship Council",
      "Connect with DOES employer partnerships for job placement",
    ],
    priority: "high",
  },
];

const privateSectorPartners: Opportunity[] = [
  {
    title: "Gilbane Building Company",
    organization: "Gilbane Building Company",
    type: "General Contractor",
    location: "DC Metro Area — Arlington, VA HQ",
    description: "Major general contractor with deep DMV roots. Already partners with HBCUs (Howard University), maintains CBE and SWaM procurement goals, and has strong subcontractor relationships.",
    relevance: "Gilbane can directly hire FTGU graduates and subcontract with FTGU-connected businesses. Their commitment to diversity and local hiring aligns perfectly.",
    actionItems: [
      "Contact Gilbane's DC Metro community relations team",
      "Propose a formal workforce pipeline agreement",
      "Discuss apprenticeship placements on Gilbane projects",
      "Explore sponsorship of FTGU training programs",
    ],
    link: "https://www.gilbaneco.com/location/washington-d-c/",
    priority: "high",
  },
  {
    title: "HITT Contracting",
    organization: "HITT Contracting",
    type: "General Contractor",
    location: "Falls Church, VA",
    description: "Major DMV general contractor and official partner in Virginia Tech's Coalition for Smart Construction. Strong commitment to next-generation workforce development.",
    relevance: "HITT's partnership with VT's Smart Construction Coalition makes them a natural ally. Their CEO has publicly stated commitment to 'training and inspiring the next generation of builders.'",
    actionItems: [
      "Contact HITT's workforce development team",
      "Leverage VT Coalition connection for introductions",
      "Propose apprenticeship and job placement partnerships",
      "Discuss co-sponsoring FTGU training events",
    ],
    priority: "high",
  },
  {
    title: "Clark Construction Group",
    organization: "Clark Construction",
    type: "General Contractor",
    location: "Bethesda, MD",
    description: "One of the largest general contractors in the US, headquartered in the DMV. Manages major government and private sector projects throughout the region.",
    relevance: "Clark's project pipeline means sustained demand for skilled trades. Their community investment programs often include workforce development partnerships.",
    actionItems: [
      "Research Clark's community investment and workforce programs",
      "Contact their diversity and inclusion department",
      "Propose workforce partnership for upcoming DMV projects",
    ],
    priority: "medium",
  },
  {
    title: "Electra Aviation — Emerging Tech",
    organization: "Electra Aviation",
    type: "Advanced Manufacturing",
    location: "Manassas, VA",
    description: "Expanding to 57,000 sq ft facility with ~120 employees by early 2026. Represents the intersection of construction, electrical, and advanced technology.",
    relevance: "Advanced manufacturing facilities need electricians, HVAC technicians, and construction workers. Also demonstrates how trades skills translate to emerging industries.",
    actionItems: [
      "Contact Electra's HR about facility construction workforce needs",
      "Explore ongoing facility maintenance partnerships",
      "Use as a case study for 'AI in Trades' curriculum relevance",
    ],
    priority: "standard",
  },
];

const categoryTabs = [
  { id: "projects", label: "Major Projects", icon: HardHat, count: majorProjects.length },
  { id: "education", label: "Education Partners", icon: GraduationCap, count: educationPartners.length },
  { id: "private", label: "Private Sector", icon: Building2, count: privateSectorPartners.length },
];

function OpportunityCard({ opp }: { opp: Opportunity }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-5 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-display font-bold text-base text-foreground">{opp.title}</h3>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${priorityStyles[opp.priority]}`}>
                {opp.priority === "high" ? "High Priority" : opp.priority === "medium" ? "Medium" : "Standard"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{opp.organization}</p>
            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><MapPin size={12} /> {opp.location}</span>
              {opp.estimatedValue && (
                <span className="flex items-center gap-1"><DollarSign size={12} /> {opp.estimatedValue}</span>
              )}
            </div>
          </div>
          {expanded ? <ChevronDown size={20} className="text-muted-foreground mt-1" /> : <ChevronRight size={20} className="text-muted-foreground mt-1" />}
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-border/50 space-y-4">
          <div className="mt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2">Description</h4>
            <p className="text-sm text-foreground/80 leading-relaxed">{opp.description}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2 flex items-center gap-1">
              <Target size={12} /> Why This Matters for FTGU
            </h4>
            <p className="text-sm text-foreground/80 leading-relaxed">{opp.relevance}</p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-2 flex items-center gap-1">
              <Zap size={12} /> Action Items
            </h4>
            <ul className="space-y-2">
              {opp.actionItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                  <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {opp.link && (
            <a
              href={opp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
            >
              <ExternalLink size={14} /> View More Information
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function DMVPartnerships() {
  const [activeTab, setActiveTab] = useState("projects");

  const getOpportunities = () => {
    switch (activeTab) {
      case "projects": return majorProjects;
      case "education": return educationPartners;
      case "private": return privateSectorPartners;
      default: return majorProjects;
    }
  };

  const highPriorityCount = [...majorProjects, ...educationPartners, ...privateSectorPartners].filter(o => o.priority === "high").length;
  const totalValue = "$15B+";

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Handshake className="w-5 h-5 text-primary" />
          </div>
          <h1 className="font-display text-3xl font-bold text-foreground">DMV Partnerships & Opportunities</h1>
        </div>
        <p className="text-muted-foreground font-sans max-w-2xl">
          Research-backed partnership opportunities and major projects across DC, Maryland, and Virginia. These represent real opportunities to place FTGU graduates and grow the organization.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
              <Star className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{highPriorityCount}</p>
              <p className="text-xs text-muted-foreground">High Priority Opportunities</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">{totalValue}</p>
              <p className="text-xs text-muted-foreground">Combined Project Value</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold">10,000+</p>
              <p className="text-xs text-muted-foreground">Estimated Jobs Created</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground text-sm">Strategic Priority: CBE Certification</p>
            <p className="text-sm text-foreground/80 mt-1">
              All DC and Virginia public construction contracts require Certified Business Enterprise (CBE) and Small, Women, and Minority-owned (SWaM) participation.
              FTGU should register as a CBE with DC's Department of Small and Local Business Development (DSLBD) to access these mandatory workforce pipelines.
              This is the single most impactful action for connecting with government-funded projects.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 border-b border-border">
        {categoryTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={16} />
              {tab.label}
              <span className="text-xs bg-muted px-1.5 py-0.5 rounded-full">{tab.count}</span>
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {getOpportunities().map((opp, i) => (
          <OpportunityCard key={i} opp={opp} />
        ))}
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
          <Landmark className="w-5 h-5 text-primary" />
          Key Government Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "DC Development Report (WDCEP)", url: "https://wdcep.com/resources/dc-development-report/", desc: "Comprehensive DC development tracking" },
            { name: "DC Capital Construction (DGS)", url: "https://dgs.dc.gov/page/capital-construction-projects", desc: "All DC government construction projects" },
            { name: "MDOT SHA Project Portal", url: "https://mdot-sha-project-portal-maryland.hub.arcgis.com/", desc: "Maryland state highway projects" },
            { name: "WMATA Construction Plans", url: "https://www.wmata.com/initiatives/plans/summer-2025-major-construction/index.cfm", desc: "Metro transit construction projects" },
            { name: "NAWDP", url: "https://www.nawdp.org/", desc: "National workforce development professionals" },
            { name: "Gilbane DC Metro", url: "https://www.gilbaneco.com/location/washington-d-c/", desc: "Major GC with community partnerships" },
          ].map((resource) => (
            <a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors group"
            >
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold group-hover:text-primary transition-colors">{resource.name}</p>
                <p className="text-xs text-muted-foreground">{resource.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
