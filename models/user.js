const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users