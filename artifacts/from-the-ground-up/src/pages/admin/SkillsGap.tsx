import { useEffect, useState } from "react";
import { BarChart3, AlertTriangle, TrendingUp, MapPin, Target, Lightbulb } from "lucide-react";

interface TradeAnalysis {
  trade: string;
  laborMarket: { demand: number; supply: number; avgWage: number; growthRate: number; projectedOpenings: number };
  gapAnalysis: { absoluteGap: number; gapPercentage: number; urgencyScore: number; priority: string };
  programPerformance: { graduatesProduced: number; employedGraduates: number; employmentRate: number };
  recommendations: { recommendedAnnualCapacity: number; currentCapacity: number; capacityGap: number; estimatedRevenueOpportunity: number; suggestedActions: string[] };
}

interface SkillsGapData {
  algorithm: string;
  description: string;
  region: string;
  lastUpdated: string;
  overallSummary: { totalDemand: number; totalSupply: number; overallGap: number; criticalTrades: number; highPriorityTrades: number };
  tradeAnalysis: TradeAnalysis[];
  strategicRecommendations: string[];
}

export default function AdminSkillsGap() {
  const [data, setData] = useState<SkillsGapData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/skills-gap", { credentials: "include" })
      .then((r) => r.json())
      .then(setData)
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

  if (!data) return <p className="text-destructive">Failed to load analysis</p>;

  const priorityColors: Record<string, string> = {
    CRITICAL: "bg-red-100 text-red-700 border-red-200",
    HIGH: "bg-orange-100 text-orange-700 border-orange-200",
    MEDIUM: "bg-yellow-100 text-yellow-700 border-yellow-200",
    LOW: "bg-green-100 text-green-700 border-green-200",
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <BarChart3 size={20} className="text-white" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold text-foreground">Community Skills Gap Analyzer</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} /> {data.region}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 border border-blue-200/50 rounded-xl p-6">
        <p className="text-sm font-semibold text-blue-700 mb-1">PROPRIETARY ALGORITHM</p>
        <p className="text-sm text-foreground/80">
          The Skills Gap Analyzer cross-references labor market demand data with program capacity
          and graduate outcomes to identify where FTGU should prioritize expansion. It calculates
          urgency scores based on gap percentage (30%), growth rate (30%), wage potential (20%),
          and projected openings (20%) to drive evidence-based program decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm text-center">
          <p className="text-3xl font-bold text-foreground">{data.overallSummary.totalDemand.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Total Market Demand</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm text-center">
          <p className="text-3xl font-bold text-foreground">{data.overallSummary.totalSupply.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Current Supply</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm text-center">
          <p className="text-3xl font-bold text-red-600">{data.overallSummary.overallGap.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Total Skills Gap</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm text-center">
          <p className="text-3xl font-bold text-primary">{data.overallSummary.criticalTrades + data.overallSummary.highPriorityTrades}</p>
          <p className="text-sm text-muted-foreground">Critical/High Trades</p>
        </div>
      </div>

      <div className="space-y-4">
        {data.tradeAnalysis.map((trade) => (
          <div key={trade.trade} className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-xl font-bold">{trade.trade}</h3>
                  <span className={`text-xs px-3 py-1 rounded-full font-bold border ${priorityColors[trade.gapAnalysis.priority]}`}>
                    {trade.gapAnalysis.priority}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Urgency Score</p>
                  <p className="text-2xl font-bold">{trade.gapAnalysis.urgencyScore}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
                <div>
                  <p className="text-xs text-muted-foreground">Market Demand</p>
                  <p className="font-bold">{trade.laborMarket.demand.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Current Supply</p>
                  <p className="font-bold">{trade.laborMarket.supply.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Gap</p>
                  <p className="font-bold text-red-600">{trade.gapAnalysis.absoluteGap.toLocaleString()} ({trade.gapAnalysis.gapPercentage}%)</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg Wage</p>
                  <p className="font-bold text-green-600">${trade.laborMarket.avgWage.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Growth Rate</p>
                  <p className="font-bold flex items-center gap-1">
                    <TrendingUp size={14} className="text-green-600" />
                    {trade.laborMarket.growthRate}%
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase">Demand-Supply Gap</span>
                  <span className="text-xs font-bold">{trade.gapAnalysis.gapPercentage}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div
                    className={`h-3 rounded-full transition-all ${
                      trade.gapAnalysis.gapPercentage > 60 ? "bg-red-500" :
                      trade.gapAnalysis.gapPercentage > 40 ? "bg-orange-500" :
                      trade.gapAnalysis.gapPercentage > 20 ? "bg-yellow-500" : "bg-green-500"
                    }`}
                    style={{ width: `${Math.min(trade.gapAnalysis.gapPercentage, 100)}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2 flex items-center gap-1">
                    <Target size={12} /> Program Performance
                  </p>
                  <div className="space-y-1 text-sm">
                    <p>Graduates: <span className="font-bold">{trade.programPerformance.graduatesProduced}</span></p>
                    <p>Employed: <span className="font-bold">{trade.programPerformance.employedGraduates}</span></p>
                    <p>Recommended Capacity: <span className="font-bold">{trade.recommendations.recommendedAnnualCapacity}/yr</span></p>
                    {trade.recommendations.capacityGap > 0 && (
                      <p className="text-red-600 font-semibold flex items-center gap-1">
                        <AlertTriangle size={12} /> Need {trade.recommendations.capacityGap} more seats
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Recommended Actions</p>
                  <ul className="space-y-1">
                    {trade.recommendations.suggestedActions.map((action, i) => (
                      <li key={i} className="text-xs text-foreground/80 flex items-start gap-1.5">
                        <span className="text-primary mt-0.5">&#8226;</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-amber-50 border border-primary/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb size={20} className="text-primary" />
          <h2 className="font-display text-xl font-bold">Strategic Recommendations</h2>
        </div>
        <ul className="space-y-2">
          {data.strategicRecommendations.map((rec, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                {i + 1}
              </span>
              {rec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
