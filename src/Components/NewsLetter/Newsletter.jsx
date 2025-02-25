import React from "react";
import "./newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>get exclusive offer on your email</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
