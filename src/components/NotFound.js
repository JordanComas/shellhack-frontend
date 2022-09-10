import React from "react";
import "../components/notfound.css";
import image from "../images/404 picture.webp";

const NotFound = () => {
  return (
    <div className="notfound">
      <img src={image} />
    </div>
  );
};

export default NotFound;
