const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
  },
  vitalReadings: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("patients", patientSchema);