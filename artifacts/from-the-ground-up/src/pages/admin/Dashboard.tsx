import { useEffect, useState } from "react";
import {
  Users,
  BookOpen,
  Heart,
  HandHelping,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Award,
} from "lucide-react";

interface DashboardData {
  stats: {
    programs: number;
    contacts: number;
    testimonials: number;
    donors: number;
    volunteers: number;
    totalDonations: number;
    studentsTracked: number;
    volunteerHours: number;
  };
  recentContacts: any[];
  recentActivity: any[];
  recentDonations: any[];
}

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard", { credentials: "include" })
      .then((r) => r.json())
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) return <p className="text-destructive">Failed to load dashboard</p>;

  const statCards = [
    { label: "Programs", value: data.stats.programs, icon: BookOpen, color: "text-blue-600 bg-blue-50" },
    { label: "Contact Submissions", value: data.stats.contacts, icon: MessageSquare, color: "text-purple-600 bg-purple-50" },
    { label: "Donors", value: data.stats.donors, icon: Heart, color: "text-red-600 bg-red-50" },
    { label: "Total Donated", value: `$${data.stats.totalDonations.toLocaleString()}`, icon: DollarSign, color: "text-green-600 bg-green-50" },
    { label: "Volunteers", value: data.stats.volunteers, icon: HandHelping, color: "text-amber-600 bg-amber-50" },
    { label: "Volunteer Hours", value: data.stats.volunteerHours.toLocaleString(), icon: TrendingUp, color: "text-teal-600 bg-teal-50" },
    { label: "Students Tracked", value: data.stats.studentsTracked, icon: Users, color: "text-indigo-600 bg-indigo-50" },
    { label: "Testimonials", value: data.stats.testimonials, icon: Award, color: "text-pink-600 bg-pink-50" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1 font-sans">Overview of From The Ground Up operations</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-sans">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <Icon size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold mb-4">Recent Contact Submissions</h2>
          {data.recentContacts.length === 0 ? (
            <p className="text-muted-foreground text-sm">No contact submissions yet</p>
          ) : (
            <div className="space-y-3">
              {data.recentContacts.map((c: any) => (
                <div key={c.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div>
                    <p className="font-semibold text-sm">{c.fullName}</p>
                    <p className="text-xs text-muted-foreground">{c.email}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      c.type === "enrollment" ? "bg-primary/10 text-primary" : "bg-blue-50 text-blue-600"
                    }`}>
                      {c.type}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "N/A"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold mb-4">Recent Donations</h2>
          {data.recentDonations.length === 0 ? (
            <p className="text-muted-foreground text-sm">No donations recorded yet</p>
          ) : (
            <div className="space-y-3">
              {data.recentDonations.map((d: any) => (
                <div key={d.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div>
                    <p className="font-semibold text-sm">${d.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">{d.purpose || "General Fund"}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-600 font-semibold">
                      {d.type}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {d.date ? new Date(d.date).toLocaleDateString() : "N/A"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <h2 className="font-display text-xl font-bold mb-4">Recent Activity</h2>
        {data.recentActivity.length === 0 ? (
          <p className="text-muted-foreground text-sm">No activity logged yet</p>
        ) : (
          <div className="space-y-2">
            {data.recentActivity.map((a: any) => (
              <div key={a.id} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold">{a.userName || "System"}</span>{" "}
                    <span className="text-muted-foreground">{a.action}</span>{" "}
                    {a.entityType && <span className="text-muted-foreground">on {a.entityType}</span>}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  {a.timestamp ? new Date(a.timestamp).toLocaleString() : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
