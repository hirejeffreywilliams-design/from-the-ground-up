import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, BookOpen, Save, X } from "lucide-react";

interface Program {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string | null;
  icon: string;
  duration: string;
  skillLevel: string;
  aiFeatures: string | null;
  outcomes: string[] | null;
}

const emptyProgram = {
  title: "",
  slug: "",
  description: "",
  longDescription: "",
  icon: "wrench",
  duration: "",
  skillLevel: "Beginner",
  aiFeatures: "",
  outcomes: [],
};

export default function AdminPrograms() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Program> | null>(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = () => {
    fetch("/api/admin/programs", { credentials: "include" })
      .then((r) => r.json())
      .then(setPrograms)
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const saveProgram = async () => {
    if (!editing) return;
    const method = isNew ? "POST" : "PUT";
    const url = isNew ? "/api/admin/programs" : `/api/admin/programs/${editing.id}`;
    const body = { ...editing };
    if (typeof body.outcomes === "string") {
      body.outcomes = (body.outcomes as string).split(",").map((s: string) => s.trim()).filter(Boolean);
    }
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(body),
    });
    setEditing(null);
    setIsNew(false);
    fetchPrograms();
  };

  const deleteProgram = async (id: number) => {
    if (!confirm("Delete this program?")) return;
    await fetch(`/api/admin/programs/${id}`, { method: "DELETE", credentials: "include" });
    setPrograms((prev) => prev.filter((p) => p.id !== id));
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
          <h1 className="font-display text-3xl font-bold text-foreground">Program Management</h1>
          <p className="text-muted-foreground mt-1 font-sans">{programs.length} programs</p>
        </div>
        <button
          onClick={() => { setEditing(emptyProgram); setIsNew(true); }}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all"
        >
          <Plus size={16} /> Add Program
        </button>
      </div>

      {editing && (
        <div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl font-bold">{isNew ? "New Program" : "Edit Program"}</h2>
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="p-2 hover:bg-muted rounded-lg">
              <X size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold block mb-1">Title</label>
              <input
                value={editing.title || ""}
                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">Slug</label>
              <input
                value={editing.slug || ""}
                onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">Duration</label>
              <input
                value={editing.duration || ""}
                onChange={(e) => setEditing({ ...editing, duration: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">Skill Level</label>
              <select
                value={editing.skillLevel || "Beginner"}
                onChange={(e) => setEditing({ ...editing, skillLevel: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>All Levels</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">Icon</label>
              <input
                value={editing.icon || ""}
                onChange={(e) => setEditing({ ...editing, icon: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">AI Features</label>
              <input
                value={editing.aiFeatures || ""}
                onChange={(e) => setEditing({ ...editing, aiFeatures: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Description</label>
            <textarea
              value={editing.description || ""}
              onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Outcomes (comma-separated)</label>
            <input
              value={Array.isArray(editing.outcomes) ? editing.outcomes.join(", ") : editing.outcomes || ""}
              onChange={(e) => setEditing({ ...editing, outcomes: e.target.value as any })}
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={() => { setEditing(null); setIsNew(false); }} className="px-4 py-2 border border-border rounded-lg text-sm font-semibold hover:bg-muted">
              Cancel
            </button>
            <button onClick={saveProgram} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90">
              <Save size={16} /> Save
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {programs.map((p) => (
          <div key={p.id} className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.duration} | {p.skillLevel}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => { setEditing(p); setIsNew(false); }} className="p-2 text-muted-foreground hover:text-primary transition-colors">
                  <Pencil size={16} />
                </button>
                <button onClick={() => deleteProgram(p.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
