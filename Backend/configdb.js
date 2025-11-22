const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/campus_clubs");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("MongoDB Connection Failed", error);
    }
};

module.exports = connectDB;
