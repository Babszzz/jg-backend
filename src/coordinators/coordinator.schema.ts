import { z } from "zod";

export const coordinatorSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    location: z.string().min(1, "Location is required"),
    price: z.number().positive("Price must be a positive number"),
    photoUrl: z.url("Photo must be a valid URL"),
    availability: z.boolean().optional(),
    bio: z.string().min(10, "Bio is required"),
    unavailableDates: z.array(z.coerce.date()).optional(),
  })
  .strict();

export const bulkCoordinatorSchema = z.array(coordinatorSchema);

export type CoordinatorInput = z.infer<typeof coordinatorSchema>;
