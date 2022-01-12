import "./App.css";
import Home from "./Pages/Home";
import SiginIn from "./Pages/Signin";
import SiginUp from "./Pages/Signup";
import SigninDoc from './Pages/SigninDoc'
import Doctor from "./Pages/Doctor";
import Profile from "./Pages/Profile"
import NavBar from "./components/NavBar";
import SignUpDoctor from "./Pages/SignUpDoctor"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/doctor">Doctor</Link>
          </li>
          <li>
          <Link to="/profile">Profile</Link>
        </li>
          <li>
            <Link to="/signin">SignIn</Link>
          </li>
        

          <li>
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signin" element={<SiginIn />}></Route>
          <Route path="/SigninDoc" element={<SigninDoc />}></Route>
          <Route path="/signup" element={<SiginUp />}></Route>
          <Route path="/signupDoctor" element={<SignUpDoctor/>}></Route>
          <Route path="/doctor" element={<Doctor />}></Route>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
