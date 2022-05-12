import React from "react";
import logo from "../assets/about/logo.png";

function About() {
  return (
    <div className="about">
      <img src={logo} alt="logo" />
      <h1>
        At ARSH, we provide all-natural products that your plant needs to grow,
        be it your home plant, backyard garden, or farm.
      </h1>
    </div>
  );
}

export default About;
