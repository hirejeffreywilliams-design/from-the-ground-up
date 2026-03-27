import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Landmark, Shield, TrendingUp, Users, DollarSign,
  CheckCircle, ArrowRight, Scale,
  Heart, Globe, BookOpen, Briefcase, Award, ChevronDown, ChevronUp,
  Layers, Lock, Lightbulb, HandHeart
} from "lucide-react";
import { useState } from "react";

function Accordion({ title, icon: Icon, children, defaultOpen = false }: { title: string; icon: any; children: any; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            <Icon size={20} />
          </div>
          <h3 className="text-xl font-display font-bold text-foreground">{title}</h3>
        </div>
        {open ? <ChevronUp size={20} className="text-muted-foreground" /> : <ChevronDown size={20} className="text-muted-foreground" />}
      </button>
      {open && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
}

const transitionPhases = [
  {
    phase: "Phase 1: Strengthen the Nonprofit",
    timeline: "Years 1–10 (2026–2035)",
    icon: Shield,
    color: "primary",
    objectives: [
      {
        title: "Organizational Excellence",
        items: [
          "Achieve financial sustainability with diversified revenue (grants, donations, earned income, corporate partnerships)",
          "Build a track record of measurable impact (students trained, job placements, community projects completed)",
          "Establish robust governance with a high-caliber board of directors",
          "Implement best-in-class financial controls, auditing, and transparency",
          "Develop comprehensive policies and procedures manual",
        ]
      },
      {
        title: "Program Maturity",
        items: [
          "Prove all 6 core programs with documented outcomes and alumni success stories",
          "Develop proprietary AI learning tools with demonstrable educational advantages",
          "Build a nationally recognized brand through consistent impact and advocacy",
          "Establish the FTGU certification as an industry-respected credential",
          "Create replicable program models that can be deployed at new sites",
        ]
      },
      {
        title: "Financial Foundation",
        items: [
          "Grow annual revenue from $500K to $2.5M+",
          "Build an operating reserve equal to 6 months of expenses",
          "Begin endowment fund with initial $1M seed",
          "Establish planned giving and legacy donation programs",
          "Secure multi-year grants from major foundations (Ford, Gates, Kellogg, etc.)",
        ]
      },
    ]
  },
  {
    phase: "Phase 2: Prepare for Transition",
    timeline: "Years 11–20 (2036–2045)",
    icon: Layers,
    color: "secondary",
    objectives: [
      {
        title: "Legal & Structural Preparation",
        items: [
          "Engage nonprofit transition attorneys and consultants",
          "Research and select foundation type: Private Foundation vs. Public Charity (Private Foundation recommended for endowment-driven model)",
          "Draft foundation charter, articles of incorporation, and bylaws",
          "Establish the foundation entity while maintaining the nonprofit operations",
          "Create a transition committee of board members, legal counsel, and financial advisors",
        ]
      },
      {
        title: "Endowment Building",
        items: [
          "Grow endowment from $1M to $25M through major gifts campaigns",
          "Launch a capital campaign specifically for the foundation endowment",
          "Establish an investment committee with professional fund management",
          "Define endowment spending policy (typically 5% annual distribution)",
          "Secure cornerstone gifts of $1M+ from major donors and corporate partners",
        ]
      },
      {
        title: "Governance Evolution",
        items: [
          "Expand board to 15 members with expertise in philanthropy, finance, and international development",
          "Create Board of Trustees for the foundation (may overlap with nonprofit board initially)",
          "Establish advisory councils for programs, technology, and policy",
          "Develop succession planning for all key leadership positions",
          "Implement term limits and board rotation to ensure fresh perspectives",
        ]
      },
    ]
  },
  {
    phase: "Phase 3: Execute the Transition",
    timeline: "Years 21–30 (2046–2055)",
    icon: Landmark,
    color: "accent",
    objectives: [
      {
        title: "Legal Transition",
        items: [
          "File articles of incorporation for 'The From The Ground Up Foundation'",
          "Apply for 501(c)(3) status for the foundation if structured as a new entity",
          "Transfer assets from the nonprofit to the foundation according to legal requirements",
          "Dissolve or restructure the original nonprofit as a program arm of the foundation",
          "Ensure compliance with IRS regulations for private foundation or public charity status",
          "Register in all states where the foundation will operate",
        ]
      },
      {
        title: "Financial Restructuring",
        items: [
          "Transfer endowment assets to foundation management",
          "Establish foundation investment policy with professional asset management",
          "Set up grant-making infrastructure (if the foundation will make grants to other organizations)",
          "Create annual distribution requirements (private foundations must distribute 5% of assets annually)",
          "Implement foundation-specific financial reporting and IRS Form 990-PF filing",
        ]
      },
      {
        title: "Operational Continuity",
        items: [
          "Maintain all programs without interruption during transition",
          "Communicate the transition to stakeholders, donors, partners, and alumni",
          "Rebrand as 'The From The Ground Up Foundation' across all materials",
          "Update all legal agreements, contracts, and partnerships",
          "Ensure all staff employment continues seamlessly under the foundation",
        ]
      },
    ]
  },
  {
    phase: "Phase 4: Foundation Maturity",
    timeline: "Years 31–50 (2056–2075)",
    icon: Globe,
    color: "primary",
    objectives: [
      {
        title: "Grant-Making Program",
        items: [
          "Award $5M+ annually in grants to trade education organizations, researchers, and innovators worldwide",
          "Establish named fellowship programs (Jeffrey Williams Sr. Fellow, etc.)",
          "Fund university research partnerships studying the future of trades",
          "Support policy organizations advocating for trade education funding",
          "Create a rapid-response fund for disaster recovery trade training",
        ]
      },
      {
        title: "Global Operations",
        items: [
          "Establish regional foundations or affiliated entities in 15+ countries",
          "Adapt governance to include international representation",
          "Create a global standards body for FTGU-certified trade education",
          "Develop cross-border student exchange and instructor fellowship programs",
          "Partner with UN agencies and international development organizations",
        ]
      },
      {
        title: "Perpetual Sustainability",
        items: [
          "Grow endowment to $200M+ ensuring permanent operational funding",
          "Diversify revenue: endowment returns, licensing, earned income, ongoing philanthropy",
          "Establish an innovation fund for emerging trade technologies",
          "Create a legacy giving society for donors who include FTGU in their estate plans",
          "Build physical legacy assets (permanent campuses, innovation labs, community centers)",
        ]
      },
    ]
  },
];

const foundationTypes = [
  {
    type: "Private Foundation",
    description: "Funded primarily by a single source (individual, family, or corporation). Subject to more IRS regulations but offers maximum control over mission and programs.",
    pros: ["Maximum control over programs and grants", "Can operate own programs (operating foundation)", "Endowment-driven sustainability", "Legacy preservation for founders"],
    cons: ["5% annual distribution requirement", "More IRS scrutiny and reporting", "Excise tax on investment income", "Restrictions on self-dealing"],
    recommendation: true,
  },
  {
    type: "Public Charity (509(a)(1) or (2))",
    description: "Funded by a broad base of public support. Less regulatory burden but requires ongoing public fundraising.",
    pros: ["Higher deduction limits for donors", "Less IRS scrutiny", "No 5% distribution requirement", "More flexible operations"],
    cons: ["Must maintain public support test", "Ongoing fundraising pressure", "Less control over mission evolution", "Risk of mission drift with donor influence"],
    recommendation: false,
  },
  {
    type: "Supporting Organization (509(a)(3))",
    description: "Supports one or more existing public charities. A hybrid that offers some private foundation benefits with public charity treatment.",
    pros: ["Public charity tax treatment", "Can support multiple organizations", "Donor flexibility"],
    cons: ["Must support specified public charities", "Complex compliance requirements", "Less independence"],
    recommendation: false,
  },
];

export default function FoundationStrategy() {
  return (
    <div className="min-h-screen page-gradient">
      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <Landmark size={16} />
              STRATEGIC PLAN
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Nonprofit to <span className="text-primary">Foundation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive strategy to evolve From The Ground Up from a community nonprofit
              into a permanent, self-sustaining foundation that serves generations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-4">Why Transition to a Foundation?</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            A foundation provides permanence, independence, and the ability to sustain impact for centuries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "Permanence", desc: "An endowment-driven model ensures the mission lives forever, regardless of annual fundraising cycles." },
              { icon: Shield, title: "Independence", desc: "Reduced dependence on grants and donors means full control over programs and mission direction." },
              { icon: HandHeart, title: "Grant-Making Power", desc: "A foundation can fund other organizations, multiplying impact beyond its own programs." },
              { icon: Lightbulb, title: "Innovation Freedom", desc: "With financial security, the foundation can take risks, invest in R&D, and pioneer new approaches." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-background"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-4">Foundation Type Analysis</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Choosing the right foundation structure is critical. Here's our analysis of the options.
          </p>

          <div className="space-y-6">
            {foundationTypes.map((ft, i) => (
              <motion.div
                key={ft.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl border-2 ${ft.recommendation ? 'border-primary bg-primary/5 shadow-lg' : 'border-border bg-card'}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-display font-bold text-foreground">{ft.type}</h3>
                  {ft.recommendation && (
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full flex items-center gap-1">
                      <Award size={14} /> Recommended
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{ft.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-secondary mb-3 flex items-center gap-2"><CheckCircle size={16} /> Advantages</h4>
                    <ul className="space-y-2">
                      {ft.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0"></div>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3 flex items-center gap-2"><Scale size={16} /> Considerations</h4>
                    <ul className="space-y-2">
                      {ft.cons.map((con, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-4">The Transition Playbook</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            A phased approach to transforming From The Ground Up from a nonprofit into a permanent foundation.
          </p>

          <div className="space-y-6">
            {transitionPhases.map((tp, i) => (
              <Accordion key={tp.phase} title={tp.phase} icon={tp.icon} defaultOpen={i === 0}>
                <div className="space-y-2 mb-4">
                  <span className="text-sm font-bold text-primary">{tp.timeline}</span>
                </div>
                <div className="space-y-8">
                  {tp.objectives.map((obj, j) => (
                    <div key={j}>
                      <h4 className="text-lg font-display font-bold text-foreground mb-4">{obj.title}</h4>
                      <ul className="space-y-3">
                        {obj.items.map((item, k) => (
                          <li key={k} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-4">Key Success Factors</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            These critical elements must be in place for a successful transition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: DollarSign,
                title: "Financial Discipline",
                description: "Maintain clean financial records, annual audits, and transparent reporting. Build reserves before attempting the transition. A foundation without financial credibility will not attract major endowment gifts.",
              },
              {
                icon: Users,
                title: "Board Development",
                description: "Recruit board members with foundation experience, investment expertise, and major donor networks. The board must evolve from operational oversight to strategic governance and stewardship.",
              },
              {
                icon: Briefcase,
                title: "Legal Counsel",
                description: "Engage experienced nonprofit/foundation attorneys early. The legal complexities of transitioning — asset transfers, IRS compliance, state registrations — require specialized expertise.",
              },
              {
                icon: Heart,
                title: "Donor Relationships",
                description: "Build deep relationships with major donors who can make transformational gifts ($1M+). Foundation endowments are built on trust, track record, and personal connections.",
              },
              {
                icon: TrendingUp,
                title: "Proven Impact",
                description: "Document everything. Students trained, jobs placed, communities served, AI innovations deployed. Foundations are built on demonstrated results, not aspirations.",
              },
              {
                icon: BookOpen,
                title: "Knowledge Transfer",
                description: "Create comprehensive documentation of all programs, processes, and institutional knowledge. A foundation must be able to operate beyond any single leader.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl border border-border bg-card hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-12">Financial Roadmap to Foundation</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-4 px-4 font-display font-bold text-white">Milestone</th>
                  <th className="py-4 px-4 font-display font-bold text-white">Timeline</th>
                  <th className="py-4 px-4 font-display font-bold text-white">Revenue</th>
                  <th className="py-4 px-4 font-display font-bold text-white">Endowment</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                {[
                  { milestone: "Launch & Prove", timeline: "Year 1-5", revenue: "$500K/yr", endowment: "—" },
                  { milestone: "Regional Growth", timeline: "Year 6-10", revenue: "$2.5M/yr", endowment: "$1M" },
                  { milestone: "National Scale", timeline: "Year 11-20", revenue: "$10M/yr", endowment: "$25M" },
                  { milestone: "Foundation Filing", timeline: "Year 21-25", revenue: "$15M/yr", endowment: "$50M" },
                  { milestone: "Foundation Operations", timeline: "Year 26-35", revenue: "$25M/yr", endowment: "$100M" },
                  { milestone: "Global Foundation", timeline: "Year 36-50", revenue: "$50M/yr", endowment: "$200M" },
                  { milestone: "Permanent Legacy", timeline: "Year 51-100", revenue: "$100M+/yr", endowment: "$1B+" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4 px-4 font-medium text-white">{row.milestone}</td>
                    <td className="py-4 px-4">{row.timeline}</td>
                    <td className="py-4 px-4 text-accent font-bold">{row.revenue}</td>
                    <td className="py-4 px-4 text-accent font-bold">{row.endowment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Landmark className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            This Is How Legacies Are Built
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Jeffrey Williams Sr. built things that lasted. This strategy ensures his legacy — and your vision —
            lasts forever. From a nonprofit to a foundation, from a local program to a global movement.
            From the ground up.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/roadmap"
              className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              View 100-Year Roadmap <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl border-2 border-foreground text-foreground font-bold text-lg hover:bg-foreground hover:text-background transition-colors"
            >
              Let's Start Building
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
