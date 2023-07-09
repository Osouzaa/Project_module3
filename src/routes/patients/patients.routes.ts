import { Router } from "express";
import { PatientModule } from "../../app/patient/PatientModule";

const routerPatient = Router();
const patientController = PatientModule.build().controller;

routerPatient.post("/id", patientController.create.bind(patientController));
routerPatient.get("/", patientController.find.bind(patientController));

export { routerPatient };
