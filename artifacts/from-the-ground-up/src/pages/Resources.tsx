import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BookOpen, Award, Briefcase, Building2, Users, DollarSign,
  Wrench, ShieldCheck, Rocket, ExternalLink, ChevronDown, ChevronUp,
  GraduationCap, HardHat
} from "lucide-react";
import { useState } from "react";

interface Resource {
  name: string;
  url: string;
  description: string;
}

interface ResourceCategory {
  id: string;
  title: string;
  icon: any;
  description: string;
  resources: Resource[];
}

const categories: ResourceCategory[] = [
  {
    id: "certifications",
    title: "Industry Certifications",
    icon: Award,
    description: "Nationally recognized certifications to advance your career in the trades.",
    resources: [
      { name: "NCCER (National Center for Construction Education and Research)", url: "https://www.nccer.org", description: "Industry-recognized credentials for construction and maintenance professionals across all trades." },
      { name: "OSHA 10 & OSHA 30 Training", url: "https://www.osha.gov/training/outreach", description: "Occupational Safety and Health Administration training for construction workers at introductory and advanced levels." },
      { name: "EPA 608 Certification", url: "https://www.epa.gov/section608", description: "Required EPA certification for technicians who handle refrigerants in HVAC systems." },
      { name: "NATE Certification (HVAC)", url: "https://www.natex.org", description: "North American Technician Excellence certification — the gold standard for HVAC technicians." },
      { name: "Journeyman Electrician Exam Prep", url: "https://www.electricallicenserenewal.com", description: "Resources and study materials to prepare for journeyman and master electrician licensing exams." },
      { name: "ICC Certification (Building Codes)", url: "https://www.iccsafe.org/professional-development/certification", description: "International Code Council certifications for building inspectors and code professionals." },
      { name: "AWS Certified Welder", url: "https://www.aws.org/certification", description: "American Welding Society certifications for structural and pipe welding." },
      { name: "First Aid/CPR/AED Certification", url: "https://www.redcross.org/take-a-class", description: "Essential safety certifications for jobsite readiness from the American Red Cross." },
    ],
  },
  {
    id: "apprenticeships",
    title: "Apprenticeship Programs",
    icon: Briefcase,
    description: "Earn while you learn through registered apprenticeship programs in the DC area.",
    resources: [
      { name: "U.S. Department of Labor — ApprenticeshipUSA", url: "https://www.apprenticeship.gov", description: "Federal resource for finding and registering apprenticeships across all trades." },
      { name: "DC Apprenticeship Council", url: "https://does.dc.gov/service/dc-apprenticeship-council", description: "District of Columbia's official apprenticeship registration and information office." },
      { name: "IBEW-NECA Electrical Apprenticeship (DC Area)", url: "https://www.njatc.org", description: "Joint Apprenticeship and Training Committee for electrical apprenticeships in the DC metro area." },
      { name: "UA Plumbers & Pipefitters Training", url: "https://www.ua.org/apprenticeship", description: "United Association apprenticeship programs for plumbing, pipefitting, and HVAC service." },
      { name: "Carpenters Union Training Center", url: "https://www.carpenters.org/training-programs", description: "United Brotherhood of Carpenters training and apprenticeship programs." },
      { name: "Associated Builders and Contractors (ABC)", url: "https://www.abc.org/Education-Training/Apprenticeship", description: "Merit-based apprenticeship programs through the ABC national network." },
      { name: "Job Corps", url: "https://www.jobcorps.gov", description: "Free education and vocational training program for young adults ages 16–24." },
      { name: "YouthBuild", url: "https://youthbuild.org", description: "Community-based program where low-income young adults learn construction skills while building affordable housing." },
    ],
  },
  {
    id: "dc-licensing",
    title: "DC Licensing Info",
    icon: Building2,
    description: "Licensing requirements and applications for working in the District of Columbia.",
    resources: [
      { name: "DCRA Business Licensing", url: "https://dcra.dc.gov/service/get-business-license", description: "DC Department of Consumer and Regulatory Affairs — apply for contractor and trade business licenses." },
      { name: "DC Electrician Licensing Requirements", url: "https://dcra.dc.gov/service/electrical-licensing", description: "Requirements for journeyman and master electrician licenses in Washington, DC." },
      { name: "DC Plumbing License", url: "https://dcra.dc.gov/service/plumbing-licensing", description: "Plumber licensing tiers and application process for the District of Columbia." },
      { name: "DC HVAC Licensing", url: "https://dcra.dc.gov/service/hvac-licensing", description: "HVAC technician and contractor licensing in Washington, DC." },
      { name: "DC Construction Manager License", url: "https://dcra.dc.gov/service/construction-manager-licensing", description: "Licensing for general contractors and construction managers in DC." },
      { name: "DC Building Permit Applications", url: "https://dcra.dc.gov/service/building-permits", description: "How to apply for residential and commercial building permits in the District." },
      { name: "DC Business Registration (LARA)", url: "https://dcra.dc.gov/service/register-business", description: "Register a new trade business with the District of Columbia government." },
    ],
  },
  {
    id: "unions",
    title: "Union Resources",
    icon: Users,
    description: "Connect with trade unions for job placement, benefits, and career support.",
    resources: [
      { name: "IBEW Local 26 (DC Electricians)", url: "https://www.ibewlocal26.org", description: "International Brotherhood of Electrical Workers, Local 26 — serving the Washington, DC metro area." },
      { name: "UA Local 5 (DC Plumbers & Steamfitters)", url: "https://www.ualocal5.org", description: "United Association Local 5 — plumbers and steamfitters union for the DC area." },
      { name: "Carpenters Local 177 (DC Area)", url: "https://www.ubcja.org", description: "United Brotherhood of Carpenters local chapter serving the Washington, DC metropolitan region." },
      { name: "Sheet Metal Workers Local 100", url: "https://www.smwia100.org", description: "Sheet Metal, Air, Rail and Transportation Workers — HVAC and sheet metal work in the DC area." },
      { name: "Laborers' International Union (LiUNA)", url: "https://www.liuna.org", description: "Laborers' union representing construction workers, with strong DC-area presence." },
      { name: "North America's Building Trades Unions", url: "https://nabtu.org", description: "Alliance of 14 national construction trade unions — find your trade and local chapter." },
      { name: "AFL-CIO Trade Union Directory", url: "https://aflcio.org/about-us/our-unions-and-allies", description: "Complete directory of AFL-CIO affiliated unions by trade and region." },
    ],
  },
  {
    id: "financial-aid",
    title: "Financial Aid & Scholarships",
    icon: DollarSign,
    description: "Funding opportunities to help cover the cost of trade education and certification.",
    resources: [
      { name: "FAFSA (Federal Student Aid)", url: "https://studentaid.gov", description: "Apply for federal financial aid — Pell Grants, work-study, and loans for eligible trade programs." },
      { name: "DC Tuition Assistance Grant (DC TAG)", url: "https://osse.dc.gov/dctag", description: "Up to $10,000/year for DC residents attending eligible institutions, including trade schools." },
      { name: "Mike Rowe Works Foundation (Work Ethic Scholarship)", url: "https://www.mikeroweworks.org/scholarship", description: "Scholarships for individuals pursuing training in the skilled trades." },
      { name: "SkillsUSA Scholarships", url: "https://www.skillsusa.org/competitions-events/scholarships", description: "Scholarships for career and technical education students in trade, technical, and skilled service programs." },
      { name: "Home Builders Institute Scholarships", url: "https://www.hbi.org", description: "Training and scholarship programs specifically for construction and building trades." },
      { name: "PHCC Educational Foundation Scholarships", url: "https://www.phccfoundation.org/scholarships", description: "Plumbing-Heating-Cooling Contractors Educational Foundation scholarships for plumbing and HVAC students." },
      { name: "Workforce Innovation and Opportunity Act (WIOA)", url: "https://www.dol.gov/agencies/eta/wioa", description: "Federal funding for job training programs — check eligibility through your local American Job Center." },
      { name: "DC Department of Employment Services (DOES) Training Programs", url: "https://does.dc.gov", description: "DC government-funded workforce training, job placement, and career development programs." },
    ],
  },
  {
    id: "tools",
    title: "Tool & Equipment Guides",
    icon: Wrench,
    description: "Guides to essential tools and equipment for each trade program.",
    resources: [
      { name: "Essential Electrician Tool Kit Guide", url: "https://www.kleintools.com/content/electrician-tool-guide", description: "Klein Tools comprehensive guide to must-have tools for electricians at every level." },
      { name: "Plumbing Tools Every Plumber Needs", url: "https://www.ridgid.com/us/en/plumbing-tools", description: "RIDGID's guide to essential plumbing tools from basic wrenches to advanced pipe tools." },
      { name: "Carpenter's Tool List (Fine Homebuilding)", url: "https://www.finehomebuilding.com", description: "Expert recommendations for hand tools and power tools every carpenter should own." },
      { name: "HVAC Technician Tool Guide", url: "https://www.yellowjacket.com", description: "Yellow Jacket's guide to HVAC diagnostic tools, gauges, and refrigerant equipment." },
      { name: "Construction Tool Safety Guide (CPWR)", url: "https://www.cpwr.com/research/research-to-practice-r2p/r2p-library", description: "Center for Construction Research and Training — tool safety resources and best practices." },
      { name: "Milwaukee Tool Trade Tips", url: "https://www.milwaukeetool.com", description: "Industry-leading power tools with trade-specific guides and new product innovations." },
      { name: "DeWalt Trade Reference Guides", url: "https://www.dewalt.com", description: "Reference books and digital resources covering electrical, plumbing, HVAC, and carpentry calculations." },
    ],
  },
  {
    id: "safety",
    title: "Safety Standards",
    icon: ShieldCheck,
    description: "Stay safe on the job with these critical safety standards and training resources.",
    resources: [
      { name: "OSHA Construction Standards", url: "https://www.osha.gov/construction", description: "Complete OSHA construction industry safety standards, regulations, and compliance guides." },
      { name: "NFPA 70E (Electrical Safety)", url: "https://www.nfpa.org/codes-and-standards/all-codes-and-standards/list-of-codes-and-standards/detail?code=70E", description: "National Fire Protection Association standard for electrical safety in the workplace." },
      { name: "CPWR — Center for Construction Research and Training", url: "https://www.cpwr.com", description: "Research-based safety training, hazard alerts, and toolbox talks for construction workers." },
      { name: "National Safety Council (NSC)", url: "https://www.nsc.org", description: "Safety training, workplace injury prevention, and certification programs." },
      { name: "NIOSH Construction Safety", url: "https://www.cdc.gov/niosh/construction", description: "National Institute for Occupational Safety and Health — construction-specific safety research and resources." },
      { name: "eLCOSH (Electronic Library of Construction Safety)", url: "https://www.elcosh.org", description: "Comprehensive online library of construction occupational safety and health information." },
      { name: "Fall Protection Standards (OSHA)", url: "https://www.osha.gov/fall-protection", description: "OSHA guidelines for fall protection — the #1 cause of death in construction." },
      { name: "Hazard Communication Standard (HazCom)", url: "https://www.osha.gov/hazcom", description: "Understanding Safety Data Sheets, labels, and chemical hazard communication on construction sites." },
    ],
  },
  {
    id: "business",
    title: "Business Startup Resources",
    icon: Rocket,
    description: "Ready to start your own trade business? These resources will help you get started.",
    resources: [
      { name: "SBA (Small Business Administration)", url: "https://www.sba.gov", description: "Federal resources for starting, managing, and growing a small business — loans, counseling, and more." },
      { name: "DC Small Business Resource Center", url: "https://dslbd.dc.gov", description: "DC Department of Small and Local Business Development — programs, certifications, and support for DC entrepreneurs." },
      { name: "SCORE Mentorship", url: "https://www.score.org", description: "Free business mentoring from experienced entrepreneurs — find a mentor in your trade." },
      { name: "DC Chamber of Commerce", url: "https://www.dcchamber.org", description: "Networking, advocacy, and resources for businesses operating in Washington, DC." },
      { name: "Contractor Business Plan Templates", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan", description: "SBA business plan templates and guides tailored for contractor and trade businesses." },
      { name: "QuickBooks for Contractors", url: "https://quickbooks.intuit.com/industry/contractors", description: "Accounting and invoicing tools designed specifically for construction contractors." },
      { name: "DC CBE Certification", url: "https://dslbd.dc.gov/service/cbe-certification", description: "Certified Business Enterprise program — get preferred access to DC government contracts." },
      { name: "Bonding & Insurance for Contractors", url: "https://www.sba.gov/funding-programs/surety-bonds", description: "SBA Surety Bond Guarantee Program — helps small contractors obtain bonding for government and private projects." },
    ],
  },
];

function ResourceSection({ category, index }: { category: ResourceCategory; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      id={category.id}
      className="border border-border rounded-2xl overflow-hidden bg-card scroll-mt-24"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            <Icon size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">{category.title}</h2>
            <p className="text-sm text-muted-foreground mt-1 hidden sm:block">{category.description}</p>
          </div>
        </div>
        {open ? <ChevronUp size={20} className="text-muted-foreground flex-shrink-0" /> : <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <div className="grid gap-4">
            {category.resources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ExternalLink size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                    {resource.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Resources() {
  return (
    <div className="min-h-screen page-gradient">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <BookOpen size={16} />
              STUDENT RESOURCES
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Resource <span className="text-primary">Library</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Your comprehensive guide to certifications, apprenticeships, licensing, funding,
              and everything you need to build a successful career in the trades.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <GraduationCap size={16} />
              <span>{categories.length} categories</span>
              <span className="text-border">•</span>
              <HardHat size={16} />
              <span>{categories.reduce((sum, cat) => sum + cat.resources.length, 0)}+ resources</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-muted/50 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <CatIcon size={14} /> {cat.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {categories.map((category, index) => (
            <ResourceSection key={category.id} category={category} index={index} />
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-12 md:p-20 bg-foreground text-background shadow-2xl text-center relative overflow-hidden"
            style={{ borderRadius: '24px 40px 24px 40px' }}
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            <BookOpen className="w-16 h-16 text-primary mx-auto mb-8 relative z-10" />
            <h3 className="text-4xl font-display font-black text-white mb-6 uppercase tracking-tight relative z-10">
              Ready to Get Started?
            </h3>
            <p className="text-white/70 text-xl font-medium mb-10 max-w-2xl mx-auto relative z-10">
              Explore our programs, apply for enrollment, or reach out with any questions.
              Your career in the trades starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-xl"
                style={{ borderRadius: '12px 32px 12px 32px' }}
              >
                View Programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-white/10 text-white border-2 border-white/30 rounded-xl font-black uppercase tracking-widest text-lg hover:bg-white/20 hover:scale-105 transition-all"
                style={{ borderRadius: '12px 32px 12px 32px' }}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
