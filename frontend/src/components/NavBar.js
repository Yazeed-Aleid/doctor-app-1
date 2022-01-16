import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ backgroundColor: "red" }}>
      <ul>
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
    </div>
  );
}
