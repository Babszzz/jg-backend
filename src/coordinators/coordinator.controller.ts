import { Request, Response } from "express";
import { getAllCoordinators } from "./coordinator.service";
import * as coordinatorService from "./coordinator.service";
import { bulkCoordinatorSchema, coordinatorSchema } from "./coordinator.schema";

export const getCoordinators = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const search = (req.query.search as string) || "";

    const result = await coordinatorService.fetchCoordinators(
      page,
      limit,
      search
    );

    res.json({
      data: result.coordinators,
      currentPage: result.currentPage,
      totalPages: result.totalPages,
      totalItems: result.totalItems,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch coordinators" });
  }
};

export const createCoordinator = async (req: Request, res: Response) => {
  try {
    const parsed = coordinatorSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: "Validation failed",
        issues: parsed.error.issues,
      });
    }

    const saved = await coordinatorService.createCoordinator(parsed.data);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to create coordinator" });
  }
};

export const createMultipleCoordinators = async (
  req: Request,
  res: Response
) => {
  try {
    const parsed = bulkCoordinatorSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: "Validation failed",
        issues: parsed.error.issues,
      });
    }

    const saved = await coordinatorService.createBulkCoordinator(parsed.data);

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to create coordinators" });
  }
};

export const getOneCoordinator = async (req: Request, res: Response) => {
  try {
    const coordinator = await coordinatorService.getCoordinatorById(
      req.params.id
    );

    if (!coordinator) {
      return res.status(404).json({ error: "Coordinator not found" });
    }

    res.json(coordinator);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch coordinator" });
  }
};
