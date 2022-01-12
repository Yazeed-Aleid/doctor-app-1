const express = require("express");
const router = express.Router();
const randomstring = require("randomstring");
const users = require("../Models/userModel");
const doctors = require("../Models/DoctorModel");

router.use(express.json());

// ROUTER FOR REGISTER NEW USER

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  let emailExist = await users.findOne({ email: email.toLowerCase() });

  if (emailExist) {
    res.send("E-mail is already used");
    return;
  }
  users
    .create({
      name: name,
      email: email.toLowerCase(),
      password: password,
    })
    .then(() => {
      res.send("done");
    })
    .catch((err) => {
      if (err) res.send("email is already used");
    });
});

// ROUTER FOR CHECK SIGN IN

router.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  let userExist = await users.findOne({ email: email.toLowerCase() });
  if (userExist == null) {
    res.send("invalid email/password");
    return;
  }

  if (userExist.password == password) {
    res.cookie("userId", userExist._id.toString());
    res.json(userExist._id);
  } else {
    res.send("invalid email/password");
    return;
  }
});

// GET USER APPOINTMENT

router.get("/allAppointment/:userId", async (req, res) => {
  const _id = req.params.userId;
  const Appointments = await users.findOne({ _id });
  res.send(Appointments);
});


// ADD APPOINTMENT

router.post("/addAppointment/:userId/:doctorId", async (req, res) => {
  const { date, patientName, reasonForAppointment } = req.body;
  const AppointmentId = randomstring.generate({
    length: 12,
    charset: "alphabetic",
  });
  const d = await doctors.findById(req.params.doctorId);
  const u = await users.findById(req.params.userId);
  let userAppointments = u.appointments;
  userAppointments.push({
    date,
    doctorId: d._id,
    userId: u._id,
    doctorName: d.name,
    patientName: u.name,
    reasonForAppointment,
    AppointmentId,
  });
  u.appointments = await userAppointments;
  u.save();

  let doctorAppointments = d.appointments;
  doctorAppointments.push({
    date,
    doctorId: d._id,
    userId: u._id,
    doctorName: d.name,
    patientName: u.name,
    reasonForAppointment,
    AppointmentId,
  });
  d.appointments = await doctorAppointments;
  d.save();

  res.send("added");
});

// DELETE APPOINTMENT

router.delete(
  "/deleteAppointment/:userId/:doctorId/:appointmentId",
  async (req, res) => {
    const d = await doctors.findById(req.params.doctorId);
    const u = await users.findById(req.params.userId);
    const _id = req.params.appointmentId;
    let doctorAppointment = d.appointments;
    let userAppointment = u.appointments;
    doctorAppointment = doctorAppointment.filter((e) => {
      return e.AppointmentId !== _id;
    });
    d.appointments = doctorAppointment;
    d.save();

    userAppointment = userAppointment.filter((e) => {
      return e.AppointmentId !== _id;
    });
    u.appointments = userAppointment;
    u.save();

    res.send("deleted");
  }
);


module.exports = router;
