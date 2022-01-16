import "./App.css";
import Home from "./Pages/Home";
import SiginIn from "./Pages/Signin";
import SiginUp from "./Pages/Signup";
import SigninDoc from './Pages/SigninDoc'
import Doctor from "./Pages/Doctor";
import Profile from "./Pages/Profile"
import DoctorPage from './Pages/DoctorPage'
import NavBar from "./components/NavBar";
import SignUpDoctor from "./Pages/SignUpDoctor"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
       <NavBar/>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/doctorProfile" element={<DoctorPage />}></Route>
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
