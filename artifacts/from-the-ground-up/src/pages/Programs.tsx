import { useListPrograms } from "@/hooks/use-api-hooks";
import { Wrench, Zap, Droplet, Hammer, Cpu, HardHat, Clock, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const iconMap: Record<string, any> = {
  Hammer: Hammer,
  Zap: Zap,
  Droplet: Droplet,
  Wrench: Wrench,
  Cpu: Cpu,
  HardHat: HardHat
};

export default function Programs() {
  const { data: programs, isLoading, isError } = useListPrograms();

  return (
    <div className="pt-32 pb-20 min-h-screen page-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
            Our Curriculum
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-8 uppercase tracking-tight leading-none">
            Master The Trades.<br/> <span className="text-primary">Leverage AI.</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed">
            Comprehensive, hands-on training tailored for all skill levels. We integrate modern AI tools to help you learn faster, plan better, and build smarter.
          </p>
        </div>

        {/* Why AI explainer */}
        <div className="mb-32 glass-panel p-6 sm:p-10 md:p-16 relative overflow-hidden" style={{ borderRadius: '16px 40px 16px 40px' }}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Cpu className="w-12 h-12 text-primary" />
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight">The AI Advantage</h2>
              </div>
              <p className="text-xl text-foreground/80 font-medium leading-relaxed mb-6">
                The trades aren't stuck in the past. We teach you how to use Artificial Intelligence to interpret blueprints, optimize material lists, troubleshoot complex systems, and run a modern contracting business.
              </p>
              <ul className="space-y-4">
                {["Faster blueprint analysis", "Automated material takeoff", "Predictive safety analysis"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold">
                    <CheckCircle2 className="text-primary w-6 h-6" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-foreground rounded-3xl p-8 shadow-2xl relative">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-green-400 font-mono text-sm mt-8 overflow-x-auto">
                <code>{`> ANALYZING BLUEPRINT...
> IDENTIFYING LOAD BEARING WALLS...
> 3 WALLS DETECTED.
> GENERATING FRAMING MATERIAL LIST...
> CALCULATING OPTIMAL CUT PATTERNS...
> SAVING 14% ON LUMBER WASTE.
> READY TO BUILD.`}</code>
              </pre>
            </div>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-[600px] glass-panel rounded-[3rem] animate-pulse"></div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-32 glass-panel rounded-[3rem]">
            <Wrench className="w-20 h-20 text-destructive mb-6 mx-auto" />
            <h3 className="text-3xl font-black uppercase mb-4">System Offline</h3>
            <p className="text-xl text-foreground/70">Failed to load program schematics. Please refresh.</p>
          </div>
        )}

        {programs && programs.length === 0 && (
          <div className="text-center py-32 glass-panel rounded-[3rem]">
            <BookOpen className="w-20 h-20 text-foreground/50 mb-6 mx-auto" />
            <h3 className="text-3xl font-black uppercase mb-4">Curriculum Updating</h3>
            <p className="text-xl text-foreground/70">Check back soon for our new schedule.</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {programs?.map((program, index) => {
            const IconComponent = iconMap[program.icon] || Wrench;
            
            return (
              <motion.div 
                key={program.id}
                id={program.id.toString()}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-panel p-6 sm:p-10 md:p-14 flex flex-col h-full relative group border border-white/20 transition-all duration-500 hover:shadow-2xl hover:border-primary/50"
                style={{ borderRadius: index % 2 === 0 ? '16px 64px 16px 64px' : '64px 16px 64px 16px' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-10 relative z-10">
                  <div className="w-20 h-20 bg-white shadow-xl flex items-center justify-center text-primary transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500" style={{ borderRadius: '8px 24px 8px 24px' }}>
                    <IconComponent size={40} />
                  </div>
                  <span className="inline-flex items-center px-4 py-2 bg-foreground text-background font-black uppercase tracking-widest text-xs rounded-full shadow-lg">
                    {program.skillLevel}
                  </span>
                </div>
                
                <h2 className="text-4xl font-display font-black text-foreground mb-6 uppercase tracking-tight relative z-10">{program.title}</h2>
                <p className="text-foreground/80 text-xl font-medium mb-10 flex-grow relative z-10 leading-relaxed">
                  {program.longDescription || program.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 relative z-10">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <span className="text-xs font-black uppercase tracking-widest text-foreground/60 flex items-center gap-2 mb-2">
                      <Clock size={14} /> Duration
                    </span>
                    <span className="text-xl font-bold text-foreground">{program.duration}</span>
                  </div>
                  {program.aiFeatures && (
                    <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                      <span className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2 mb-2">
                        <Cpu size={14} /> AI Integration
                      </span>
                      <span className="text-lg font-bold text-foreground leading-tight">{program.aiFeatures}</span>
                    </div>
                  )}
                </div>

                {program.outcomes && program.outcomes.length > 0 && (
                  <div className="mb-12 relative z-10">
                    <h4 className="font-black uppercase tracking-widest text-sm text-foreground mb-6">What you'll master:</h4>
                    <ul className="space-y-4">
                      {program.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-4 text-lg font-medium text-foreground/80">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link 
                  href={`/contact?program=${program.id}`}
                  className="mt-auto w-full py-6 bg-foreground text-background font-black uppercase tracking-widest text-lg text-center hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-3 relative z-10 group/btn"
                  style={{ borderRadius: '12px 32px 12px 32px' }}
                >
                  Enroll Now <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </div>
  );
}