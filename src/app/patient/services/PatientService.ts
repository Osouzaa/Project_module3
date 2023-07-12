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
      // console.log("Paciente sendo criado no serviço", pacientCreated);

      const pushResult = await this.userRepository.pushPacient(
        patient.userId as string,
        pacientCreated.id
      );
      // console.log("Valor retornado por this.userRepository.pushPacient:", pushResult);
      if (!pushResult) {
        return { error: true, message: "Bad Request", status: 400 };
      }
      return pushResult;
    } catch (error) {
      console.log("Erro ao criar paciente:", error);
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
}

export { PatientService };
