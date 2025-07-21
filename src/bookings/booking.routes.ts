import express from "express";
import { bookCoordinator } from "./booking.controller";

const router = express.Router();

router.post("/", bookCoordinator);

export default router;
