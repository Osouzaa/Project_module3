import { Router } from "express";
import { UserModule } from "../../app/users/UserModule";
import { EnsureAuthenticate } from "../../common/middlewares/EnsureAuthenticate";
import { PatientModule } from "../../app/patient/PatientModule";

const userRouter = Router();
const userController = UserModule.build().controller;
const patientController = PatientModule.build().controller;

userRouter.post("/", userController.create.bind(userController));
userRouter.delete(
  "/:id",
  EnsureAuthenticate.execute,
  userController.delete.bind(userController)
);
userRouter.get("/", userController.find.bind(userController));
userRouter.patch(
  "/:id",
  EnsureAuthenticate.execute,
  userController.update.bind(userController)
);

userRouter.post(
  "/:user_id/pacients",
  patientController.create.bind(patientController)
);

export { userRouter };
