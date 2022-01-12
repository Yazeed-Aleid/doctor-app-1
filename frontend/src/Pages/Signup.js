import react from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SigninStyle.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const reg = () => {
    const SignupUser = {
      name: name,
      email: email,
      password: password,
    };
  };

  function checkAndSubmit() {
    axios.post("/api/users/register", { name, email, password }).then((res) => {
      console.log(res.data);
      if (res.data === "done") {
        navigate("/signin");
      } else {
        setErrorMessage(res.data);
      }
    });
  }

  return (
    <div className="Signin">
      <div className="formContainer">
        {errorMessage !== "" ? <div>{errorMessage} </div> : null}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            checkAndSubmit();
          }}
        >
          <label>SignUp</label>

          <br />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <button type="submit" className="btn">
            SignUp
          </button>
        </form>
          <br/>
        <Link to="/signupDoctor">
          {" "}
          <h6>Register as Doctor</h6>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
