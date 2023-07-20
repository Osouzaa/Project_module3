import { Router } from "express";
import { OccurrenceModule } from "../../app/occurrences/OccurenceModule";


const occurrenceRouter = Router();
const occurencesController = OccurrenceModule.build().controller;

occurrenceRouter.get(
  "/timeline/:timeline_id",
  occurencesController.findByTimelineId.bind(occurencesController)
);

occurrenceRouter.get(
  "/:id",
  occurencesController.findById.bind(occurencesController)
);

occurrenceRouter.patch(
  "/:id",
  occurencesController.update.bind(occurencesController)
);

occurrenceRouter.delete(
  "/:id",
  occurencesController.delete.bind(occurencesController)
);


export { occurrenceRouter };
