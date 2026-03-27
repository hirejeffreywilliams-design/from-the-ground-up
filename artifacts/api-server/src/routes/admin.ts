import { Router, type Request, type Response, type NextFunction } from "express";
import { db } from "@workspace/db";
import {
  contactsTable,
  programsTable,
  testimonialsTable,
  donorsTable,
  donationsTable,
  volunteersTable,
  financialRecordsTable,
  impactMetricsTable,
  activityLogTable,
  insertProgramSchema,
  insertDonorSchema,
  insertDonationSchema,
  insertVolunteerSchema,
  insertFinancialRecordSchema,
  insertImpactMetricSchema,
} from "@workspace/db/schema";
import { eq, desc, sql, count, sum } from "drizzle-orm";

const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }
  next();
}

function parseId(val: string): number | null {
  const n = parseInt(val, 10);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function asyncHandler(fn: (req: Request, res: Response) => Promise<void>) {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res).catch(next);
  };
}

router.use(requireAuth);

router.get("/dashboard", asyncHandler(async (req, res) => {
  const [programCount] = await db.select({ count: count() }).from(programsTable);
  const [contactCount] = await db.select({ count: count() }).from(contactsTable);
  const [testimonialCount] = await db.select({ count: count() }).from(testimonialsTable);
  const [donorCount] = await db.select({ count: count() }).from(donorsTable);
  const [volunteerCount] = await db.select({ count: count() }).from(volunteersTable);
  const [totalDonations] = await db.select({ total: sum(donationsTable.amount) }).from(donationsTable);
  const [impactCount] = await db.select({ count: count() }).from(impactMetricsTable);
  const [totalHours] = await db.select({ total: sum(volunteersTable.hoursLogged) }).from(volunteersTable);

  const recentContacts = await db.select().from(contactsTable).orderBy(desc(contactsTable.createdAt)).limit(5);
  const recentActivity = await db.select().from(activityLogTable).orderBy(desc(activityLogTable.timestamp)).limit(10);
  const recentDonations = await db.select().from(donationsTable).orderBy(desc(donationsTable.date)).limit(5);

  res.json({
    stats: {
      programs: programCount.count,
      contacts: contactCount.count,
      testimonials: testimonialCount.count,
      donors: donorCount.count,
      volunteers: volunteerCount.count,
      totalDonations: Number(totalDonations.total) || 0,
      studentsTracked: impactCount.count,
      volunteerHours: Number(totalHours.total) || 0,
    },
    recentContacts,
    recentActivity,
    recentDonations,
  });
}));

router.get("/contacts", asyncHandler(async (_req, res) => {
  const contacts = await db.select().from(contactsTable).orderBy(desc(contactsTable.createdAt));
  res.json(contacts);
}));

router.delete("/contacts/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  await db.delete(contactsTable).where(eq(contactsTable.id, id));
  res.json({ success: true });
}));

router.get("/programs", asyncHandler(async (_req, res) => {
  const programs = await db.select().from(programsTable);
  res.json(programs);
}));

router.post("/programs", asyncHandler(async (req, res) => {
  const parsed = insertProgramSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid program data", details: parsed.error.issues }); return; }
  const [program] = await db.insert(programsTable).values(parsed.data).returning();
  res.json(program);
}));

router.put("/programs/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  const parsed = insertProgramSchema.partial().safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid program data", details: parsed.error.issues }); return; }
  const [program] = await db.update(programsTable).set(parsed.data).where(eq(programsTable.id, id)).returning();
  res.json(program);
}));

router.delete("/programs/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  await db.delete(programsTable).where(eq(programsTable.id, id));
  res.json({ success: true });
}));

router.get("/testimonials", asyncHandler(async (_req, res) => {
  const testimonials = await db.select().from(testimonialsTable);
  res.json(testimonials);
}));

router.post("/testimonials", asyncHandler(async (req, res) => {
  const { name, program, quote, avatar } = req.body;
  if (!name || !program || !quote) { res.status(400).json({ error: "Name, program, and quote are required" }); return; }
  const [testimonial] = await db.insert(testimonialsTable).values({ name, program, quote, avatar: avatar || null }).returning();
  res.json(testimonial);
}));

router.delete("/testimonials/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  await db.delete(testimonialsTable).where(eq(testimonialsTable.id, id));
  res.json({ success: true });
}));

router.get("/donors", asyncHandler(async (_req, res) => {
  const donors = await db.select().from(donorsTable).orderBy(desc(donorsTable.createdAt));
  res.json(donors);
}));

router.post("/donors", asyncHandler(async (req, res) => {
  const parsed = insertDonorSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid donor data", details: parsed.error.issues }); return; }
  const [donor] = await db.insert(donorsTable).values(parsed.data).returning();
  res.json(donor);
}));

router.put("/donors/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  const parsed = insertDonorSchema.partial().safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid donor data", details: parsed.error.issues }); return; }
  const [donor] = await db.update(donorsTable).set(parsed.data).where(eq(donorsTable.id, id)).returning();
  res.json(donor);
}));

router.delete("/donors/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  await db.delete(donorsTable).where(eq(donorsTable.id, id));
  res.json({ success: true });
}));

router.get("/donations", asyncHandler(async (_req, res) => {
  const donations = await db.select().from(donationsTable).orderBy(desc(donationsTable.date));
  res.json(donations);
}));

router.post("/donations", asyncHandler(async (req, res) => {
  const parsed = insertDonationSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid donation data", details: parsed.error.issues }); return; }
  const [donation] = await db.insert(donationsTable).values(parsed.data).returning();
  if (parsed.data.donorId) {
    await db.update(donorsTable).set({
      totalDonated: sql`${donorsTable.totalDonated} + ${parsed.data.amount}`,
      donationCount: sql`${donorsTable.donationCount} + 1`,
      lastDonationDate: new Date(),
    }).where(eq(donorsTable.id, parsed.data.donorId));
  }
  res.json(donation);
}));

router.get("/volunteers", asyncHandler(async (_req, res) => {
  const volunteers = await db.select().from(volunteersTable).orderBy(desc(volunteersTable.startDate));
  res.json(volunteers);
}));

router.post("/volunteers", asyncHandler(async (req, res) => {
  const parsed = insertVolunteerSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid volunteer data", details: parsed.error.issues }); return; }
  const [volunteer] = await db.insert(volunteersTable).values(parsed.data).returning();
  res.json(volunteer);
}));

router.put("/volunteers/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  const parsed = insertVolunteerSchema.partial().safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid volunteer data", details: parsed.error.issues }); return; }
  const [volunteer] = await db.update(volunteersTable).set(parsed.data).where(eq(volunteersTable.id, id)).returning();
  res.json(volunteer);
}));

router.delete("/volunteers/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  await db.delete(volunteersTable).where(eq(volunteersTable.id, id));
  res.json({ success: true });
}));

router.get("/financials", asyncHandler(async (_req, res) => {
  const records = await db.select().from(financialRecordsTable).orderBy(desc(financialRecordsTable.date));
  res.json(records);
}));

router.post("/financials", asyncHandler(async (req, res) => {
  const parsed = insertFinancialRecordSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid financial record", details: parsed.error.issues }); return; }
  const [record] = await db.insert(financialRecordsTable).values(parsed.data).returning();
  res.json(record);
}));

router.get("/financials/summary", asyncHandler(async (_req, res) => {
  const currentYear = new Date().getFullYear();
  const income = await db.select({ total: sum(financialRecordsTable.amount) }).from(financialRecordsTable).where(sql`${financialRecordsTable.type} = 'income' AND ${financialRecordsTable.fiscalYear} = ${currentYear}`);
  const expenses = await db.select({ total: sum(financialRecordsTable.amount) }).from(financialRecordsTable).where(sql`${financialRecordsTable.type} = 'expense' AND ${financialRecordsTable.fiscalYear} = ${currentYear}`);

  const byCategory = await db.select({
    category: financialRecordsTable.category,
    type: financialRecordsTable.type,
    total: sum(financialRecordsTable.amount),
  }).from(financialRecordsTable)
    .where(eq(financialRecordsTable.fiscalYear, currentYear))
    .groupBy(financialRecordsTable.category, financialRecordsTable.type);

  res.json({
    fiscalYear: currentYear,
    totalIncome: Number(income[0]?.total) || 0,
    totalExpenses: Number(expenses[0]?.total) || 0,
    netIncome: (Number(income[0]?.total) || 0) - (Number(expenses[0]?.total) || 0),
    byCategory,
  });
}));

router.get("/impact", asyncHandler(async (_req, res) => {
  const metrics = await db.select().from(impactMetricsTable).orderBy(desc(impactMetricsTable.createdAt));
  res.json(metrics);
}));

router.post("/impact", asyncHandler(async (req, res) => {
  const parsed = insertImpactMetricSchema.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid impact data", details: parsed.error.issues }); return; }
  const [metric] = await db.insert(impactMetricsTable).values(parsed.data).returning();
  res.json(metric);
}));

router.put("/impact/:id", asyncHandler(async (req, res) => {
  const id = parseId(req.params.id);
  if (!id) { res.status(400).json({ error: "Invalid ID" }); return; }
  const parsed = insertImpactMetricSchema.partial().safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: "Invalid impact data", details: parsed.error.issues }); return; }
  const [metric] = await db.update(impactMetricsTable).set({ ...parsed.data, updatedAt: new Date() }).where(eq(impactMetricsTable.id, id)).returning();
  res.json(metric);
}));

router.get("/impact/cascade", asyncHandler(async (_req, res) => {
  const metrics = await db.select().from(impactMetricsTable);

  const SALARY_MULTIPLIER = 1.8;
  const PROJECT_ECONOMIC_VALUE = 15000;
  const HIRE_MULTIPLIER = 45000;
  const COMMUNITY_PROJECT_VALUE = 75000;
  const CERTIFICATION_VALUE = 5000;
  const TAX_REVENUE_RATE = 0.22;
  const SKILL_TRANSFER_FACTOR = 2.5;
  const GENERATIONAL_DECAY = 0.6;

  let firstOrderImpact = 0;
  let secondOrderImpact = 0;
  let thirdOrderImpact = 0;
  let totalEmployed = 0;
  let totalProjectsCompleted = 0;
  let totalPeopleHired = 0;
  let totalCommunityProjects = 0;
  let totalCertifications = 0;
  let totalSalaryGenerated = 0;

  const programImpact: Record<string, { students: number; employed: number; economicImpact: number }> = {};

  for (const m of metrics) {
    const annualSalary = Math.max(0, m.startingSalary || 0);
    const projects = Math.max(0, m.projectsCompleted || 0);
    const hired = Math.max(0, m.peopleHired || 0);
    const communityLed = Math.max(0, m.communityProjectsLed || 0);
    const certs = Math.max(0, m.certifications?.length || 0);

    const directEarnings = annualSalary * 5;
    const projectValue = projects * PROJECT_ECONOMIC_VALUE;
    const certValue = certs * CERTIFICATION_VALUE;

    firstOrderImpact += directEarnings + projectValue + certValue;
    totalSalaryGenerated += directEarnings;
    totalProjectsCompleted += projects;
    totalCertifications += certs;

    if (m.employed) totalEmployed++;

    const hiringImpact = hired * HIRE_MULTIPLIER;
    const communityImpact = communityLed * COMMUNITY_PROJECT_VALUE;
    const economicMultiplier = annualSalary * SALARY_MULTIPLIER;

    secondOrderImpact += hiringImpact + communityImpact + economicMultiplier;
    totalPeopleHired += hired;
    totalCommunityProjects += communityLed;

    const skillTransfer = hired * annualSalary * GENERATIONAL_DECAY;
    const taxRevenue = (directEarnings + hiringImpact) * TAX_REVENUE_RATE;
    const communityRipple = communityLed * COMMUNITY_PROJECT_VALUE * SKILL_TRANSFER_FACTOR;

    thirdOrderImpact += skillTransfer + taxRevenue + communityRipple;

    const program = m.programCompleted;
    if (!programImpact[program]) {
      programImpact[program] = { students: 0, employed: 0, economicImpact: 0 };
    }
    programImpact[program].students++;
    if (m.employed) programImpact[program].employed++;
    programImpact[program].economicImpact += directEarnings + projectValue + hiringImpact;
  }

  const totalImpact = firstOrderImpact + secondOrderImpact + thirdOrderImpact;
  const impactPerStudent = metrics.length > 0 ? totalImpact / metrics.length : 0;
  const employmentRate = metrics.length > 0 ? (totalEmployed / metrics.length) * 100 : 0;

  res.json({
    algorithm: "Impact Cascade Model v1.0",
    description: "Multi-order economic ripple effect analysis tracing how trade education creates cascading community value",
    totalStudentsTracked: metrics.length,
    cascadeAnalysis: {
      firstOrder: {
        label: "Direct Student Impact",
        description: "Earnings, project revenue, and certifications of trained students",
        value: Math.round(firstOrderImpact),
        components: {
          totalSalaryGenerated: Math.round(totalSalaryGenerated),
          projectRevenue: totalProjectsCompleted * PROJECT_ECONOMIC_VALUE,
          certificationValue: totalCertifications * CERTIFICATION_VALUE,
        },
      },
      secondOrder: {
        label: "Community Multiplier Effect",
        description: "Jobs created by graduates, community projects, and local economic multiplier",
        value: Math.round(secondOrderImpact),
        components: {
          jobsCreatedImpact: totalPeopleHired * HIRE_MULTIPLIER,
          communityProjectsValue: totalCommunityProjects * COMMUNITY_PROJECT_VALUE,
          economicMultiplier: Math.round(totalSalaryGenerated * SALARY_MULTIPLIER / 5),
        },
      },
      thirdOrder: {
        label: "Generational Ripple Effect",
        description: "Skill transfer to next generation, tax revenue generated, and long-term community infrastructure",
        value: Math.round(thirdOrderImpact),
      },
    },
    totals: {
      totalEconomicImpact: Math.round(totalImpact),
      impactPerStudent: Math.round(impactPerStudent),
      employmentRate: Math.round(employmentRate),
      totalEmployed,
      totalProjectsCompleted,
      totalPeopleHired,
      totalCommunityProjects,
      totalCertifications,
    },
    programBreakdown: programImpact,
    multipliers: {
      salaryMultiplier: SALARY_MULTIPLIER,
      projectEconomicValue: PROJECT_ECONOMIC_VALUE,
      hireMultiplier: HIRE_MULTIPLIER,
      communityProjectValue: COMMUNITY_PROJECT_VALUE,
      certificationValue: CERTIFICATION_VALUE,
      taxRevenueRate: TAX_REVENUE_RATE,
      skillTransferFactor: SKILL_TRANSFER_FACTOR,
      generationalDecay: GENERATIONAL_DECAY,
    },
  });
}));

router.get("/skills-gap", asyncHandler(async (_req, res) => {
  const metrics = await db.select().from(impactMetricsTable);

  const dcLaborData = {
    "Construction": { demand: 8500, supply: 5200, avgWage: 52000, growthRate: 12, projectedOpenings: 1200 },
    "Electrical": { demand: 6200, supply: 3800, avgWage: 58000, growthRate: 15, projectedOpenings: 900 },
    "Plumbing": { demand: 4800, supply: 2900, avgWage: 55000, growthRate: 11, projectedOpenings: 650 },
    "Carpentry": { demand: 5100, supply: 3400, avgWage: 48000, growthRate: 8, projectedOpenings: 580 },
    "HVAC": { demand: 5500, supply: 2800, avgWage: 56000, growthRate: 18, projectedOpenings: 780 },
    "AI in Trades": { demand: 2200, supply: 400, avgWage: 72000, growthRate: 45, projectedOpenings: 500 },
  };

  const analysis = Object.entries(dcLaborData).map(([trade, data]) => {
    const gap = data.demand - data.supply;
    const gapPercentage = (gap / data.demand) * 100;
    const urgencyScore = (gapPercentage * 0.3) + (data.growthRate * 0.3) + ((data.avgWage / 72000) * 100 * 0.2) + ((data.projectedOpenings / 1200) * 100 * 0.2);

    const tradeKey = trade.toLowerCase().split(" ")[0];
    const graduatesInField = metrics.filter(m => m.programCompleted.toLowerCase().includes(tradeKey)).length;
    const employedInField = metrics.filter(m => m.programCompleted.toLowerCase().includes(tradeKey) && m.employed).length;

    let priority: string;
    if (urgencyScore > 70) priority = "CRITICAL";
    else if (urgencyScore > 50) priority = "HIGH";
    else if (urgencyScore > 30) priority = "MEDIUM";
    else priority = "LOW";

    const recommendedCapacity = Math.ceil(data.projectedOpenings * 0.15);
    const currentCapacity = graduatesInField;
    const capacityGap = Math.max(0, recommendedCapacity - currentCapacity);

    return {
      trade,
      laborMarket: data,
      gapAnalysis: {
        absoluteGap: gap,
        gapPercentage: Math.round(gapPercentage),
        urgencyScore: Math.round(urgencyScore),
        priority,
      },
      programPerformance: {
        graduatesProduced: graduatesInField,
        employedGraduates: employedInField,
        employmentRate: graduatesInField > 0 ? Math.round((employedInField / graduatesInField) * 100) : 0,
      },
      recommendations: {
        recommendedAnnualCapacity: recommendedCapacity,
        currentCapacity,
        capacityGap,
        estimatedRevenueOpportunity: gap * data.avgWage * 0.01,
        suggestedActions: generateActions(trade, priority, capacityGap, data.growthRate),
      },
    };
  });

  analysis.sort((a, b) => b.gapAnalysis.urgencyScore - a.gapAnalysis.urgencyScore);

  res.json({
    algorithm: "Community Skills Gap Analyzer v1.0",
    description: "AI-driven workforce demand-supply analysis with program capacity recommendations",
    region: "Washington, DC Metropolitan Area",
    dataSource: "Bureau of Labor Statistics + Local Workforce Data (modeled)",
    lastUpdated: new Date().toISOString(),
    overallSummary: {
      totalDemand: Object.values(dcLaborData).reduce((s, d) => s + d.demand, 0),
      totalSupply: Object.values(dcLaborData).reduce((s, d) => s + d.supply, 0),
      overallGap: Object.values(dcLaborData).reduce((s, d) => s + d.demand - d.supply, 0),
      criticalTrades: analysis.filter(a => a.gapAnalysis.priority === "CRITICAL").length,
      highPriorityTrades: analysis.filter(a => a.gapAnalysis.priority === "HIGH").length,
    },
    tradeAnalysis: analysis,
    strategicRecommendations: [
      "HVAC and AI in Trades show the highest growth rates — prioritize capacity expansion in these areas",
      "The DC construction boom creates immediate demand — accelerate construction and electrical programs",
      "AI in Trades has the largest gap percentage (82%) — position FTGU as the pioneering institution in this space",
      "Partner with DC Department of Employment Services for workforce development funding",
      "Establish employer partnerships for guaranteed interview pipelines in critical-gap trades",
    ],
  });
}));

function generateActions(trade: string, priority: string, capacityGap: number, growthRate: number): string[] {
  const actions: string[] = [];
  if (priority === "CRITICAL") {
    actions.push(`Immediately expand ${trade} program capacity by ${capacityGap} seats`);
    actions.push("Launch accelerated/evening cohorts to meet urgent demand");
    actions.push("Recruit additional certified instructors");
  } else if (priority === "HIGH") {
    actions.push(`Plan ${trade} capacity expansion within 6 months`);
    actions.push("Develop partnerships with employers for apprenticeship placements");
  }
  if (growthRate > 15) {
    actions.push(`${trade} market growing ${growthRate}% — invest in advanced/specialized tracks`);
  }
  if (capacityGap > 50) {
    actions.push("Consider satellite training locations to increase geographic reach");
  }
  actions.push("Conduct quarterly labor market review to adjust program priorities");
  return actions;
}

router.get("/activity", asyncHandler(async (_req, res) => {
  const log = await db.select().from(activityLogTable).orderBy(desc(activityLogTable.timestamp)).limit(50);
  res.json(log);
}));

export default router;
