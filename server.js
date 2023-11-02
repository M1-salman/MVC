const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const connectDB = require("./dbConnection");

//Connecting to MongoDB 
connectDB().then(() => console.log("DB Connected"));

//Middleware
app.use(express.json());

//Using view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Serving Static files
app.use("/", express.static(path.join(__dirname, "public")));

//Routes
app.use("/api/user", userRoutes);
app.use("/contact", contactRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
