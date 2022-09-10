import React from "react";
import "./about.css";
import about from "../images/aboutus.png";

const About = () => {
  return (
    <div className="about">
      <div className="about1">
        <h1>About Us</h1>
        <p>
          In SaveExp all we care about is our customer's well-being and success
          in life. Nowadays it is easy to acquire many subscriptions and just
          forget about its activation after one or two months; or even managing
          your income and expenses could be hard without the right tools. Our
          app is designed for those who want to keep track of their expenses and
          subscriptions all in one place. Many cool features can be found as
          fully personalized UI for each user experience and even setting goals
          for each day, weeks, months and years.
        </p>
      </div>
      <div>
        <img src={about} width="500" />
      </div>
    </div>
  );
};

export default About;
