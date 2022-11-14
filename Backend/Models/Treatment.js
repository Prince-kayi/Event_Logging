const mongoose = require("mongoose");

const treatmentSchema = new mongoose.Schema({
    option: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("treatment", treatmentSchema );