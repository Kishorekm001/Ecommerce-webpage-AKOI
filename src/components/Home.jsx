import React from "react";
import Navbar from "../components/Navbar";
import Home_header from "../components/Home_header";
import Aside from "../components/Aside";
import ItemCard from "../components/ItemCard";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {
  const shop_section = {
    display: "flex",
    width: "95%",
    justifyContent: "space-around",
    margin: "0px auto 0px auto",
  };
  return (
    <div>
      <Home_header />
      <div style={shop_section}>
        <Aside />
        <ItemCard />
      </div>

      <About />
      <Footer />
    </div>
  );
}

export default Home;
