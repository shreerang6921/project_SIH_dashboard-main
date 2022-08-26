import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import WhyChooseUs from "./WhyChooseUs"
import Footer from "./footer/Footer";
export default function Main() {
  return (
    <div>
    <Navbar />
      <Home />
      <WhyChooseUs/>
      <Footer/>
    </div>
  );
}
