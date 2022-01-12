const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
dotenv.config();

// Router

const doctorRoutes = require("./Routes/doctorRoute");
const usersRouter = require("./Routes/userRoute");

// USE ROUTERS WITH PATH

app.use(express.static("frontend/build"));
app.use("/api/doctor", doctorRoutes);
app.use("/api/users", usersRouter);
app.use("/home", (req, res) => {
  res.send("Welcome to the Doctor App");
});

const uri = process.env.DB_URL;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once(
  "open",
  () => console.log("Connected to DB"),
  connection.on("disconnected", () => console.log("mongo disconnected")),
  connection.on("error", (err) => {
    console.log("connection error", err);
  })
);

app.use(express.static("frontend/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Connected on= http://localhost:${PORT}`);
});
