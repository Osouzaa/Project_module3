import { Router } from "express";
import { PatientModule } from "../../app/patient/PatientModule";
import { EnsureAuthenticate } from "../../common/middlewares/EnsureAuthenticate";
import { TimelineModule } from "../../app/timeline/TimelineModule";

const routerPatient = Router();
const patientController = PatientModule.build().controller;
const timelineController = TimelineModule.build().controller;

routerPatient.get("/", patientController.find.bind(patientController));
routerPatient.get(
  "/:id",
  patientController.findById.bind(patientController)
);
routerPatient.get(
  "/user/:user_id",
  patientController.findByUserId.bind(patientController)
);
routerPatient.delete("/:id", patientController.delete.bind(patientController));

routerPatient.patch("/:id", patientController.update.bind(patientController));

routerPatient.post("/:pacient_id/Timelines", timelineController.create.bind(timelineController))
export { routerPatient };
