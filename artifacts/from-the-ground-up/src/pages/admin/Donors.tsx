import { useEffect, useState } from "react";
import { Plus, Trash2, Heart, DollarSign, Save, X } from "lucide-react";

interface Donor {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  totalDonated: number;
  lastDonationDate: string | null;
  donationCount: number;
  tier: string;
  notes: string | null;
  isRecurring: boolean;
}

interface Donation {
  id: number;
  donorId: number | null;
  amount: number;
  type: string;
  method: string | null;
  purpose: string | null;
  date: string | null;
}

export default function AdminDonors() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showDonorForm, setShowDonorForm] = useState(false);
  const [showDonationForm, setShowDonationForm] = useState(false);
  const [donorForm, setDonorForm] = useState({ name: "", email: "", phone: "", tier: "supporter", notes: "", isRecurring: false });
  const [donationForm, setDonationForm] = useState({ donorId: 0, amount: 0, type: "one-time", method: "", purpose: "" });

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/donors", { credentials: "include" }).then((r) => r.json()),
      fetch("/api/admin/donations", { credentials: "include" }).then((r) => r.json()),
    ]).then(([d, dn]) => {
      setDonors(d);
      setDonations(dn);
    }).catch(console.error).finally(() => setLoading(false));
  }, []);

  const addDonor = async () => {
    const res = await fetch("/api/admin/donors", {
      method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
      body: JSON.stringify(donorForm),
    });
    const d = await res.json();
    setDonors((prev) => [d, ...prev]);
    setDonorForm({ name: "", email: "", phone: "", tier: "supporter", notes: "", isRecurring: false });
    setShowDonorForm(false);
  };

  const addDonation = async () => {
    const res = await fetch("/api/admin/donations", {
      method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
      body: JSON.stringify(donationForm),
    });
    const d = await res.json();
    setDonations((prev) => [d, ...prev]);
    if (donationForm.donorId) {
      const updated = await fetch("/api/admin/donors", { credentials: "include" }).then((r) => r.json());
      setDonors(updated);
    }
    setDonationForm({ donorId: 0, amount: 0, type: "one-time", method: "", purpose: "" });
    setShowDonationForm(false);
  };

  const deleteDonor = async (id: number) => {
    if (!confirm("Delete this donor?")) return;
    await fetch(`/api/admin/donors/${id}`, { method: "DELETE", credentials: "include" });
    setDonors((prev) => prev.filter((d) => d.id !== id));
  };

  const tierColors: Record<string, string> = {
    supporter: "bg-blue-50 text-blue-600",
    bronze: "bg-amber-50 text-amber-700",
    silver: "bg-gray-100 text-gray-600",
    gold: "bg-yellow-50 text-yellow-600",
    platinum: "bg-purple-50 text-purple-600",
    founding: "bg-primary/10 text-primary",
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
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Donor Management</h1>
          <p className="text-muted-foreground mt-1 font-sans">{donors.length} donors | ${donations.reduce((s, d) => s + d.amount, 0).toLocaleString()} total raised</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setShowDonorForm(!showDonorForm)} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90">
            <Plus size={16} /> Add Donor
          </button>
          <button onClick={() => setShowDonationForm(!showDonationForm)} className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg font-semibold text-sm hover:bg-primary/10">
            <DollarSign size={16} /> Record Donation
          </button>
        </div>
      </div>

      {showDonorForm && (
        <div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-display text-xl font-bold">New Donor</h2>
            <button onClick={() => setShowDonorForm(false)} className="p-2 hover:bg-muted rounded-lg"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input placeholder="Name" value={donorForm.name} onChange={(e) => setDonorForm({ ...donorForm, name: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input placeholder="Email" value={donorForm.email} onChange={(e) => setDonorForm({ ...donorForm, email: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <select value={donorForm.tier} onChange={(e) => setDonorForm({ ...donorForm, tier: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
              <option value="supporter">Supporter</option>
              <option value="bronze">Bronze</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="platinum">Platinum</option>
              <option value="founding">Founding</option>
            </select>
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowDonorForm(false)} className="px-4 py-2 border border-border rounded-lg text-sm font-semibold hover:bg-muted">Cancel</button>
            <button onClick={addDonor} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90"><Save size={16} /> Save</button>
          </div>
        </div>
      )}

      {showDonationForm && (
        <div className="bg-card border-2 border-green-200 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-display text-xl font-bold">Record Donation</h2>
            <button onClick={() => setShowDonationForm(false)} className="p-2 hover:bg-muted rounded-lg"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select value={donationForm.donorId} onChange={(e) => setDonationForm({ ...donationForm, donorId: parseInt(e.target.value) })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
              <option value={0}>Select Donor (optional)</option>
              {donors.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
            <input type="number" placeholder="Amount ($)" value={donationForm.amount || ""} onChange={(e) => setDonationForm({ ...donationForm, amount: parseFloat(e.target.value) || 0 })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <select value={donationForm.type} onChange={(e) => setDonationForm({ ...donationForm, type: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
              <option value="one-time">One-Time</option>
              <option value="recurring">Recurring</option>
              <option value="grant">Grant</option>
              <option value="in-kind">In-Kind</option>
            </select>
          </div>
          <input placeholder="Purpose (e.g., General Fund, HVAC Program)" value={donationForm.purpose} onChange={(e) => setDonationForm({ ...donationForm, purpose: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowDonationForm(false)} className="px-4 py-2 border border-border rounded-lg text-sm font-semibold hover:bg-muted">Cancel</button>
            <button onClick={addDonation} className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700"><Save size={16} /> Record</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {donors.map((d) => (
          <div key={d.id} className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
                  <Heart size={20} className="text-red-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold">{d.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${tierColors[d.tier] || "bg-muted text-muted-foreground"}`}>
                      {d.tier}
                    </span>
                    {d.isRecurring && <span className="text-xs px-2 py-0.5 rounded-full bg-green-50 text-green-600 font-semibold">Recurring</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{d.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="font-bold text-green-600">${d.totalDonated.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">{d.donationCount} donations</p>
                </div>
                <button onClick={() => deleteDonor(d.id)} className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
        {donors.length === 0 && (
          <div className="bg-card border border-border rounded-xl p-12 text-center">
            <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No donors yet. Add your first donor above.</p>
          </div>
        )}
      </div>
    </div>
  );
}
