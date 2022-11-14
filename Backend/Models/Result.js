const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
    option: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("results", ResultSchema);