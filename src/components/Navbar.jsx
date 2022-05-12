import React from "react";
import logo from "../assets/navbar/logo.png";
import favourites from "../assets/navbar/favourites.png";
import notification from "../assets/navbar/notification.png";
import nav_cart from "../assets/navbar/nav_cart.png";
import profile from "../assets/navbar/profile.png";

function Navbar() {
  return (
    <div className="navbar">
      <a href="">
        <li>
          <img className="logo" src={logo} alt="ARSH-logo" />
        </li>
      </a>
      <ul className="nav_list">
        <a href="">
          <li>Home</li>
        </a>
        <a href="">
          <li>About</li>
        </a>
        <a href="">
          <li>Shop</li>
        </a>
        <a href="">
          <li>Export</li>
        </a>
        <a href="">
          <li>Blogs</li>
        </a>
        <a href="">
          <li>Contact</li>
        </a>
      </ul>
      <ul className="nav_list2">
        <a href="">
          <li>
            <img
              title="Favourites"
              className="icons"
              src={favourites}
              alt="ARSH-logo"
            />
          </li>
        </a>
        <a href="">
          <li>
            <img
              title="Notification"
              className="icons"
              src={notification}
              alt="ARSH-logo"
            />
          </li>
        </a>
        <a href="">
          <li>
            <img
              title="Cart"
              className="icons"
              src={nav_cart}
              alt="ARSH-logo"
            />
          </li>
        </a>
        <a href="">
          <li>
            <img
              title="profile"
              className="profile"
              src={profile}
              alt="ARSH-logo"
            />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
