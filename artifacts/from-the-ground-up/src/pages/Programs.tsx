import { useListPrograms } from "@/hooks/use-api-hooks";
import { Wrench, Zap, Droplet, Hammer, Cpu, HardHat, Clock, ArrowRight, BookOpen } from "lucide-react";
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
    <div className="pt-28 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">Our Trade Programs</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Comprehensive, hands-on training tailored for all skill levels. We integrate AI tools to help you learn faster, plan better, and build smarter.
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-96 rounded-3xl bg-muted/50 animate-pulse border border-border/50"></div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-20 bg-card rounded-3xl border border-destructive/20">
            <Wrench className="w-16 h-16 text-destructive/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Failed to load programs</h3>
            <p className="text-muted-foreground">Please try refreshing the page or contact us directly.</p>
          </div>
        )}

        {programs && programs.length === 0 && (
          <div className="text-center py-20 bg-card rounded-3xl border border-border">
            <BookOpen className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Check back soon!</h3>
            <p className="text-muted-foreground">We are currently updating our program schedule.</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs?.map((program, index) => {
            const IconComponent = iconMap[program.icon] || Wrench;
            
            return (
              <motion.div 
                key={program.id}
                id={program.id.toString()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card rounded-3xl p-8 md:p-10 border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <IconComponent size={32} />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-semibold">
                    {program.skillLevel}
                  </span>
                </div>
                
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">{program.title}</h2>
                <p className="text-muted-foreground text-lg mb-8 flex-grow">
                  {program.longDescription || program.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 p-6 rounded-2xl bg-background border border-border/50">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                      <Clock size={16} /> Duration
                    </span>
                    <span className="font-medium text-foreground">{program.duration}</span>
                  </div>
                  {program.aiFeatures && (
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                        <Cpu size={16} /> AI Integration
                      </span>
                      <span className="font-medium text-foreground">{program.aiFeatures}</span>
                    </div>
                  )}
                </div>

                {program.outcomes && program.outcomes.length > 0 && (
                  <div className="mb-8">
                    <h4 className="font-bold text-foreground mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Link 
                  href={`/contact?program=${program.id}`}
                  className="mt-auto w-full py-4 rounded-xl bg-secondary text-secondary-foreground font-bold text-center hover:bg-secondary/90 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Enroll in {program.title}
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </div>
  );
}
