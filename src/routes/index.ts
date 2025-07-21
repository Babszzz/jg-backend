import { Router } from "express";
import coordinatorRoutes from "../coordinators/coordinator.routes";

const router = Router();

router.use("/coordinators", coordinatorRoutes);

export default router;
