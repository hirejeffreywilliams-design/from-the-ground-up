import { useEffect, useState } from "react";
import { Trash2, Mail, Phone, MessageSquare } from "lucide-react";

interface Contact {
  id: number;
  fullName: string;
  email: string;
  phone: string | null;
  programInterest: string | null;
  message: string | null;
  type: string;
  createdAt: string | null;
}

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetch("/api/admin/contacts", { credentials: "include" })
      .then((r) => r.json())
      .then(setContacts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const deleteContact = async (id: number) => {
    if (!confirm("Delete this submission?")) return;
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE", credentials: "include" });
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const filtered = filter === "all" ? contacts : contacts.filter((c) => c.type === filter);

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
          <h1 className="font-display text-3xl font-bold text-foreground">Contact Submissions</h1>
          <p className="text-muted-foreground mt-1 font-sans">{contacts.length} total submissions</p>
        </div>
        <div className="flex gap-2">
          {["all", "enrollment", "inquiry"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                filter === f ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:bg-muted"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No submissions found</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((c) => (
            <div key={c.id} className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-bold text-lg">{c.fullName}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      c.type === "enrollment" ? "bg-primary/10 text-primary" : "bg-blue-50 text-blue-600"
                    }`}>
                      {c.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Mail size={14} />{c.email}</span>
                    {c.phone && <span className="flex items-center gap-1"><Phone size={14} />{c.phone}</span>}
                  </div>
                  {c.programInterest && (
                    <p className="text-sm"><span className="font-semibold">Program Interest:</span> {c.programInterest}</p>
                  )}
                  {c.message && (
                    <p className="text-sm text-muted-foreground mt-2 bg-muted/50 p-3 rounded-lg">{c.message}</p>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">
                    {c.createdAt ? new Date(c.createdAt).toLocaleDateString() : ""}
                  </span>
                  <button onClick={() => deleteContact(c.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
