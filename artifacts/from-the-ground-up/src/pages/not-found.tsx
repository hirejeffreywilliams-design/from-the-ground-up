import { Link } from "wouter";
import { Construction } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center page-gradient px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="text-center max-w-2xl relative z-10 glass-panel p-8 sm:p-16 md:p-24 rounded-2xl sm:rounded-[3rem]">
        <div className="w-32 h-32 bg-primary text-white flex items-center justify-center mx-auto mb-10 transform -rotate-12 shadow-2xl" style={{ borderRadius: '8px 24px 8px 24px' }}>
          <Construction size={64} className="animate-pulse" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-black text-foreground mb-6 uppercase tracking-tight">404</h1>
        <h2 className="text-3xl font-display font-black text-foreground mb-8 uppercase tracking-wide">Under Construction</h2>
        
        <p className="text-xl text-foreground/70 font-medium mb-12 leading-relaxed">
          The page you're looking for hasn't been built yet, or the blueprint has changed. Let's get you back to solid ground.
        </p>
        
        <Link 
          href="/"
          className="inline-flex px-12 py-6 bg-foreground text-background font-black uppercase tracking-widest text-lg hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
          style={{ borderRadius: '12px 32px 12px 32px' }}
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}