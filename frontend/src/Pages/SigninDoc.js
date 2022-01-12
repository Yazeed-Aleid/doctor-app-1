import react from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SigninStyle.css";

export default function SigninDoc() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();
  
  
  const Login = () => {

    const LoginDoc = {
      email: email,
      password: password
    };
    axios.post('/api/doctor/signIn',LoginDoc)
    .then((res)=>{
      console.log(res);

        if (res.data!=="invalid email/password" ) {
            nav("/doctor");
          } else {
            setErrorMessage(res.data);
            
          }
    })
    
  
  };


  
  return (
    <div className="Signin">
      <div className="formContainer">
        <form>
        <label>SingIn</label>

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

        </form>
        <button type="submit" className="btn" id="btn" onClick={()=>Login()}>SignIn</button>



      </div>
    </div>
  );
}
