import { TimelineRepository } from "../../timeline/repositories/TimelineRepository";
import { CreateOccurrenceDTO } from "../dtos/createOccurrence";
import { OccurrenceRepository } from "../repositories/OccurenceRepository";

class OccurrenceService {
  constructor(
    private repository: OccurrenceRepository,
    private timelineRepository: TimelineRepository
  ) {}

  async create(occurrence: CreateOccurrenceDTO) {
    try {
      const occurrenceCreated = await this.repository.create(occurrence);

      return this.timelineRepository.pushOccurrence(
        occurrence.timeline_id as string,
        occurrenceCreated.id
      );
    } catch (error) {
      console.log("error ao atrelar ", error);
      return {
        error: true,
        message: "Internal server error",
        status: 500,
      };
    }
  }

  async findOccurrenceByTimelineId(timeline_id: string) {
    try {
      return this.repository.findByTimelineId(timeline_id);
    } catch (error) {
      return { error: true, message: "Internal server error", status: 500 };
    }
  }

  async findIdOccurrence(id: string) {
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
  async delete(id: string) {
    try {
      return this.repository.deleteOccurrence(id);
    } catch (error) {
      return { error: true, message: "Internal server error", status: 500 };
    }
  }

  async updateOccurrenceId(id: string, payload: CreateOccurrenceDTO) {
    try {
      const OccurenceUpdated = await this.repository.updateOccurrence(id, payload);0    

      return {
        message: "Timeline updated",
        statusCode: 200,
        data: OccurenceUpdated,
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

export { OccurrenceService };
