import { useEffect, useState } from "react";
import { Plus, Trash2, HandHelping, Save, X, Pencil } from "lucide-react";

interface Volunteer {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  skills: string | null;
  availability: string | null;
  hoursLogged: number;
  status: string;
  startDate: string | null;
  notes: string | null;
}

export default function AdminVolunteers() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", skills: "", availability: "", status: "active", notes: "" });
  const [editingHours, setEditingHours] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/admin/volunteers", { credentials: "include" })
      .then((r) => r.json())
      .then(setVolunteers)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addVolunteer = async () => {
    const res = await fetch("/api/admin/volunteers", {
      method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
      body: JSON.stringify(form),
    });
    const v = await res.json();
    setVolunteers((prev) => [v, ...prev]);
    setForm({ name: "", email: "", phone: "", skills: "", availability: "", status: "active", notes: "" });
    setShowForm(false);
  };

  const updateHours = async (id: number, hours: number) => {
    await fetch(`/api/admin/volunteers/${id}`, {
      method: "PUT", headers: { "Content-Type": "application/json" }, credentials: "include",
      body: JSON.stringify({ hoursLogged: hours }),
    });
    setVolunteers((prev) => prev.map((v) => v.id === id ? { ...v, hoursLogged: hours } : v));
    setEditingHours(null);
  };

  const deleteVolunteer = async (id: number) => {
    if (!confirm("Remove this volunteer?")) return;
    await fetch(`/api/admin/volunteers/${id}`, { method: "DELETE", credentials: "include" });
    setVolunteers((prev) => prev.filter((v) => v.id !== id));
  };

  const statusColors: Record<string, string> = {
    active: "bg-green-50 text-green-600",
    inactive: "bg-gray-100 text-gray-500",
    onboarding: "bg-blue-50 text-blue-600",
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Volunteer Management</h1>
          <p className="text-muted-foreground mt-1 font-sans">
            {volunteers.length} volunteers | {volunteers.reduce((s, v) => s + v.hoursLogged, 0).toLocaleString()} total hours
          </p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90">
          <Plus size={16} /> Add Volunteer
        </button>
      </div>

      {showForm && (
        <div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-display text-xl font-bold">New Volunteer</h2>
            <button onClick={() => setShowForm(false)} className="p-2 hover:bg-muted rounded-lg"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Skills (e.g., Teaching, Carpentry, Marketing)" value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input placeholder="Availability (e.g., Weekends, Evenings)" value={form.availability} onChange={(e) => setForm({ ...form, availability: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-border rounded-lg text-sm font-semibold hover:bg-muted">Cancel</button>
            <button onClick={addVolunteer} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90"><Save size={16} /> Save</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {volunteers.map((v) => (
          <div key={v.id} className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                  <HandHelping size={20} className="text-amber-600" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{v.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${statusColors[v.status] || "bg-muted text-muted-foreground"}`}>
                      {v.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{v.email}</p>
                  {v.skills && <p className="text-xs text-muted-foreground mt-1">Skills: {v.skills}</p>}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  {editingHours === v.id ? (
                    <input
                      type="number"
                      defaultValue={v.hoursLogged}
                      className="w-20 px-2 py-1 rounded border border-border text-sm text-right"
                      autoFocus
                      onBlur={(e) => updateHours(v.id, parseFloat(e.target.value) || 0)}
                      onKeyDown={(e) => { if (e.key === "Enter") updateHours(v.id, parseFloat((e.target as HTMLInputElement).value) || 0); }}
                    />
                  ) : (
                    <p className="font-bold text-amber-600 cursor-pointer" onClick={() => setEditingHours(v.id)}>
                      {v.hoursLogged}h <Pencil size={12} className="inline text-muted-foreground" />
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">{v.availability || "Flexible"}</p>
                </div>
                <button onClick={() => deleteVolunteer(v.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {volunteers.length === 0 && (
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <HandHelping className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No volunteers yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
