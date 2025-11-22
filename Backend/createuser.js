const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose.connect("mongodb://localhost:27017/campus_clubs")
.then(async () => {
    const hashedPassword = await bcrypt.hash("123456", 10);

    await User.create({
        email: "student@gmail.com",
        password: hashedPassword
    });

    console.log("User Created Successfully");
    mongoose.disconnect();
});
