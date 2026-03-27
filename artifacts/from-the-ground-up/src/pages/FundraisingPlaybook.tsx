import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  DollarSign, Building2, Users, FileText, Calendar, Target,
  TrendingUp, Heart, Globe, Briefcase, Award, ArrowRight,
  CheckCircle, Star, Download, ChevronDown, ChevronUp, Handshake,
  Megaphone, Mail, Phone, MapPin, Clock, Layers
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface FundingSource {
  id: string;
  name: string;
  type: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  description: string;
  applicationSteps: string[];
  narrative: string;
  contactInfo: string;
  website: string;
  priority: "high" | "medium" | "low";
}

const fundingSources: FundingSource[] = [
  {
    id: "does-wdii",
    name: "DC DOES — Workforce Development Innovation Initiatives",
    type: "Government Grant",
    amount: "$100,000 – $500,000",
    deadline: "Rolling (NOFAs posted quarterly on does.dc.gov)",
    eligibility: [
      "Must be a 501(c)(3) or have fiscal sponsor with 501(c)(3)",
      "Must serve DC residents",
      "Must demonstrate innovative workforce development approach",
      "Must show capacity to deliver training outcomes",
    ],
    description: "The DC Department of Employment Services funds innovative workforce development solutions that help DC residents attain and sustain employment. FTGU's trade training programs with AI integration align perfectly with DOES's innovation mandate.",
    applicationSteps: [
      "Monitor does.dc.gov/page/grant-opportunities for new NOFAs",
      "Register in the DC Grants Portal (opgs.dc.gov)",
      "Prepare organizational capacity statement (use template below)",
      "Develop program budget with line-item detail",
      "Write narrative addressing NOFA evaluation criteria",
      "Submit via DC Grants Portal before deadline",
      "Prepare for site visit / interview if selected",
    ],
    narrative: `From The Ground Up (FTGU) respectfully requests $[AMOUNT] from the DC Department of Employment Services Workforce Development Innovation Initiatives to fund our comprehensive trade skills training program serving DC residents.

PROGRAM OVERVIEW: FTGU provides hands-on training in six high-demand construction trades — Construction Management, Electrical Systems, Plumbing, Carpentry & Woodworking, HVAC Systems, and AI in the Trades — preparing participants for immediate employment in the District's booming construction sector.

INNOVATION: Unlike traditional workforce programs, FTGU integrates artificial intelligence tools into every trade discipline, teaching participants to leverage AI for estimation, project management, safety compliance, and business development. This forward-thinking approach ensures our graduates are not just job-ready but future-ready.

DC COMMANDERS STADIUM OPPORTUNITY: The multi-billion dollar DC Commanders Stadium project, breaking ground in 2026, will create over 5,000 construction jobs in the District. FTGU is uniquely positioned to train DC residents for these jobs, ensuring local hiring goals are met and community wealth is built.

TARGET POPULATION: We serve DC residents ages 16 and older, with a focus on underemployed adults, returning citizens, opportunity youth, and career changers seeking family-sustaining wages in the skilled trades.

OUTCOMES: We project that [X]% of program completers will obtain industry-recognized certifications, [X]% will secure employment within 90 days of completion, and graduates will earn an average starting wage of $[XX]/hour.

ORGANIZATIONAL CAPACITY: Founded by Jeffrey Williams in honor of his father Jeffrey Williams Sr., FTGU brings deep community connections, industry partnerships, and a commitment to transforming lives through skilled trade education.`,
    contactInfo: "OGAGrants@dc.gov | (202) 724-7000",
    website: "https://does.dc.gov/page/grant-opportunities",
    priority: "high",
  },
  {
    id: "does-syep",
    name: "DC DOES — Summer Youth Employment Program (SYEP)",
    type: "Government Grant",
    amount: "$50,000 – $200,000",
    deadline: "Typically January–February annually",
    eligibility: [
      "Must be a 501(c)(3) or have fiscal sponsor",
      "Must serve DC youth ages 14–24",
      "Must provide structured career readiness activities",
      "Must have physical location in DC",
    ],
    description: "SYEP is DC's flagship youth employment program, providing structured summer career readiness experiences. FTGU can host youth in construction trade exploration, safety training, and hands-on project work.",
    applicationSteps: [
      "Watch for SYEP NOFA (typically released November–January)",
      "Complete organization profile in DC Grants Portal",
      "Design 6-week summer program curriculum for youth",
      "Include mentorship component and safety training plan",
      "Budget for youth stipends, materials, and supervision",
      "Submit application and await selection notification",
    ],
    narrative: `From The Ground Up proposes a 6-week Summer Youth Employment Program introducing DC youth ages 14–24 to skilled trades careers. Participants will rotate through Construction, Electrical, Plumbing, Carpentry, HVAC, and AI in Trades modules, earning industry-recognized safety certifications (OSHA 10) while building real projects under expert supervision.

Each participant will be paired with a trade professional mentor, complete a career exploration portfolio, and present a capstone project demonstrating acquired skills. The program directly addresses the District's need to build a diverse construction workforce pipeline, particularly as the Commanders Stadium project creates unprecedented demand for skilled workers.

FTGU will provide: structured daily activities (8am–3pm), safety equipment and materials, OSHA 10 certification training, career counseling, and connections to registered apprenticeship programs for post-program placement.`,
    contactInfo: "SYEP@dc.gov | (202) 724-7000",
    website: "https://does.dc.gov/service/summer-youth-employment-program",
    priority: "high",
  },
  {
    id: "wioa",
    name: "WIOA Title I — Adult & Dislocated Worker Programs",
    type: "Federal Formula Grant (via DC WIC)",
    amount: "$75,000 – $300,000 (via ITA or contract)",
    deadline: "Ongoing — apply to be on Eligible Training Provider List (ETPL)",
    eligibility: [
      "Must get program approved on DC's Eligible Training Provider List",
      "Must demonstrate positive training outcomes",
      "Must serve eligible adults and dislocated workers",
      "Must provide industry-recognized credentials",
    ],
    description: "WIOA is the largest federal workforce funding stream. By getting on DC's ETPL, FTGU can receive Individual Training Account (ITA) funding for each enrolled student, or contract for cohort-based training through the DC Workforce Investment Council.",
    applicationSteps: [
      "Contact DC Workforce Investment Council (WIC) about ETPL application",
      "Prepare program performance data and curriculum documentation",
      "Complete ETPL application with credential and outcome information",
      "Undergo program review and approval process",
      "Once approved, participants can use ITA vouchers at FTGU",
      "Report outcomes quarterly to maintain ETPL status",
    ],
    narrative: `From The Ground Up seeks approval on the District of Columbia's Eligible Training Provider List (ETPL) to receive WIOA Individual Training Account funding for our comprehensive trade skills training programs.

PROGRAM CREDENTIALS: Our programs lead to the following industry-recognized credentials: OSHA 10/30 Construction Safety, NCCER Core Certification, EPA 608 (HVAC), First Aid/CPR/AED, and trade-specific certifications in electrical, plumbing, carpentry, and HVAC.

TRAINING DELIVERY: Programs are delivered in cohort-based formats (12–16 weeks) combining classroom instruction with hands-on shop and field experience. Our instructor-to-student ratio of 1:12 ensures personalized attention and skill mastery.

OUTCOMES: FTGU projects a program completion rate of 85%+, credential attainment rate of 90%+, and employment placement rate of 80%+ within 90 days of program completion, with median starting wages exceeding $20/hour.`,
    contactInfo: "DC Workforce Investment Council | (202) 671-1900",
    website: "https://wic.dc.gov",
    priority: "high",
  },
  {
    id: "dol-youthbuild",
    name: "DOL YouthBuild Grant",
    type: "Federal Competitive Grant",
    amount: "$500,000 – $1,500,000 (multi-year)",
    deadline: "Typically Spring (FOA posted on grants.gov)",
    eligibility: [
      "Must be a 501(c)(3) with 2+ years operating history",
      "Must serve youth ages 16–24 who are low-income",
      "Must include construction training AND education (GED/diploma)",
      "Must include community service/leadership development",
    ],
    description: "YouthBuild is a premier federal program funding construction training for opportunity youth. Awards are large and multi-year. FTGU's focus on youth development through trades makes this a natural fit.",
    applicationSteps: [
      "Monitor grants.gov for YouthBuild FOA (typically published March–April)",
      "Register in SAM.gov and grants.gov if not already",
      "Partner with local education provider for GED/diploma component",
      "Design program serving 40–75 youth over grant period",
      "Develop community service projects (affordable housing ideal)",
      "Include leadership development and follow-up services plan",
      "Submit federal grant application via grants.gov",
    ],
    narrative: `From The Ground Up proposes a 30-month YouthBuild program serving 60 DC youth ages 16–24 from low-income households and disconnected from education and employment. Our program integrates construction trade training across six disciplines with GED preparation, leadership development, and community service through affordable housing rehabilitation.

COMMUNITY IMPACT: Participants will rehabilitate [X] units of affordable housing in Wards 7 and 8 while earning NCCER certifications and OSHA safety credentials. This dual approach — building skills while building community — embodies YouthBuild's mission and FTGU's founding vision.

FOUNDER'S COMMITMENT: Jeffrey Williams founded FTGU in honor of his father Jeffrey Williams Sr., who instilled the values of hard work, craftsmanship, and community service. This personal commitment to lifting up the next generation drives every aspect of our program design.`,
    contactInfo: "DOL/ETA Division of Youth Services | grants.gov",
    website: "https://www.dol.gov/agencies/eta/youth/youthbuild",
    priority: "high",
  },
  {
    id: "community-foundations",
    name: "Community Foundation for the National Capital Region",
    type: "Foundation Grant",
    amount: "$10,000 – $75,000",
    deadline: "Multiple cycles per year",
    eligibility: [
      "Must be a 501(c)(3) serving the DC region",
      "Must align with foundation priorities (workforce, equity)",
      "Must demonstrate community engagement",
    ],
    description: "The Community Foundation is a major local funder supporting workforce development and economic equity in the DC region. Their responsive grantmaking process makes them accessible to newer organizations.",
    applicationSteps: [
      "Create account on cfncr.org grants portal",
      "Review current funding priorities and open opportunities",
      "Submit Letter of Inquiry (LOI) during open period",
      "If invited, submit full proposal with budget and outcomes",
      "Participate in site visit if selected",
    ],
    narrative: `From The Ground Up requests $[AMOUNT] from the Community Foundation for the National Capital Region to expand our trade skills training program serving underemployed DC residents. These funds will support [SPECIFIC USE: e.g., equipment purchases, instructor salaries, student stipends].

With the DC Commanders Stadium project creating unprecedented demand for skilled construction workers, FTGU is positioned to train DC residents for family-sustaining careers while ensuring community benefit from this historic development.`,
    contactInfo: "grants@cfncr.org | (202) 955-5890",
    website: "https://www.cfncr.org",
    priority: "medium",
  },
  {
    id: "home-depot",
    name: "The Home Depot Foundation",
    type: "Corporate Foundation Grant",
    amount: "$25,000 – $500,000",
    deadline: "By invitation / open application periods",
    eligibility: [
      "Must be a 501(c)(3)",
      "Must focus on skilled trades training",
      "Must serve veterans, youth, or underserved communities",
      "Must demonstrate measurable outcomes",
    ],
    description: "The Home Depot Foundation has committed $500M to skilled trades training. They are the single largest private funder of trades education in America and actively seek partners like FTGU.",
    applicationSteps: [
      "Review eligibility at homedepotfoundation.org",
      "Submit online application through foundation portal",
      "Include detailed program description and outcomes data",
      "Highlight any veteran-serving components",
      "Demonstrate sustainability plan beyond grant period",
    ],
    narrative: `From The Ground Up aligns directly with The Home Depot Foundation's mission to train the next generation of skilled tradespeople. Our comprehensive six-trade training program, enhanced by AI technology integration, represents exactly the innovation the Foundation seeks to support.

TRADES TRAINING PIPELINE: FTGU trains participants in Construction, Electrical, Plumbing, Carpentry, HVAC, and AI in the Trades, producing graduates with both traditional craftsmanship skills and modern technology competencies. Our graduates don't just fill today's jobs — they're prepared for tomorrow's construction industry.

REQUEST: We request $[AMOUNT] to fund [SPECIFIC: equipment, expansion, scholarships] for our programs serving [NUMBER] DC residents annually.`,
    contactInfo: "homedepotfoundation.org/apply",
    website: "https://www.homedepotfoundation.org",
    priority: "high",
  },
  {
    id: "lowes",
    name: "Lowe's Foundation — Gable Grants",
    type: "Corporate Foundation Grant",
    amount: "$50,000 – $2,000,000",
    deadline: "Annual cycle (check lowes.com/foundation)",
    eligibility: [
      "Must be a 501(c)(3)",
      "Must provide skilled trades training or pre-apprenticeship",
      "Must serve community college or nonprofit training programs",
      "Must demonstrate workforce outcomes",
    ],
    description: "Lowe's Foundation launched the Gable Grants program specifically to address the skilled trades worker shortage, providing significant funding to training organizations.",
    applicationSteps: [
      "Check Lowe's Foundation website for open application windows",
      "Prepare program data: enrollment, completion, placement rates",
      "Document industry partnerships and employer commitments",
      "Submit application through foundation portal",
    ],
    narrative: `From The Ground Up is an ideal Gable Grant recipient. Our comprehensive trades training directly addresses the skilled worker shortage that Lowe's Foundation seeks to solve. With the DC Commanders Stadium project creating 5,000+ construction jobs, our training pipeline will produce exactly the workers the industry desperately needs.`,
    contactInfo: "lowes.com/foundation",
    website: "https://www.lowes.com/l/about/foundation",
    priority: "high",
  },
  {
    id: "boeing",
    name: "Boeing Global Engagement — Workforce Development",
    type: "Corporate Grant",
    amount: "$25,000 – $250,000",
    deadline: "Rolling applications",
    eligibility: [
      "Must be a 501(c)(3)",
      "Must focus on STEM or workforce development",
      "Must serve underrepresented populations",
    ],
    description: "Boeing invests in workforce development programs that prepare underrepresented populations for careers in advanced manufacturing and construction, which aligns with FTGU's AI-integrated trade training.",
    applicationSteps: [
      "Review boeing.com/principles/community-engagement",
      "Submit inquiry through Boeing's online grants system",
      "Emphasize STEM/AI integration in trade training",
      "Demonstrate scalability and sustainability",
    ],
    narrative: `FTGU's integration of AI technology across all trade disciplines aligns with Boeing's commitment to advancing STEM education and workforce innovation. Our AI in the Trades program teaches participants to use artificial intelligence for project estimation, safety analysis, and business operations — creating a workforce that bridges traditional craftsmanship with emerging technology.`,
    contactInfo: "boeing.com/principles/community-engagement",
    website: "https://www.boeing.com/principles/community-engagement",
    priority: "medium",
  },
  {
    id: "truist",
    name: "Truist Foundation — Workforce Development",
    type: "Corporate Foundation Grant",
    amount: "$50,000 – $500,000",
    deadline: "Open application cycles",
    eligibility: [
      "Must be a 501(c)(3)",
      "Must operate in Truist footprint (includes DC)",
      "Must focus on career pathways for underserved populations",
    ],
    description: "Truist Foundation invests in workforce development organizations that create economic mobility pathways, particularly for underserved communities. DC is within their service area.",
    applicationSteps: [
      "Review truist.com/purpose/truist-foundation",
      "Submit LOI through foundation portal",
      "If invited, prepare full proposal with outcomes data",
      "Include participant success stories and wage data",
    ],
    narrative: `From The Ground Up creates economic mobility through skilled trade careers. Our programs move participants from unemployment or underemployment to family-sustaining wages in construction trades, with clear advancement pathways from entry-level ($35,000–$45,000) to master tradesperson ($75,000–$120,000+) to business owner ($100,000+).`,
    contactInfo: "truist.com/purpose/truist-foundation",
    website: "https://www.truist.com/purpose/truist-foundation",
    priority: "medium",
  },
  {
    id: "individual-donors",
    name: "Individual Major Donor Program",
    type: "Individual Giving",
    amount: "$1,000 – $100,000+ per donor",
    deadline: "Ongoing cultivation",
    eligibility: ["No eligibility restrictions — anyone can donate"],
    description: "A structured major donor cultivation program to identify, cultivate, solicit, and steward individual donors who share FTGU's vision of empowerment through trade skills.",
    applicationSteps: [
      "Build prospect list from personal networks, community leaders, business owners",
      "Research donor capacity and interests using public records",
      "Schedule introductory meetings / site visits",
      "Present case for support with specific funding needs",
      "Make solicitation with specific ask amount",
      "Send personalized thank-you within 48 hours",
      "Provide quarterly impact updates to all donors",
      "Invite donors to annual appreciation event",
    ],
    narrative: `Dear [DONOR NAME],

I am writing to invite you to become a founding supporter of From The Ground Up, a nonprofit organization dedicated to empowering individuals of all ages with hands-on trade skills in construction, electrical work, plumbing, carpentry, HVAC, and AI-integrated technologies.

Founded in honor of my father, Jeffrey Williams Sr., who taught me that the foundation of a meaningful life is built through skill, service, and community, From The Ground Up is preparing DC residents for the unprecedented construction boom driven by the DC Commanders Stadium project and beyond.

Your investment of $[AMOUNT] will directly fund [SPECIFIC IMPACT]:
• $1,000 sponsors one student's complete OSHA safety certification
• $5,000 equips a training workshop with professional-grade tools
• $10,000 funds a full scholarship for one student's 16-week program
• $25,000 launches a new trade training track
• $50,000+ names a workshop or program in your honor

Every dollar builds a future. I would welcome the opportunity to meet with you personally to share our vision and show you the impact your generosity can make.

With gratitude,
Jeffrey Williams
Founder & Executive Director
From The Ground Up`,
    contactInfo: "hello@fromthegroundup.org",
    website: "",
    priority: "high",
  },
  {
    id: "corporate-sponsorship",
    name: "Corporate Sponsorship Program",
    type: "Corporate Partnership",
    amount: "$5,000 – $250,000",
    deadline: "Ongoing",
    eligibility: ["Construction firms, suppliers, contractors in DC metro area"],
    description: "A tiered corporate sponsorship program offering companies branding, hiring pipeline access, and community engagement in exchange for financial support.",
    applicationSteps: [
      "Identify target companies: construction firms, material suppliers, contractors",
      "Research company CSR programs and community investment history",
      "Prepare customized sponsorship proposal (template below)",
      "Schedule meeting with corporate giving / HR / CSR contact",
      "Present ROI: trained workforce pipeline, brand visibility, tax benefits",
      "Negotiate sponsorship level and benefits package",
      "Execute sponsorship agreement and begin recognition",
    ],
    narrative: `CORPORATE SPONSORSHIP PROPOSAL

FROM THE GROUND UP — Building Tomorrow's Workforce Today

Dear [COMPANY NAME],

The construction industry faces a critical skilled worker shortage. Over 500,000 positions go unfilled nationally, and the DC Commanders Stadium project alone will require 5,000+ skilled workers. From The Ground Up is the solution.

SPONSORSHIP TIERS:

🏗️ FOUNDATION PARTNER — $100,000+/year
• Named training program ("The [Company] Construction Academy")
• Priority access to graduate hiring pipeline
• Logo on all program materials and website
• 4 seats on Advisory Board
• Quarterly workforce reports
• Annual recognition gala VIP table

⚡ CORNERSTONE SPONSOR — $50,000/year
• Co-branded training module in your trade specialty
• Priority graduate hiring access
• Logo on program materials
• 2 Advisory Board seats
• Semi-annual workforce reports

🔧 BUILDER SPONSOR — $25,000/year
• Graduate hiring pipeline access
• Logo on website and annual report
• 1 Advisory Board seat
• Invitation to graduation ceremonies

🔨 TOOL SPONSOR — $10,000/year
• Graduate resume access
• Logo on website
• Recognition in annual report

🧱 SUPPORTER — $5,000/year
• Recognition on website and social media
• Invitation to annual events

TAX BENEFITS: All sponsorships are tax-deductible to the extent allowed by law.

ROI FOR YOUR COMPANY:
1. Pre-screened, trained workers ready for your projects
2. Reduced recruiting and onboarding costs
3. Community goodwill and brand visibility
4. Tax deductions
5. Diversity and inclusion workforce goals met
6. Direct connection to Stadium project workforce needs

Contact Jeffrey Williams to discuss a partnership: hello@fromthegroundup.org`,
    contactInfo: "hello@fromthegroundup.org",
    website: "",
    priority: "high",
  },
  {
    id: "crowdfunding",
    name: "Online Fundraising & Crowdfunding Campaigns",
    type: "Crowdfunding",
    amount: "$5,000 – $100,000 per campaign",
    deadline: "Self-directed",
    eligibility: ["Open to all — no restrictions"],
    description: "Strategic online fundraising campaigns using GoFundMe Charity, Facebook Fundraisers, and direct email appeals to build grassroots support.",
    applicationSteps: [
      "Set up GoFundMe Charity page (no platform fees for 501c3)",
      "Create compelling campaign with video, photos, student stories",
      "Launch 30-day campaign with specific funding goal",
      "Promote across social media (daily posts during campaign)",
      "Send email appeals to contacts list (3–5 emails over 30 days)",
      "Share student success stories and progress updates",
      "Thank all donors publicly and privately",
      "Run seasonal campaigns: Back-to-School, Holiday Giving, GivingTuesday",
    ],
    narrative: `🏗️ HELP BUILD FUTURES — FROM THE GROUND UP

Every person deserves the chance to build a career with their own hands.

From The Ground Up teaches DC residents the construction trades — electrical, plumbing, carpentry, HVAC, and more — giving them the skills to earn family-sustaining wages and build generational wealth.

With the DC Commanders Stadium creating 5,000+ construction jobs, NOW is the moment to invest in our community's workforce.

YOUR DONATION MAKES THIS POSSIBLE:
☑️ $25 — Supplies safety equipment for one student for one week
☑️ $50 — Provides training materials for one module
☑️ $100 — Funds one day of hands-on workshop instruction
☑️ $250 — Sponsors a student's certification exam fees
☑️ $500 — Equips a student with professional-grade starter tools
☑️ $1,000 — Fully sponsors one student's OSHA certification

Founded by Jeffrey Williams in honor of his father, Jeffrey Williams Sr., FTGU is more than a training program — it's a movement to build stronger communities from the ground up.

DONATE TODAY and help us train the next generation of skilled tradespeople. 🔨`,
    contactInfo: "hello@fromthegroundup.org",
    website: "",
    priority: "medium",
  },
];

const annualCalendar = [
  { month: "January", activities: ["Submit SYEP application to DOES", "Launch New Year giving campaign", "Begin spring grant application cycle", "Update ETPL data with DC WIC", "Board retreat — set annual fundraising goals"] },
  { month: "February", activities: ["Black History Month social media campaign", "Major donor cultivation meetings", "Corporate sponsorship outreach", "Prepare for GivingTuesday planning", "Submit DOL YouthBuild application (if open)"] },
  { month: "March", activities: ["Spring grant applications (Community Foundation, Home Depot)", "Prepare annual report for donor stewardship", "Plan spring fundraising event", "Corporate partnership proposals sent"] },
  { month: "April", activities: ["Spring fundraising gala / open house", "Submit Lowe's Gable Grant application", "National Volunteer Week — volunteer recruitment drive", "Send annual report to all donors", "File DC Biennial Report if due"] },
  { month: "May", activities: ["Summer program fundraising push", "Apply for DOES workforce innovation grants", "Corporate sponsor mid-year check-ins", "Prepare SYEP program for summer launch"] },
  { month: "June", activities: ["Summer program launch — invite donors to observe", "Mid-year donor impact updates", "Apply for Boeing workforce grants", "Social media fundraising campaign"] },
  { month: "July", activities: ["Mid-year financial review with board", "Summer program progress updates to funders", "Begin fall grant cycle research", "Prepare graduation ceremony for donors/media"] },
  { month: "August", activities: ["Summer program graduation — invite media and donors", "Back-to-school fundraising campaign", "Apply for Truist Foundation grants", "Plan fall fundraising events"] },
  { month: "September", activities: ["Fall enrollment fundraising drive", "Corporate sponsorship renewal outreach", "Apply for new DOES NOFAs", "Prepare year-end giving strategy"] },
  { month: "October", activities: ["Fall open house for prospective donors", "Grant reporting for current funders", "Launch year-end giving campaign planning", "Apply for Community Foundation fall cycle"] },
  { month: "November", activities: ["GivingTuesday campaign launch", "Year-end appeal letter mailed to all prospects", "Thanksgiving gratitude campaign to current donors", "Begin annual report data compilation"] },
  { month: "December", activities: ["Year-end giving push (email, social, direct mail)", "Holiday donor appreciation event", "GivingTuesday follow-up and thank-yous", "Prepare IRS acknowledgment letters for all donors", "Board meeting — review annual fundraising results"] },
];

const revenueProjections = [
  { year: "Year 1", government: "$150,000", foundation: "$75,000", corporate: "$50,000", individual: "$25,000", events: "$15,000", total: "$315,000" },
  { year: "Year 2", government: "$350,000", foundation: "$150,000", corporate: "$125,000", individual: "$75,000", events: "$40,000", total: "$740,000" },
  { year: "Year 3", government: "$500,000", foundation: "$250,000", corporate: "$200,000", individual: "$150,000", events: "$75,000", total: "$1,175,000" },
  { year: "Year 5", government: "$750,000", foundation: "$400,000", corporate: "$350,000", individual: "$300,000", events: "$150,000", total: "$1,950,000" },
  { year: "Year 7", government: "$1,000,000", foundation: "$500,000", corporate: "$500,000", individual: "$500,000", events: "$250,000", total: "$2,750,000" },
  { year: "Year 10", government: "$1,500,000", foundation: "$750,000", corporate: "$750,000", individual: "$1,000,000", events: "$500,000", total: "$4,500,000" },
];

function SourceCard({ source, index }: { source: FundingSource; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const priorityColors = {
    high: "bg-primary/10 text-primary border-primary/30",
    medium: "bg-amber-500/10 text-amber-600 border-amber-500/30",
    low: "bg-blue-500/10 text-blue-600 border-blue-500/30",
  };

  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${priorityColors[source.priority]}`}>
                {source.priority} priority
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                {source.type}
              </span>
            </div>
            <h3 className="text-xl font-display font-bold text-white">{source.name}</h3>
          </div>
          <div className="text-right">
            <div className="text-2xl font-display font-black text-primary">{source.amount}</div>
            <div className="text-xs text-white/50 mt-1">{source.deadline}</div>
          </div>
        </div>

        <p className="text-white/70 mb-4 leading-relaxed">{source.description}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:text-primary/80 transition-colors"
        >
          {expanded ? "Hide Details" : "View Full Application Guide"}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-white/10 p-6 space-y-6">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">Eligibility Requirements</h4>
            <ul className="space-y-2">
              {source.eligibility.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                  <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">Step-by-Step Application Process</h4>
            <ol className="space-y-2">
              {source.applicationSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-3">
              Pre-Written Narrative / Proposal Language
            </h4>
            <div className="bg-black/20 border border-white/10 rounded-xl p-5 text-white/80 text-sm leading-relaxed whitespace-pre-line font-mono">
              {source.narrative}
            </div>
            <p className="text-xs text-white/40 mt-2 italic">
              * Replace bracketed items [AMOUNT], [NUMBER], etc. with actual figures before submitting.
            </p>
          </div>

          {source.contactInfo && (
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Mail size={14} />
              <span>Contact: {source.contactInfo}</span>
            </div>
          )}

          {source.website && (
            <a
              href={source.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:text-primary/80 transition-colors"
            >
              Visit Website <ArrowRight size={14} />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function FundraisingPlaybook() {
  const [activeTab, setActiveTab] = useState<"sources" | "calendar" | "projections" | "strategies">("sources");

  const tabs = [
    { id: "sources" as const, label: "Funding Sources", icon: DollarSign, count: fundingSources.length },
    { id: "calendar" as const, label: "Annual Calendar", icon: Calendar, count: 12 },
    { id: "projections" as const, label: "Revenue Projections", icon: TrendingUp, count: null },
    { id: "strategies" as const, label: "Capital Campaign", icon: Target, count: null },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
            <DollarSign size={16} /> Fundraising Playbook
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6">
            Complete <span className="text-primary">Funding</span> Guide
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {fundingSources.length} funding sources with pre-written applications, a 12-month fundraising calendar, revenue projections, and capital campaign strategy — everything you need to fund From The Ground Up's mission.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
                {tab.count && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    activeTab === tab.id ? "bg-white/20" : "bg-white/10"
                  }`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {activeTab === "sources" && (
          <div className="space-y-4">
            {fundingSources.map((source, i) => (
              <SourceCard key={source.id} source={source} index={i} />
            ))}
          </div>
        )}

        {activeTab === "calendar" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {annualCalendar.map((month, i) => (
              <motion.div
                key={month.month}
                {...fadeIn}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  {month.month}
                </h3>
                <ul className="space-y-2">
                  {month.activities.map((activity, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "projections" && (
          <div className="space-y-8">
            <motion.div {...fadeIn} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">10-Year Revenue Growth Projections</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Year</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Government</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Foundation</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Corporate</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Individual</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Events</th>
                      <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-primary font-display">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {revenueProjections.map((row) => (
                      <tr key={row.year} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-3 px-4 font-bold text-white">{row.year}</td>
                        <td className="py-3 px-4 text-white/70">{row.government}</td>
                        <td className="py-3 px-4 text-white/70">{row.foundation}</td>
                        <td className="py-3 px-4 text-white/70">{row.corporate}</td>
                        <td className="py-3 px-4 text-white/70">{row.individual}</td>
                        <td className="py-3 px-4 text-white/70">{row.events}</td>
                        <td className="py-3 px-4 font-display font-bold text-primary text-lg">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-white/40 mt-4">
                * Projections assume successful 501(c)(3) determination, growing program capacity, and strong donor retention.
                Revenue diversification reduces dependency on any single source.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Revenue Diversification Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Government Grants", target: "35–40%", description: "DOES, DOL, WIOA, federal workforce grants — reliable but requires compliance", color: "bg-blue-500" },
                  { label: "Foundation Grants", target: "20–25%", description: "Local and national foundations — grow through relationships and outcomes", color: "bg-green-500" },
                  { label: "Corporate Partnerships", target: "15–20%", description: "Sponsorships, workforce pipeline fees, in-kind donations", color: "bg-amber-500" },
                  { label: "Individual Donors", target: "15–20%", description: "Major donors, annual fund, planned giving — most sustainable long-term", color: "bg-primary" },
                  { label: "Earned Revenue", target: "5–10%", description: "Training fees (sliding scale), consulting, facility rental, social enterprise", color: "bg-purple-500" },
                  { label: "Events & Campaigns", target: "5–10%", description: "Annual gala, GivingTuesday, online campaigns, community events", color: "bg-pink-500" },
                ].map((source) => (
                  <div key={source.label} className="flex items-start gap-4">
                    <div className={`w-4 h-4 rounded-full ${source.color} mt-1 flex-shrink-0`} />
                    <div>
                      <div className="font-bold text-white">{source.label}</div>
                      <div className="text-primary text-sm font-bold">{source.target} of revenue</div>
                      <div className="text-white/60 text-sm mt-1">{source.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === "strategies" && (
          <div className="space-y-8">
            <motion.div {...fadeIn} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-2">Capital Campaign: "Building Futures"</h3>
              <p className="text-white/60 mb-8">A 3-year capital campaign to establish FTGU's permanent training facility and endowment.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-primary/10 border border-primary/20 rounded-xl">
                  <div className="text-4xl font-display font-black text-primary">$5M</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white/50 mt-2">Campaign Goal</div>
                </div>
                <div className="text-center p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-4xl font-display font-black text-white">3 Years</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white/50 mt-2">Campaign Duration</div>
                </div>
                <div className="text-center p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-4xl font-display font-black text-white">36 Months</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white/50 mt-2">Quiet + Public Phase</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Campaign Allocation</h4>
                  <div className="space-y-3">
                    {[
                      { item: "Permanent Training Facility (lease/purchase, renovation)", amount: "$2,500,000", pct: "50%" },
                      { item: "Equipment & Tools (all 6 trade workshops)", amount: "$750,000", pct: "15%" },
                      { item: "Operating Reserve (2 years)", amount: "$500,000", pct: "10%" },
                      { item: "Technology & AI Lab", amount: "$350,000", pct: "7%" },
                      { item: "Endowment Seed (student scholarships)", amount: "$500,000", pct: "10%" },
                      { item: "Campaign Costs (materials, events, staff)", amount: "$250,000", pct: "5%" },
                      { item: "Program Expansion", amount: "$150,000", pct: "3%" },
                    ].map((line) => (
                      <div key={line.item} className="flex items-center justify-between bg-black/20 rounded-lg px-4 py-3">
                        <span className="text-white/80 text-sm">{line.item}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-white/50 text-sm">{line.pct}</span>
                          <span className="font-bold text-white">{line.amount}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Campaign Phases</h4>
                  <div className="space-y-4">
                    {[
                      {
                        phase: "Phase 1: Quiet Campaign (Months 1–12)",
                        goal: "$2,500,000 (50%)",
                        activities: [
                          "Board members each make personal leadership gifts",
                          "Identify and cultivate 10–15 major donors ($50,000+)",
                          "Secure 2–3 corporate foundation partners ($100,000+)",
                          "Apply for government capital grants (DOES, EDA)",
                          "Reach 50% of goal before going public",
                        ],
                      },
                      {
                        phase: "Phase 2: Public Campaign (Months 13–30)",
                        goal: "$2,000,000 (40%)",
                        activities: [
                          "Launch public campaign with media event",
                          "Broaden donor base with mid-level asks ($1,000–$25,000)",
                          "Host campaign-specific fundraising events",
                          "Launch naming opportunities (rooms, workshops, programs)",
                          "Community giving campaign for grassroots support",
                        ],
                      },
                      {
                        phase: "Phase 3: Completion (Months 31–36)",
                        goal: "$500,000 (10%)",
                        activities: [
                          "Final push for remaining pledges and new donors",
                          "Challenge grant matching for last-mile giving",
                          "Victory celebration and donor recognition event",
                          "Transition to stewardship and annual giving program",
                        ],
                      },
                    ].map((phase) => (
                      <div key={phase.phase} className="bg-black/20 border border-white/10 rounded-xl p-5">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-bold text-white">{phase.phase}</h5>
                          <span className="text-primary font-bold text-sm">{phase.goal}</span>
                        </div>
                        <ul className="space-y-2">
                          {phase.activities.map((a, i) => (
                            <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                              <CheckCircle size={14} className="text-primary mt-0.5 flex-shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Naming Opportunities</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { name: "Training Facility (Building)", amount: "$1,000,000+" },
                      { name: "AI Technology Lab", amount: "$250,000" },
                      { name: "Construction Workshop", amount: "$150,000" },
                      { name: "Electrical Training Bay", amount: "$150,000" },
                      { name: "Plumbing Workshop", amount: "$150,000" },
                      { name: "HVAC Systems Lab", amount: "$150,000" },
                      { name: "Carpentry & Woodworking Shop", amount: "$150,000" },
                      { name: "Student Lounge / Common Area", amount: "$75,000" },
                      { name: "Scholarship Fund (named)", amount: "$50,000" },
                      { name: "Classroom (each)", amount: "$25,000" },
                      { name: "Tool Stations (each)", amount: "$10,000" },
                      { name: "Dedication Wall Plaque", amount: "$5,000" },
                    ].map((opp) => (
                      <div key={opp.name} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3">
                        <span className="text-white/80 text-sm">{opp.name}</span>
                        <span className="font-bold text-primary text-sm">{opp.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Social Enterprise Revenue Streams</h3>
              <p className="text-white/60 mb-6">Beyond grants and donations, FTGU can generate earned revenue through these social enterprise activities:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Community Repair Services", description: "Students perform supervised home repairs for community members at below-market rates. Revenue covers materials and student stipends while building real-world experience.", revenue: "$50,000–$150,000/year" },
                  { name: "Construction Consulting", description: "FTGU staff and advanced students provide construction consulting to small businesses, homeowners, and community organizations.", revenue: "$30,000–$75,000/year" },
                  { name: "Facility Rental", description: "Rent workshop space to contractors, unions, and companies for training sessions during off-hours.", revenue: "$20,000–$50,000/year" },
                  { name: "Corporate Training Contracts", description: "Deliver customized training programs for construction companies, property managers, and government agencies.", revenue: "$75,000–$200,000/year" },
                  { name: "Certification Testing Center", description: "Become an authorized testing center for OSHA, NCCER, EPA 608, and other trade certifications.", revenue: "$25,000–$75,000/year" },
                  { name: "Tool Library Membership", description: "Community members pay monthly fees to access professional-grade tools, generating revenue while serving the community.", revenue: "$10,000–$30,000/year" },
                ].map((enterprise) => (
                  <div key={enterprise.name} className="bg-black/20 border border-white/10 rounded-xl p-5">
                    <h5 className="font-bold text-white mb-2">{enterprise.name}</h5>
                    <p className="text-white/60 text-sm mb-3">{enterprise.description}</p>
                    <div className="text-primary font-bold text-sm">{enterprise.revenue}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        <motion.div {...fadeIn} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4">Ready to Start Fundraising?</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Use these complete documents and strategies to begin building FTGU's funding base.
              Every application template is pre-written with your organization's details — just fill in the specifics and submit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/documents" className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2">
                View All Documents <FileText size={18} />
              </Link>
              <Link href="/compliance-guide" className="px-8 py-4 bg-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-2">
                Compliance Guide <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
