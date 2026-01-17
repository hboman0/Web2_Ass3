const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  guests: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  specialRequests: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);
