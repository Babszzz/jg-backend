import { z } from "zod";

export const bookingSchema = z
  .object({
    coordinatorId: z.string(),
    name: z.string().min(1),
    email: z.string().email(),
    weddingDate: z.coerce.date(),
    guestNumber: z.number().min(1),
  })
  .strict();

export type BookingInput = z.infer<typeof bookingSchema>;
