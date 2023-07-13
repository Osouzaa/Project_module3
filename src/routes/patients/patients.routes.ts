import { Router } from "express";
import { PatientModule } from "../../app/patient/PatientModule";
import { EnsureAuthenticate } from "../../common/middlewares/EnsureAuthenticate";

const routerPatient = Router();
const patientController = PatientModule.build().controller;

routerPatient.get("/", patientController.find.bind(patientController));
routerPatient.get("/:id", EnsureAuthenticate.execute, patientController.findById.bind(patientController));


export { routerPatient };
