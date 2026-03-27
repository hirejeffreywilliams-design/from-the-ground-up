import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  MapPin, Target, Building2, Globe, Rocket, Crown,
  Users, GraduationCap, Cpu, TrendingUp, Landmark,
  ChevronDown, ChevronUp, Star, Zap
} from "lucide-react";
import { useState } from "react";

interface Phase {
  id: string;
  years: string;
  yearRange: string;
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  goals: { title: string; description: string }[];
  milestones: string[];
  keyMetrics: { label: string; target: string }[];
  leadership: string[];
}

const phases: Phase[] = [
  {
    id: "foundation",
    years: "Years 1–5",
    yearRange: "2026–2030",
    title: "Laying the Foundation",
    subtitle: "Establish the organization, build the first programs, and prove the model.",
    icon: MapPin,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    goals: [
      { title: "Launch Core Programs", description: "Establish all 6 founding trade programs (Construction, Electrical, Plumbing, Carpentry, HVAC, AI in the Trades) with certified instructors and standardized curricula." },
      { title: "Build the Team", description: "Hire an Executive Director, Program Director, 6 lead instructors, and administrative staff. Establish a volunteer network of 50+ industry professionals." },
      { title: "Secure Foundational Funding", description: "Achieve $500K in annual revenue through grants, individual donations, corporate sponsorships, and program fees. Apply for and receive 501(c)(3) tax-exempt status." },
      { title: "Establish AI Learning Infrastructure", description: "Deploy AI-powered simulation labs, virtual reality training stations, and adaptive learning platforms across all programs." },
      { title: "Community Partnerships", description: "Forge partnerships with 15+ local construction companies, unions, and trade organizations for apprenticeship pipelines." },
    ],
    milestones: [
      "501(c)(3) status approved",
      "First cohort of 50 students graduates",
      "First permanent training facility secured",
      "AI learning platform v1.0 deployed",
      "First corporate partnership signed",
      "Board of Directors expanded to 9 members",
      "Annual fundraising gala established",
    ],
    keyMetrics: [
      { label: "Students Trained", target: "500" },
      { label: "Job Placement Rate", target: "85%" },
      { label: "Annual Revenue", target: "$500K" },
      { label: "Staff Size", target: "15" },
    ],
    leadership: [
      "Founder & Chairperson",
      "Executive Director",
      "Program Director",
      "6 Lead Instructors",
      "Development Director",
      "Operations Manager",
    ],
  },
  {
    id: "growth",
    years: "Years 6–10",
    yearRange: "2031–2035",
    title: "Building Momentum",
    subtitle: "Scale programs, expand geography, and deepen community impact.",
    icon: TrendingUp,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/30",
    goals: [
      { title: "Regional Expansion", description: "Open 3 additional training centers in neighboring cities/states. Adapt programs to meet regional workforce needs and building codes." },
      { title: "Advanced Program Development", description: "Launch specialized tracks: Green Building & Sustainability, Smart Home Technology, Commercial Construction Management, and Trade Entrepreneurship." },
      { title: "Youth Pipeline Program", description: "Partner with 25+ high schools to offer introductory trade courses, summer camps, and after-school programs. Create a scholarship fund for young learners." },
      { title: "AI Innovation Lab", description: "Establish a dedicated R&D lab for developing proprietary AI training tools. License technology to other trade schools for additional revenue." },
      { title: "Workforce Development Partnerships", description: "Formalize relationships with state workforce development boards, unions (IBEW, UA, UBC), and federal programs (DOL apprenticeships)." },
    ],
    milestones: [
      "3 new training centers opened",
      "2,500th student graduates",
      "First AI tool licensed to external organization",
      "Youth program reaches 500 students annually",
      "Annual revenue surpasses $2M",
      "First government contract secured",
      "Alumni association established",
    ],
    keyMetrics: [
      { label: "Students Trained (Cumulative)", target: "3,000" },
      { label: "Training Centers", target: "4" },
      { label: "Annual Revenue", target: "$2.5M" },
      { label: "Staff Size", target: "50" },
    ],
    leadership: [
      "Chief Executive Officer (CEO)",
      "Chief Operating Officer (COO)",
      "Chief Program Officer",
      "Regional Directors (3)",
      "Director of AI & Innovation",
      "Director of Youth Programs",
      "Chief Development Officer",
    ],
  },
  {
    id: "national",
    years: "Years 11–25",
    yearRange: "2036–2050",
    title: "National Reach",
    subtitle: "Become a recognized national leader in trade education and AI-enhanced learning.",
    icon: Building2,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    goals: [
      { title: "National Presence", description: "Operate 15–20 training centers across 10+ states. Establish a central headquarters and national program standards office." },
      { title: "Accreditation & Certification Body", description: "Become a nationally recognized accrediting body for trade education. Develop the 'FTGU Certified Tradesperson' credential, recognized by employers nationwide." },
      { title: "Digital Learning Platform", description: "Launch a comprehensive online learning platform offering hybrid programs, reaching students in rural and underserved areas who can't access physical centers." },
      { title: "Policy & Advocacy", description: "Establish a policy arm to advocate for trade education funding, apprenticeship legislation, and workforce development at state and federal levels." },
      { title: "Research Institute", description: "Found the 'Jeffrey Williams Sr. Institute for Trade Innovation' — a research center studying the future of trades, AI integration, and workforce trends." },
      { title: "Endowment Building", description: "Begin building a permanent endowment targeting $50M. Establish planned giving, major gifts, and legacy programs." },
      { title: "Community Impact Centers", description: "Open community centers that combine trade training with wraparound services (financial literacy, career counseling, childcare, transportation assistance)." },
    ],
    milestones: [
      "15,000th student graduates",
      "FTGU Certification recognized nationally",
      "Online platform reaches 50,000 learners",
      "First policy victory at federal level",
      "Research institute publishes first major report",
      "Endowment reaches $25M",
      "Annual revenue surpasses $15M",
      "First international partnership established",
    ],
    keyMetrics: [
      { label: "Students Trained (Cumulative)", target: "20,000" },
      { label: "Training Centers", target: "20" },
      { label: "Online Learners", target: "50,000" },
      { label: "Annual Revenue", target: "$15M" },
      { label: "Endowment", target: "$25M" },
      { label: "Staff Size", target: "200" },
    ],
    leadership: [
      "President & CEO",
      "Executive Vice President",
      "VP of National Programs",
      "VP of Digital Learning",
      "VP of Policy & Advocacy",
      "VP of Research & Innovation",
      "Chief Financial Officer",
      "Chief Technology Officer",
      "Regional Vice Presidents (5)",
      "Board expanded to 15 members",
    ],
  },
  {
    id: "global",
    years: "Years 26–50",
    yearRange: "2051–2075",
    title: "Global Impact",
    subtitle: "Expand internationally and transform trade education worldwide.",
    icon: Globe,
    color: "text-primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/30",
    goals: [
      { title: "International Expansion", description: "Establish FTGU training centers or licensed programs in 10+ countries, adapting curricula to local building traditions, codes, and workforce needs." },
      { title: "Foundation Transition Complete", description: "Complete the full transition from a nonprofit to the 'From The Ground Up Foundation' — a permanent, self-sustaining institution with a $200M+ endowment." },
      { title: "Global AI Trade Platform", description: "Operate the world's leading AI-powered trade education platform, available in 20+ languages, serving millions of learners worldwide." },
      { title: "Autonomous Learning Centers", description: "Deploy AI-driven, semi-autonomous training centers in underserved communities globally — self-sustaining facilities powered by renewable energy with AI instructors supplementing human teachers." },
      { title: "Trade Innovation Grants", description: "Award $5M+ annually in grants to researchers, entrepreneurs, and organizations advancing trade education, sustainable building, and construction technology." },
      { title: "University Partnerships", description: "Establish formal degree-pathway partnerships with 50+ universities, allowing FTGU credentials to count toward bachelor's and master's degrees in engineering, architecture, and construction management." },
      { title: "Disaster Response Program", description: "Create a rapid-deployment trade training program for disaster recovery — training local populations to rebuild after natural disasters using FTGU curricula and AI tools." },
    ],
    milestones: [
      "100,000th student graduates globally",
      "Foundation endowment reaches $200M",
      "Programs operating in 10+ countries",
      "AI platform serves 1M+ learners",
      "$50M+ in grants awarded to innovators",
      "First FTGU-trained community fully rebuilt after disaster",
      "UN recognition for workforce development",
      "Annual budget surpasses $50M",
    ],
    keyMetrics: [
      { label: "Students Trained (Global)", target: "150,000" },
      { label: "Countries Present", target: "15" },
      { label: "Online Learners", target: "1M+" },
      { label: "Endowment", target: "$200M" },
      { label: "Annual Budget", target: "$50M" },
      { label: "Global Staff", target: "500+" },
    ],
    leadership: [
      "Global President & CEO",
      "President, FTGU Foundation",
      "Global VP of Programs",
      "VP of International Operations",
      "VP of AI & Platform",
      "VP of Grants & Innovation",
      "VP of Disaster Response",
      "Regional Presidents (Americas, Europe, Africa, Asia)",
      "Board of Trustees (21 members)",
      "Advisory Council of 50+ industry leaders",
    ],
  },
  {
    id: "legacy",
    years: "Years 51–100",
    yearRange: "2076–2126",
    title: "Permanent Legacy",
    subtitle: "A self-sustaining institution that outlives its founders and serves humanity in perpetuity.",
    icon: Crown,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/30",
    goals: [
      { title: "Self-Sustaining Foundation", description: "The From The Ground Up Foundation operates entirely from endowment returns, earned revenue, and a diversified funding portfolio — never dependent on any single funding source." },
      { title: "Global Standard Bearer", description: "FTGU certification is the global gold standard for trade education. Governments, employers, and institutions worldwide recognize and require it." },
      { title: "AI-Human Integrated Learning", description: "Pioneer the next generation of trade education where AI and human instruction are seamlessly blended, with personalized learning paths for every student on earth." },
      { title: "Generational Leadership Pipeline", description: "Establish a leadership academy that trains the next generation of FTGU leaders from within — alumni who return to lead, teach, and innovate." },
      { title: "Jeffrey Williams Sr. Legacy Endowment", description: "The endowment reaches $1B+, ensuring the organization can operate, innovate, and grant funds in perpetuity regardless of economic conditions." },
      { title: "Rebuilding the World", description: "FTGU-trained professionals are leading sustainable construction, green infrastructure, and resilient community building on every continent." },
      { title: "Open-Source Trade Knowledge", description: "Make core trade education curricula freely available worldwide as an open-source resource, ensuring that foundational building knowledge is accessible to all of humanity." },
    ],
    milestones: [
      "1,000,000th student graduates globally",
      "Endowment surpasses $1B",
      "Programs in 50+ countries",
      "FTGU certification adopted as government standard in 20+ nations",
      "100th anniversary celebration (2126)",
      "Jeffrey Williams Sr. Institute ranked among top research institutions",
      "First FTGU alumni becomes a national leader",
      "Open-source curricula translated into 100+ languages",
    ],
    keyMetrics: [
      { label: "Students Trained (All Time)", target: "1,000,000+" },
      { label: "Countries Present", target: "50+" },
      { label: "Endowment", target: "$1B+" },
      { label: "Annual Grant Awards", target: "$50M+" },
      { label: "Languages Supported", target: "100+" },
      { label: "Global Staff & Faculty", target: "2,000+" },
    ],
    leadership: [
      "Chairperson, Board of Trustees",
      "Global President & CEO (elected by Board)",
      "Chancellor, Jeffrey Williams Sr. Institute",
      "Presidents of Regional Foundations (6)",
      "Board of Trustees (25 members, global representation)",
      "Global Advisory Council (100+ members)",
      "Alumni Leadership Council",
      "Youth Advisory Board",
    ],
  },
];

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const Icon = phase.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative border-2 ${phase.borderColor} rounded-3xl overflow-hidden transition-all duration-300 ${expanded ? 'shadow-2xl' : 'shadow-sm hover:shadow-lg'}`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full p-8 md:p-10 text-left flex items-start gap-6 transition-colors ${expanded ? phase.bgColor : 'bg-card hover:' + phase.bgColor}`}
      >
        <div className={`w-16 h-16 rounded-2xl ${phase.bgColor} ${phase.color} flex items-center justify-center flex-shrink-0`}>
          <Icon size={32} />
        </div>
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-sm font-bold uppercase tracking-wider ${phase.color}`}>{phase.years}</span>
            <span className="text-sm text-muted-foreground">({phase.yearRange})</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">{phase.title}</h3>
          <p className="text-muted-foreground text-lg">{phase.subtitle}</p>
        </div>
        <div className="flex-shrink-0 mt-2">
          {expanded ? <ChevronUp className="w-6 h-6 text-muted-foreground" /> : <ChevronDown className="w-6 h-6 text-muted-foreground" />}
        </div>
      </button>

      {expanded && (
        <div className="p-8 md:p-10 pt-0 space-y-10">
          <div>
            <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
              <Target size={20} className={phase.color} />
              Strategic Goals
            </h4>
            <div className="space-y-4">
              {phase.goals.map((goal, i) => (
                <div key={i} className={`p-6 rounded-2xl border ${phase.borderColor} ${phase.bgColor}`}>
                  <h5 className="font-bold text-foreground mb-2">{goal.title}</h5>
                  <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <Star size={20} className={phase.color} />
                Key Milestones
              </h4>
              <ul className="space-y-3">
                {phase.milestones.map((milestone, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${phase.color === 'text-primary' ? 'bg-primary' : phase.color === 'text-secondary' ? 'bg-secondary' : 'bg-accent'}`}></div>
                    <span className="text-muted-foreground">{milestone}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp size={20} className={phase.color} />
                Target Metrics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {phase.keyMetrics.map((metric, i) => (
                  <div key={i} className={`p-4 rounded-xl border ${phase.borderColor} text-center`}>
                    <div className={`text-2xl font-display font-bold ${phase.color}`}>{metric.target}</div>
                    <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
              <Users size={20} className={phase.color} />
              Leadership Structure
            </h4>
            <div className="flex flex-wrap gap-2">
              {phase.leadership.map((role, i) => (
                <span key={i} className={`px-4 py-2 rounded-full text-sm font-medium border ${phase.borderColor} ${phase.bgColor}`}>
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Roadmap() {
  return (
    <div className="min-h-screen page-gradient">
      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <Rocket size={16} />
              100-YEAR VISION
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Building for the <span className="text-primary">Next Century</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              From The Ground Up isn't just a program — it's a movement designed to outlast its founders
              and serve generations. This is our 100-year roadmap to transform trade education worldwide.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              {[
                { icon: GraduationCap, label: "1M+ Students", desc: "trained over 100 years" },
                { icon: Globe, label: "50+ Countries", desc: "global presence" },
                { icon: Landmark, label: "$1B+ Endowment", desc: "permanent legacy" },
                { icon: Cpu, label: "100+ Languages", desc: "open-source curricula" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl border border-border shadow-sm"
                >
                  <stat.icon size={24} className="text-primary" />
                  <div className="text-left">
                    <div className="font-display font-bold text-foreground">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <PhaseCard key={phase.id} phase={phase} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            The Journey of a Thousand Miles Begins with a Single Step
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Every phase of this roadmap starts with people — people willing to learn, teach, give, and build.
            Your involvement today writes the first chapter of a 100-year story.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-colors"
            >
              Invest in the Vision
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-2xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-colors"
            >
              Get Involved Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
