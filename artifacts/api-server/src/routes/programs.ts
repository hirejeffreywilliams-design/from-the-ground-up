import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, programsTable } from "@workspace/db";
import { GetProgramParams, ListProgramsResponse, GetProgramResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/programs", async (req, res) => {
  try {
    const programs = await db.select().from(programsTable);
    const parsed = ListProgramsResponse.parse(programs.map(p => ({
      ...p,
      longDescription: p.longDescription ?? undefined,
      aiFeatures: p.aiFeatures ?? undefined,
      outcomes: (p.outcomes as string[]) ?? undefined,
    })));
    res.json(parsed);
  } catch (err) {
    req.log.error({ err }, "Failed to list programs");
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/programs/:id", async (req, res) => {
  try {
    const { id } = GetProgramParams.parse({ id: req.params.id });
    const [program] = await db.select().from(programsTable).where(eq(programsTable.id, id));
    if (!program) {
      res.status(404).json({ error: "Program not found" });
      return;
    }
    const parsed = GetProgramResponse.parse({
      ...program,
      longDescription: program.longDescription ?? undefined,
      aiFeatures: program.aiFeatures ?? undefined,
      outcomes: (program.outcomes as string[]) ?? undefined,
    });
    res.json(parsed);
  } catch (err) {
    req.log.error({ err }, "Failed to get program");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
