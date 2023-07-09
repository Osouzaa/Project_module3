import { Router } from "express";
import { AuthModule } from "../../app/auth/AuthModule";

const authRouter = Router();
const controllerAuth = AuthModule.build().controller;

authRouter.post("/", controllerAuth.login.bind(controllerAuth));

export { authRouter };
