import { Router } from "express";
import { UserModule } from "../../app/users/UserModule";
import { EnsureAuthenticate } from "../../common/middlewares/EnsureAuthenticate";
import { PatientModule } from "../../app/patient/PatientModule";
import { upload } from "../../configs/storageConfig";

const userRouter = Router();
const userController = UserModule.build().controller;
const patientController = PatientModule.build().controller;

// Cria um usuario
userRouter.post(
  "/",
  upload.single("photo"),
  userController.create.bind(userController)
);

// Deleta um usuario
userRouter.delete("/:id", userController.delete.bind(userController));

// Busca todos os usuarios
userRouter.get("/", userController.find.bind(userController));

// Atualiza um usuario
userRouter.patch("/:id", userController.update.bind(userController));

userRouter.get("/:id", userController.findById.bind(userController));

// Atrela um pacient
userRouter.post(
  "/:user_id/pacients",
  patientController.create.bind(patientController)
);

export { userRouter };
