import { PatientController } from "./controllers/PatientControllers";
import { PatientModel } from "./entities/Patient";
import { PatientRepository } from "./repositories/PatientRepository";
import { PatientService } from "./services/PatientService";

class PatientModule {
  static build() {
    const repository = new PatientRepository(PatientModel);
    const service = new PatientService(repository);
    const controller = new PatientController(service);

    return { repository, service, controller };
  }
}

export { PatientModule };
