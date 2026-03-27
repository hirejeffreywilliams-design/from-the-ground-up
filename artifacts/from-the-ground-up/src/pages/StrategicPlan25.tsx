import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Target, TrendingUp, Users, Building2, DollarSign, Award,
  Calendar, Layers, ArrowRight, CheckCircle, Star, Globe,
  Briefcase, GraduationCap, Heart, Shield, Zap, MapPin
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface Phase {
  id: string;
  name: string;
  years: string;
  theme: string;
  color: string;
  revenue: string;
  students: string;
  staff: string;
  milestones: string[];
  programs: string[];
  facilities: string;
  risks: string[];
  kpis: string[];
}

const phases: Phase[] = [
  {
    id: "foundation",
    name: "Phase 1: Foundation",
    years: "Years 1–3 (2026–2028)",
    theme: "Establish, Prove, Grow",
    color: "from-primary/20 to-primary/5",
    revenue: "$315K → $1.2M",
    students: "50 → 200 annually",
    staff: "3 → 12 FTE",
    milestones: [
      "Obtain 501(c)(3) determination from IRS",
      "Secure first $500K in combined funding",
      "Graduate first 50 students with industry certifications",
      "Establish partnerships with 10+ construction employers",
      "Get approved on DC ETPL for WIOA funding",
      "Launch all 6 trade training programs",
      "Achieve 80%+ job placement rate for graduates",
      "Build Board of Directors to 7–9 members",
      "Complete first annual audit",
      "Earn Candid/GuideStar Platinum Seal of Transparency",
    ],
    programs: [
      "Core trade training (6 tracks, 16-week cohorts)",
      "OSHA 10/30 safety certification",
      "NCCER Core curriculum",
      "Job readiness and soft skills workshops",
      "Employer partnership job placement",
      "SYEP youth summer program",
    ],
    facilities: "Leased workshop space (5,000–8,000 sq ft) in DC, ideally Wards 5, 7, or 8 for community access",
    risks: [
      "Delayed 501(c)(3) determination — Mitigation: Use fiscal sponsor until approved",
      "Insufficient initial funding — Mitigation: Lean startup with phased program launch",
      "Low enrollment — Mitigation: Community partnerships, DOES referrals, social media",
      "Instructor recruitment — Mitigation: Industry partnerships, competitive pay, mission-driven culture",
    ],
    kpis: [
      "Program completion rate: 80%+",
      "Certification pass rate: 85%+",
      "90-day job placement: 75%+",
      "Student satisfaction: 90%+",
      "Donor retention: 60%+",
    ],
  },
  {
    id: "growth",
    name: "Phase 2: Growth",
    years: "Years 4–7 (2029–2032)",
    theme: "Scale, Diversify, Impact",
    color: "from-amber-500/20 to-amber-500/5",
    revenue: "$1.2M → $2.8M",
    students: "200 → 500 annually",
    staff: "12 → 30 FTE",
    milestones: [
      "Secure permanent training facility through capital campaign",
      "Launch advanced/master-level certification programs",
      "Establish social enterprise revenue streams",
      "Build endowment to $500K",
      "Win DOL YouthBuild grant ($1M+)",
      "Expand to serve Maryland and Virginia residents",
      "Launch alumni network with 500+ members",
      "Establish apprenticeship sponsor status with DOL",
      "Create employer advisory council with 25+ members",
      "Achieve 4-star Charity Navigator rating",
    ],
    programs: [
      "All Phase 1 programs, expanded capacity",
      "Advanced certification tracks (Master Electrician prep, etc.)",
      "Registered apprenticeship program (DOL-approved)",
      "Women in Trades initiative",
      "Returning Citizens program",
      "Small business incubator for trade entrepreneurs",
      "Youth pipeline program (ages 14–17)",
      "AI in Construction advanced track",
    ],
    facilities: "Owned or long-term leased facility (15,000–25,000 sq ft) with dedicated workshops for each trade, classroom space, AI lab, and student common area",
    risks: [
      "Capital campaign shortfall — Mitigation: Phased facility buildout, bridge financing",
      "Program quality dilution with growth — Mitigation: Standardized curriculum, quality assurance",
      "Staff burnout — Mitigation: Competitive compensation, professional development, culture",
      "Economic downturn — Mitigation: Revenue diversification, operating reserve",
    ],
    kpis: [
      "Annual revenue growth: 25%+",
      "Program completion: 85%+",
      "6-month job retention: 80%+",
      "Average graduate starting wage: $22+/hour",
      "Alumni engagement: 50%+",
    ],
  },
  {
    id: "leadership",
    name: "Phase 3: Leadership",
    years: "Years 8–12 (2033–2037)",
    theme: "Lead, Innovate, Influence",
    color: "from-green-500/20 to-green-500/5",
    revenue: "$2.8M → $5.5M",
    students: "500 → 1,000 annually",
    staff: "30 → 50 FTE",
    milestones: [
      "Become largest trade training nonprofit in DC metro",
      "Launch second training facility (Maryland or Virginia)",
      "Build endowment to $2M",
      "Develop proprietary AI-powered trade training curriculum",
      "Publish industry research and workforce reports",
      "Establish FTGU as go-to construction workforce partner",
      "Influence local and federal workforce policy",
      "Create FTGU instructor certification program",
      "Launch online/hybrid learning platform",
      "Achieve 1,000+ alumni employed in trades",
    ],
    programs: [
      "All Phase 2 programs at scale",
      "Online/hybrid training platform",
      "FTGU Instructor Academy (train-the-trainer)",
      "Corporate workforce consulting practice",
      "Construction safety consulting service",
      "Trades business accelerator (12-week intensive)",
      "Union partnership pre-apprenticeship pipelines",
      "Research and policy advocacy program",
    ],
    facilities: "Primary DC campus (25,000+ sq ft) + satellite location in MD or VA (10,000 sq ft)",
    risks: [
      "Leadership succession — Mitigation: Develop executive team, succession planning",
      "Technology disruption — Mitigation: AI integration keeps curriculum cutting-edge",
      "Competition from other providers — Mitigation: Differentiation through quality and innovation",
      "Regulatory changes — Mitigation: Policy engagement and advocacy",
    ],
    kpis: [
      "Market share: Largest trade training provider in DMV",
      "Revenue diversification: No single source >30%",
      "Graduate lifetime earnings increase: 50%+",
      "Program replication requests from other cities",
      "Policy impact: 2+ workforce policy changes influenced",
    ],
  },
  {
    id: "transformation",
    name: "Phase 4: Transformation",
    years: "Years 13–18 (2038–2043)",
    theme: "Transform, Replicate, Endow",
    color: "from-purple-500/20 to-purple-500/5",
    revenue: "$5.5M → $10M",
    students: "1,000 → 2,000 annually (multi-site)",
    staff: "50 → 80 FTE",
    milestones: [
      "Launch FTGU replication model for other cities",
      "Build endowment to $10M",
      "Establish FTGU Foundation as separate entity for grantmaking",
      "Open 3rd and 4th training locations",
      "Launch national advocacy campaign for trades education",
      "Create FTGU certification as industry-recognized credential",
      "Develop partnerships with community colleges for degree pathways",
      "Achieve 5,000+ lifetime graduates employed in trades",
      "Begin international partnerships (developing countries)",
      "Launch FTGU media platform (content, stories, training)",
    ],
    programs: [
      "Full program suite across 3–4 locations",
      "FTGU National Replication Program",
      "FTGU Foundation grantmaking to other organizations",
      "Community college degree partnership (AAS in Construction)",
      "International trade training exchange program",
      "Trades media production (documentary, social, podcast)",
      "Annual national conference on trades education",
      "Policy research institute",
    ],
    facilities: "DC flagship campus + 2–3 satellite locations across DMV + partner locations in 2–3 other cities",
    risks: [
      "Mission drift with expansion — Mitigation: Strong board governance, mission review",
      "Financial overextension — Mitigation: Conservative growth, endowment cushion",
      "Replication quality — Mitigation: Standardized model, training, and certification",
      "Founder transition — Mitigation: Professional CEO, founder role evolution to Board Chair/Ambassador",
    ],
    kpis: [
      "Endowment: $10M+",
      "Replication: 3+ cities adopting FTGU model",
      "National recognition: Major media features, awards",
      "Alumni wealth generation: Cumulative earnings impact",
      "Foundation grantmaking: $500K+/year to partner orgs",
    ],
  },
  {
    id: "legacy",
    name: "Phase 5: Legacy",
    years: "Years 19–25 (2044–2050)",
    theme: "Sustain, Endure, Inspire",
    color: "from-rose-500/20 to-rose-500/5",
    revenue: "$10M → $20M+",
    students: "2,000 → 5,000+ annually (national network)",
    staff: "80 → 150+ FTE (all locations)",
    milestones: [
      "Build endowment to $25M+ (approaching self-sustaining)",
      "Operate in 10+ cities nationally",
      "Establish FTGU as the national standard for trade education",
      "Achieve 25,000+ lifetime graduates across all locations",
      "Launch scholarship endowment providing perpetual student support",
      "Create FTGU University — accredited institution for trades education",
      "Jeffrey Williams Sr. Memorial Scholarship Fund reaches $5M",
      "Publish 25-year impact report documenting transformation",
      "Receive Presidential Award or similar national recognition",
      "Model fully replicable — any city can launch FTGU chapter",
    ],
    programs: [
      "FTGU University — accredited trade education",
      "National network of 10+ training centers",
      "Perpetual scholarship endowment",
      "International development partnerships",
      "Public policy institute for workforce development",
      "Alumni investment fund (help graduates start businesses)",
      "National apprenticeship matching platform",
      "Research publications and industry thought leadership",
    ],
    facilities: "National headquarters in DC + 10+ locations + university campus (25+ year vision)",
    risks: [
      "Institutional inertia — Mitigation: Innovation labs, youth board, continuous improvement",
      "Economic cycles — Mitigation: Endowment and diversified revenue cushion",
      "Changing industry needs — Mitigation: Curriculum advisory board, industry partnerships",
    ],
    kpis: [
      "Endowment: $25M+",
      "National locations: 10+",
      "Lifetime graduates employed: 25,000+",
      "Cumulative economic impact: $1B+ in graduate lifetime earnings",
      "National policy influence: Federal trades education legislation",
    ],
  },
];

const watchOuts = [
  {
    category: "Legal & Compliance",
    icon: Shield,
    items: [
      "501(c)(3) application processing can take 3–12 months — file early, use fiscal sponsor in interim",
      "DC charitable solicitation license required BEFORE any fundraising in DC",
      "Unrelated Business Income Tax (UBIT) applies to revenue from activities not substantially related to mission",
      "Lobbying limits: Cannot spend more than a small percentage of budget on lobbying (use 501(h) election)",
      "Political activity prohibition: ZERO political campaign intervention allowed",
      "State registration requirements if soliciting donations in other states (most states require it)",
      "Employment law compliance from day one: W-2 vs 1099 classification, workers' comp, unemployment insurance",
      "ADA compliance for facilities and programs",
      "Background checks for staff working with youth (mandatory in DC)",
    ],
  },
  {
    category: "Financial",
    icon: DollarSign,
    items: [
      "Annual audit required once revenue exceeds $750K (many funders require it earlier)",
      "Grant restrictions: Understand restricted vs unrestricted funds — cannot mix them",
      "Indirect cost rates: Establish and document your rate for federal grants",
      "Cash flow management: Grants are often reimbursement-based — need working capital",
      "Form 990 is PUBLIC — everything in it is transparent. Budget accordingly.",
      "Executive compensation must be 'reasonable' — document comparability data",
      "Related party transactions must be disclosed and managed with conflict of interest policy",
      "Fiscal year selection matters for grant timing — most DC grants align with October fiscal year",
    ],
  },
  {
    category: "Governance",
    icon: Users,
    items: [
      "Board must meet at least quarterly (per FTGU bylaws)",
      "Board members have fiduciary duty — D&O insurance recommended from day one",
      "Founder conflict: Must have independent board majority (not family/close friends)",
      "Succession planning: What happens if founder is incapacitated? Board must have plan.",
      "Term limits on board ensure fresh perspectives and prevent stagnation",
      "Board giving expectation: 100% board giving is industry standard for funders",
      "Document everything: Minutes, votes, decisions, conflicts of interest disclosures",
    ],
  },
  {
    category: "Operations & Safety",
    icon: Shield,
    items: [
      "OSHA compliance mandatory for any construction training — reportable injury obligations",
      "General liability insurance: $1M/$2M minimum recommended",
      "Workers' compensation insurance required in DC for all employees",
      "Student waivers are necessary but do NOT eliminate all liability",
      "Tool and equipment maintenance logs required for safety compliance",
      "Emergency action plan required for training facilities",
      "Hazardous materials handling procedures if using chemicals, solvents, etc.",
      "Youth protection policies mandatory if serving minors (background checks, ratios, supervision)",
    ],
  },
  {
    category: "Growth Risks",
    icon: TrendingUp,
    items: [
      "Don't grow faster than your infrastructure can support — quality over quantity",
      "Avoid single-funder dependency: No one source should exceed 30% of budget",
      "Staff burnout in rapid growth: Invest in people, not just programs",
      "Mission creep: Every new program must clearly connect to core mission",
      "Data collection: Start tracking outcomes from DAY ONE — funders will ask",
      "Technology debt: Invest in systems early (CRM, financial software, LMS)",
      "Community backlash: Gentrify concerns if operating in transitioning neighborhoods",
      "Competition: Other organizations will copy successful models — differentiate through quality",
    ],
  },
  {
    category: "Fundraising Pitfalls",
    icon: Heart,
    items: [
      "Grant writing takes time — budget 40–80 hours per major federal application",
      "Funder relationships take 6–18 months to cultivate — start NOW",
      "Unrestricted funding is the hardest but most important to secure",
      "Donor fatigue: Vary your messaging and show IMPACT, not just need",
      "Event fundraising is expensive — net revenue often only 50% of gross",
      "Online fundraising requires consistent content creation and engagement",
      "Major donor cultivation is personal — Jeffrey must be the face of fundraising",
      "Never promise outcomes you can't deliver — credibility is everything",
    ],
  },
];

export default function StrategicPlan25() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-wider mb-6">
            <Target size={16} /> Strategic Blueprint
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-6">
            25-Year <span className="text-primary">Strategic Plan</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A comprehensive roadmap from startup to national institution — 5 phases of growth, detailed milestones,
            revenue projections, risk mitigation, and everything you need to watch out for along the way.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-12">
          {phases.map((phase, i) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(i)}
              className={`p-4 rounded-xl text-left transition-all ${
                activePhase === i
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{phase.years.split("(")[0]}</div>
              <div className="font-bold text-sm">{phase.name.replace("Phase ", "P")}</div>
              <div className={`text-xs mt-1 ${activePhase === i ? "text-white/80" : "text-primary"}`}>
                {phase.revenue}
              </div>
            </button>
          ))}
        </motion.div>

        {(() => {
          const phase = phases[activePhase];
          return (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className={`bg-gradient-to-r ${phase.color} border border-white/10 rounded-2xl p-8`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-3xl font-display font-black text-white">{phase.name}</h2>
                    <p className="text-white/60 text-lg">{phase.years} — "{phase.theme}"</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center px-4 py-2 bg-black/20 rounded-xl">
                      <div className="text-xl font-display font-black text-primary">{phase.revenue}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Revenue</div>
                    </div>
                    <div className="text-center px-4 py-2 bg-black/20 rounded-xl">
                      <div className="text-xl font-display font-black text-white">{phase.students}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Students/Year</div>
                    </div>
                    <div className="text-center px-4 py-2 bg-black/20 rounded-xl">
                      <div className="text-xl font-display font-black text-white">{phase.staff}</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Staff</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" /> Key Milestones
                  </h3>
                  <ul className="space-y-3">
                    {phase.milestones.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <Star size={14} className="text-amber-400 mt-0.5 flex-shrink-0" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <GraduationCap size={18} className="text-primary" /> Programs & Services
                  </h3>
                  <ul className="space-y-3">
                    {phase.programs.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <Briefcase size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Building2 size={18} className="text-primary" /> Facilities
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{phase.facilities}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Shield size={18} className="text-amber-400" /> Risks & Mitigation
                  </h3>
                  <ul className="space-y-3">
                    {phase.risks.map((r, i) => (
                      <li key={i} className="text-white/70 text-sm leading-relaxed">
                        <span className="text-amber-400">⚠</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Target size={18} className="text-primary" /> Key Performance Indicators
                  </h3>
                  <ul className="space-y-3">
                    {phase.kpis.map((k, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                        <TrendingUp size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })()}

        <motion.div {...fadeIn} className="mt-20">
          <h2 className="text-4xl font-display font-black text-foreground text-center mb-4">
            What To <span className="text-primary">Watch Out For</span>
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Critical compliance, legal, financial, and operational considerations for every stage of growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {watchOuts.map((section, i) => (
              <motion.div
                key={section.category}
                {...fadeIn}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <section.icon size={18} className="text-primary" />
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="text-white/60 text-sm leading-relaxed border-l-2 border-primary/30 pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-display font-bold text-white mb-4">This Plan Is a Living Document</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Review and update this strategic plan annually with your board. Adjust timelines based on actual performance,
              funding secured, and market conditions. The 25-year vision guides direction; the annual plan drives execution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/fundraising" className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2">
                Fundraising Playbook <DollarSign size={18} />
              </Link>
              <Link href="/compliance-guide" className="px-8 py-4 bg-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-2">
                Compliance Guide <Shield size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
