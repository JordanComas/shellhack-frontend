import React from "react";
import "../components/navbar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const token = localStorage.getItem("token");

  return token ? (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>
            Save<b>E</b>xp
          </h1>
        </Link>
      </div>
      <div className="nav-line"></div>
      <div className="nav-links">
        <Link
          className={pathname === "/dashboard" ? "active" : ""}
          to="/dashboard"
        >
          Dashboard
        </Link>
        {/* <Link className={pathname === "/signup" ? "active" : ""} to="/signup">
          Sign Up
        </Link> */}
        {/* <Link className={pathname === "/login" ? "active" : ""} to="/login">
          Login
        </Link> */}
        <Link className={pathname === "/about" ? "active" : ""} to="/about">
          About
        </Link>
        <button onClick={logout}>Log Out</button>
      </div>
    </nav>
  ) : (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>
            Save<b>E</b>xp
          </h1>
        </Link>
      </div>
      <div className="nav-line"></div>
      <div className="nav-links">
        {/* <Link
          className={pathname === "/dashboard" ? "active" : ""}
          to="/dashboard"
        >
          Dashboard
        </Link> */}
        <Link className={pathname === "/signup" ? "active" : ""} to="/signup">
          Sign Up
        </Link>
        <Link className={pathname === "/login" ? "active" : ""} to="/login">
          Login
        </Link>
        <Link className={pathname === "/about" ? "active" : ""} to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
