const express = require("express");
const router = express.Router();
const { loginUser, registerClub } = require("../controllers/clubcontroller");

router.post("/login", loginUser);
router.post("/register", registerClub);

module.exports = router;
