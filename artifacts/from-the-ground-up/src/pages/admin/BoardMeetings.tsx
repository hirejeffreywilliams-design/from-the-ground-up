import { useState, useEffect } from "react";
import { Users, Plus, Trash2, Edit2, X, Check, Calendar, FileText, ChevronDown, ChevronUp } from "lucide-react";

const API = `${import.meta.env.BASE_URL}api/admin`;

type Meeting = {
  id: number;
  title: string;
  date: string;
  location: string | null;
  type: string;
  status: string;
  agenda: string | null;
  minutes: string | null;
  attendees: string[] | null;
  decisions: string | null;
  actionItems: string | null;
  nextMeetingDate: string | null;
};

const statusColors: Record<string, string> = {
  scheduled: "bg-blue-100 text-blue-800",
  "in-progress": "bg-yellow-100 text-yellow-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

export default function BoardMeetings() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [form, setForm] = useState({ title: "", date: "", location: "", type: "regular", status: "scheduled", agenda: "", minutes: "", attendees: "", decisions: "", actionItems: "", nextMeetingDate: "" });

  const fetchMeetings = async () => {
    const res = await fetch(`${API}/board-meetings`, { credentials: "include" });
    if (res.ok) setMeetings(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchMeetings(); }, []);

  const handleSubmit = async () => {
    const body = {
      ...form,
      date: new Date(form.date).toISOString(),
      attendees: form.attendees ? form.attendees.split(",").map(s => s.trim()).filter(Boolean) : [],
      nextMeetingDate: form.nextMeetingDate ? new Date(form.nextMeetingDate).toISOString() : null,
      location: form.location || null,
      agenda: form.agenda || null,
      minutes: form.minutes || null,
      decisions: form.decisions || null,
      actionItems: form.actionItems || null,
    };
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API}/board-meetings/${editingId}` : `${API}/board-meetings`;
    await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), credentials: "include" });
    setShowForm(false);
    setEditingId(null);
    setForm({ title: "", date: "", location: "", type: "regular", status: "scheduled", agenda: "", minutes: "", attendees: "", decisions: "", actionItems: "", nextMeetingDate: "" });
    fetchMeetings();
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API}/board-meetings/${id}`, { method: "DELETE", credentials: "include" });
    fetchMeetings();
  };

  const startEdit = (m: Meeting) => {
    setEditingId(m.id);
    setForm({
      title: m.title,
      date: m.date.split("T")[0],
      location: m.location || "",
      type: m.type,
      status: m.status,
      agenda: m.agenda || "",
      minutes: m.minutes || "",
      attendees: m.attendees ? m.attendees.join(", ") : "",
      decisions: m.decisions || "",
      actionItems: m.actionItems || "",
      nextMeetingDate: m.nextMeetingDate ? m.nextMeetingDate.split("T")[0] : "",
    });
    setShowForm(true);
  };

  const scheduledCount = meetings.filter(m => m.status === "scheduled").length;
  const completedCount = meetings.filter(m => m.status === "completed").length;
  const nextMeeting = meetings.find(m => m.status === "scheduled" && new Date(m.date) >= new Date());

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">Board Meetings</h1>
          <p className="text-muted-foreground mt-1">Schedule meetings, track agendas, minutes, and action items</p>
        </div>
        <button onClick={() => { setShowForm(true); setEditingId(null); setForm({ title: "", date: "", location: "", type: "regular", status: "scheduled", agenda: "", minutes: "", attendees: "", decisions: "", actionItems: "", nextMeetingDate: "" }); }} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm">
          <Plus size={18} /> Schedule Meeting
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><Calendar size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Upcoming</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{scheduledCount}</p>
          {nextMeeting && <p className="text-xs text-muted-foreground mt-1">Next: {new Date(nextMeeting.date).toLocaleDateString()}</p>}
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center"><Check size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Completed</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{completedCount}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center"><FileText size={20} /></div>
            <span className="text-sm text-muted-foreground font-medium">Total Meetings</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{meetings.length}</p>
        </div>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{editingId ? "Edit Meeting" : "Schedule New Meeting"}</h3>
            <button onClick={() => setShowForm(false)} className="text-muted-foreground hover:text-foreground"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Meeting Title *" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <input placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background">
              <option value="regular">Regular</option>
              <option value="special">Special</option>
              <option value="annual">Annual</option>
              <option value="emergency">Emergency</option>
              <option value="committee">Committee</option>
            </select>
            <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background">
              <option value="scheduled">Scheduled</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <input placeholder="Attendees (comma-separated)" value={form.attendees} onChange={e => setForm({ ...form, attendees: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
          </div>
          <textarea placeholder="Agenda" value={form.agenda} onChange={e => setForm({ ...form, agenda: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background" rows={4} />
          <textarea placeholder="Meeting Minutes" value={form.minutes} onChange={e => setForm({ ...form, minutes: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background" rows={4} />
          <textarea placeholder="Key Decisions" value={form.decisions} onChange={e => setForm({ ...form, decisions: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background" rows={2} />
          <textarea placeholder="Action Items" value={form.actionItems} onChange={e => setForm({ ...form, actionItems: e.target.value })} className="w-full px-4 py-2 border border-border rounded-lg bg-background" rows={2} />
          <input type="date" placeholder="Next Meeting Date" value={form.nextMeetingDate} onChange={e => setForm({ ...form, nextMeetingDate: e.target.value })} className="px-4 py-2 border border-border rounded-lg bg-background" />
          <button onClick={handleSubmit} disabled={!form.title || !form.date} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50">
            <Check size={18} /> {editingId ? "Update" : "Schedule"}
          </button>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12 text-muted-foreground">Loading meetings...</div>
      ) : meetings.length === 0 ? (
        <div className="text-center py-12 bg-card border border-border rounded-xl">
          <Users size={48} className="mx-auto text-muted-foreground/30 mb-4" />
          <p className="text-muted-foreground">No board meetings scheduled yet. Your bylaws require at minimum quarterly meetings.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {meetings.map(m => (
            <div key={m.id} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-5 flex items-start justify-between gap-4 cursor-pointer" onClick={() => setExpandedId(expandedId === m.id ? null : m.id)}>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-foreground">{m.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[m.status] || "bg-gray-100 text-gray-600"}`}>
                      {m.status.charAt(0).toUpperCase() + m.status.slice(1).replace("-", " ")}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground capitalize">{m.type}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{new Date(m.date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
                    {m.location && <span>{m.location}</span>}
                    {m.attendees && m.attendees.length > 0 && <span>{m.attendees.length} attendees</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={(e) => { e.stopPropagation(); startEdit(m); }} className="p-2 text-muted-foreground hover:text-primary"><Edit2 size={16} /></button>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(m.id); }} className="p-2 text-muted-foreground hover:text-red-500"><Trash2 size={16} /></button>
                  {expandedId === m.id ? <ChevronUp size={18} className="text-muted-foreground" /> : <ChevronDown size={18} className="text-muted-foreground" />}
                </div>
              </div>
              {expandedId === m.id && (
                <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                  {m.agenda && (
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">Agenda</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{m.agenda}</p>
                    </div>
                  )}
                  {m.minutes && (
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">Minutes</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{m.minutes}</p>
                    </div>
                  )}
                  {m.decisions && (
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">Key Decisions</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{m.decisions}</p>
                    </div>
                  )}
                  {m.actionItems && (
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">Action Items</h4>
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{m.actionItems}</p>
                    </div>
                  )}
                  {m.attendees && m.attendees.length > 0 && (
                    <div>
                      <h4 className="font-bold text-sm text-foreground mb-1">Attendees</h4>
                      <div className="flex flex-wrap gap-2">
                        {m.attendees.map((a, i) => (
                          <span key={i} className="px-2 py-1 bg-muted rounded text-xs font-medium">{a}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {m.nextMeetingDate && (
                    <p className="text-sm text-muted-foreground">Next meeting: {new Date(m.nextMeetingDate).toLocaleDateString()}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
