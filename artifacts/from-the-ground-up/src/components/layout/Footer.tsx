import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t-4 border-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 inline-block mb-6">
              <div className="w-10 h-10 bg-white rounded-xl overflow-hidden p-1">
                <img 
                  src={`${import.meta.env.BASE_URL}images/logo.png`} 
                  alt="From The Ground Up Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                From The Ground Up
              </span>
            </Link>
            <p className="text-muted-foreground/80 max-w-md text-balance leading-relaxed">
              Empowering individuals of all ages with hands-on trade skills in construction, electrical work, plumbing, and more — enhanced by AI-driven learning — to build stronger futures, one skill at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground/80">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Our Programs</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact & Enroll</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-muted-foreground/80">
              <li>123 Builders Way</li>
              <li>Foundation City, FC 12345</li>
              <li>hello@fromthegroundup.org</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground/60">
          <p>© {new Date().getFullYear()} From The Ground Up. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Built with purpose in honor of Jeffrey Williams Sr.
          </p>
        </div>
      </div>
    </footer>
  );
}
