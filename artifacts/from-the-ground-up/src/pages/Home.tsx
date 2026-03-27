import { Link } from "wouter";
import { ArrowRight, Wrench, Zap, Droplet, Hammer, Cpu, Quote, Users, GraduationCap, Briefcase, Handshake } from "lucide-react";
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
    <div className="flex flex-col min-h-screen page-gradient">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 mix-blend-overlay opacity-40">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Warm abstract background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Welcome to From The Ground Up
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-black text-foreground max-w-5xl mx-auto leading-[1.1] mb-8 uppercase tracking-tight">
              Build Your Future, <br className="hidden md:block" />
              <span className="text-primary relative inline-block">
                One Skill at a Time.
                <motion.svg 
                  className="absolute -bottom-4 left-0 w-full h-6 text-accent/60" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                >
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </motion.svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 text-balance font-medium leading-relaxed">
              Empowering individuals of all ages with hands-on trade skills in construction, electrical work, and plumbing — enhanced by AI-driven learning tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/programs"
                className="w-full sm:w-auto px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(220,20,60,0.5)] flex items-center justify-center gap-3 border border-primary/50"
                style={{ borderRadius: '8px 24px 8px 24px' }}
              >
                Explore Programs <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about"
                className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md text-foreground font-black uppercase tracking-widest text-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                style={{ borderRadius: '24px 8px 24px 8px' }}
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 relative z-10 border-y border-white/10 bg-black/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: Users, stat: "500+", label: "Students Trained" },
              { icon: GraduationCap, stat: "6", label: "Core Programs" },
              { icon: Briefcase, stat: "92%", label: "Job Placement" },
              { icon: Handshake, stat: "15+", label: "Industry Partners" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 text-primary rounded-2xl flex items-center justify-center transform rotate-3">
                  <item.icon size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-black text-foreground mb-2">{item.stat}</h3>
                <p className="text-foreground/70 font-bold uppercase tracking-wider text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-12 md:p-20 rounded-[3rem] relative"
          >
            <Quote className="absolute top-10 left-10 w-20 h-20 text-primary/10 rotate-180" />
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight relative z-10">
              "A world where every person has access to the knowledge and tools needed to build, create, and sustain — <strong className="text-primary font-black uppercase tracking-tight block mt-4">from the ground up.</strong>"
            </h2>
            <div className="mt-12 inline-flex items-center gap-4">
              <div className="h-px w-12 bg-primary"></div>
              <p className="text-foreground font-black tracking-widest uppercase text-sm">Our Vision</p>
              <div className="h-px w-12 bg-primary"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6 uppercase tracking-tight">Hands-On <br/><span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Learning</span></h2>
              <p className="text-xl text-foreground/80 font-medium leading-relaxed">
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
                <div key={i} className="h-[400px] glass-panel rounded-[2rem] animate-pulse"></div>
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
                    className="group glass-panel p-10 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-white/20"
                    style={{ borderRadius: index % 2 === 0 ? '8px 48px 8px 48px' : '48px 8px 48px 8px' }}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500 -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="w-20 h-20 bg-white shadow-xl flex items-center justify-center mb-8 relative z-10 text-primary transform group-hover:scale-110 transition-transform duration-500" style={{ borderRadius: '4px 16px 4px 16px' }}>
                      <IconComponent size={40} />
                    </div>
                    
                    <h3 className="text-3xl font-display font-black text-foreground mb-4 relative z-10">{program.title}</h3>
                    <p className="text-foreground/70 mb-10 leading-relaxed font-medium relative z-10 text-lg">
                      {program.description}
                    </p>
                    
                    <Link 
                      href={`/programs#${program.id}`}
                      className="inline-flex items-center font-black uppercase tracking-wider text-sm text-foreground group-hover:text-primary transition-colors relative z-10"
                    >
                      Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                )
              })
            )}
          </div>
        </div>
      </section>

      {/* Dramatic Testimonial */}
      <section className="py-32 relative z-10 bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -top-64 -right-64 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 uppercase tracking-tight">Built By <br/><span className="text-primary">Our Students</span></h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed mb-10">
                Don't just take our word for it. Hear from the people who have transformed their lives through our programs.
              </p>
              <Link href="/programs" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-black uppercase tracking-wider text-sm hover:bg-white hover:text-foreground transition-colors">
                Start Your Journey
              </Link>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 md:p-16 backdrop-blur-md rounded-[2rem]">
              <Quote className="w-16 h-16 text-primary mb-8" />
              <p className="text-2xl md:text-3xl text-white font-display font-medium leading-tight mb-8">
                "The combination of hands-on plumbing skills with AI layout tools made me hirable before I even finished the program. It's not just a class, it's a career launchpad."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">MJ</div>
                <div>
                  <h4 className="text-white font-bold text-lg">Marcus Johnson</h4>
                  <p className="text-primary uppercase tracking-wider text-sm font-bold">Plumbing Graduate, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-accent text-accent-foreground p-16 md:p-24 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-5xl md:text-7xl font-display font-black mb-8 uppercase tracking-tight relative z-10">Ready to start <br/>building?</h2>
            <p className="text-2xl text-accent-foreground/80 mb-12 max-w-2xl mx-auto font-medium relative z-10">
              Whether you're starting a new career or learning a new skill, there's a place for you here.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-6 bg-foreground text-background font-black uppercase tracking-widest text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-xl relative z-10 hover:scale-105"
              style={{ borderRadius: '12px 32px 12px 32px' }}
            >
              Join a Program Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}