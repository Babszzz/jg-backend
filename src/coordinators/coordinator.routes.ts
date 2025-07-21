import { Router } from "express";
import {
  createCoordinator,
  createMultipleCoordinators,
  getCoordinators,
} from "./coordinator.controller";

const router = Router();

router.get("/", getCoordinators);
router.post("/", createCoordinator);
router.post("/bulk", createMultipleCoordinators);

export default router;
