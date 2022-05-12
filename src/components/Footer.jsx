import React from "react";
import logo from "../assets/footer/logo.png";
import location from "../assets/footer/location.png";
import email from "../assets/footer/email.png";
import phone from "../assets/footer/phone.png";
import instagram from "../assets/footer/instagram.png";
import facebook from "../assets/footer/facebook-f.png";
import youtube from "../assets/footer/youtube.png";
import linkedin from "../assets/footer/linkedin-in.png";

function Footer() {
  const handleSubmit = () => {
    alert("Submitted !!");
  };

  return (
    <div className="footer">
      <div className="left">
        <div className="main_list_1">
          <img src={logo} alt="logo" />

          <ul className="list_1">
            <a href="">
              <li>ABOUT</li>
            </a>
            <a href="">
              <li>About Us</li>
            </a>
            <a href="">
              <li>Careers</li>
            </a>
            <a href="">
              <li>Rentals</li>
            </a>
            <a href="">
              <li>Custom Products</li>
            </a>
          </ul>
          <ul className="list_2">
            <a href="">
              <li>HELP</li>
            </a>
            <a href="">
              <li>Payments</li>
            </a>
            <a href="">
              <li>Shipping</li>
            </a>
            <a href="">
              <li>Warranty</li>
            </a>
            <a href="">
              <li>FAQ's</li>
            </a>
          </ul>

          <ul className="list_3">
            <a href="">
              <li>POLICY</li>
            </a>
            <a href="">
              <li>Return Policy</li>
            </a>
            <a href="">
              <li>Terms of Use</li>
            </a>
            <a href="">
              <li>Privacy & Security</li>
            </a>
            <a href="">
              <li>Shipping Policy</li>
            </a>
          </ul>
        </div>

        <div className="main_list_2">
          <span className="location">
            <img src={location} alt="location" />
            <p>
              No. 55, Anitya Apartment, Ground-B, Thindlu Main Rd, Maruthi
              Layout, Kodigehalli, Bengaluru, Karnataka 560097
            </p>
          </span>
          <span className="email">
            <img src={email} alt="location" />
            <p>info@arshpvtltd.com</p>
          </span>
          <span className="phone">
            <img src={phone} alt="location" />
            <p>+91 8310534680</p>
          </span>
        </div>
        <div className="copyright">
          <p>Copyright © 2021 ARSH theme by AKOI. All Rights Reserved.</p>
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>
      <div className="right">
        <h2>Be informed!</h2>
        <h2 className="subtitle">Sign up for newsletter </h2>
        <p className="para">
          Donec placerat, metus sed consectetur viverra, dolor nisl egestas
          ligula, ac gravida turpis
        </p>

        <input type="text" placeholder="Email" />
        <button className="btn" onClick={handleSubmit}>
          Submit Now
        </button>

        <ul className="social_icons">
          <a href="">
            <li>
              <img src={instagram} alt="instagram" />
            </li>
          </a>
          <a href="">
            <li>
              <img src={facebook} alt="facebook" />
            </li>
          </a>
          <a href="">
            <li>
              <img src={youtube} alt="youtube" />
            </li>
          </a>
          <a href="">
            <li>
              <img src={linkedin} alt="linkedin" />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
