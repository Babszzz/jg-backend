import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  coordinatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coordinator",
    required: true,
  },
  name: String,
  email: String,
  weddingDate: Date,
  guestNumber: Number,
});

export const Booking = mongoose.model("Booking", BookingSchema);
