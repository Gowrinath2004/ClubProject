const User = require("../models/User");
const ClubApplication = require("../models/ClubApplication");
const bcrypt = require("bcryptjs");

// ---------------------- LOGIN ----------------------
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.json({ success: false, message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
        return res.json({ success: false, message: "Invalid password!" });

    res.json({ success: true, message: "Login Successful" });
};

// ---------------------- REGISTER CLUB ----------------------
exports.registerClub = async (req, res) => {
    try {
        const application = new ClubApplication(req.body);
        await application.save();

        res.json({ success: true, message: "Application Submitted Successfully" });

    } catch (error) {
        res.json({ success: false, message: "Error saving application" });
    }
};
