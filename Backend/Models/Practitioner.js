const mongoose = require("mongoose");

const practitionerSchema = new mongoose.Schema({
  practitionerId: {
    type: String,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  jobDescription: {
    type:String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("practitioners", practitionerSchema);