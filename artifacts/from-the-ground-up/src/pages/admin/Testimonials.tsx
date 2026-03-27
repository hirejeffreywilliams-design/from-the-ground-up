import { useEffect, useState } from "react";
import { Plus, Trash2, Award, Save, X } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  program: string;
  quote: string;
  avatar: string | null;
}

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", program: "", quote: "", avatar: "" });

  useEffect(() => {
    fetch("/api/admin/testimonials", { credentials: "include" })
      .then((r) => r.json())
      .then(setTestimonials)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addTestimonial = async () => {
    const res = await fetch("/api/admin/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(form),
    });
    const t = await res.json();
    setTestimonials((prev) => [t, ...prev]);
    setForm({ name: "", program: "", quote: "", avatar: "" });
    setShowForm(false);
  };

  const deleteTestimonial = async (id: number) => {
    if (!confirm("Delete this testimonial?")) return;
    await fetch(`/api/admin/testimonials/${id}`, { method: "DELETE", credentials: "include" });
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
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
          <h1 className="font-display text-3xl font-bold text-foreground">Testimonials</h1>
          <p className="text-muted-foreground mt-1 font-sans">{testimonials.length} testimonials</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all"
        >
          <Plus size={16} /> Add Testimonial
        </button>
      </div>

      {showForm && (
        <div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-display text-xl font-bold">New Testimonial</h2>
            <button onClick={() => setShowForm(false)} className="p-2 hover:bg-muted rounded-lg"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold block mb-1">Name</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">Program</label>
              <input value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold block mb-1">Quote</label>
            <textarea value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })} rows={3} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-border rounded-lg text-sm font-semibold hover:bg-muted">Cancel</button>
            <button onClick={addTestimonial} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90">
              <Save size={16} /> Save
            </button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-xs text-primary font-semibold">{t.program}</p>
                  <p className="text-sm text-muted-foreground mt-2 italic">"{t.quote}"</p>
                </div>
              </div>
              <button onClick={() => deleteTestimonial(t.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
