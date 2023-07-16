import { CreateOccurrenceDTO } from "../dtos/createOccurrence";
import { OccurrenceModel } from "../entities/Occurrence";

class OccurrenceRepository {
  constructor(private model: typeof OccurrenceModel) {}

  async create(occurrence: CreateOccurrenceDTO) {
    return this.model.create(occurrence);
  }
}

export { OccurrenceRepository };
