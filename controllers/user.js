const Users = require("../models/user");

async function registerUser(req, res) {
  const { name } = req.body;
  const newUser = new Users({ name });
  await newUser.save();
}
async function getAllUsers(req, res) {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { registerUser, getAllUsers };
