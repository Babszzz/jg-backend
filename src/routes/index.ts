import { Router } from "express";
import coordinatorRoutes from "../coordinators/coordinator.routes";
import bookingRoutes from "../bookings/booking.routes";

const router = Router();

router.use("/coordinators", coordinatorRoutes);
router.use("/bookings", bookingRoutes);

export default router;
