const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  ward: {
    type: String,
  },
  admission: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("admissions", admissionSchema);