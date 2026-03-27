import { Link, useLocation } from "wouter";
import { useAuth } from "@workspace/replit-auth-web";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  MessageSquare,
  Heart,
  HandHelping,
  DollarSign,
  TrendingUp,
  BarChart3,
  LogOut,
  Shield,
  Activity,
} from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { name: "Contacts", path: "/admin/contacts", icon: MessageSquare },
  { name: "Programs", path: "/admin/programs", icon: BookOpen },
  { name: "Testimonials", path: "/admin/testimonials", icon: Users },
  { name: "Donors", path: "/admin/donors", icon: Heart },
  { name: "Volunteers", path: "/admin/volunteers", icon: HandHelping },
  { name: "Financials", path: "/admin/financials", icon: DollarSign },
  { name: "Impact Cascade", path: "/admin/impact", icon: TrendingUp },
  { name: "Skills Gap", path: "/admin/skills-gap", icon: BarChart3 },
  { name: "Activity Log", path: "/admin/activity", icon: Activity },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const [location] = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground font-sans">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="max-w-md w-full mx-4">
          <div className="bg-card border border-border rounded-2xl shadow-2xl p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">Board Portal</h1>
              <p className="text-muted-foreground mt-2 font-sans">
                From The Ground Up — Administrative Dashboard
              </p>
            </div>
            <p className="text-sm text-muted-foreground font-sans">
              Authorized board members only. Sign in to access the management dashboard.
            </p>
            <button
              onClick={() => {
                const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
                const adminPath = base ? `${base}/admin` : "/admin";
                window.location.href = `/api/login?returnTo=${encodeURIComponent(adminPath)}`;
              }}
              className="w-full py-3 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm hover:bg-primary/90 transition-all duration-300 rounded-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-muted/30">
      <aside className="w-64 bg-card border-r border-border flex flex-col fixed h-screen z-40">
        <div className="p-5 border-b border-border">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 overflow-hidden bg-white/90 shadow-lg border border-white/50 flex items-center justify-center" style={{ borderRadius: '3px 12px 3px 12px' }}>
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="FTGU"
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-foreground block leading-tight">From The Ground Up</span>
              <span className="text-xs text-primary font-bold uppercase tracking-wider">Admin Portal</span>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location === link.path || (link.path !== "/admin" && location.startsWith(link.path));
            const isExactAdmin = link.path === "/admin" && location === "/admin";
            const active = isExactAdmin || (link.path !== "/admin" && isActive);

            return (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 mb-3">
            {user?.profileImageUrl ? (
              <img src={user.profileImageUrl} alt="" className="w-8 h-8 rounded-full" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">
                  {user?.firstName?.[0] || user?.username?.[0] || "?"}
                </span>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">{user?.firstName || user?.username}</p>
              <p className="text-xs text-muted-foreground">Board Member</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors w-full px-2 py-1.5"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-64 p-8">
        {children}
      </main>
    </div>
  );
}
