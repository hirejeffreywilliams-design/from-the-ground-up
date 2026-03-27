import { motion } from "framer-motion";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              A Legacy Built <br/>From The Ground Up.
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                From The Ground Up was founded by Jeffrey Williams in honor of his father, Jeffrey Williams Sr., a man whose hands built more than just structures—they built community, character, and hope.
              </p>
              <p>
                Growing up, Jeffrey Sr. would always say that everything meaningful starts <strong>"from the ground up."</strong> He loved the trades and believed deeply in the empowerment that comes from knowing how to build and fix the world around you.
              </p>
              <p>
                Today, this nonprofit exists to pass that torch. We teach people of all ages construction, electrical work, plumbing, and essential trade skills. But we don't stop at tradition—we incorporate cutting-edge Artificial Intelligence to modernize learning, helping our students become the most capable tradespeople of tomorrow.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-founder.png`} 
                alt="Father and son building together" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-card p-8 rounded-3xl shadow-xl border border-border/50 max-w-xs hidden md:block">
              <p className="font-display font-bold text-xl italic text-foreground">
                "Knowledge is the one tool you never have to leave in the truck."
              </p>
              <p className="mt-2 text-sm text-primary font-semibold">— Jeffrey Williams Sr.</p>
            </div>
          </motion.div>
        </div>

        {/* The Logo Story Section */}
        <section className="py-20 border-t border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center p-8 shadow-inner border-8 border-background relative">
                <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse"></div>
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="Concrete J with a crayon rose" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-sm"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">The Concrete & The Rose</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Our logo isn't just a symbol; it's our philosophy. It features a solid, unyielding concrete letter <strong>'J'</strong>—representing Jeffrey Sr.'s unbreakable foundation, resilience, and the tough materials of the trades we teach.
                </p>
                <p>
                  Emerging from that concrete is a whimsical, hand-drawn <strong>rose</strong>, illustrated as if by a three-year-old child using a crayon. This represents innocence, new life, and the beautiful, organic growth that can spring from even the hardest surfaces when nurtured. 
                </p>
                <p className="text-foreground font-semibold">
                  We believe that with a strong foundation, anyone at any age can grow into something beautiful.
                </p>
              </div>
              <div className="mt-10">
                <Link href="/contact" className="inline-block px-8 py-3 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 transition-colors">
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
