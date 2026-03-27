import { Router, type IRouter } from "express";
import { db, testimonialsTable } from "@workspace/db";
import { ListTestimonialsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/testimonials", async (req, res) => {
  try {
    const testimonials = await db.select().from(testimonialsTable);
    const parsed = ListTestimonialsResponse.parse(testimonials.map(t => ({
      ...t,
      avatar: t.avatar ?? undefined,
    })));
    res.json(parsed);
  } catch (err) {
    req.log.error({ err }, "Failed to list testimonials");
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
