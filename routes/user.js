const express = require("express");
const router = express.Router();
const { registerUser, getAllUsers } = require("../controllers/user");

router.post("/register", registerUser);

router.get("/getUsers", getAllUsers);

module.exports = router;
