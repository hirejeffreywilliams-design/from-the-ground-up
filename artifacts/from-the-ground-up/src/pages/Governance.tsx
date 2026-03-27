import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, Target, Shield, BookOpen, ChevronRight } from "lucide-react";

const boardMembers = [
  {
    name: "Jeffrey Williams",
    role: "Founder & Chairperson",
    bio: "Inspired by his father's legacy, Jeffrey founded From The Ground Up to empower communities through trade education and AI-driven learning.",
  },
  {
    name: "Dr. Angela Morrison",
    role: "Vice Chairperson",
    bio: "An education policy expert with 20+ years in workforce development and vocational training programs across the country.",
  },
  {
    name: "Marcus Rivera",
    role: "Treasurer",
    bio: "CPA and financial advisor specializing in nonprofit fiscal management. Ensures every dollar serves our mission effectively.",
  },
  {
    name: "Sarah Okafor",
    role: "Secretary",
    bio: "Community organizer and communications professional with deep experience in grassroots nonprofit operations.",
  },
  {
    name: "James Park",
    role: "Director, Technology",
    bio: "AI and EdTech entrepreneur who brings cutting-edge technology expertise to modernize trade education.",
  },
  {
    name: "Linda Vasquez",
    role: "Director, Programs",
    bio: "Master electrician and certified instructor with 25 years of field experience. Oversees curriculum development and program quality.",
  },
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every decision we make is guided by our commitment to empowering people through trade education.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "We operate with full transparency in our finances, governance, and program outcomes.",
  },
  {
    icon: Users,
    title: "Inclusivity",
    description: "We welcome people of all ages, backgrounds, and experience levels. Building has no barriers.",
  },
  {
    icon: BookOpen,
    title: "Innovation",
    description: "We blend time-tested trade skills with modern AI technology to prepare students for tomorrow's workforce.",
  },
];

export default function Governance() {
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
              Governance
            </div>
            
            <Users className="w-20 h-20 text-primary mx-auto mb-8 drop-shadow-xl" />
            
            <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-8 uppercase tracking-tight">
              Our <span className="text-primary">Leadership</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
              From The Ground Up is guided by a dedicated board of directors who bring expertise in education,
              trades, technology, finance, and community development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative z-10 border-y border-white/10 bg-black/5 backdrop-blur-sm mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight">Board of <br/>Directors</h2>
            <div className="h-2 w-24 bg-primary mb-4 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {boardMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-panel p-10 border border-white/20 hover:shadow-2xl hover:border-primary/40 transition-all duration-500 group"
                style={{ borderRadius: i % 2 === 0 ? '16px 48px 16px 48px' : '48px 16px 48px 16px' }}
              >
                <div className="w-20 h-20 bg-white shadow-xl flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:bg-primary transition-all duration-500" style={{ borderRadius: '8px 24px 8px 24px' }}>
                  <span className="text-3xl font-display font-black text-foreground group-hover:text-white transition-colors">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-black text-foreground mb-2 uppercase tracking-tight">{member.name}</h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-6 pb-6 border-b border-foreground/10">{member.role}</p>
                <p className="text-foreground/70 font-medium text-lg leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black text-foreground mb-6 uppercase tracking-tight">Our Core Values</h2>
          <p className="text-xl text-foreground/80 font-medium max-w-2xl mx-auto">
            These values are the bedrock of everything we do at From The Ground Up.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-8 p-10 glass-panel border border-white/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-500"
                style={{ borderRadius: '24px' }}
              >
                <div className="w-20 h-20 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0" style={{ borderRadius: '8px 24px 8px 24px' }}>
                  <Icon size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black text-foreground mb-4 uppercase tracking-tight">{value.title}</h3>
                  <p className="text-foreground/70 font-medium text-lg leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-24 relative z-10 bg-foreground text-background shadow-2xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden" style={{ borderRadius: '32px 100px 32px 100px' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 uppercase tracking-tight">Governance Documents</h2>
          <p className="text-white/70 mb-12 text-xl font-medium max-w-2xl mx-auto">
            We believe in full transparency. Review our organizational documents to see how we operate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/bylaws"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm hover:bg-primary/90 hover:scale-105 transition-all shadow-xl"
              style={{ borderRadius: '8px 24px 8px 24px' }}
            >
              Read Our Bylaws <ChevronRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all"
              style={{ borderRadius: '24px 8px 24px 8px' }}
            >
              Request Annual Report
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}