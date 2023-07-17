import { Router } from "express";
import { routerPatient } from "./patients/patients.routes";
import { userRouter } from "./users/users.routes";
import { authRouter } from "./auth/auth.routes";
import { timelineRouter } from "./timeline/timelines.routes";
import { occurrenceRouter } from "./occurrences/occurrences.routes";

const router = Router();

router.use("/patient", routerPatient);
router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/timeline", timelineRouter);
router.use("/occurence", occurrenceRouter);

export { router };
