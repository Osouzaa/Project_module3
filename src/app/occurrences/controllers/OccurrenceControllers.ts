import { Request, Response } from "express";
import { OccurrenceService } from "../services/OccurenceServices";
import { makeCreateOccurrenceSchema } from "../schemas/createOccurenceSchema";
import { makeDeleteOccurrenceSchema } from "../schemas/DeleteOccurenceSchema";

class OccurrenceController {
  constructor(private service: OccurrenceService) {}

  async create(req: Request, res: Response) {
    const {
      body,
      params: { timeline_id },
    } = req;

    try {
      await makeCreateOccurrenceSchema().validate(body);
    } catch (error: any) {
      return res.status(400).json({
        erros: error.erros,
      });
    }
    const result = (await this.service.create({
      ...body,
      timeline_id: timeline_id,
    })) as any;

    if ("error" in result) {
      return res.status(result.status).json(result);
    }
    return res.status(201).json(result);
  }

  async findByTimelineId(req: Request, res: Response) {
    try {
      const timeline_id = req.params.id;
      const occurrences = await this.service.findOccurrenceByTimelineId(
        timeline_id
      );

      res.status(200).json(occurrences);
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "Internal server error",
      });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const OccurenceId = req.params.id;
      const Occurence = await this.service.findIdOccurrence(OccurenceId);
      res.status(200).json(Occurence);
      
    } catch (error) {

      res.status(500).json({
        error: true,
        message: "Internal Server Error",
      });
    }
  }

  async delete(req: Request, res: Response) {
    const { params } = req;

    try {
      await makeDeleteOccurrenceSchema().validate(params);
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors });
    }

    const result = (await this.service.delete(params.id)) as any;
    if ("error" in result) {
      return res.status(result.status).json(result);
    }

    return res.status(200).json({ message: "Occurrence deleted successfully" });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const payload = req.body;

    const result = await this.service.updateOccurrenceId(id, payload);

    const { statusCode, message, data } = result;

    res.status(statusCode).json({
      message,
      data,
    });
  }
}

export { OccurrenceController };
