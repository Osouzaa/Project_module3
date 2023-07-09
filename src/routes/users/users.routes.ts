import { Router } from "express";
import { UserModule } from "../../app/users/UserModule";

const userRouter = Router();
const userController = UserModule.build().controller;

userRouter.post("/", userController.create.bind(userController));
userRouter.delete("/:id", userController.delete.bind(userController));
userRouter.get("/", userController.find.bind(userController));
userRouter.patch("/:id", userController.update.bind(userController));

export { userRouter };
