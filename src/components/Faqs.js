import React from "react";
import "../components/faqs.css";
import faqs from "../images/faqs.png";

const Faqs = () => {
  return (
    <div className="faqs-main">
      <div className="faqs">
        <h1>FAQs (Common Questions)</h1>
        <h3>Does SaveExp have a mobile app?</h3>
        <p>No, but we will release one in the future</p>
        <h3>How much does it cost to use these services?</h3>
        <p>It is completely free for all our users</p>
        <h3>Does it have a minimun age for users?</h3>
        <p>Yes, it is built for people over 15 years</p>
      </div>
      <div>
        <img src={faqs} width="400" />
      </div>
    </div>
  );
};

export default Faqs;
