import { useEffect, useState } from "react";
import { Plus, DollarSign, TrendingUp, TrendingDown, Save, X } from "lucide-react";

interface FinancialRecord {
  id: number;
  type: string;
  category: string;
  amount: number;
  description: string;
  date: string | null;
  fiscalYear: number;
  quarter: number;
  approvedBy: string | null;
}

interface Summary {
  fiscalYear: number;
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  byCategory: { category: string; type: string; total: string }[];
}

export default function AdminFinancials() {
  const [records, setRecords] = useState<FinancialRecord[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    type: "income", category: "", amount: 0, description: "",
    fiscalYear: new Date().getFullYear(), quarter: Math.ceil((new Date().getMonth() + 1) / 3), approvedBy: "",
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/financials", { credentials: "include" }).then((r) => r.json()),
      fetch("/api/admin/financials/summary", { credentials: "include" }).then((r) => r.json()),
    ]).then(([r, s]) => { setRecords(r); setSummary(s); })
      .catch(console.error).finally(() => setLoading(false));
  }, []);

  const addRecord = async () => {
    const res = await fetch("/api/admin/financials", {
      method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
      body: JSON.stringify(form),
    });
    const r = await res.json();
    setRecords((prev) => [r, ...prev]);
    const s = await fetch("/api/admin/financials/summary", { credentials: "include" }).then((r) => r.json());
    setSummary(s);
    setForm({ type: "income", category: "", amount: 0, description: "", fiscalYear: new Date().getFullYear(), quarter: Math.ceil((new Date().getMonth() + 1) / 3), approvedBy: "" });
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const incomeCategories = summary?.byCategory.filter((c) => c.type === "income") || [];
  const expenseCategories = summary?.byCategory.filter((c) => c.type === "expense") || [];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Financial Overview</h1>
          <p className="text-muted-foreground mt-1 font-sans">Fiscal Year {summary?.fiscalYear || new Date().getFullYear()}</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90">
          <Plus size={16} /> Add Record
        </button>
      </div>

      {summary && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center"><TrendingUp size={20} className="text-green-600" /></div>
              <div>
                <p className="text-sm text-muted-foreground">Total Income</p>
                <p className="text-2xl font-bold text-green-600">${summary.totalIncome.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center"><TrendingDown size={20} className="text-red-600" /></div>
              <div>
                <p className="text-sm text-muted-foreground">Total Expenses</p>
                <p className="text-2xl font-bold text-red-600">${summary.totalExpenses.toLocaleString()}</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${summary.netIncome >= 0 ? "bg-green-50" : "bg-red-50"}`}>
                <DollarSign size={20} className={summary.netIncome >= 0 ? "text-green-600" : "text-red-600"} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Net Income</p>
                <p className={`text-2xl font-bold ${summary.netIncome >= 0 ? "text-green-600" : "text-red-600"}`}>
                  ${Math.abs(summary.netIncome).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {(incomeCategories.length > 0 || expenseCategories.length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold mb-3">Income by Category</h2>
            {incomeCategories.map((c) => (
              <div key={c.category} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                <span className="text-sm">{c.category}</span>
                <span className="text-sm font-bold text-green-600">${Number(c.total).toLocaleString()}</span>
              </div>
            ))}
            {incomeCategories.length === 0 && <p className="text-sm text-muted-foreground">No income recorded</p>}
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold mb-3">Expenses by Category</h2>
            {expenseCategories.map((c) => (
              <div key={c.category} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                <span className="text-sm">{c.category}</span>
                <span className="text-sm font-bold text-red-600">${Number(c.total).toLocaleString()}</span>
              </div>
            ))}
            {expenseCategories.length === 0 && <p className="text-sm text-muted-foreground">No expenses recorded</p>}
          </div>
        </div>
      )}

      {showForm && (
        <div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-display text-xl font-bold">New Financial Record</h2>
            <button onClick={() => setShowForm(false)} className="p-2 hover:bg-muted rounded-lg"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input type="number" placeholder="Amount" value={form.amount || ""} onChange={(e) => setForm({ ...form, amount: parseFloat(e.target.value) || 0 })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          </div>
          <input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" placeholder="Fiscal Year" value={form.fiscalYear} onChange={(e) => setForm({ ...form, fiscalYear: parseInt(e.target.value) })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <select value={form.quarter} onChange={(e) => setForm({ ...form, quarter: parseInt(e.target.value) })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm">
              <option value={1}>Q1</option><option value={2}>Q2</option><option value={3}>Q3</option><option value={4}>Q4</option>
            </select>
            <input placeholder="Approved By" value={form.approvedBy} onChange={(e) => setForm({ ...form, approvedBy: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          </div>
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-border rounded-lg text-sm font-semibold hover:bg-muted">Cancel</button>
            <button onClick={addRecord} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90"><Save size={16} /> Save</button>
          </div>
        </div>
      )}

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Date</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Type</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden sm:table-cell">Category</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Description</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Amount</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden sm:table-cell">Q</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.id} className="border-t border-border/50 hover:bg-muted/30">
                  <td className="px-4 py-3 text-sm">{r.date ? new Date(r.date).toLocaleDateString() : "N/A"}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${r.type === "income" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}`}>
                      {r.type}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm hidden sm:table-cell">{r.category}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{r.description}</td>
                  <td className={`px-4 py-3 text-sm text-right font-bold ${r.type === "income" ? "text-green-600" : "text-red-600"}`}>
                    ${r.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm hidden sm:table-cell">Q{r.quarter}</td>
                </tr>
              ))}
              {records.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No financial records yet</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
