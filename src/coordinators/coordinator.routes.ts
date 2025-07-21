import { Router } from "express";
import { getCoordinators } from "./coordinator.controller";

const router = Router();

router.get("/", getCoordinators);

export default router;
