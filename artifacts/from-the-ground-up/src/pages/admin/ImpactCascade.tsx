import { useEffect, useState } from "react";
import { Plus, TrendingUp, Users, Briefcase, Building2, Award, Save, X, Zap } from "lucide-react";

interface CascadeData {
  algorithm: string;
  description: string;
  totalStudentsTracked: number;
  cascadeAnalysis: {
    firstOrder: { label: string; description: string; value: number; components: Record<string, number> };
    secondOrder: { label: string; description: string; value: number; components: Record<string, number> };
    thirdOrder: { label: string; description: string; value: number };
  };
  totals: {
    totalEconomicImpact: number;
    impactPerStudent: number;
    employmentRate: number;
    totalEmployed: number;
    totalProjectsCompleted: number;
    totalPeopleHired: number;
    totalCommunityProjects: number;
    totalCertifications: number;
  };
  programBreakdown: Record<string, { students: number; employed: number; economicImpact: number }>;
}

export default function AdminImpactCascade() {
  const [cascadeData, setCascadeData] = useState<CascadeData | null>(null);
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    studentId: "", studentName: "", programCompleted: "", employed: false,
    employerName: "", startingSalary: 0, projectsCompleted: 0,
    peopleHired: 0, communityProjectsLed: 0, certifications: "",
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/admin/impact/cascade", { credentials: "include" }).then((r) => r.json()),
      fetch("/api/admin/impact", { credentials: "include" }).then((r) => r.json()),
    ]).then(([c, s]) => { setCascadeData(c); setStudents(s); })
      .catch(console.error).finally(() => setLoading(false));
  }, []);

  const addStudent = async () => {
    const body = {
      ...form,
      certifications: form.certifications.split(",").map((s) => s.trim()).filter(Boolean),
    };
    await fetch("/api/admin/impact", {
      method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
      body: JSON.stringify(body),
    });
    const [c, s] = await Promise.all([
      fetch("/api/admin/impact/cascade", { credentials: "include" }).then((r) => r.json()),
      fetch("/api/admin/impact", { credentials: "include" }).then((r) => r.json()),
    ]);
    setCascadeData(c);
    setStudents(s);
    setForm({ studentId: "", studentName: "", programCompleted: "", employed: false, employerName: "", startingSalary: 0, projectsCompleted: 0, peopleHired: 0, communityProjectsLed: 0, certifications: "" });
    setShowForm(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-amber-500 rounded-lg flex items-center justify-center">
              <Zap size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">Impact Cascade Tracker</h1>
              <p className="text-muted-foreground font-sans text-sm">Multi-order economic ripple effect analysis</p>
            </div>
          </div>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90">
          <Plus size={16} /> Track Student
        </button>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-amber-50 border border-primary/20 rounded-xl p-6">
        <p className="text-sm font-semibold text-primary mb-1">PROPRIETARY ALGORITHM</p>
        <p className="text-sm text-foreground/80">
          The Impact Cascade Model traces how trade education creates multi-generational economic value.
          Unlike simple output counting, this algorithm quantifies 1st-order (direct student earnings), 
          2nd-order (jobs created, community projects), and 3rd-order (generational skill transfer, tax revenue) 
          effects to reveal the true ROI of workforce development.
        </p>
      </div>

      {cascadeData && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm text-center">
              <Users size={24} className="text-primary mx-auto mb-2" />
              <p className="text-3xl font-bold">{cascadeData.totalStudentsTracked}</p>
              <p className="text-sm text-muted-foreground">Students Tracked</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm text-center">
              <Briefcase size={24} className="text-green-600 mx-auto mb-2" />
              <p className="text-3xl font-bold">{cascadeData.totals.employmentRate}%</p>
              <p className="text-sm text-muted-foreground">Employment Rate</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm text-center">
              <Building2 size={24} className="text-blue-600 mx-auto mb-2" />
              <p className="text-3xl font-bold">{cascadeData.totals.totalPeopleHired}</p>
              <p className="text-sm text-muted-foreground">Jobs Created</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm text-center">
              <Award size={24} className="text-amber-600 mx-auto mb-2" />
              <p className="text-3xl font-bold">{cascadeData.totals.totalCertifications}</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
          </div>

          <div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg">
            <h2 className="font-display text-2xl font-bold mb-1">Total Economic Impact</h2>
            <p className="text-4xl font-bold text-primary">${cascadeData.totals.totalEconomicImpact.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground mt-1">
              ${cascadeData.totals.impactPerStudent.toLocaleString()} per student average
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { key: "firstOrder", color: "border-l-green-500 bg-green-50/30", icon: "1st" },
              { key: "secondOrder", color: "border-l-blue-500 bg-blue-50/30", icon: "2nd" },
              { key: "thirdOrder", color: "border-l-purple-500 bg-purple-50/30", icon: "3rd" },
            ].map(({ key, color, icon }) => {
              const order = cascadeData.cascadeAnalysis[key as keyof typeof cascadeData.cascadeAnalysis];
              return (
                <div key={key} className={`border-l-4 ${color} rounded-xl p-5`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold bg-foreground text-background px-2 py-0.5 rounded">{icon}</span>
                    <h3 className="font-bold text-sm">{order.label}</h3>
                  </div>
                  <p className="text-2xl font-bold">${order.value.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground mt-1">{order.description}</p>
                </div>
              );
            })}
          </div>

          {Object.keys(cascadeData.programBreakdown).length > 0 && (
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h2 className="font-display text-xl font-bold mb-4">Impact by Program</h2>
              <div className="space-y-3">
                {Object.entries(cascadeData.programBreakdown).map(([program, data]) => (
                  <div key={program} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <div>
                      <p className="font-bold">{program}</p>
                      <p className="text-xs text-muted-foreground">{data.students} students | {data.employed} employed</p>
                    </div>
                    <p className="font-bold text-primary">${data.economicImpact.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {showForm && (
        <div className="bg-card border-2 border-primary/20 rounded-xl p-6 shadow-lg space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-display text-xl font-bold">Track Student Impact</h2>
            <button onClick={() => setShowForm(false)} className="p-2 hover:bg-muted rounded-lg"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input placeholder="Student ID" value={form.studentId} onChange={(e) => setForm({ ...form, studentId: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input placeholder="Student Name" value={form.studentName} onChange={(e) => setForm({ ...form, studentName: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input placeholder="Program Completed" value={form.programCompleted} onChange={(e) => setForm({ ...form, programCompleted: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={form.employed} onChange={(e) => setForm({ ...form, employed: e.target.checked })} className="rounded" />
              Currently Employed
            </label>
            <input placeholder="Employer Name" value={form.employerName} onChange={(e) => setForm({ ...form, employerName: e.target.value })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input type="number" placeholder="Starting Salary ($)" value={form.startingSalary || ""} onChange={(e) => setForm({ ...form, startingSalary: parseFloat(e.target.value) || 0 })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" placeholder="Projects Completed" value={form.projectsCompleted || ""} onChange={(e) => setForm({ ...form, projectsCompleted: parseInt(e.target.value) || 0 })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input type="number" placeholder="People Hired" value={form.peopleHired || ""} onChange={(e) => setForm({ ...form, peopleHired: parseInt(e.target.value) || 0 })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
            <input type="number" placeholder="Community Projects Led" value={form.communityProjectsLed || ""} onChange={(e) => setForm({ ...form, communityProjectsLed: parseInt(e.target.value) || 0 })} className="px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          </div>
          <input placeholder="Certifications (comma-separated)" value={form.certifications} onChange={(e) => setForm({ ...form, certifications: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm" />
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-border rounded-lg text-sm font-semibold hover:bg-muted">Cancel</button>
            <button onClick={addStudent} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90"><Save size={16} /> Track</button>
          </div>
        </div>
      )}

      {students.length > 0 && (
        <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="font-display text-lg font-bold">Tracked Students ({students.length})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Student</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden sm:table-cell">Program</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Salary</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Projects</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Hired</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s: any) => (
                  <tr key={s.id} className="border-t border-border/50 hover:bg-muted/30">
                    <td className="px-4 py-3 text-sm font-semibold">{s.studentName}</td>
                    <td className="px-4 py-3 text-sm hidden sm:table-cell">{s.programCompleted}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.employed ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}>
                        {s.employed ? "Employed" : "Seeking"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-right">{s.startingSalary ? `$${s.startingSalary.toLocaleString()}` : "-"}</td>
                    <td className="px-4 py-3 text-sm text-right hidden md:table-cell">{s.projectsCompleted}</td>
                    <td className="px-4 py-3 text-sm text-right hidden md:table-cell">{s.peopleHired}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
