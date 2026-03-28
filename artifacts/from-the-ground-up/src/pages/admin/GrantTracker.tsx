import { useState, useEffect } from "react";
import { DollarSign, Plus, Trash2, Edit2, X, Check, AlertCircle, Clock, Trophy, Search } from "lucide-react";

const API = `${import.meta.env.BASE_URL}api/admin`;

type Grant = {
  id: number;
  name: string;
  funder: string;
  amount: number;
  status: string;
  deadline: string | null;
  submittedDate: string | null;
  awardedDate: string | null;
  category: string;
  contactName: string | null;
  contactEmail: string | null;
  requirements: string | null;
  notes: string | null;
  reportingDeadline: string | null;
};

const statusColors: Record<string, string> = {
  researching: "bg-blue-100 text-blue-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  submitted: "bg-purple-100 text-purple-800",
  awarded: "bg-green-100 text-green-800",
  declined: "bg-red-100 text-red-800",
  reporting: "bg-orange-100 text-orange-800",
};

const categoryLabels: Record<string, string> = {
  general: "General Operating",
  program: "Program-Specific",
  capital: "Capital/Equipment",
  workforce: "Workforce Development",
  technology: "Technology/AI",
  capacity: "Capacity Building",
};

export default function GrantTracker() {
  const [grants, setGrants] = useState<Grant[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({ name: "", funder: "", amount: "", status: "researching", deadline: "", category: "general", contactName: "", contactEmail: "", requirements: "", notes: "" });

  const fetchGrants = async () => {
    const res = await fetch(`${API}/grants`, { credentials: "include" });
    if (res.ok) setGrants(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchGrants(); }, []);

  const handleSubmit = async () => {
    const body = { ...form, amount: parseFloat(form.amount) || 0, deadline: form.deadline ? new Date(form.deadline).toISOString() : null };
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API}/grants/${editingId}` : `${API}/grants`;
    await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), credentials: "include" });
    setShowForm(false);
    setEditingId(null);
    setForm({ name: "", funder: "", amount: "", status: "researching", deadline: "", category: "general", contactName: "", contactEmail: "", requirements: "", notes: "" });
    fetchGrants();
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API}/grants/${id}`, { method: "DELETE", credentials: "include" });
    fetchGrants();
  };

  const startEdit = (g: Grant) => {
    setEditingId(g.id);
    setForm({ name: g.name, funder: g.funder, amount: String(g.amount), status: g.status, deadline: g.deadline ? g.deadline.split("T")[0] : "", category: g.category, contactName: g.contactName || "", contactEmail: g.contactEmail || "", requirements: g.requirements || "", notes: g.notes || "" });
    setShowForm(true);
  };

  const filtered = filter === "all" ? grants : grants.filter(g => g.status === filter);
  const totalPipeline = grants.filter(g => !["declined"].includes(g.status)).reduce((s, g) => s + g.amount, 0);
  const totalAwarded = grants.filter(g => g.status === "awarded").reduce((s, g) => s + g.amount, 0);
  const pending = grants.filter(g => g.status === "submitted").length;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Grant Tracker</h1>
          <p className="text-muted-foreground mt-1">Track grant applications, deadlines, and awards</p>
        </div>
        <button onClick={() => { setShowForm(true); setEditingId(null); setForm({ name: "", funder: "", amount: "", status: "researching", deadline: "", category: "general", contactName: "", contactEmail: "", requirements: "", notes: "" }); }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <Plus size={18} /> New Grant
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><Search size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Total Pipeline</span>
          </div>
          <p className="text-2xl font-bold text-foreground">${totalPipeline.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center"><Trophy size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Awarded</span>
          </div>
          <p className="text-2xl font-bold text-foreground">${totalAwarded.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center"><Clock size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Pending Review</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{pending}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center"><AlertCircle size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Active Grants</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{grants.filter(g => ["researching", "in-progress", "submitted"].includes(g.status)).length}</p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {["all", "researching", "in-progress", "submitted", "awarded", "declined", "reporting"].map(s => (
          <button key={s} onClick={() => setFilter(s)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filter === s ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1).replace("-", " ")} {s !== "all" && `(${grants.filter(g => g.status === s).length})`}
          </button>
        ))}
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{editingId ? "Edit Grant" : "New Grant Application"}</h3>
            <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Grant Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <input placeholder="Funder / Organization *" value={form.funder} onChange={e => setForm({ ...form, funder: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <input placeholder="Amount ($)" type="number" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background">
              <option value="researching">Researching</option>
              <option value="in-progress">In Progress</option>
              <option value="submitted">Submitted</option>
              <option value="awarded">Awarded</option>
              <option value="declined">Declined</option>
              <option value="reporting">Reporting</option>
            </select>
            <input type="date" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background">
              {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
            <input placeholder="Contact Name" value={form.contactName} onChange={e => setForm({ ...form, contactName: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <input placeholder="Contact Email" value={form.contactEmail} onChange={e => setForm({ ...form, contactEmail: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
          </div>
          <textarea placeholder="Requirements / Eligibility" value={form.requirements} onChange={e => setForm({ ...form, requirements: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background" rows={2} />
          <textarea placeholder="Notes" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background" rows={2} />
          <button onClick={handleSubmit} disabled={!form.name || !form.funder} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50">
            <Check size={18} /> {editingId ? "Update" : "Add Grant"}
          </button>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12 text-muted-foreground">Loading grants...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-card border border-border rounded-xl">
          <DollarSign size={48} className="mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground">No grants found. Start tracking your grant applications!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(g => (
            <div key={g.id} className="bg-card border border-border rounded-xl p-5 flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-foreground truncate">{g.name}</h3>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[g.status] || "bg-gray-100 text-gray-600"}`}>
                    {g.status.charAt(0).toUpperCase() + g.status.slice(1).replace("-", " ")}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {categoryLabels[g.category] || g.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{g.funder}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-bold text-foreground">${g.amount.toLocaleString()}</span>
                  {g.deadline && <span className="text-muted-foreground">Deadline: {new Date(g.deadline).toLocaleDateString()}</span>}
                  {g.contactName && <span className="text-muted-foreground">Contact: {g.contactName}</span>}
                </div>
                {g.notes && <p className="text-sm text-muted-foreground mt-2 italic">{g.notes}</p>}
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => startEdit(g)} className="p-2 text-muted-foreground hover:text-primary"><Edit2 size={16} /></button>
                <button onClick={() => handleDelete(g.id)} className="p-2 text-muted-foreground hover:text-red-500"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
