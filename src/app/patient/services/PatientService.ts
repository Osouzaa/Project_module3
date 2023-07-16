import { UserRepository } from "../../users/repositories/UserRepository";
import { CreatePatientDTO } from "../dtos/createPatientDTO";
import { PatientRepository } from "../repositories/PatientRepository";

class PatientService {
  constructor(
    private repository: PatientRepository,
    private userRepository: UserRepository
  ) {}

  async create(patient: CreatePatientDTO) {
    try {
      const pacientCreated = await this.repository.create(patient);
      const pushResult = await this.userRepository.pushPacient(
        patient.userId as string,
        pacientCreated.id
      );
      if (!pushResult) {
        return { error: true, message: "Bad Request", status: 400 };
      }
      return pushResult;
    } catch (error) {
      return { error: true, message: "Internal server error", status: 500 };
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

  async findIDPatient(id: string) {
    try {
      return this.repository.findById(id);
    } catch (error) {
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }
  async findPatientsByUserId(userId: string) {
    try {
      return this.repository.findByUserId(userId);
    } catch (error) {
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }
  async delete(id: string) {
    try {
      return this.repository.deletePacient(id);
    } catch (error) {
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }
  async uptadePatientID(id: string, payload: CreatePatientDTO) {
    try {
      const PatientUpdated = await this.repository.uptadePacient(id, payload);

      return {
        message: "Patient updated",
        statusCode: 200,
        data: PatientUpdated,
      };
    } catch (error: any) {
      return {
        message: error.message || "Internal server error",
        statusCode: error.message ? 400 : 500,
        data: null,
      };
    }
  }
}

export { PatientService };
