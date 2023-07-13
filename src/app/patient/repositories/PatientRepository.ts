import { CreatePatientDTO } from "../dtos/createPatientDTO";
import { PatientModel } from "../entities/Patient";

class PatientRepository {
  constructor(private model: typeof PatientModel) {}

  async create(patient: CreatePatientDTO) {
    return this.model.create(patient);
  }

  async findAll() {
    return this.model.find();
  }

  async findById(id: string) {
    return this.model.findById(id);
  }
}

export { PatientRepository };
