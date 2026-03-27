import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  DollarSign, Wrench, Zap, Droplets, Hammer, Wind, Cpu,
  TrendingUp, Star, CheckCircle, ArrowRight, Target, Users,
  Briefcase, Award, Clock, MapPin, Building2, Heart,
  ChevronDown, ChevronUp, Rocket, ShieldCheck, GraduationCap
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface EarningOpportunity {
  name: string;
  tradeSkill: string;
  startupCost: string;
  earningPotential: string;
  description: string;
  gettingStarted: string[];
  noLicenseRequired: boolean;
}

interface EarningTrack {
  id: string;
  name: string;
  icon: any;
  color: string;
  apprenticeWage: string;
  journeyWage: string;
  masterWage: string;
  businessOwner: string;
  opportunities: EarningOpportunity[];
}

const earningTracks: EarningTrack[] = [
  {
    id: "construction",
    name: "Construction",
    icon: Building2,
    color: "from-amber-500/20 to-amber-500/5",
    apprenticeWage: "$18–$25/hr",
    journeyWage: "$30–$45/hr",
    masterWage: "$50–$75/hr",
    businessOwner: "$80K–$250K+/yr",
    opportunities: [
      { name: "Handyman Services", tradeSkill: "General construction", startupCost: "$0–$200", earningPotential: "$40–$80/hr", description: "Offer basic home repairs, assembly, hanging shelves, minor fixes. DC homeowners pay premium rates for reliable handymen.", gettingStarted: ["Create profiles on TaskRabbit, Thumbtack, Nextdoor", "Start with friends/family referrals", "Build before/after photo portfolio", "Get business cards printed ($20)"], noLicenseRequired: true },
      { name: "Power Washing", tradeSkill: "Equipment operation", startupCost: "$200–$500 (rent equipment)", earningPotential: "$50–$100/hr", description: "Clean driveways, decks, siding, fences. Huge demand in DC suburbs. Low skill barrier, high hourly rate.", gettingStarted: ["Rent a pressure washer to start ($50/day)", "Practice on your own property first", "Price per square foot for consistency", "Offer spring cleanup specials"], noLicenseRequired: true },
      { name: "Demolition & Cleanout", tradeSkill: "General labor", startupCost: "$0 (need truck access)", earningPotential: "$200–$800/job", description: "Interior demolition, junk removal, property cleanouts. Constant demand for renovation projects in DC.", gettingStarted: ["Partner with someone who has a truck", "Post on Craigslist and Facebook Marketplace", "Build relationship with renovation contractors", "Charge by the truckload or by the job"], noLicenseRequired: true },
      { name: "Painting (Interior/Exterior)", tradeSkill: "Finishing", startupCost: "$100–$300", earningPotential: "$35–$70/hr", description: "Interior and exterior painting for homes and small businesses. One of the easiest trades to freelance immediately.", gettingStarted: ["Buy quality brushes, rollers, drop cloths, and tape", "Start with rooms, work up to full houses", "Offer color consultation as a value-add", "Get referrals by doing excellent prep work"], noLicenseRequired: true },
      { name: "Drywall Patching & Repair", tradeSkill: "Drywall", startupCost: "$50", earningPotential: "$50–$100/hr", description: "Patch holes, repair water damage, skim coat walls. Every landlord and homeowner needs this regularly.", gettingStarted: ["Master the basics: tape, mud, sand, texture match", "Offer free estimates to build pipeline", "Photograph your best smooth finishes", "Target property management companies"], noLicenseRequired: true },
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    icon: Zap,
    color: "from-yellow-500/20 to-yellow-500/5",
    apprenticeWage: "$20–$28/hr",
    journeyWage: "$35–$55/hr",
    masterWage: "$55–$85/hr",
    businessOwner: "$100K–$300K+/yr",
    opportunities: [
      { name: "Smart Home Installation", tradeSkill: "Low-voltage wiring", startupCost: "$100–$300", earningPotential: "$50–$100/hr", description: "Install smart thermostats, doorbells, cameras, lighting systems. Booming market as homeowners adopt smart tech.", gettingStarted: ["Learn Ring, Nest, Ecobee, Philips Hue systems", "Get certified by manufacturers (often free online)", "Target tech-savvy homeowners in upscale DC neighborhoods", "Offer package deals (smart thermostat + doorbell + cameras)"], noLicenseRequired: true },
      { name: "TV Mounting & Cable Management", tradeSkill: "Low-voltage", startupCost: "$50–$150", earningPotential: "$75–$200/job", description: "Mount TVs, hide cables, set up sound systems. Quick jobs with excellent hourly rates.", gettingStarted: ["Invest in a stud finder, drill, and cable concealment kit", "Offer on TaskRabbit and Thumbtack", "Upsell cable management and sound system setup", "Target new homeowners and apartment move-ins"], noLicenseRequired: true },
      { name: "Holiday Lighting Installation", tradeSkill: "Outdoor wiring", startupCost: "$100–$500", earningPotential: "$500–$3,000/season", description: "Install and remove holiday lighting for homes and businesses. Seasonal but highly profitable — October through January.", gettingStarted: ["Start marketing in September", "Offer installation + removal packages", "Invest in professional-grade clips and LED lights", "Target large homes in affluent neighborhoods"], noLicenseRequired: true },
      { name: "EV Charger Pre-Wire Assessment", tradeSkill: "Electrical assessment", startupCost: "$0", earningPotential: "$50–$75/consultation", description: "Help homeowners understand what's needed for EV charger installation. Refer licensed electricians for the actual install and earn referral fees.", gettingStarted: ["Learn EV charger electrical requirements", "Partner with licensed electricians for referrals", "Target EV owners through local EV groups", "Offer free initial assessments, charge for detailed reports"], noLicenseRequired: true },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    icon: Droplets,
    color: "from-blue-500/20 to-blue-500/5",
    apprenticeWage: "$18–$26/hr",
    journeyWage: "$32–$50/hr",
    masterWage: "$50–$80/hr",
    businessOwner: "$90K–$280K+/yr",
    opportunities: [
      { name: "Faucet & Fixture Replacement", tradeSkill: "Basic plumbing", startupCost: "$50–$100", earningPotential: "$75–$200/job", description: "Replace faucets, showerheads, toilet parts, and garbage disposals. Homeowners often don't want to tackle these themselves.", gettingStarted: ["Master the common fixture types and brands", "Carry basic fittings, Teflon tape, plumber's putty", "Offer same-day service for premium pricing", "Build relationships with hardware stores for referrals"], noLicenseRequired: true },
      { name: "Drain Cleaning (Manual)", tradeSkill: "Drain maintenance", startupCost: "$50–$200", earningPotential: "$75–$150/job", description: "Clear clogged drains using manual snakes and plungers. A common household problem with consistent demand.", gettingStarted: ["Invest in a quality hand snake and toilet auger", "Market as 'Chemical-Free Drain Clearing'", "Offer preventive maintenance packages", "Target rental property managers"], noLicenseRequired: true },
      { name: "Water Heater Flushing", tradeSkill: "Water heater maintenance", startupCost: "$0–$50", earningPotential: "$75–$125/job", description: "Flush and maintain water heaters — extends life by years. Most homeowners don't know this service exists.", gettingStarted: ["Learn the flush procedure for gas and electric units", "Market the energy savings angle", "Offer annual maintenance contracts", "Combine with other maintenance services"], noLicenseRequired: true },
    ],
  },
  {
    id: "carpentry",
    name: "Carpentry & Woodworking",
    icon: Hammer,
    color: "from-orange-500/20 to-orange-500/5",
    apprenticeWage: "$17–$24/hr",
    journeyWage: "$28–$45/hr",
    masterWage: "$45–$70/hr",
    businessOwner: "$75K–$200K+/yr",
    opportunities: [
      { name: "Custom Furniture Building", tradeSkill: "Woodworking", startupCost: "$100–$500", earningPotential: "$500–$5,000/piece", description: "Build custom tables, shelves, desks, and benches. The 'handmade' market is thriving — people pay premium for custom work.", gettingStarted: ["Start with simple pieces: cutting boards, shelves, small tables", "Sell on Etsy, Facebook Marketplace, local craft fairs", "Build a portfolio with professional photos", "Take custom orders and grow through word-of-mouth"], noLicenseRequired: true },
      { name: "Deck & Fence Building/Repair", tradeSkill: "Framing/carpentry", startupCost: "$200–$500", earningPotential: "$1,500–$8,000/project", description: "Build and repair decks, fences, and pergolas. Huge demand in DC suburbs, especially in spring and summer.", gettingStarted: ["Start with fence repairs and small deck projects", "Get referrals from neighbors of completed projects", "Partner with a concrete contractor for post installation", "Offer free design consultations"], noLicenseRequired: true },
      { name: "Trim & Finish Carpentry", tradeSkill: "Finish carpentry", startupCost: "$200–$400", earningPotential: "$45–$90/hr", description: "Install baseboards, crown molding, door trim, and wainscoting. High-end skill with premium pricing.", gettingStarted: ["Master miter cuts, coping, and scarf joints", "Invest in a quality miter saw and nail gun", "Target renovation contractors and interior designers", "Build portfolio of clean, tight-fitting trim work"], noLicenseRequired: true },
      { name: "Shelving & Storage Solutions", tradeSkill: "General carpentry", startupCost: "$100–$300", earningPotential: "$200–$1,000/project", description: "Build custom closet systems, garage storage, pantry shelves. Everyone needs more storage.", gettingStarted: ["Learn popular closet and storage system designs", "Offer 3D design mockups (free tools like SketchUp)", "Target homeowners, renters, and small businesses", "Create package deals for common spaces"], noLicenseRequired: true },
    ],
  },
  {
    id: "hvac",
    name: "HVAC",
    icon: Wind,
    color: "from-cyan-500/20 to-cyan-500/5",
    apprenticeWage: "$18–$25/hr",
    journeyWage: "$30–$50/hr",
    masterWage: "$50–$80/hr",
    businessOwner: "$90K–$250K+/yr",
    opportunities: [
      { name: "Air Filter Replacement Service", tradeSkill: "HVAC basics", startupCost: "$0–$100", earningPotential: "$25–$50/visit", description: "Monthly or quarterly air filter delivery and replacement. Simple recurring revenue business that builds customer relationships.", gettingStarted: ["Buy filters in bulk at wholesale prices", "Offer monthly subscription service", "Target busy professionals and elderly homeowners", "Add vent cleaning as upsell service"], noLicenseRequired: true },
      { name: "Duct Cleaning Assistance", tradeSkill: "HVAC maintenance", startupCost: "$0", earningPotential: "$15–$25/hr", description: "Work as an assistant with a licensed duct cleaning company. Learn the business while earning money.", gettingStarted: ["Contact local duct cleaning companies about assistant positions", "NADCA certification available for serious learners", "Learn the equipment and sales process", "Build toward owning your own duct cleaning business"], noLicenseRequired: true },
      { name: "Weatherization & Energy Audits", tradeSkill: "Energy efficiency", startupCost: "$100–$300", earningPotential: "$50–$100/assessment", description: "Help homeowners identify energy waste — drafty windows, poor insulation, air leaks. DC has utility rebate programs that incentivize this.", gettingStarted: ["Learn the basics of home energy efficiency", "Invest in an infrared thermometer and smoke pencil", "Partner with insulation and window companies for referrals", "Market the utility bill savings angle"], noLicenseRequired: true },
    ],
  },
  {
    id: "ai-trades",
    name: "AI in the Trades",
    icon: Cpu,
    color: "from-purple-500/20 to-purple-500/5",
    apprenticeWage: "$20–$30/hr",
    journeyWage: "$35–$55/hr",
    masterWage: "$60–$100/hr",
    businessOwner: "$100K–$300K+/yr",
    opportunities: [
      { name: "Construction Estimating with AI", tradeSkill: "AI + Construction", startupCost: "$0–$50/month (AI tools)", earningPotential: "$50–$150/estimate", description: "Use AI tools to create accurate construction estimates for contractors and homeowners. Faster and more detailed than manual methods.", gettingStarted: ["Learn estimating software (PlanSwift, ProEst) + AI tools", "Offer estimates to small contractors who don't have estimators", "Charge per estimate or monthly retainer", "Build templates for common project types"], noLicenseRequired: true },
      { name: "Social Media Management for Contractors", tradeSkill: "AI + Marketing", startupCost: "$0", earningPotential: "$500–$2,000/month per client", description: "Most contractors are terrible at social media. Use AI to create content, manage posts, and run ads for construction businesses.", gettingStarted: ["Learn to use ChatGPT, Canva, and social media schedulers", "Approach local contractors with sample content", "Offer packages: 3 posts/week + monthly analytics", "Show ROI with lead tracking"], noLicenseRequired: true },
      { name: "3D Modeling & Visualization", tradeSkill: "AI + Design", startupCost: "$0–$100/month", earningPotential: "$200–$1,000/project", description: "Create 3D models and visualizations for renovation projects using AI-assisted tools. Help homeowners see the finished product before construction starts.", gettingStarted: ["Learn SketchUp, Blender, or AI visualization tools", "Offer to renovation contractors and interior designers", "Create before/after 3D renderings", "Charge per room or per project"], noLicenseRequired: true },
      { name: "Drone Photography for Construction", tradeSkill: "AI + Technology", startupCost: "$500–$1,500 (drone + FAA Part 107)", earningPotential: "$200–$500/flight", description: "Provide aerial photography and video for construction sites, real estate, and inspections. Requires FAA Part 107 certification.", gettingStarted: ["Get FAA Part 107 Remote Pilot Certificate ($175 test)", "Purchase a quality drone (DJI Mini or Mavic)", "Market to construction companies, real estate agents, and roofers", "Offer progress documentation packages for construction sites"], noLicenseRequired: false },
    ],
  },
];

const ftguPrograms = [
  {
    name: "FTGU Student Project Marketplace",
    description: "A platform connecting FTGU students with community members who need trade work done. Students perform supervised work at below-market rates, building real-world experience while earning money.",
    howItWorks: [
      "Community members submit project requests through FTGU website",
      "FTGU matches projects to students based on skill level and training stage",
      "Students complete work under instructor supervision",
      "Community members pay reduced rates (30–50% below market)",
      "Students earn 60% of project fee, FTGU retains 40% for overhead",
      "Students build portfolio with documented, supervised projects",
    ],
    studentEarning: "$15–$35/hr (supervised)",
    icon: Users,
  },
  {
    name: "FTGU Tool Library & Co-Op",
    description: "Students and graduates can borrow professional-grade tools for side jobs, eliminating the biggest startup cost barrier for trade freelancing.",
    howItWorks: [
      "FTGU maintains inventory of professional tools and equipment",
      "Active students borrow tools free; graduates pay small daily rental fee",
      "Tools are insured and maintained by FTGU",
      "Graduates can 'earn' tool ownership through community service hours",
      "Builds a community of trade professionals sharing resources",
    ],
    studentEarning: "Saves $500–$5,000 in startup costs",
    icon: Wrench,
  },
  {
    name: "FTGU Certification Fast-Track",
    description: "FTGU pays for students' certification exams, removing the financial barrier to earning credentials that immediately increase their market value.",
    howItWorks: [
      "FTGU covers exam fees for OSHA 10/30, NCCER, EPA 608, First Aid/CPR",
      "Structured study groups and test prep sessions",
      "Students commit to 40 hours of community service upon passing",
      "Each certification increases earning potential by $2–$5/hr",
      "FTGU tracks certification pass rates as key success metric",
    ],
    studentEarning: "+$2–$5/hr per certification earned",
    icon: Award,
  },
  {
    name: "FTGU Apprenticeship Pipeline",
    description: "FTGU has direct pipelines to registered apprenticeship programs where students earn full wages while continuing to learn. These are 'earn while you learn' positions.",
    howItWorks: [
      "FTGU partners with local unions and contractors for apprenticeship placement",
      "Students who complete FTGU programs get priority placement",
      "Apprentices earn $18–$30/hr from day one",
      "FTGU provides ongoing mentorship during apprenticeship",
      "Multi-year pathway to journeyman status and $35–$55/hr wages",
    ],
    studentEarning: "$18–$30/hr from day one of apprenticeship",
    icon: Briefcase,
  },
  {
    name: "FTGU Business Launcher",
    description: "For graduates ready to start their own trade business, FTGU provides business training, mentorship, and micro-loans to launch.",
    howItWorks: [
      "12-week business bootcamp: licensing, insurance, marketing, accounting",
      "Mentorship pairing with successful trade business owners",
      "Micro-loan fund ($1,000–$5,000) for startup costs (tools, vehicle, insurance)",
      "Shared office/workspace access for first year",
      "FTGU referral network sends leads to graduate businesses",
      "Annual business review and support for first 3 years",
    ],
    studentEarning: "$50,000–$150,000+/yr as business owner",
    icon: Rocket,
  },
];

const commanderStadiumJobs = [
  { trade: "General Construction", jobs: "1,500+", wage: "$22–$45/hr", duration: "3–5 years" },
  { trade: "Electrical", jobs: "800+", wage: "$28–$55/hr", duration: "3–5 years" },
  { trade: "Plumbing & Pipefitting", jobs: "600+", wage: "$26–$50/hr", duration: "3–4 years" },
  { trade: "HVAC & Mechanical", jobs: "500+", wage: "$25–$48/hr", duration: "3–4 years" },
  { trade: "Carpentry & Finishing", jobs: "700+", wage: "$24–$42/hr", duration: "2–4 years" },
  { trade: "Iron & Steel Work", jobs: "400+", wage: "$30–$55/hr", duration: "2–3 years" },
  { trade: "Concrete & Masonry", jobs: "300+", wage: "$22–$40/hr", duration: "2–3 years" },
  { trade: "Technology & AI Systems", jobs: "200+", wage: "$30–$60/hr", duration: "3–5 years" },
];

export default function StudentEarningHub() {
  const [activeTrade, setActiveTrade] = useState(0);

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-bold uppercase tracking-wider mb-6">
            <DollarSign size={16} /> Start Earning Now
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6">
            Student <span className="text-primary">Earning Hub</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            You don't have to wait until graduation to start making money. Here are real ways to earn while you learn —
            side jobs, freelance opportunities, FTGU programs, and the massive DC Commanders Stadium opportunity.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Avg. Starting Wage", value: "$22/hr", sub: "After FTGU training" },
            { label: "Side Job Potential", value: "$40–$100/hr", sub: "Freelance trade work" },
            { label: "Stadium Jobs", value: "5,000+", sub: "DC Commanders project" },
            { label: "Business Owner", value: "$100K+/yr", sub: "With FTGU support" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-display font-black text-primary">{stat.value}</div>
              <div className="text-sm font-bold text-white mt-1">{stat.label}</div>
              <div className="text-xs text-white/50 mt-1">{stat.sub}</div>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">
            Earning Opportunities <span className="text-primary">By Trade</span>
          </h2>
          <p className="text-center text-foreground/60 mb-8 max-w-2xl mx-auto">
            Real side jobs and freelance opportunities you can start while still in training. Most require no license — just the skills you're learning at FTGU.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {earningTracks.map((track, i) => (
              <button
                key={track.id}
                onClick={() => setActiveTrade(i)}
                className={`p-3 rounded-xl text-center transition-all ${
                  activeTrade === i
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                <track.icon size={20} className="mx-auto mb-1" />
                <div className="text-xs font-bold uppercase tracking-wider">{track.name}</div>
              </button>
            ))}
          </div>

          {(() => {
            const track = earningTracks[activeTrade];
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`bg-gradient-to-r ${track.color} border border-white/10 rounded-2xl p-6 mb-6`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h3 className="text-2xl font-display font-bold text-white flex items-center gap-3">
                      <track.icon size={28} className="text-primary" />
                      {track.name} — Earning Potential
                    </h3>
                    <div className="flex gap-4">
                      <div className="text-center px-3 py-2 bg-black/20 rounded-lg">
                        <div className="text-sm font-bold text-white">{track.apprenticeWage}</div>
                        <div className="text-xs text-white/50">Apprentice</div>
                      </div>
                      <div className="text-center px-3 py-2 bg-black/20 rounded-lg">
                        <div className="text-sm font-bold text-white">{track.journeyWage}</div>
                        <div className="text-xs text-white/50">Journeyman</div>
                      </div>
                      <div className="text-center px-3 py-2 bg-black/20 rounded-lg">
                        <div className="text-sm font-bold text-primary">{track.masterWage}</div>
                        <div className="text-xs text-white/50">Master</div>
                      </div>
                      <div className="text-center px-3 py-2 bg-primary/20 rounded-lg">
                        <div className="text-sm font-bold text-primary">{track.businessOwner}</div>
                        <div className="text-xs text-white/50">Owner</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {track.opportunities.map((opp, i) => (
                    <div key={opp.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-white">{opp.name}</h4>
                          <div className="text-xs text-white/50">{opp.tradeSkill}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-display font-black text-primary">{opp.earningPotential}</div>
                          <div className="text-xs text-white/50">Startup: {opp.startupCost}</div>
                        </div>
                      </div>

                      {opp.noLicenseRequired && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-full mb-3">
                          <CheckCircle size={12} /> No License Required
                        </span>
                      )}

                      <p className="text-white/60 text-sm mb-4 leading-relaxed">{opp.description}</p>

                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">How to Get Started</div>
                        <ul className="space-y-1">
                          {opp.gettingStarted.map((step, j) => (
                            <li key={j} className="flex items-start gap-2 text-white/60 text-sm">
                              <ArrowRight size={12} className="text-primary mt-1 flex-shrink-0" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })()}
        </motion.div>

        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">
            FTGU <span className="text-primary">Earning Programs</span>
          </h2>
          <p className="text-center text-foreground/60 mb-8 max-w-2xl mx-auto">
            Exclusive programs designed to help FTGU students earn money, gain experience, and launch careers — from day one through business ownership.
          </p>

          <div className="space-y-4">
            {ftguPrograms.map((program, i) => (
              <motion.div
                key={program.name}
                {...fadeIn}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <program.icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{program.name}</h3>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">{program.description}</p>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">How It Works</div>
                        <ol className="space-y-2">
                          {program.howItWorks.map((step, j) => (
                            <li key={j} className="flex items-start gap-2 text-white/60 text-sm">
                              <span className="w-5 h-5 rounded-full bg-primary/20 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">
                                {j + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="text-center px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-xl flex-shrink-0">
                    <div className="text-lg font-display font-black text-green-400">{program.studentEarning}</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">Earning Potential</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">
            DC Commanders Stadium <span className="text-primary">Job Opportunity</span>
          </h2>
          <p className="text-center text-foreground/60 mb-8 max-w-2xl mx-auto">
            The multi-billion dollar DC Commanders Stadium project will create over 5,000 construction jobs starting in 2026.
            FTGU students are first in line.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-primary/5">
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Trade</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Estimated Jobs</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Wage Range</th>
                    <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-white/50">Project Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {commanderStadiumJobs.map((job) => (
                    <tr key={job.trade} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 px-4 font-bold text-white text-sm">{job.trade}</td>
                      <td className="py-3 px-4 text-primary font-display font-bold">{job.jobs}</td>
                      <td className="py-3 px-4 text-white/70">{job.wage}</td>
                      <td className="py-3 px-4 text-white/60">{job.duration}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-white/20 bg-primary/10">
                    <td className="py-3 px-4 font-bold text-white">TOTAL</td>
                    <td className="py-3 px-4 font-display font-black text-primary text-lg">5,000+</td>
                    <td className="py-3 px-4 text-white/70">$22–$60/hr</td>
                    <td className="py-3 px-4 text-white/60">3–5 years</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/20 via-primary/10 to-green-500/20 border border-green-500/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4">Ready to Start Building Your Future?</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Enroll in FTGU today and start earning while you learn. Our programs are designed to put money in your pocket
              from day one — not just after graduation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link href="/careers" className="px-8 py-4 bg-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-2">
                Explore Career Paths <Briefcase size={18} />
              </Link>
              <Link href="/assessment" className="px-8 py-4 bg-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-2">
                Find Your Trade <Target size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
