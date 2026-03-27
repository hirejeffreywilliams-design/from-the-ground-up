import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import programsRouter from "./programs";
import contactsRouter from "./contacts";
import testimonialsRouter from "./testimonials";
import adminRouter from "./admin";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(programsRouter);
router.use(contactsRouter);
router.use(testimonialsRouter);
router.use("/admin", adminRouter);

export default router;
