import { useState, useEffect } from "react";
import { Shield, Plus, Trash2, Edit2, X, Check, CheckCircle2, Clock, AlertTriangle, Calendar, Download } from "lucide-react";

const API = `${import.meta.env.BASE_URL}api/admin`;

type ComplianceTask = {
  id: number;
  title: string;
  description: string | null;
  category: string;
  dueDate: string;
  status: string;
  frequency: string;
  filingAgency: string | null;
  estimatedCost: number | null;
  completedDate: string | null;
  notes: string | null;
};

const statusIcons: Record<string, any> = {
  upcoming: Clock,
  "in-progress": AlertTriangle,
  completed: CheckCircle2,
  overdue: AlertTriangle,
};

const statusColors: Record<string, string> = {
  upcoming: "bg-blue-100 text-blue-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  completed: "bg-green-100 text-green-800",
  overdue: "bg-red-100 text-red-800",
};

const categoryLabels: Record<string, string> = {
  irs: "IRS Filings",
  state: "DC State Filings",
  insurance: "Insurance",
  governance: "Governance",
  financial: "Financial",
  tax: "Tax Filings",
  filing: "General Filing",
};

export default function ComplianceCalendar() {
  const [tasks, setTasks] = useState<ComplianceTask[]>([]);
  const [defaults, setDefaults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({ title: "", description: "", category: "filing", dueDate: "", status: "upcoming", frequency: "annual", filingAgency: "", estimatedCost: "", notes: "" });

  const fetchTasks = async () => {
    const res = await fetch(`${API}/compliance`, { credentials: "include" });
    if (res.ok) setTasks(await res.json());
    setLoading(false);
  };

  const fetchDefaults = async () => {
    const res = await fetch(`${API}/compliance/defaults`, { credentials: "include" });
    if (res.ok) setDefaults(await res.json());
  };

  useEffect(() => { fetchTasks(); fetchDefaults(); }, []);

  const handleSubmit = async () => {
    const body = { ...form, dueDate: new Date(form.dueDate).toISOString(), estimatedCost: form.estimatedCost ? parseFloat(form.estimatedCost) : null, completedDate: form.status === "completed" ? new Date().toISOString() : null };
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API}/compliance/${editingId}` : `${API}/compliance`;
    await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), credentials: "include" });
    setShowForm(false);
    setEditingId(null);
    setForm({ title: "", description: "", category: "filing", dueDate: "", status: "upcoming", frequency: "annual", filingAgency: "", estimatedCost: "", notes: "" });
    fetchTasks();
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API}/compliance/${id}`, { method: "DELETE", credentials: "include" });
    fetchTasks();
  };

  const markComplete = async (t: ComplianceTask) => {
    await fetch(`${API}/compliance/${t.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: "completed", completedDate: new Date().toISOString() }), credentials: "include" });
    fetchTasks();
  };

  const loadDefaults = async () => {
    const year = new Date().getFullYear();
    for (const d of defaults) {
      const dueDate = new Date(year, 11, 31).toISOString();
      await fetch(`${API}/compliance`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...d, dueDate }), credentials: "include" });
    }
    fetchTasks();
  };

  const startEdit = (t: ComplianceTask) => {
    setEditingId(t.id);
    setForm({ title: t.title, description: t.description || "", category: t.category, dueDate: t.dueDate.split("T")[0], status: t.status, frequency: t.frequency, filingAgency: t.filingAgency || "", estimatedCost: t.estimatedCost ? String(t.estimatedCost) : "", notes: t.notes || "" });
    setShowForm(true);
  };

  const filtered = filter === "all" ? tasks : tasks.filter(t => t.category === filter);
  const overdue = tasks.filter(t => t.status !== "completed" && new Date(t.dueDate) < new Date()).length;
  const upcoming30 = tasks.filter(t => { const d = new Date(t.dueDate); const n = new Date(); return t.status !== "completed" && d >= n && d <= new Date(n.getTime() + 30 * 86400000); }).length;
  const totalCost = tasks.reduce((s, t) => s + (t.estimatedCost || 0), 0);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Compliance Calendar</h1>
          <p className="text-muted-foreground mt-1">Track filing deadlines, renewals, and regulatory requirements</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tasks.length === 0 && defaults.length > 0 && (
            <button onClick={loadDefaults} className="flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm">
              <Download size={18} /> Load Defaults
            </button>
          )}
          <button onClick={() => { setShowForm(true); setEditingId(null); setForm({ title: "", description: "", category: "filing", dueDate: "", status: "upcoming", frequency: "annual", filingAgency: "", estimatedCost: "", notes: "" }); }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
            <Plus size={18} /> Add Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><Calendar size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Total Tasks</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{tasks.length}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${overdue > 0 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}><AlertTriangle size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Overdue</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{overdue}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center"><Clock size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Due in 30 Days</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{upcoming30}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center"><Shield size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Est. Annual Cost</span>
          </div>
          <p className="text-2xl font-bold text-foreground">${totalCost.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {["all", ...Object.keys(categoryLabels)].map(c => (
          <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${filter === c ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            {c === "all" ? "All" : categoryLabels[c]} {c !== "all" && `(${tasks.filter(t => t.category === c).length})`}
          </button>
        ))}
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{editingId ? "Edit Task" : "New Compliance Task"}</h3>
            <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Task Title *" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background">
              {Object.entries(categoryLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
            </select>
            <input type="date" value={form.dueDate} onChange={e => setForm({ ...form, dueDate: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background">
              <option value="upcoming">Upcoming</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="overdue">Overdue</option>
            </select>
            <select value={form.frequency} onChange={e => setForm({ ...form, frequency: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background">
              <option value="one-time">One-Time</option>
              <option value="quarterly">Quarterly</option>
              <option value="annual">Annual</option>
              <option value="biennial">Biennial</option>
            </select>
            <input placeholder="Filing Agency" value={form.filingAgency} onChange={e => setForm({ ...form, filingAgency: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <input placeholder="Estimated Cost ($)" type="number" value={form.estimatedCost} onChange={e => setForm({ ...form, estimatedCost: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
          </div>
          <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background" rows={2} />
          <textarea placeholder="Notes" value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background" rows={2} />
          <button onClick={handleSubmit} disabled={!form.title || !form.dueDate} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50">
            <Check size={18} /> {editingId ? "Update" : "Add Task"}
          </button>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12 text-muted-foreground">Loading compliance tasks...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-card border border-border rounded-xl">
          <Shield size={48} className="mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground">No compliance tasks yet. {defaults.length > 0 ? 'Click "Load DC Nonprofit Defaults" to get started with common requirements.' : "Add your first compliance task."}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(t => {
            const isOverdue = t.status !== "completed" && new Date(t.dueDate) < new Date();
            const StatusIcon = statusIcons[isOverdue ? "overdue" : t.status] || Clock;
            return (
              <div key={t.id} className={`bg-card border rounded-xl p-5 flex items-start justify-between gap-4 ${isOverdue ? "border-red-300 bg-red-50/50" : "border-border"}`}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <StatusIcon size={18} className={isOverdue ? "text-red-500" : t.status === "completed" ? "text-green-500" : "text-yellow-500"} />
                    <h3 className={`font-bold truncate ${t.status === "completed" ? "text-muted-foreground line-through" : "text-foreground"}`}>{t.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[isOverdue ? "overdue" : t.status] || "bg-gray-100 text-gray-600"}`}>
                      {isOverdue ? "Overdue" : t.status.charAt(0).toUpperCase() + t.status.slice(1).replace("-", " ")}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">{t.frequency}</span>
                  </div>
                  {t.description && <p className="text-sm text-muted-foreground mb-1">{t.description}</p>}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Due: {new Date(t.dueDate).toLocaleDateString()}</span>
                    {t.filingAgency && <span>Agency: {t.filingAgency}</span>}
                    {t.estimatedCost != null && t.estimatedCost > 0 && <span>Cost: ${t.estimatedCost.toLocaleString()}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {t.status !== "completed" && (
                    <button onClick={() => markComplete(t)} className="p-2 text-muted-foreground hover:text-green-500" title="Mark Complete"><CheckCircle2 size={16} /></button>
                  )}
                  <button onClick={() => startEdit(t)} className="p-2 text-muted-foreground hover:text-primary"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(t.id)} className="p-2 text-muted-foreground hover:text-red-500"><Trash2 size={16} /></button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
