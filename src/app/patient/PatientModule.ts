import { UserModule } from "../users/UserModule";
import { PatientController } from "./controllers/PatientControllers";
import { PatientModel } from "./entities/Patient";
import { PatientRepository } from "./repositories/PatientRepository";
import { PatientService } from "./services/PatientService";

class PatientModule {
  static build() {
    const repository = new PatientRepository(PatientModel);
    const service = new PatientService(
      repository,
      UserModule.build().repository
    );
    const controller = new PatientController(service);

    return { repository, service, controller };
  }
}

export { PatientModule };
