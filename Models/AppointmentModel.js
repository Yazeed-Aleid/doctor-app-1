const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  date: {
    type: Date,
  },
  doctorId: {
    type: String,
  },
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  patientName: {
    type: String,
  },
  doctorName: {
    type: String,
  },
  reasonForAppointment: {
    type: String,
  },
  AppointmentId: {
    type: String,
  },
});

// const Appointment = mongoose.model('appointment', AppointmentSchema);
module.exports = AppointmentSchema;
