import { TimelineModule } from "../timeline/TimelineModule";
import { OccurrenceController } from "./controllers/OccurrenceControllers";
import { OccurrenceModel } from "./entities/Occurrence";
import { OccurrenceRepository } from "./repositories/OccurenceRepository";
import { OccurrenceService } from "./services/OccurenceServices";

class OccurrenceModule {
  static build() {
    const repository = new OccurrenceRepository(OccurrenceModel);
    const service = new OccurrenceService(
      repository,
      TimelineModule.build().repository
    );
    const controller = new OccurrenceController(service);

    return { repository, service, controller };
  }
}

export {
    OccurrenceModule
}