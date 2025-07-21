import { Router } from "express";
import {
  createCoordinator,
  createMultipleCoordinators,
  getCoordinators,
  getOneCoordinator,
} from "./coordinator.controller";

const router = Router();

router.get("/", getCoordinators);
router.post("/", createCoordinator);
router.post("/bulk", createMultipleCoordinators);
router.get("/:id", getOneCoordinator);

export default router;
