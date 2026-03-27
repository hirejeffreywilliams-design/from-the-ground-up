import { useEffect, useState } from "react";
import { Activity } from "lucide-react";

export default function AdminActivityLog() {
  const [log, setLog] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/activity", { credentials: "include" })
      .then((r) => r.json())
      .then(setLog)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold text-foreground">Activity Log</h1>
        <p className="text-muted-foreground mt-1 font-sans">Recent administrative actions</p>
      </div>

      {log.length === 0 ? (
        <div className="bg-card border border-border rounded-xl p-12 text-center">
          <Activity className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No activity logged yet. Actions taken in the admin portal will appear here.</p>
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl shadow-sm">
          {log.map((entry: any, i: number) => (
            <div key={entry.id} className={`flex items-center gap-4 p-4 ${i < log.length - 1 ? "border-b border-border/50" : ""}`}>
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold">{entry.userName || "System"}</span>{" "}
                  <span className="text-muted-foreground">{entry.action}</span>
                  {entry.entityType && (
                    <span className="text-muted-foreground"> on <span className="font-medium">{entry.entityType}</span></span>
                  )}
                  {entry.details && (
                    <span className="text-muted-foreground"> — {entry.details}</span>
                  )}
                </p>
              </div>
              <p className="text-xs text-muted-foreground whitespace-nowrap">
                {entry.timestamp ? new Date(entry.timestamp).toLocaleString() : ""}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
