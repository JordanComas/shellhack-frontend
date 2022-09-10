import React from "react";
import { Link } from "react-router-dom";
import "../components/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="columns">
        <h5>ABOUT SaveExp</h5>
        <Link to="/contact">Contact us</Link>
        <Link to="/about">About us</Link>
        <Link to="/faqs">FAQs</Link>
      </div>
      <div className="columns">
        <h5>PRIVACY &amp; TERMS</h5>
        <Link to="/terms">Terms of use</Link>
      </div>
    </footer>
  );
};

export default Footer;
