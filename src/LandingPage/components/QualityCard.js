import React from "react";
import "../styles/QualityCard.css";
export default function QualityCard(props) {
  return (
    <div className="cards bg-white">
      <div><div className="logo1">{props.logo}</div></div>
    <div>
      <div className="title">
      <h1>{props.title}</h1>
      </div>
      <p>{props.desc}</p>
    </div>
    </div>
  );
}
