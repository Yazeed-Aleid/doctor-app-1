import react from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SigninStyle.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const Login = () => {
    const LoginUser = {
      email: email,
      password: password,
    };
    axios.post("/api/users/signIn", LoginUser).then((res) => {
      if (res.data !== "invalid email/password") {
        nav("/doctor");
      } else {
        setErrorMessage(res.data);
      }
    });
  };

  return (
    <div className="Signin">
      <div className="formContainer">
        {errorMessage !== "" ? <div>{errorMessage} </div> : null}

        <form>
          <label>SignIn</label>

          <br />

          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            type="submit"
            className="btn"
            id="btn"
            onClick={(e) => {
              e.preventDefault();
              Login();
            }}
          >
            SignIn
          </button>
        </form>

        <Link to="/SigninDoc">
          <br/><h6>sign in as Doctor</h6>
        </Link>
      </div>
    </div>
  );
}
