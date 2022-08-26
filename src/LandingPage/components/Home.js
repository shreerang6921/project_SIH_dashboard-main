import React from "react";
import "../styles/Home.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import home from "../images/home.gif";

export default function Home() {
  return <>
    <div id="home" className="main">
      <div  className="left-container ">
        <div className="text"><div className="italic"><i>Read Faster !</i></div>
        <div className="text-slate-200 font-light pl-4 pt-0 mt-0">Lorem Ipsum</div></div>
       
        <div className="box"><div className="box-text"><a href="/signup">Start Now</a></div></div>

      </div>

      <div className="home">
        <img src={home}></img>
      </div>
    </div>

    <div className="icons">

      <div className="icon"><a href="#"><FaFacebook></FaFacebook></a></div>
      <div className="icon"><a href="#"><FaTwitter></FaTwitter></a></div>
      <div className="icon"> <a href="#"> <FaInstagram ></FaInstagram></a> </div>

    </div>

  </>
}
