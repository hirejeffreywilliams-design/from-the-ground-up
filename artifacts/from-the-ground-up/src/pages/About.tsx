import { motion } from "framer-motion";
import { Link } from "wouter";
import { Target, Compass, ArrowRight, BookOpen, Users } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20 min-h-screen page-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-8 leading-[1.1] uppercase tracking-tight">
              A Legacy Built <br/><span className="text-primary">From The Ground Up.</span>
            </h1>
            <div className="space-y-6 text-xl text-foreground/80 font-medium leading-relaxed">
              <p>
                From The Ground Up was founded by Jeffrey Williams in honor of his father, Jeffrey Williams Sr., a man whose hands built more than just structures—they built community, character, and hope.
              </p>
              <p>
                Growing up, Jeffrey Sr. would always say that everything meaningful starts <strong className="text-foreground">"from the ground up."</strong> He loved the trades and believed deeply in the empowerment that comes from knowing how to build and fix the world around you.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl border border-white/20 relative group" style={{ borderRadius: '16px 48px 16px 48px' }}>
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={`${import.meta.env.BASE_URL}images/about-founder.png`} 
                alt="Father and son building together" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-panel p-8 md:p-10 shadow-2xl max-w-sm hidden md:block" style={{ borderRadius: '40px 8px 40px 8px' }}>
              <p className="font-display font-bold text-2xl italic text-foreground leading-tight">
                "Knowledge is the one tool you never have to leave in the truck."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px w-8 bg-primary"></div>
                <p className="text-sm font-black uppercase tracking-widest text-primary">Jeffrey Williams Sr.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-6 sm:p-12 md:p-16 relative overflow-hidden"
            style={{ borderRadius: '8px 32px 8px 32px' }}
          >
            <Target className="w-16 h-16 text-primary mb-8" />
            <h2 className="text-4xl font-display font-black uppercase tracking-tight mb-6">Our Mission</h2>
            <p className="text-xl text-foreground/80 font-medium leading-relaxed">
              To empower individuals of all ages with hands-on trade skills in construction, electrical work, plumbing, and essential trades, modernized through cutting-edge AI technologies to build the most capable workforce of tomorrow.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-foreground text-background p-6 sm:p-12 md:p-16 relative overflow-hidden"
            style={{ borderRadius: '32px 8px 32px 8px' }}
          >
            <Compass className="w-16 h-16 text-accent mb-8" />
            <h2 className="text-4xl font-display font-black uppercase tracking-tight mb-6 text-white">Our Vision</h2>
            <p className="text-xl text-white/80 font-medium leading-relaxed">
              A world where every person has access to the knowledge and tools needed to build, create, and sustain themselves and their communities from the ground up.
            </p>
          </motion.div>
        </div>

        {/* The Logo Story Section */}
        <section className="py-24 border-y border-white/10 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white shadow-2xl flex items-center justify-center p-8 sm:p-10 relative transform hover:scale-105 transition-transform duration-500" style={{ borderRadius: '16px 48px 16px 48px' }}>
                <div className="absolute inset-0 bg-primary/5 rounded-[inherit] animate-pulse"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="Concrete J with a crayon rose" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-xl"
                />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-primary"></div>
                <span className="font-bold uppercase tracking-widest text-sm text-primary">Symbolism</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-8 uppercase tracking-tight">The Concrete <br/>& The Rose</h2>
              <div className="space-y-6 text-xl text-foreground/80 font-medium leading-relaxed mb-12">
                <p>
                  Our logo isn't just a symbol; it's our philosophy. It features a solid, unyielding concrete letter <strong className="text-foreground">'J'</strong>—representing Jeffrey Sr.'s unbreakable foundation, resilience, and the tough materials of the trades we teach.
                </p>
                <p>
                  Emerging from that concrete is a whimsical, hand-drawn <strong className="text-foreground">rose</strong>, illustrated as if by a young child. This represents innocence, new life, and the beautiful, organic growth that can spring from even the hardest surfaces when nurtured. 
                </p>
                <p className="text-primary font-black uppercase tracking-wider text-lg pt-4">
                  With a strong foundation, anyone at any age can grow into something beautiful.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Board Preview */}
        <section className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-6 uppercase tracking-tight">Leadership</h2>
          <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto mb-12">
            Guided by industry experts, educators, and community leaders dedicated to our mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/governance"
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-300"
              style={{ borderRadius: '8px 24px 8px 24px' }}
            >
              Meet The Board <Users size={18} />
            </Link>
            <Link 
              href="/bylaws"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md text-foreground border border-white/20 font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all duration-300"
              style={{ borderRadius: '24px 8px 24px 8px' }}
            >
              View Bylaws <BookOpen size={18} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}