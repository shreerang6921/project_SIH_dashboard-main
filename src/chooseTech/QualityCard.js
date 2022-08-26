import React from "react";
import "./QualityCard.css";
import { Link } from "react-router-dom";
import Button from "../Perform/Practice/components/Button";
import { useTechniqueContext } from "../contexts/TechniqueContextProvider";


export default function QualityCard(props) {
const {setTech} = useTechniqueContext();

  const handleClick = ()=>{
    setTech()
  }
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
        <Button name="select" func={props.func} link="/"/>
        <Link to={props.link}><p>Read more</p></Link>
      </div>
    </div>
    </>
  );
}
