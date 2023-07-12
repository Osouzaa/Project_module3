import { Router } from "express";
import { routerPatient } from "./patients/patients.routes";
import { userRouter } from "./users/users.routes";
import { authRouter } from "./auth/auth.routes";


const router = Router();

router.use("/patient", routerPatient);
router.use("/user", userRouter);
router.use("/auth", authRouter);

export { router };
