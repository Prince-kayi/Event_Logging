const mongoose = require("mongoose");

const diagonsiSchema = new mongoose.Schema({
    option: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Diagonsi", diagonsiSchema);