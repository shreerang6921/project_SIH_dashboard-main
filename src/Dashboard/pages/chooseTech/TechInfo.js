import React from "react";
import "./Word.css";
import Peripheral from "../images/Peripheral.jpg";

export default function TechInfo({title,description})
{
  return (
    <>

    <div id="Word">
      <div className="W-image"><img src={Peripheral}></img></div>
        <div className="W-text">
        <h2>{title}</h2>
        <br></br>
        {description}
    </div>
    </div>
    </>
  );
}