const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AppointmentModel = require("./AppointmentModel");

const DoctorSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "please enter an email"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "please enter an password"],
      minlength: [6, "enter more than 6"],
    },
    specialty: {
      type: String,
    },
    picture: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-kGxdmH-hxP8ej_LHeN0877j0oZqSgJ5HTw&usqp=CAU",
    },
    appointments: { type: [AppointmentModel], default: [] },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("doctor", DoctorSchema);
module.exports = Doctor;
