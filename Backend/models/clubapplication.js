const mongoose = require("mongoose");

const clubApplicationSchema = new mongoose.Schema({
    club: String,
    name: String,
    roll: String,
    branch: String,
    year: String,
    email: String,
    reason: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("ClubApplication", clubApplicationSchema);
