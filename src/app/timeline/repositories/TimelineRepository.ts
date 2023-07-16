import { CreateTimelineDTO } from "../dtos/CreateTimelineDto";
import { TimelineModel } from "../entities/Timeline";

class TimelineRepository {
  constructor(private model: typeof TimelineModel) {}

  async create(timeline: CreateTimelineDTO) {
    return this.model.create(timeline);
  }

  async pushOccurrence(timeline_id: string, occurrence_id: string) {
    return this.model.findByIdAndUpdate(
      timeline_id,
      {
        $push: {
          occurrences: occurrence_id,
        },
      },
      { new: true }
    )
    .populate("occurrences");
  }
}

export { TimelineRepository };
