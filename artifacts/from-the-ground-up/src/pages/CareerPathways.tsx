import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer, Zap, Droplet, Wrench, Cpu, Thermometer,
  ArrowRight, ChevronRight, DollarSign, Clock, Award,
  Building2, TrendingUp, Star, MapPin, Trophy, Briefcase,
  GraduationCap, Users
} from "lucide-react";

interface CareerLevel {
  title: string;
  timeline: string;
  salaryRange: string;
  certifications: string[];
  description: string;
  skills: string[];
}

interface TradeCareer {
  id: string;
  trade: string;
  icon: any;
  color: string;
  overview: string;
  dcJobOutlook: string;
  growthRate: string;
  levels: CareerLevel[];
}

const tradesCareers: TradeCareer[] = [
  {
    id: "construction",
    trade: "Construction",
    icon: Building2,
    color: "from-amber-500 to-orange-600",
    overview: "Construction is one of the fastest-growing sectors in the DC metro area, driven by massive infrastructure projects and new developments including the Commander Stadium project.",
    dcJobOutlook: "2,400+ open positions in DC metro area",
    growthRate: "+12% projected growth through 2030",
    levels: [
      {
        title: "Entry-Level Laborer",
        timeline: "0–6 months",
        salaryRange: "$32,000 – $42,000",
        certifications: ["OSHA 10-Hour Safety", "First Aid/CPR"],
        description: "Start on job sites learning basic construction tasks, tool handling, site cleanup, and safety protocols under supervision.",
        skills: ["Tool identification & handling", "Site safety awareness", "Blueprint reading basics", "Material handling"]
      },
      {
        title: "Apprentice / Skilled Laborer",
        timeline: "6 months – 2 years",
        salaryRange: "$42,000 – $55,000",
        certifications: ["OSHA 30-Hour Safety", "Forklift Certification", "Scaffolding Competent Person"],
        description: "Take on more skilled tasks like framing, concrete work, and operating equipment. Begin specializing in a construction discipline.",
        skills: ["Framing & concrete work", "Equipment operation", "Quality measurement", "Code compliance basics"]
      },
      {
        title: "Journeyman / Foreman",
        timeline: "2 – 5 years",
        salaryRange: "$55,000 – $78,000",
        certifications: ["DC Journeyman License", "Lead Renovation (EPA RRP)", "Project Management Basics"],
        description: "Lead small crews, manage day-to-day site operations, and coordinate with subcontractors. Full technical competency in your specialty.",
        skills: ["Crew leadership", "Scheduling & coordination", "Cost estimating", "Subcontractor management"]
      },
      {
        title: "Master Builder / Superintendent",
        timeline: "5 – 10 years",
        salaryRange: "$78,000 – $110,000",
        certifications: ["DC Master Builder License", "PMP or CMIT Certification", "LEED Green Associate"],
        description: "Oversee entire construction projects from groundbreaking to completion. Manage budgets, timelines, and large teams.",
        skills: ["Project management", "Budget oversight", "Client relations", "Regulatory compliance"]
      },
      {
        title: "Business Owner / General Contractor",
        timeline: "10+ years",
        salaryRange: "$110,000 – $250,000+",
        certifications: ["DC General Contractor License", "Business License", "Bonding & Insurance"],
        description: "Run your own construction company, bid on contracts, hire crews, and build your legacy in the DC construction market.",
        skills: ["Business development", "Contract negotiation", "Financial management", "Market strategy"]
      }
    ]
  },
  {
    id: "electrical",
    trade: "Electrical Systems",
    icon: Zap,
    color: "from-yellow-400 to-amber-500",
    overview: "Electricians are in extremely high demand in the DC area, with growing needs for EV infrastructure, solar installations, and smart building systems.",
    dcJobOutlook: "1,800+ open positions in DC metro area",
    growthRate: "+15% projected growth through 2030",
    levels: [
      {
        title: "Electrical Helper",
        timeline: "0–6 months",
        salaryRange: "$30,000 – $40,000",
        certifications: ["OSHA 10-Hour Safety", "First Aid/CPR"],
        description: "Assist licensed electricians with pulling wire, mounting boxes, and learning the fundamentals of electrical systems.",
        skills: ["Wire pulling & routing", "Tool usage", "Safety protocols", "Basic circuit concepts"]
      },
      {
        title: "Electrical Apprentice",
        timeline: "6 months – 4 years",
        salaryRange: "$40,000 – $58,000",
        certifications: ["DC Electrical Apprentice Registration", "OSHA 30-Hour", "EPA 608 (if doing HVAC/R)"],
        description: "Formal apprenticeship combining classroom instruction with on-the-job training. Progressively take on more complex wiring tasks.",
        skills: ["Residential wiring", "Panel installations", "Code compliance (NEC)", "Conduit bending"]
      },
      {
        title: "Journeyman Electrician",
        timeline: "4 – 8 years",
        salaryRange: "$58,000 – $85,000",
        certifications: ["DC Journeyman Electrician License", "NFPA 70E Arc Flash Safety"],
        description: "Work independently on residential and commercial projects. Diagnose complex electrical issues and install advanced systems.",
        skills: ["Commercial wiring", "Troubleshooting & diagnostics", "Motor controls", "Low-voltage systems"]
      },
      {
        title: "Master Electrician",
        timeline: "8 – 12 years",
        salaryRange: "$85,000 – $120,000",
        certifications: ["DC Master Electrician License", "Electrical Inspector Certification"],
        description: "Design electrical systems, pull permits, supervise apprentices and journeymen. Eligible to start your own electrical contracting business.",
        skills: ["System design", "Load calculations", "Permit management", "Team supervision"]
      },
      {
        title: "Electrical Contractor / Business Owner",
        timeline: "12+ years",
        salaryRange: "$120,000 – $300,000+",
        certifications: ["DC Electrical Contractor License", "Business License", "Bonding & Insurance"],
        description: "Own and operate an electrical contracting business. Bid on major projects including government and commercial contracts in the DC area.",
        skills: ["Business operations", "Government contracting", "Fleet management", "Strategic growth"]
      }
    ]
  },
  {
    id: "plumbing",
    trade: "Plumbing",
    icon: Droplet,
    color: "from-blue-400 to-cyan-500",
    overview: "Plumbing professionals are essential for DC's aging infrastructure upgrades and new development projects. The trade offers excellent stability and earning potential.",
    dcJobOutlook: "1,500+ open positions in DC metro area",
    growthRate: "+10% projected growth through 2030",
    levels: [
      {
        title: "Plumbing Helper",
        timeline: "0–6 months",
        salaryRange: "$30,000 – $38,000",
        certifications: ["OSHA 10-Hour Safety", "First Aid/CPR"],
        description: "Learn basic plumbing tasks including pipe cutting, soldering, and assisting licensed plumbers on residential and commercial jobs.",
        skills: ["Pipe cutting & fitting", "Tool identification", "Safety practices", "Material handling"]
      },
      {
        title: "Plumbing Apprentice",
        timeline: "6 months – 4 years",
        salaryRange: "$38,000 – $55,000",
        certifications: ["DC Plumbing Apprentice Registration", "OSHA 30-Hour", "Medical Gas Installer (optional)"],
        description: "Formal apprenticeship with classroom and hands-on training. Work with copper, PVC, PEX, and learn drainage system design.",
        skills: ["Multiple pipe materials", "Fixture installation", "Drainage systems", "Water heater installation"]
      },
      {
        title: "Journeyman Plumber",
        timeline: "4 – 8 years",
        salaryRange: "$55,000 – $80,000",
        certifications: ["DC Journeyman Plumber License", "Backflow Prevention Certification"],
        description: "Work independently on all types of plumbing projects. Design systems, troubleshoot complex issues, and mentor apprentices.",
        skills: ["System design", "Commercial plumbing", "Backflow prevention", "Gas line installation"]
      },
      {
        title: "Master Plumber",
        timeline: "8 – 12 years",
        salaryRange: "$80,000 – $115,000",
        certifications: ["DC Master Plumber License", "Fire Suppression Systems", "Green Plumbing Certification"],
        description: "Full authority to design, install, and inspect plumbing systems. Pull permits and oversee major projects.",
        skills: ["Complex system design", "Code inspection", "Project management", "Apprentice training"]
      },
      {
        title: "Plumbing Contractor / Business Owner",
        timeline: "12+ years",
        salaryRange: "$115,000 – $280,000+",
        certifications: ["DC Plumbing Contractor License", "Business License", "Bonding & Insurance"],
        description: "Run your own plumbing business serving residential, commercial, and government clients across the DC metro area.",
        skills: ["Business management", "Contract bidding", "Staff management", "Service fleet operations"]
      }
    ]
  },
  {
    id: "carpentry",
    trade: "Carpentry & Woodworking",
    icon: Hammer,
    color: "from-orange-500 to-red-500",
    overview: "Carpentry remains one of the most versatile trades, with opportunities ranging from residential renovation to high-end custom work and commercial fit-outs in the DC area.",
    dcJobOutlook: "1,200+ open positions in DC metro area",
    growthRate: "+8% projected growth through 2030",
    levels: [
      {
        title: "Carpenter's Helper",
        timeline: "0–6 months",
        salaryRange: "$30,000 – $40,000",
        certifications: ["OSHA 10-Hour Safety", "First Aid/CPR"],
        description: "Assist experienced carpenters with measuring, cutting, and assembling wood structures. Learn proper tool usage and safety.",
        skills: ["Measuring & marking", "Hand tool proficiency", "Wood identification", "Safety protocols"]
      },
      {
        title: "Carpentry Apprentice",
        timeline: "6 months – 3 years",
        salaryRange: "$40,000 – $52,000",
        certifications: ["OSHA 30-Hour", "Carpentry Apprentice Registration", "Powder-Actuated Tool Certification"],
        description: "Develop core carpentry skills through structured training. Work on framing, form building, and finish carpentry projects.",
        skills: ["Rough framing", "Form construction", "Power tool mastery", "Blueprint reading"]
      },
      {
        title: "Journeyman Carpenter",
        timeline: "3 – 7 years",
        salaryRange: "$52,000 – $75,000",
        certifications: ["DC Journeyman Carpenter Certification", "Cabinet Making Certification (optional)"],
        description: "Execute complex carpentry projects independently. Specialize in areas like finish work, cabinetry, or commercial construction.",
        skills: ["Finish carpentry", "Cabinet installation", "Stair construction", "Trim & molding work"]
      },
      {
        title: "Master Carpenter / Lead",
        timeline: "7 – 12 years",
        salaryRange: "$75,000 – $105,000",
        certifications: ["Master Carpenter Certification", "Historic Preservation Specialist (optional)"],
        description: "Lead carpentry crews, manage complex projects, and train the next generation. Recognized expert in your specialty area.",
        skills: ["Project leadership", "Custom design & fabrication", "Historic restoration", "Quality management"]
      },
      {
        title: "Carpentry Business Owner",
        timeline: "12+ years",
        salaryRange: "$105,000 – $220,000+",
        certifications: ["DC Contractor License", "Business License", "Bonding & Insurance"],
        description: "Own a carpentry or general contracting business. Take on custom residential, commercial, and government projects.",
        skills: ["Business development", "Client management", "Estimating & bidding", "Brand building"]
      }
    ]
  },
  {
    id: "hvac",
    trade: "HVAC Systems",
    icon: Thermometer,
    color: "from-teal-400 to-green-500",
    overview: "HVAC technicians are critical in DC's climate, with hot summers and cold winters driving year-round demand. Energy efficiency regulations create additional opportunities.",
    dcJobOutlook: "1,600+ open positions in DC metro area",
    growthRate: "+13% projected growth through 2030",
    levels: [
      {
        title: "HVAC Helper",
        timeline: "0–6 months",
        salaryRange: "$30,000 – $40,000",
        certifications: ["OSHA 10-Hour Safety", "EPA 608 Type I"],
        description: "Assist HVAC technicians with installations, ductwork, and basic maintenance tasks while learning system fundamentals.",
        skills: ["Ductwork basics", "Tool usage", "Refrigerant safety", "System components identification"]
      },
      {
        title: "HVAC Apprentice",
        timeline: "6 months – 3 years",
        salaryRange: "$40,000 – $55,000",
        certifications: ["EPA 608 Universal", "OSHA 30-Hour", "R-410A Safety Certification"],
        description: "Formal training in heating, cooling, and ventilation systems. Learn installation, maintenance, and basic troubleshooting.",
        skills: ["System installation", "Preventive maintenance", "Electrical basics", "Refrigerant handling"]
      },
      {
        title: "HVAC Journeyman Technician",
        timeline: "3 – 7 years",
        salaryRange: "$55,000 – $80,000",
        certifications: ["DC HVAC Journeyman License", "NATE Certification", "Building Automation Systems (BAS)"],
        description: "Work independently on residential and commercial HVAC systems. Diagnose complex issues and perform advanced repairs.",
        skills: ["Advanced diagnostics", "Commercial systems", "Controls & automation", "Energy auditing"]
      },
      {
        title: "Master HVAC Technician",
        timeline: "7 – 12 years",
        salaryRange: "$80,000 – $110,000",
        certifications: ["DC Master HVAC License", "LEED AP Certification", "Building Performance Institute (BPI)"],
        description: "Design HVAC systems, lead teams, and manage complex commercial and industrial projects. Expert in energy-efficient solutions.",
        skills: ["System design", "Load calculations", "Energy modeling", "Team management"]
      },
      {
        title: "HVAC Contractor / Business Owner",
        timeline: "12+ years",
        salaryRange: "$110,000 – $260,000+",
        certifications: ["DC HVAC Contractor License", "Business License", "Bonding & Insurance"],
        description: "Own an HVAC company providing installation, maintenance, and repair services. Service contracts provide stable recurring revenue.",
        skills: ["Business operations", "Service contract management", "Fleet management", "Market expansion"]
      }
    ]
  },
  {
    id: "ai-trades",
    trade: "AI in the Trades",
    icon: Cpu,
    color: "from-purple-500 to-indigo-600",
    overview: "AI integration in trades is a rapidly emerging field. Professionals who combine trade expertise with AI skills command premium salaries and are reshaping the industry.",
    dcJobOutlook: "800+ emerging positions in DC metro area",
    growthRate: "+25% projected growth through 2030",
    levels: [
      {
        title: "AI Tools Operator",
        timeline: "0–6 months",
        salaryRange: "$35,000 – $48,000",
        certifications: ["AI Fundamentals Certificate", "OSHA 10-Hour Safety"],
        description: "Learn to use AI-powered tools for estimation, safety monitoring, and project planning. Apply AI to enhance existing trade skills.",
        skills: ["AI tool operation", "Data entry & interpretation", "Digital project planning", "Drone basics"]
      },
      {
        title: "AI Trade Technician",
        timeline: "6 months – 2 years",
        salaryRange: "$48,000 – $68,000",
        certifications: ["FAA Part 107 Drone License", "AI/ML Foundations Certificate", "BIM Technician"],
        description: "Deploy AI solutions on job sites. Operate drones for surveys, use machine learning for quality control, and implement smart safety systems.",
        skills: ["Drone operations", "BIM software", "AI quality inspection", "Safety system deployment"]
      },
      {
        title: "AI Integration Specialist",
        timeline: "2 – 5 years",
        salaryRange: "$68,000 – $95,000",
        certifications: ["Certified AI Professional", "Project Management (PMP/CAPM)", "Smart Building Specialist"],
        description: "Design and implement AI solutions for construction companies. Bridge the gap between traditional trades and emerging technology.",
        skills: ["AI solution design", "Workflow automation", "Data analytics", "Cross-team training"]
      },
      {
        title: "AI Program Director",
        timeline: "5 – 10 years",
        salaryRange: "$95,000 – $140,000",
        certifications: ["Advanced AI Certification", "Construction Technology Manager", "Change Management Certification"],
        description: "Lead AI adoption across organizations. Develop training programs, evaluate new technologies, and drive digital transformation in the trades.",
        skills: ["Technology strategy", "Program management", "Vendor evaluation", "ROI analysis"]
      },
      {
        title: "AI Trades Consultant / Founder",
        timeline: "10+ years",
        salaryRange: "$140,000 – $350,000+",
        certifications: ["Industry-recognized AI expertise", "Business License", "Professional consulting credentials"],
        description: "Launch an AI-focused trades consultancy or tech startup. Help companies across the DC area and beyond modernize their operations.",
        skills: ["Consulting & advisory", "Product development", "Industry networking", "Thought leadership"]
      }
    ]
  }
];

const levelColors = [
  "bg-slate-500",
  "bg-blue-500",
  "bg-emerald-500",
  "bg-amber-500",
  "bg-primary",
];

export default function CareerPathways() {
  const [selectedTrade, setSelectedTrade] = useState<string>("construction");
  const [expandedLevel, setExpandedLevel] = useState<number | null>(null);

  const activeTrade = tradesCareers.find(t => t.id === selectedTrade)!;

  return (
    <div className="pt-32 pb-20 min-h-screen page-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
            <TrendingUp size={14} /> Career Pathways
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-8 uppercase tracking-tight leading-none">
            Your Path to <br /><span className="text-primary">Success.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed">
            Explore career progression in each trade — from entry-level to business owner. See salary ranges, certifications, and timelines for every step of the journey.
          </p>
        </div>

        <div className="glass-panel p-6 md:p-8 mb-12" style={{ borderRadius: '16px 48px 16px 48px' }}>
          <h3 className="text-sm font-black uppercase tracking-widest text-foreground/60 mb-6 text-center">Select a Trade</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tradesCareers.map((trade) => {
              const Icon = trade.icon;
              const isActive = selectedTrade === trade.id;
              return (
                <button
                  key={trade.id}
                  onClick={() => { setSelectedTrade(trade.id); setExpandedLevel(null); }}
                  className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-lg scale-105"
                      : "border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isActive ? "bg-primary text-white" : "bg-white/10 text-foreground/70"
                  }`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-sm font-bold text-center leading-tight ${isActive ? "text-primary" : "text-foreground/80"}`}>
                    {trade.trade}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTrade}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="glass-panel p-8 md:p-12 mb-12" style={{ borderRadius: '48px 16px 48px 16px' }}>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeTrade.color} flex items-center justify-center text-white shadow-lg`}>
                      <activeTrade.icon size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">{activeTrade.trade}</h2>
                  </div>
                  <p className="text-lg text-foreground/80 font-medium leading-relaxed">{activeTrade.overview}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-white/10 p-5 rounded-xl border border-white/20">
                    <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground/60 mb-1">
                      <MapPin size={14} /> DC Job Market
                    </div>
                    <span className="text-lg font-bold text-foreground">{activeTrade.dcJobOutlook}</span>
                  </div>
                  <div className="bg-primary/10 p-5 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-primary mb-1">
                      <TrendingUp size={14} /> Growth Rate
                    </div>
                    <span className="text-lg font-bold text-foreground">{activeTrade.growthRate}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-500 via-emerald-500 to-primary rounded-full hidden md:block" />

              <div className="space-y-6">
                {activeTrade.levels.map((level, index) => {
                  const isExpanded = expandedLevel === index;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setExpandedLevel(isExpanded ? null : index)}
                        className="w-full text-left"
                      >
                        <div className={`glass-panel p-6 md:p-8 md:pl-24 relative transition-all duration-300 border-2 ${
                          isExpanded ? "border-primary/50 shadow-xl" : "border-white/10 hover:border-white/30"
                        }`} style={{ borderRadius: '12px 32px 12px 32px' }}>
                          <div className={`absolute left-5 md:left-9 top-6 md:top-8 w-8 h-8 rounded-full ${levelColors[index]} flex items-center justify-center text-white font-bold text-sm shadow-lg z-10`}>
                            {index + 1}
                          </div>

                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pl-10 md:pl-0">
                            <div>
                              <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight">{level.title}</h3>
                              <div className="flex flex-wrap items-center gap-4 mt-2">
                                <span className="inline-flex items-center gap-1 text-sm font-bold text-foreground/60">
                                  <Clock size={14} /> {level.timeline}
                                </span>
                                <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600">
                                  <DollarSign size={14} /> {level.salaryRange}
                                </span>
                              </div>
                            </div>
                            <ChevronRight size={24} className={`text-foreground/40 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`} />
                          </div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="glass-panel p-8 md:p-10 md:ml-24 mt-2 border border-white/10" style={{ borderRadius: '8px 24px 8px 24px' }}>
                              <p className="text-lg text-foreground/80 font-medium leading-relaxed mb-8">{level.description}</p>

                              <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                  <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground mb-4">
                                    <Award size={16} className="text-primary" /> Required Certifications
                                  </h4>
                                  <ul className="space-y-3">
                                    {level.certifications.map((cert, i) => (
                                      <li key={i} className="flex items-start gap-3 text-foreground/80 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                        {cert}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground mb-4">
                                    <Star size={16} className="text-primary" /> Key Skills
                                  </h4>
                                  <ul className="space-y-3">
                                    {level.skills.map((skill, i) => (
                                      <li key={i} className="flex items-start gap-3 text-foreground/80 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                                        {skill}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 glass-panel p-10 md:p-16 relative overflow-hidden" style={{ borderRadius: '24px 80px 24px 80px' }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-10 h-10 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">Commander Stadium Opportunity</h2>
              </div>
              <p className="text-xl text-foreground/80 font-medium leading-relaxed mb-6">
                The new Commander Stadium project in DC represents a massive opportunity for skilled tradespeople. Thousands of construction, electrical, plumbing, HVAC, and carpentry jobs will be created throughout the multi-year project.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "5,000+ construction jobs expected",
                  "Priority hiring for DC residents",
                  "Apprenticeship partnerships with local unions",
                  "Multi-year employment opportunity"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all duration-300 shadow-xl"
                style={{ borderRadius: '8px 24px 8px 24px' }}
              >
                Get Started Today <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, label: "Major Infrastructure", value: "Multi-Billion $" },
                { icon: Users, label: "Jobs Created", value: "5,000+" },
                { icon: GraduationCap, label: "Apprenticeships", value: "500+" },
                { icon: Briefcase, label: "Career Duration", value: "3-5 Years" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 p-6 rounded-2xl border border-white/20 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-display font-black text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent text-accent-foreground p-16 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tight relative z-10">
              Ready to Start <br />Your Career?
            </h2>
            <p className="text-xl text-accent-foreground/80 mb-12 max-w-2xl mx-auto font-medium relative z-10">
              Take the first step on your career pathway. Enroll in one of our programs and build a future in the trades.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-6 bg-foreground text-background font-black uppercase tracking-widest text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-xl hover:scale-105"
                style={{ borderRadius: '12px 32px 12px 32px' }}
              >
                Enroll Now
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center justify-center px-12 py-6 border-2 border-foreground text-foreground font-black uppercase tracking-widest text-lg hover:bg-foreground hover:text-background transition-all duration-300"
                style={{ borderRadius: '32px 12px 32px 12px' }}
              >
                Take Assessment
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}