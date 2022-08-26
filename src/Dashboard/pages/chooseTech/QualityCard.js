import React from "react";
import "./QualityCard.css";
import { Link } from "react-router-dom";
import Button from "../../../Perform/Practice/components/Button";



export default function QualityCard(props) {


  return (
    <>
    <div className="cards">
      <div>
        <div className="image">
          <img src={props.images}></img>
          </div>
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <p>{props.desc}</p>
        <br></br>
        <Link to={props.link}><button className="button">Read more</button></Link>
       
      </div>
    </div>
    </>
  );
}
