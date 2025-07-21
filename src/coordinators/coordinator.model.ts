import mongoose from "mongoose";

const coordinatorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    photoUrl: { type: String, required: true },
    availability: { type: Boolean, default: true },
    bio: { type: String, required: true },
    unavailableDates: [{ type: Date }],
  },
  { timestamps: true }
);

export const Coordinator = mongoose.model("Coordinator", coordinatorSchema);
