import { Link } from "wouter";
import { ArrowRight, Wrench, Zap, Droplet, Hammer, Cpu, Quote, Users, GraduationCap, Briefcase, Handshake, HardHat, MapPin, Star, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useListPrograms, useListTestimonials } from "@/hooks/use-api-hooks";

const defaultPrograms = [
  { id: 1, title: "Construction Basics", description: "Learn foundational framing, drywall, and structural planning.", icon: "Hammer" },
  { id: 2, title: "Electrical Systems", description: "Master residential wiring, safety protocols, and modern circuits.", icon: "Zap" },
  { id: 3, title: "Plumbing Fundamentals", description: "Understand pipe fitting, water systems, and efficient layout.", icon: "Droplet" },
];

const iconMap: Record<string, any> = {
  Hammer: Hammer,
  Zap: Zap,
  Droplet: Droplet,
  Wrench: Wrench,
  Cpu: Cpu,
};

export default function Home() {
  const { data: programsData, isLoading: programsLoading } = useListPrograms();
  const { data: testimonialsData } = useListTestimonials();

  const displayPrograms = programsData && programsData.length > 0 ? programsData.slice(0, 3) : defaultPrograms;

  return (
    <div className="flex flex-col min-h-screen page-gradient grain-overlay">
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30"></div>
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="" 
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
          />
        </div>
        <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 py-2.5 px-7 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 text-foreground font-bold uppercase tracking-widest text-xs mb-10 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(220,20,60,0.6)]"></span>
              Welcome to From The Ground Up
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black text-foreground max-w-6xl mx-auto leading-[0.95] mb-10 uppercase tracking-tight">
              Build Your Future, <br className="hidden md:block" />
              <span className="text-primary relative inline-block">
                One Skill at a Time.
                <motion.svg 
                  className="absolute -bottom-3 md:-bottom-5 left-0 w-full h-4 md:h-6" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <path d="M0,5 Q50,10 100,5" stroke="hsl(38, 92%, 50%)" strokeWidth="4" fill="transparent" />
                </motion.svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto mb-14 text-balance font-medium leading-relaxed">
              Empowering individuals of all ages with hands-on trade skills in construction, electrical work, and plumbing — enhanced by AI-driven learning tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                href="/programs"
                className="w-full sm:w-auto px-12 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm hover:bg-primary/90 hover:scale-[1.03] transition-all duration-300 glow-primary flex items-center justify-center gap-3 border border-primary/50"
                style={{ borderRadius: '8px 24px 8px 24px' }}
              >
                Explore Programs <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about"
                className="w-full sm:w-auto px-12 py-5 bg-white/50 backdrop-blur-xl text-foreground font-black uppercase tracking-widest text-sm border border-white/40 hover:bg-white/80 hover:scale-[1.03] transition-all duration-300 shadow-lg"
                style={{ borderRadius: '24px 8px 24px 8px' }}
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-10 bg-foreground">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Users, stat: "500+", label: "Students Trained", color: "from-primary to-rose-400" },
              { icon: GraduationCap, stat: "6", label: "Core Programs", color: "from-accent to-amber-400" },
              { icon: Briefcase, stat: "92%", label: "Job Placement", color: "from-emerald-500 to-emerald-400" },
              { icon: Handshake, stat: "15+", label: "Industry Partners", color: "from-blue-500 to-blue-400" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  <item.icon size={30} className="text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-2">{item.stat}</h3>
                <p className="text-white/60 font-bold uppercase tracking-wider text-xs sm:text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 sm:p-14 md:p-20 relative overflow-hidden"
            style={{ borderRadius: '16px 64px 16px 64px' }}
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/8 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/8 rounded-full blur-3xl"></div>

            <Quote className="w-16 h-16 text-primary/20 rotate-180 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight relative z-10">
              "A world where every person has access to the knowledge and tools needed to build, create, and sustain — <strong className="text-primary font-black uppercase tracking-tight block mt-4">from the ground up.</strong>"
            </h2>
            <div className="mt-10 inline-flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <p className="text-foreground font-black tracking-widest uppercase text-sm">Our Vision</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                Our Curriculum
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-6 uppercase tracking-tight">Hands-On <br/><span className="text-primary">Learning</span></h2>
              <p className="text-xl text-foreground/70 font-medium leading-relaxed">
                Our programs combine traditional craftsmanship with modern AI technologies to give you an unparalleled competitive edge in the trades.
              </p>
            </div>
            <Link 
              href="/programs"
              className="group flex items-center gap-3 font-black uppercase tracking-wider text-sm text-foreground hover:text-primary transition-colors border-b-2 border-foreground hover:border-primary pb-1"
            >
              View All Programs 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programsLoading ? (
              [1,2,3].map(i => (
                <div key={i} className="h-[400px] glass-panel animate-pulse" style={{ borderRadius: '16px 48px 16px 48px' }}></div>
              ))
            ) : (
              displayPrograms.map((program, index) => {
                const IconComponent = iconMap[program.icon] || Wrench;
                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="group glass-panel p-6 sm:p-10 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] hover:-translate-y-3"
                    style={{ borderRadius: index % 2 === 0 ? '12px 48px 12px 48px' : '48px 12px 48px 12px' }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="w-20 h-20 bg-white shadow-xl flex items-center justify-center mb-8 relative z-10 text-primary transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500" style={{ borderRadius: '4px 16px 4px 16px' }}>
                      <IconComponent size={40} />
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-foreground mb-4 relative z-10">{program.title}</h3>
                    <p className="text-foreground/60 mb-10 leading-relaxed font-medium relative z-10 text-lg">
                      {program.description}
                    </p>
                    
                    <Link 
                      href={`/programs#${program.id}`}
                      className="inline-flex items-center font-black uppercase tracking-wider text-sm text-primary hover:text-primary/80 transition-colors relative z-10 gap-2"
                    >
                      Learn more <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                )
              })
            )}
          </div>
        </div>
      </section>

      <section className="py-32 relative z-10 section-crimson overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -top-64 -right-64 w-[800px] h-[800px] bg-black/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white mb-8 uppercase tracking-tight">Built By <br/><span className="text-white/80">Our Students</span></h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed mb-10">
                Don't just take our word for it. Hear from the people who have transformed their lives through our programs.
              </p>
              <Link href="/programs" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-black uppercase tracking-wider text-sm hover:bg-white hover:text-primary transition-all duration-300" style={{ borderRadius: '8px 20px 8px 20px' }}>
                Start Your Journey <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="bg-white/10 border border-white/20 p-6 sm:p-10 md:p-14 backdrop-blur-xl" style={{ borderRadius: '16px 48px 16px 48px' }}>
              <Quote className="w-14 h-14 text-white/40 mb-8" />
              <p className="text-xl sm:text-2xl md:text-3xl text-white font-display font-medium leading-tight mb-8">
                "The combination of hands-on plumbing skills with AI layout tools made me hirable before I even finished the program. It's not just a class, it's a career launchpad."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg border border-white/30">MJ</div>
                <div>
                  <h4 className="text-white font-bold text-lg">Marcus Johnson</h4>
                  <p className="text-white/60 uppercase tracking-wider text-sm font-bold">Plumbing Graduate, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-12 md:p-20 relative overflow-hidden border-2 border-primary/20"
            style={{ borderRadius: '16px 48px 16px 48px' }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-widest text-xs mb-8">
                  <Star size={14} className="fill-primary" />
                  Once-In-A-Generation Opportunity
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6 uppercase tracking-tight leading-tight">
                  DC Commanders <br/><span className="text-primary">Stadium</span>
                </h2>
                <p className="text-lg sm:text-xl text-foreground/70 font-medium leading-relaxed mb-8">
                  Washington DC's new multi-billion dollar Commanders stadium project is creating thousands of construction, electrical, plumbing, and HVAC jobs starting in 2026. FTGU is training the next generation of skilled workers to meet this historic demand.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
                  {[
                    { icon: HardHat, label: "5,000+ Jobs", desc: "Construction positions" },
                    { icon: MapPin, label: "Washington DC", desc: "Right in our backyard" },
                    { icon: Briefcase, label: "Multi-Year", desc: "Long-term employment" },
                    { icon: ClipboardCheck, label: "All Trades", desc: "Every skill we teach" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/40 rounded-xl border border-white/30 backdrop-blur-sm">
                      <item.icon size={22} className="text-primary flex-shrink-0" />
                      <div>
                        <p className="font-bold text-foreground text-sm">{item.label}</p>
                        <p className="text-xs text-foreground/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/careers" className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-all duration-300 glow-primary flex items-center justify-center gap-2" style={{ borderRadius: '6px 18px 6px 18px' }}>
                    View Career Paths <ArrowRight size={18} />
                  </Link>
                  <Link href="/assessment" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-foreground text-foreground font-bold uppercase tracking-wider text-sm hover:bg-foreground hover:text-background transition-colors text-center" style={{ borderRadius: '18px 6px 18px 6px' }}>
                    Take Assessment
                  </Link>
                </div>
              </div>
              <div className="bg-foreground p-6 sm:p-10 shadow-2xl relative" style={{ borderRadius: '12px 32px 12px 32px' }}>
                <div className="space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                    <HardHat className="text-primary" size={28} />
                    <h3 className="text-white font-display font-bold text-lg sm:text-xl">Stadium Trades Needed</h3>
                  </div>
                  {[
                    { trade: "Construction & Framing", demand: "Critical", pct: 95 },
                    { trade: "Electrical Systems", demand: "Critical", pct: 90 },
                    { trade: "Plumbing & Pipefitting", demand: "High", pct: 85 },
                    { trade: "HVAC Installation", demand: "High", pct: 80 },
                    { trade: "Carpentry & Finishing", demand: "High", pct: 75 },
                    { trade: "AI Project Management", demand: "Growing", pct: 60 },
                  ].map((t, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/90 font-medium">{t.trade}</span>
                        <span className={`font-bold ${t.demand === "Critical" ? "text-red-400" : t.demand === "High" ? "text-yellow-400" : "text-green-400"}`}>{t.demand}</span>
                      </div>
                      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent via-accent to-amber-400 text-accent-foreground p-8 sm:p-16 md:p-24 shadow-2xl relative overflow-hidden glow-accent"
            style={{ borderRadius: '16px 64px 16px 64px' }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-600/20 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3"></div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-8 uppercase tracking-tight relative z-10">Ready to start <br/>building?</h2>
            <p className="text-xl sm:text-2xl text-accent-foreground/70 mb-12 max-w-2xl mx-auto font-medium relative z-10">
              Whether you're starting a new career or learning a new skill, there's a place for you here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 bg-foreground text-background font-black uppercase tracking-widest text-base sm:text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-xl hover:scale-[1.03]"
                style={{ borderRadius: '12px 32px 12px 32px' }}
              >
                Join a Program Today
              </Link>
              <Link 
                href="/assessment"
                className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-6 border-2 border-accent-foreground/80 text-accent-foreground font-black uppercase tracking-widest text-sm hover:bg-accent-foreground hover:text-accent transition-all duration-300"
                style={{ borderRadius: '32px 12px 32px 12px' }}
              >
                Find Your Trade
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
