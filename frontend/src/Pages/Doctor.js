import react from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Circles } from "react-loading-icons";

export default function Doctor() {
  const [show, setShow] = useState([]);
  const [AppointmentData, setAppointmentData] = useState({});
  const [doctor, setDoctor] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/api/doctor/allDoctors").then((res) => {
      setDoctor(res.data);
      res.data.forEach((el) => {
        show.push(false);
        setShow(show);
        console.log(res.data);
      });
      setLoading(false);
    });
  }, []);

  function confirmApp(doctorId, index) {
    setLoading(true);
    // console.log("confirm");
    const cookies = document.cookie.split("userId=");
    const userId = cookies[1];
    // console.log(`/api/users/addAppointment/${userId}/${doctorId}`);
    axios
      .post(`/api/users/addAppointment/${userId}/${doctorId}`, AppointmentData)
      .then((res) => {
        if (res.data === "added") {
          show[index] = false;
          setShow([...show]);
          setLoading(false);
        }
      });
  }

  if (loading)
    return (
      <div className="loading">
        <Circles stroke="rgb(50, 93, 141)" />
      </div>
    );

  return (
    <div>
      <div className="background">
        <div className="card-container">
          {doctor.map((item, index) => {
            return (
              <div className="card" key={item._id}>
                <img src={item.picture} alt="img" />
                <br />
                <p className="doctor_name">{item.name}</p>
                <p className="title">{item.specialty}</p>
                <button
                  className="btn"
                  onClick={() => {
                    show[index] = true;
                    setShow([...show]);
                  }}
                >
                  Book Appointment{" "}
                </button>

                <Modal
                  show={show[index]}
                  onHide={() => {
                    show[index] = false;
                    setShow([...show]);
                  }}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Book Appointment with {item.name}</Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      confirmApp(item._id, index);
                      show[index] = false;
                      setShow([...show]);
                    }}
                  >
                    <Modal.Body>
                      <label> Date: </label>
                      <br />
                      <input
                        type="date"
                        onChange={(e) => {
                          AppointmentData.date = e.target.value;
                          setAppointmentData(AppointmentData);
                        }}
                        required
                      />
                      <br />
                      <label> Reason For Appointment: </label>
                      <br />
                      <textarea
                        className="textarea_reason"
                        onChange={(e) => {
                          AppointmentData.reasonForAppointment = e.target.value;
                          setAppointmentData(AppointmentData);
                        }}
                        required
                      ></textarea>
                    </Modal.Body>
                    <Modal.Footer>
                      <button
                        type="submit"
                        variant="primary"
                        // onClick={() => {
                        //   show[index] = false;
                        //   setShow([...show]);
                        // }}
                      >
                        Confirm
                      </button>
                    </Modal.Footer>
                  </form>
                </Modal>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
