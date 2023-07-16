import { CreatePatientDTO } from "../dtos/createPatientDTO";
import { PatientModel } from "../entities/Patient";

class PatientRepository {
  constructor(private model: typeof PatientModel) {}
  //Cria um paciente
  async create(patient: CreatePatientDTO) {
    return this.model.create(patient);
  }
  //Busca todos os paciente
  async findAll() {
    return this.model.find();
  }
  //Busca todos o paciente por Id
  async findById(id: string) {
    return this.model.findById(id);
  }

  //Buscando todos os paciente de um usuario
  async findByUserId(userId: string) {
    return this.model.find({ userId: userId });
  }

  async deletePacient(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  async uptadePacient(id: string, payload: any) {
    return this.model.findByIdAndUpdate(id, payload, { new: true });
  }

  async pushTimeline(patient_id: string, timeline_id: string) {
    const pushFind = this.model
      .findByIdAndUpdate(
        patient_id,
        {
          $push: {
            timelines: timeline_id,
          },
        },
        { new: true }
      )
      .populate("timelines");
    return pushFind;
    
  }
}

export { PatientRepository };
