import "./Navbar.css";
import { Link} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";





const Navbar = () => {
const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">BookingClone</span>
        </Link>

        {/* si un utilisateur existe afficher son nom sinon afficher les buttons Register et Login */}
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <Link
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Register</button>
            </Link>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
