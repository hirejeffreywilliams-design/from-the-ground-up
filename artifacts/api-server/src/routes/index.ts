import { Router, type IRouter } from "express";
import healthRouter from "./health";
import programsRouter from "./programs";
import contactsRouter from "./contacts";
import testimonialsRouter from "./testimonials";

const router: IRouter = Router();

router.use(healthRouter);
router.use(programsRouter);
router.use(contactsRouter);
router.use(testimonialsRouter);

export default router;
