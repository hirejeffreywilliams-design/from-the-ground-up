import { Link } from "wouter";
import { Construction } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 animate-bounce">
          <Construction size={48} />
        </div>
        <h1 className="text-5xl font-display font-bold text-foreground mb-4">Under Construction</h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you're looking for hasn't been built yet, or the foundation has moved.
        </p>
        <Link 
          href="/"
          className="inline-flex px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
