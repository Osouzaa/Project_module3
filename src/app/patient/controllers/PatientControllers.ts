import { Request, Response } from "express";
import { makeCreatePatientSchema } from "../schemas/createPatientSchema";
import { PatientService } from "../services/PatientService";

class PatientController {
  constructor(private service: PatientService) {}

  async create(req: Request, res: Response) {
    const {
      body,
      params: { user_id },
    } = req;
    try {
      await makeCreatePatientSchema().validate(body);
    } catch (error: any) {
      return res.status(400).json({
        errors: error.errors,
      });
    }
    const result = (await this.service.create({
      ...body,
      userId: user_id,
    })) as any;
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
      return res.status(500).json({
        error: true,
        message: "Internal Server Error",
        status: 500,
      });
    }
  }
  async findById(req: Request, res: Response) {
    try {
      const pacientId = req.params.id;
      const pacient = await this.service.findIDPatient(pacientId);
      res.status(200).json(pacient);
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "Internal Server Error",
      });
    }
  }
}

export { PatientController };
