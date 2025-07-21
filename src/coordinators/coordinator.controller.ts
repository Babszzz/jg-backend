import { Request, Response } from "express";
import { getAllCoordinators } from "./coordinator.service";

export const getCoordinators = (_req: Request, res: Response) => {
  const coordinators = getAllCoordinators();
  res.json(coordinators);
};
