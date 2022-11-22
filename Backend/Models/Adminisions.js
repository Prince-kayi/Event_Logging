const mongoose = require("mongoose");
const { Schema } = mongoose;

const admissionSchema = new Schema({
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