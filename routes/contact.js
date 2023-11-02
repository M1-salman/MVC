const express = require("express");
const router = express.Router();
const renderContact = require("../controllers/contact");

router.get("/", renderContact);

module.exports = router;
