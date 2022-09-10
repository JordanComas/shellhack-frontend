import React from "react";
import "../components/home.css";
import student from "../images/student.png";
import bulb from "../images/bulb.gif";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-section1">
        <div className="home-section1-left">
          <h1>Save, Invest, and Track</h1>
          <button className="home-btn">Sign up for free</button>
          <p>Easiest &amp; best way to keep track of all your spendings</p>
        </div>
        <div className="home-section1-right">
          <div className="fullCircle"></div>
          <img className="bulb" src={bulb} alt="student" />
          <img className="student" src={student} alt="student" />
        </div>
      </div>
      <div className="home-quote">
        <h3>
          “We’ve got to put a lot of money into changing behavior.” - Bill Gates
        </h3>
      </div>
      <div className="home-section2">
        <div className="home-section2-title">
          <h1>
            What's so special about Save<b>E</b>xp?
          </h1>
        </div>
        <div className="slide1">
          <div className="slide1-left">
            <h1>Save money.</h1>
            <p>hello</p>
            <button className="home-btn">Sign up for free</button>
          </div>
          <div className="slide1-right">
            <h1>IMAGE</h1>
          </div>
        </div>
        <div className="slide1">
          <div className="slide1-left">
            <h1>IMAGE</h1>
          </div>
          <div className="slide1-right">
            <h1>Invest in your future.</h1>
            <p>hello</p>
            <button className="home-btn">Sign up for free</button>
          </div>
        </div>
        <div className="slide1">
          <div className="slide1-left">
            <h1>Track all your spendings.</h1>
            <p>hello</p>
            <button className="home-btn">Sign up for free</button>
          </div>
          <div className="slide1-right">
            <h1>IMAGE</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
