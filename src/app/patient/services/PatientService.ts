import { CreatePatientDTO } from "../dtos/createPatientDTO";
import { PatientRepository } from "../repositories/PatientRepository";

class PatientService {
  constructor(private repository: PatientRepository) {}

  async create(patient: CreatePatientDTO) {
    try {
      const createdPatient = await this.repository.create(patient);
      return {
        error: false,
        data: createdPatient,
        message: "Patient created sucessfully",
        status: 201,
      };
    } catch (error: any) {
      console.log("Error creating Patient", error);
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }
  async findPatient() {
    try {
      return this.repository.findAll();
    } catch (error) {
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }
}

export { PatientService };
