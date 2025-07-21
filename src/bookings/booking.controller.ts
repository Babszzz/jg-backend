import { Request, Response } from "express";
import * as bookingServices from "./booking.service";
import { bookingSchema } from "./booking.schema";

export const bookCoordinator = async (req: Request, res: Response) => {
  try {
    const validated = bookingSchema.safeParse(req.body);
    const booking = await bookingServices.createBooking(req.body);
    res.status(201).json(booking);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};
