import React from "react";
import { useState } from "react";
import axios from "axios";
import header from "../images/MedicalClinic.png";

export default function Home() {
  return (
    <div className="homeContainer">
      <img src={header} alt="header" width="100%" />
    </div>
  );
}
