import { Link } from "wouter";
import { Heart, Users, Wrench, GraduationCap, ArrowRight, CheckCircle, Construction, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const donationTiers = [
  {
    name: "Foundation Builder",
    amount: "$25",
    description: "Provides tools and materials for one student's first project.",
    icon: Wrench,
    color: "primary",
  },
  {
    name: "Cornerstone Supporter",
    amount: "$100",
    description: "Sponsors a student's enrollment in a full trade program.",
    icon: GraduationCap,
    color: "secondary",
    featured: true,
  },
  {
    name: "Community Architect",
    amount: "$500",
    description: "Funds AI learning tools and technology for an entire classroom.",
    icon: Users,
    color: "accent",
  },
];

const impactStats = [
  { number: "500+", label: "Students Trained" },
  { number: "6", label: "Trade Programs" },
  { number: "92%", label: "Job Placement Rate" },
  { number: "15+", label: "Community Partners" },
];

export default function Donate() {
  return (
    <div className="min-h-screen page-gradient pt-32 pb-20">
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
              Support Our Mission
            </div>
            
            <Heart className="w-20 h-20 text-primary mx-auto mb-8 drop-shadow-xl" />
            
            <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-8 uppercase tracking-tight">
              Invest in a <br/><span className="text-primary">Stronger Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
              Every dollar you give helps someone learn a trade, gain confidence, and build a career.
              Your generosity builds futures — from the ground up.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative z-10 border-y border-white/10 bg-black/5 backdrop-blur-sm mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-6xl font-display font-black text-foreground mb-2">{stat.number}</div>
                <div className="text-foreground/70 font-bold uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-6 uppercase tracking-tight">Choose Your Impact</h2>
          <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto">
            Every contribution, no matter the size, lays another brick in the foundation of someone's future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {donationTiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`relative glass-panel p-10 flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border ${
                  tier.featured
                    ? "border-primary/50 bg-primary/5"
                    : "border-white/20"
                }`}
                style={{ borderRadius: i % 2 === 0 ? '24px 64px 24px 64px' : '64px 24px 64px 24px' }}
              >
                {tier.featured && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary text-white text-xs font-black uppercase tracking-widest shadow-xl" style={{ borderRadius: '8px 16px 8px 16px' }}>
                    Most Popular
                  </div>
                )}
                
                <div className={`w-20 h-20 bg-white shadow-xl flex items-center justify-center mb-8 relative z-10 transform group-hover:scale-110 transition-transform duration-500 ${tier.featured ? "text-primary" : "text-foreground"}`} style={{ borderRadius: '8px 24px 8px 24px' }}>
                    <Icon size={40} />
                </div>
                
                <h3 className="text-2xl font-display font-black text-foreground mb-2 uppercase tracking-tight">{tier.name}</h3>
                <div className={`text-5xl font-display font-black mb-6 ${tier.featured ? "text-primary" : "text-foreground"}`}>{tier.amount}</div>
                <p className="text-foreground/80 font-medium mb-10 flex-grow text-lg leading-relaxed">{tier.description}</p>
                
                <Link
                  href="/contact?type=donate"
                  className={`mt-auto w-full py-6 font-black uppercase tracking-widest text-lg text-center transition-all duration-300 flex items-center justify-center gap-3 relative z-10 hover:scale-[1.02] shadow-xl ${
                    tier.featured
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-primary hover:text-white"
                  }`}
                  style={{ borderRadius: '12px 32px 12px 32px' }}
                >
                  Donate Now
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/80 font-medium text-lg mb-6">Want to contribute a custom amount or set up recurring donations?</p>
          <Link
            href="/contact?type=donate"
            className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-wider text-sm hover:text-primary/80 transition-colors border-b-2 border-primary pb-1"
          >
            Contact us to discuss <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-32 relative z-10 bg-foreground text-background rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-16 text-center uppercase tracking-tight text-white">Where Your Money Goes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { label: "Trade Training & Materials", pct: "45%" },
              { label: "AI Learning Technology", pct: "20%" },
              { label: "Student Scholarships", pct: "20%" },
              { label: "Community Outreach", pct: "10%" },
              { label: "Administrative Costs", pct: "5%" },
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-grow">
                  <div className="flex justify-between mb-3">
                    <span className="font-bold text-white text-lg">{item.label}</span>
                    <span className="font-black text-primary text-xl">{item.pct}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="bg-primary h-full"
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-16 text-white/50 text-sm font-bold uppercase tracking-wider">
            From The Ground Up is a registered 501(c)(3) nonprofit. All donations are tax-deductible.
          </p>
        </div>
      </section>
    </div>
  );
}