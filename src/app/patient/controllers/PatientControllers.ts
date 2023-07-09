import { Request, Response } from "express";
import { makeCreatePatientSchema } from "../schemas/createPatientSchema";
import { PatientService } from "../services/PatientService";

class PatientController {
  constructor(private service: PatientService) {}

  async create(req: Request, res: Response) {
    const { body } = req;

    try {
      await makeCreatePatientSchema().validate(body);
    } catch (error: any) {
      return res.status(400).json({
        errors: error.errors,
      });
    }
    const result = await this.service.create(body);
    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(201).json(result);
  }

  async find(req: Request, res: Response) {
    try {
      const patients = await this.service.findPatient();
      return res.status(200).json(patients);
    } catch (error) {
      console.log("Erro ao buscar usuários", error);
      return res.status(500).json({
        error: true,
        message: "Erro interno do servidor",
        status: 500,
      });
    }
  }
}

export { PatientController };
