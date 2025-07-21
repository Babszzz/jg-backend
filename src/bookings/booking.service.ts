import { Coordinator } from "../coordinators/coordinator.model";
import { Booking } from "./booking.model";

export const createBooking = async (data: {
  coordinatorId: string;
  name: string;
  email: string;
  weddingDate: Date;
  guestNumber: number;
}) => {
  const coordinator = await Coordinator.findById(data.coordinatorId);
  if (!coordinator) throw new Error("Coordinator not found");

  const dateExists = coordinator.unavailableDates?.some(
    (d) => d.toISOString() === new Date(data.weddingDate).toISOString()
  );

  if (dateExists) throw new Error("Coordinator unavailable on this date");

  const booking = await Booking.create(data);

  coordinator.unavailableDates.push(new Date(data.weddingDate));
  await coordinator.save();

  return booking;
};
