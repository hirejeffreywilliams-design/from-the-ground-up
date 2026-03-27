import { Link } from "wouter";
import { ArrowRight, Wrench, Zap, Droplet, Hammer, Cpu, Quote } from "lucide-react";
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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Warm abstract background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-6 border border-secondary/20">
              Welcome to From The Ground Up
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground max-w-4xl mx-auto leading-tight mb-6">
              Build Your Future, <br className="hidden md:block" />
              <span className="text-primary relative whitespace-nowrap">
                One Skill at a Time.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                </svg>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
              Empowering individuals of all ages with hands-on trade skills in construction, electrical work, and plumbing — enhanced by AI-driven learning tools.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/programs"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Programs <ArrowRight size={20} />
              </Link>
              <Link 
                href="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-foreground font-bold text-lg shadow-sm border border-border hover:bg-muted hover:-translate-y-1 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-card border-y border-border/50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 text-accent/50 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-relaxed">
            "A world where every person has access to the knowledge and tools needed to build, create, and sustain — <strong className="text-primary">from the ground up.</strong>"
          </h2>
          <p className="mt-6 text-muted-foreground font-medium tracking-widest uppercase text-sm">Our Vision</p>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Hands-On Learning</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Our programs combine traditional craftsmanship with modern AI technologies to give you a competitive edge.
              </p>
            </div>
            <Link 
              href="/programs"
              className="group flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              View All Programs 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programsLoading ? (
              [1,2,3].map(i => (
                <div key={i} className="h-80 rounded-3xl bg-muted/50 animate-pulse border border-border/50"></div>
              ))
            ) : (
              displayPrograms.map((program, index) => {
                const IconComponent = iconMap[program.icon] || Wrench;
                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group bg-card rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground mb-3">{program.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {program.description}
                    </p>
                    <Link 
                      href={`/programs#${program.id}`}
                      className="inline-flex items-center font-bold text-foreground group-hover:text-primary transition-colors"
                    >
                      Learn more <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </motion.div>
                )
              })
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Ready to start building?</h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Whether you're starting a new career or learning a new skill, there's a place for you here.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-xl shadow-accent/20"
          >
            Join a Program Today
          </Link>
        </div>
      </section>
    </div>
  );
}
