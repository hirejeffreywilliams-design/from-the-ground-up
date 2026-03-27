import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  FileText, Download, CheckCircle, DollarSign, Building2,
  ArrowRight, ChevronDown, ChevronUp, Award, Users,
  Calendar, Globe, Star, Target, AlertTriangle
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface GrantDocument {
  id: string;
  title: string;
  funder: string;
  type: string;
  amount: string;
  sections: { heading: string; content: string }[];
}

const grantDocuments: GrantDocument[] = [
  {
    id: "does-workforce",
    title: "DOES Workforce Development Innovation Initiative — Full Application",
    funder: "DC Department of Employment Services",
    type: "Government Grant Application",
    amount: "$250,000",
    sections: [
      {
        heading: "COVER PAGE",
        content: `GRANT APPLICATION

Applicant Organization: From The Ground Up, Inc.
EIN: [TO BE OBTAINED]
DUNS/UEI: [TO BE OBTAINED]
Address: Washington, DC [ADDRESS TO BE DETERMINED]
Executive Director: Jeffrey Williams
Contact Phone: [PHONE]
Contact Email: hello@fromthegroundup.org
Website: www.fromthegroundup.org
Amount Requested: $250,000
Project Period: 12 months
Congressional District: DC At-Large
Date of Incorporation: [DATE]
Tax-Exempt Status: 501(c)(3) [PENDING/APPROVED]`
      },
      {
        heading: "I. EXECUTIVE SUMMARY",
        content: `From The Ground Up (FTGU) requests $250,000 from the DC Department of Employment Services Workforce Development Innovation Initiatives to implement a comprehensive, AI-enhanced trade skills training program serving 100 DC residents over a 12-month period.

FTGU will train participants in six high-demand construction trades — Construction Management, Electrical Systems, Plumbing, Carpentry & Woodworking, HVAC Systems, and AI in the Trades — preparing them for immediate employment in the District's booming construction sector, particularly the multi-billion dollar DC Commanders Stadium project beginning construction in 2026.

What makes FTGU innovative is our integration of artificial intelligence across every trade discipline. Participants learn to leverage AI for project estimation, safety compliance analysis, business development, and construction management — skills that set them apart in the modern construction industry and position them for leadership roles.

Expected Outcomes:
• 100 DC residents trained in skilled trades
• 85% program completion rate
• 90% industry-recognized certification attainment
• 80% employment placement within 90 days
• Average starting wage of $22/hour or higher
• 50% of graduates connected to DC Commanders Stadium opportunities`
      },
      {
        heading: "II. STATEMENT OF NEED",
        content: `The District of Columbia faces a critical skilled trades workforce shortage that threatens both economic development and community prosperity.

WORKFORCE GAP: According to the Associated General Contractors of America, 80% of construction firms report difficulty finding qualified workers. In the DC metro area, this shortage is particularly acute as major infrastructure projects compete for a limited pool of skilled workers.

DC COMMANDERS STADIUM: The multi-billion dollar DC Commanders Stadium project, with construction beginning in 2026, will create an estimated 5,000+ construction jobs over a 3-5 year build period. Without targeted training programs, these jobs will be filled by workers from outside the District, and DC residents will miss this once-in-a-generation economic opportunity.

COMMUNITY IMPACT: The neighborhoods surrounding the stadium site — predominantly in Wards 7 and 8 — have the highest unemployment rates in the District. Residents of these communities deserve first access to the jobs this project will create.

CURRENT GAPS: Existing workforce programs in DC have limited construction trade offerings and virtually no AI-integration component. FTGU fills this gap with a comprehensive, innovative approach that produces workers who are both trade-skilled and technology-capable.

TARGET POPULATION: FTGU will prioritize:
• DC residents ages 18+ from Wards 5, 7, and 8
• Unemployed and underemployed individuals
• Returning citizens seeking stable career pathways
• Career changers from declining industries
• Young adults (18-24) not in education or employment
• Veterans transitioning to civilian careers`
      },
      {
        heading: "III. PROJECT DESIGN & METHODOLOGY",
        content: `PROGRAM STRUCTURE:

FTGU operates 16-week cohort-based training programs with the following components:

Weeks 1-2: FOUNDATION
• OSHA 10-Hour Construction Safety certification
• First Aid/CPR/AED certification
• Workplace readiness: communication, teamwork, professionalism
• Introduction to construction math and blueprint reading
• AI tools orientation: how AI is transforming the trades

Weeks 3-8: CORE TRADE TRAINING
• Participants select primary trade track:
  - Construction Management: site layout, materials, scheduling, project coordination
  - Electrical Systems: residential wiring, circuits, code compliance, panel work
  - Plumbing: pipe systems, fixtures, drainage, water supply, code requirements
  - Carpentry & Woodworking: framing, finishing, cabinetry, trim work
  - HVAC Systems: heating, cooling, ventilation, refrigerant handling, EPA prep
  - AI in the Trades: estimating software, drone operations, 3D modeling, smart systems
• 60% hands-on workshop training / 40% classroom instruction
• Industry-standard tools and materials provided
• Instructor-to-student ratio: 1:12 maximum

Weeks 9-12: ADVANCED SKILLS & SPECIALIZATION
• Advanced techniques in primary trade
• Cross-trade exposure (2 additional trades, 1 week each)
• NCCER Core Certification preparation and exam
• Trade-specific certification preparation (EPA 608, NATE, etc.)
• AI integration: Using AI tools specific to chosen trade

Weeks 13-14: CAREER PREPARATION
• Resume development and interview coaching
• Job search strategies and networking
• Financial literacy and money management
• Introduction to entrepreneurship and business ownership
• Portfolio development with project documentation

Weeks 15-16: CAPSTONE & PLACEMENT
• Capstone project demonstrating mastery of primary trade
• Community service project (real-world application)
• Employer networking events and job fairs
• Job placement assistance and apprenticeship connections
• Graduation ceremony with certifications awarded

INNOVATION — AI INTEGRATION:
FTGU's signature innovation is integrating artificial intelligence into every aspect of trade training:
• AI-powered construction estimation tools
• Drone technology for site assessment and documentation
• AI safety analysis for hazard identification
• Business development tools (AI-assisted marketing, client management)
• 3D modeling and visualization for project planning
This integration produces graduates who are uniquely positioned for leadership roles in modern construction.`
      },
      {
        heading: "IV. ORGANIZATIONAL CAPACITY",
        content: `FOUNDING LEADERSHIP:
Jeffrey Williams founded From The Ground Up in honor of his father, Jeffrey Williams Sr., who instilled the values of hard work, craftsmanship, and community service that drive the organization's mission. Jeffrey brings [YEARS] of experience in [RELEVANT BACKGROUND] and a deep commitment to empowering DC residents through skilled trade education.

BOARD OF DIRECTORS:
[LIST BOARD MEMBERS WITH RELEVANT QUALIFICATIONS]
The Board provides oversight in areas of construction industry expertise, nonprofit management, financial oversight, legal compliance, and community engagement.

STAFFING PLAN:
• Executive Director (1 FTE) — Overall program management and community relations
• Program Manager (1 FTE) — Curriculum development, instructor oversight, student tracking
• Lead Instructors (3 FTE) — Certified trade professionals with teaching experience
• Job Placement Coordinator (1 FTE) — Employer partnerships, graduate placement
• Administrative Assistant (1 FTE) — Operations, data entry, student records
• Part-time Instructors (4 PTE) — Specialty trade instruction as needed

PARTNERSHIPS:
FTGU has established or is developing partnerships with:
• [CONSTRUCTION COMPANIES] — employer pipeline, internship sites
• [UNIONS] — apprenticeship placement partnerships
• [COMMUNITY ORGANIZATIONS] — student recruitment, wrap-around services
• [EQUIPMENT SUPPLIERS] — tool and material donations/discounts`
      },
      {
        heading: "V. EVALUATION PLAN",
        content: `FTGU will track and report the following metrics:

ENROLLMENT METRICS (Monthly):
• Number of applicants
• Number enrolled by ward, age, gender, race/ethnicity
• Demographics of participants vs. target population

PROGRAM METRICS (Ongoing):
• Daily attendance rate (target: 90%+)
• Module completion rates
• Skills assessment scores (pre/post)
• Instructor evaluations by students

OUTCOME METRICS (Quarterly):
• Program completion rate (target: 85%+)
• Certification attainment rate (target: 90%+)
  - OSHA 10 certification
  - First Aid/CPR/AED
  - NCCER Core
  - Trade-specific certifications
• 30-day employment placement rate (target: 70%+)
• 90-day employment placement rate (target: 80%+)
• Average starting hourly wage (target: $22+)
• 6-month job retention rate (target: 75%+)
• Student satisfaction score (target: 90%+)

LONG-TERM TRACKING (Annual):
• 12-month job retention
• Wage progression
• Advancement to apprenticeship programs
• Business ownership rates among graduates
• Alumni engagement and giving

DATA COLLECTION METHODS:
• Student information system for enrollment and attendance
• Pre/post skills assessments using standardized tools
• Monthly employer surveys for placed graduates
• Quarterly student satisfaction surveys
• Annual alumni outcome survey
• DC DOES wage matching (with student consent)

REPORTING:
• Monthly dashboard reports to DOES project officer
• Quarterly narrative and data reports
• Annual comprehensive evaluation report
• Final report with all outcomes and lessons learned`
      },
      {
        heading: "VI. BUDGET",
        content: `LINE ITEM BUDGET — 12-MONTH PROJECT PERIOD

PERSONNEL                                           $147,000
  Executive Director (0.5 FTE)                        $35,000
  Program Manager (1.0 FTE)                           $40,000
  Lead Instructors (2.0 FTE x $30,000)                $60,000
  Administrative Support (0.5 FTE)                    $12,000

FRINGE BENEFITS (25%)                                 $36,750

EQUIPMENT & SUPPLIES                                  $30,000
  Construction tools and equipment                    $12,000
  Electrical training materials                        $5,000
  Plumbing fixtures and supplies                       $4,000
  Carpentry tools and lumber                           $4,000
  HVAC training equipment                              $3,000
  Safety equipment (PPE for all students)              $2,000

STUDENT SUPPORT                                       $15,000
  Certification exam fees (100 students)               $8,000
  Student transportation assistance                    $4,000
  Student workbooks and materials                      $3,000

FACILITY                                              $12,000
  Workshop space rental (shared)                      $10,000
  Utilities                                            $2,000

OTHER DIRECT COSTS                                     $6,250
  Insurance (general liability, workers' comp)         $3,000
  Technology (AI tools, software licenses)             $2,000
  Marketing and recruitment                            $1,250

INDIRECT COSTS (10%)                                   $3,000
  (De minimis rate per 2 CFR 200.414)

TOTAL REQUEST:                                      $250,000

COST PER PARTICIPANT: $2,500
(100 students trained at $2,500 each)

BUDGET NARRATIVE:
[Each line item would be justified with detailed explanation of need, calculation methodology, and connection to program activities. Expand each category with specific items, quantities, and unit costs.]`
      },
      {
        heading: "VII. SUSTAINABILITY PLAN",
        content: `FTGU's sustainability strategy ensures continued operations beyond the grant period:

YEAR 1 (GRANT YEAR):
• Establish program with DOES funding as anchor
• Begin corporate partnership development
• Apply for additional government and foundation grants
• Launch individual donor cultivation

YEAR 2:
• WIOA ETPL approval enables ITA funding per student
• Corporate sponsorships from construction companies ($50,000+)
• Foundation grants from Home Depot, Lowe's, etc. ($75,000+)
• Fee-for-service training contracts ($25,000+)

YEAR 3+:
• Diversified revenue: government (35%), foundation (25%), corporate (20%), individual (15%), earned (5%)
• Social enterprise revenue through community repair services
• Alumni giving program
• No single funding source exceeds 35% of budget

The DOES grant provides critical startup funding to demonstrate program effectiveness, build organizational infrastructure, and establish the outcome data necessary to attract diverse, sustainable funding.`
      },
      {
        heading: "VIII. CERTIFICATIONS",
        content: `The applicant hereby certifies that:

1. The organization is incorporated as a nonprofit corporation in the District of Columbia.
2. The organization has applied for or received 501(c)(3) tax-exempt status from the IRS.
3. The organization maintains a policy of nondiscrimination in its programs, activities, and employment.
4. The organization complies with all applicable federal, state, and local laws and regulations.
5. The information contained in this application is true and correct to the best of my knowledge.
6. The organization has the organizational capacity to carry out the proposed project.
7. Required organizational documents (Articles of Incorporation, Bylaws, Board List, Budget, IRS Determination Letter) are attached as appendices.

_________________________________
Jeffrey Williams, Executive Director
From The Ground Up, Inc.
Date: _______________`
      },
    ],
  },
  {
    id: "foundation-general",
    title: "Foundation Grant Proposal — General Template",
    funder: "Applicable to: Home Depot Foundation, Lowe's Foundation, Community Foundations, Corporate Foundations",
    type: "Foundation Grant Proposal",
    amount: "$50,000 – $500,000 (adjust per funder)",
    sections: [
      {
        heading: "LETTER OF INQUIRY / COVER LETTER",
        content: `[DATE]

[Foundation Name]
[Address]

Dear [Program Officer Name / Grants Committee],

On behalf of From The Ground Up (FTGU), I am writing to request a grant of $[AMOUNT] to support our comprehensive trade skills training program serving residents of Washington, DC.

Founded in honor of my father, Jeffrey Williams Sr., FTGU empowers individuals of all ages with hands-on training in six high-demand construction trades — enhanced by cutting-edge artificial intelligence integration — preparing them for family-sustaining careers in the District's booming construction sector.

THE OPPORTUNITY: The multi-billion dollar DC Commanders Stadium project, beginning construction in 2026, will create over 5,000 skilled construction jobs. Without targeted training programs like FTGU, DC residents — particularly those in underserved communities — will be left behind as these opportunities go to workers from outside the District.

OUR APPROACH: FTGU delivers 16-week cohort-based training programs in Construction, Electrical Systems, Plumbing, Carpentry, HVAC, and AI in the Trades. What sets us apart is our integration of artificial intelligence across every discipline, producing graduates who are both traditionally skilled and technology-capable.

YOUR INVESTMENT: A grant of $[AMOUNT] will enable FTGU to [SPECIFIC USE]:
• Train [NUMBER] DC residents in skilled trades
• Achieve [X]% certification attainment and [X]% job placement rates
• Connect graduates to the DC Commanders Stadium workforce pipeline
• [ADDITIONAL SPECIFIC OUTCOMES]

I would welcome the opportunity to discuss how FTGU aligns with [Foundation Name]'s commitment to [FOUNDATION'S STATED PRIORITY]. I can be reached at hello@fromthegroundup.org or [PHONE].

Thank you for your consideration.

Sincerely,
Jeffrey Williams
Founder & Executive Director
From The Ground Up, Inc.`
      },
      {
        heading: "ORGANIZATION BACKGROUND",
        content: `From The Ground Up (FTGU) is a Washington, DC-based nonprofit organization dedicated to empowering individuals of all ages with hands-on trade skills in construction, electrical work, plumbing, carpentry, HVAC, and AI-integrated technologies.

FOUNDING STORY: FTGU was founded by Jeffrey Williams in honor of his father, Jeffrey Williams Sr., who taught that the foundation of a meaningful life is built through skill, service, and community. This personal mission drives every aspect of FTGU's work — from program design to student support to community engagement.

MISSION: To provide comprehensive, accessible trade skills training that transforms lives, strengthens communities, and builds a diverse, skilled workforce for the construction industry.

VISION: To become the premier trade education institution in the Washington, DC region and a national model for innovative workforce development.

PROGRAMS: FTGU offers training in six trade disciplines:
1. Construction Management — site coordination, materials, scheduling, safety
2. Electrical Systems — residential/commercial wiring, code compliance, solar
3. Plumbing — pipe systems, fixtures, drainage, water supply, backflow
4. Carpentry & Woodworking — framing, finishing, cabinetry, restoration
5. HVAC Systems — heating, cooling, ventilation, refrigerant, energy efficiency
6. AI in the Trades — estimating software, drones, 3D modeling, smart systems

DIFFERENTIATOR: FTGU is the only trade training program in the DC region that integrates artificial intelligence across all disciplines, preparing graduates for leadership in the modern construction industry.`
      },
      {
        heading: "PROBLEM STATEMENT",
        content: `THREE CONVERGING CHALLENGES:

1. SKILLED WORKER SHORTAGE: The construction industry faces a national workforce crisis. 80% of construction firms cannot find enough qualified workers (AGC of America). In the DC metro area, the shortage is particularly severe, driving up project costs and timelines.

2. ECONOMIC INEQUALITY: DC has one of the highest income inequality levels in the nation. Residents of Wards 7 and 8 face unemployment rates 3-4x the citywide average. Without intentional intervention, these residents will not benefit from the construction boom surrounding them.

3. COMMANDERS STADIUM OPPORTUNITY: The multi-billion dollar DC Commanders Stadium project beginning in 2026 represents a once-in-a-generation opportunity for DC residents. An estimated 5,000+ construction jobs will be created over a 3-5 year build period, paying $22-$60/hour.

WITHOUT FTGU: DC residents — particularly those in historically underserved communities — lack accessible pathways to the credentials, skills, and connections needed to access these opportunities. The jobs will go to workers from outside DC, and the wealth-building potential will flow out of the communities that need it most.

WITH FTGU: DC residents receive free, comprehensive trade training that leads directly to employment and career advancement. Every graduate represents a family lifted toward economic stability, a community strengthened, and a contribution to DC's construction workforce self-sufficiency.`
      },
      {
        heading: "PROPOSED PROJECT",
        content: `[Customize based on specific funder requirements. Use the DOES application narrative above as the base, adjusted for the funder's word limits and priorities.]

REQUEST: $[AMOUNT] to fund [SPECIFIC]:
• Equipment and tools for [TRADE] training workshop: $XX,XXX
• Instructor salaries for [X] cohorts of [X] students: $XX,XXX
• Student certification fees and support services: $XX,XXX
• AI technology and software for innovation component: $XX,XXX

TIMELINE:
Month 1-2: [Setup activities]
Month 3-12: [Training delivery]
Month 12: [Outcomes reporting]

MEASUREMENT:
• Enrollment: [NUMBER]
• Completion: [X]%
• Certification: [X]%
• Job Placement (90-day): [X]%
• Average Starting Wage: $[XX]/hr`
      },
      {
        heading: "BUDGET SUMMARY",
        content: `[Adjust amounts based on specific request]

Personnel                    $XXX,XXX    XX%
Fringe Benefits               $XX,XXX    XX%
Equipment & Supplies           $XX,XXX    XX%
Student Support                $XX,XXX    XX%
Facility Costs                 $XX,XXX    XX%
Other Direct Costs             $XX,XXX    XX%
Indirect Costs                  $X,XXX    XX%
————————————————————————————————————
TOTAL REQUEST              $XXX,XXX   100%

Other Funding Sources:
[LIST ANY MATCHING FUNDS OR IN-KIND CONTRIBUTIONS]
Total Project Budget: $XXX,XXX`
      },
    ],
  },
  {
    id: "corporate-partnership",
    title: "Corporate Partnership Proposal",
    funder: "Construction Companies, Material Suppliers, General Contractors",
    type: "Corporate Partnership Agreement",
    amount: "$5,000 – $250,000/year",
    sections: [
      {
        heading: "CORPORATE PARTNERSHIP PROPOSAL",
        content: `FROM THE GROUND UP
Building Tomorrow's Workforce — Today

CONFIDENTIAL PARTNERSHIP PROPOSAL
Prepared for: [COMPANY NAME]
Prepared by: Jeffrey Williams, Founder & Executive Director
Date: [DATE]`
      },
      {
        heading: "THE CHALLENGE YOUR COMPANY FACES",
        content: `Your company knows the skilled worker shortage firsthand:

• 80% of construction firms report difficulty finding qualified workers (AGC)
• The average construction worker is 42.5 years old — the workforce is aging out
• Training a new hire costs $5,000–$15,000 in lost productivity
• Project delays due to labor shortages cost your company $[X] annually
• The DC Commanders Stadium project will intensify competition for workers

FTGU SOLVES THIS PROBLEM by training pre-screened, certified, job-ready workers specifically for companies like yours.`
      },
      {
        heading: "PARTNERSHIP TIERS & BENEFITS",
        content: `🏗️ FOUNDATION PARTNER — $100,000+/year
BENEFITS:
✅ Named training program ("The [Company] Construction Academy at FTGU")
✅ PRIORITY hiring access to all graduates (first review of resumes, first interviews)
✅ Custom training modules aligned with your company's specific needs
✅ 4 seats on FTGU Industry Advisory Board
✅ Logo displayed prominently on FTGU website, training facility, and all materials
✅ Quarterly workforce reports and pipeline projections
✅ Annual recognition gala: Title Sponsor + VIP table for 10
✅ Featured in FTGU Annual Report and press releases
✅ Tax deduction for full amount as charitable contribution

⚡ CORNERSTONE SPONSOR — $50,000/year
BENEFITS:
✅ Co-branded training module in your specialty area
✅ Priority access to graduate hiring pipeline
✅ 2 seats on FTGU Industry Advisory Board
✅ Logo on FTGU website and training materials
✅ Semi-annual workforce reports
✅ Annual gala: VIP table for 8
✅ Featured in FTGU Annual Report

🔧 BUILDER SPONSOR — $25,000/year
BENEFITS:
✅ Graduate hiring pipeline access
✅ 1 seat on FTGU Industry Advisory Board
✅ Logo on website and annual report
✅ Invitation to graduation ceremonies
✅ Annual gala: Table for 6

🔨 TOOL SPONSOR — $10,000/year
BENEFITS:
✅ Graduate resume access
✅ Logo on FTGU website
✅ Recognition in annual report
✅ Annual gala: 4 tickets

🧱 COMMUNITY SUPPORTER — $5,000/year
BENEFITS:
✅ Recognition on website and social media
✅ Invitation to annual events
✅ Annual gala: 2 tickets`
      },
      {
        heading: "RETURN ON INVESTMENT",
        content: `YOUR PARTNERSHIP IS NOT JUST CHARITY — IT'S A BUSINESS STRATEGY:

1. REDUCED RECRUITING COSTS
   Industry average cost-per-hire: $4,700 (SHRM)
   FTGU provides pre-screened, trained candidates at zero recruiting cost
   SAVINGS: $4,700 x [NUMBER OF HIRES] = $[TOTAL]

2. REDUCED TRAINING COSTS
   FTGU graduates arrive with OSHA certification, NCCER credentials, and hands-on experience
   Your onboarding time is cut by 50%+
   SAVINGS: $2,500–$7,500 per hire in reduced training time

3. WORKFORCE DIVERSITY
   FTGU graduates represent DC's diverse communities
   Helps meet diversity hiring goals and DC local hiring requirements
   Stadium project local hiring requirements: up to 51% DC residents

4. COMMUNITY IMPACT & BRAND
   Visible commitment to DC community development
   Positive media coverage and stakeholder goodwill
   CSR/ESG reporting metrics for your company

5. TAX BENEFITS
   Full tax deduction for sponsorship as charitable contribution to 501(c)(3)
   Potential additional tax credits through DC programs`
      },
      {
        heading: "NEXT STEPS",
        content: `I would welcome the opportunity to meet with you to discuss how a partnership between [COMPANY NAME] and From The Ground Up can address your workforce challenges while making a lasting impact on the DC community.

PROPOSED NEXT STEPS:
1. Introductory meeting (30 minutes) — I'll share our program in detail
2. Site visit — Tour our training facility and meet current students
3. Customize partnership — Tailor benefits to your company's specific needs
4. Execute agreement — Begin the partnership and start receiving candidates

CONTACT:
Jeffrey Williams
Founder & Executive Director
From The Ground Up, Inc.
Email: hello@fromthegroundup.org
Phone: [PHONE]
Website: www.fromthegroundup.org

"Every worker we train is a project you can staff. Every graduate is a future leader in your company."
— Jeffrey Williams`
      },
    ],
  },
  {
    id: "case-statement",
    title: "Case for Support — Comprehensive Fundraising Document",
    funder: "All Audiences (Donors, Foundations, Media, Board)",
    type: "Case Statement",
    amount: "N/A — Master fundraising narrative",
    sections: [
      {
        heading: "THE CASE FOR FROM THE GROUND UP",
        content: `A LEGACY OF BUILDING

When Jeffrey Williams was young, his father, Jeffrey Williams Sr., taught him something that would shape the rest of his life: the foundation of a meaningful future is built with your own hands. Through every lesson in measurement, every demonstration of proper technique, every quiet moment of mentorship at a workbench, Jeffrey Sr. showed his son that the trades weren't just a career — they were a calling.

Today, Jeffrey carries his father's legacy forward through From The Ground Up, a nonprofit organization that empowers individuals of all ages with the hands-on trade skills they need to build careers, support families, and strengthen communities.

This is not just a training program. This is a movement.`
      },
      {
        heading: "THE CRISIS WE ADDRESS",
        content: `America is running out of skilled workers.

• 650,000 new construction workers needed annually to meet demand
• 80% of firms cannot find qualified workers
• Average construction worker age: 42.5 and climbing
• $1.4 trillion in construction spending, not enough workers to build it

Meanwhile, in Washington, DC:
• 5,000+ construction jobs coming from the Commanders Stadium alone
• DC residents in Wards 5, 7, and 8 face unemployment rates 3-4x citywide average
• Young adults without college degrees have limited pathways to family-sustaining wages
• Returning citizens need second-chance career opportunities

The workers exist. The jobs exist. What's missing is the bridge between them.

FTGU is that bridge.`
      },
      {
        heading: "WHAT MAKES FTGU DIFFERENT",
        content: `1. COMPREHENSIVE: Six complete trade programs, not just one
2. INNOVATIVE: AI integration across every discipline — the only program of its kind in DC
3. ACCESSIBLE: Free training for DC residents who need it most
4. HOLISTIC: Job readiness, financial literacy, entrepreneurship, and career support
5. CONNECTED: Direct pipelines to employers, unions, and apprenticeship programs
6. PERSONAL: Founded on a father's legacy, driven by authentic community commitment
7. FORWARD-LOOKING: Preparing workers for tomorrow's construction industry, not yesterday's`
      },
      {
        heading: "THE IMPACT OF YOUR INVESTMENT",
        content: `Every dollar invested in FTGU generates measurable returns:

$25     → Safety equipment for one student for one week
$100    → One day of hands-on workshop instruction
$250    → Certification exam fees for one student
$500    → Professional-grade starter tool kit for one graduate
$1,000  → Full OSHA certification for one student
$2,500  → Complete training program for one student (16 weeks)
$5,000  → One month of instructor salary
$10,000 → Launches a new certification track
$25,000 → Named scholarship fund for one year
$50,000 → Equips an entire trade workshop
$100,000→ Names a training program for one year
$500,000→ Names the training facility

BEYOND DOLLARS:
Each FTGU graduate earns an average of $45,000–$65,000 in their first year of employment. Over a 30-year career, a skilled tradesperson will earn $1.5M–$3M+. Every student we train generates lifetime economic impact that far exceeds the cost of their training.

This is not charity. This is economic development. This is community investment. This is building futures — from the ground up.`
      },
      {
        heading: "JOIN US",
        content: `Every building started with a foundation. Every career started with a first lesson. Every movement started with someone who said yes.

Be a founder. Be a builder. Be part of something that will transform lives for generations.

WAYS TO GIVE:
• Make a tax-deductible donation at www.fromthegroundup.org/donate
• Become a corporate sponsor
• Include FTGU in your estate plan
• Donate tools, materials, or equipment
• Volunteer your expertise as a mentor or instructor
• Advocate for workforce development funding

CONTACT:
Jeffrey Williams, Founder & Executive Director
hello@fromthegroundup.org
www.fromthegroundup.org

From The Ground Up is a 501(c)(3) tax-exempt organization.
All contributions are tax-deductible to the extent allowed by law.
EIN: [TO BE OBTAINED]`
      },
    ],
  },
];

function GrantDocumentCard({ doc, index }: { doc: GrantDocument; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      {...fadeIn}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">{doc.type}</span>
            <h3 className="text-xl font-display font-bold text-white mt-1">{doc.title}</h3>
            <p className="text-sm text-white/50 mt-1">{doc.funder}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-display font-black text-primary">{doc.amount}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-colors"
          >
            {expanded ? "Hide Document" : "View Complete Document"}
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <span className="text-xs text-white/40">{doc.sections.length} sections</span>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-white/10">
          {doc.sections.map((section, i) => (
            <div key={i} className="border-b border-white/5 p-6">
              <h4 className="text-lg font-bold text-primary mb-4">{section.heading}</h4>
              <div className="bg-black/20 border border-white/10 rounded-xl p-5 text-white/80 text-sm leading-relaxed whitespace-pre-line font-mono">
                {section.content}
              </div>
            </div>
          ))}
          <div className="p-6 bg-amber-500/5">
            <div className="flex items-start gap-2 text-sm text-amber-400">
              <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
              <span>
                Replace all bracketed items [LIKE THIS] with actual information before submitting.
                Have an attorney or grant writer review the complete application before submission.
              </span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function GrantApplications() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
            <FileText size={16} /> Ready-to-Submit Documents
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-6">
            Grant <span className="text-primary">Applications</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {grantDocuments.length} complete, pre-written grant applications and fundraising documents —
            customized for From The Ground Up. Fill in the specifics and submit.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle size={24} className="text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">These Documents Are Ready to Use</h3>
              <p className="text-white/70">
                Each application is pre-written with FTGU's mission, programs, and differentiators. Simply replace
                bracketed items like [AMOUNT], [DATE], and [PHONE] with actual information. Have a grant writer or
                attorney review before submitting.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {grantDocuments.map((doc, i) => (
            <GrantDocumentCard key={doc.id} doc={doc} index={i} />
          ))}
        </div>

        <motion.div {...fadeIn} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4">Need More Funding Strategies?</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              These applications are part of FTGU's comprehensive fundraising playbook with 12+ funding sources,
              a 12-month calendar, and 10-year revenue projections.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/fundraising" className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2">
                Fundraising Playbook <DollarSign size={18} />
              </Link>
              <Link href="/documents" className="px-8 py-4 bg-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-2">
                All Documents <FileText size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
