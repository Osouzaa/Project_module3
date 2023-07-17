import { Router } from "express";
import { OccurrenceModule } from "../../app/occurrences/OccurenceModule";
import { TimelineModule } from "../../app/timeline/TimelineModule";

const timelineRouter = Router();
const occurencesController = OccurrenceModule.build().controller;
const timelineController = TimelineModule.build().controller;

timelineRouter.post(
  "/:timeline_id/occurrences",
  occurencesController.create.bind(occurencesController)
);

timelineRouter.get(
  "/patient/:patient_id",
  timelineController.findByPatientId.bind(timelineController)
);

timelineRouter.get(
  "/:id",
  timelineController.findById.bind(timelineController)
);

timelineRouter.patch(
  "/:id",
  timelineController.update.bind(timelineController)
);

timelineRouter.delete(
  "/:id",
  timelineController.delete.bind(timelineController)
);
export { timelineRouter };
