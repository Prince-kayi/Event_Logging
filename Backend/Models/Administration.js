const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    Id:{
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("administration", adminSchema);