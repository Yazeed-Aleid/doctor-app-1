import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Circles } from "react-loading-icons";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

function DoctorPage() {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [doctor, setDoctor] = useState();
  const [appointment, setAppointment] = useState([]);

  // const [loading, setLoading] = useState(true);

  const cookies = document.cookie.split("userId=");
  const userId = cookies[1];
  console.log(userId);

  useEffect(() => {
    axios.get(`api/users/allAppointment/${userId}`).then((res) => {
      console.log(res.data);
      setDoctor(res.data);
      console.log(res.data.appointments);
      setAppointment(res.data.appointments);

      setLoading(false);
    });
  }, []);

  // doctor.map((item)=>{
  //   appointment.push(item.appointments)
  // })
  if (loading)
    return (
      <div className="loading">
        <Circles stroke="rgb(50, 93, 141)" />
      </div>
    );

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Patient Name ", width: 150 },
    { field: "col2", headerName: " Reason for Appointment ", width: 150 },
    { field: "col3", headerName: " Appointement Date ", width: 150 },
    { field: "col4", headerName: " Delete ", width: 150 },
  ];

  const rows: GridRowsProp = appointment.map((item, i) => {
    return {
      id: i,
      col1: item.patientName,
      col2: item.reasonForAppointment,
      col3: item.date,
      col4: "delete",
    };
  });

  return (
    <div>
      <div style={{ height: 500, width: "70%", marginLeft: "15%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default DoctorPage;
