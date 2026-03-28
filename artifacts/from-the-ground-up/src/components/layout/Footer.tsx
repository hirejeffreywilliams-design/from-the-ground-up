import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white pt-24 pb-12 mt-auto border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-3xl font-display font-bold mb-4 text-white uppercase tracking-tight">Join Our Newsletter</h3>
            <p className="text-white/70 text-lg font-medium leading-relaxed">Stay updated with our latest programs, student success stories, and upcoming events.</p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-none bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-primary w-full sm:min-w-[300px]"
            />
            <button className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-4 inline-block mb-8 group">
              <div className="w-12 h-12 bg-white shadow-xl flex items-center justify-center p-1.5" style={{ borderRadius: '4px 16px 4px 16px' }}>
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="From The Ground Up Logo" 
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-widest text-white uppercase leading-none">
                  From The
                </span>
                <span className="font-sans font-bold text-sm tracking-[0.2em] text-white/70 uppercase leading-none mt-1">
                  Ground Up
                </span>
              </div>
            </Link>
            <p className="text-white/70 max-w-md text-lg leading-relaxed mb-8 font-medium">
              Empowering individuals of all ages with hands-on trade skills in construction, electrical work, plumbing, and more — enhanced by AI-driven learning — to build stronger futures.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/70"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/70"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/70"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-white/70"><Linkedin size={18} /></a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-8 text-white">Programs</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link href="/programs" className="hover:text-primary transition-colors">All Programs</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Career Pathways</Link></li>
              <li><Link href="/earn" className="hover:text-primary transition-colors">Student Earning Hub</Link></li>
              <li><Link href="/assessment" className="hover:text-primary transition-colors">Skills Assessment</Link></li>
              <li><Link href="/resources" className="hover:text-primary transition-colors">Resource Library</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-8 text-white">Organization</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/governance" className="hover:text-primary transition-colors">Governance</Link></li>
              <li><Link href="/bylaws" className="hover:text-primary transition-colors">Bylaws</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/donate" className="hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/roadmap" className="hover:text-primary transition-colors">100-Year Roadmap</Link></li>
              <li><Link href="/startup-guide" className="hover:text-primary transition-colors">DC Startup Guide</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="font-sans font-bold uppercase tracking-widest text-sm mb-8 text-white">Contact</h4>
            <ul className="space-y-4 text-white/70 font-medium">
              <li className="flex flex-col">
                <span className="text-white font-semibold uppercase tracking-wider text-xs mb-1">Workshop</span>
                <span>123 Builders Way</span>
                <span>Foundation City, FC 12345</span>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-white font-semibold uppercase tracking-wider text-xs mb-1">Get in touch</span>
                <a href="mailto:hello@fromthegroundup.org" className="hover:text-primary">hello@fromthegroundup.org</a>
                <a href="tel:5551234567" className="hover:text-primary">(555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/50 font-medium uppercase tracking-wider">
          <p>© {new Date().getFullYear()} From The Ground Up. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-primary">
            Built with purpose in honor of Jeffrey Williams Sr.
          </p>
        </div>
      </div>
    </footer>
  );
}