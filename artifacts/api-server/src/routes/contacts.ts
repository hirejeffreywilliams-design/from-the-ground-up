import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  try {
    const data = SubmitContactBody.parse(req.body);
    const [contact] = await db.insert(contactsTable).values({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone ?? null,
      programInterest: data.programInterest ?? null,
      message: data.message ?? null,
      type: data.type,
    }).returning({ id: contactsTable.id });
    res.status(201).json({ id: contact.id, message: "Thank you for reaching out! We'll be in touch soon." });
  } catch (err) {
    req.log.error({ err }, "Failed to submit contact");
    res.status(400).json({ error: "Invalid submission. Please check your information and try again." });
  }
});

export default router;
